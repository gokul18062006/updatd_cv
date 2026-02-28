import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import ParticleField from './ParticleField';
import FloatingGeometry from './FloatingGeometry';

export default function Scene() {
    return (
        <div className="canvas-container">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
                <pointLight position={[-10, -10, 5]} intensity={0.3} color="#06b6d4" />
                <ParticleField />
                <FloatingGeometry />
                <Preload all />
            </Canvas>
        </div>
    );
}
