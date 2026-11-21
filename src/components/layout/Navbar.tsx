import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Badge } from '../ui/Badge';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // List of sections to track
      const allSections = [
        'hero',
        'story',
        'about',
        'what-i-do',
        'projects',
        'skills',
        'experience',
        'achievements',
        'certifications',
        'art',
        'contact',
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of allSections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // Map sub-sections to their primary chapter for the 5-link navbar
            if (section === 'about' || section === 'what-i-do') {
              setActiveSection('story');
            } else if (
              section === 'skills' ||
              section === 'experience' ||
              section === 'achievements' ||
              section === 'certifications'
            ) {
              setActiveSection('projects');
            } else {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2.5 bg-[#050510]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Monogram */}
            <a
              href="#hero"
              className="group flex items-center gap-2.5 focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#0D0D1A] border border-white/15 group-hover:border-[#8B5CF6]/50 transition-all duration-300 overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 to-[#38BDF8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="font-mono text-xs font-bold text-[#F8FAFC] group-hover:text-[#C4B5FD] transition-colors">
                  NDP
                </span>
                <span className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-[#38BDF8]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#C4B5FD] transition-colors">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] font-mono text-[#94A3B8]/80 leading-none">
                  Creative Developer
                </span>
              </div>
            </a>

            {/* Streamlined Desktop Navigation Links (5 Core Anchors) */}
            <nav className="hidden md:flex items-center gap-1 bg-[#0D0D1A]/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-inner">
              {siteConfig.navigation.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-[#F8FAFC]'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 rounded-full bg-white/10 border border-white/15 shadow-sm"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Action & Status Badge */}
            <div className="hidden lg:flex items-center gap-3">
              <Badge pulse pulseColor="green" variant="glass" className="py-1 px-3 text-[11px]">
                {siteConfig.availability.text}
              </Badge>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/15 hover:bg-[#8B5CF6]/25 border border-[#8B5CF6]/35 text-[#C4B5FD] transition-all hover:scale-105"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#0D0D1A]/80 border border-white/10 text-[#94A3B8] hover:text-[#F8FAFC] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 p-4 md:hidden"
          >
            <div className="glass-panel p-5 rounded-2xl border border-white/15 shadow-2xl space-y-4 bg-[#0D0D1A]/95 backdrop-blur-2xl">
              <div className="pb-2.5 border-b border-white/10 flex items-center justify-between">
                <Badge pulse pulseColor="green" variant="glass" className="text-[11px]">
                  {siteConfig.availability.text}
                </Badge>
                <span className="font-mono text-[10px] text-[#94A3B8]">08 Chapters</span>
              </div>

              {/* Primary 5 Chapters */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-[#8B5CF6] uppercase tracking-wider px-3 pb-1">
                  Primary Chapters
                </span>
                {siteConfig.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg hover:bg-white/5 text-[#F8FAFC] transition-colors"
                  >
                    <span>{item.label}</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6] opacity-70" />
                  </a>
                ))}
              </div>

              {/* Secondary Chapters (Tech, Journey, Honors, Credentials) */}
              {siteConfig.secondaryNavigation && (
                <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
                  <span className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-wider px-3 pb-1 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-[#38BDF8]" />
                    <span>Deep Dives & Credentials</span>
                  </span>
                  <div className="grid grid-cols-2 gap-1 px-1">
                    {siteConfig.secondaryNavigation.map((sec) => (
                      <a
                        key={sec.label}
                        href={sec.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-2.5 py-1.5 text-[11px] font-mono rounded-lg hover:bg-white/5 text-[#94A3B8] hover:text-[#C4B5FD] transition-colors"
                      >
                        {sec.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-medium text-xs shadow-md shadow-[#8B5CF6]/20"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
