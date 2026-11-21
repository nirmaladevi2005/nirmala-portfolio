import React from 'react';
import { ScrollSection } from '../animations/ScrollSection';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { portfolioData } from '../../config/portfolioData';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { Badge } from '../ui/Badge';
import { Mail, ArrowUpRight, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { tagline, email, availabilityStatus, socials } = portfolioData.contact;

  const socialIconMap: Record<string, React.ReactNode> = {
    Github: <Github className="w-4 h-4" />,
    Linkedin: <Linkedin className="w-4 h-4" />,
    Twitter: <Twitter className="w-4 h-4" />,
    Mail: <Mail className="w-4 h-4" />,
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

            {/* Email CTA Button */}
            <div className="pt-4 flex justify-center">
              <MagneticButton
                variant="primary"
                size="lg"
                href={`mailto:${email}`}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Send an Email
              </MagneticButton>
            </div>

            {/* Social Links Row */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#8B5CF6]/40 transition-all"
                >
                  {socialIconMap[social.iconName] || <Mail className="w-4 h-4" />}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>

          </div>

        </GlassCard>
      </div>
    </ScrollSection>
  );
};
