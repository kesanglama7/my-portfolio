// export type Project = {
//   id: number;
//   title: string;
//   tagline?: string;     
//   meta?: string;        
//   image: string;

//   github?: string;       
//   live?: string;         
// };

// export const projects: Project[] = [
//   {
//     id: 1,
//     title: "TALK&BREW",
//     tagline: "Helping people to manage their stress at work",
//     meta: "Alpha Telefonica, Royal College of Art | Service Design",
//     image: "/projects/employee-management.png",
//     github: "https://github.com/yourname/project",
//     live: "https://your-live-site.com",
//   },
//     {
//     id: 2,
//     title: "DC Diamond",
//     tagline: "Helping customers find the perfect diamond online",
//     meta: "Jewellery Shop, DC Diamond | Dev Corner",
//     image: "/projects/dev-corner.png",
//     github: "https://github.com/yourname/project",
//     live: "https://dcdiamond.com.np",
//   },
//   {
//     id: 3,
//     title: "Duolingo Clone",
//     tagline: "A language learning platform inspired by Duolingo",
//     meta: "Educational Platform | Frontend Development",
//     image: "/projects/duolingo-cloned.png",
//     github: "https://github.com/yourname/project",
//     live: "https://dcdiamond.com.np",
//   },
// ];


// export type MenuItem = {
//   label: string;
//   href: string;
//   homeId?: string; 
// };

// export const menuItems: MenuItem[] = [
//   { label: "Work", href: "/", homeId: "work" },
//   { label: "About", href: "/about" },
//   { label: "Contact", href: "/contact" },
// ];







// lib/data.ts
export type Project = {
  id: number;
  slug: string;

  title: string;
  shortDescription: string; 
  meta?: string;
  image: string;

  // detail page fields
  overview?: string;
  role?: string;
  stack?: string[];
  gallery?: string[];

  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "talk-and-brew",
    title: "TALK&BREW",
    shortDescription: "Helping people manage stress at work",
    meta: "Alpha Telefonica, Royal College of Art | Service Design",
    image: "/projects/employee-management.png",
    overview:
      "A service design concept focused on workplace stress support through guided conversations and rituals.",
    role: "Service Design, UX, Prototype",
    stack: ["Figma", "Research", "Workshops"],
    gallery: ["/projects/employee-management.png"],
    github: "https://github.com/yourname/project",
    live: "https://your-live-site.com",
  },
  {
    id: 2,
    slug: "dc-diamond",
    title: "DC Diamond",
    shortDescription: "Helping customers find the perfect diamond online",
    meta: "Jewellery Shop, DC Diamond | Dev Corner",
    image: "/projects/dev-corner.png",
    overview:
      "E-commerce experience for browsing diamonds with clear product storytelling and trust signals.",
    role: "Frontend, UI, Integration",
    stack: ["Next.js", "Tailwind", "Shadcn UI"],
    gallery: ["/projects/dev-corner.png"],
    github: "https://github.com/yourname/project",
    live: "https://dcdiamond.com.np",
  },
  {
    id: 3,
    slug: "duolingo-clone",
    title: "Duolingo Clone",
    shortDescription: "A language learning platform inspired by Duolingo",
    meta: "Educational Platform | Frontend Development",
    image: "/projects/duolingo-cloned.png",
    overview:
      "Clone project to practice gamified learning UI and interactive lesson flows.",
    role: "Frontend",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    gallery: ["/projects/duolingo-cloned.png"],
    github: "https://github.com/yourname/project",
    live: "https://your-live-site.com",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const menuItems = [
  { label: "Work", href: "/", homeId: "work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
