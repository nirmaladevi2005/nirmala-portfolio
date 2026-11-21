import React from 'react';
import { motion, Variants } from 'framer-motion';

interface CinematicTitleProps {
  onAnimationComplete?: () => void;
}

export const CinematicTitle: React.FC<CinematicTitleProps> = ({ onAnimationComplete }) => {
  const firstName = "Nirmala";
  const lastName = "Devi Patel";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.15,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const greetingVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="space-y-2 sm:space-y-3 select-none">
      {/* Line 1: HI, I'M */}
      <motion.div
        variants={greetingVariants}
        initial="hidden"
        animate="visible"
        className="text-xs sm:text-sm font-mono text-[#94A3B8] tracking-[0.25em] uppercase font-semibold flex items-center gap-2.5"
      >
        <span className="w-6 h-[1.5px] bg-[#8B5CF6]/60 rounded-full" />
        <span>HI, I'M</span>
      </motion.div>

      {/* Main Name Heading: Nirmala Devi Patel */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={onAnimationComplete}
        className="text-[clamp(2.5rem,6.5vw,5.25rem)] font-extrabold tracking-tight leading-[1.08] text-[#F8FAFC]"
      >
        {/* First Name: Nirmala */}
        <span className="inline-block mr-[0.28em] text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC] to-[#C4B5FD]">
          {firstName.split('').map((char, index) => (
            <motion.span
              key={`first-${index}`}
              variants={letterVariants}
              className="inline-block hover:-translate-y-0.5 transition-transform duration-200"
            >
              {char}
            </motion.span>
          ))}
        </span>

        {/* Last Name: Devi Patel */}
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#C4B5FD] via-[#8B5CF6] to-[#38BDF8]">
          {lastName.split('').map((char, index) => (
            <motion.span
              key={`last-${index}`}
              variants={letterVariants}
              className="inline-block hover:-translate-y-0.5 transition-transform duration-200"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </span>
      </motion.h1>
    </div>
  );
};
