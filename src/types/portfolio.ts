export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'web' | 'ai' | 'tools';
  isPrimary?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  id: string;
  period: string; // e.g. "2024 — Present"
  title: string;
  organization: string;
  location?: string;
  description: string;
  bullets: string[];
  tags: string[];
  type: 'education' | 'experience' | 'leadership';
}

export interface ProjectItem {
  id: string;
  title: string;
  category?: string;
  shortDescription: string;
  problemStatement?: string;
  solutionSummary?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  imagePlaceholder?: string;
  imageUrl?: string;
  imageAlt?: string;
  isConceptVisual?: boolean;
  status?: string;
  metrics?: Array<{ label: string; value: string }>;
  architectureDetails?: {
    tagline?: string;
    lifecycleSteps?: Array<{ step: number; title: string; desc: string }>;
    threatVectors?: Array<{ category: string; description: string; scenarios: string[] }>;
    implementedFeatures?: string[];
    testingEvidence?: {
      summary: string;
      details: string[];
      disclaimer: string;
    };
    plannedEnhancements?: string[];
    techStackDetails?: Array<{ layer: string; technologies: string }>;
  };
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  organization?: string;
  date?: string;
  description: string;
  recognitionType: string;
  isSpecialHighlight?: boolean;
  highlightNote?: string;
  imageUrl?: string;
  externalUrl?: string;
  tags?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer?: string;
  issuerPendingConfirmation?: boolean;
  issuerNotes?: string;
  issueDate?: string;
  category: string;
  credentialUrl?: string;
  credentialId?: string;
  certificateFile?: string;
  skillsCovered?: string[];
}

export interface ArtItem {
  id: string;
  title?: string;
  medium?: string; // e.g. "Graphite & Charcoal on Paper"
  year?: string;
  description?: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  imageUrl?: string;
  imageUrlPlaceholder?: string;
  assetSlot?: string;
  dimensions?: string;
  tags?: string[];
}

export interface ContactInfo {
  tagline: string;
  email: string;
  location: string;
  availabilityStatus: string;
  socials: Array<{
    name: string;
    href: string;
    iconName: string;
  }>;
}

export interface CompletePortfolioData {
  about: {
    editorialStatements: string[];
    bioParagraphs: string[];
    coreValues: string[];
  };
  capabilities: CapabilityItem[];
  skillEcosystem: SkillCategory[];
  journeyTimeline: TimelineItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  certifications: CertificationItem[];
  artworks: ArtItem[];
  contact: ContactInfo;
}
