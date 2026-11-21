import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  pulse?: boolean;
  pulseColor?: 'green' | 'violet' | 'cyan';
  variant?: 'glass' | 'solid' | 'glow';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  pulse = false,
  pulseColor = 'green',
  variant = 'glass',
  className = '',
}) => {
  const pulseColors = {
    green: 'bg-emerald-400',
    violet: 'bg-[#8B5CF6]',
    cyan: 'bg-[#38BDF8]',
  };

  const variants = {
    glass: 'bg-[#0D0D1A]/80 border border-white/10 text-[#F8FAFC] backdrop-blur-md',
    solid: 'bg-[#131326] text-[#C4B5FD] border border-[#8B5CF6]/30',
    glow: 'bg-[#8B5CF6]/10 text-[#C4B5FD] border border-[#8B5CF6]/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pulseColors[pulseColor]}`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${pulseColors[pulseColor]}`}
          />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};
