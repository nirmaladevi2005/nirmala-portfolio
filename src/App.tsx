import React from 'react';
import { useLenis } from './hooks/useLenis';
import { AuroraBackground } from './components/background/AuroraBackground';
import { CursorGlow } from './components/ui/CursorGlow';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { StorySection } from './components/sections/StorySection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { ArtGallerySection } from './components/sections/ArtGallerySection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export function App() {
  // Initialize Lenis 60FPS inertia smooth scroll
  useLenis();

  return (
    <div className="relative min-h-screen bg-[#050510] text-[#F8FAFC] selection:bg-[#8B5CF6]/30 selection:text-[#C4B5FD] overflow-x-hidden">
      {/* Continuous Midnight Aurora Background */}
      <AuroraBackground />

      {/* Subtle Mouse Cursor Glow */}
      <CursorGlow />

      {/* Floating Glass Navigation Dock (5 Streamlined Core Anchors) */}
      <Navbar />

      {/* Main 8-Chapter Narrative Flow */}
      <main className="relative z-10">
        {/* 01 // HERO — Editorial Typography & Floating Circular Portrait */}
        <HeroSection />

        {/* 02 // STORY — Consolidated Manifesto & Capability Triad (Build • Explore • Create) */}
        <StorySection />

        {/* 03 // FEATURED PROJECTS — Elevated Primary Technical Showcases (AgentShield • Trash Chain • KrishiSakhaAI • SCADA) */}
        <ProjectsSection />

        {/* 04 // TECH ECOSYSTEM — Skills, Languages, Web, and AI Stack */}
        <SkillsSection />

        {/* 05 // EXPERIENCE & JOURNEY — Academic & Technical Milestones Spine */}
        <ExperienceSection />

        {/* 06 // HACKATHONS & ACHIEVEMENTS — Recognitions, Events & Service */}
        <AchievementsSection />

        {/* 07 // CERTIFICATIONS & TRAINING — Verified Credentials & Coursework */}
        <CertificationsSection />

        {/* 08 // RESUME — Official Curriculum Vitae (View & Download) */}
        <ResumeSection />

        {/* 09 // BEYOND THE CODE — Fine Pencil Portrait Gallery & Fullscreen Lightbox */}
        <ArtGallerySection />

        {/* 09 // CONTACT — Collaboration & Inquiry Canvas */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
