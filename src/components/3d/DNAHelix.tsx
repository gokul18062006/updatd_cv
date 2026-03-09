import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const HELIX_POINTS = 120;
const HELIX_RADIUS = 0.4;
const HELIX_HEIGHT = 8;
const HELIX_TURNS = 4;

export default function DNAHelix() {
    const group1Ref = useRef<THREE.Points>(null);
    const group2Ref = useRef<THREE.Points>(null);
    const linesRef = useRef<THREE.LineSegments>(null);

    const [positions1, positions2, linePositions] = useMemo(() => {
        const pos1 = new Float32Array(HELIX_POINTS * 3);
        const pos2 = new Float32Array(HELIX_POINTS * 3);
        const lines = new Float32Array(HELIX_POINTS * 6); // pairs of points

        for (let i = 0; i < HELIX_POINTS; i++) {
            const t = (i / HELIX_POINTS) * Math.PI * 2 * HELIX_TURNS;
            const y = (i / HELIX_POINTS) * HELIX_HEIGHT - HELIX_HEIGHT / 2;

            // Strand 1
            pos1[i * 3] = Math.cos(t) * HELIX_RADIUS;
            pos1[i * 3 + 1] = y;
            pos1[i * 3 + 2] = Math.sin(t) * HELIX_RADIUS;

            // Strand 2 (offset by PI)
            pos2[i * 3] = Math.cos(t + Math.PI) * HELIX_RADIUS;
            pos2[i * 3 + 1] = y;
            pos2[i * 3 + 2] = Math.sin(t + Math.PI) * HELIX_RADIUS;

            // Connecting lines (rungs) every 4th point
            lines[i * 6] = pos1[i * 3];
            lines[i * 6 + 1] = pos1[i * 3 + 1];
            lines[i * 6 + 2] = pos1[i * 3 + 2];
            lines[i * 6 + 3] = pos2[i * 3];
            lines[i * 6 + 4] = pos2[i * 3 + 1];
            lines[i * 6 + 5] = pos2[i * 3 + 2];
        }

        return [pos1, pos2, lines];
    }, []);

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        if (group1Ref.current) {
            group1Ref.current.rotation.y = time * 0.15;
        }
        if (group2Ref.current) {
            group2Ref.current.rotation.y = time * 0.15;
        }
        if (linesRef.current) {
            linesRef.current.rotation.y = time * 0.15;
        }
    });

    const geo1 = useMemo(() => {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(positions1, 3));
        return g;
    }, [positions1]);

    const geo2 = useMemo(() => {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(positions2, 3));
        return g;
    }, [positions2]);

    const lineGeo = useMemo(() => {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
        return g;
    }, [linePositions]);

    return (
        <group position={[5, 0, -6]} rotation={[0.3, 0, 0.2]}>
            <points ref={group1Ref} geometry={geo1}>
                <pointsMaterial
                    size={0.06}
                    color="#8b5cf6"
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </points>
            <points ref={group2Ref} geometry={geo2}>
                <pointsMaterial
                    size={0.06}
                    color="#06b6d4"
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </points>
            <lineSegments ref={linesRef} geometry={lineGeo}>
                <lineBasicMaterial
                    color="#3b82f6"
                    transparent
                    opacity={0.12}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </lineSegments>
        </group>
    );
}
