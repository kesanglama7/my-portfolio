// "use client";

// import Lenis from "lenis";
// import { useEffect } from "react";


// export default function LenisProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smoothWheel: true,
//       wheelMultiplier: 0.9,
//       touchMultiplier: 1.5,
//     });

//     let rafId: number;
//     function raf(time: number) {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     }
//     rafId = requestAnimationFrame(raf);

//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//     };
//   }, []);

//   return <>{children}</>;
// }












'use client';

import { useState, useEffect, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Preloader from "@/components/custom/pre-loader";

export default function MainProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Register Plugins
    gsap.registerPlugin(ScrollTrigger);

    // 2. Initialize Lenis with your specific settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    // 3. Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 4. Handle Body Scroll Lock based on loading state
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Refresh ScrollTrigger after the page is revealed to catch correct positions
      ScrollTrigger.refresh();
    }

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      // Clean up ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {/* Using framer-motion here for the main content fade-in 
        provides a smoother entry than standard CSS transition 
      */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {!isLoading && children}
      </motion.div>
    </>
  );
}