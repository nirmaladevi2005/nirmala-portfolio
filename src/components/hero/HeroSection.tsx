import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Code, Cpu, Palette, ChevronDown } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { MagneticButton } from '../ui/MagneticButton';
import { Badge } from '../ui/Badge';
import { CinematicTitle } from './CinematicTitle';
import { HeroPortrait } from './HeroPortrait';

export const HeroSection: React.FC = () => {
  const [headingFinished, setHeadingFinished] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen pt-24 lg:pt-28 pb-12 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full"
        >
          {/* Left Column: Typography & Storytelling Hierarchy */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5">
            {/* Eyebrow Pill */}
            <motion.div variants={itemVariants}>
              <Badge pulse pulseColor="violet" variant="glow" className="py-1.5 px-3.5 border border-[#8B5CF6]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#C4B5FD]" />
                <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] text-[#C4B5FD] uppercase font-semibold">
                  {siteConfig.subtitle}
                </span>
              </Badge>
            </motion.div>

            {/* Main Cinematic Title: Primary Visual Centerpiece */}
            <CinematicTitle onAnimationComplete={() => setHeadingFinished(true)} />

            {/* Mobile / Tablet Circular Portrait: Stacked neatly below heading */}
            <div className="block lg:hidden my-3 self-center sm:self-start">
              <HeroPortrait />
            </div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              initial={{ opacity: 0, y: 14 }}
              animate={headingFinished ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed font-normal tracking-tight"
            >
              {siteConfig.shortBio}
            </motion.p>

            {/* Role Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0D0D1A]/80 border border-white/10 text-xs font-mono text-[#94A3B8] hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 hover:text-[#F8FAFC] transition-all cursor-default">
                <Code className="w-3 h-3 text-[#8B5CF6]" />
                <span>B.Tech Computer Science</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0D0D1A]/80 border border-white/10 text-xs font-mono text-[#94A3B8] hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/10 hover:text-[#F8FAFC] transition-all cursor-default">
                <Cpu className="w-3 h-3 text-[#38BDF8]" />
                <span>Web Development & AI</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0D0D1A]/80 border border-white/10 text-xs font-mono text-[#94A3B8] hover:border-[#C4B5FD]/50 hover:bg-[#C4B5FD]/10 hover:text-[#F8FAFC] transition-all cursor-default">
                <Palette className="w-3 h-3 text-[#C4B5FD]" />
                <span>Fine Pencil Portraiture</span>
              </span>
            </motion.div>

            {/* CTA Buttons: Fully visible in initial viewport */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto"
            >
              <MagneticButton
                variant="primary"
                size="md"
                href="#projects"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore My Work
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                size="md"
                href="#resume"
                icon={<Download className="w-4 h-4" />}
              >
                Download Resume
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Desktop Large Circular Floating Portrait (320-350px) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 items-center justify-center lg:justify-end">
            <HeroPortrait />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-widest text-[#94A3B8]/80 uppercase">Scroll</span>
        <ChevronDown className="w-3.5 h-3.5 text-[#8B5CF6] animate-bounce" />
      </motion.div>
    </section>
  );
};
