import React, { useState } from 'react';
import { ScrollSection } from '../animations/ScrollSection';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { portfolioData } from '../../config/portfolioData';
import { Trophy, Calendar, Sparkles, Award, HeartHandshake, ShieldAlert, Users, Code2, CheckCircle2 } from 'lucide-react';
import { AchievementItem } from '../../types/portfolio';

export const AchievementsSection: React.FC = () => {
  const { achievements } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Scholarship', 'Event & Hackathon', 'Community & Service'];

  const filteredAchievements = achievements.filter((item) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Scholarship') return item.category.includes('Scholarship');
    if (selectedFilter === 'Event & Hackathon') return item.category.includes('Event') || item.category.includes('Hackathon');
    if (selectedFilter === 'Community & Service') return item.category.includes('Community') || item.category.includes('Cultural') || item.category.includes('Disaster');
    return true;
  });

  const getCategoryTheme = (category: string, isSpecial?: boolean) => {
    if (isSpecial) {
      return {
        icon: <Trophy className="w-4 h-4 text-[#38BDF8]" />,
        accent: 'text-[#38BDF8]',
        border: 'border-[#38BDF8]/40 hover:border-[#38BDF8]',
        badgeBg: 'bg-[#38BDF8]/10 border-[#38BDF8]/30',
        glow: 'rgba(56, 189, 248, 0.15)',
      };
    }
    if (category.includes('Scholarship')) {
      return {
        icon: <Sparkles className="w-4 h-4 text-[#C4B5FD]" />,
        accent: 'text-[#C4B5FD]',
        border: 'border-[#8B5CF6]/30 hover:border-[#8B5CF6]/60',
        badgeBg: 'bg-[#8B5CF6]/10 border-[#8B5CF6]/30',
        glow: 'rgba(139, 92, 246, 0.12)',
      };
    }
    if (category.includes('Hackathon') || category.includes('Event')) {
      return {
        icon: <Code2 className="w-4 h-4 text-[#8B5CF6]" />,
        accent: 'text-[#8B5CF6]',
        border: 'border-[#8B5CF6]/30 hover:border-[#8B5CF6]/60',
        badgeBg: 'bg-[#8B5CF6]/10 border-[#8B5CF6]/30',
        glow: 'rgba(139, 92, 246, 0.12)',
      };
    }
    if (category.includes('Disaster')) {
      return {
        icon: <ShieldAlert className="w-4 h-4 text-[#38BDF8]" />,
        accent: 'text-[#38BDF8]',
        border: 'border-white/10 hover:border-[#38BDF8]/40',
        badgeBg: 'bg-[#38BDF8]/10 border-[#38BDF8]/20',
        glow: 'rgba(56, 189, 248, 0.08)',
      };
    }
    if (category.includes('Cultural')) {
      return {
        icon: <Users className="w-4 h-4 text-[#C4B5FD]" />,
        accent: 'text-[#C4B5FD]',
        border: 'border-white/10 hover:border-[#C4B5FD]/40',
        badgeBg: 'bg-white/5 border-white/15',
        glow: 'rgba(196, 181, 253, 0.08)',
      };
    }
    return {
      icon: <HeartHandshake className="w-4 h-4 text-emerald-400" />,
      accent: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/20',
      border: 'border-white/10 hover:border-emerald-500/30',
      glow: 'rgba(16, 185, 129, 0.08)',
    };
  };

  return (
    <ScrollSection
      id="achievements"
      sectionNumber="06"
      eyebrow="HACKATHONS & ACHIEVEMENTS"
      title="Recognitions, Events & Service."
      subtitle="Scholarships, technical events, buildathon participation, and community leadership."
    >
      <div className="space-y-8">
        
        {/* Category Filter Pills */}
        <RevealOnScroll variant="revealUp">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#131326] border border-[#8B5CF6] text-[#F8FAFC] shadow-sm shadow-[#8B5CF6]/20'
                    : 'bg-[#0D0D1A]/60 border border-white/10 text-[#94A3B8] hover:border-white/25 hover:text-[#F8FAFC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {filteredAchievements.map((item, idx) => {
            const theme = getCategoryTheme(item.category, item.isSpecialHighlight);

            return (
              <RevealOnScroll
                key={item.id}
                variant="revealUp"
                delay={idx * 0.08}
                className="h-full flex"
              >
                <div
                  className={`group relative rounded-2xl p-6 sm:p-8 bg-[#0D0D1A]/85 backdrop-blur-md border ${theme.border} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between w-full overflow-hidden shadow-lg hover:shadow-2xl`}
                >
                  {/* Subtle Ambient Glow */}
                  <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(400px circle at top left, ${theme.glow}, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10 space-y-4">
                    
                    {/* Header: Category Badge & Date */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium border ${theme.badgeBg} ${theme.accent}`}>
                          {theme.icon}
                          <span>{item.category}</span>
                        </span>
                      </div>

                      {item.date && (
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8]">
                          <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                          <span>{item.date}</span>
                        </div>
                      )}
                    </div>

                    {/* Achievement Title */}
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#F8FAFC] group-hover:text-[#C4B5FD] transition-colors tracking-tight">
                        {item.title}
                      </h3>

                      {item.organization && (
                        <div className="text-xs font-mono text-[#94A3B8]/90">
                          Organization: <span className="text-[#F8FAFC]/80">{item.organization}</span>
                        </div>
                      )}
                    </div>

                    {/* AWS Special Highlight Ribbon (Accurately representing trivia win) */}
                    {item.isSpecialHighlight && item.highlightNote && (
                      <div className="p-3 rounded-xl bg-[#050510] border border-[#38BDF8]/30 flex items-center gap-2.5 text-xs font-mono text-[#38BDF8]">
                        <Trophy className="w-4 h-4 text-[#38BDF8] shrink-0" />
                        <span className="font-semibold">{item.highlightNote}</span>
                      </div>
                    )}

                    {/* Recognition Type Pill */}
                    <div className="pt-1">
                      <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#C4B5FD] bg-[#131326] px-2.5 py-1 rounded-md border border-white/5">
                        Status: {item.recognitionType}
                      </span>
                    </div>

                    {/* Authentic Description */}
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="relative z-10 flex flex-wrap gap-2 pt-4 mt-4 border-t border-white/10">
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
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </ScrollSection>
  );
};
