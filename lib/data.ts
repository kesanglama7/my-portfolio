export type Project = {
  id: number;
  title: string;
  tagline?: string;     
  meta?: string;        
  image: string;

  github?: string;       
  live?: string;         
};

export const projects: Project[] = [
  {
    id: 1,
    title: "TALK&BREW",
    tagline: "Helping people to manage their stress at work",
    meta: "Alpha Telefonica, Royal College of Art | Service Design",
    image: "/projects/employee-management.png",
    github: "https://github.com/yourname/project",
    live: "https://your-live-site.com",
  },
    {
    id: 2,
    title: "DC Diamond",
    tagline: "Helping customers find the perfect diamond online",
    meta: "Jewellery Shop, DC Diamond | Dev Corner",
    image: "/projects/dev-corner.png",
    github: "https://github.com/yourname/project",
    live: "https://dcdiamond.com.np",
  },
  {
    id: 3,
    title: "Duolingo Clone",
    tagline: "A language learning platform inspired by Duolingo",
    meta: "Educational Platform | Frontend Development",
    image: "/projects/duolingo-cloned.png",
    github: "https://github.com/yourname/project",
    live: "https://dcdiamond.com.np",
  },
];


export type MenuItem = {
  label: string;
  href: string;
  homeId?: string; 
};

export const menuItems: MenuItem[] = [
  { label: "Work", href: "/", homeId: "work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];


