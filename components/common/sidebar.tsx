// "use client";

// import { motion } from "framer-motion";
// import Magnetic from "./magnetic";

// export default function Sidebar({ setIsActive }: { setIsActive: (val: boolean) => void }) {
//   const menuItems = ["Home", "Skills", "Work", "About", "Contact"];

//   // Framer motion variants for the sliding menu
//   const menuSlide = {
//     initial: { x: "calc(100% + 100px)" },
//     enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
//     exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
//   } as any;

//   const slide = {
//     initial: { x: 80 },
//     enter: (i: number) => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
//     exit: (i: number) => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })
//   } as any;

//   return (
//     <motion.div
//       variants={menuSlide}
//       initial="initial"
//       animate="enter"
//       exit="exit"
//       className="fixed right-0 top-0 h-screen w-full md:w-[400px] bg-neutral-900 text-white z-30 shadow-2xl"
//     >
//       <div className="box-border h-full p-24 flex flex-col justify-center">
//         <div className="flex flex-col gap-3 text-5xl font-manrope font-light">
//           <div className="text-neutral-500 text-sm uppercase tracking-widest border-b border-neutral-700 pb-4 mb-8">
//             Navigation
//           </div>
          
//           {menuItems.map((item, index) => (
//             <motion.div 
//               key={item} 
//               custom={index} 
//               variants={slide} 
//               initial="initial" 
//               animate="enter" 
//               exit="exit"
//             >
//               <Magnetic>
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => setIsActive(false)}
//                   className="inline-block py-2 hover:text-neutral-400 transition-colors"
//                 >
//                   {item}
//                 </a>
//               </Magnetic>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }





"use client";

import type { MouseEvent } from "react";
import { motion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./magnetic";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type SidebarProps = {
  setIsActive: (value: boolean) => void;
};

type MenuItem = {
  label: string;
  target: string;
};

const menuItems: MenuItem[] = [
  {
    label: "Home",
    target: "home",
  },
  {
    label: "Skills",
    target: "skills",
  },
  {
    label: "Work",
    target: "work",
  },
  {
    label: "Journey",
    target: "journey",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

const menuSlide: Variants = {
  initial: {
    x: "calc(100% + 100px)",
  },
  enter: {
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const slide: Variants = {
  initial: {
    x: 80,
    opacity: 0,
  },
  enter: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.05 * index,
    },
  }),
  exit: (index: number) => ({
    x: 80,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.03 * index,
    },
  }),
};

export default function Sidebar({
  setIsActive,
}: SidebarProps) {
  const scrollToSection = (target: string): void => {
    const section = document.getElementById(target);

    if (!section) {
      console.warn(`Section with id "${target}" was not found.`);
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${target}`);
  };

  const scrollToTimelineLabel = ({
    triggerId,
    label,
    fallbackSection,
  }: {
    triggerId: string;
    label: string;
    fallbackSection: string;
  }): void => {
    const trigger = ScrollTrigger.getById(triggerId);

    if (!trigger) {
      scrollToSection(fallbackSection);
      return;
    }

    trigger.refresh();

    const timeline = trigger.animation as
      | gsap.core.Timeline
      | undefined;

    const labelTime = timeline?.labels[label];
    const timelineDuration = timeline?.duration();

    if (
      labelTime === undefined ||
      !timelineDuration ||
      timelineDuration <= 0
    ) {
      scrollToSection(fallbackSection);
      return;
    }

    const progress = labelTime / timelineDuration;

    const targetScroll =
      trigger.start +
      (trigger.end - trigger.start) * progress;

    const maximumScroll =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const safeTarget = Math.min(
      Math.max(targetScroll, 0),
      maximumScroll,
    );

    window.scrollTo({
      top: safeTarget,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `#${fallbackSection}`,
    );
  };

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    item: MenuItem,
  ): void => {
    event.preventDefault();

    setIsActive(false);

    window.setTimeout(() => {
      if (item.target === "home") {
        scrollToTimelineLabel({
          triggerId: "hero-scroll-trigger",
          label: "homeShowcase",
          fallbackSection: "home",
        });

        return;
      }

      if (item.target === "skills") {
        scrollToTimelineLabel({
          triggerId: "skills-scroll-trigger",
          label: "skillsShowcase",
          fallbackSection: "skills",
        });

        return;
      }

      if (item.target === "journey") {
        scrollToTimelineLabel({
          triggerId: "journey-scroll-trigger",
          label: "journeyShowcase",
          fallbackSection: "journey",
        });

        return;
      }

      scrollToSection(item.target);
    }, 150);
  };

  return (
    <motion.aside
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 z-30 h-screen w-full bg-neutral-900 text-white shadow-2xl md:w-[400px]"
    >
      <div className="box-border flex h-full flex-col justify-center p-12 sm:p-16 md:p-20 lg:p-24">
        <nav
          aria-label="Main navigation"
          className="flex flex-col gap-3 font-manrope text-5xl font-light"
        >
          <div className="mb-8 border-b border-neutral-700 pb-4 text-sm uppercase tracking-widest text-neutral-500">
            Navigation
          </div>

          {menuItems.map((item, index) => (
            <motion.div
              key={item.target}
              custom={index}
              variants={slide}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Magnetic>
                <a
                  href={`#${item.target}`}
                  onClick={(event) =>
                    handleNavigation(event, item)
                  }
                  className="inline-block py-2 transition-colors hover:text-neutral-400"
                >
                  {item.label}
                </a>
              </Magnetic>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
}