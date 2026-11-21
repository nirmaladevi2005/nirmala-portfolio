import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedLineProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const AnimatedLine: React.FC<AnimatedLineProps> = ({
  orientation = 'horizontal',
  className = '',
}) => {
  if (orientation === 'vertical') {
    return (
      <div className={`relative w-[2px] bg-white/10 overflow-hidden ${className}`}>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full bg-gradient-to-b from-[#8B5CF6] via-[#C4B5FD] to-[#38BDF8] origin-top"
        />
      </div>
    );
  }

  return (
    <div className={`relative h-[1px] w-full bg-white/10 overflow-hidden ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full bg-gradient-to-r from-[#8B5CF6] via-[#C4B5FD] to-[#38BDF8] origin-left"
      />
    </div>
  );
};
