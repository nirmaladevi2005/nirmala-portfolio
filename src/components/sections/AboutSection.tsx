import React from 'react';
import { motion } from 'framer-motion';
import { ScrollSection } from '../animations/ScrollSection';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { portfolioData } from '../../config/portfolioData';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Code2, Sparkles, Palette, ArrowDown, CheckCircle2 } from 'lucide-react';

interface StoryMoment {
  number: string;
  tagline: string;
  statement: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  borderColor: string;
  glowColor: string;
}

export const AboutSection: React.FC = () => {
  const isReducedMotion = useReducedMotion();
  const { bioParagraphs, coreValues } = portfolioData.about;

  const storyMoments: StoryMoment[] = [
    {
      number: '01',
      tagline: 'SOFTWARE & SYSTEMS',
      statement: 'I BUILD.',
      description:
        'Turning complex logic into clean, resilient software. Focusing on modern web ecosystems, type safety, and interfaces that feel effortless to use.',
      icon: <Code2 className="w-5 h-5 text-[#8B5CF6]" />,
      gradient: 'from-[#F8FAFC] via-[#F8FAFC] to-[#C4B5FD]',
      borderColor: 'group-hover:border-[#8B5CF6]/50',
      glowColor: 'rgba(139, 92, 246, 0.12)',
    },
    {
      number: '02',
      tagline: 'INTELLIGENCE & DISCOVERY',
      statement: 'I EXPLORE.',
      description:
        'Investigating the capabilities of machine learning and algorithmic problem solving. Prototyping continuously through hackathons and emerging tools.',
      icon: <Sparkles className="w-5 h-5 text-[#38BDF8]" />,
      gradient: 'from-[#C4B5FD] via-[#38BDF8] to-[#38BDF8]',
      borderColor: 'group-hover:border-[#38BDF8]/50',
      glowColor: 'rgba(56, 189, 248, 0.12)',
    },
    {
      number: '03',
      tagline: 'FINE ART & DISCIPLINE',
      statement: 'I CREATE.',
      description:
        'Practicing fine pencil portraiture with graphite and charcoal. Training the eye for tonal balance, subtle contrast, and meticulous precision.',
      icon: <Palette className="w-5 h-5 text-[#C4B5FD]" />,
      gradient: 'from-[#38BDF8] via-[#C4B5FD] to-[#8B5CF6]',
      borderColor: 'group-hover:border-[#C4B5FD]/50',
      glowColor: 'rgba(196, 181, 253, 0.12)',
    },
  ];

  return (
    <ScrollSection
      id="about"
      sectionNumber="02"
      eyebrow="ABOUT / MY STORY"
      title="Where Code Meets Craft."
      subtitle="Connecting computer science fundamentals, intelligent technology, and fine visual precision."
    >
      <div className="space-y-16 lg:space-y-20">
        
        {/* Top Split: Progressive Storytelling Moments (Left) + Authentic Bio Narrative (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Progressive Scroll Storytelling Cards */}
          <div className="lg:col-span-6 space-y-5">
            <div className="pb-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B5CF6] font-semibold">
                Story Manifesto //
              </span>
            </div>

            {storyMoments.map((moment, idx) => (
              <RevealOnScroll
                key={moment.statement}
                variant="revealUp"
                delay={idx * 0.12}
              >
                <div
                  className={`group relative rounded-2xl p-6 sm:p-7 bg-[#0D0D1A]/85 backdrop-blur-md border border-white/10 ${moment.borderColor} transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl`}
                >
                  {/* Subtle dynamic backdrop glow */}
                  <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(400px circle at top left, ${moment.glowColor}, transparent 60%)`,
                    }}
                  />

                  <div className="relative z-10 space-y-3">
                    {/* Header: Index & Micro-Tag */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                        <span className="text-[#38BDF8] font-bold">{moment.number}</span>
                        <span>//</span>
                        <span className="tracking-wider">{moment.tagline}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#050510] border border-white/10 group-hover:scale-105 transition-transform">
                        {moment.icon}
                      </div>
                    </div>

                    {/* Editorial Statement */}
                    <h3
                      className={`text-3xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${moment.gradient} leading-none`}
                    >
                      {moment.statement}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-1">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Right Column: Authentic Editorial Introduction & Core Principles */}
          <div className="lg:col-span-6 space-y-8 lg:pt-8">
            
            {/* Philosophical Anchor Quote */}
            <RevealOnScroll variant="revealUp" delay={0.15}>
              <div className="relative rounded-2xl p-7 sm:p-8 bg-[#0D0D1A]/60 border border-white/10 space-y-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B5CF6]/15 to-transparent rounded-bl-full pointer-events-none" />
                
                <span className="text-xs font-mono tracking-widest text-[#C4B5FD] uppercase font-semibold">
                  Philosophy & Perspective
                </span>
                
                <blockquote className="text-lg sm:text-xl font-medium text-[#F8FAFC] leading-relaxed">
                  &ldquo;Code provides logic and architecture. Art cultivates patience, contrast, and observation. I work at the intersection of both.&rdquo;
                </blockquote>
              </div>
            </RevealOnScroll>

            {/* Authentic Bio Paragraphs */}
            <RevealOnScroll variant="revealUp" delay={0.25} className="space-y-4">
              {bioParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-[#94A3B8] leading-relaxed font-normal"
                >
                  {paragraph}
                </p>
              ))}
            </RevealOnScroll>

            {/* Core Principles & Engineering Approach */}
            <RevealOnScroll variant="revealUp" delay={0.35}>
              <div className="rounded-2xl p-6 sm:p-7 bg-[#0D0D1A]/80 border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C4B5FD]">
                    Core Principles & Methodology
                  </span>
                  <span className="text-[11px] font-mono text-[#94A3B8]">03 Key Pillars</span>
                </div>

                <div className="space-y-3.5">
                  {coreValues.map((val, idx) => (
                    <div
                      key={val}
                      className="flex items-center gap-3.5 text-xs sm:text-sm text-[#F8FAFC]"
                    >
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#131326] border border-[#38BDF8]/40 text-[#38BDF8] shrink-0 font-mono text-[10px]">
                        0{idx + 1}
                      </div>
                      <span className="font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

          </div>

        </div>

        {/* Transition Bridge Leading Toward Section 03 */}
        <RevealOnScroll variant="fadeScale" delay={0.2}>
          <div className="pt-4 flex flex-col items-center justify-center text-center space-y-2">
            <a
              href="#what-i-do"
              className="group inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#C4B5FD] transition-colors py-2 px-4 rounded-full border border-white/5 hover:border-[#8B5CF6]/30 bg-[#0D0D1A]/50"
            >
              <span>Explore Capability Pillars in Detail</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#8B5CF6] group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </RevealOnScroll>

      </div>
    </ScrollSection>
  );
};
