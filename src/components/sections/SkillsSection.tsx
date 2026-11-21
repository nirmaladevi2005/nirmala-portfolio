import React from 'react';
import { ScrollSection } from '../animations/ScrollSection';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { portfolioData } from '../../config/portfolioData';
import { Code2, Globe, Cpu, Wrench, Sparkles, Terminal } from 'lucide-react';

interface CategoryConfig {
  icon: React.ReactNode;
  accentColor: string;
  badgeBg: string;
  dotColor: string;
  hoverBorder: string;
  glowGradient: string;
}

export const SkillsSection: React.FC = () => {
  const categoryConfigs: Record<string, CategoryConfig> = {
    languages: {
      icon: <Terminal className="w-5 h-5 text-[#8B5CF6]" />,
      accentColor: 'text-[#8B5CF6]',
      badgeBg: 'bg-[#8B5CF6]/10 border-[#8B5CF6]/30',
      dotColor: 'bg-[#8B5CF6]',
      hoverBorder: 'hover:border-[#8B5CF6]/50',
      glowGradient: 'rgba(139, 92, 246, 0.12)',
    },
    web: {
      icon: <Globe className="w-5 h-5 text-[#38BDF8]" />,
      accentColor: 'text-[#38BDF8]',
      badgeBg: 'bg-[#38BDF8]/10 border-[#38BDF8]/30',
      dotColor: 'bg-[#38BDF8]',
      hoverBorder: 'hover:border-[#38BDF8]/50',
      glowGradient: 'rgba(56, 189, 248, 0.12)',
    },
    ai: {
      icon: <Cpu className="w-5 h-5 text-[#C4B5FD]" />,
      accentColor: 'text-[#C4B5FD]',
      badgeBg: 'bg-[#C4B5FD]/10 border-[#C4B5FD]/30',
      dotColor: 'bg-[#C4B5FD]',
      hoverBorder: 'hover:border-[#C4B5FD]/50',
      glowGradient: 'rgba(196, 181, 253, 0.12)',
    },
    tools: {
      icon: <Wrench className="w-5 h-5 text-[#38BDF8]" />,
      accentColor: 'text-[#38BDF8]',
      badgeBg: 'bg-white/5 border-white/15',
      dotColor: 'bg-[#38BDF8]',
      hoverBorder: 'hover:border-white/30',
      glowGradient: 'rgba(248, 250, 252, 0.08)',
    },
  };

  return (
    <ScrollSection
      id="skills"
      sectionNumber="04"
      eyebrow="SKILLS & TECH STACK"
      title="Technology Ecosystem."
      subtitle="Languages, modern web frameworks, AI fundamentals, and development tools."
    >
      <div className="space-y-10 lg:space-y-12">
        
        {/* 4 Categorized Ecosystem Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioData.skillEcosystem.map((category, idx) => {
            const config = categoryConfigs[category.id] || categoryConfigs.languages;

            return (
              <RevealOnScroll
                key={category.id}
                variant="revealUp"
                delay={idx * 0.1}
                className="h-full flex"
              >
                <div
                  className={`group relative rounded-2xl p-7 sm:p-8 bg-[#0D0D1A]/85 backdrop-blur-md border border-white/10 ${config.hoverBorder} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between w-full overflow-hidden shadow-lg hover:shadow-2xl`}
                >
                  {/* Subtle ambient hover glow */}
                  <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(400px circle at top left, ${config.glowGradient}, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10 space-y-6">
                    
                    {/* Category Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[#050510] border border-white/10 group-hover:scale-105 transition-transform shadow-inner">
                          {config.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-extrabold text-[#F8FAFC] tracking-tight">
                            {category.title}
                          </h3>
                          <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
                            0{idx + 1} // DOMAIN
                          </span>
                        </div>
                      </div>

                      <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${config.badgeBg} ${config.accentColor}`}>
                        {category.skills.length} Techs
                      </span>
                    </div>

                    {/* Category Description */}
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {category.description}
                    </p>

                    {/* Compact Technology Tiles */}
                    <div className="pt-2 flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`group/tile relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-default select-none ${
                            skill.isPrimary
                              ? 'bg-[#131326] border border-[#8B5CF6]/30 text-[#F8FAFC] shadow-sm hover:border-[#8B5CF6]/70 hover:bg-[#1A1A35] hover:scale-[1.02]'
                              : 'bg-[#050510]/80 border border-white/10 text-[#94A3B8] hover:border-white/25 hover:text-[#F8FAFC] hover:bg-[#0D0D1A]'
                          }`}
                        >
                          {/* Indicator dot */}
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 transition-transform group-hover/tile:scale-125 ${
                              skill.isPrimary ? config.dotColor : 'bg-[#94A3B8]/40'
                            }`}
                          />
                          <span>{skill.name}</span>

                          {skill.isPrimary && (
                            <span className="text-[9px] uppercase tracking-wider text-[#C4B5FD]/70 font-semibold pl-0.5">
                              Core
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Micro Footer Legend */}
                  <div className="relative z-10 pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]/70">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`} />
                      <span>Verified Stack</span>
                    </span>
                    <span className="text-[#F8FAFC]/50 group-hover:text-[#F8FAFC] transition-colors">
                      Production & Research
                    </span>
                  </div>

                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Editorial Architecture Note (No Fake Rating Bars) */}
        <RevealOnScroll variant="revealUp" delay={0.25}>
          <div className="rounded-2xl p-6 sm:p-7 bg-[#0D0D1A]/60 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#C4B5FD] shrink-0">
                <Sparkles className="w-4 h-4 text-[#38BDF8]" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F8FAFC]">
                  Architecture Philosophy
                </div>
                <div className="text-xs text-[#94A3B8]">
                  Focused on strong typing, clean component architecture, and responsive performance rather than vanity percentage bars.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto shrink-0 font-mono text-[11px] text-[#38BDF8] bg-[#050510] px-3.5 py-1.5 rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Actively Expanding in AI</span>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </ScrollSection>
  );
};
