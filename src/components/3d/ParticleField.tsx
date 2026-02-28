import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 600;

export default function ParticleField() {
    const meshRef = useRef<THREE.Points>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    const [positions, colors, sizes] = useMemo(() => {
        const pos = new Float32Array(PARTICLE_COUNT * 3);
        const col = new Float32Array(PARTICLE_COUNT * 3);
        const siz = new Float32Array(PARTICLE_COUNT);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 30;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

            const colorChoice = Math.random();
            if (colorChoice < 0.33) {
                col[i * 3] = 0.545;
                col[i * 3 + 1] = 0.361;
                col[i * 3 + 2] = 0.965;
            } else if (colorChoice < 0.66) {
                col[i * 3] = 0.231;
                col[i * 3 + 1] = 0.510;
                col[i * 3 + 2] = 0.965;
            } else {
                col[i * 3] = 0.024;
                col[i * 3 + 1] = 0.714;
                col[i * 3 + 2] = 0.831;
            }

            siz[i] = Math.random() * 3 + 1;
        }

        return [pos, col, siz];
    }, []);

    useFrame(({ clock, pointer }) => {
        if (!meshRef.current) return;

        mouseRef.current.x += (pointer.x * 2 - mouseRef.current.x) * 0.01;
        mouseRef.current.y += (pointer.y * 2 - mouseRef.current.y) * 0.01;

        const time = clock.getElapsedTime();
        const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3;
            posArray[i3 + 1] += Math.sin(time * 0.3 + i * 0.1) * 0.003;
            posArray[i3] += Math.cos(time * 0.2 + i * 0.05) * 0.002;
        }

        meshRef.current.geometry.attributes.position.needsUpdate = true;
        meshRef.current.rotation.y = mouseRef.current.x * 0.1;
        meshRef.current.rotation.x = mouseRef.current.y * 0.05;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={PARTICLE_COUNT}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={PARTICLE_COUNT}
                    array={colors}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={PARTICLE_COUNT}
                    array={sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                vertexColors
                transparent
                opacity={0.7}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}
