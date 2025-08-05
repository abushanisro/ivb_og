import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const Bulb = ({ position, scale }: { position: [number, number, number], scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshPhongMaterial 
          color="#2ED3C2" 
          transparent 
          opacity={0.3}
          shininess={100}
        />
        {/* Inner glow */}
        <mesh scale={0.8}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial 
            color="#2ED3C2" 
            transparent 
            opacity={0.6}
          />
        </mesh>
        {/* Core */}
        <mesh scale={0.3}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial 
            color="#FFFFFF" 
            transparent 
            opacity={0.9}
          />
        </mesh>
      </mesh>
    </Float>
  );
};

const BulbScene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      
      <Bulb position={[-8, 4, -5]} scale={0.5} />
      <Bulb position={[8, -2, -3]} scale={0.3} />
      <Bulb position={[-5, -4, -4]} scale={0.4} />
      <Bulb position={[6, 3, -6]} scale={0.6} />
      <Bulb position={[0, 0, -8]} scale={0.8} />
    </>
  );
};

const ThreeBulbBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-20">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <BulbScene />
      </Canvas>
    </div>
  );
};

export default ThreeBulbBackground;