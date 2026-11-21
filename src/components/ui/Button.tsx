import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  href,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-lg shadow-[#8B5CF6]/25 hover:shadow-xl hover:shadow-[#8B5CF6]/40 hover:scale-[1.02] border border-white/20",
    secondary: "glass-panel text-[#F8FAFC] hover:bg-[#0D0D1A]/90 hover:border-[#8B5CF6]/40 hover:text-[#C4B5FD] shadow-md hover:scale-[1.02]",
    outline: "bg-transparent border border-white/15 text-[#F8FAFC] hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/10 hover:text-[#38BDF8]",
    ghost: "bg-transparent text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5",
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.97 }}
        className={`group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {content}
    </motion.button>
  );
};
