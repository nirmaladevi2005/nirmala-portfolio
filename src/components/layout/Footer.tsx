import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050510] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand Monogram & Role */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0D0D1A] border border-white/15">
              <span className="font-mono text-xs font-bold text-[#C4B5FD]">NDP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#F8FAFC]">
                {siteConfig.name}
              </span>
              <span className="text-xs font-mono text-[#94A3B8]">
                {siteConfig.subtitle}
              </span>
            </div>
          </div>

          {/* Quick Navigation Footer Links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-[#94A3B8]">
            {siteConfig.navigation.map((nav) => (
              <a
                key={nav.label}
                href={nav.href}
                className="hover:text-[#C4B5FD] transition-colors"
              >
                {nav.label}
              </a>
            ))}
            {siteConfig.secondaryNavigation && (
              <>
                <span className="text-white/20 hidden sm:inline">•</span>
                {siteConfig.secondaryNavigation.map((nav) => (
                  <a
                    key={nav.label}
                    href={nav.href}
                    className="hover:text-[#38BDF8] transition-colors"
                  >
                    {nav.label}
                  </a>
                ))}
              </>
            )}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#8B5CF6]/40 transition-all cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#8B5CF6]" />
          </button>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]/60">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Built with React, TypeScript, Tailwind CSS & Lenis</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
