import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
    position: [number, number, number];
    color: string;
    speed?: number;
    scale?: number;
    shape: 'icosahedron' | 'octahedron' | 'torus' | 'dodecahedron';
}

function FloatingShape({ position, color, speed = 1, scale = 1, shape }: FloatingShapeProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (!meshRef.current) return;
        const t = clock.getElapsedTime() * speed;
        meshRef.current.rotation.x = t * 0.3;
        meshRef.current.rotation.y = t * 0.4;
        meshRef.current.rotation.z = t * 0.2;
    });

    const geometry = (() => {
        switch (shape) {
            case 'icosahedron':
                return <icosahedronGeometry args={[1, 1]} />;
            case 'octahedron':
                return <octahedronGeometry args={[1, 0]} />;
            case 'torus':
                return <torusGeometry args={[1, 0.4, 16, 32]} />;
            case 'dodecahedron':
                return <dodecahedronGeometry args={[1, 0]} />;
        }
    })();

    return (
        <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1.5}>
            <mesh ref={meshRef} position={position} scale={scale}>
                {geometry}
                <MeshDistortMaterial
                    color={color}
                    transparent
                    opacity={0.15}
                    wireframe
                    distort={0.3}
                    speed={2}
                />
            </mesh>
        </Float>
    );
}

export default function FloatingGeometry() {
    return (
        <group>
            <FloatingShape
                position={[-5, 3, -5]}
                color="#8b5cf6"
                speed={0.5}
                scale={1.5}
                shape="icosahedron"
            />
            <FloatingShape
                position={[6, -2, -8]}
                color="#3b82f6"
                speed={0.7}
                scale={1.2}
                shape="octahedron"
            />
            <FloatingShape
                position={[-3, -4, -6]}
                color="#06b6d4"
                speed={0.4}
                scale={1.0}
                shape="torus"
            />
            <FloatingShape
                position={[4, 4, -10]}
                color="#ec4899"
                speed={0.6}
                scale={0.9}
                shape="dodecahedron"
            />
            <FloatingShape
                position={[0, -5, -7]}
                color="#8b5cf6"
                speed={0.3}
                scale={0.7}
                shape="icosahedron"
            />
        </group>
    );
}
