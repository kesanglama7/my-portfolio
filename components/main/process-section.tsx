"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { STEPS } from "@/lib/static_data/process-data";

gsap.registerPlugin(ScrollTrigger);


export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const drawingPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const drawingPath = drawingPathRef.current;
    if (!drawingPath) return;

    // Get length of the path
    const length = drawingPath.getTotalLength();
    
    // Hide the drawing path completely by offsetting it by its own length
    gsap.set(drawingPath, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Animate the offset to 0 as we scroll
    const tl = gsap.to(drawingPath, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
        // Finish drawing when the last step is reached
        end: "bottom 80%",
        scrub: 1, // '1' makes the pencil feel like it's dragging slightly behind the scroll
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const pathD = "M400,0 C400,100 150,150 150,250 S650,350 650,450 S150,550 150,650 S650,750 650,850 S150,950 150,1050 S400,1150 400,1200";

  return (
    <section ref={containerRef} className="py-32 relative bg-[var(--color-paper)] -mt-10">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-28">
          <h2 className="font-heading text-6xl md:text-8xl mb-4 text-[var(--color-pencil)]">Process</h2>
        </div>

        <div className="relative">
          {/* THE SVG LAYER */}
          <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden="true">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 1200"
              fill="none"
              preserveAspectRatio="none"
              className="overflow-visible"
            >
              {/* 1. THE "GHOST" PATH (The light sketch that's always there) */}
              <path
                d={pathD}
                stroke="var(--color-pencil)"
                strokeWidth="2"
                strokeDasharray="8,12"
                className="opacity-10"
              />

              {/* 2. THE "INK" PATH (The one that fills in on scroll) */}
              <path
                ref={drawingPathRef}
                d={pathD}
                stroke="var(--color-pencil)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-80"
              />
            </svg>
          </div>

          <div className="space-y-32 md:space-y-52">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-12",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={cn(
                      "p-8 bg-white border-[3px] border-[var(--color-pencil)] wobbly shadow-hard relative z-30",
                      i % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"
                    )}
                  >
                    <div className={cn(
                      "absolute -top-5 bg-[var(--color-postit)] border-2 border-[var(--color-pencil)] px-4 py-1 font-heading text-lg shadow-hard-sm",
                      i % 2 === 0 ? "-left-4" : "-right-4"
                    )}>
                      {i + 1}
                    </div>
                    <h3 className="font-heading text-3xl mb-3" style={{ color: step.color }}>{step.title}</h3>
                    <p className="font-body text-lg text-[var(--color-pencil)]/80 leading-snug">{step.desc}</p>
                  </motion.div>
                </div>

                {/* Icon Circle */}
                <div className="relative z-40 flex items-center justify-center w-20 h-20 bg-[var(--color-paper)] border-[3px] border-[var(--color-pencil)] rounded-full shadow-hard-sm shrink-0">
                  <step.icon size={28} style={{ color: step.color }} strokeWidth={2.5} />
                </div>

                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    <motion.div 
        className="mt-32 flex flex-col items-center gap-4 opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
      >
        <div className="font-heading text-xl italic">What’s stopping you?</div>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
}