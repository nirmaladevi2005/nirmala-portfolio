import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CursorGlow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-30 hidden lg:block"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <div 
        className="w-[320px] h-[320px] rounded-full opacity-35 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 80%)',
        }}
      />
    </motion.div>
  );
};
