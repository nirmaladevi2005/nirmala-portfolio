import React from 'react';
import { ScrollSection } from '../animations/ScrollSection';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { Badge } from '../ui/Badge';
import {
  FileText,
  Download,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const RESUME_PATH = '/resume/Nirmala_Devi_Patel_Resume.pdf';
const RESUME_FILENAME = 'Nirmala_Devi_Patel_Resume.pdf';

export const ResumeSection: React.FC = () => {
  return (
    <ScrollSection
      id="resume"
      sectionNumber="CV"
      eyebrow="CURRICULUM VITAE"
      title="Professional Resume."
      subtitle="Verified documentation of academic coursework, engineering internships, and applied AI project architecture."
    >
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll variant="revealUp">
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#0D0D1A]/95 border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-500 overflow-hidden shadow-2xl group">
            {/* Ambient Background Aura */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-[#8B5CF6]/20 via-[#38BDF8]/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:opacity-100 transition-opacity duration-700 opacity-60" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-tr from-[#38BDF8]/15 via-[#8B5CF6]/10 to-transparent rounded-full blur-3xl pointer-events-none opacity-40" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 space-y-8">
              {/* Document Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#050510] border border-white/15 text-[#C4B5FD] shadow-inner group-hover:border-[#8B5CF6]/50 group-hover:scale-105 transition-all">
                    <FileText className="w-7 h-7 text-[#8B5CF6]" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm sm:text-base font-bold text-[#F8FAFC]">
                        {RESUME_FILENAME}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#94A3B8]">
                      <span className="text-[#38BDF8]">PDF Document</span>
                      <span className="text-white/20">•</span>
                      <span>Verified Curriculum Vitae</span>
                      <span className="text-white/20">•</span>
                      <span>122 KB</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <Badge pulse pulseColor="green" variant="glass" className="py-1 px-3 text-xs font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Candidate Profile</span>
                  </Badge>
                </div>
              </div>

              {/* Document Focus & Scope Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#050510]/80 border border-white/5 space-y-1">
                  <div className="text-[10px] text-[#8B5CF6] uppercase font-bold tracking-wider">
                    Target Roles
                  </div>
                  <div className="text-[#F8FAFC] text-xs">
                    Full-Stack Development · AI Engineering · Software Architecture
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#050510]/80 border border-white/5 space-y-1">
                  <div className="text-[10px] text-[#38BDF8] uppercase font-bold tracking-wider">
                    Primary Stack
                  </div>
                  <div className="text-[#F8FAFC] text-xs">
                    React & TypeScript · Python & FastAPI · Deterministic AI Security
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#050510]/80 border border-white/5 space-y-1">
                  <div className="text-[10px] text-[#C4B5FD] uppercase font-bold tracking-wider">
                    Academic Background
                  </div>
                  <div className="text-[#F8FAFC] text-xs">
                    B.Tech in Computer Science & Engineering (2024 – 2028)
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#050510]/80 border border-white/5 space-y-1">
                  <div className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider">
                    Document Standard
                  </div>
                  <div className="text-[#F8FAFC] text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>ATS-Optimized Vector PDF · Complete 2-Page CV</span>
                  </div>
                </div>
              </div>

              {/* Two Prominent Actions (View & Download) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                {/* View Resume Action */}
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#131326] border border-white/15 text-sm font-mono font-medium text-[#F8FAFC] hover:text-white hover:border-[#38BDF8]/60 hover:bg-[#38BDF8]/10 transition-all hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                  aria-label="View Resume PDF in a new browser tab"
                >
                  <ExternalLink className="w-4 h-4 text-[#38BDF8]" />
                  <span>View Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8]" />
                </a>

                {/* Download Resume Action */}
                <a
                  href={RESUME_PATH}
                  download={RESUME_FILENAME}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] text-white text-sm font-mono font-bold transition-all hover:scale-105 shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                  aria-label={`Download Resume PDF (${RESUME_FILENAME})`}
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Download Resume</span>
                  <span className="text-xs font-normal text-white/70">.pdf</span>
                </a>
              </div>

              {/* Subtle Confidentiality & Recruiter Note */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#94A3B8]/70">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>Direct curriculum vitae link for recruiters, hiring managers, and collaborators.</span>
                </span>
                <span className="text-[11px] sm:text-right shrink-0">
                  Last Updated: 2026 Edition
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </ScrollSection>
  );
};
