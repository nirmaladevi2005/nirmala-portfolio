import React from 'react';
import { ScrollSection } from '../animations/ScrollSection';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { GlassCard } from '../ui/GlassCard';
import { Code2, Cpu, Palette, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CapabilityCardData {
  id: string;
  number: string;
  category: string;
  title: string;
  purpose: string;
  description: string;
  focusPills: string[];
  icon: React.ReactNode;
  accentColor: string;
  accentBorder: string;
  accentGlow: string;
  linkHref: string;
  linkText: string;
}

export const WhatIDoSection: React.FC = () => {
  const cards: CapabilityCardData[] = [
    {
      id: 'build',
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
      icon: <Code2 className="w-6 h-6 text-[#8B5CF6]" />,
      accentColor: 'text-[#8B5CF6]',
      accentBorder: 'hover:border-[#8B5CF6]/50',
      accentGlow: 'rgba(139, 92, 246, 0.15)',
      linkHref: '#projects',
      linkText: 'Explore Featured Projects',
    },
    {
      id: 'explore',
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
      icon: <Cpu className="w-6 h-6 text-[#38BDF8]" />,
      accentColor: 'text-[#38BDF8]',
      accentBorder: 'hover:border-[#38BDF8]/50',
      accentGlow: 'rgba(56, 189, 248, 0.15)',
      linkHref: '#skills',
      linkText: 'Inspect Tech Stack',
    },
    {
      id: 'create',
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
      icon: <Palette className="w-6 h-6 text-[#C4B5FD]" />,
      accentColor: 'text-[#C4B5FD]',
      accentBorder: 'hover:border-[#C4B5FD]/50',
      accentGlow: 'rgba(196, 181, 253, 0.15)',
      linkHref: '#art',
      linkText: 'View Portrait Gallery',
    },
  ];

  return (
    <ScrollSection
      id="what-i-do"
      sectionNumber="03"
      eyebrow="WHAT I DO"
      title="Capability Pillars."
      subtitle="Three core disciplines defining my approach to engineering, exploration, and art."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {cards.map((card, idx) => (
          <RevealOnScroll
            key={card.id}
            variant="revealUp"
            delay={idx * 0.12}
            className="h-full flex"
          >
            <div
              className={`group relative rounded-2xl p-7 sm:p-8 bg-[#0D0D1A]/80 backdrop-blur-md border border-white/10 ${card.accentBorder} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between w-full overflow-hidden shadow-lg hover:shadow-2xl`}
            >
              {/* Radial Hover Spotlight */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(500px circle at top center, ${card.accentGlow}, transparent 65%)`,
                }}
              />

              <div className="relative z-10 space-y-6">
                
                {/* Header: Number & Thematic Icon Plate */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-2xl font-extrabold ${card.accentColor}`}>
                      {card.number}
                    </span>
                    <span className="w-6 h-[1px] bg-white/15" />
                    <span className="text-[11px] font-mono text-[#94A3B8] tracking-wider uppercase">
                      {card.category}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#050510] border border-white/10 group-hover:scale-105 transition-transform shadow-inner">
                    {card.icon}
                  </div>
                </div>

                {/* Pillar Title & Purpose */}
                <div className="space-y-2">
                  <h3 className="text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                    {card.title}
                  </h3>
                  <div className="text-xs font-mono font-medium text-[#C4B5FD] uppercase tracking-wide">
                    {card.purpose}
                  </div>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-1">
                    {card.description}
                  </p>
                </div>

                {/* Focus Badges / Bullet Highlights */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]/80 pb-1">
                    Core Focus //
                  </div>
                  {card.focusPills.map((pill) => (
                    <div
                      key={pill}
                      className="flex items-center gap-2.5 text-xs font-mono text-[#F8FAFC]"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${card.accentColor.replace('text-', 'bg-')}`} />
                      <span>{pill}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Action Link */}
              <div className="relative z-10 pt-8 mt-6 border-t border-white/10">
                <a
                  href={card.linkHref}
                  className="inline-flex items-center justify-between w-full text-xs font-mono text-[#C4B5FD] group-hover:text-[#F8FAFC] transition-colors py-1"
                >
                  <span>{card.linkText}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8B5CF6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </RevealOnScroll>
        ))}
      </div>
    </ScrollSection>
  );
};
