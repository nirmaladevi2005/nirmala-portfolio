import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { User } from 'lucide-react';

interface HeroPortraitProps {
  className?: string;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ className = '' }) => {
  const [imageError, setImageError] = useState(false);
  const isReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: isReducedMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: isReducedMotion ? 0.3 : 0.7,
        delay: 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative select-none shrink-0 ${className}`}
    >
      {/* Continuous Gentle Floating Animation Container */}
      <motion.div
        animate={
          isReducedMotion
            ? {}
            : {
                y: [0, -10, 0],
              }
        }
        transition={
          isReducedMotion
            ? {}
            : {
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity,
              }
        }
        className="relative group"
      >
        {/* Subtle Violet/Cyan Ambient Aura Glow */}
        <motion.div
          aria-hidden="true"
          animate={
            isReducedMotion
              ? {}
              : {
                  opacity: [0.35, 0.55, 0.35],
                  scale: [0.98, 1.04, 0.98],
                }
          }
          transition={
            isReducedMotion
              ? {}
              : {
                  duration: 5,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }
          }
          className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-[#8B5CF6]/35 via-[#C4B5FD]/15 to-[#38BDF8]/25 blur-2xl pointer-events-none"
        />

        {/* Thin, Elegant Dual-Tone Violet/Cyan Border Frame */}
        <div className="relative p-[2px] rounded-full bg-gradient-to-b from-[#8B5CF6]/60 via-[#C4B5FD]/30 to-[#38BDF8]/40 shadow-[0_16px_48px_rgba(5,5,16,0.8),0_0_35px_rgba(139,92,246,0.2)] group-hover:from-[#8B5CF6]/80 group-hover:to-[#38BDF8]/60 transition-all duration-500">
          
          {/* Perfect Circle Frame (Aspect 1:1, 50% border radius, responsive dimensions: ~190-240px mobile, ~270px tablet, 320-350px desktop) */}
          <div className="relative aspect-square w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] md:w-[270px] md:h-[270px] lg:w-[320px] lg:h-[320px] xl:w-[350px] xl:h-[350px] rounded-full overflow-hidden bg-[#0D0D1A] flex items-center justify-center">
            
            {!imageError ? (
              /* Authentic Portrait Photo of Nirmala Devi Patel */
              <img
                src="/images/profile.jpg"
                alt="Portrait of Nirmala Devi Patel"
                width={360}
                height={360}
                loading="eager"
                decoding="async"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-[center_12%] transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              /* Graceful Fallback Frame if Image is Missing */
              <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#0D0D1A] space-y-2">
                <User className="w-10 h-10 text-[#C4B5FD] opacity-70" />
                <span className="font-mono text-xs text-[#F8FAFC]">Portrait Slot</span>
                <span className="font-mono text-[10px] text-[#38BDF8]">/images/profile.jpg</span>
              </div>
            )}

            {/* Hairline Inner Ring for Depth */}
            <div 
              aria-hidden="true"
              className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/15 pointer-events-none" 
            />

            {/* Subtle Live Availability Pip */}
            <div 
              title="Available for Innovation"
              className="absolute bottom-3 right-5 sm:bottom-4 sm:right-7 lg:bottom-5 lg:right-9 flex items-center justify-center z-10"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#0D0D1A]" />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
