import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const NeuralNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);
  const particlesCount = 350;
  const maxDistance = 2.5;

  const { positions, lines } = useMemo(() => {
    const coords = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      coords[i * 3]     = (Math.random() - 0.5) * 15;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 15;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    const linePositions: number[] = [];
    for (let i = 0; i < particlesCount; i++) {
      for (let j = i + 1; j < particlesCount; j++) {
        const dx = coords[i * 3]     - coords[j * 3];
        const dy = coords[i * 3 + 1] - coords[j * 3 + 1];
        const dz = coords[i * 3 + 2] - coords[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          linePositions.push(
            coords[i * 3], coords[i * 3 + 1], coords[i * 3 + 2],
            coords[j * 3], coords[j * 3 + 1], coords[j * 3 + 2]
          );
        }
      }
    }

    return { positions: coords, lines: new Float32Array(linePositions) };
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
      
      // Depth scroll parallax effect
      // Calculate target Y position based on window scroll
      // As the user scrolls down, the neural network moves up slightly (parallax)
      const scrollY = window.scrollY;
      const targetY = scrollY * 0.002; 
      
      // Smooth interpolation for silky parallax
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#E87C52"
          size={0.08}
          transparent
          opacity={1}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color="#F4D3AE"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};

const NeuralNetworkBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
          <NeuralNetwork />
        </Float>
      </Canvas>
    </div>
  );
};

export default NeuralNetworkBackground;
