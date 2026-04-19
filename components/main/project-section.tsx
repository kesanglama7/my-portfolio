// "use client";
// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ProjectCard from "../common/project-card";
// import { PROJECTS } from "@/lib/static_data/project-data";

// gsap.registerPlugin(ScrollTrigger);


// export default function ProjectSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const triggerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const pin = gsap.fromTo(
//       sectionRef.current,
//       { translateX: 0 },
//       {
//         translateX: "-150vw",
//         ease: "none",
//         duration: 1,
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "2000 top",
//           scrub: 0.6,
//           pin: true,
//         },
//       }
//     );
//     return () => {
//       pin.kill();
//     };
//   }, []);

//   return (
//     <div className="overflow-hidden bg-[var(--color-paper)]">
//       <div ref={triggerRef}>
//         <div 
//           ref={sectionRef} 
//           className="h-screen w-[300vw] flex items-center relative pl-[10vw] gap-[5vw]"
//         >
//           {/* Section Heading "Floats" in the background */}
//           <div className="absolute left-[5vw] top-[15%] pointer-events-none">
//             <h2 className="font-heading text-[10rem] md:text-[15rem] text-[var(--color-muted)] leading-none select-none">
//               SELECTED<br />WORKS
//             </h2>
//           </div>

//           {PROJECTS.map((project, index) => (
//             <div key={index} className="flex-shrink-0 z-10">
//               <ProjectCard 
//                 title={project.title} 
//                 category={project.category} 
//                 rotation={project.rotation}
//                 index={index}
//                 image=""
//               />
//             </div>
//           ))}

//           {/* End of Section Decorative Note */}
//           <div className="flex-shrink-0 pr-[20vw]">
//             <div className="w-64 h-64 border-4 border-dashed border-[var(--color-muted)] wobbly flex items-center justify-center p-8 text-center rotate-6">
//               <p className="font-heading text-2xl text-[var(--color-pencil)]/40">
//                 Want to see more?<br />
//                 <span className="text-[var(--color-marker)] underline-wavy">Click here</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }














"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../common/project-card";
import { PROJECTS } from "@/lib/static_data/project-data";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run horizontal scroll pin on screens ≥ 768px
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: "-150vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
      return () => pin.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="bg-[var(--color-paper)]">
      {/* ── Desktop: pinned horizontal scroll ── */}
      <div className="hidden md:block overflow-hidden">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-screen w-[300vw] flex items-center relative pl-[10vw] gap-[5vw]"
          >
            <div className="absolute left-[5vw] top-[15%] pointer-events-none">
              <h2 className="font-heading text-[15rem] text-[var(--color-muted)] leading-none select-none">
                SELECTED<br />WORKS
              </h2>
            </div>

            {PROJECTS.slice(0, 4).map((project, index) => (
              <div key={index} className="flex-shrink-0 z-10">
                <ProjectCard
                  index={index}
                  project={project}
                />
              </div>
            ))}

            <div className="flex-shrink-0 pr-[20vw]">
              <div className="w-64 h-64 border-4 border-dashed border-[var(--color-muted)] wobbly flex items-center justify-center p-8 text-center rotate-6">
                <p className="font-heading text-2xl text-[var(--color-pencil)]/40">
                  Want to see more?<br />
                  <Link href="/portfolio" className="text-[var(--color-marker)] underline-wavy">Click here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: vertical stack ── */}
      <div className="flex flex-col items-center justify-center md:hidden px-5 py-16">
        <h2 className="font-heading text-[4rem] text-[var(--color-muted)] leading-none select-none mb-10">
          SELECTED<br />WORKS
        </h2>

        <div className="flex flex-col gap-8">
          {PROJECTS.slice(0, 4).map((project, index) => (
            <div key={index}>
              <ProjectCard
                index={index}
                project={project}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto w-56 h-56 border-4 border-dashed border-[var(--color-muted)] flex items-center justify-center p-6 text-center rotate-3">
          <p className="font-heading text-xl text-[var(--color-pencil)]/40">
            Want to see more?<br />
            <Link href="/portfolio" className="text-[var(--color-marker)] underline-wavy">Click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}