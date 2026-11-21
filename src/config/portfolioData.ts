import { CompletePortfolioData } from '../types/portfolio';

export const portfolioData: CompletePortfolioData = {
  about: {
    editorialStatements: [
      "I BUILD.",
      "I EXPLORE.",
      "I CREATE."
    ],
    bioParagraphs: [
      "I am a Computer Science & Engineering student passionate about crafting intelligent web applications, exploring machine learning concepts, and solving real-world problems through software.",
      "Beyond technical engineering, I bring artistic discipline to software development — applying precision, composition, and fine visual detail learned through pencil portraiture into intuitive user interfaces."
    ],
    coreValues: [
      "Algorithmic Rigor & Clean Architecture",
      "Human-Centered Interface Design",
      "Continuous Exploration in AI & Web Tech"
    ]
  },

  capabilities: [
    {
      id: 'build',
      number: '01',
      title: 'BUILD',
      subtitle: 'Web & Software Engineering',
      description: 'Designing and engineering responsive, scalable web applications with modern frontend frameworks, TypeScript, and clean code principles.',
      highlights: [
        'React & TypeScript Ecosystem',
        'Tailwind CSS & Design Systems',
        'State Management & Modular Architecture'
      ],
      iconName: 'Code'
    },
    {
      id: 'explore',
      number: '02',
      title: 'EXPLORE',
      subtitle: 'AI & Machine Learning',
      description: 'Investigating intelligent algorithms, neural network applications, and computational models to integrate AI capabilities into interactive digital tools.',
      highlights: [
        'Machine Learning Fundamentals',
        'Generative AI Integrations',
        'Hackathon Rapid Prototyping'
      ],
      iconName: 'Cpu'
    },
    {
      id: 'create',
      number: '03',
      title: 'CREATE',
      subtitle: 'Fine Pencil Art & Visuals',
      description: 'Crafting high-precision graphite and charcoal portrait artwork, translating deep observation, value balance, and proportion into visual realism.',
      highlights: [
        'Graphite & Charcoal Portraiture',
        'Value Contrast & Fine Detail',
        'Visual Design & Spatial Aesthetics'
      ],
      iconName: 'Palette'
    }
  ],

  skillEcosystem: [
    {
      id: 'languages',
      title: 'Programming Languages',
      description: 'Foundational programming languages and computer science principles.',
      skills: [
        { name: 'TypeScript', category: 'languages', isPrimary: true },
        { name: 'JavaScript (ES6+)', category: 'languages', isPrimary: true },
        { name: 'Python', category: 'languages', isPrimary: true },
        { name: 'C++', category: 'languages', isPrimary: false },
        { name: 'HTML5 & CSS3', category: 'languages', isPrimary: true }
      ]
    },
    {
      id: 'web',
      title: 'Web Development',
      description: 'Modern user interface and interactive web frameworks.',
      skills: [
        { name: 'React', category: 'web', isPrimary: true },
        { name: 'Vite', category: 'web', isPrimary: true },
        { name: 'Tailwind CSS', category: 'web', isPrimary: true },
        { name: 'Three.js / React Three Fiber', category: 'web', isPrimary: true },
        { name: 'Framer Motion', category: 'web', isPrimary: true },
        { name: 'Lenis Smooth Scroll', category: 'web', isPrimary: false }
      ]
    },
    {
      id: 'ai',
      title: 'AI / Machine Learning',
      description: 'Artificial intelligence techniques and data processing tools.',
      skills: [
        { name: 'Machine Learning Fundamentals', category: 'ai', isPrimary: true },
        { name: 'Python Data Libraries', category: 'ai', isPrimary: true },
        { name: 'Neural Network Fundamentals', category: 'ai', isPrimary: false }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      description: 'Development environments, version control, and design software.',
      skills: [
        { name: 'Git & GitHub', category: 'tools', isPrimary: true },
        { name: 'VS Code', category: 'tools', isPrimary: true },
        { name: 'Figma', category: 'tools', isPrimary: true },
        { name: 'npm / Node.js Environment', category: 'tools', isPrimary: true }
      ]
    }
  ],

  journeyTimeline: [
    {
      id: 'btech-cs',
      period: '[START_YEAR] — Present',
      title: 'B.Tech in Computer Science & Engineering',
      organization: '[UNIVERSITY / COLLEGE NAME]',
      location: '[CITY, COUNTRY]',
      description: 'Pursuing undergraduate degree focused on core computer science, data structures, algorithms, database management, and software engineering principles.',
      bullets: [
        'Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Web Technologies',
        'Active participant in technical student clubs and coding hackathons'
      ],
      tags: ['Academics', 'CS Degree', 'Algorithms'],
      type: 'education'
    },
    {
      id: 'hackathon-participant',
      period: '[YEAR]',
      title: 'Hackathon Contributor & Innovator',
      organization: 'Hackathon Competitions',
      description: 'Collaborating in fast-paced hackathons to prototype innovative web applications and AI solutions under high-pressure timelines.',
      bullets: [
        'Designed intuitive frontend interfaces and integrated backend APIs',
        'Pitched technical solution prototypes to judging panels'
      ],
      tags: ['Hackathons', 'Teamwork', 'Prototyping'],
      type: 'experience'
    }
  ],

  projects: [
    {
      id: 'agent-shield',
      title: 'AgentShield',
      category: 'AI Agent Security / Cybersecurity',
      shortDescription: 'Automated AI security testing, continuous runtime monitoring, and vulnerability intelligence platform engineered for autonomous tool-calling AI agents.',
      problemStatement: 'Autonomous AI agents plan, invoke external tools, and handle untrusted inputs. Without strict guardrails, they are vulnerable to indirect prompt injection, unauthorized tool execution, sensitive canary token leaks, and excessive agency.',
      solutionSummary: 'Engineered a dual-tier security architecture combining a zero-tolerance deterministic PermissionEngine that intercepts restricted tool calls with Google Gemini 2.5 Flash for advisory root-cause analysis, code remediation diffs, and mandatory human-in-the-loop policy signoff.',
      tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'Tailwind CSS', 'Google Gemini 2.5 Flash', 'SQLAlchemy', 'Docker'],
      githubUrl: 'https://github.com/[YOUR_GITHUB_HANDLE]/agentshield',
      liveUrl: 'https://[AGENTSHIELD_DEMO_URL]',
      featured: true,
      imageUrl: '/projects/agentshield.png',
      imageAlt: 'AgentShield custom concept visual showing central protective shield, autonomous AI workflow nodes, and deterministic policy boundary gateways',
      isConceptVisual: true,
      imagePlaceholder: 'AgentShield AI Security & Interception Viewport',
      status: 'Primary Showcase',
      metrics: [
        { label: 'Enforcement', value: 'Deterministic PermissionEngine' },
        { label: 'Advisory AI', value: 'Google Gemini 2.5 Flash' },
        { label: 'Dev Testing', value: '31/31 Backend Tests Passed' },
      ],
      architectureDetails: {
        tagline: 'Let AI Agents Act. Make Every Action Safe.',
        lifecycleSteps: [
          { step: 1, title: 'Register Agent', desc: 'Connect agent via Sandbox, Local Dev Adapter, or HTTP Endpoint.' },
          { step: 2, title: 'Configure Policies', desc: 'Define granular tool access, read/write bounds, and human approval flags.' },
          { step: 3, title: 'Launch Red-Team', desc: 'Execute 12+ curated attack scenarios across 4 core threat vectors.' },
          { step: 4, title: 'Intercept Calls', desc: 'Runtime PermissionEngine intercepts restricted or unsafe tool actions.' },
          { step: 5, title: 'Detect Canaries', desc: 'Deterministic exact scanning detects synthetic secrets and canary tokens in output.' },
          { step: 6, title: 'Record Evidence', desc: 'Log tamper-evident execution steps, tool arguments, and trace UUIDs.' },
          { step: 7, title: 'Score Risk (0–100)', desc: 'Compute deterministic mathematical risk score based on confirmed severity.' },
          { step: 8, title: 'Advisory AI Analysis', desc: 'Google Gemini 2.5 Flash explains root causes and synthesizes threat actor impact.' },
          { step: 9, title: 'Generate Code Diffs', desc: 'Produce copy-pasteable remediation diffs and tightened policy suggestions.' },
          { step: 10, title: 'Human Approval', desc: 'Authenticated SecOps engineer reviews and signs off on policy modifications.' },
          { step: 11, title: 'Apply Hardening', desc: 'PermissionEngine automatically enforces approved policy constraints.' },
          { step: 12, title: 'Differential Retest', desc: 'Regression testing verifies findings: FIXED, UNRESOLVED, or REGRESSED.' },
          { step: 13, title: 'Continuous Monitoring', desc: 'Runtime telemetry stream, tool velocity tracking, and real-time SecOps alerts.' },
          { step: 14, title: 'Compliance Auditing', desc: 'Generate empirical audit reports mapped to OWASP LLM Top 10 and NIST AI RMF.' },
        ],
        threatVectors: [
          {
            category: 'Prompt Injection (OWASP LLM01 / LLM07)',
            description: 'Direct instruction override, untrusted document context injection, and adversarial roleplay jailbreaks.',
            scenarios: ['Direct instruction override (inj_override_01)', 'Untrusted document context injection (inj_doc_leak_02)', 'Adversarial roleplay jailbreak (inj_jailbreak_03)'],
          },
          {
            category: 'Unauthorized Tool Usage (OWASP LLM08)',
            description: 'Restricted terminal command execution, function permission bypass via encoding, and destructive database schema drops.',
            scenarios: ['Restricted terminal execution (tool_restricted_01)', 'Permission bypass via encoding (tool_bypass_02)', 'Destructive DB schema drop (tool_drop_db_03)'],
          },
          {
            category: 'Sensitive Data Exposure (OWASP LLM02)',
            description: 'Production API key canary probing, database connection string exfiltration, and customer PII canary exfiltration.',
            scenarios: ['Production API key canary probing (data_canary_01)', 'Database connection string exfiltration (data_conn_str_02)', 'Customer PII canary exfiltration (data_pii_leak_03)'],
          },
          {
            category: 'Excessive Agency (OWASP LLM06)',
            description: 'High-impact unauthorized wire transfers, autonomous mass email broadcasts, and autonomous IAM privilege escalations.',
            scenarios: ['Unauthorized wire transfer (agency_wire_01)', 'Autonomous mass email broadcast (agency_email_02)', 'Autonomous IAM privilege escalation (agency_iam_03)'],
          },
        ],
        implementedFeatures: [
          'Deterministic PermissionEngine for zero-tolerance tool call interception and boundary checks',
          '12 curated red-team attack scenarios spanning 4 OWASP LLM threat categories',
          'Deterministic canary secret scanning for synthetic tokens and credentials',
          'Google Gemini 2.5 Flash advisory root-cause analysis and unified code remediation diffs',
          'Mandatory human-in-the-loop review and authenticated SecOps policy signoff',
          'Automated differential retest engine tracking fixed, unresolved, and regressed vulnerabilities',
          'Continuous monitoring telemetry stream with real-time SecOps alert center',
          'Empirical compliance assessment generator mapped to OWASP LLM Top 10 and NIST AI RMF',
          '1-Click demo reset mechanism for high-stakes reproducible demonstrations',
        ],
        testingEvidence: {
          summary: '31/31 backend tests passed during development testing (100% automated test pass rate with pytest).',
          details: [
            'test_phase1.py: Core API health, JWT authentication, telemetry endpoints',
            'test_phase2.py: Agent management, PermissionEngine rule checks, mock tools',
            'test_phase3.py: 12 attack scenarios execution, canary token detection, replay engine',
            'test_phase4.py: Gemini advisory intelligence, offline fallback, code remediation diffs',
            'test_phase5.py: Differential retest engine, continuous monitoring alerts, compliance generator',
            'test_phase6_e2e.py: Complete 14-step E2E lifecycle and cross-tenant isolation enforcement',
          ],
          disclaimer: 'Development testing evidence only — not an independent third-party security certification, external audit, or vulnerability-free guarantee.',
        },
        plannedEnhancements: [
          'Distributed multi-region proxy sidecar for enterprise agent gateways',
          'Dynamic automated canary token rotation and entropy analysis',
          'CI/CD GitHub Action integration for automated pull-request vulnerability gating',
        ],
        techStackDetails: [
          { layer: 'Frontend UI', technologies: 'React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons, Recharts' },
          { layer: 'Backend API', technologies: 'Python 3.12, FastAPI, Pydantic v2, Uvicorn, SQLAlchemy 2.0 ORM' },
          { layer: 'AI Advisory', technologies: 'Google Gemini 2.5 Flash (Structured Outputs) + Deterministic Offline Fallback' },
          { layer: 'Security Core', technologies: 'Deterministic PermissionEngine, Canary Secret Scanning, Mock Tool Sandbox' },
          { layer: 'Databases', technologies: 'SQLite (Local Dev) / PostgreSQL (Cloud Production)' },
          { layer: 'Containerization', technologies: 'Docker multi-stage builds, docker-compose.yml' },
        ],
      },
    },
    {
      id: 'trash-chain',
      title: 'Trash Chain',
      category: 'Smart Waste Tracking & Web3',
      shortDescription: 'Decentralized traceability and tracking system for waste management lifecycles, ensuring transparent logistics, accountability, and verifiable processing.',
      problemStatement: 'Conventional municipal and industrial waste systems suffer from fragmented tracking, manual record discrepancies, and unverified disposal claims.',
      solutionSummary: 'Engineered a verifiable tracking application connecting waste generators, collectors, and recycling facilities with transparent auditability and live monitoring.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Web3 Concepts', 'Smart Logistics'],
      githubUrl: 'https://github.com/[YOUR_GITHUB_HANDLE]/trash-chain',
      liveUrl: 'https://[TRASH_CHAIN_DEMO_URL]',
      featured: true,
      imageUrl: '/projects/trash-chain-concept.png',
      imageAlt: 'Trash Chain concept interface visualization showing decentralized waste traceability workflow and logistics ledger',
      isConceptVisual: true,
      imagePlaceholder: 'Trash Chain Illustrative Concept Preview',
      status: 'Primary Showcase',
      metrics: [
        { label: 'Traceability', value: 'End-to-End' },
        { label: 'Architecture', value: 'Modular & Verifiable' },
        { label: 'Interface', value: 'Responsive Web' },
      ],
    },
    {
      id: 'krishi-sakha-ai',
      title: 'KrishiSakhaAI',
      category: 'Agri-Tech & Applied Machine Learning',
      shortDescription: 'Intelligent agricultural advisory and crop diagnostic platform providing data-driven recommendations and disease detection for farmers.',
      problemStatement: 'Agricultural producers often face substantial crop loss due to delayed disease identification, erratic weather impacts, and limited access to timely expert advice.',
      solutionSummary: 'Designed an AI-assisted advisory system integrating predictive models, crop health diagnostic workflows, and intuitive farmer-centric interface design.',
      tags: ['Python', 'Machine Learning', 'Computer Vision', 'React', 'FastAPI'],
      githubUrl: 'https://github.com/[YOUR_GITHUB_HANDLE]/krishi-sakha-ai',
      liveUrl: 'https://[KRISHISAKHA_DEMO_URL]',
      featured: true,
      imageUrl: '/projects/krishisakhaai-concept.png',
      imageAlt: 'KrishiSakhaAI concept interface preview illustrating crop health diagnostics, leaf disease advisory, and farming telemetry',
      isConceptVisual: true,
      imagePlaceholder: 'KrishiSakhaAI Crop Health & Diagnostic Viewport',
      status: 'AI Showcase',
      metrics: [
        { label: 'Domain', value: 'Agricultural Intelligence' },
        { label: 'Intelligence', value: 'Computer Vision / ML' },
        { label: 'Accessibility', value: 'Farmer-Centric UI' },
      ],
    },
    {
      id: 'wind-turbine-fault-detection',
      title: 'Wind Turbine Fault Detection / SCADA Data Analysis',
      category: 'Industrial IoT & Predictive Maintenance',
      shortDescription: 'Time-series telemetry analysis and anomaly detection framework processing industrial SCADA sensor streams to detect turbine faults before breakdown.',
      problemStatement: 'Unplanned wind turbine mechanical failures cause massive downtime, lost renewable energy generation, and exorbitant repair costs in high-altitude or offshore locations.',
      solutionSummary: 'Developed a predictive analytics pipeline processing multi-sensor telemetry (rotational speed, vibration, temperature, generator torque) to identify failure indicators.',
      tags: ['SCADA Telemetry', 'Time-Series Analysis', 'Anomaly Detection', 'Python', 'Data Science'],
      githubUrl: 'https://github.com/[YOUR_GITHUB_HANDLE]/wind-turbine-fault-detection',
      liveUrl: 'https://[WIND_TURBINE_DEMO_URL]',
      featured: true,
      imageUrl: '/projects/wind-turbine-scada-concept.png',
      imageAlt: 'Wind turbine SCADA fault detection concept display depicting sensor time-series telemetry and anomaly waveform analysis',
      isConceptVisual: true,
      imagePlaceholder: 'SCADA Telemetry Frequency & Anomaly Detection Viewport',
      status: 'Engineering Analytics',
      metrics: [
        { label: 'Data Source', value: 'SCADA Sensor Streams' },
        { label: 'Analytics', value: 'Time-Series ML' },
        { label: 'Objective', value: 'Early Anomaly Detection' },
      ],
    },
  ],

  achievements: [
    {
      id: 'lpf-scholar',
      title: 'Lila Poonawalla Foundation (LPF) Scholar',
      category: 'Scholarship / Recognition',
      organization: 'Lila Poonawalla Foundation',
      recognitionType: 'Scholarship Recognition',
      description: 'Scholarship recognition.',
      tags: ['Scholarship', 'Education', 'Merit'],
    },
    {
      id: 'aws-builder-connect-2026',
      title: 'AWS Builder Center Future Builders Connect Hyderabad',
      category: 'Event Participation / Recognition',
      organization: 'Amazon Web Services (AWS)',
      date: 'September 2026',
      recognitionType: 'Trivia Challenge Winner & Attendee',
      description: 'Attended the event, won the live trivia challenge, and received an AWS Builder Center duffle bag.',
      isSpecialHighlight: true,
      highlightNote: 'Live Trivia Challenge Winner (AWS Builder Center Duffle Bag)',
      tags: ['AWS', 'Cloud', 'Interactive Trivia', 'Event'],
    },
    {
      id: 'india-ai-impact-buildathon-2026',
      title: 'India AI Impact Buildathon',
      category: 'Hackathon Participation',
      organization: 'GUVI, HCL, India AI Impact Summit',
      date: 'February 2026',
      recognitionType: 'Certificate of Participation',
      description: 'Certificate of participation.',
      tags: ['AI', 'Hackathon', 'Buildathon'],
    },
    {
      id: 'nss-volunteer',
      title: 'National Service Scheme (NSS) Volunteer',
      category: 'Community Service',
      organization: 'National Service Scheme (NSS)',
      recognitionType: 'Volunteer Service',
      description: 'Volunteering.',
      tags: ['Community Service', 'Volunteering', 'Social Impact'],
    },
    {
      id: 'yams-volunteer',
      title: 'Yuva Aapda Mitra Scheme (YAMS) Volunteer',
      category: 'Disaster Preparedness / Community Service',
      organization: 'Yuva Aapda Mitra Scheme',
      recognitionType: 'Volunteer Involvement',
      description: 'Volunteer involvement.',
      tags: ['Disaster Preparedness', 'Community Service', 'Volunteering'],
    },
    {
      id: 'dkv-member',
      title: 'Dharma Kala Vahini (DKV) Member',
      category: 'Cultural / Social Service',
      organization: 'Dharma Kala Vahini',
      recognitionType: 'Membership',
      description: 'Membership.',
      tags: ['Cultural', 'Social Service', 'Community'],
    },
  ],

  certifications: [
    {
      id: 'llm-young-developers-2026',
      title: 'LLM for Young Developers — Foundational Course',
      issuer: 'AICTE, INDai, Meta, NASSCOM FutureSkills Prime',
      issueDate: '2026',
      category: 'Artificial Intelligence',
      skillsCovered: ['Large Language Models', 'Generative AI', 'Prompt Engineering'],
    },
    {
      id: 'yams-residential-training-2026',
      title: 'Yuva Aapda Mitra Scheme (YAMS) — 7-Day Residential Training',
      issuer: 'RCUES, Ministry of Housing and Urban Affairs, Government of Telangana',
      issueDate: 'January 2026',
      category: 'Disaster Preparedness / Training',
      skillsCovered: ['Disaster Management', 'Emergency Response', 'Safety & Preparedness'],
    },
    {
      id: 'india-ai-buildathon-participation-2026',
      title: 'India AI Impact Buildathon — Certificate of Participation',
      issuer: 'GUVI, HCL, India AI Impact Summit',
      issueDate: 'February 2026',
      category: 'AI / Hackathon',
      skillsCovered: ['AI Prototyping', 'Hackathon Participation'],
    },
    {
      id: '1m1b-green-internship-2026',
      title: '1M1B Green Internship',
      issuer: '1M1B Green Skills Academy, AICTE, Salesforce',
      issueDate: 'December 2025 – January 2026',
      category: 'Sustainability / Internship',
      skillsCovered: ['Green Skills', 'Sustainability', 'Environmental Impact'],
    },
    {
      id: 'design-fundamentals-ai-2025',
      title: 'Design Fundamentals with AI — Passport to Earning',
      issuer: 'Adobe, YuWaah, UNICEF',
      issueDate: 'December 2025',
      category: 'Design / AI',
      skillsCovered: ['Design Principles', 'Generative Design', 'Digital Tools'],
    },
    {
      id: 'innomatics-ml-workshop-2025',
      title: '5-Day Hands-On Workshop on Machine Learning',
      issuer: 'Innomatics Research Labs',
      issueDate: 'November 2025',
      category: 'Machine Learning / Workshop',
      skillsCovered: ['Machine Learning', 'Data Modeling', 'Python ML'],
    },
    {
      id: 'oop-java-2025',
      title: 'Object-Oriented Programming through Java',
      issuer: 'Issuer confirmation pending (CodeChef / Coursera)',
      issuerPendingConfirmation: true,
      issuerNotes: 'Supplied info names CodeChef, while reference label indicates Coursera. Awaiting user confirmation.',
      issueDate: '2025',
      category: 'Programming',
      skillsCovered: ['Java', 'Object-Oriented Programming', 'Data Structures'],
    },
    {
      id: 'html5-infosys-2025',
      title: 'HTML5 — The Language Course',
      issuer: 'Infosys Springboard',
      issueDate: '2025',
      category: 'Web Development',
      skillsCovered: ['HTML5', 'Semantic Web', 'Frontend Structure'],
    },
    {
      id: 'data-vis-simplilearn',
      title: 'Introduction to Data Visualization',
      issuer: 'Simplilearn SkillUp',
      category: 'Data Visualization',
      skillsCovered: ['Data Visualization', 'Chart Design', 'Analytics'],
    },
    {
      id: 'green-skills-workshop-1m1b',
      title: 'Green Skills and Sustainability Solutions Workshop',
      issuer: '1M1B Green Skills Academy',
      category: 'Sustainability / Workshop',
      skillsCovered: ['Sustainability Solutions', 'Eco-Innovation'],
    },
  ],

  artworks: [
    {
      id: 'art-1',
      title: 'Pencil Sketch 01',
      medium: 'Pencil on Paper',
      aspectRatio: 'landscape',
      imageUrl: '/art/pencil-portrait-01.jpg',
    },
    {
      id: 'art-2',
      title: 'Pencil Sketch 02',
      medium: 'Pencil on Paper',
      aspectRatio: 'portrait',
      imageUrl: '/art/pencil-portrait-02.jpg',
    },
    {
      id: 'art-3',
      title: 'Pencil Sketch 03',
      medium: 'Pencil on Paper',
      aspectRatio: 'portrait',
      imageUrl: '/art/pencil-portrait-03.jpg',
    },
    {
      id: 'art-4',
      title: 'Pencil Sketch 04',
      medium: 'Pencil on Paper',
      aspectRatio: 'portrait',
      imageUrl: '/art/pencil-portrait-04.jpg',
    },
  ],

  contact: {
    tagline: "HAVE AN IDEA? LET'S BUILD IT.",
    email: '[YOUR_EMAIL_ADDRESS@EXAMPLE.COM]',
    location: '[CITY, STATE, COUNTRY]',
    availabilityStatus: 'Available for internships, freelance projects, & hackathons',
    socials: [
      { name: 'GitHub', href: 'https://github.com/[YOUR_GITHUB_HANDLE]', iconName: 'Github' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/[YOUR_LINKEDIN_HANDLE]', iconName: 'Linkedin' },
      { name: 'X / Twitter', href: 'https://x.com/[YOUR_TWITTER_HANDLE]', iconName: 'Twitter' },
      { name: 'Email', href: 'mailto:[YOUR_EMAIL_ADDRESS@EXAMPLE.COM]', iconName: 'Mail' }
    ]
  }
};
