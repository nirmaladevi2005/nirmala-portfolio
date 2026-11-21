import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export type RevealVariant = 'revealUp' | 'revealWords' | 'revealChars' | 'fadeScale' | 'staggerChildren';

interface RevealOnScrollProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number | 'some' | 'all';
  once?: boolean;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  variant = 'revealUp',
  delay = 0,
  duration = 0.6,
  className = '',
  amount = 0.2,
  once = true,
}) => {
  const isReducedMotion = useReducedMotion();

  // Accessibility reduced motion override
  if (isReducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, amount }}
        transition={{ duration: 0.3, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const variantsMap: Record<RevealVariant, Variants> = {
    revealUp: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1] as const,
        },
      },
    },
    fadeScale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1] as const,
        },
      },
    },
    staggerChildren: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        },
      },
    },
    revealWords: {
      hidden: { opacity: 0, y: 15 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: duration * 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1] as const,
        },
      },
    },
    revealChars: {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: duration * 0.6,
          delay,
          ease: [0.16, 1, 0.3, 1] as const,
        },
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variantsMap[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
};
