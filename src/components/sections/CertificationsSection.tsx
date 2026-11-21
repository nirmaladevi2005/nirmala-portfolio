import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollSection } from '../animations/ScrollSection';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { portfolioData } from '../../config/portfolioData';
import { ShieldCheck, ChevronDown, Calendar, AlertTriangle, ExternalLink, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { CertificationItem } from '../../types/portfolio';

export const CertificationsSection: React.FC = () => {
  const { certifications } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    'All',
    'Artificial Intelligence',
    'Web Development',
    'Programming',
    'Sustainability',
    'Disaster Preparedness',
  ];

  const filteredCerts = certifications.filter((cert) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Artificial Intelligence') {
      return (
        cert.category.includes('Artificial Intelligence') ||
        cert.category.includes('Machine Learning') ||
        cert.category.includes('AI')
      );
    }
    if (selectedCategory === 'Web Development') return cert.category.includes('Web');
    if (selectedCategory === 'Programming') return cert.category.includes('Programming');
    if (selectedCategory === 'Sustainability') return cert.category.includes('Sustainability');
    if (selectedCategory === 'Disaster Preparedness') return cert.category.includes('Disaster');
    return cert.category.includes(selectedCategory);
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI') || category.includes('Artificial Intelligence') || category.includes('Machine Learning')) {
      return 'text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30';
    }
    if (category.includes('Sustainability')) {
      return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
    }
    if (category.includes('Programming') || category.includes('Web')) {
      return 'text-[#8B5CF6] bg-[#8B5CF6]/10 border-[#8B5CF6]/30';
    }
    if (category.includes('Disaster')) {
      return 'text-[#C4B5FD] bg-[#C4B5FD]/10 border-[#C4B5FD]/30';
    }
    return 'text-[#94A3B8] bg-white/5 border-white/10';
  };

  return (
    <ScrollSection
      id="certifications"
      sectionNumber="07"
      eyebrow="CERTIFICATIONS & TRAINING"
      title="Verified Credentials & Training."
      subtitle="Foundational courses, specialized workshops, government programs, and technical certifications."
    >
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Category Filter Bar */}
        <RevealOnScroll variant="revealUp">
          <div className="flex flex-wrap items-center gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#131326] border border-[#8B5CF6] text-[#F8FAFC] shadow-sm shadow-[#8B5CF6]/20'
                    : 'bg-[#0D0D1A]/60 border border-white/10 text-[#94A3B8] hover:border-white/25 hover:text-[#F8FAFC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Directory Entry Rows */}
        <div className="space-y-3">
          {filteredCerts.map((cert, idx) => {
            const isExpanded = expandedId === cert.id;
            const categoryBadge = getCategoryColor(cert.category);

            return (
              <RevealOnScroll
                key={cert.id}
                variant="revealUp"
                delay={idx * 0.05}
              >
                <div
                  className={`group rounded-2xl bg-[#0D0D1A]/85 backdrop-blur-md border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'border-[#8B5CF6]/50 shadow-xl shadow-black/40'
                      : 'border-white/10 hover:border-[#8B5CF6]/30 hover:bg-[#111124]'
                  }`}
                >
                  {/* Main Row Bar (Clickable) */}
                  <div
                    onClick={() => toggleExpand(cert.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleExpand(cert.id);
                      }
                    }}
                    aria-expanded={isExpanded}
                  >
                    {/* Left Side: Number, Category & Title */}
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs text-[#8B5CF6] font-bold pt-1">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <div className="space-y-1.5 max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border ${categoryBadge}`}>
                            {cert.category}
                          </span>

                          {cert.issuerPendingConfirmation && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300">
                              <AlertTriangle className="w-3 h-3 text-amber-400" />
                              <span>Issuer Confirmation Needed</span>
                            </span>
                          )}
                        </div>

                        <h3 className="text-base sm:text-lg font-extrabold text-[#F8FAFC] group-hover:text-[#C4B5FD] transition-colors leading-snug">
                          {cert.title}
                        </h3>

                        {cert.issuer && (
                          <div className="text-xs font-mono text-[#94A3B8]">
                            Provider: <span className="text-[#F8FAFC]/90">{cert.issuer}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Side: Date & Expand Chevron */}
                    <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pl-8 md:pl-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8]">
                        <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>{cert.issueDate || 'Date not recorded'}</span>
                      </div>

                      <div className={`p-2 rounded-lg bg-[#050510] border border-white/10 text-[#C4B5FD] transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-[#131326] border-[#8B5CF6]/50' : 'group-hover:scale-105'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Detail Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-white/10 space-y-4 bg-[#050510]/50">
                          
                          {/* Discrepancy Alert for Java Certification */}
                          {cert.issuerPendingConfirmation && cert.issuerNotes && (
                            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs font-mono text-amber-200">
                              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                              <div className="space-y-1">
                                <div className="font-bold uppercase tracking-wider text-amber-300">
                                  Issuer Discrepancy Notice
                                </div>
                                <div className="leading-relaxed">
                                  {cert.issuerNotes}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Full Organization Listing */}
                          {cert.issuer && (
                            <div className="space-y-1">
                              <div className="text-[11px] font-mono text-[#C4B5FD] uppercase tracking-wider font-semibold">
                                Accrediting Organizations //
                              </div>
                              <p className="text-xs sm:text-sm text-[#F8FAFC] leading-relaxed">
                                {cert.issuer}
                              </p>
                            </div>
                          )}

                          {/* Covered Skills */}
                          {cert.skillsCovered && cert.skillsCovered.length > 0 && (
                            <div className="space-y-1.5">
                              <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
                                Key Topics & Domains //
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {cert.skillsCovered.map((skill) => (
                                  <span
                                    key={skill}
                                    className="px-2.5 py-1 rounded-md bg-[#131326] border border-white/10 text-xs font-mono text-[#C4B5FD]"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Verification Links Slot (Clean schema-ready button) */}
                          <div className="pt-2 flex items-center justify-between border-t border-white/5 text-xs font-mono">
                            <span className="text-[#94A3B8]">
                              Record: {cert.issueDate ? `Verified completion (${cert.issueDate})` : 'Curricular credential recorded'}
                            </span>

                            {cert.credentialUrl ? (
                              <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[#38BDF8] hover:underline"
                              >
                                <span>Verify Official Credential</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            ) : (
                              <span className="text-[#94A3B8]/60 italic">
                                Certificate document slot ready
                              </span>
                            )}
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </ScrollSection>
  );
};
