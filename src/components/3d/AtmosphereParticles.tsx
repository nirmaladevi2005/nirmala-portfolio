import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AtmosphereParticlesProps {
  count?: number;
}

export const AtmosphereParticles: React.FC<AtmosphereParticlesProps> = ({ count = 65 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const colorViolet = new THREE.Color('#8B5CF6');
    const colorCyan = new THREE.Color('#38BDF8');
    const colorHighlight = new THREE.Color('#C4B5FD');

    for (let i = 0; i < count; i++) {
      // Distribute randomly around canvas space
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      // Pick color mix
      const randColor = Math.random();
      let selectedColor = colorViolet;
      if (randColor > 0.6) selectedColor = colorCyan;
      else if (randColor > 0.3) selectedColor = colorHighlight;

      col[i * 3] = selectedColor.r;
      col[i * 3 + 1] = selectedColor.g;
      col[i * 3 + 2] = selectedColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.03;
    pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
