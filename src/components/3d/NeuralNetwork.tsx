import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NODE_COUNT = 40;
const CONNECTION_DISTANCE = 2.5;

export default function NeuralNetwork() {
    const pointsRef = useRef<THREE.Points>(null);
    const linesRef = useRef<THREE.LineSegments>(null);

    const nodePositions = useMemo(() => {
        const pos = new Float32Array(NODE_COUNT * 3);
        for (let i = 0; i < NODE_COUNT; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 6;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
        }
        return pos;
    }, []);

    const linePositions = useMemo(() => {
        const connections: number[] = [];
        for (let i = 0; i < NODE_COUNT; i++) {
            for (let j = i + 1; j < NODE_COUNT; j++) {
                const dx = nodePositions[i * 3] - nodePositions[j * 3];
                const dy = nodePositions[i * 3 + 1] - nodePositions[j * 3 + 1];
                const dz = nodePositions[i * 3 + 2] - nodePositions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist < CONNECTION_DISTANCE) {
                    connections.push(
                        nodePositions[i * 3], nodePositions[i * 3 + 1], nodePositions[i * 3 + 2],
                        nodePositions[j * 3], nodePositions[j * 3 + 1], nodePositions[j * 3 + 2]
                    );
                }
            }
        }
        return new Float32Array(connections);
    }, [nodePositions]);

    const nodeGeo = useMemo(() => {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
        return g;
    }, [nodePositions]);

    const lineGeo = useMemo(() => {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
        return g;
    }, [linePositions]);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (pointsRef.current) {
            pointsRef.current.rotation.y = t * 0.05;
            pointsRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
        }
        if (linesRef.current) {
            linesRef.current.rotation.y = t * 0.05;
            linesRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
        }
    });

    return (
        <group position={[0, 6, -8]}>
            <points ref={pointsRef} geometry={nodeGeo}>
                <pointsMaterial
                    size={0.1}
                    color="#ec4899"
                    transparent
                    opacity={0.7}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </points>
            <lineSegments ref={linesRef} geometry={lineGeo}>
                <lineBasicMaterial
                    color="#8b5cf6"
                    transparent
                    opacity={0.08}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </lineSegments>
        </group>
    );
}
