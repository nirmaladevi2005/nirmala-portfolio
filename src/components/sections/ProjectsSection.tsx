import React, { useState, useRef, useCallback } from 'react';
import { ScrollSection } from '../animations/ScrollSection';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { portfolioData } from '../../config/portfolioData';
import { Github, ExternalLink, Sparkles, Layers, Cpu, Activity, AlertCircle, CheckCircle2, ShieldCheck, ArrowUpRight, Shield } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';

// Helper to check whether a URL is authentic or still awaiting input
const isVerifiedUrl = (url?: string): boolean => {
  if (!url) return false;
  return !url.includes('[') && !url.includes(']');
};

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<ProjectItem | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const handleOpenModal = (project: ProjectItem, e: React.MouseEvent<HTMLElement>) => {
    triggerRef.current = e.currentTarget;
    setSelectedProjectForModal(project);
  };

  const handleCloseModal = useCallback(() => {
    setSelectedProjectForModal(null);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, []);

  // Custom visual concept or telemetry simulation for each project domain
  const renderProjectVisual = (project: ProjectItem) => {
    const isAgentShield = project.id === 'agent-shield';
    const isTrash = project.id === 'trash-chain';
    const isKrishi = project.id === 'krishi-sakha-ai';
    const isWind = project.id === 'wind-turbine-fault-detection';

    const domainIcon = isAgentShield ? (
      <Shield className="w-3.5 h-3.5 text-[#38BDF8]" />
    ) : isTrash ? (
      <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
    ) : isKrishi ? (
      <Cpu className="w-3.5 h-3.5 text-emerald-400" />
    ) : (
      <Activity className="w-3.5 h-3.5 text-[#C4B5FD]" />
    );

    const domainLabel = isAgentShield
      ? 'AI Agent Security & Policy Guardrails'
      : isTrash
      ? 'Decentralized Waste Traceability'
      : isKrishi
      ? 'Agricultural AI Advisory & Diagnosis'
      : 'SCADA Time-Series Anomaly Detection';

    const terminalPath = isAgentShield
      ? 'agentshield://runtime-shield/inspection-monitor'
      : isTrash
      ? 'trash-chain://concept-preview'
      : isKrishi
      ? 'krishisakha://concept-preview'
      : 'scada-telemetry://concept-preview';

    const accentGlow = isAgentShield
      ? 'bg-[#38BDF8]/20'
      : isKrishi
      ? 'bg-emerald-500/15'
      : isWind
      ? 'bg-[#8B5CF6]/15'
      : 'bg-[#38BDF8]/15';

    // If an authentic concept visual image is provided, display it in a high-craft viewport
    if (project.imageUrl) {
      return (
        <div className="relative w-full bg-[#050510] rounded-2xl border border-white/10 p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-2xl group/vis transition-all duration-500 hover:border-[#8B5CF6]/40">
          {/* Ambient Glow */}
          <div
            className={`absolute -top-12 -right-12 w-48 h-48 ${accentGlow} rounded-full blur-3xl pointer-events-none opacity-50 group-hover/vis:opacity-90 transition-opacity duration-500`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Window Topbar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="pl-2 font-mono text-[10px] sm:text-[11px] text-[#94A3B8] truncate max-w-[150px] sm:max-w-none">
                {terminalPath}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#C4B5FD] bg-[#8B5CF6]/10 px-2 py-0.5 rounded border border-[#8B5CF6]/20 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
              <span>Concept Visual</span>
            </span>
          </div>

          {/* Responsive Concept Image Container */}
          <div className="relative my-3 sm:my-4 rounded-xl overflow-hidden bg-[#0D0D1A] border border-white/10 shadow-inner aspect-[500/301] w-full flex items-center justify-center">
            <img
              src={project.imageUrl}
              alt={project.imageAlt || `${project.title} illustrative concept preview`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/vis:scale-[1.03]"
            />
            {/* Subtle bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/50 via-transparent to-transparent pointer-events-none" />

            {/* Overlaid Concept Watermark Tag */}
            <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider text-[#F8FAFC]/90 bg-[#050510]/85 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 shadow-sm">
                <Sparkles className="w-2.5 h-2.5 text-[#38BDF8]" />
                <span>Concept Preview</span>
              </span>
            </div>
          </div>

          {/* Viewport Footer with Architecture Domain & Clear Disclaimer */}
          <div className="pt-2.5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[11px] font-mono text-[#94A3B8] z-10">
            <span className="flex items-center gap-1.5 truncate">
              {domainIcon}
              <span className="truncate">{domainLabel}</span>
            </span>
            <span className="text-[10px] text-[#94A3B8]/70 italic sm:text-right shrink-0">
              *Illustrative concept preview · Not live app telemetry
            </span>
          </div>
        </div>
      );
    }

    // Fallback simulation when no image is configured
    switch (project.id) {
      case 'trash-chain':
        return (
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#050510] rounded-2xl border border-white/10 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl group/vis">
            {/* Ambient Background Grid & Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Window Topbar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="pl-2 font-mono text-[10px] text-[#94A3B8]">trash-chain://telemetry/node-monitor</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ledger Active</span>
              </span>
            </div>

            {/* Visual Blockchain Flow Simulation */}
            <div className="py-6 space-y-4 z-10">
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                <div className="p-3 rounded-xl bg-[#0D0D1A] border border-white/10 space-y-1">
                  <div className="text-[#38BDF8] font-bold">Node 01</div>
                  <div className="text-[#F8FAFC]">Waste Origin</div>
                  <div className="text-[9px] text-[#94A3B8]">Gen Batch #409</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0D0D1A] border border-[#38BDF8]/40 space-y-1 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                  <div className="text-[#C4B5FD] font-bold">Transit</div>
                  <div className="text-[#F8FAFC]">Checkpoints</div>
                  <div className="text-[9px] text-emerald-400">Verified Sig</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0D0D1A] border border-white/10 space-y-1">
                  <div className="text-[#8B5CF6] font-bold">Node 03</div>
                  <div className="text-[#F8FAFC]">Processing</div>
                  <div className="text-[9px] text-[#94A3B8]">Recycle Audit</div>
                </div>
              </div>

              {/* Simulated Hash Telemetry Bar */}
              <div className="p-3 rounded-xl bg-[#0D0D1A]/90 border border-white/10 font-mono text-[11px] text-[#94A3B8] flex items-center justify-between">
                <span className="text-white/60">Immutable Proof:</span>
                <span className="text-[#38BDF8] text-[10px]">0x7F9B...48C2 [Tamper-Evident]</span>
              </div>
            </div>

            {/* Viewport Footer Placeholder Note */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#94A3B8] z-10">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Verified Waste Traceability</span>
              </span>
              <span className="text-[#C4B5FD]">Upload Screenshot Slot</span>
            </div>
          </div>
        );

      case 'krishi-sakha-ai':
        return (
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#050510] rounded-2xl border border-white/10 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl group/vis">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Window Topbar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="pl-2 font-mono text-[10px] text-[#94A3B8]">krishisakha://diagnostic/crop-analysis</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded border border-[#38BDF8]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span>Inference Model Online</span>
              </span>
            </div>

            {/* AI Crop Diagnostic Simulation */}
            <div className="py-5 space-y-3 z-10">
              <div className="p-3.5 rounded-xl bg-[#0D0D1A] border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-bold">Crop Disease Diagnostic</span>
                  <span className="text-[#F8FAFC]">Model Confidence: 94.8%</span>
                </div>
                <div className="w-full bg-[#050510] h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-[#38BDF8] h-full w-[94%]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                <div className="p-2.5 rounded-xl bg-[#0D0D1A] border border-white/10 space-y-1">
                  <span className="text-[#94A3B8]">Soil & Humidity</span>
                  <div className="text-[#F8FAFC] font-bold">Optimal Range</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#0D0D1A] border border-white/10 space-y-1">
                  <span className="text-[#94A3B8]">Advisory Engine</span>
                  <div className="text-emerald-400 font-bold">Targeted Treatment</div>
                </div>
              </div>
            </div>

            {/* Viewport Footer Placeholder Note */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#94A3B8] z-10">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>Agricultural Machine Learning</span>
              </span>
              <span className="text-[#38BDF8]">Upload Screenshot Slot</span>
            </div>
          </div>
        );

      case 'wind-turbine-fault-detection':
        return (
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#050510] rounded-2xl border border-white/10 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl group/vis">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Window Topbar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="pl-2 font-mono text-[10px] text-[#94A3B8]">scada://turbine-04/telemetry-stream</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#C4B5FD] bg-[#8B5CF6]/10 px-2 py-0.5 rounded border border-[#8B5CF6]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                <span>SCADA Live Feed</span>
              </span>
            </div>

            {/* SCADA Waveform / Telemetry Simulation */}
            <div className="py-4 space-y-3 z-10">
              <div className="p-3 rounded-xl bg-[#0D0D1A] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                  <span>Vibration Frequency Waveform</span>
                  <span className="text-emerald-400">Peak: 1.82g (Normal)</span>
                </div>
                {/* Simulated Waveform SVG */}
                <div className="h-10 w-full flex items-center justify-center">
                  <svg className="w-full h-8 stroke-[#38BDF8]" fill="none" viewBox="0 0 300 40">
                    <path
                      d="M0 20 Q 25 5, 50 20 T 100 20 T 150 10 T 200 30 T 250 20 T 300 20"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                <div className="p-2 rounded-xl bg-[#0D0D1A] border border-white/10 space-y-0.5">
                  <span className="text-[#94A3B8]">Rotor RPM</span>
                  <div className="text-[#F8FAFC] font-bold">14.6 RPM</div>
                </div>
                <div className="p-2 rounded-xl bg-[#0D0D1A] border border-white/10 space-y-0.5">
                  <span className="text-[#94A3B8]">Bearing Temp</span>
                  <div className="text-[#38BDF8] font-bold">54.2° C</div>
                </div>
                <div className="p-2 rounded-xl bg-[#0D0D1A] border border-white/10 space-y-0.5">
                  <span className="text-[#94A3B8]">Anomaly Index</span>
                  <div className="text-emerald-400 font-bold">0.03 (Safe)</div>
                </div>
              </div>
            </div>

            {/* Viewport Footer Placeholder Note */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#94A3B8] z-10">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#C4B5FD]" />
                <span>Time-Series SCADA Analytics</span>
              </span>
              <span className="text-[#8B5CF6]">Upload Screenshot Slot</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-full min-h-[300px] bg-[#050510] rounded-2xl border border-white/10 flex items-center justify-center p-6 text-center font-mono text-xs text-[#94A3B8]">
            {project.imagePlaceholder}
          </div>
        );
    }
  };

  return (
    <ScrollSection
      id="projects"
      sectionNumber="03"
      eyebrow="FEATURED PROJECTS"
      title="Engineered Solutions & Research."
      subtitle="Primary technical showcases spanning autonomous AI agent security, decentralized waste tracking, agricultural crop diagnosis, and industrial SCADA anomaly detection."
    >
      <div className="space-y-16 lg:space-y-24">
        {projects.map((project, idx) => {
          const hasGithub = isVerifiedUrl(project.githubUrl);
          const hasLive = isVerifiedUrl(project.liveUrl);

          return (
            <RevealOnScroll
              key={project.id}
              variant="revealUp"
              delay={idx * 0.12}
            >
              <div className="group relative rounded-3xl p-7 sm:p-10 lg:p-12 bg-[#0D0D1A]/90 backdrop-blur-xl border border-white/10 hover:border-[#8B5CF6]/40 transition-all duration-500 overflow-hidden shadow-2xl">
                
                {/* Background Atmospheric Depth Glow */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                  style={{
                    background: `radial-gradient(800px circle at top ${idx % 2 === 0 ? 'left' : 'right'}, rgba(139, 92, 246, 0.12), transparent 70%)`,
                  }}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left/Alternating Column: Project Narrative & Architectural Details */}
                  <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Top Index & Category Badge */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#8B5CF6]">
                        PROJECT 0{idx + 1}
                      </span>
                      <span className="w-8 h-[1px] bg-[#8B5CF6]/40" />
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131326] border border-white/10 text-xs font-mono text-[#38BDF8]">
                        <Sparkles className="w-3 h-3 text-[#38BDF8]" />
                        <span>{project.category || 'Featured Engineering Showcase'}</span>
                      </span>
                      {project.status && (
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F8FAFC] group-hover:via-[#C4B5FD] group-hover:to-[#38BDF8] transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Problem & Solution Callout Blocks */}
                    {(project.problemStatement || project.solutionSummary) && (
                      <div className="grid grid-cols-1 gap-3.5 pt-2">
                        {project.problemStatement && (
                          <div className="p-4 rounded-xl bg-[#050510]/80 border border-white/5 space-y-1">
                            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] font-bold">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>THE PROBLEM STATEMENT</span>
                            </div>
                            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                              {project.problemStatement}
                            </p>
                          </div>
                        )}

                        {project.solutionSummary && (
                          <div className="p-4 rounded-xl bg-[#050510]/80 border border-white/5 space-y-1">
                            <div className="flex items-center gap-2 text-xs font-mono text-[#8B5CF6] font-bold">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>ENGINEERED SOLUTION</span>
                            </div>
                            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                              {project.solutionSummary}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Key Project Metrics / Architectural Attributes */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-2.5 pt-1 border-t border-white/5">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="p-2.5 rounded-lg bg-[#050510]/50 border border-white/5">
                            <div className="text-[10px] font-mono text-[#94A3B8] uppercase">
                              {metric.label}
                            </div>
                            <div className="text-xs font-mono font-bold text-[#F8FAFC] truncate">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-lg bg-[#131326] border border-white/10 font-mono text-xs text-[#C4B5FD] hover:border-[#8B5CF6]/50 transition-colors cursor-default"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Links Row */}
                    <div className="flex flex-wrap items-center gap-3.5 pt-4">
                      {project.architectureDetails && (
                        <button
                          onClick={(e) => handleOpenModal(project, e)}
                          className="inline-flex items-center gap-2 text-xs font-mono px-5 py-2.5 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/50 text-[#F8FAFC] hover:bg-[#8B5CF6]/35 hover:border-[#C4B5FD]/60 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.2)] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                        >
                          <Shield className="w-4 h-4 text-[#38BDF8]" />
                          <span>Architecture & Security Specs</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#C4B5FD]" />
                        </button>
                      )}

                      {hasGithub ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono px-5 py-2.5 rounded-full bg-[#131326] border border-white/15 text-[#F8FAFC] hover:border-[#8B5CF6]/60 hover:text-[#C4B5FD] transition-all hover:scale-105"
                        >
                          <Github className="w-4 h-4 text-[#8B5CF6]" />
                          <span>Source Code</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full bg-[#050510] border border-white/10 text-[#94A3B8]/60 cursor-not-allowed">
                          <Github className="w-3.5 h-3.5" />
                          <span>Repository (Verification Pending)</span>
                        </span>
                      )}

                      {hasLive ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono px-5 py-2.5 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#C4B5FD] hover:bg-[#8B5CF6]/35 transition-all hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live System Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full bg-[#050510] border border-white/10 text-[#94A3B8]/60 cursor-not-allowed">
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo (Link Pending)</span>
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Right/Alternating Column: Interactive Concept Visual / Interface Viewport */}
                  <div className={`lg:col-span-5 h-full flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    {renderProjectVisual(project)}
                  </div>

                </div>

              </div>
            </RevealOnScroll>
          );
        })}
      </div>

      {/* Accessible Project Detail Modal (Specs, Lifecycle, Threats, Evidence) */}
      <ProjectDetailModal
        project={selectedProjectForModal}
        isOpen={selectedProjectForModal !== null}
        onClose={handleCloseModal}
      />
    </ScrollSection>
  );
};
