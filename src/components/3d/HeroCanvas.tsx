import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { HeroObject } from './HeroObject';
import { AtmosphereParticles } from './AtmosphereParticles';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const HeroCanvas: React.FC = () => {
  const mousePosition = useMousePosition();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[580px] flex items-center justify-center">
      {/* Background radial highlight glow behind canvas */}
      <div 
        className="absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full opacity-30 blur-[90px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.4), rgba(56, 189, 248, 0.2) 60%, transparent 80%)',
        }}
      />

      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.5} />
        
        <Suspense fallback={null}>
          <HeroObject 
            mousePosition={mousePosition} 
            isReducedMotion={prefersReducedMotion} 
          />
          {!prefersReducedMotion && <AtmosphereParticles count={60} />}
        </Suspense>
      </Canvas>

      {/* Interactive Drag / Hover Indicator Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-10 px-3 py-1 rounded-full glass-panel border border-white/10 text-[11px] font-mono text-[#94A3B8] flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
        <span>3D Interactive Viewport</span>
      </div>
    </div>
  );
};
