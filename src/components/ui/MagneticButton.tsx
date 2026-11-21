import React from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '../../hooks/useMagnetic';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'lg',
  href,
  onClick,
  icon,
  className = '',
}) => {
  const { ref, position } = useMagnetic<HTMLAnchorElement & HTMLButtonElement>({
    strength: 0.3,
    radius: 140,
  });

  const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-full cursor-pointer overflow-hidden transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50";
  
  const sizeStyles = {
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-3",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] border border-white/20",
    secondary: "glass-panel text-[#F8FAFC] border border-white/15 hover:border-[#8B5CF6]/40 hover:text-[#C4B5FD] hover:bg-[#0D0D1A]/90",
    outline: "bg-transparent border border-white/15 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/10",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      
      {/* Background Hover Glow Shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
        className={`group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      className={`group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
};
