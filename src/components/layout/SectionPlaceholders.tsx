import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { Sparkles, Code2, Briefcase, Palette, Mail } from 'lucide-react';

export const SectionPlaceholders: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-16">
      
      {/* About Section Anchor */}
      <section id="about" className="scroll-mt-28">
        <GlassCard className="p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex justify-center">
              <Badge pulse pulseColor="violet" variant="glow">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About Nirmala</span>
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-[#F8FAFC]">Computer Science & Engineering Student</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Passionate about software architecture, algorithms, modern web application design, and generative AI. Detailed academic journey, hackathon participation, and technical skills will be highlighted here.
            </p>
          </div>
        </GlassCard>
      </section>

      {/* Projects Section Anchor */}
      <section id="projects" className="scroll-mt-28">
        <GlassCard className="p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex justify-center">
              <Badge pulse pulseColor="cyan" variant="glow">
                <Code2 className="w-3.5 h-3.5" />
                <span>Featured Projects</span>
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-[#F8FAFC]">Selected Software & AI Projects</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Interactive project showcase featuring full-stack applications, hackathon entries, and AI experiments. Ready for project cards and live demo links in the next development phase.
            </p>
          </div>
        </GlassCard>
      </section>

      {/* Experience Section Anchor */}
      <section id="experience" className="scroll-mt-28">
        <GlassCard className="p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex justify-center">
              <Badge pulse pulseColor="violet" variant="glow">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Experience & Hackathons</span>
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-[#F8FAFC]">Technical Journey & Achievements</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Timeline of hackathon builds, leadership roles, academic projects, and certifications.
            </p>
          </div>
        </GlassCard>
      </section>

      {/* Art Gallery Section Anchor */}
      <section id="art" className="scroll-mt-28">
        <GlassCard className="p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex justify-center">
              <Badge pulse pulseColor="cyan" variant="glow">
                <Palette className="w-3.5 h-3.5" />
                <span>Pencil Portrait Gallery</span>
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-[#F8FAFC]">Fine Art & Realism Sketches</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Showcasing hand-drawn graphite & charcoal portraits combining precision detailing, contrast, and visual emotion.
            </p>
          </div>
        </GlassCard>
      </section>

      {/* Contact Section Anchor */}
      <section id="contact" className="scroll-mt-28">
        <GlassCard className="p-8 sm:p-12 border border-[#8B5CF6]/30 text-center relative overflow-hidden bg-[#0D0D1A]/90">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex justify-center">
              <Badge pulse pulseColor="green" variant="glass">
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-[#F8FAFC]">Let's Build Something Extraordinary</h2>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Open for software engineering internships, collaborative hackathons, and creative projects.
            </p>
          </div>
        </GlassCard>
      </section>

    </div>
  );
};
