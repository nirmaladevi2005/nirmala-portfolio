import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Nirmala Devi Patel',
  title: 'Creative Developer & AI Enthusiast',
  subtitle: 'DEVELOPER × CREATOR × ARTIST',
  shortBio: 'Building intelligent digital experiences where technology meets creativity.',
  degree: 'B.Tech in Computer Science & Engineering',
  roles: [
    'Computer Science Student',
    'Creative Developer',
    'AI Enthusiast',
    'Hackathon Participant',
    'Pencil Portrait Artist'
  ],
  availability: {
    status: true,
    text: 'Available for innovative projects & internships'
  },
  navigation: [
    { number: '01', label: 'Overview', href: '#hero' },
    { number: '02', label: 'Story', href: '#story' },
    { number: '03', label: 'Projects', href: '#projects' },
    { number: '04', label: 'Art Gallery', href: '#art' },
    { number: '05', label: 'Contact', href: '#contact' },
  ],
  secondaryNavigation: [
    { number: '04', label: 'Tech Stack', href: '#skills' },
    { number: '05', label: 'Experience', href: '#experience' },
    { number: '06', label: 'Achievements', href: '#achievements' },
    { number: '07', label: 'Certifications', href: '#certifications' },
  ],
  socials: [
    { name: 'GitHub', href: 'https://github.com/nirmaladevi2005', iconName: 'Github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nirmaladevipatel2005/', iconName: 'Linkedin' },
    { name: 'Email', href: 'mailto:nirmaladevipatel2005@gmail.com', iconName: 'Mail' },
  ],
  stats: [
    { label: 'Education', value: 'B.Tech CS', subtext: 'Computer Science & Engineering' },
    { label: 'Focus', value: 'Web & AI', subtext: 'Interactive Apps & Intelligent Systems' },
    { label: 'Creative', value: 'Portraiture', subtext: 'Fine Pencil Realism' }
  ]
};
