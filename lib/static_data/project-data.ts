// export const PROJECTS = [
//   { title: "Employee Sync", category: "Management", rotation: -2 },
//   { title: "Lingo - Duolingo Clone", category: "Clonning", rotation: 3 },
//   { title: "Kanto Best Price", category: "Ecommerce", rotation: -1 },
//   { title: "Hyolmo Helping Hands", category: "Non-profit organization", rotation: 4 },
//   { title: "Clover Tech Nepal", category: "Web profile", rotation: -3 },
// ];|






export type ProjectMedia = 
  | { type: 'image'; url: string }
  | { type: 'video'; url: string }
  | { type: 'none' };

export interface Project {
  id: string; // Unique identifier for keys and routing
  title: string;
  category: string;
  rotation: number;
  thumbnail: ProjectMedia;
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  purpose: string;
  techStack: string[];
  howItWasBuilt: string;
  role: string;
}

export const PROJECTS: Project[] = [
  {
    id: "employee-sync",
    title: "Employee Sync",
    category: "SaaS Management",
    rotation: -2,
    thumbnail: { type: 'video', url: '/projects/employeesync/employeesync.mp4' },
    githubUrl: "https://github.com/kesanglama7/Employee-Management-System-EmployeeSync-",
    description: "A comprehensive SaaS management tool for tracking tasks, leaves, and performance monitoring.",
    purpose: "To provide companies with an automated, fraud-proof management system for both remote and office environments.",
    techStack: ["Next.js", "NextAuth", "PostgreSQL", "Prisma", "TypeScript", "TanStack Query", "FingerprintJS", "Resend"],
    howItWasBuilt: "Developed with an RBAC system and a custom IP/Geo-detection algorithm to prevent proxy attendance.",
    role: "Fullstack Developer (BCA Final Year Project)"
  },
  {
    id: "kanto-best-price",
    title: "Kanto Best Price",
    category: "E-commerce",
    rotation: -1,
    thumbnail: { type: 'image', url: '/projects/kantobestprice/kantobest.png' },
    liveUrl: "https://kanto.clovertechnepal.com.np/",
    description: "A global multi-language e-commerce platform featuring real-time currency and IP-based tracking.",
    purpose: "To offer a seamless, Amazon-like shopping experience with localized content and international payment support.",
    techStack: ["Next.js", "TypeScript", "Redux", "Stripe", "Next-Intl", "TanStack Query", "Axios", "Shadcn UI"],
    howItWasBuilt: "Translated complex designer mockups into functional code and integrated a robust backend API solo.",
    role: "Frontend Developer (Clover Tech Nepal)"
  },
  {
    id: "lingo-native",
    title: "Lingo - Native Learning",
    category: "Education / Clone",
    rotation: 3,
    thumbnail: { type: 'video', url: '/projects/lingo/lingo.mp4' },
    githubUrl: "https://github.com/kesanglama7/lingo-native-language-learning-app-duolingo-clone-",
    description: "A Duolingo-inspired platform focused on preserving native Nepalese languages like Tamang and Sherpa.",
    purpose: "To digitize and gamify the learning process for local languages using modern AI and ranking algorithms.",
    techStack: ["Next.js", "Drizzle ORM", "Clerk", "Zustand", "ElevenLabs AI", "Stripe", "TypeScript"],
    howItWasBuilt: "Built as a solo project featuring a subscription model and AI-powered voice models for accurate pronunciation.",
    role: "Solo Developer"
  },
  {
    id: "hyolmo-helping-hands",
    title: "Hyolmo Helping Hands",
    category: "Non-Profit",
    rotation: 4,
    thumbnail: { type: 'none' },
    githubUrl: "https://github.com/kesanglama7/hyolmohelpinghands",
    description: "A clean, static professional website for a community-based non-profit organization.",
    purpose: "To provide the Hyolmo community with a digital presence to showcase their initiatives.",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Shadcn UI"],
    howItWasBuilt: "Focused on high-performance static rendering and smooth UI interactions using Framer Motion.",
    role: "Freelance Frontend Developer"
  },
  {
    id: "clover-tech-nepal",
    title: "Clover Tech Nepal",
    category: "Web Profile",
    rotation: -3,
    thumbnail: { type: 'video', url: '/projects/clovertech/clover.mp4' },
    liveUrl: "https://clover-tech-nepal.vercel.app/",
    githubUrl: "https://github.com/kesanglama7/clover-tech-nepal",
    description: "The official agency portfolio for Clover Tech Nepal, highlighting global tech solutions.",
    purpose: "To showcase company expertise through high-end animations and modern web aesthetics.",
    techStack: ["Next.js", "GSAP", "Framer Motion", "React Lenis", "TypeScript", "Tailwind CSS"],
    howItWasBuilt: "Currently in development with a focus on 'glassmorphism' and advanced scroll-based animations.",
    role: "Frontend Developer & Lead"
  },
  {
    id: "secure-voting-system",
    title: "Secure Voting System",
    category: "Cybersecurity",
    rotation: 2,
    thumbnail: { type: 'none' },
    githubUrl: "https://github.com/kesanglama7/online-voting-system",
    description: "A secure digital voting platform utilizing complex encryption and hashing to prevent manipulation.",
    purpose: "To ensure fair elections through cryptographic integrity and multi-role access control (RBAC).",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Resend", "React Email", "TypeScript"],
    howItWasBuilt: "Implemented custom hashing algorithms to ensure that no vote can be duplicated or altered after submission.",
    role: "Fullstack Developer"
  },
  {
    id: "subha-dental",
    title: "Subha Dental",
    category: "Healthcare",
    rotation: 1,
    thumbnail: { type: 'image', url: '/projects/dental/dental.png' },
    description: "An advanced appointment booking and clinic management system for dental practices.",
    purpose: "To streamline patient-doctor interactions and digitalize clinical record-keeping.",
    techStack: ["Next.js", "TanStack Query", "Axios", "Framer Motion", "Shadcn UI", "TypeScript"],
    howItWasBuilt: "Developed as a multi-role portal (Superadmin, Doctor, Patient) with real-time scheduling.",
    role: "Frontend Developer (Clover Tech Nepal)"
  },
  {
    id: "dc-diamond",
    title: "DC Diamond",
    category: "E-commerce",
    rotation: -4,
    thumbnail: { type: 'image', url: '/projects/dcdiamond/dc.png' },
    liveUrl: "https://dcdiamond.com.np/diamond",
    description: "A luxury jewelry storefront featuring high-end artisan craftsmanship details.",
    purpose: "To provide a premium shopping experience for material-specific jewelry and material choices.",
    techStack: ["React (Vite)", "Zustand", "ConnectIPS Integration", "Axios", "React Hook Form"],
    howItWasBuilt: "Focused on integrating local payment gateways (ConnectIPS) and building a responsive cart system.",
    role: "Junior Frontend Developer (Trainee Period)"
  }
];