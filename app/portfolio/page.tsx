"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "@/components/common/project-card";
import { PROJECTS } from "@/lib/static_data/project-data";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const section = sectionRef.current;
      const track = horizontalRef.current;
      const trigger = triggerRef.current;

      if (!section || !track || !trigger) return;

      const getMaxX = () => {
        const gap = 96; // approximate gap space
        const extraOffset = window.innerWidth * 0.12;
        const maxScroll = track.scrollWidth - window.innerWidth + extraOffset + gap;
        return -Math.max(maxScroll, 0);
      };

      const tween = gsap.to(track, {
        x: getMaxX,
        ease: "none",
        scrollTrigger: {
          trigger,
          start: "top top+=88", // leaves room for header
          end: () => `+=${Math.max(track.scrollWidth - window.innerWidth, 1200)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--color-paper)] overflow-hidden pt-24 lg:pt-28"
    >
      {/* Mobile / Tablet Layout */}
      <div className="block lg:hidden px-4 sm:px-6">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <h2 className="font-heading text-[22vw] whitespace-nowrap leading-none select-none">
              DRAFTS • DRAFTS • DRAFTS
            </h2>
          </div>

          <div className="relative py-10">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-4xl sm:text-6xl leading-none"
            >
              PROJECT <br />
              <span className="text-[var(--color-marker)] underline-wavy">
                ARCHIVE
              </span>
            </motion.h1>

            <p className="font-body text-base sm:text-lg opacity-50 mt-4 max-w-sm italic">
              &#34;A collection of digital tools, clones, and corporate trauma.&#34;
            </p>
          </div>

          <div className="relative flex flex-col gap-8 pb-10">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} mobile />
            ))}
          </div>

          <div className="pb-12 flex justify-center">
            <div className="w-full max-w-[280px] min-h-[180px] border-4 border-dashed border-[var(--color-muted)] flex items-center justify-center p-6 text-center rotate-2 transition-transform">
              <p className="font-heading text-xl text-[var(--color-pencil)] leading-snug">
                More cooking in the <br />
                <span className="text-[var(--color-marker)] underline-wavy">
                  lab...
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Scroll */}
      <div ref={triggerRef} className="hidden lg:block">
        <div
          ref={horizontalRef}
          className="relative flex h-[calc(100vh-88px)] min-h-[680px] w-max items-center pl-[8vw] pr-[10vw]"
        >
          <div className="absolute inset-0 flex items-center justify-start pointer-events-none opacity-[0.03]">
            <h2 className="font-heading text-[20vw] whitespace-nowrap leading-none select-none">
              DRAFTS • DRAFTS • DRAFTS • DRAFTS
            </h2>
          </div>

          <div className="relative z-10 flex-shrink-0 w-[52vw] max-w-[700px] mr-[8vw]">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-7xl xl:text-[10rem] leading-none"
            >
              PROJECT <br />
              <span className="text-[var(--color-marker)] underline-wavy">
                ARCHIVE
              </span>
            </motion.h1>

            <p className="font-body text-lg xl:text-xl opacity-40 mt-6 max-w-sm italic">
              &#34;A collection of digital tools, clones, and corporate trauma.&#34;
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-[6vw]">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="relative z-10 flex-shrink-0 w-[36vw] min-w-[360px] flex items-center justify-center ml-[6vw]">
            <div className="w-64 h-64 border-4 border-dashed border-[var(--color-muted)] flex items-center justify-center p-8 text-center rotate-6 wobbly hover:rotate-0 transition-transform">
              <p className="font-heading text-2xl text-[var(--color-pencil)]">
                More cooking in the <br />
                <span className="text-[var(--color-marker)] underline-wavy">
                  lab...
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function ProjectCard({
//   project,
//   index,
//   mobile = false,
// }: {
//   project: {
//     title: string;
//     category: string;
//     rotation: number;
//   };
//   index: number;
//   mobile?: boolean;
// }) {
//   const github = "";
//   const live = "";

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 28, scale: 0.96 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{ duration: 0.45, delay: index * 0.08 }}
//       className={cn(
//         "relative bg-white border-[3px] border-[var(--color-pencil)]",
//         "shadow-hard hover:shadow-hard-lg transition-all group flex flex-col",
//         mobile
//           ? "w-full min-h-[360px] p-5 sm:p-6"
//           : "w-[300px] xl:w-[420px] aspect-[4/5] p-6 xl:p-10 flex-shrink-0"
//       )}
//       style={{
//         rotate: mobile ? "0deg" : `${project.rotation}deg`,
//       }}
//     >
//       <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-8 sm:h-10 bg-[var(--color-muted)]/30 backdrop-blur-sm -rotate-1 group-hover:bg-[var(--color-postit)] transition-colors" />

//       <div className="flex justify-between items-start mb-6">
//         <Folder className="text-[var(--color-marker)]" size={mobile ? 26 : 32} />
//         <div className="flex gap-4">
//           {github && (
//             <FaGithub
//               size={20}
//               className="hover:text-[var(--color-marker)] cursor-pointer"
//             />
//           )}
//           {live && (
//             <ExternalLink
//               size={20}
//               className="hover:text-[var(--color-marker)] cursor-pointer"
//             />
//           )}
//         </div>
//       </div>

//       <div className="mt-auto">
//         <span className="font-body text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--color-ink)] opacity-40">
//           {project.category}
//         </span>

//         <h3 className="font-heading text-3xl sm:text-4xl xl:text-5xl leading-tight mt-2 group-hover:text-[var(--color-marker)] transition-colors break-words">
//           {project.title}
//         </h3>
//       </div>

//       <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-20 h-20 sm:w-28 sm:h-28 opacity-[0.05] pointer-events-none group-hover:opacity-20 transition-opacity">
//         <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
//           <circle
//             cx="50"
//             cy="50"
//             r="40"
//             stroke="black"
//             strokeWidth="2"
//             fill="none"
//             strokeDasharray="5,5"
//           />
//           <path d="M10,50 L90,50 M50,10 L50,90" stroke="black" strokeWidth="1" />
//         </svg>
//       </div>

//       <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-[var(--color-pencil)] rounded-full flex items-center justify-center font-heading text-lg sm:text-xl shadow-hard-sm">
//         {index + 1}
//       </div>
//     </motion.div>
//   );
// }