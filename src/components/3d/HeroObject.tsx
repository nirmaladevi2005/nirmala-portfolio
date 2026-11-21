import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface HeroObjectProps {
  mousePosition: { normalizedX: number; normalizedY: number };
  isReducedMotion?: boolean;
}

export const HeroObject: React.FC<HeroObjectProps> = ({ mousePosition, isReducedMotion = false }) => {
  const outerGroupRef = useRef<THREE.Group>(null);
  const torusMeshRef = useRef<THREE.Mesh>(null);
  const innerIcosaRef = useRef<THREE.Mesh>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (isReducedMotion) return;

    const time = state.clock.getElapsedTime();

    // Smooth mouse lerp for rotation
    if (outerGroupRef.current) {
      const targetRotationY = mousePosition.normalizedX * 0.45;
      const targetRotationX = -mousePosition.normalizedY * 0.35;

      outerGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.y,
        targetRotationY,
        delta * 2.5
      );
      outerGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        outerGroupRef.current.rotation.x,
        targetRotationX,
        delta * 2.5
      );
    }

    // Continuous slow rotations
    if (torusMeshRef.current) {
      torusMeshRef.current.rotation.x = time * 0.15;
      torusMeshRef.current.rotation.y = time * 0.22;
    }

    if (innerIcosaRef.current) {
      innerIcosaRef.current.rotation.y = -time * 0.3;
      innerIcosaRef.current.rotation.z = time * 0.2;
    }

    if (coreMeshRef.current) {
      const pulse = Math.sin(time * 2) * 0.08 + 1;
      coreMeshRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <Float
      speed={isReducedMotion ? 0 : 2}
      rotationIntensity={isReducedMotion ? 0 : 0.4}
      floatIntensity={isReducedMotion ? 0 : 0.6}
    >
      <group ref={outerGroupRef}>
        {/* Soft Violet Light */}
        <pointLight position={[3, 4, 3]} intensity={12} color="#8B5CF6" distance={10} />
        {/* Soft Cyan Light */}
        <pointLight position={[-4, -3, 2]} intensity={10} color="#38BDF8" distance={10} />
        {/* Accent Highlight Light */}
        <directionalLight position={[0, 5, 5]} intensity={2.5} color="#F8FAFC" />

        {/* Outer Parametric Glass Torus Knot */}
        <mesh ref={torusMeshRef} scale={1.15}>
          <torusKnotGeometry args={[1, 0.32, 128, 32, 2, 3]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            resolution={256}
            transmission={0.92}
            roughness={0.15}
            thickness={0.6}
            ior={1.3}
            chromaticAberration={0.06}
            anisotropy={0.2}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.05}
            clearcoat={0.8}
            color="#0D0D1A"
            attenuationDistance={1.2}
            attenuationColor="#8B5CF6"
          />
        </mesh>

        {/* Inner Glowing Wireframe Geometry */}
        <mesh ref={innerIcosaRef} scale={0.72}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#8B5CF6"
            wireframe
            emissive="#8B5CF6"
            emissiveIntensity={0.6}
            transparent
            opacity={0.7}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Core Glowing Orb */}
        <mesh ref={coreMeshRef} scale={0.35}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#38BDF8"
            emissive="#38BDF8"
            emissiveIntensity={2.5}
            toneMapped={false}
          />
        </mesh>
      </group>
    </Float>
  );
};
