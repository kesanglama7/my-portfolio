
"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  type Variants,
} from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  category: string;
  tags: string[];
  src: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Kanto Best Price",
    category: "E-Commerce Platform",
    tags: ["Next.js", "TypeScript", "Tailwind", "Redux", "I18n", "Stripe API"],
    src: "/projects/kanto.png",
    link: "https://kantobestprice.com/",
  },
  {
    title: "DC Diamond",
    category: "Jewelry Store",
    tags: ["React", "Vite", "TypeScript", "Tailwind", "Zustand"],
    src: "/projects/dcdiamond.png",
    link: "https://dcdiamond.com.np/diamond",
  },
  {
    title: "Clover Tech Nepal",
    category: "Corporate Website",
    tags: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
    src: "/projects/clovertech.png",
    link: "https://clovertechnepal.com.np/",
  },
  {
    title: "Lingo App",
    category: "Native Language Learning App",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "Regional Languages",
      "Bun",
      "Stripe API",
      "Clerk Auth",
      "Prisma",
    ],
    src: "/projects/lingo.png",
    link: "#",
  },
  {
    title: "Employee Sync",
    category: "HR Management System",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Fingerprint.js",
      "Postgres",
      "RBAC",
    ],
    src: "/projects/employeesync.png",
    link: "#",
  },
  {
    title: "Secure Voting",
    category: "Online Voting System",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "Prisma",
      "Encryption Algorithm",
    ],
    src: "/projects/voting.png",
    link: "#",
  },
];

const scaleVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

export default function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const previewWidth = 350;
    const previewHeight = 250;

    mouseX.set(event.clientX - rect.left - previewWidth / 2);
    mouseY.set(event.clientY - rect.top - previewHeight / 2);
  };

  return (
    <section
      id="work"
      className="relative z-20 min-h-screen w-full overflow-hidden bg-white px-6 py-32 select-none text-neutral-950 md:px-16 lg:px-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <div className="mb-20">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Selected Works
          </p>

          <h2 className="text-4xl font-light tracking-tight md:text-6xl">
            Projects &{" "}
            <span className="text-zinc-500">Deployments</span>
          </h2>
        </div>

        {/* Projects list */}
        <div
          className="relative cursor-none border-t border-zinc-300"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {projects.map((project, index) => {
            const hasValidLink = project.link && project.link !== "#";
            
            // Render an <a> tag if the link is valid, otherwise a <div>
            const Wrapper = hasValidLink ? "a" : "div";

            return (
              <Wrapper
                key={project.title}
                {...(hasValidLink
                  ? {
                      href: project.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                onMouseEnter={() => setHoveredIndex(index)}
                className="group relative z-30 flex cursor-none flex-col justify-between border-b border-zinc-300 py-10 transition-all duration-300 hover:px-4 md:flex-row md:items-center md:py-14"
              >
                {/* Project title and category */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                  <h3 className="text-3xl font-light tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">
                    {project.title}
                  </h3>

                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                    {project.category}
                  </span>
                </div>

                {/* Technology tags */}
                <div className="mt-4 flex max-w-xl flex-wrap gap-2 opacity-60 transition-opacity duration-300 group-hover:opacity-100 md:mt-0 md:justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-light text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Wrapper>
            );
          })}

          {/* Floating project image preview */}
          {/* Note: This MUST keep pointer-events-none so clicks pass through to the <a> tag below it */}
          <motion.div
            variants={scaleVariants}
            initial="initial"
            animate={hoveredIndex !== null ? "enter" : "closed"}
            className="pointer-events-none absolute left-0 top-0 z-[400] hidden h-[250px] w-[350px] origin-center overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-2xl md:block"
            style={{
              x: mouseX,
              y: mouseY,
            }}
          >
            {/* Sliding image track */}
            <motion.div
              className="relative flex h-full w-full flex-col"
              animate={{
                y: `-${(hoveredIndex ?? 0) * 100}%`,
              }}
              transition={{
                duration: 0.45,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={`preview-${project.title}`}
                  className="relative flex h-full min-h-full w-full items-center justify-center overflow-hidden bg-white"
                >
                  <Image
                    src={project.src}
                    alt={`${project.title} project preview`}
                    fill
                    className="object-contain"
                    sizes="350px"
                    priority={index === 0}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}