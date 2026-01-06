// "use client";

// import Image from "next/image";
// import { motion, cubicBezier } from "framer-motion";
// import { Github, ExternalLink } from "lucide-react";
// import { projects } from "@/lib/data";

// const customEase = cubicBezier(0.22, 1, 0.36, 1);

// const overlayVariants = {
//   rest: { opacity: 0, transition: { duration: 0.25, ease: customEase } },
//   hover: { opacity: 1, transition: { duration: 0.35, ease: customEase } },
// };

// const contentVariants = {
//   rest: { opacity: 0, y: 10, transition: { duration: 0.2, ease: customEase } },
//   hover: { opacity: 1, y: 0, transition: { duration: 0.35, ease: customEase } },
// };

// const imageVariants = {
//   rest: { scale: 1, transition: { duration: 0.35, ease: customEase } },
//   hover: { scale: 1.04, transition: { duration: 0.5, ease: customEase } },
// };

// export default function ProjectsGrid() {
//   return (
//     <section id="work" className="scroll-mt-28 py-12 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
//           {projects.map((p, index) => (
//             <motion.article
//               key={p.id}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.06, duration: 0.5 }}
//               whileHover="hover"
//               animate="rest"
//               className="group relative overflow-hidden bg-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
//             >
//               {/* Image */}
//               <div className="relative aspect-[4/3] rounded-none">
//                 <motion.div
//                   variants={imageVariants}
//                   className="absolute inset-0 transform-gpu will-change-transform"
//                 >
//                   <Image
//                     src={p.image}
//                     alt={p.title}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     priority={index < 3}
//                   />
//                 </motion.div>
//               </div>

//               {/* Overlay (smooth fade) */}
//               <motion.div
//                 variants={overlayVariants}
//                 className="absolute inset-0 transform-gpu will-change-[opacity]"
//                 style={{ pointerEvents: "none" }}
//               >
//                 <div className="absolute inset-0 bg-black/55" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/25" />
//               </motion.div>

//               {/* Content (smooth slide + fade) */}
//               <motion.div
//                 variants={contentVariants}
//                 className="absolute inset-0 flex items-center justify-center px-6 transform-gpu will-change-transform"
//                 style={{ pointerEvents: "none" }}
//               >
//                 <div className="text-center text-white max-w-md">
//                   <h3 className="text-2xl sm:text-3xl font-bold tracking-wide">
//                     {p.title}
//                   </h3>

//                   {p.tagline && (
//                     <p className="mt-3 text-sm sm:text-base font-semibold text-white/95">
//                       {p.tagline}
//                     </p>
//                   )}

//                   {p.meta && (
//                     <p className="mt-4 text-xs sm:text-sm text-white/80">
//                       {p.meta}
//                     </p>
//                   )}

//                   {/* Icons (need pointerEvents ON) */}
//                   {(p.github || p.live) && (
//                     <div
//                       className="mt-5 flex items-center justify-center gap-3"
//                       style={{ pointerEvents: "auto" }}
//                     >
//                       {p.github && (
//                         <a
//                           href={p.github}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           aria-label="View on GitHub"
//                           className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-colors duration-200"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <Github size={18} />
//                         </a>
//                       )}

//                       {p.live && (
//                         <a
//                           href={p.live}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           aria-label="Open live demo"
//                           className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-colors duration-200"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <ExternalLink size={18} />
//                         </a>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

const customEase = cubicBezier(0.22, 1, 0.36, 1);

const overlayVariants = {
  rest: { opacity: 0, transition: { duration: 0.25, ease: customEase } },
  hover: { opacity: 1, transition: { duration: 0.35, ease: customEase } },
};

const contentVariants = {
  rest: { opacity: 0, y: 10, transition: { duration: 0.2, ease: customEase } },
  hover: { opacity: 1, y: 0, transition: { duration: 0.35, ease: customEase } },
};

const imageVariants = {
  rest: { scale: 1, transition: { duration: 0.35, ease: customEase } },
  hover: { scale: 1.03, transition: { duration: 0.6, ease: customEase } }, // slightly reduced from 1.04
};

export default function ProjectsGrid() {
  return (
    <section id="work" className="scroll-mt-28 py-12 px-4 sm:px-6 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((p, index) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover="hover"
              animate="rest"
              className="group relative overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-none overflow-hidden">
                <motion.div
                  variants={imageVariants}
                  className="absolute inset-0 will-change-transform origin-center"
                  style={{
                    // Helps Chrome render crisp scaled images
                    imageRendering: "-webkit-optimize-contrast",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={95}
                    priority={index < 3}
                  />
                </motion.div>
              </div>

              {/* Dark Overlay on Hover */}
              <motion.div
                variants={overlayVariants}
                className="absolute inset-0"
                style={{ pointerEvents: "none" }}
              >
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              </motion.div>

              {/* Content (Title, Tagline, Links) */}
              <motion.div
                variants={contentVariants}
                className="absolute inset-0 flex items-center justify-center px-6"
                style={{ pointerEvents: "none" }}
              >
                <div className="text-center text-white max-w-md">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-wide">
                    {p.title}
                  </h3>

                  {p.tagline && (
                    <p className="mt-3 text-sm sm:text-base font-semibold text-white/95">
                      {p.tagline}
                    </p>
                  )}

                  {p.meta && (
                    <p className="mt-4 text-xs sm:text-sm text-white/80">
                      {p.meta}
                    </p>
                  )}

                  {(p.github || p.live) && (
                    <div
                      className="mt-6 flex items-center justify-center gap-4"
                      style={{ pointerEvents: "auto" }}
                    >
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View on GitHub"
                          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={20} />
                        </a>
                      )}

                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open live demo"
                          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}