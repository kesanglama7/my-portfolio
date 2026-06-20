// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Magnetic from "./magnetic"; 
// import Sidebar from "./sidebar";   

// export default function Header({ PERSON_NAME }: { PERSON_NAME: string }) {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <>
//       {/* --- BRAND NAME (Fades in beautifully after preloader) --- */}
//       <motion.div 
//         className="fixed top-0 left-0 p-8 z-[99] text-neutral-900 pointer-events-none"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
//       >
//         <div className="pointer-events-auto">
//           <Magnetic>
//             <a
//               href="#home"
//               className="text-xl font-bold tracking-tighter font-manrope p-3 inline-block"
//             >
//               @{PERSON_NAME.trimEnd().split(" ")[0].toLowerCase()}
//             </a>
//           </Magnetic>
//         </div>
//       </motion.div>

//       {/* --- FLOATING HAMBURGER BUTTON (Scales in seamlessly) --- */}
//       <motion.div 
//         className="fixed top-6 right-8 z-[100]"
//         initial={{ scale: 0, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
//       >
//         <Magnetic>
//           <button
//             onClick={() => setIsActive(!isActive)}
//             className="w-16 h-16 bg-neutral-900 text-white rounded-full flex flex-col items-center justify-center gap-1.5 shadow-xl hover:scale-105 transition-transform focus:outline-none"
//           >
//             <span className={`w-6 h-[2px] bg-white transition-transform duration-300 ${isActive ? 'rotate-45 translate-y-[5px]' : ''}`} />
//             <span className={`w-6 h-[2px] bg-white transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
//             <span className={`w-6 h-[2px] bg-white transition-transform duration-300 ${isActive ? '-rotate-45 -translate-y-[5px]' : ''}`} />
//           </button>
//         </Magnetic>
//       </motion.div>

//       {/* --- SIDEBAR OVERLAY --- */}
//       <AnimatePresence mode="wait">
//         {isActive && <Sidebar setIsActive={setIsActive} />}
//       </AnimatePresence>
//     </>
//   );
// }



"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Magnetic from "./magnetic";
import Sidebar from "./sidebar";

interface HeaderProps {
  PERSON_NAME: string;
}

export default function Header({ PERSON_NAME }: HeaderProps) {
  const [isActive, setIsActive] = useState(false);

  const firstName = PERSON_NAME.trim().split(/\s+/)[0].toLowerCase();

  return (
    <>
      <header
        data-site-header
        className="
          global-header
          pointer-events-none
          fixed left-0 top-0 z-[100]
          flex w-full items-center justify-between
          px-5 py-6
          md:px-10 md:py-8
        "
      >
        {/* This outer wrapper is hidden after leaving the Hero */}
        <div
          data-header-brand-section
          className="pointer-events-auto"
        >
          {/* This inner wrapper is revealed by the Hero animation */}
          <div
            data-header-brand-reveal
            // className="invisible opacity-0 mix-blend-difference text-black"
            className={isActive ? "visible opacity-100 mix-blend-difference text-white" : "invisible opacity-0 mix-blend-difference text-black"}
          >
            <Magnetic>
              <a
                href="#home"
                aria-label="Go to home section"
                className="
                  inline-block p-3
                  font-manrope text-xl font-bold tracking-tighter
                "
              >
                @{firstName}
              </a>
            </Magnetic>
          </div>
        </div>

        {/* This remains visible in all later sections */}
        <div
          data-header-menu-reveal
          className="pointer-events-auto invisible opacity-0"
        >
          <Magnetic>
            <button
              type="button"
              aria-label={isActive ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isActive}
              onClick={() => setIsActive((previous) => !previous)}
              className="
                flex h-16 w-16 flex-col items-center justify-center gap-1.5
                rounded-full bg-neutral-900 text-white shadow-xl
                transition-transform duration-300
                hover:scale-105
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-neutral-500
                focus-visible:ring-offset-2
                cursor-pointer
              "
            >
              <span
                className={`
                  h-[2px] w-6 bg-white
                  transition-transform duration-300
                  ${
                    isActive
                      ? "translate-y-[5px] rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  h-[2px] w-6 bg-white
                  transition-opacity duration-300
                  ${
                    isActive
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              <span
                className={`
                  h-[2px] w-6 bg-white
                  transition-transform duration-300
                  ${
                    isActive
                      ? "-translate-y-[5px] -rotate-45"
                      : ""
                  }
                `}
              />
            </button>
          </Magnetic>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {isActive && (
          <Sidebar setIsActive={setIsActive} />
        )}
      </AnimatePresence>
    </>
  );
}