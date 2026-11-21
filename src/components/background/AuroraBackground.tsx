import React from 'react';

export const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050510]">
      {/* Primary Violet Ambient Mesh (Subtle & Slow) */}
      <div 
        className="absolute -top-[15%] left-[20%] w-[55vw] h-[55vw] rounded-full opacity-[0.14] blur-[140px] animate-aurora-pulse pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0) 70%)',
        }}
      />

      {/* Secondary Cyan Ambient Glow (Restrained) */}
      <div 
        className="absolute top-[30%] right-[10%] w-[45vw] h-[45vw] rounded-full opacity-[0.10] blur-[150px] animate-glow-pulse pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.45) 0%, rgba(56, 189, 248, 0) 70%)',
        }}
      />

      {/* Very Soft Center Radial Gradient for Text Contrast */}
      <div 
        className="absolute top-[20%] left-[10%] w-[50vw] h-[40vw] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(196, 181, 253, 0.35) 0%, transparent 70%)',
        }}
      />

      {/* Subtle Engineering Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(248, 250, 252, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ultra-Fine SVG Grain Noise to Prevent Color Banding */}
      <svg className="fixed inset-0 w-full h-full opacity-[0.02] mix-blend-overlay pointer-events-none">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};
