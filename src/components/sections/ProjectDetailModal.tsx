import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '../../types/portfolio';
import { Badge } from '../ui/Badge';
import {
  X,
  Shield,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Layers,
  Terminal,
  Cpu,
  Github,
  ExternalLink,
  Lock,
  FileCheck2,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen || !project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, project, onClose]);

  if (!isOpen || !project || !project.architectureDetails) {
    return null;
  }

  const { architectureDetails } = project;

  return (
    <AnimatePresence>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} Architecture & Security Specifications`}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#050510]/95 backdrop-blur-2xl overflow-y-auto"
        onClick={(e) => {
          if (e.target === dialogRef.current) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0D0D1A] border border-white/15 rounded-3xl p-6 sm:p-8 lg:p-10 overflow-y-auto shadow-2xl space-y-8 text-left"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between border-b border-white/10 pb-5 gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <Badge variant="glass" className="font-mono text-xs">
                  <span className="text-[#8B5CF6] font-bold">03</span>
                  <span className="text-white/40">//</span>
                  <span className="text-[#38BDF8]">ARCHITECTURE & SPECIFICATIONS</span>
                </Badge>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified MVP Implementation</span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                {project.title}
              </h2>
              {architectureDetails.tagline && (
                <p className="text-sm font-mono text-[#C4B5FD]">
                  "{architectureDetails.tagline}"
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#94A3B8]">
                ESC to close
              </span>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                aria-label="Close Project Specifications (Escape)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Section 1: Core Problem & Engineered Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#050510] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#38BDF8]">
                <AlertTriangle className="w-4 h-4 text-[#38BDF8]" />
                <span>THE THREAT MODEL & PROBLEM</span>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#050510] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8B5CF6]">
                <ShieldCheck className="w-4 h-4 text-[#8B5CF6]" />
                <span>ENGINEERED ARCHITECTURAL DEFENSE</span>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {project.solutionSummary}
              </p>
            </div>
          </div>

          {/* Section 2: Verified Development & Testing Evidence */}
          {architectureDetails.testingEvidence && (
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/30 via-[#0D0D1A] to-[#050510] border border-emerald-500/30 space-y-3 shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-mono font-bold text-[#F8FAFC]">
                    Verified Development & Testing Evidence
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                  {architectureDetails.testingEvidence.summary}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-[11px] text-[#94A3B8]">
                {architectureDetails.testingEvidence.details.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-[#050510]/80 border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 text-[11px] font-mono text-[#94A3B8]/80 italic">
                {architectureDetails.testingEvidence.disclaimer}
              </div>
            </div>
          )}

          {/* Section 3: The 14-Step Operational Security Lifecycle */}
          {architectureDetails.lifecycleSteps && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#38BDF8]" />
                  <span>The 14-Step Operational Security Lifecycle</span>
                </h3>
                <span className="text-[11px] font-mono text-[#94A3B8]">
                  Autonomous Agent End-to-End Loop
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2.5">
                {architectureDetails.lifecycleSteps.map((s) => (
                  <div
                    key={s.step}
                    className="p-3 rounded-xl bg-[#050510] border border-white/10 flex items-start gap-3 hover:border-[#8B5CF6]/30 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#C4B5FD] font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                      {s.step < 10 ? `0${s.step}` : s.step}
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono font-bold text-[#F8FAFC]">
                        {s.title}
                      </div>
                      <div className="text-[11px] text-[#94A3B8] leading-tight">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 4: Threat Vectors & Curated Scenarios */}
          {architectureDetails.threatVectors && (
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC] flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#8B5CF6]" />
                <span>Threat Categories & Curated Red-Team Scenarios</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {architectureDetails.threatVectors.map((tv, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#050510] border border-white/10 space-y-2">
                    <div className="text-xs font-mono font-bold text-[#38BDF8]">
                      {tv.category}
                    </div>
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                      {tv.description}
                    </p>
                    <div className="space-y-1 pt-1 border-t border-white/5">
                      {tv.scenarios.map((sc, scIdx) => (
                        <div key={scIdx} className="text-[10px] font-mono text-[#C4B5FD] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                          <span>{sc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 5: Implemented Features vs Planned Enhancements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Implemented Features */}
            {architectureDetails.implementedFeatures && (
              <div className="p-4 sm:p-5 rounded-2xl bg-[#050510] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>IMPLEMENTED & VERIFIED FEATURES</span>
                </div>
                <ul className="space-y-2">
                  {architectureDetails.implementedFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Planned Enhancements */}
            {architectureDetails.plannedEnhancements && (
              <div className="p-4 sm:p-5 rounded-2xl bg-[#050510] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C4B5FD]">
                  <Clock className="w-4 h-4 text-[#C4B5FD]" />
                  <span>PLANNED FUTURE ENHANCEMENTS</span>
                </div>
                <ul className="space-y-2">
                  {architectureDetails.plannedEnhancements.map((plan, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0 mt-1.5" />
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Section 6: Technology Architecture Stack */}
          {architectureDetails.techStackDetails && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#050510] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#38BDF8]">
                <Layers className="w-4 h-4" />
                <span>TECHNOLOGY ARCHITECTURE MATRIX</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 font-mono text-xs">
                {architectureDetails.techStackDetails.map((layer, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-[#0D0D1A] border border-white/5 space-y-1">
                    <span className="text-[10px] text-[#8B5CF6] uppercase font-bold tracking-wider">
                      {layer.layer}
                    </span>
                    <div className="text-[#F8FAFC] text-[11px] leading-tight">
                      {layer.technologies}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050510] border border-white/10 text-[#94A3B8]">
                <Github className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>Repository: Verification Pending</span>
              </span>

              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050510] border border-white/10 text-[#94A3B8]">
                <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Demo: Local Environment (Public Demo Pending)</span>
              </span>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-white/10 text-[#F8FAFC] hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
            >
              Close Specifications
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
