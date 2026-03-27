import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const CoreObject = () => {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const particlesCount = 200;
  const { positions } = useMemo(() => {
    const coords = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
       const theta = Math.random() * 2 * Math.PI;
       const phi = Math.acos((Math.random() * 2) - 1);
       // Orbiting radius between 1.5 and 2.5
       const r = 1.5 + Math.random() * 1.0;
       coords[i*3] = r * Math.sin(phi) * Math.cos(theta);
       coords[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
       coords[i*3+2] = r * Math.cos(phi);
    }
    return { positions: coords };
  }, []);

  useFrame((state, delta) => {
    if (outerRef.current) {
       outerRef.current.rotation.y += delta * 0.15;
       outerRef.current.rotation.x += delta * 0.1;
    }
    if (innerRef.current) {
       innerRef.current.rotation.y -= delta * 0.2;
       innerRef.current.rotation.z += delta * 0.1;
       
       // Pulse effect on inner scale
       const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
       innerRef.current.scale.set(scale, scale, scale);
    }
    if (pointsRef.current) {
       pointsRef.current.rotation.y -= delta * 0.1;
       pointsRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Outer Wireframe (Teal) */}
        <Icosahedron args={[1.2, 2]} ref={outerRef}>
          <meshBasicMaterial 
            color="#1D6A5E" 
            wireframe={true} 
            transparent={true} 
            opacity={0.4} 
            blending={THREE.AdditiveBlending}
          />
        </Icosahedron>

        {/* Inner Solid Core (Copper) */}
        <Icosahedron args={[0.7, 1]} ref={innerRef}>
          <meshStandardMaterial 
            color="#E87C52" 
            roughness={0.3} 
            metalness={0.8}
            emissive="#8C3D18"
            emissiveIntensity={0.5}
          />
        </Icosahedron>

        {/* Orbiting Data Particles (Sand/Copper) */}
        <points ref={pointsRef}>
          <bufferGeometry>
            <bufferAttribute 
              attach="attributes-position" 
              count={particlesCount} 
              args={[positions, 3]} 
            />
          </bufferGeometry>
          <pointsMaterial 
            color="#F4D3AE" 
            size={0.03} 
            transparent 
            opacity={0.8} 
            sizeAttenuation 
            blending={THREE.AdditiveBlending} 
          />
        </points>
      </Float>
    </group>
  );
};

const DataCore = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#F4D3AE" />
        <directionalLight position={[-5, -5, -5]} intensity={1} color="#1D6A5E" />
        <CoreObject />
      </Canvas>
    </div>
  );
};

export default DataCore;
