import React from 'react';
import { motion } from 'framer-motion';
import { ScrollSection } from '../animations/ScrollSection';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { portfolioData } from '../../config/portfolioData';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { GlassCard } from '../ui/GlassCard';
import {
  Code2,
  Sparkles,
  Palette,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Compass,
} from 'lucide-react';

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

export const StorySection: React.FC = () => {
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

  const capabilityCards = [
    {
      id: 'build-capability',
      number: '01',
      category: 'WEB & SOFTWARE ENGINEERING',
      title: 'BUILD',
      purpose: 'Web Development & Useful Systems',
      description:
        'Architecting responsive, high-performance web applications with clean TypeScript, modern frontend frameworks, and maintainable component design.',
      focusPills: [
        'React & TypeScript Architecture',
        'Tailwind CSS & Design Systems',
        'State Management & Modular Clean Code',
      ],
      icon: <Code2 className="w-5 h-5 text-[#8B5CF6]" />,
      accentColor: 'text-[#8B5CF6]',
      borderClass: 'hover:border-[#8B5CF6]/50',
    },
    {
      id: 'explore-capability',
      number: '02',
      category: 'AI & EMERGING TECH',
      title: 'EXPLORE',
      purpose: 'AI & Continuous Learning',
      description:
        'Investigating intelligent algorithms, neural network applications, and computational models to integrate emerging AI capabilities into digital tools.',
      focusPills: [
        'Machine Learning Fundamentals',
        'Python & Data Processing',
        'Hackathon Rapid Prototyping',
      ],
      icon: <Cpu className="w-5 h-5 text-[#38BDF8]" />,
      accentColor: 'text-[#38BDF8]',
      borderClass: 'hover:border-[#38BDF8]/50',
    },
    {
      id: 'create-capability',
      number: '03',
      category: 'FINE PENCIL ART',
      title: 'CREATE',
      purpose: 'Portrait Art & Visual Expression',
      description:
        'Creating high-precision graphite and charcoal portrait artwork, translating deep observation, value balance, and proportion into visual realism.',
      focusPills: [
        'Graphite & Charcoal Portraiture',
        'Value Contrast & Lighting Depth',
        'Observational Precision & Anatomy',
      ],
      icon: <Palette className="w-5 h-5 text-[#C4B5FD]" />,
      accentColor: 'text-[#C4B5FD]',
      borderClass: 'hover:border-[#C4B5FD]/50',
    },
  ];

  return (
    <ScrollSection
      id="story"
      sectionNumber="02"
      eyebrow="STORY & CAPABILITIES"
      title="Where Code Meets Craft."
      subtitle="Connecting computer science fundamentals, intelligent technology, and fine visual precision."
    >
      {/* Anchor targets to preserve backward compatibility for #about and #what-i-do */}
      <div id="about" className="scroll-mt-28" />
      <div id="what-i-do" className="scroll-mt-28" />

      <div className="space-y-16 lg:space-y-20">
        {/* Top Split: Progressive Storytelling Moments (Left) + Authentic Bio Narrative (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Progressive Storytelling Moments */}
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
                      <span className="text-xs font-mono tracking-widest text-[#94A3B8]">
                        {moment.number} // {moment.tagline}
                      </span>
                      <div className="p-2 rounded-lg bg-[#050510] border border-white/10 group-hover:scale-110 transition-transform">
                        {moment.icon}
                      </div>
                    </div>

                    {/* Bold Statement */}
                    <h3
                      className={`text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r ${moment.gradient} bg-clip-text text-transparent`}
                    >
                      {moment.statement}
                    </h3>

                    {/* Editorial Description */}
                    <p className="text-sm text-[#94A3B8] leading-relaxed font-normal">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Right Column: Authentic Editorial Bio Narrative */}
          <div className="lg:col-span-6 space-y-6 pt-2">
            <RevealOnScroll variant="revealUp" delay={0.1}>
              <div className="relative rounded-2xl p-7 sm:p-9 bg-[#0D0D1A]/60 backdrop-blur-md border border-white/10 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#38BDF8] font-semibold">
                    The Perspective //
                  </span>
                </div>

                {/* Bio Paragraphs */}
                <div className="space-y-4 text-base sm:text-lg text-[#F8FAFC]/90 font-normal leading-relaxed">
                  {bioParagraphs.map((para, i) => (
                    <p key={i} className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Creative Philosophy Quote */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[#C4B5FD] uppercase tracking-wider">
                    Core Philosophy
                  </div>
                  <blockquote className="text-sm sm:text-base font-medium italic text-[#F8FAFC]">
                    &ldquo;Clean code is an engineering discipline. Great software is a creative craft.&rdquo;
                  </blockquote>
                </div>

                {/* Core Principles */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {coreValues.map((value) => (
                    <div
                      key={value}
                      className="p-3 rounded-xl bg-[#050510]/80 border border-white/10 flex items-center gap-2 text-xs font-mono text-[#F8FAFC]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Core Capability Pillars (From What I Do) */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-[#8B5CF6] uppercase tracking-widest font-semibold">
                Core Disciplines //
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] mt-1">
                Capability Pillars
              </h3>
            </div>
            <span className="text-xs font-mono text-[#94A3B8] hidden sm:block">
              Three-Dimensional Practice
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {capabilityCards.map((card, idx) => (
              <RevealOnScroll
                key={card.id}
                variant="revealUp"
                delay={idx * 0.12}
                className="h-full"
              >
                <GlassCard
                  className={`p-6 sm:p-7 border border-white/10 ${card.borderClass} transition-all duration-300 flex flex-col justify-between h-full group`}
                  glowOnHover
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider">
                        {card.number} // {card.category}
                      </span>
                      <div className="p-2 rounded-lg bg-[#050510] border border-white/10 text-[#C4B5FD] group-hover:scale-110 transition-transform">
                        {card.icon}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className={`text-xl font-bold ${card.accentColor}`}>
                        {card.title}
                      </h4>
                      <p className="text-xs font-mono text-[#F8FAFC]">
                        {card.purpose}
                      </p>
                    </div>

                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {card.description}
                    </p>

                    <div className="pt-2 space-y-1.5">
                      {card.focusPills.map((pill) => (
                        <div
                          key={pill}
                          className="flex items-center gap-1.5 text-[11px] font-mono text-[#94A3B8]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/80" />
                          <span>{pill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Quick Chapter Access Strip (Enabling instant access to subsequent chapters) */}
        <RevealOnScroll variant="revealUp">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0D0D1A]/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2.5 text-[#94A3B8]">
              <Compass className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-[#F8FAFC] font-semibold">Explore Next Chapters:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#projects"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#8B5CF6]/20 border border-white/10 hover:border-[#8B5CF6]/40 text-[#C4B5FD] transition-all flex items-center gap-1.5"
              >
                <span>03 // Projects</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <a
                href="#skills"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#38BDF8]/20 border border-white/10 hover:border-[#38BDF8]/40 text-[#38BDF8] transition-all"
              >
                <span>04 // Tech Stack</span>
              </a>
              <a
                href="#experience"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#94A3B8] hover:text-[#F8FAFC] transition-all"
              >
                <span>05 // Journey</span>
              </a>
              <a
                href="#achievements"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#94A3B8] hover:text-[#F8FAFC] transition-all"
              >
                <span>06 // Honors</span>
              </a>
              <a
                href="#art"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#94A3B8] hover:text-[#F8FAFC] transition-all"
              >
                <span>08 // Art Gallery</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </ScrollSection>
  );
};
