export * from './portfolio';

export interface NavItem {
  number: string;
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  iconName: string;
}

export interface HighlightStat {
  label: string;
  value: string;
  subtext: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  subtitle: string;
  shortBio: string;
  degree: string;
  roles: string[];
  availability: {
    status: boolean;
    text: string;
  };
  navigation: NavItem[];
  secondaryNavigation?: NavItem[];
  socials: SocialLink[];
  stats: HighlightStat[];
}
