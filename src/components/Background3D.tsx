import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const TechGrid = () => {
  const gridRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    gridRef.current.position.z = (t * 2) % 10;
  });

  return (
    <group ref={gridRef}>
      <gridHelper args={[100, 50, "#00f2fe", "#001a1d"]} rotation={[Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
        <meshBasicMaterial attach="material" transparent opacity={0.3} color="#00f2fe" />
      </gridHelper>
      <gridHelper args={[100, 50, "#00f2fe", "#001a1d"]} rotation={[Math.PI / 2, 0, 0]} position={[0, -10, -10]}>
        <meshBasicMaterial attach="material" transparent opacity={0.3} color="#00f2fe" />
      </gridHelper>
    </group>
  );
};

const DataLines = () => {
  const count = 40;
  const lines = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 50
      ] as [number, number, number],
      speed: Math.random() * 0.1 + 0.05,
      length: Math.random() * 10 + 5,
      color: Math.random() > 0.5 ? "#00f2fe" : "#00fe9b"
    }));
  }, []);

  return (
    <group>
      {lines.map((line, i) => (
        <Float key={i} speed={2} rotationIntensity={0} floatIntensity={1}>
          <mesh position={line.position}>
            <boxGeometry args={[0.05, 0.05, line.length]} />
            <meshStandardMaterial color={line.color} emissive={line.color} emissiveIntensity={2} transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const FloatingCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.rotation.z = t * 0.1;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -15]}>
      <icosahedronGeometry args={[6, 1]} />
      <MeshDistortMaterial
        color="#001a1a"
        emissive="#00f2fe"
        emissiveIntensity={0.5}
        distort={0.4}
        speed={2}
        roughness={0}
        metalness={1}
        wireframe
      />
    </mesh>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden select-none pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#000d0f] via-black to-[#000d0f] opacity-80" />
      
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={75} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00f2fe" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00fe9b" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <TechGrid />
        <DataLines />
        <FloatingCore />
        
        <fog attach="fog" args={['#000000', 10, 45]} />
      </Canvas>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60" />
      <div className="absolute inset-0 bg-[#00f2fe]/5 mix-blend-overlay animate-pulse" />
    </div>
  );
};

export default Background3D;