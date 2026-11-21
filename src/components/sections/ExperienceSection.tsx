import React from 'react';
import { ScrollSection } from '../animations/ScrollSection';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { AnimatedLine } from '../animations/AnimatedLine';
import { portfolioData } from '../../config/portfolioData';
import { GraduationCap, Briefcase, Award, Calendar, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { TimelineItem } from '../../types/portfolio';

// Helper to filter out missing placeholder bracket text
const isVerifiedField = (value?: string): boolean => {
  if (!value) return false;
  return !value.includes('[') && !value.includes(']');
};

export const ExperienceSection: React.FC = () => {
  const { journeyTimeline } = portfolioData;

  const typeConfig: Record<TimelineItem['type'], { icon: React.ReactNode; label: string; accent: string; badgeBorder: string }> = {
    education: {
      icon: <GraduationCap className="w-4 h-4 text-[#8B5CF6]" />,
      label: 'ACADEMIC DEGREE',
      accent: 'text-[#8B5CF6]',
      badgeBorder: 'border-[#8B5CF6]/30 bg-[#8B5CF6]/10',
    },
    experience: {
      icon: <Briefcase className="w-4 h-4 text-[#38BDF8]" />,
      label: 'TECHNICAL INNOVATION',
      accent: 'text-[#38BDF8]',
      badgeBorder: 'border-[#38BDF8]/30 bg-[#38BDF8]/10',
    },
    leadership: {
      icon: <Award className="w-4 h-4 text-[#C4B5FD]" />,
      label: 'LEADERSHIP & COLLABORATION',
      accent: 'text-[#C4B5FD]',
      badgeBorder: 'border-[#C4B5FD]/30 bg-[#C4B5FD]/10',
    },
  };

  return (
    <ScrollSection
      id="experience"
      sectionNumber="05"
      eyebrow="EXPERIENCE & JOURNEY"
      title="Academic & Technical Milestones."
      subtitle="Verified milestones across Computer Science education, hackathon participation, and software innovation."
    >
      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 lg:pl-12">
        
        {/* Continuous Animated Vertical Spine */}
        <div className="absolute left-2 sm:left-3 top-2 bottom-4 w-[2px]">
          <AnimatedLine orientation="vertical" className="h-full" />
        </div>

        <div className="space-y-12 sm:space-y-14">
          {journeyTimeline.map((item, idx) => {
            const config = typeConfig[item.type] || typeConfig.education;
            const hasVerifiedOrg = isVerifiedField(item.organization);
            const hasVerifiedPeriod = isVerifiedField(item.period);
            const hasVerifiedLocation = isVerifiedField(item.location);

            return (
              <RevealOnScroll
                key={item.id}
                variant="revealUp"
                delay={idx * 0.15}
              >
                <div className="relative pl-6 sm:pl-8">
                  
                  {/* Glowing Node Dot anchored to the animated vertical spine */}
                  <div className="absolute -left-[30px] sm:-left-[37px] top-4 w-6 h-6 rounded-full bg-[#050510] border-2 border-[#8B5CF6] flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)] z-20 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                  </div>

                  {/* Milestone Card */}
                  <div className="group relative rounded-2xl p-6 sm:p-8 bg-[#0D0D1A]/85 backdrop-blur-md border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-lg hover:shadow-2xl">
                    
                    {/* Ambient Hover Spotlight */}
                    <div
                      className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{
                        background: 'radial-gradient(500px circle at top left, rgba(139, 92, 246, 0.12), transparent 70%)',
                      }}
                    />

                    <div className="relative z-10 space-y-5">
                      
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${config.badgeBorder} ${config.accent}`}>
                            {config.icon}
                            <span>{config.label}</span>
                          </span>

                          {hasVerifiedOrg && (
                            <span className="text-xs font-mono text-[#94A3B8] hidden sm:inline-block">
                              // {item.organization}
                            </span>
                          )}
                        </div>

                        {/* Verified Period / Timeline Indicator */}
                        {hasVerifiedPeriod ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131326] border border-white/10 font-mono text-xs text-[#C4B5FD]">
                            <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                            <span>{item.period}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131326] border border-white/10 font-mono text-xs text-[#94A3B8]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>Current Focus</span>
                          </span>
                        )}
                      </div>

                      {/* Milestone Title & Location */}
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] group-hover:text-[#C4B5FD] transition-colors tracking-tight">
                          {item.title}
                        </h3>

                        {hasVerifiedOrg && (
                          <div className="text-xs font-mono text-[#38BDF8] sm:hidden">
                            {item.organization}
                          </div>
                        )}

                        {hasVerifiedLocation && (
                          <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8]">
                            <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Focus & Coursework Bullets */}
                      {item.bullets.length > 0 && (
                        <div className="space-y-2 pt-1">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-[#C4B5FD] font-semibold">
                            Key Areas & Contributions //
                          </div>
                          <div className="space-y-2">
                            {item.bullets.map((bullet, bIdx) => (
                              <div
                                key={bIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8FAFC]"
                              >
                                <span className="text-[#38BDF8] font-bold mt-0.5">•</span>
                                <span className="leading-normal">{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Domain / Academic Tags */}
                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md bg-[#050510] border border-white/10 text-[11px] font-mono text-[#94A3B8] group-hover:border-white/20 transition-colors"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </ScrollSection>
  );
};
