import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollSection } from '../animations/ScrollSection';
import { RevealOnScroll } from '../animations/RevealOnScroll';
import { portfolioData } from '../../config/portfolioData';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ArtItem } from '../../types/portfolio';
import {
  Palette,
  Maximize2,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  PenTool,
  Eye,
  FileImage,
  Info,
  CheckCircle2,
  Layers,
} from 'lucide-react';

// Helper to check if a string contains verified text without placeholder brackets
const isVerifiedField = (value?: string): boolean => {
  if (!value) return false;
  return !value.includes('[') && !value.includes(']');
};

export const ArtGallerySection: React.FC = () => {
  const { artworks } = portfolioData;
  const [selectedArtIndex, setSelectedArtIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const isReducedMotion = useReducedMotion();

  // Accessibility & focus management refs
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  // Active artwork currently viewed in fullscreen lightbox
  const activeArt: ArtItem | null =
    selectedArtIndex !== null ? artworks[selectedArtIndex] : null;

  // Format neutral display title (preserves authentic title or clean neutral label)
  const getDisplayTitle = (art: ArtItem, index: number): string => {
    if (isVerifiedField(art.title)) {
      return art.title as string;
    }
    return `Pencil Sketch 0${index + 1}`;
  };

  // Lightbox open / close handlers
  const handleOpenLightbox = (index: number, event: React.MouseEvent<HTMLElement>) => {
    triggerElementRef.current = event.currentTarget;
    setSelectedArtIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setSelectedArtIndex(null);
    if (triggerElementRef.current) {
      triggerElementRef.current.focus();
    }
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedArtIndex((prev) =>
      prev === null ? null : (prev - 1 + artworks.length) % artworks.length
    );
  }, [artworks.length]);

  const handleNext = useCallback(() => {
    setSelectedArtIndex((prev) =>
      prev === null ? null : (prev + 1) % artworks.length
    );
  }, [artworks.length]);

  // Keyboard navigation & accessibility handlers
  useEffect(() => {
    if (selectedArtIndex === null) return;

    // Lock background page scroll while lightbox is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on mount
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleCloseLightbox();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'Tab') {
        // Trap focus inside lightbox modal
        if (!dialogRef.current) return;
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedArtIndex, handleCloseLightbox, handlePrev, handleNext]);

  // Gracefully handle image load failure so no broken icon is shown
  const handleImageError = (artId: string) => {
    setImageErrors((prev) => ({ ...prev, [artId]: true }));
  };

  return (
    <ScrollSection
      id="art"
      sectionNumber="08"
      eyebrow="CREATIVE PRACTICE"
      title="BEYOND THE CODE"
      subtitle="Some things are built with code. Some are created with a pencil."
    >
      <div className="space-y-12">
        {/* Creative Philosophy & Craftsmanship Bridge */}
        <RevealOnScroll variant="revealUp">
          <div className="relative p-6 sm:p-8 rounded-2xl bg-[#0D0D1A]/80 border border-white/10 backdrop-blur-md overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 font-mono text-xs text-[#C4B5FD] uppercase tracking-wider">
                  <PenTool className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>The Parallel of Software & Portraiture</span>
                </div>
                <p className="text-sm sm:text-base text-[#F8FAFC] font-medium leading-relaxed">
                  Engineering intelligent algorithms and drawing human expressions in graphite share an identical discipline: deep observation, patience, iterative precision, and respect for form. Every pencil stroke—like every line of code—is placed with intent.
                </p>
              </div>

              {/* Technical Specifications of the Medium */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-2 lg:pt-0">
                <div className="p-3 rounded-xl bg-[#050510]/80 border border-white/10 text-left min-w-[140px]">
                  <div className="font-mono text-[10px] text-[#94A3B8] uppercase">Medium</div>
                  <div className="font-mono text-xs text-[#C4B5FD] font-semibold mt-0.5">Graphite & Charcoal</div>
                </div>
                <div className="p-3 rounded-xl bg-[#050510]/80 border border-white/10 text-left min-w-[140px]">
                  <div className="font-mono text-[10px] text-[#94A3B8] uppercase">Surface</div>
                  <div className="font-mono text-xs text-[#38BDF8] font-semibold mt-0.5">Archival Paper</div>
                </div>
                <div className="p-3 rounded-xl bg-[#050510]/80 border border-white/10 text-left min-w-[140px]">
                  <div className="font-mono text-[10px] text-[#94A3B8] uppercase">Genre</div>
                  <div className="font-mono text-xs text-white font-semibold mt-0.5">Pencil Realism</div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Responsive Gallery Grid: 2x2 on Desktop for Large Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {artworks.map((art, idx) => {
            const displayTitle = getDisplayTitle(art, idx);
            const hasRealImage = Boolean(art.imageUrl && !imageErrors[art.id]);
            const isDescVerified = isVerifiedField(art.description);
            const isYearVerified = isVerifiedField(art.year);

            return (
              <RevealOnScroll
                key={art.id}
                variant="revealUp"
                delay={idx * 0.12}
              >
                <GlassCard
                  className="p-6 border border-white/10 group cursor-pointer hover:border-[#C4B5FD]/40 transition-all duration-300 flex flex-col justify-between h-full"
                  glowOnHover
                >
                  <div className="space-y-5">
                    {/* Artwork Preview Viewport: Complete Image Visible (object-contain, zero unwanted cropping) */}
                    <div
                      onClick={(e) => handleOpenLightbox(idx, e)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleOpenLightbox(idx, e as unknown as React.MouseEvent<HTMLElement>);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`View ${displayTitle} in full resolution`}
                      className="relative w-full h-80 sm:h-96 md:h-[420px] rounded-xl bg-[#050510] border border-white/10 overflow-hidden flex items-center justify-center p-3 text-center transition-all duration-500 group-hover:border-[#C4B5FD]/50 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                    >
                      {hasRealImage ? (
                        /* Authentic Artwork Image (Complete Uncropped View) */
                        <img
                          src={art.imageUrl}
                          alt={displayTitle}
                          loading="lazy"
                          decoding="async"
                          onError={() => handleImageError(art.id)}
                          className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        />
                      ) : (
                        /* Architectural Structural Slot Frame (Clean, Honest Fallback) */
                        <div className="relative w-full h-full p-6 flex flex-col items-center justify-between overflow-hidden">
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                          <div className="w-full flex items-center justify-between text-[10px] font-mono text-white/30 z-10">
                            <span>+ Drawing Mat</span>
                            <span>+ Archival Paper</span>
                          </div>

                          <div className="flex flex-col items-center space-y-3 z-10 my-auto">
                            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-[#C4B5FD]">
                              <Palette className="w-7 h-7 text-[#C4B5FD] opacity-80" />
                            </div>
                            <div className="space-y-1">
                              <div className="font-mono text-xs font-bold text-[#F8FAFC]">
                                {displayTitle}
                              </div>
                              <div className="font-mono text-[11px] text-[#8B5CF6]">
                                {art.medium || 'Pencil on Paper'}
                              </div>
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/20">
                              <FileImage className="w-3 h-3 text-[#38BDF8]" />
                              <span>Image Slot</span>
                            </span>
                          </div>

                          <div className="w-full z-10 pt-2 border-t border-white/5 flex items-center justify-center font-mono text-[10px] text-[#94A3B8]/70">
                            <span>Original Artwork Slot</span>
                          </div>
                        </div>
                      )}

                      {/* Orientation Tag Badge */}
                      <div className="absolute top-3 left-3 z-20 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#050510]/85 backdrop-blur-md border border-white/10 text-[#94A3B8]">
                          {art.aspectRatio === 'landscape' ? 'Landscape' : 'Portrait'}
                        </span>
                      </div>

                      {/* Hover Fullscreen Action Button */}
                      <div className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-[#050510]/90 backdrop-blur-md border border-white/10 text-[#C4B5FD] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 hover:bg-[#8B5CF6]/20">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Metadata Header (Neutral, Authentic Labels) */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#C4B5FD] transition-colors leading-snug">
                          {displayTitle}
                        </h3>
                        {isYearVerified && (
                          <span className="font-mono text-xs text-[#38BDF8] px-2 py-0.5 rounded bg-[#38BDF8]/10 border border-[#38BDF8]/20 shrink-0">
                            {art.year}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-[#8B5CF6]">
                        <span>{art.medium || 'Pencil on Paper'}</span>
                        {art.dimensions && (
                          <>
                            <span className="text-white/20">•</span>
                            <span className="text-[#94A3B8]">{art.dimensions}</span>
                          </>
                        )}
                      </div>

                      {isDescVerified && (
                        <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                          {art.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#94A3B8] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                      <span>Original Drawing</span>
                    </span>

                    <button
                      onClick={(e) => handleOpenLightbox(idx, e)}
                      className="text-[#C4B5FD] hover:text-white transition-colors flex items-center gap-1.5 py-1 px-2.5 rounded-lg hover:bg-white/5"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Expand View</span>
                    </button>
                  </div>
                </GlassCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeArt && selectedArtIndex !== null && (
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Artwork Viewer: ${getDisplayTitle(activeArt, selectedArtIndex)}`}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#050510]/95 backdrop-blur-2xl p-4 sm:p-6 lg:p-8"
          >
            {/* Lightbox Top Navigation Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 z-20">
              <div className="flex items-center gap-3">
                <Badge variant="glass" className="font-mono text-xs">
                  <span className="text-[#8B5CF6] font-bold">08</span>
                  <span className="text-white/40">//</span>
                  <span className="text-[#F8FAFC] uppercase tracking-wider">PENCIL ARTWORK</span>
                </Badge>

                {/* Counter */}
                <span className="font-mono text-xs text-[#94A3B8]">
                  <span className="text-[#F8FAFC] font-bold">
                    0{selectedArtIndex + 1}
                  </span>{' '}
                  / 0{artworks.length}
                </span>
              </div>

              {/* Keyboard Shortcuts Hint */}
              <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                  ESC to close
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                  ← / → to switch
                </span>
              </div>

              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={handleCloseLightbox}
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                aria-label="Close Lightbox (Escape)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Center Display (Artwork Stage) */}
            <div className="relative flex-1 flex items-center justify-between my-4 gap-4 overflow-hidden">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="p-3 sm:p-4 rounded-full bg-[#0D0D1A]/80 border border-white/10 text-white/80 hover:text-white hover:border-[#C4B5FD]/50 hover:bg-[#8B5CF6]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] shrink-0 z-20"
                aria-label="Previous artwork (Left arrow)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Center Artwork Viewport (Preserved Uncropped Display) */}
              <div className="relative w-full max-w-5xl h-full flex items-center justify-center p-2 sm:p-4">
                <motion.div
                  key={activeArt.id}
                  initial={isReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                  animate={isReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  exit={isReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="relative max-h-[70vh] sm:max-h-[78vh] w-full flex items-center justify-center"
                >
                  {Boolean(activeArt.imageUrl && !imageErrors[activeArt.id]) ? (
                    <img
                      src={activeArt.imageUrl}
                      alt={getDisplayTitle(activeArt, selectedArtIndex)}
                      className="max-h-[70vh] sm:max-h-[78vh] w-auto max-w-full rounded-xl object-contain shadow-[0_0_60px_rgba(0,0,0,0.85)] border border-white/10"
                    />
                  ) : (
                    /* Fallback Frame */
                    <div className="w-full max-w-xl aspect-[3/4] max-h-[66vh] rounded-2xl bg-[#0D0D1A] border border-white/20 p-6 sm:p-8 flex flex-col justify-between text-center relative overflow-hidden shadow-2xl">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8] border-b border-white/10 pb-3 z-10">
                        <span className="flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
                          <span>Pencil Artwork Frame</span>
                        </span>
                      </div>
                      <div className="space-y-4 my-auto z-10 py-4">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C4B5FD] shadow-xl">
                          <PenTool className="w-8 h-8 text-[#C4B5FD]" />
                        </div>
                        <h4 className="text-xl font-extrabold text-[#F8FAFC]">
                          {getDisplayTitle(activeArt, selectedArtIndex)}
                        </h4>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="p-3 sm:p-4 rounded-full bg-[#0D0D1A]/80 border border-white/10 text-white/80 hover:text-white hover:border-[#C4B5FD]/50 hover:bg-[#8B5CF6]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] shrink-0 z-20"
                aria-label="Next artwork (Right arrow)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Bottom Details Sheet */}
            <div className="pt-4 border-t border-white/10 z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC]">
                    {getDisplayTitle(activeArt, selectedArtIndex)}
                  </h3>
                  {isVerifiedField(activeArt.year) && (
                    <span className="font-mono text-xs text-[#38BDF8] px-2 py-0.5 rounded bg-[#38BDF8]/10 border border-[#38BDF8]/20">
                      {activeArt.year}
                    </span>
                  )}
                </div>

                <div className="font-mono text-xs text-[#8B5CF6]">
                  {activeArt.medium || 'Pencil on Paper'}
                </div>

                {isVerifiedField(activeArt.description) && (
                  <p className="text-xs text-[#94A3B8] leading-relaxed pt-1">
                    {activeArt.description}
                  </p>
                )}
              </div>

              {/* Jump-To Artwork Pagination Dots */}
              <div className="flex items-center gap-2">
                {artworks.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setSelectedArtIndex(dotIdx)}
                    className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-[#8B5CF6] ${
                      dotIdx === selectedArtIndex
                        ? 'w-8 bg-[#38BDF8]'
                        : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Jump to artwork 0${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </ScrollSection>
  );
};
