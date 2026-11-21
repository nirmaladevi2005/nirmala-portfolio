import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';
import { RevealOnScroll } from './RevealOnScroll';

interface ScrollSectionProps {
  id: string;
  sectionNumber: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({
  id,
  sectionNumber,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  fullWidth = false,
}) => {
  return (
    <section
      id={id}
      className={`relative min-h-[50vh] py-24 sm:py-28 lg:py-32 scroll-mt-20 border-t border-white/[0.04] ${className}`}
    >
      <div className={`${fullWidth ? 'w-full px-4 sm:px-6 lg:px-8' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'} relative z-10`}>
        
        {/* Section Header */}
        <RevealOnScroll variant="revealUp" className="mb-12 sm:mb-16 space-y-4">
          
          {/* Index Badge */}
          <div className="flex items-center gap-3">
            <Badge pulse pulseColor="violet" variant="glass" className="font-mono text-xs">
              <span className="text-[#8B5CF6] font-bold">{sectionNumber}</span>
              <span className="text-[#94A3B8]">//</span>
              <span className="uppercase tracking-widest">{eyebrow || id}</span>
            </Badge>
          </div>

          {/* Editorial Title & Subtitle */}
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8FAFC]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg text-[#94A3B8] font-normal leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

        </RevealOnScroll>

        {/* Section Main Content */}
        <div className="relative">{children}</div>

      </div>
    </section>
  );
};
