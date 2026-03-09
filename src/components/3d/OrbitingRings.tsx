import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function OrbitRing({ radius, speed, color, tilt }: {
    radius: number;
    speed: number;
    color: string;
    tilt: [number, number, number];
}) {
    const ringRef = useRef<THREE.Mesh>(null);
    const orbRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed;
        if (orbRef.current) {
            orbRef.current.position.x = Math.cos(t) * radius;
            orbRef.current.position.z = Math.sin(t) * radius;
        }
    });

    return (
        <group rotation={tilt}>
            {/* Ring path */}
            <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[radius, 0.008, 8, 64]} />
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.2}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>
            {/* Orbiting sphere */}
            <mesh ref={orbRef}>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.9}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </group>
    );
}

function GlowCore() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (!meshRef.current) return;
        const t = clock.getElapsedTime();
        const s = 1 + Math.sin(t * 2) * 0.1;
        meshRef.current.scale.set(s, s, s);
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshBasicMaterial
                color="#8b5cf6"
                transparent
                opacity={0.4}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
}

export default function OrbitingRings() {
    return (
        <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8}>
            <group position={[-5, -2, -4]}>
                <GlowCore />
                <OrbitRing
                    radius={1.2}
                    speed={0.6}
                    color="#8b5cf6"
                    tilt={[0.5, 0, 0]}
                />
                <OrbitRing
                    radius={1.0}
                    speed={0.9}
                    color="#3b82f6"
                    tilt={[1.2, 0.5, 0.3]}
                />
                <OrbitRing
                    radius={0.8}
                    speed={1.3}
                    color="#06b6d4"
                    tilt={[-0.3, 1.0, 0.5]}
                />
            </group>
        </Float>
    );
}
