import React from 'react';
import { ScrollSection } from '../animations/ScrollSection';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { portfolioData } from '../../config/portfolioData';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { Badge } from '../ui/Badge';
import { Mail, ArrowUpRight, Github, Linkedin, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { tagline, email, availabilityStatus, socials } = portfolioData.contact;

  const socialIconMap: Record<string, React.ReactNode> = {
    Github: <Github className="w-4 h-4 text-[#8B5CF6]" />,
    Linkedin: <Linkedin className="w-4 h-4 text-[#38BDF8]" />,
    Mail: <Mail className="w-4 h-4 text-[#C4B5FD]" />,
  };

  return (
    <ScrollSection
      id="contact"
      sectionNumber="09"
      eyebrow="CONTACT"
      title={tagline}
      subtitle="Open for internships, technical collaborations, hackathons, and creative projects."
    >
      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-8 sm:p-14 border border-[#8B5CF6]/30 text-center relative overflow-hidden bg-[#0D0D1A]/90 space-y-8">
          
          {/* Subtle Background Glow */}
          <div 
            className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full opacity-25 blur-[90px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), rgba(56, 189, 248, 0.2) 70%, transparent)',
            }}
          />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            
            <div className="flex justify-center">
              <Badge pulse pulseColor="green" variant="glass" className="py-1.5 px-4 text-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{availabilityStatus}</span>
              </Badge>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8FAFC]">
                Let's Connect & Collaborate
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Whether you have an innovative software project, internship opportunity, or hackathon team invite, feel free to reach out.
              </p>
            </div>

            {/* Email CTA Button & Direct Address */}
            <div className="pt-4 flex flex-col items-center gap-3">
              <MagneticButton
                variant="primary"
                size="lg"
                href={`mailto:${email}`}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Send an Email
              </MagneticButton>
              <a
                href={`mailto:${email}`}
                className="font-mono text-xs sm:text-sm text-[#C4B5FD] hover:text-[#F8FAFC] transition-colors underline underline-offset-4 decoration-[#8B5CF6]/50 hover:decoration-[#38BDF8]"
              >
                {email}
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              {socials.map((social) => {
                const isMail = social.href.startsWith('mailto:');
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    {...(!isMail && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#8B5CF6]/40 transition-all hover:scale-105"
                  >
                    {socialIconMap[social.iconName] || <Mail className="w-4 h-4 text-[#C4B5FD]" />}
                    <span>{social.name}</span>
                    {!isMail && <ArrowUpRight className="w-3 h-3 text-[#94A3B8]/60" />}
                  </a>
                );
              })}
            </div>

          </div>

        </GlassCard>
      </div>
    </ScrollSection>
  );
};
