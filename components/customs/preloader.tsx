// "use client";

// import React, { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

// interface PreloaderProps {
//   onComplete: () => void;
// }

// const SHUTTER_WORDS = [
//     "Hello",
//     "Bonjour",
//     "Olà",
//     "やあ",
//     "Halo",
//     "Salam",
//     "नमस्ते",
// ];

// export default function Preloader({ onComplete }: PreloaderProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const morphingBlockRef = useRef<HTMLDivElement>(null);
//   const shutterContainerRef = useRef<HTMLDivElement>(null);
//   const finalTextRef = useRef<HTMLHeadingElement>(null);

//   useGSAP(() => {
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (prefersReducedMotion) {
//       onComplete();
//       return;
//     }

//     const tl = gsap.timeline({
//       onComplete: () => {
//         onComplete();
//       },
//     });

//     // --- STAGE 0: Redundant but safe initialization ---
//     // This synchronizes GSAP's internal style tracker with our inline Tailwind classes
//     gsap.set(morphingBlockRef.current, { 
//       scaleX: 0, 
//       height: "2px",
//       opacity: 1 // Instantly reveal the line now that it is safely scaled to 0
//     });
//     gsap.set(finalTextRef.current, { 
//       opacity: 0, 
//       y: 40 
//     });

//     // --- STAGE 1: Horizontal Hairline Expansion ---
//     tl.to(morphingBlockRef.current, {
//       scaleX: 1,
//       duration: 0.7,
//       ease: "power3.inOut",
//     });

//     // --- STAGE 2: Vertical Thickness Banner ---
//     tl.to(morphingBlockRef.current, {
//       height: "140px",
//       duration: 0.4,
//       ease: "power2.out",
//     });

//     // --- FAST SHUTTER TEXT EFFECTS ---
//     const words = shutterContainerRef.current?.children;
//     if (words) {
//       Array.from(words).forEach((word, index) => {
//         tl.to(word, {
//           opacity: 1,
//           display: "block",
//           duration: 0.10,
//           ease: "none",
//         })
//         .to(word, {
//           opacity: 0,
//           display: "none",
//           duration: 0.10,
//           ease: "none",
//         }, index < words.length - 1 ? "+=0.01" : undefined);
//       });
//     }

//     // --- STAGE 3: Full Viewport Takeover ---
//     tl.to(morphingBlockRef.current, {
//       height: "100vh",
//       duration: 0.6,
//       ease: "power4.inOut",
//     }, "-=0.05");

//     // --- STAGE 4: "Myself" Typography Reveal ---
//     tl.to(finalTextRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.6,
//       ease: "power3.out",
//     }, "+=0.1");

//     // --- EXIT SEQUENCE ---
//     tl.to(containerRef.current, {
//       yPercent: -100,
//       duration: 0.8,
//       ease: "power4.inOut",
//     }, "+=1.5");

//   }, { scope: containerRef });

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden select-none touch-none"
//     >
//       {/* CRITICAL FIX: 
//         We added `scale-x-0 h-[2px] opacity-0` directly into the Tailwind classes.
//         This forces Next.js SSR to render this element as a completely invisible, 
//         horizontally flattened line before GSAP even evaluates.
//       */}
//       <div
//         ref={morphingBlockRef}
//         className="relative w-full bg-white flex items-center justify-center origin-center overflow-hidden scale-x-0 h-[2px] opacity-0"
//       >
//         {/* Rapid Fire Shutter Text Layer */}
//         <div
//           ref={shutterContainerRef}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           {SHUTTER_WORDS.map((word, idx) => (
//             <span
//               key={idx}
//               className="hidden opacity-0 text-black text-4xl md:text-6xl font-medium tracking-tight"
//             >
//                 <span className="rounded-full h-4 w-4 bg-black inline-block mr-3 mb-2" />
//                 {word}
//             </span>
//           ))}
//         </div>

//         {/* Final Targeted Typography Layer (Starts hidden and shifted down via CSS) */}
//         <h1
//           ref={finalTextRef}
//           className="opacity-0 translate-y-10 text-black text-6xl md:text-9xl font-bold tracking-tighter font-sans"
//         >
//           Myself
//         </h1>
//       </div>
//     </div>
//   );
// }














// "use client";

// import React, { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

// interface PreloaderProps {
//   onComplete: () => void;
// }

// const SHUTTER_WORDS = [
//   "Hi...",
//   "Hola...",
//   "Bonjour...",
//   "Ciao...",
//   "Namaste...",
//   "Konnichiwa...",
//   "Hallo..."
// ];

// export default function Preloader({ onComplete }: PreloaderProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const morphingBlockRef = useRef<HTMLDivElement>(null);
//   const shutterContainerRef = useRef<HTMLDivElement>(null);
//   const finalTextRef = useRef<HTMLHeadingElement>(null);

//   useGSAP(() => {
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (prefersReducedMotion) {
//       onComplete();
//       return;
//     }

//     const tl = gsap.timeline({
//       onComplete: () => {
//         onComplete();
//       },
//     });

//     // --- STAGE 0: Initial Hidden State ---
//     gsap.set(morphingBlockRef.current, { 
//       scaleX: 0, 
//       height: "2px",
//       opacity: 1 
//     });
//     gsap.set(finalTextRef.current, { 
//       opacity: 0, 
//       y: 40 
//     });

//     // --- STAGE 1: Horizontal Hairline Expansion ---
//     tl.to(morphingBlockRef.current, {
//       scaleX: 1,
//       duration: 0.7,
//       ease: "power3.inOut",
//     });

//     // --- STAGE 2: Vertical Thickness Banner ---
//     tl.to(morphingBlockRef.current, {
//       height: "140px",
//       duration: 0.4,
//       ease: "power2.out",
//     });

//     // --- FAST SHUTTER TEXT EFFECTS ---
//     const words = shutterContainerRef.current?.children;
//     if (words) {
//       Array.from(words).forEach((word, index) => {
//         tl.to(word, {
//           opacity: 1,
//           display: "block",
//           duration: 0.10,
//           ease: "none",
//         })
//         .to(word, {
//           opacity: 0,
//           display: "none",
//           duration: 0.10,
//           ease: "none",
//         }, index < words.length - 1 ? "+=0.01" : undefined);
//       });
//     }

//     // --- STAGE 3: Full Viewport Takeover ---
//     tl.to(morphingBlockRef.current, {
//       height: "100vh",
//       duration: 0.6,
//       ease: "power4.inOut",
//     }, "-=0.05");

//     // --- STAGE 4: "Myself" Typography Reveal ---
//     tl.to(finalTextRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.6,
//       ease: "power3.out",
//     }, "+=0.1");

//     // --- NEW REFINED EXIT SEQUENCE ---
//     // Instead of sliding the layout away, we drop the opacity of the entire fixed wrapper.
//     // This reveals the Hero component mounted directly behind it.
//     tl.to(containerRef.current, {
//       opacity: 0,
//       duration: 0.6,
//       ease: "power2.inOut",
//     }, "+=0.8"); // Brief hold window so the visual nodes lock together cleanly

//   }, { scope: containerRef });

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden select-none touch-none"
//     >
//       <div
//         ref={morphingBlockRef}
//         className="relative w-full bg-white flex items-center justify-center origin-center overflow-hidden scale-x-0 h-[2px] opacity-0"
//       >
//         {/* Rapid Fire Shutter Text Layer */}
//         <div
//           ref={shutterContainerRef}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           {SHUTTER_WORDS.map((word, idx) => (
//             <span
//               key={idx}
//               className="hidden opacity-0 text-black text-4xl md:text-6xl font-medium tracking-tight font-sans"
//             >
//               {word}
//             </span>
//           ))}
//         </div>

//         {/* Final Targeted Typography Layer */}
//         <h1
//           ref={finalTextRef}
//           className="text-black text-6xl md:text-9xl font-bold tracking-tighter font-sans"
//         >
//           Myself
//         </h1>
//       </div>
//     </div>
//   );
// }








"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface PreloaderProps {
  onComplete: () => void;
}

const SHUTTER_WORDS = [
    "Hello",
    "Bonjour",
    "Olà",
    "やあ",
    "Halo",
    "Salam",
    "नमस्ते",
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const morphingBlockRef = useRef<HTMLDivElement>(null);
  const shutterContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const morphingBlock = morphingBlockRef.current;
      const shutterContainer = shutterContainerRef.current;

      if (!container || !morphingBlock || !shutterContainer) {
        onComplete();
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(container, { display: "none" });
        onComplete();
        return;
      }

      const words = Array.from(shutterContainer.children);

      // Initial states
      gsap.set(morphingBlock, {
        scaleX: 0,
        height: 2,
        opacity: 1,
      });

      gsap.set(words, {
        autoAlpha: 0,
        display: "none",
      });

      const timeline = gsap.timeline({
        onComplete,
      });

      timeline
        // Expand the horizontal line
        .to(morphingBlock, {
          scaleX: 1,
          duration: 0.7,
          ease: "power3.inOut",
        })

        // Turn the line into a banner
        .to(morphingBlock, {
          height: 140,
          duration: 0.4,
          ease: "power2.out",
        });

      // Rapid greeting animation
      words.forEach((word) => {
        timeline
          .set(word, {
            display: "block",
          })
          .to(word, {
            autoAlpha: 1,
            duration: 0.08,
            ease: "none",
          })
          .to(word, {
            autoAlpha: 0,
            duration: 0.08,
            ease: "none",
          })
          .set(word, {
            display: "none",
          });
      });

      timeline
        // Expand the white banner to cover the viewport
        .to(
          morphingBlock,
          {
            height: "100vh",
            duration: 0.65,
            ease: "power4.inOut",
          },
          "-=0.03",
        )

        // Brief clean white-screen pause
        .to({}, { duration: 0.15 })

        // Reveal the Hero section underneath
        .to(container, {
          autoAlpha: 0,
          duration: 0.55,
          ease: "power2.inOut",
        })

        // Remove the preloader from interaction/layout
        .set(container, {
          display: "none",
          pointerEvents: "none",
        });

      return () => {
        timeline.kill();
      };
    },
    {
      scope: containerRef,
      dependencies: [onComplete],
      revertOnUpdate: true,
    },
  );

  return (
    <div
      ref={containerRef}
      role="status"
      aria-label="Loading website"
      className="fixed inset-0 z-[9999] flex touch-none select-none items-center justify-center overflow-hidden bg-black"
    >
      <div
        ref={morphingBlockRef}
        className="relative flex h-[2px] w-full origin-center scale-x-0 items-center justify-center overflow-hidden bg-white opacity-0"
      >
        <div
          ref={shutterContainerRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          {SHUTTER_WORDS.map((word) => (
            <span
              key={word}
              className="hidden text-4xl font-manrope font-medium tracking-tight text-black opacity-0 md:text-6xl"
            >  
                <span className="rounded-full h-4 w-4 bg-black inline-block mr-3 mb-2" />
                {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}