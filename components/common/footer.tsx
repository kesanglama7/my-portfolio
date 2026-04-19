"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const SOCIALS = [
  { name: "GH", icon: FaGithub, href: "#", rotate: "-rotate-6", color: "var(--color-ink)" },
  { name: "FB", icon: FaFacebook, href: "#", rotate: "rotate-3", color: "#1DA1F2" },
  { name: "IG", icon: FaInstagram, href: "#", rotate: "rotate-6", color: "var(--color-marker)" },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[var(--color-pencil)] pt-20 pb-10 mt-20 overflow-hidden">
      {/* 1. TORN PAPER EDGE (The transition from paper to footer) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.11,1200,0.47V0Z" 
            fill="var(--color-paper)"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* 2. SCATTERED SOCIAL CARDS */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {SOCIALS.map((soc, i) => (
            <motion.a
              key={i}
              href={soc.href}
              whileHover={{ y: -10, rotate: 0, scale: 1.1 }}
              className={cn(
                "w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-black flex items-center justify-center shadow-hard group transition-colors hover:bg-[var(--color-postit)]",
                soc.rotate,
                "wobbly-sm"
              )}
            >
              <soc.icon size={28} className="text-[var(--color-pencil)] group-hover:scale-110 transition-transform" />
            </motion.a>
          ))}
        </div>

        {/* 3. THE "BACK TO TOP" SKETCH */}
        <button 
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-2 mb-12 text-white/50 hover:text-white transition-colors"
        >
          <div className="w-12 h-12 border-2 border-dashed border-white/30 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </div>
          <span className="font-heading text-sm uppercase tracking-widest">Back to top</span>
        </button>

        {/* 4. FOOTER CREDITS */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-heading text-2xl text-white tracking-tighter">Kesang.dev</h4>
            <p className="font-body text-xs text-white/40 uppercase tracking-widest mt-1">
              Built with caffeine & curiosity
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
             <div className="font-heading text-white/60 text-lg italic">
              &#34;Do it anyway.&#34; — Amanda Gorman
            </div>
             <div className="text-[10px] text-white/20 mt-2 font-body">
               © 2026 KATHMANDU, NEPAL
             </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Large Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-heading text-white/[0.03] select-none pointer-events-none whitespace-nowrap">
        G KESANG LAMA KESA
      </div>
    </footer>
  );
}