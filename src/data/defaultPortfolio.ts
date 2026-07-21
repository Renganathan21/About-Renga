import { PortfolioData } from "../types";

export const defaultPortfolio: PortfolioData = {
  site: {
    title: "A. Renganathan",
    subtitle: "Frontend Engineer • Product Thinker • Author",
    logoText: "A. RENGANATHAN",
    resumeUrl: "/resume.pdf",
    availabilityStatus: "available",
    availabilityText: "AVAILABLE FOR FREELANCE, PRODUCT CONSULTING & CREATIVE COLLABORATIONS",
    currentRole: "Frontend Developer",
    yearsExperience: 2.5,
    location: "Tirunelveli, Tamil Nadu, India",
    timezone: "IST (UTC+5:30)"
  },

  navigation: [
    {
      label: "Home",
      href: "#home",
      icon: "House"
    },
    {
      label: "About",
      href: "#about",
      icon: "User"
    },
    {
      label: "Experience",
      href: "#experience",
      icon: "Briefcase"
    },
    {
      label: "Projects",
      href: "#projects",
      icon: "FolderKanban"
    },
    {
      label: "Books",
      href: "#books",
      icon: "BookOpen"
    },
    {
      label: "Services",
      href: "#services",
      icon: "Sparkles"
    },
    {
      label: "Skills",
      href: "#skills",
      icon: "Code2"
    },
    {
      label: "Timeline",
      href: "#timeline",
      icon: "Clock"
    },
    {
      label: "Contact",
      href: "#contact",
      icon: "Mail"
    }
  ],

  hero: {
    badgeText: "AVAILABLE FOR FREELANCE PROJECTS, PRODUCT CONSULTING & CREATIVE COLLABORATIONS",
    headline: "Building Digital Products Through Engineering, Creativity & Storytelling.",
    subheadline: "I'm A. Renganathan, a Frontend Engineer specializing in React.js and enterprise web applications. Alongside software development, I explore product thinking, AI-powered experiences, and fiction writing to create meaningful digital solutions.",
    typingWords: [
      "Frontend Engineer",
      "React.js Developer",
      "Product Thinker",
      "Published Author",
      "Creative Consultant",
      "UI/UX Enthusiast",
      "AI Explorer"
    ],
    profileImage: "https://photos.app.goo.gl/rqwc7sWLBHwf9DuZ7",
    ctas: [
      {
        label: "Hire Me",
        href: "#contact",
        type: "primary",
        icon: "ArrowRight"
      },
      {
        label: "View Projects",
        href: "#projects",
        type: "secondary",
        icon: "FolderKanban"
      },
      {
        label: "Explore My Books",
        href: "#books",
        type: "accent",
        icon: "BookOpen"
      }
    ],
    quickStats: [
      {
        label: "Experience",
        value: "2.5+ Years"
      },
      {
        label: "Projects",
        value: "20+"
      },
      {
        label: "Published Books",
        value: "1"
      },
      {
        label: "Books In Progress",
        value: "2"
      }
    ]
  },

  seo: {
    title: "A. Renganathan | Frontend Engineer | Product Thinker | Author",
    description: "Official portfolio of A. Renganathan. Frontend Engineer specializing in React.js, enterprise applications, UI/UX, product development, creative consulting and storytelling.",
    keywords: [
      "React Developer",
      "Frontend Engineer",
      "React JS",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Enterprise Applications",
      "Portfolio",
      "UI UX",
      "Product Development",
      "Software Engineer",
      "Author",
      "Creative Consultant",
      "Story Writer",
      "AI"
    ]
  },

  theme: {
    primaryColor: "#6C63FF",
    secondaryColor: "#00D4FF",
    accentColor: "#FFB800",
    backgroundColor: "#050816",
    cardBackgroundColor: "#111827",
    textColor: "#FFFFFF",
    textSecondaryColor: "#BFC8D6",
    gradientStart: "#6C63FF",
    gradientEnd: "#00D4FF",
    noiseOpacity: 0.03,
    fonts: {
      heading: "Sora",
      body: "Inter",
      mono: "JetBrains Mono"
    },
    borderRadius: "20px",
    glassmorphism: {
      enabled: true,
      opacity: 0.08,
      blur: 20
    }
  },

  about: {
    title: "About Me",
    subtitle: "Engineering Ideas. Designing Experiences. Writing Stories.",
    introduction: "I'm A. Renganathan, a Frontend Engineer specializing in React.js and enterprise software development. I enjoy solving complex business problems through scalable frontend architecture while continuously exploring product design, artificial intelligence, and creative storytelling.",
    description: [
      "Over the past few years, I've worked on enterprise applications where performance, maintainability, and user experience are equally important. Every feature I build focuses on solving real business problems while delivering a seamless experience.",
      "Outside my professional work, I love building side projects, experimenting with AI, designing startup ideas, and writing novels. I believe engineering and creativity complement each other, enabling the creation of products that people genuinely enjoy.",
      "Whether it's developing enterprise software, planning an MVP, or writing a science fiction novel, my approach remains the same—understand the problem deeply, simplify complexity, and build something meaningful."
    ],
    profileImage: "https://photos.app.goo.gl/rqwc7sWLBHwf9DuZ7",
    highlights: [
      {
        title: "Enterprise Frontend Development",
        description: "Building scalable React.js applications for enterprise businesses.",
        icon: "Building2"
      },
      {
        title: "Product Thinking",
        description: "Transforming ideas into practical and scalable digital products.",
        icon: "Lightbulb"
      },
      {
        title: "Creative Writing",
        description: "Published author exploring emotional and science-fiction storytelling.",
        icon: "BookOpen"
      },
      {
        title: "AI Exploration",
        description: "Building AI-powered experiences using modern LLM technologies.",
        icon: "Bot"
      }
    ]
  },

  mission: {
    title: "Mission",
    description: "To build software that solves meaningful problems while delivering elegant user experiences. I strive to combine engineering, creativity, and product thinking to create digital solutions that leave a lasting impact."
  },

  vision: {
    title: "Vision",
    description: "To become a globally recognized technology creator who bridges software engineering, product innovation, and storytelling—building products and stories that inspire people."
  },

  philosophy: {
    title: "My Philosophy",
    items: [
      {
        title: "Understand Before Building",
        description: "Every successful product begins by understanding the user's real problem."
      },
      {
        title: "Keep It Simple",
        description: "Simple experiences often require the deepest engineering."
      },
      {
        title: "Never Stop Learning",
        description: "Technology evolves every day, and so should we."
      },
      {
        title: "Creativity Has No Boundaries",
        description: "Great ideas can emerge from software, books, movies, or everyday conversations."
      },
      {
        title: "Quality Over Quantity",
        description: "I'd rather build one exceptional product than ten average ones."
      }
    ]
  },

  statistics: [
    {
      label: "Years of Experience",
      value: "2.5+",
      icon: "Briefcase"
    },
    {
      label: "Projects Completed",
      value: "20+",
      icon: "FolderKanban"
    },
    {
      label: "Enterprise Products",
      value: "Multiple",
      icon: "Building2"
    },
    {
      label: "Technologies",
      value: "25+",
      icon: "Code2"
    },
    {
      label: "Published Books",
      value: "1",
      icon: "BookOpen"
    },
    {
      label: "Upcoming Books",
      value: "2",
      icon: "PenTool"
    }
  ],

  currentlyBuilding: {
    title: "Currently Building",
    items: [
      {
        name: "Soulstone",
        category: "Science Fantasy Novel",
        status: "Writing"
      },
      {
        name: "When We Meet Again - Sequel",
        category: "Novel",
        status: "Planning"
      },
      {
        name: "Node Hub",
        category: "Product Idea",
        status: "Research & Design"
      },
      {
        name: "Enterprise React Applications",
        category: "Professional Work",
        status: "Active Development"
      }
    ]
  },

  coreValues: [
    {
      title: "Integrity",
      description: "Deliver honest work with long-term maintainability."
    },
    {
      title: "Innovation",
      description: "Think beyond conventional solutions."
    },
    {
      title: "Ownership",
      description: "Treat every project as if it were my own."
    },
    {
      title: "Collaboration",
      description: "Great products are built by great teams."
    },
    {
      title: "Continuous Learning",
      description: "Learning never stops in technology."
    },
    {
      title: "Creativity",
      description: "Creativity belongs in engineering as much as it does in storytelling."
    }
  ],

  interests: [
    "Frontend Engineering",
    "React.js",
    "Artificial Intelligence",
    "Product Management",
    "User Experience",
    "Creative Writing",
    "Science Fiction",
    "Startup Ideas",
    "Software Architecture",
    "Technology"
  ],

  quote: {
    text: "Technology builds products. Creativity gives them purpose.",
    author: "A. Renganathan"
  },

  skills: {
    title: "Skills",
    subtitle: "Technologies and tools I use to build modern digital experiences.",
    categories: [
      {
        title: "Frontend",
        icon: "Monitor",
        skills: [
          "React.js",
          "Next.js",
          "JavaScript (ES6+)",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Bootstrap",
          "Material UI",
          "PrimeReact",
          "ShadCN UI",
          "Redux Toolkit",
          "Context API",
          "Valtio",
          "Framer Motion",
          "React Router",
          "Formik",
          "Yup",
          "React Hook Form"
        ]
      },
      {
        title: "Backend",
        icon: "Server",
        skills: [
          "Node.js",
          "Express.js",
          "REST API",
          "GraphQL",
          "Firebase",
          "MongoDB",
          "SQL",
          "Azure Storage"
        ]
      },
      {
        title: "AI & Automation",
        icon: "Bot",
        skills: [
          "OpenAI API",
          "Google Gemini API",
          "Dialogflow",
          "Prompt Engineering",
          "AI Chatbots",
          "Generative AI",
          "LLM Integration"
        ]
      },
      {
        title: "UI / UX",
        icon: "Palette",
        skills: [
          "Responsive Design",
          "Accessibility",
          "Design Systems",
          "Component Architecture",
          "Wireframing",
          "Micro Interactions",
          "Glassmorphism",
          "Dark UI",
          "Animation Design"
        ]
      },
      {
        title: "DevOps & Tools",
        icon: "Settings",
        skills: [
          "Git",
          "GitHub",
          "Docker",
          "Vite",
          "Webpack",
          "Babel",
          "NPM",
          "Postman",
          "VS Code"
        ]
      }
    ]
  },

  technologyStack: {
    title: "Technology Stack",
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "PrimeReact",
      "Framer Motion"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Firebase",
      "MongoDB",
      "SQL",
      "REST API",
      "GraphQL"
    ],
    cloud: [
      "Azure Storage",
      "Firebase Hosting",
      "Netlify",
      "Vercel",
      "Render"
    ],
    ai: [
      "OpenAI",
      "Gemini",
      "Dialogflow",
      "Prompt Engineering"
    ]
  },

  toolbox: {
    title: "Favorite Tools",
    items: [
      {
        name: "Visual Studio Code",
        icon: "Laptop"
      },
      {
        name: "GitHub",
        icon: "Github"
      },
      {
        name: "Figma",
        icon: "Palette"
      },
      {
        name: "Docker",
        icon: "Cpu"
      },
      {
        name: "Postman",
        icon: "Globe"
      },
      {
        name: "Chrome DevTools",
        icon: "Chrome"
      }
    ]
  },

  currentlyLearning: {
    title: "Currently Learning",
    items: [
      "Advanced System Design",
      "Product Management",
      "Three.js",
      "Motion Design",
      "Artificial Intelligence",
      "Next.js Advanced Patterns",
      "Cloud Architecture",
      "Scalable Frontend Architecture"
    ]
  },

  softSkills: {
    title: "Professional Strengths",
    items: [
      "Problem Solving",
      "Product Thinking",
      "Communication",
      "Leadership",
      "Creative Thinking",
      "Analytical Mindset",
      "Adaptability",
      "Team Collaboration",
      "Mentoring",
      "Time Management"
    ]
  },

  languages: {
    title: "Languages",
    items: [
      {
        language: "English",
        level: "Professional"
      },
      {
        language: "Tamil",
        level: "Native"
      }
    ]
  },

  skillLevels: [
    {
      name: "React.js",
      percentage: 95
    },
    {
      name: "JavaScript",
      percentage: 93
    },
    {
      name: "TypeScript",
      percentage: 88
    },
    {
      name: "HTML & CSS",
      percentage: 95
    },
    {
      name: "UI Engineering",
      percentage: 94
    },
    {
      name: "Frontend Architecture",
      percentage: 90
    },
    {
      name: "Node.js",
      percentage: 82
    },
    {
      name: "MongoDB",
      percentage: 80
    },
    {
      name: "Firebase",
      percentage: 88
    },
    {
      name: "Prompt Engineering",
      percentage: 92
    },
    {
      name: "Product Thinking",
      percentage: 90
    },
    {
      name: "Creative Writing",
      percentage: 95
    }
  ],

  services: {
    title: "Services",
    subtitle: "Helping startups, businesses and creators build better digital experiences.",
    items: [
      {
        id: "react-development",
        title: "React.js Development",
        icon: "Code2",
        description: "Develop scalable, responsive and high-performance React.js applications with reusable component architecture.",
        features: [
          "Enterprise Dashboards",
          "Admin Panels",
          "SPA Development",
          "Responsive UI",
          "API Integration",
          "State Management"
        ]
      },
      {
        id: "frontend-engineering",
        title: "Frontend Engineering",
        icon: "Monitor",
        description: "Modern frontend development focused on performance, scalability and maintainability.",
        features: [
          "Reusable Components",
          "Performance Optimization",
          "Code Splitting",
          "Lazy Loading",
          "Accessibility",
          "Responsive Design"
        ]
      },
      {
        id: "ui-ux",
        title: "UI / UX Design",
        icon: "Palette",
        description: "Beautiful, user-friendly interfaces designed with usability and business goals in mind.",
        features: [
          "Dashboard Design",
          "Landing Pages",
          "Design Systems",
          "Wireframes",
          "Interactive Prototypes",
          "Animations"
        ]
      },
      {
        id: "product-consulting",
        title: "Product Consulting",
        icon: "Lightbulb",
        description: "Helping founders validate ideas, define MVPs and transform concepts into scalable products.",
        features: [
          "MVP Planning",
          "Feature Prioritization",
          "Product Roadmap",
          "Technical Consultation",
          "User Flow Design",
          "Architecture Planning"
        ]
      },
      {
        id: "ai-solutions",
        title: "AI Solutions",
        icon: "Bot",
        description: "Integrating modern AI capabilities into web applications using the latest LLM technologies.",
        features: [
          "OpenAI Integration",
          "Gemini Integration",
          "AI Chatbots",
          "Prompt Engineering",
          "Workflow Automation",
          "AI Features"
        ]
      },
      {
        id: "creative-consulting",
        title: "Creative Consulting",
        icon: "Sparkles",
        description: "Helping individuals and startups refine ideas through storytelling, product thinking and innovation.",
        features: [
          "Idea Validation",
          "Creative Direction",
          "Story Development",
          "Brand Storytelling",
          "Feature Brainstorming",
          "Innovation Sessions"
        ]
      }
    ]
  },

  freelance: {
    title: "Freelance Services",
    platforms: [
      "Fiverr",
      "Upwork",
      "Direct Clients"
    ],
    availability: "Open",
    responseTime: "Within 24 Hours",
    services: [
      "React Development",
      "Dashboard Development",
      "Landing Page Development",
      "Portfolio Websites",
      "Admin Panels",
      "Product Consultation",
      "UI Improvements",
      "Frontend Bug Fixes"
    ]
  },

  workProcess: {
    title: "How I Work",
    steps: [
      {
        step: 1,
        title: "Discovery",
        description: "Understand the business goals, users and project requirements."
      },
      {
        step: 2,
        title: "Planning",
        description: "Design the architecture, user flow and development roadmap."
      },
      {
        step: 3,
        title: "Design",
        description: "Create intuitive and modern user experiences before development."
      },
      {
        step: 4,
        title: "Development",
        description: "Build scalable, maintainable and high-performance applications."
      },
      {
        step: 5,
        title: "Testing",
        description: "Ensure quality, responsiveness and performance across devices."
      },
      {
        step: 6,
        title: "Launch",
        description: "Deploy, monitor and continuously improve the product."
      }
    ]
  },

  whyChooseMe: {
    title: "Why Work With Me?",
    items: [
      {
        title: "Enterprise Experience",
        description: "Experience building enterprise applications used in production."
      },
      {
        title: "Product Mindset",
        description: "I don't just write code—I think about the product and the user."
      },
      {
        title: "Creative Thinking",
        description: "Combining engineering with storytelling leads to more engaging products."
      },
      {
        title: "Clean Architecture",
        description: "Scalable, maintainable and reusable codebase."
      },
      {
        title: "Long-Term Support",
        description: "Focused on building products that are easy to maintain and extend."
      },
      {
        title: "Continuous Learning",
        description: "Always exploring modern technologies and industry best practices."
      }
    ]
  },

  collaboration: {
    title: "Looking For",
    items: [
      "Startup Founders",
      "SaaS Companies",
      "Product Teams",
      "Creative Agencies",
      "Authors",
      "Indie Makers",
      "Enterprise Clients",
      "Freelance Opportunities"
    ]
  },

  experience: {
    title: "Experience",
    subtitle: "Building enterprise applications and delivering scalable frontend solutions.",
    items: [
      {
        id: "vivant360",
        company: "Vivant360 Software Services",
        companyLogo: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=200&auto=format&fit=crop",
        position: "Lead Frontend Engineer",
        employmentType: "Full Time",
        location: "Tirunelveli, Tamil Nadu, India",
        workMode: "Hybrid",
        duration: "2023 - Present",
        experience: "2.5+ Years",
        current: true,
        description: "Leading frontend development for enterprise-grade product suites. Highly awarded for outstanding engineering contributions (Rising Star Award) with a strong focus on UI performance optimization, modular component systems, and resolving complex technical challenges.",
        responsibilities: [
          "Lead product UI development and feature orchestration.",
          "Build high-performance, modular, and reusable React UI component systems.",
          "Design and implement dynamic form systems.",
          "Develop complex logic routing and interactive canvas interfaces.",
          "Implement robust role-based system access.",
          "Optimize rendering cycles and application loading speeds.",
          "Solve complex frontend performance bottlenecks and engineering problems.",
          "Collaborate directly with cross-functional product and QA teams.",
          "Participate in product architecture and scalability discussion.",
          "Maintain high-quality clean code standards across the platform."
        ],
        technologies: [
          "React.js",
          "TypeScript",
          "JavaScript",
          "Material UI",
          "PrimeReact",
          "Redux",
          "Valtio",
          "REST API",
          "GraphQL",
          "Docker",
          "Vite",
          "Git"
        ],
        projects: [
          "Enterprise UI Platform",
          "Dynamic Layout Engine",
          "Interactive Process Designer",
          "IAM Access Control",
          "Form Orchestrator",
          "Analytics Portal"
        ]
      }
    ]
  },

  freelancing: {
    title: "Freelancing",
    status: "Active",
    description: "Working on independent projects including portfolio websites, dashboards, admin panels and AI-powered web applications.",
    services: [
      "Portfolio Websites",
      "Landing Pages",
      "React Applications",
      "Admin Dashboards",
      "Enterprise UI",
      "AI Integrations",
      "Frontend Consultation"
    ]
  },

  education: {
    title: "Education",
    items: [
      {
        degree: "MBA - Product Management",
        institution: "Correspondence Programme",
        duration: "2024 - Present",
        status: "Pursuing"
      },
      {
        degree: "Bachelor of Science - Computer Science",
        institution: "University",
        duration: "2020 - 2023",
        status: "Completed"
      }
    ]
  },

  certifications: {
    title: "Certifications",
    items: [
      {
        title: "React.js Development",
        issuer: "CoderProfession",
        year: "2022"
      },
      {
        title: "Python Programming",
        issuer: "CoderProfession",
        year: "2020"
      }
    ]
  },

  awards: {
    title: "Awards",
    items: [
      {
        title: "Rising Star Award",
        organization: "Vivant360 Software Services",
        description: "Recognized for outstanding contribution and rapid professional growth."
      },
      {
        title: "Outstanding Excellence",
        organization: "Vivant360 Software Services",
        description: "Awarded for consistent performance and quality delivery."
      }
    ]
  },

  achievements: {
    title: "Achievements",
    items: [
      {
        title: "Published Author",
        description: "Successfully published the novel 'When We Meet Again'.",
        icon: "BookOpen"
      },
      {
        title: "Enterprise Development",
        description: "Built enterprise-grade applications used in production.",
        icon: "Building2"
      },
      {
        title: "AI Development",
        description: "Integrated Generative AI capabilities into modern applications.",
        icon: "Bot"
      },
      {
        title: "Creative Product Ideas",
        description: "Designed multiple startup and SaaS product concepts.",
        icon: "Lightbulb"
      }
    ]
  },

  careerHighlights: {
    title: "Career Highlights",
    items: [
      "2.5+ Years of Frontend Development",
      "Enterprise Software Experience",
      "20+ Projects Delivered",
      "Published Author",
      "React.js Specialist",
      "Product Thinker",
      "AI Enthusiast",
      "Creative Consultant"
    ]
  },

  projects: {
    title: "Featured Projects",
    subtitle: "A collection of enterprise applications, AI products and creative projects I've built over the years.",
    categories: [
      "All",
      "Enterprise",
      "Frontend",
      "AI",
      "Personal",
      "Writing"
    ],
    featured: [
      {
        id: "enterprise-ui",
        title: "Enterprise Core UI",
        slug: "enterprise-ui",
        category: "Enterprise",
        featured: true,
        status: "Production",
        year: "2023 - Present",
        thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
        ],
        description: "High-performance enterprise portal focused on customizable business modules and responsive UI systems.",
        challenge: "Develop scalable frontend architecture capable of handling dynamic enterprise modules and highly performant data rendering.",
        solution: "Built reusable React components with configurable business logic and fine-tuned application state, improving rendering latency.",
        responsibilities: [
          "Frontend Architecture",
          "UI Optimization",
          "Visual Logic Processors",
          "Dynamic Form Engines",
          "Performance Tuning"
        ],
        technologies: [
          "React.js",
          "TypeScript",
          "PrimeReact",
          "Material UI",
          "Redux",
          "REST API",
          "GraphQL"
        ],
        features: [
          "Dynamic Forms",
          "Process Visualizer",
          "Role Based Access",
          "Analytics Dashboard",
          "Configurable Modules",
          "Responsive UI"
        ],
        teamSize: "10+",
        role: "Lead Frontend Engineer",
        github: "",
        demo: "",
        caseStudy: "#",
        color: "#5B6CFF"
      },
      {
        id: "pipeline-builder",
        title: "Pipeline Builder",
        slug: "pipeline-builder",
        category: "Enterprise",
        featured: true,
        status: "Production",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
        description: "Enterprise-grade visual pipeline designer allowing teams to orchestrate, configure, and monitor data & workflow integration pipelines with zero-code logic mapping.",
        responsibilities: [
          "Frontend Architecture",
          "React Components",
          "Dynamic Flow Routing",
          "JSON Schema Validation"
        ],
        technologies: [
          "React.js",
          "TypeScript",
          "Valtio",
          "React Flow",
          "Tailwind CSS"
        ],
        features: [
          "Visual Node Drag & Drop",
          "Dynamic Validation Schema",
          "Conditional Flow Routing",
          "Realtime State Visualization"
        ],
        color: "#00D4FF"
      },
      {
        id: "interactive-flow",
        title: "Interactive Flow Designer",
        slug: "interactive-flow",
        category: "Enterprise",
        featured: true,
        status: "Production",
        thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
        description: "Visual canvas designer for interactive automation flow orchestration.",
        technologies: [
          "React.js",
          "TypeScript",
          "React Flow"
        ],
        features: [
          "Node Editor",
          "Flow Automation",
          "Conditional Logic",
          "Drag & Drop"
        ],
        color: "#FFB800"
      },
      {
        id: "epic-story-force",
        title: "Epic Story Force",
        slug: "epic-story-force",
        category: "AI",
        featured: true,
        status: "Live",
        thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
        description: "AI powered storytelling platform capable of generating stories, characters and worlds.",
        technologies: [
          "React.js",
          "Node.js",
          "Gemini API",
          "Express.js",
          "Framer Motion"
        ],
        features: [
          "AI Story Generator",
          "Character Generator",
          "World Builder",
          "Export Stories"
        ],
        demo: "https://epic-story-force.netlify.app",
        color: "#8B5CF6"
      },
      {
        id: "crypto-dashboard",
        title: "Crypto Dashboard",
        category: "Frontend",
        featured: true,
        status: "Completed",
        thumbnail: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=600&auto=format&fit=crop",
        description: "Modern cryptocurrency dashboard with TradingView integration and animated charts.",
        technologies: [
          "React.js",
          "Tailwind CSS",
          "TradingView",
          "Framer Motion"
        ],
        features: [
          "Live Prices",
          "Trading Charts",
          "Dark Mode",
          "Responsive Design"
        ],
        color: "#14B8A6"
      },
      {
        id: "node-hub",
        title: "Node Hub",
        slug: "node-hub",
        category: "Personal",
        featured: true,
        status: "Active Build",
        year: "2026",
        thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
        description: "Relationship-first group task and expense tracker. Organizes collaboration around trusted personal nodes and shared networks with built-in proof-of-action confirmation.",
        challenge: "Groups stitch together fragmented apps (chat, expense splits, task lists) to coordinate activity, with no connection between logs, proof, and alignment.",
        solution: "Implemented custom confirmation states for tasks/expenses, a scoped comment timeline for proof sharing, and progressive web application installability with Web Push.",
        responsibilities: [
          "Solo Creator & Architect",
          "Product Strategy & Roadmap",
          "UX/UI Design & Prototyping",
          "Full-Stack Development"
        ],
        technologies: [
          "React.js",
          "Tailwind CSS",
          "Supabase",
          "TypeScript",
          "Web Push API",
          "Resend"
        ],
        features: [
          "Trusted Node Connections",
          "Evidence-Scoped Comments & Proof Photos",
          "Multi-Stage Modules, Sprints & Deadlines",
          "Comprehensive Group Spend Analytics",
          "Email & Push Notification Sync"
        ],
        color: "#38BDF8"
      },
      {
        id: "racket-hub",
        title: "RacketHub",
        slug: "racket-hub",
        category: "Personal",
        featured: true,
        status: "Completed (Phase 1)",
        year: "2025",
        thumbnail: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop",
        description: "Advanced racket sports portal delivering real-time live scoring, match-by-match analytical tracking, 9-zone court heatmap diagnostics, and deep performance metric timelines.",
        challenge: "Local racket sports matches are rarely recorded digitally, resulting in lost match histories, lack of player statistics, and no permanent athletic identity.",
        solution: "Designed a dedicated digital sports ecosystem with automated set/winner logic, real-time live broadcasting streams, and granular shot event tracking (smash, drop, unforced errors).",
        responsibilities: [
          "Lead Developer",
          "Frontend Architect",
          "Analytics Engine Designer",
          "Creative Director"
        ],
        technologies: [
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "D3.js",
          "Recharts"
        ],
        features: [
          "Real-Time Match Scoring & Sync",
          "Granular Shot Event Analytics",
          "9-Zone Court Performance Heatmap",
          "Chronological Replay Timeline",
          "Simplified Quick Result Logger"
        ],
        color: "#4ADE80"
      }
    ]
  },

  projectMetrics: {
    title: "Project Highlights",
    items: [
      {
        label: "Projects Built",
        value: "20+"
      },
      {
        label: "Enterprise Products",
        value: "5+"
      },
      {
        label: "AI Projects",
        value: "4+"
      },
      {
        label: "Frontend Applications",
        value: "15+"
      }
    ]
  },

  books: {
    title: "Books",
    subtitle: "Stories that explore emotions, imagination and possibilities.",
    items: [
      {
        id: "when-we-meet-again",
        featured: true,
        title: "When We Meet Again",
        status: "Published",
        type: "Novel",
        genre: [
          "Romance",
          "Drama",
          "Emotional Fiction"
        ],
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",
        description: "A heartfelt story exploring love, destiny and the unexpected moments that reconnect two lives.",
        shortDescription: "A story about love, memories and second chances.",
        published: true,
        publishYear: "2025",
        pages: 280,
        language: "English",
        purchaseLinks: {
          amazon: "https://amazon.com",
          kindle: "https://amazon.com",
          paperback: "https://amazon.com"
        },
        gallery: []
      },
      {
        id: "soulstone",
        featured: true,
        title: "Soulstone",
        status: "Writing",
        type: "Novel",
        genre: [
          "Science Fiction",
          "Fantasy",
          "Adventure"
        ],
        cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
        banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        description: "An ambitious science-fantasy universe exploring mysterious powers, civilizations and the connection between humanity and the unknown.",
        progress: 35
      },
      {
        id: "when-we-meet-again-2",
        featured: true,
        title: "When We Meet Again - Sequel",
        status: "Planning",
        type: "Novel",
        genre: [
          "Romance",
          "Drama"
        ],
        cover: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=600&auto=format&fit=crop",
        description: "Continuing the emotional journey of the characters from the first novel.",
        progress: 10
      }
    ]
  },

  writingJourney: {
    title: "Writing Journey",
    description: "Writing allows me to explore ideas beyond technology. Every story begins with a simple question: 'What if?' That curiosity drives both my software engineering and my novels.",
    timeline: [
      {
        year: "2024",
        title: "Started Writing Seriously"
      },
      {
        year: "2025",
        title: "Published 'When We Meet Again'"
      },
      {
        year: "2026",
        title: "Working on Soulstone"
      },
      {
        year: "Future",
        title: "Expanding a Shared Story Universe"
      }
    ]
  },

  writingPhilosophy: {
    title: "Writing Philosophy",
    items: [
      "Characters should feel real.",
      "Every story should leave an emotion behind.",
      "World building should have purpose.",
      "Imagination is limitless.",
      "Technology and storytelling can inspire each other."
    ]
  },

  genres: [
    "Science Fiction",
    "Fantasy",
    "Drama",
    "Romance",
    "Adventure",
    "Psychological Fiction"
  ],

  futureBooks: {
    title: "Future Projects",
    items: [
      {
        title: "Soulstone Series",
        status: "In Progress"
      },
      {
        title: "When We Meet Again - Sequel",
        status: "Planning"
      },
      {
        title: "Untitled Science Fiction Project",
        status: "Concept"
      }
    ]
  },

  favoriteAuthors: [
    "Brandon Sanderson",
    "Dan Brown",
    "Andy Weir"
  ],

  favoriteGenres: [
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Adventure",
    "Drama"
  ],

  timeline: {
    title: "Journey",
    subtitle: "Every milestone represents a step towards building better products and telling better stories.",
    items: [
      {
        year: "2020",
        title: "Started Computer Science",
        category: "Education",
        description: "Began my Bachelor's degree in Computer Science and developed a strong interest in software engineering.",
        icon: "GraduationCap"
      },
      {
        year: "2021",
        title: "Frontend Development Journey",
        category: "Learning",
        description: "Started learning HTML, CSS, JavaScript and React.js while building personal projects.",
        icon: "Code2"
      },
      {
        year: "2022",
        title: "Built Real-world Projects",
        category: "Projects",
        description: "Developed multiple applications to strengthen frontend development and UI engineering skills.",
        icon: "Laptop"
      },
      {
        year: "2023",
        title: "Joined Vivant360",
        category: "Career",
        description: "Started working as a Frontend Developer building enterprise insurance applications using React.js.",
        icon: "Building2"
      },
      {
        year: "2024",
        title: "Started MBA",
        category: "Education",
        description: "Pursuing MBA in Product Management to strengthen business and product strategy skills.",
        icon: "Briefcase"
      },
      {
        year: "2025",
        title: "Published First Novel",
        category: "Writing",
        description: "Published 'When We Meet Again', marking the beginning of my writing journey.",
        icon: "BookOpen"
      },
      {
        year: "2026",
        title: "Building AI Products",
        category: "Innovation",
        description: "Working on AI-powered applications, product ideas and the science fantasy novel 'Soulstone'.",
        icon: "Bot"
      }
    ]
  },

  careerGoals: {
    title: "Career Goals",
    shortTerm: [
      "Become a Senior Frontend Engineer",
      "Work with global startups",
      "Build successful SaaS products",
      "Expand freelance consulting",
      "Publish more books"
    ],
    longTerm: [
      "Lead Product Engineering teams",
      "Launch my own technology company",
      "Build AI-first products",
      "Create globally recognized software",
      "Become a full-time author alongside engineering"
    ]
  },

  milestones: {
    title: "Milestones",
    items: [
      {
        title: "2.5+ Years Experience",
        completed: true
      },
      {
        title: "Enterprise Software Development",
        completed: true
      },
      {
        title: "Published Author",
        completed: true
      },
      {
        title: "20+ Projects",
        completed: true
      },
      {
        title: "MBA - Product Management",
        completed: false
      },
      {
        title: "Launch SaaS Product",
        completed: false
      }
    ]
  },

  currentlyWorkingOn: {
    title: "Currently Working On",
    items: [
      {
        title: "Soulstone",
        category: "Novel",
        progress: 35
      },
      {
        title: "When We Meet Again - Sequel",
        category: "Novel",
        progress: 10
      },
      {
        title: "Node Hub",
        category: "Startup Idea",
        progress: 20
      },
      {
        title: "Enterprise React Applications",
        category: "Professional",
        progress: 100
      }
    ]
  },

  futureVision: {
    title: "Future Vision",
    items: [
      "Build products that impact millions of users.",
      "Bridge technology with storytelling.",
      "Create AI-powered developer tools.",
      "Publish a successful science-fiction series.",
      "Build a globally recognized personal brand.",
      "Mentor aspiring developers and creators."
    ]
  },

  faq: {
    title: "Diagnostic Queries",
    subtitle: "Frequently Asked Questions",
    items: [
      {
        question: "What are your core engineering specialties?",
        answer: "I specialize in robust full-stack development, leveraging React, TypeScript, Node.js, and custom cloud-native infrastructures. My focus is on high performance, beautiful interactive design, and reliable system architecture.",
        category: "Technical"
      },
      {
        question: "How do you merge technical engineering with speculative fiction?",
        answer: "Storytelling and software architecture share a core foundation: world-building. Designing intricate systems of rules, modules, and relationships in science-fiction aligns perfectly with architecting clean, maintainable, and elegant software applications.",
        category: "Creative"
      },
      {
        question: "How can we initiate a joint project?",
        answer: "You can use the Ingress Contact Pipeline at the bottom of this page to send a secure brief. I actively review all signals and will coordinate with you in under 24 hours.",
        category: "Collaboration"
      }
    ]
  },

  contact: {
    title: "Let's Build Something Amazing",
    subtitle: "Whether it's a product, a startup idea or a creative collaboration, I'd love to hear from you.",
    email: "sathishsatish2002@gmail.com",
    phone: "",
    location: "Tirunelveli, Tamil Nadu, India",
    resume: "/resume.pdf"
  },

  socials: [
    {
      platform: "GitHub",
      username: "renganathan-a",
      url: "https://github.com"
    },
    {
      platform: "LinkedIn",
      username: "renganathan-a",
      url: "https://linkedin.com"
    },
    {
      platform: "Twitter",
      username: "renganathan_a",
      url: "https://twitter.com"
    }
  ],

  callToAction: {
    title: "Let's Turn Ideas Into Reality",
    description: "From enterprise software to startup ideas and creative storytelling, I'm always excited to collaborate on meaningful projects.",
    primaryButton: {
      text: "Start a Conversation",
      link: "#contact"
    },
    secondaryButton: {
      text: "Explore My Projects",
      link: "#projects"
    }
  },

  footer: {
    brand: "A. Renganathan",
    tagline: "Engineering Ideas. Designing Experiences. Writing Stories.",
    description: "Building enterprise software, digital products and stories that inspire.",
    copyright: {
      text: "© 2026 A. Renganathan. All Rights Reserved.",
      showCurrentYear: true
    },
    quickLinks: [
      {
        title: "Home",
        href: "#home"
      },
      {
        title: "About",
        href: "#about"
      },
      {
        title: "Projects",
        href: "#projects"
      },
      {
        title: "Books",
        href: "#books"
      },
      {
        title: "Contact",
        href: "#contact"
      }
    ],
    quote: "Technology builds products. Creativity gives them purpose."
  }
};
