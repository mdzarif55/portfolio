export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: "Full-Stack" | "Frontend" | "Mobile / Cross-Platform" | "Web App";
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  tags: string[];
  features: string[];
  metrics?: string;
  colorScheme: {
    from: string;
    to: string;
    accent: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: string;
    iconName?: string;
    featured?: boolean;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  cgpa: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
  description: string;
  category: "Development" | "Data & Analytics" | "Design" | "Marketing";
}

export interface PortfolioData {
  personal: {
    name: string;
    shortName: string;
    title: string;
    roleTagline: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    availability: string;
    github: string;
    linkedin: string;
    avatarUrl: string;
    resumePdfUrl: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  skillCategories: SkillCategory[];
  projects: Project[];
  competitiveProgramming: {
    platform: string;
    stats: string;
    description: string;
    topics: string[];
    profileUrl?: string;
  };
  education: Education[];
  certifications: Certification[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "MD. MUHTASIM ZARIF",
    shortName: "Muhtasim Zarif",
    title: "Passionate MERN Stack & Cross-Platform Developer",
    roleTagline: "Building scalable web & cross-platform applications with high precision, modern UX, and robust architectures.",
    bio: "Passionate MERN Stack & Cross-Platform Developer skilled in building clean, responsive web and mobile applications. Proficient in React.js, React Native, Node.js, and database management, with strong problem-solving capabilities developed through competitive programming (150+ Codeforces problems). Seeking a React Developer (Cross-Platform) role to build scalable user experiences and drive technical solutions.",
    email: "muhtasimzarif055@gmail.com",
    phone: "+880 1797-146055",
    location: "Dhaka, Bangladesh",
    availability: "Available for Full-time Roles & Contracts",
    github: "https://github.com/mdzarif55",
    linkedin: "https://linkedin.com/in/mdzarif55",
    avatarUrl: "https://avatars.githubusercontent.com/u/146372499?v=4",
    resumePdfUrl: "/Resume_Md_Muhtasim_Zarif.pdf",
  },
  stats: [
    {
      label: "Problems Solved",
      value: "150+",
      description: "Codeforces algorithmic & data structure challenges",
    },
    {
      label: "Projects Built",
      value: "15+",
      description: "Full-stack web apps, portals & responsive platforms",
    },
    {
      label: "BSc in CSE",
      value: "3.18 CGPA",
      description: "Daffodil Institute of IT graduate",
    },
    {
      label: "Certifications",
      value: "4+",
      description: "MERN Stack, Data Analysis, Graphic Design, Marketing",
    },
  ],
  skillCategories: [
    {
      title: "Frontend & Mobile",
      description: "Building responsive, accessible, dynamic user interfaces",
      icon: "Layout",
      skills: [
        { name: "React.js", level: "Advanced", featured: true },
        { name: "Next.js", level: "Advanced", featured: true },
        { name: "React Native", level: "Proficient", featured: true },
        { name: "TypeScript", level: "Proficient", featured: true },
        { name: "JavaScript (ES6+)", level: "Advanced", featured: true },
        { name: "Tailwind CSS", level: "Advanced", featured: true },
        { name: "HTML5 & CSS3", level: "Expert", featured: false },
        { name: "Bootstrap", level: "Proficient", featured: false },
      ],
    },
    {
      title: "Backend & Database",
      description: "Designing RESTful services, APIs, and data modeling",
      icon: "Server",
      skills: [
        { name: "Node.js", level: "Proficient", featured: true },
        { name: "Express.js", level: "Proficient", featured: true },
        { name: "MongoDB", level: "Proficient", featured: true },
        { name: "MySQL", level: "Intermediate", featured: false },
        { name: "RESTful APIs", level: "Advanced", featured: true },
        { name: "Authentication (JWT)", level: "Proficient", featured: false },
      ],
    },
    {
      title: "Data Analysis & Testing",
      description: "Validating logic, querying data, and ensuring API reliability",
      icon: "BarChart3",
      skills: [
        { name: "SQL", level: "Proficient", featured: true },
        { name: "Data Visualization", level: "Proficient", featured: true },
        { name: "Dashboard Creation", level: "Proficient", featured: false },
        { name: "API Testing (Postman)", level: "Advanced", featured: true },
        { name: "Manual Testing", level: "Proficient", featured: false },
        { name: "Browser DevTools", level: "Expert", featured: false },
      ],
    },
    {
      title: "Tools, Design & Platforms",
      description: "Workflow tooling, CI/CD deployment, and UI design suites",
      icon: "Wrench",
      skills: [
        { name: "Git & GitHub", level: "Advanced", featured: true },
        { name: "VS Code", level: "Expert", featured: false },
        { name: "Vercel", level: "Advanced", featured: true },
        { name: "Figma", level: "Proficient", featured: true },
        { name: "Adobe Photoshop", level: "Intermediate", featured: false },
        { name: "Adobe Illustrator", level: "Intermediate", featured: false },
        { name: "Canva", level: "Advanced", featured: false },
      ],
    },
  ],
  projects: [
    {
      id: "studiospace",
      title: "StudioSpace",
      subtitle: "Peer-to-Peer Creative Workspace & Production Studio Sharing Platform",
      description:
        "High-performance peer-to-peer marketplace designed for creators, filmmakers, photographers, podcasters, and musicians to discover, inspect, and book verified studio spaces.",
      fullDescription:
        "StudioSpace is a modern peer-to-peer marketplace that empowers creative professionals to find, inspect, and book verified production venues. Features intuitive category-based exploration including photo studios, sound stages, podcast lounges, music suites, and art workshops. Built with responsive aesthetics, dynamic space filters, and friction-free user flows.",
      category: "Full-Stack",
      liveUrl: "https://studio-space-eosin.vercel.app/",
      githubUrl: "https://github.com/mdzarif55/StudioSpace",
      featured: true,
      tags: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Marketplace UI", "Vercel"],
      features: [
        "Verified creative studio directory with categorized listings (photo, audio, podcast, sound stage)",
        "Advanced interactive filters by category, hourly rate, amenities, and location",
        "Modern booking workflow with visual space gallery and high-fidelity specifications",
        "Fully responsive mobile-first architecture with snappy load times on Vercel",
      ],
      metrics: "Live Production App",
      colorScheme: {
        from: "from-amber-500/20",
        to: "to-orange-500/20",
        accent: "border-amber-500/30 text-amber-500",
      },
    },
    {
      id: "medicare-solution",
      title: "Medicare Solution",
      subtitle: "Full-Stack Online Medicine & Health Service E-Commerce",
      description:
        "Architected and deployed a full-stack health e-commerce application using the MERN stack with dynamic search, product management, and secure order handling.",
      fullDescription:
        "Medicare Solution is a full-featured digital pharmacy and healthcare platform built using MongoDB, Express.js, React, and Node.js. It simplifies medicine purchasing and healthcare consultation through dynamic catalog search, categorized pharmaceutical items, customer authentication, shopping cart persistence, and order management.",
      category: "Full-Stack",
      liveUrl: "https://medicare-solution.vercel.app/",
      githubUrl: "https://github.com/mdzarif55/Medicare_solutionD",
      featured: true,
      tags: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "REST APIs"],
      features: [
        "Architected and deployed full-stack health e-commerce platform using MERN stack",
        "Designed and implemented RESTful APIs for medicine catalogs, category management, and cart operations",
        "Implemented secure user authentication and order handling workflows",
        "Responsive, accessible UI with Tailwind CSS and fast deployment on Vercel",
      ],
      metrics: "Full MERN Architecture",
      colorScheme: {
        from: "from-emerald-500/20",
        to: "to-teal-500/20",
        accent: "border-emerald-500/30 text-emerald-500",
      },
    },
    {
      id: "bajar-dor",
      title: "Bajar Dor (বাজার দর)",
      subtitle: "Daily Commodity & Grocery Market Price Analytics in Bangladesh",
      description:
        "Real-time daily market price monitoring application for essential daily commodities and groceries across markets in Bangladesh with price trend alerts.",
      fullDescription:
        "Bajar Dor (বাজার দর) is a public utility web application providing citizens and households in Bangladesh with verified daily market price updates for daily essential food items (rice, lentils, edible oils, onions, potatoes, spices). Includes at-a-glance price increase indicators and search functionality to empower smart consumer shopping.",
      category: "Web App",
      liveUrl: "https://bajar-dor-ruddy.vercel.app/",
      githubUrl: "https://github.com/mdzarif55/bajar-dor",
      featured: true,
      tags: ["TypeScript", "React", "Tailwind CSS", "Market Analytics", "Bilingual UI"],
      features: [
        "Real-time daily tracking of essential grocery prices across Bangladesh",
        "Visual price change indicators (today's price hikes and drops at a glance)",
        "Instant search filter across multiple food categories and staple items",
        "Bilingual typography and mobile-optimized design for fast everyday checkouts",
      ],
      metrics: "Real-time Tracker",
      colorScheme: {
        from: "from-green-500/20",
        to: "to-emerald-500/20",
        accent: "border-green-500/30 text-green-500",
      },
    },
    {
      id: "bangla-news-24",
      title: "Bangla News 24",
      subtitle: "Next-Gen Bengali Digital News Portal & Media Outlet",
      description:
        "Modern responsive Bengali news platform delivering breaking news feeds, categorized editorial content, and clean reading experiences.",
      fullDescription:
        "Bangla News 24 is a sleek, modern digital journalism portal built with TypeScript, React, and Tailwind CSS. It presents breaking national, international, political, and cultural news with optimized Bengali typography, multi-column editorial magazine grids, featured photo stories, and instant article previews.",
      category: "Frontend",
      liveUrl: "https://bangla-news-24.vercel.app/",
      githubUrl: "https://github.com/mdzarif55/bangla-news-24",
      featured: true,
      tags: ["TypeScript", "Next.js / React", "Tailwind CSS", "News Portal", "Typography"],
      features: [
        "Dynamic categorization covering National, Politics, International, Sports, and Tech news",
        "Editorial grid layout with curated headline hero sections and breaking news feeds",
        "Optimized Bengali font rendering and accessible high-contrast reading mode",
        "Mobile-first responsive navigation bar and live timestamp updates",
      ],
      metrics: "Modern Media Portal",
      colorScheme: {
        from: "from-red-500/20",
        to: "to-rose-500/20",
        accent: "border-red-500/30 text-red-500",
      },
    },
    {
      id: "fit-log",
      title: "FitLog",
      subtitle: "High-Performance Workout Tracking & Exercise Library",
      description:
        "Train with intent. Log every set. Intuitive fitness tracker and movement library designed for dedicated lifters and athletes.",
      fullDescription:
        "FitLog empowers fitness enthusiasts to train with deliberate intent. It provides an extensive exercise movement library (Bench Press, Pull-Ups, Back Squats, Overhead Press, Bicep Curls, Core Planks) along with set-by-set logging, rep tracking, and progressive overload analytics.",
      category: "Web App",
      liveUrl: "https://fit-log-theta-ebon.vercel.app/",
      githubUrl: "https://github.com/mdzarif55/fit-log",
      featured: true,
      tags: ["TypeScript", "React", "Tailwind CSS", "Fitness Companion", "Dark UI"],
      features: [
        "Extensive curated exercise movement library with form cues and muscle groups",
        "Intuitive set-and-rep logger supporting weight, repetitions, and intensity rating",
        "Progressive overload tracking designed for quick in-gym session logging",
        "High-contrast dark-mode first aesthetic built for athletic focus",
      ],
      metrics: "Fitness Logger",
      colorScheme: {
        from: "from-cyan-500/20",
        to: "to-blue-500/20",
        accent: "border-cyan-500/30 text-cyan-500",
      },
    },
    {
      id: "dev-stack",
      title: "DevStack",
      subtitle: "Developer Tech Stack Explorer & Curator",
      description:
        "Modern and responsive web app helping developers explore popular technologies, compare libraries, and build custom dev stacks.",
      fullDescription:
        "DevStack is an interactive portal where software engineers can browse technology details, compare frameworks, select the tools they need for their upcoming project, and export custom stack summaries.",
      category: "Frontend",
      liveUrl: "https://dev-stack-dun-one.vercel.app",
      githubUrl: "https://github.com/mdzarif55/dev-stack",
      featured: false,
      tags: ["TypeScript", "React", "Tailwind CSS", "Developer Tooling"],
      features: [
        "Interactive tech stack builder and technology comparator",
        "Curated database of modern frontend, backend, and database tools",
        "Personalized stack exports and responsive card view",
      ],
      metrics: "Developer Utility",
      colorScheme: {
        from: "from-purple-500/20",
        to: "to-indigo-500/20",
        accent: "border-purple-500/30 text-purple-500",
      },
    },
    {
      id: "fifa-world-cup",
      title: "FIFA World Cup 2026",
      subtitle: "Responsive Tournament Showcase Landing Page",
      description:
        "Engineered an interactive, mobile-responsive single-page tournament showcase landing page utilizing HTML5, CSS3, and JavaScript.",
      fullDescription:
        "Engineered an interactive, mobile-responsive single-page landing page showcasing FIFA World Cup 2026. Optimized layout performance, cross-browser compatibility, and visual presentation across desktop and mobile viewports.",
      category: "Frontend",
      liveUrl: "https://fifa-world-cup-lilac.vercel.app",
      githubUrl: "https://github.com/mdzarif55/fifa_world_cup",
      featured: false,
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Cross-Browser"],
      features: [
        "Interactive mobile-responsive single-page landing page",
        "Optimized layout performance and cross-browser rendering",
        "Fluid animations and accessible tournament schedules",
      ],
      metrics: "High Performance",
      colorScheme: {
        from: "from-blue-500/20",
        to: "to-cyan-500/20",
        accent: "border-blue-500/30 text-blue-500",
      },
    },
    {
      id: "dev-conference",
      title: "Dev Conference",
      subtitle: "Modern Tech Event & Registration Portal",
      description:
        "Event landing page utilizing modern frontend web standards with fluid responsiveness, clean code architecture, and high UI performance.",
      fullDescription:
        "Designed and developed an event landing page using modern frontend web standards (HTML, CSS, JavaScript). Ensured fluid responsiveness, clean code architecture, and high UI performance for attendee registration info.",
      category: "Frontend",
      liveUrl: "https://dev-conference-pearl.vercel.app",
      githubUrl: "https://github.com/mdzarif55/dev-conference",
      featured: false,
      tags: ["HTML5", "CSS3", "JavaScript", "Event UI"],
      features: [
        "Designed and developed event landing page using modern web standards",
        "Clean registration info presentation and speaker agenda",
        "Cross-platform responsive design",
      ],
      metrics: "Event Landing",
      colorScheme: {
        from: "from-violet-500/20",
        to: "to-fuchsia-500/20",
        accent: "border-violet-500/30 text-violet-500",
      },
    },
  ],
  competitiveProgramming: {
    platform: "Codeforces & C Fundamentals",
    stats: "150+ Problems Solved",
    description:
      "Active competitive programmer with 150+ algorithmic problems solved on Codeforces. Solid algorithmic foundation specializing in Dynamic Programming (DP), Data Structures (Trees, Graphs, Queues, Hash Tables), and Logic Building. Highly proficient in C programming for efficient algorithm design, memory management, and computational complexity optimization.",
    topics: [
      "Dynamic Programming (DP)",
      "Data Structures & Algorithms",
      "Graph Theory & Trees",
      "Time & Space Complexity Optimization",
      "C Memory Management & Pointers",
      "Competitive Logic Building",
    ],
    profileUrl: "https://github.com/mdzarif55",
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering (BSc in CSE)",
      institution: "Daffodil Institute of IT",
      cgpa: "3.18 / 4.00",
      location: "Dhaka, Bangladesh",
      period: "Graduated",
      description:
        "Comprehensive undergraduate studies in Computer Science and Engineering, covering software engineering, algorithms, database management systems, operating systems, and computer networks.",
      highlights: [
        "Strong academic standing with CGPA of 3.18",
        "Core coursework in Data Structures, Algorithms, OOP, Database Systems, and System Architecture",
        "Participated in programming competitions, academic hackathons, and team projects",
      ],
    },
  ],
  certifications: [
    {
      title: "MERN Stack Development Course",
      issuer: "Programming Hero",
      icon: "Code2",
      description: "Advanced full-stack mastery covering React, Node.js, Express, MongoDB, Next.js, and authentication.",
      category: "Development",
    },
    {
      title: "Data Analyst Course",
      issuer: "Farhan Academy",
      icon: "LineChart",
      description: "Comprehensive training in SQL queries, data manipulation, visualization, and dashboard creation.",
      category: "Data & Analytics",
    },
    {
      title: "Graphic Design Course",
      issuer: "Global IT",
      icon: "Palette",
      description: "Visual identity, layout design, typography, Figma, Adobe Photoshop, and Illustrator fundamentals.",
      category: "Design",
    },
    {
      title: "Digital Marketing Course",
      issuer: "National Skills Development",
      icon: "Target",
      description: "Search engine optimization, brand positioning, content strategy, and digital outreach.",
      category: "Marketing",
    },
  ],
};
