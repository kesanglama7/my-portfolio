// "use client";

// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { Send, Sparkles } from "lucide-react";
// import { cn } from "@/lib/utils";

// export function CTASection() {
//   // Magnetic Button Logic
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseSpringConfig = { stiffness: 150, damping: 15 };
//   const springX = useSpring(x, mouseSpringConfig);
//   const springY = useSpring(y, mouseSpringConfig);

//   function handleMouseMove(e: React.MouseEvent) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     x.set(e.clientX - centerX);
//     y.set(e.clientY - centerY);
//   }

//   function handleMouseLeave() {
//     x.set(0);
//     y.set(0);
//   }

//   return (
//     <section className="py-32 relative overflow-hidden bg-[var(--color-paper)] flex items-center justify-center">
//       {/* Decorative Scribbles */}
//       <div className="absolute inset-0 pointer-events-none opacity-20">
//         <svg className="absolute top-10 left-10 w-40 h-40 rotate-12" viewBox="0 0 100 100">
//           <path d="M10,50 Q40,10 90,50" fill="none" stroke="var(--color-pencil)" strokeWidth="2" strokeDasharray="5,5" />
//         </svg>
//         <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full border-4 border-dashed border-[var(--color-muted)] animate-spin-slow" />
//       </div>

//       <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
//         {/* The "Note" Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40, rotate: -2 }}
//           whileInView={{ opacity: 1, y: 0, rotate: 0 }}
//           viewport={{ once: true }}
//           className="bg-white border-[3px] border-[var(--color-pencil)] p-10 md:p-16 wobbly shadow-hard-lg relative"
//         >
//           {/* Coffee Stain Decoration */}
//           <div className="absolute -bottom-10 -left-10 w-32 h-32 border-8 border-[var(--color-muted)]/20 rounded-full blur-sm pointer-events-none" />

//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="mb-6 inline-flex items-center gap-2 px-4 py-1 bg-[var(--color-postit)] border-2 border-[var(--color-pencil)] wobbly-sm rotate-2 font-heading text-sm"
//           >
//             <Sparkles size={16} className="text-[var(--color-marker)]" />
//             Ready for the next step?
//           </motion.div>

//           <h2 className="font-heading text-5xl md:text-7xl mb-6 leading-tight">
//             Let’s turn these <br />
//             <span className="text-[var(--color-marker)] underline-wavy">sketches</span> into code.
//           </h2>

//           <p className="font-body text-xl text-[var(--color-pencil)]/70 mb-12 max-w-xl mx-auto">
//             Whether you have a fully-baked idea or just a rough scribble on a napkin, 
//             I'm here to build it with you.
//           </p>

//           {/* MAGNETIC CTA BUTTON */}
//           <div className="relative group inline-block">
//             <motion.a
//               href="mailto:your-email@example.com"
//               onMouseMove={handleMouseMove}
//               onMouseLeave={handleMouseLeave}
//               style={{ x: springX, y: springY }}
//               className={cn(
//                 "relative z-10 flex items-center gap-3 px-10 py-5",
//                 "bg-[var(--color-ink)] text-white font-heading text-2xl",
//                 "border-[3px] border-[var(--color-pencil)] shadow-hard hover:shadow-hard-lg",
//                 "transition-shadow duration-300 wobbly-btn"
//               )}
//             >
//               Start a Conversation
//               <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </motion.a>
            
//             {/* Background Glow/Shadow that follows the button */}
//             <motion.div
//               style={{ x: springX, y: springY }}
//               className="absolute inset-0 bg-[var(--color-marker)] blur-xl opacity-20 group-hover:opacity-40 transition-opacity -z-10"
//             />
//           </div>

//           <div className="mt-12 flex items-center justify-center gap-4 text-[var(--color-pencil)]/40 font-body italic text-sm">
//             <span>Kathmandu, Nepal</span>
//             <span className="w-1 h-1 rounded-full bg-current" />
//             <span>Working Worldwide</span>
//           </div>
//         </motion.div>

//         {/* Final "Stamp" decoration */}
//         <motion.div
//           initial={{ opacity: 0, scale: 2, rotate: 45 }}
//           whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
//           viewport={{ once: true }}
//           transition={{ type: "spring", delay: 0.8 }}
//           className="absolute -bottom-6 -right-6 md:-right-12 w-24 h-24 border-4 border-[var(--color-marker)] text-[var(--color-marker)] flex items-center justify-center rounded-full font-heading text-xs uppercase font-bold text-center p-2 border-double select-none opacity-40 hover:opacity-100 transition-opacity"
//         >
//           Approved <br /> Design
//         </motion.div>
//       </div>
//     </section>
//   );
// }











"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";

export function CTASection() {
  return (
    <section className="-mt-12 h-[80vh] w-full bg-[var(--color-paper)] flex items-center justify-center relative overflow-hidden border-y-2 border-dashed border-[var(--color-pencil)]/20">
      
      {/* Floating Background Decorations (The "Duolingo" Vibe) */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] opacity-20 hidden md:block"
      >
        <Sparkle size={80} className="text-[var(--color-marker)]" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-[10%] opacity-20 hidden md:block"
      >
        <div className="w-32 h-32 border-4 border-[var(--color-ink)] wobbly rotate-12" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="font-heading text-5xl md:text-8xl text-center mb-12 text-[var(--color-pencil)]"
        >
          Ready to start <br /> 
          <span className="text-[var(--color-marker)]">your story?</span>
        </motion.h2>

        {/* THE DUOLINGO-STYLE 3D BUTTON */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group cursor-pointer"
        >
          {/* The "Depth" Layer (Shadow) */}
          <div className="absolute inset-0 bg-[var(--color-pencil)] translate-y-2 rounded-2xl wobbly-btn" />
          
          {/* The Main Button Layer */}
          <button className="relative flex items-center gap-4 px-12 py-6 bg-[var(--color-ink)] text-white font-heading text-3xl md:text-4xl border-2 border-[var(--color-pencil)] rounded-2xl wobbly-btn -translate-y-1 group-active:translate-y-1 transition-transform duration-100">
            Let&apos;s Chat
            <ArrowRight size={32} />
          </button>
        </motion.div>

        {/* Little "Free" or "Quick" tag */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ delay: 0.5 }}
          className="mt-6 font-body text-lg italic"
        >
          takes less than a minute to say hi!
        </motion.p>
      </div>

      {/* Background Text Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <span className="font-heading text-[20vw] whitespace-nowrap">CONTACT • CONTACT • CONTACT</span>
      </div>
    </section>
  );
}