// "use client";
// import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
// import Hero from "../hero-section";
// import ProjectsGrid from "../project-grid";

// export default function HomeParallax() {
//   // window scroll (pixels) => super reliable
//   const { scrollY } = useScroll();

//   // tune these ranges (px)
//   const START = 0;
//   const END = 450;

//   // HERO effects
//   const heroOpacity = useTransform(scrollY, [START, END], [1, 0.35]);
//   const heroScale = useTransform(scrollY, [START, END], [1, 0.96]);
//   const heroY = useTransform(scrollY, [START, END], [0, -60]);

//   // ✅ blur 0 -> 7px
//   const heroBlur = useTransform(scrollY, [START, END], [0, 7]);
//   const heroFilter = useMotionTemplate`blur(${heroBlur}px)`;

//   // PROJECT sheet slides up to cover
//   const sheetY = useTransform(scrollY, [START, END], [140, 0]);
//   const sheetRadius = useTransform(scrollY, [START, END], [28, 0]);

//   return (
//     <div className="relative min-h-[220vh] bg-white">
//       {/* Fixed HERO */}
//       <motion.div
//         style={{
//           opacity: heroOpacity,
//           scale: heroScale,
//           y: heroY,
//           filter: heroFilter, // ✅ blur works
//         }}
//         className="fixed inset-0 z-0 will-change-transform"
//       >
//         <Hero />
//       </motion.div>

//       {/* Content starts AFTER hero */}
//       <div className="relative z-10 pt-[100vh]">
//         <motion.section
//           style={{
//             y: sheetY,
//             borderTopLeftRadius: sheetRadius,
//             borderTopRightRadius: sheetRadius,
//           }}
//           className="bg-white overflow-hidden"
//         >
//           {/* top edge shadow (nice cover feel) */}
//           <div className="h-10 -mt-10 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

//           <ProjectsGrid />
//         </motion.section>
//       </div>
//     </div>
//   );
// }




// "use client";

// import {
//   motion,
//   useScroll,
//   useTransform,
//   useMotionTemplate,
// } from "framer-motion";
// import Hero from "../hero-section";
// import ProjectsGrid from "../project-grid";

// export default function HomeParallax() {
//   const { scrollY } = useScroll();

//   const START = 0;
//   const END = 300;

//   // HERO transforms
//   const heroScale = useTransform(scrollY, [START, END], [1, 0.95]);
//   const heroOpacity = useTransform(scrollY, [START, END], [1, 0]);
//   const heroY = useTransform(scrollY, [START, END], [0, -30]);
//   const heroBlur = useTransform(scrollY, [START, END], [0, 6]);
//   const heroFilter = useMotionTemplate`blur(${heroBlur}px)`;

//   // SHEET transforms
//   const sheetY = useTransform(scrollY, [START, END], [120, 0]);
//   const sheetRadius = useTransform(scrollY, [START, END], [32, 0]);

//   return (
//     <div id="parallax-root" className="relative min-h-screen bg-white">
//       {/* HERO (behind sheet, below header) */}
//       <motion.div
//         style={{
//           scale: heroScale,
//           opacity: heroOpacity,
//           y: heroY,
//           filter: heroFilter,
//         }}
//         className="fixed inset-0 z-0 "
//       >
//         <Hero />
//       </motion.div>
//       <div id="work-anchor" className="relative h-0" />

//       {/* PROJECTS SHEET */}
//       <div className="relative z-10 pt-[100vh]">
//         <motion.section
//           style={{
//             y: sheetY,
//             borderTopLeftRadius: sheetRadius,
//             borderTopRightRadius: sheetRadius,
//           }}
//           className="relative bg-white">
//           <ProjectsGrid />
//         </motion.section>
//       </div>
//     </div>
//   );
// }




"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Hero from "../hero-section";
import ProjectsGrid from "../project-grid";
import DownArrow from "../common/down-arrow";

export default function HomeParallax() {
  const { scrollY } = useScroll();

  const START = 0;
  const END = 300;

  // HERO transforms
  const heroScale = useTransform(scrollY, [START, END], [1, 0.95]);
  const heroOpacity = useTransform(scrollY, [START, END], [1, 0]);
  const heroY = useTransform(scrollY, [START, END], [0, -30]);
  const heroBlur = useTransform(scrollY, [START, END], [0, 6]);
  const heroFilter = useMotionTemplate`blur(${heroBlur}px)`;

  // SHEET transforms
  const sheetY = useTransform(scrollY, [START, END], [120, 0]);
  const sheetRadius = useTransform(scrollY, [START, END], [32, 0]);

  // ARROW visibility on scroll
  const arrowOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const arrowScale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const arrowY = useTransform(scrollY, [0, 400], [0, 50]);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    // Optional: add extra offset if needed
    // setTimeout(() => window.scrollBy({ top: -200 }), 600);
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Fixed Hero Background */}
      <motion.div
        style={{
          scale: heroScale,
          opacity: heroOpacity,
          y: heroY,
          filter: heroFilter,
        }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <Hero />
      </motion.div>

      {/* Clickable Down Arrow - fades out on scroll */}
      <motion.div
        style={{
          opacity: arrowOpacity,
          scale: arrowScale,
          y: arrowY,
        }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
      >
        <DownArrow onClick={scrollToWork} />
      </motion.div>

      {/* Projects Sheet */}
      <div className="relative z-10 pt-[100vh]">
        <motion.section
          style={{
            y: sheetY,
            borderTopLeftRadius: sheetRadius,
            borderTopRightRadius: sheetRadius,
          }}
          className="relative bg-white"
        >
          <ProjectsGrid />
        </motion.section>
      </div>
    </div>
  );
}