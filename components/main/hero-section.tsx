"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { StickyTag } from "../custom/sticky-tag";
import { WobblyButton } from "../custom/wobbly-button";

const TITLES = ["Frontend Developer.", "Next.js Engineer.", "UI Craftsman.", "Full-Stack (sometimes)."];

export function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedRefMobile = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const els = [typedRef.current, typedRefMobile.current].filter(Boolean) as HTMLSpanElement[];
    if (!els.length) return;
    let titleIndex = 0, charIndex = 0, isDeleting = false, timeout: any;

    function type() {
      const current = TITLES[titleIndex];
      if (!isDeleting) {
        charIndex++;
        els.forEach(el => el.textContent = current.slice(0, charIndex));
        if (charIndex === current.length) { isDeleting = true; timeout = setTimeout(type, 2000); return; }
        timeout = setTimeout(type, 100);
      } else {
        charIndex--;
        els.forEach(el => el.textContent = current.slice(0, charIndex));
        if (charIndex === 0) { isDeleting = false; titleIndex = (titleIndex + 1) % TITLES.length; timeout = setTimeout(type, 500); return; }
        timeout = setTimeout(type, 50);
      }
    }
    timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-16" aria-label="Hero — Introduction">
      <BackgroundScribbles />

      <div className="max-w-5xl mx-auto px-6 w-full hidden sm:grid md:grid-cols-12 gap-12 items-center relative z-10 ">
        
        <motion.div 
          className="md:col-span-7 flex flex-col gap-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <motion.div 
              initial={{ rotate: -5, scale: 0.9 }}
              animate={{ rotate: -2, scale: 1 }}
              className="inline-block"
            >
              <StickyTag tilt="-rotate-2" className="bg-[var(--color-ink)] text-white px-4 py-1">
                <span className="flex items-center gap-2 font-bold tracking-wide">
                  <MapPin size={14} /> Kathmandu, NP
                </span>
              </StickyTag>
            </motion.div>

            <h1 className="font-heading text-6xl md:text-8xl leading-none">
              Hey, I&apos;m <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 px-2">Kesang</span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-1 left-0 h-[60%] bg-[var(--color-marker)]/30 -rotate-1 -z-10 wobbly-sm"
                />
              </span>
            </h1>

            <div className="font-heading text-2xl md:text-4xl text-[var(--color-pencil)]/70 h-10">
              <span ref={typedRef} />
              <span className="gsap-cursor border-l-4 border-[var(--color-marker)] ml-1 animate-pulse" />
            </div>
          </div>

          <p className="font-body text-xl md:text-2xl text-[var(--color-pencil)]/80 max-w-lg leading-relaxed">
            I craft digital experiences that feel <span className="underline-wavy">handmade</span>. 
            Currently engineering at <span className="font-bold text-[var(--color-ink)]">Clover Tech</span>.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <WobblyButton href="/#work" className="text-lg px-8 py-3 bg-[var(--color-pencil)] text-white shadow-hard hover:shadow-hard-lg transition-all">
              Check my folio →
            </WobblyButton>
            
            <div className="flex gap-4 ml-2">
              {[FaGithub, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-3 border-2 border-[var(--color-pencil)] wobbly-btn hover:bg-[var(--color-postit)] transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="md:col-span-5 relative flex justify-center"
          initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-white border-2 border-[var(--color-pencil)] wobbly-md rotate-6 translate-x-4 translate-y-2 -z-10 shadow-hard opacity-50" />
          
          <div className="relative group bg-white p-4 pb-12 border-2 border-[var(--color-pencil)] shadow-hard-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-500 w-[300px] md:w-[350px]">
            <div className="tape -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-black/5 backdrop-blur-[2px] border-none shadow-none" />
            
            <div className="aspect-square bg-[var(--color-muted)] overflow-hidden border border-[var(--color-pencil)]/20 mb-6">
              <video
                src="/video/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="font-heading text-center text-[var(--color-pencil)] text-xl">
              &#34;Kesang_v2_final.mp4&#34;
            </div>

            <motion.div 
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              className="absolute -right-12 top-10 bg-[var(--color-postit)] p-4 shadow-hard wobbly-sm border-2 border-[var(--color-pencil)] rotate-12 cursor-grab active:cursor-grabbing hidden lg:block"
            >
              <p className="font-body text-xs font-bold uppercase tracking-tighter">Current Status:</p>
              <p className="font-heading text-lg text-[var(--color-ink)]">Drinking Coffee ☕</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="relative max-w-sm mx-auto px-6 w-full z-10 sm:hidden">
        <motion.div 
          className="relative flex justify-center"
          initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Decorative "Paper Behind" */}
          <div className="absolute inset-0 bg-white border-2 border-[var(--color-pencil)] wobbly-md rotate-6 translate-x-4 translate-y-2 -z-10 shadow-hard opacity-50" />
          
          <div className="relative group bg-white p-4 pb-6 border-2 border-[var(--color-pencil)] shadow-hard-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-500 w-[300px]">
            <div className="tape -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-black/5 backdrop-blur-[2px] border-none shadow-none" />
            
            <div className="aspect-square bg-[var(--color-muted)] overflow-hidden border border-[var(--color-pencil)]/20 mb-6">
              <video
                src="/video/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* <div className="font-heading text-center text-[var(--color-pencil)] text-xl">
              "Kesang_v2_final.mp4"
            </div> */}
            <div className="flex flex-row gap-4">
              <h1 className="font-heading text-lg leading-none">
                Hey, I&apos;m <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 px-2">Kesang</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-1 left-0 h-[60%] bg-[var(--color-marker)]/30 -rotate-1 -z-10 wobbly-sm"
                  />
                </span>
              </h1>
              <div className="mt-[7.77%] font-heading text-[16px] text-[var(--color-pencil)]/70 h-10">
                <span ref={typedRefMobile} />
                <span className="gsap-cursor border-l-4 border-[var(--color-marker)] ml-1 animate-pulse" />
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <WobblyButton href="/#work" className="text-sm p-2 bg-[var(--color-pencil)] text-white shadow-hard hover:shadow-hard-lg transition-all">
                Check my folio →
              </WobblyButton>
              
              <div className="flex gap-4 ml-2">
                {[FaGithub, FaInstagram, FaLinkedin].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 border-2 border-[var(--color-pencil)] wobbly-btn hover:bg-[var(--color-postit)] transition-colors">
                    <Icon size={10} />
                  </a>
                ))}
              </div>
            </div>

            {/* Floating Post-it on the Photo */}
            <motion.div 
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              className="absolute -right-12 top-10 bg-[var(--color-postit)] p-4 shadow-hard wobbly-sm border-2 border-[var(--color-pencil)] rotate-12 cursor-grab active:cursor-grabbing"
            >
              <p className="font-body text-xs font-bold uppercase tracking-tighter">Current Status:</p>
              <p className="font-heading text-sm text-[var(--color-ink)]">Drinking Coffee ☕</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BackgroundScribbles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Hand-drawn Arrow pointing to your name */}
      <svg className="absolute top-[20%] left-[10%] w-32 h-32 text-[var(--color-marker)] opacity-20 rotate-[-45deg]" viewBox="0 0 100 100">
        <path d="M10,50 Q40,10 90,50 M90,50 L70,35 M90,50 L70,65" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      
      {/* Coffee Stain Mockup */}
      <div className="absolute bottom-[10%] left-[5%] w-40 h-40 border-8 border-[var(--color-muted)] rounded-full opacity-20 blur-sm" />
      
      {/* Grid numbers like a blueprint */}
      <div className="absolute top-10 left-10 font-body text-[10px] text-[var(--color-pencil)]/20 flex flex-col">
        <span>LAT: 27.7172° N</span>
        <span>LON: 85.3240° E</span>
      </div>
    </div>
  );
}