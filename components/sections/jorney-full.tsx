

"use client";

import { useId, useRef, useEffect, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

type BubblePosition = {
  x: number;
  y: number;
};

type CommunityChannel = {
  name: string;
  image: string;
  url: string;
  desktop: BubblePosition;
  tablet: BubblePosition;
  mobile: BubblePosition;
  compact: BubblePosition;
};

type BubbleStyle = CSSProperties & {
  "--mobile-x": string;
  "--mobile-y": string;
  "--tablet-x": string;
  "--tablet-y": string;
  "--desktop-x": string;
  "--desktop-y": string;
  "--compact-x": string;
  "--compact-y": string;
};

// Responsive orbital positions keep the center message readable on every screen size.
const COMMUNITY_CHANNELS = [
  {
    name: "Bro Code",
    image: "/youtube/brocode.jpg",
    url: "https://www.youtube.com/@BroCodez",
    desktop: { x: -280, y: -160 },
    tablet: { x: -210, y: -170 },
    mobile: { x: -108, y: -145 },
    compact: { x: -175, y: -85 },
  },
  {
    name: "Code With Antonio",
    image: "/youtube/antonio.jpg",
    url: "https://www.youtube.com/@codewithantonio",
    desktop: { x: 260, y: -150 },
    tablet: { x: 210, y: -165 },
    mobile: { x: 108, y: -145 },
    compact: { x: 175, y: -85 },
  },
  {
    name: "Chai aur Code",
    image: "/youtube/chaiaurcode.jpg",
    url: "https://www.youtube.com/@ChaiAurCode",
    desktop: { x: -320, y: 120 },
    tablet: { x: -240, y: 72 },
    mobile: { x: -116, y: 132 },
    compact: { x: -245, y: 15 },
  },
  {
    name: "freeCodeCamp.org",
    image: "/youtube/freecodecamp.jpg",
    url: "https://www.youtube.com/@freecodecamp",
    desktop: { x: 0, y: -230 },
    tablet: { x: 0, y: -260 },
    mobile: { x: 0, y: -215 },
    compact: { x: 0, y: -125 },
  },
  {
    name: "JavaScript Mastery",
    image: "/youtube/javascriptmastery.jpg",
    url: "https://www.youtube.com/@javascriptmastery",
    desktop: { x: 300, y: 140 },
    tablet: { x: 240, y: 82 },
    mobile: { x: 116, y: 132 },
    compact: { x: 245, y: 15 },
  },
  {
    name: "Web Dev Simplified",
    image: "/youtube/webdevsimplified.jpg",
    url: "https://www.youtube.com/@WebDevSimplified",
    desktop: { x: -120, y: 220 },
    tablet: { x: -135, y: 225 },
    mobile: { x: -65, y: 210 },
    compact: { x: -110, y: 105 },
  },
  {
    name: "Cosden Solutions",
    image: "/youtube/cosdensolutions.jpg",
    url: "https://www.youtube.com/@CosdenSolutions",
    desktop: { x: 160, y: 230 },
    tablet: { x: 135, y: 230 },
    mobile: { x: 65, y: 210 },
    compact: { x: 110, y: 105 },
  },
] satisfies CommunityChannel[];

function CommunityJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const entryPanelRef = useRef<HTMLDivElement>(null);

  const titleGroupRef = useRef<SVGGElement>(null);
  const topWordRef = useRef<SVGGElement>(null);
  const bottomWordRef = useRef<SVGGElement>(null);
  const fromLabelRef = useRef<SVGTextElement>(null);

  const revealLayerRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);

  const practicalPanelRef = useRef<HTMLDivElement>(null);
  const practicalTextGroupRef = useRef<HTMLDivElement>(null);
  const practicalCenterDotRef = useRef<HTMLDivElement>(null);

  const totalParticles = 65;
  const particlesArray = Array.from({ length: totalParticles });
  const totalMatrixDots = 8;
  const matrixDotsArray = Array.from({ length: totalMatrixDots });
  const totalPracticalParticles = 115;
  const practicalParticlesArray = Array.from({ length: totalPracticalParticles });

  const rawId = useId();
  const clipId = rawId.replace(/:/g, "");
  const topClipId = `journey-top-${clipId}`;
  const bottomClipId = `journey-bottom-${clipId}`;

  // 1. Initialize Smooth Scroll Engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // 2. Orchestrate Merged Cinematic Scroll Timeline
  useGSAP(
    () => {
      const section = sectionRef.current;
      const stage = stageRef.current;
      const entryPanel = entryPanelRef.current;
      const titleGroup = titleGroupRef.current;
      const topWord = topWordRef.current;
      const bottomWord = bottomWordRef.current;
      const fromLabel = fromLabelRef.current;
      const revealLayer = revealLayerRef.current;
      const practicalPanel = practicalPanelRef.current;
      const practicalTextGroup = practicalTextGroupRef.current;
      const practicalCenterDot = practicalCenterDotRef.current;

      if (
        !section ||
        !stage ||
        !entryPanel ||
        !titleGroup ||
        !topWord ||
        !bottomWord ||
        !fromLabel ||
        !revealLayer ||
        !practicalPanel ||
        !practicalTextGroup ||
        !practicalCenterDot
      ) {
        return;
      }

      const getCuriosityShift = () => {
        const magicEl = section.querySelector(".word-curiosity") as HTMLElement | null;
        const groupEl = textGroupRef.current;

        if (!magicEl || !groupEl) {
          return 0;
        }

        const magicRect = magicEl.getBoundingClientRect();
        const groupRect = groupEl.getBoundingClientRect();

        return groupRect.left + groupRect.width / 2 - (magicRect.left + magicRect.width / 2);
      };

      const getPracticalShift = () => {
        const practicalEl = section.querySelector(
          ".practical-word-practical"
        ) as HTMLElement | null;

        if (!practicalEl) {
          return 0;
        }

        const practicalRect = practicalEl.getBoundingClientRect();
        const groupRect = practicalTextGroup.getBoundingClientRect();

        return (
          groupRect.left +
          groupRect.width / 2 -
          (practicalRect.left + practicalRect.width / 2)
        );
      };

      const getRingRadius = () =>
        Math.min(190, window.innerWidth * 0.34, window.innerHeight * 0.24);

      const getChaosScale = () =>
        Math.min(1, Math.max(0.48, window.innerWidth / 900));

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      /* Initial States Setup */
      gsap.set(entryPanel, { yPercent: 0, borderRadius: "0px" });
      gsap.set(titleGroup, { autoAlpha: 0, y: 35, scale: 0.9, transformOrigin: "center center" });
      gsap.set([topWord, bottomWord], { y: 0 });
      gsap.set(fromLabel, { autoAlpha: 0, scale: 0.75, transformOrigin: "center center" });
      
      // Reveal layer starts completely hidden as a point at the absolute center
      gsap.set(revealLayer, { clipPath: "circle(0% at 50% 50%)" });
      
      // Phase 2 states (Dark Scene)
      gsap.set(".a", { opacity: 0, y: 15 });
      gsap.set(".childhood", { opacity: 0, y: 15 });
      gsap.set(".word-curiosity", { scale: 1.0, opacity: 0, x: 0, y: 15 });
      gsap.set(".particle-dot", { opacity: 0, scale: 0, x: 0, y: 0 });

      // Phase 3 states (Light Scene Content)
      gsap.set(".bg-grid-dots", { opacity: 0 });
      gsap.set(".text-degree", { y: 35, opacity: 0 });
      gsap.set(".text-spark", { y: 35, opacity: 0 });
      gsap.set(".text-web", { y: 35, opacity: 0 });
      gsap.set(".matrix-dot", { opacity: 0, x: 0, y: 0, scale: 1 });
      gsap.set(".text-conceive", { opacity: 0, scale: 0.95 });
      gsap.set(".text-ideas", { opacity: 0, y: 15 });
      
      // Initial state for Channel Bubble elements. They grow with scroll later.
      gsap.set(".channel-bubble", {
        autoAlpha: 0,
        scale: 0.42,
        transformOrigin: "center center",
      });

      // Final bridge states: white panel rises from bottom, then black dot fills into the next dark section.
      gsap.set(practicalPanel, { autoAlpha: 1, yPercent: 100, force3D: true });
      gsap.set(".practical-bg-dot", { opacity: 0 });
      gsap.set(".practical-word-from", { opacity: 0, y: 18 });
      gsap.set(".practical-word-theory", { opacity: 0, y: 18 });
      gsap.set(".practical-word-to", { opacity: 0, y: 18 });
      gsap.set(".practical-word-practical", {
        opacity: 0,
        x: 0,
        y: 18,
        scale: 1,
        transformOrigin: "center center",
      });
      gsap.set(".practical-particle-dot", {
        opacity: 0,
        scale: 0,
        x: 0,
        y: 0,
        transformOrigin: "center center",
      });
      gsap.set(practicalCenterDot, {
        opacity: 0,
        scale: 0,
        transformOrigin: "center center",
      });

      if (prefersReducedMotion) {
        gsap.set(revealLayer, { clipPath: "circle(150% at 50% 50%)" });
        gsap.set(
          [
            titleGroup,
            ".a",
            ".childhood",
            ".word-curiosity",
            ".text-degree",
            ".text-spark",
            ".text-web",
            ".text-conceive",
            ".matrix-dot",
          ],
          { autoAlpha: 0 }
        );
        gsap.set(".text-ideas", { autoAlpha: 1, y: 0, scale: 1 });
        gsap.set(".channel-bubble", { autoAlpha: 1, scale: 1 });
        gsap.set(practicalPanel, { yPercent: 0 });
        gsap.set(practicalCenterDot, { opacity: 1, scale: 220 });
        return;
      }

      /* Master Scroll Timeline Integration */
      const timeline = gsap.timeline({
        scrollTrigger: {
          id: "journey-scroll-trigger",
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.85,
          invalidateOnRefresh: true,
        },
      });

      // --- PHASE 1: SVG "JOURNEY FROM" SPLIT ANIMATION ---
      timeline
        .addLabel("journeyShowcase", 0.8)
        .addLabel("journeyFrom", 0.8)

        .to(titleGroup, { autoAlpha: 1, y: 0, scale: 1, duration: 0.65, ease: "power2.out" }, 0.2)
        .to(topWord, { y: -38, duration: 0.75, ease: "power3.inOut" }, 0.9)
        .to(bottomWord, { y: 38, duration: 0.75, ease: "power3.inOut" }, 0.9)
        .to(fromLabel, { autoAlpha: 1, scale: 1, duration: 0.45, ease: "power2.out" }, 1.15)
        .to(titleGroup, { autoAlpha: 0, scale: 0.95, duration: 0.7, ease: "power2.in" }, 2.0);

      // timeline.addLabel("journeyShowcase", 2.1);

      // --- PHASE 2: "MAGIC" CENTERING & HIGH-IMPACT PARTICLE BURST ---
      timeline
        .to(".a", { opacity: 1, y: 0, duration: 0.6 }, 2.8)
        .to(".childhood", { opacity: 1, y: 0, duration: 0.6 }, 3.1)
        .to(".word-curiosity", { opacity: 1, y: 0, duration: 0.6 }, 3.4)
        .to({}, { duration: 0.4 })
        
        // Dissolve introductory words and slide "magic" seamlessly to absolute center
        .to(".a", { opacity: 0, duration: 0.5 }, 4.2)
        .to(".childhood", { opacity: 0, duration: 0.5 }, 4.5)
        .to(".word-curiosity", { x: getCuriosityShift, scale: 1.25, duration: 0.8, ease: "power3.inOut" }, 4.3)
        .to(".word-curiosity", { scale: 1.4, duration: 0.3, ease: "power2.in" }, 5.1)
        .to(".word-curiosity", { opacity: 0, scale: 0, duration: 0.08 }, 5.4);

      // Spark Burst Trigger Execution (Expanded Boundaries & Massive Scales)
      timeline
        .to(".particle-dot", { opacity: 1, scale: 1, duration: 0.02 }, 5.4)
        .to(".particle-dot", {
          x: () => gsap.utils.random(-window.innerWidth * 0.58, window.innerWidth * 0.58),
          y: () => gsap.utils.random(-window.innerHeight * 0.52, window.innerHeight * 0.52),
          scale: () => gsap.utils.random(0.3, 2.2),
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.002,
        }, 5.4)
        .to(".particle-dot", { opacity: 0, duration: 0.6, ease: "power2.out" }, 6.2);

      // Radial Wave Background Transition (Blown open by the spark explosion)
      timeline.to(revealLayer, { clipPath: "circle(150% at 50% 50%)", duration: 1.6, ease: "power3.inOut" }, 5.5);

      // --- PHASE 3: TYPOGRAPHY RUNTIME & GEOMETRIC ENTROPY DECAY ---
      timeline
        .to(".bg-grid-dots", { opacity: 0.18, duration: 0.8 }, 6.8)
        
        // Sentence 1: Degree Shows Up
        .to(".text-degree", { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 7.1)
        .to(".text-degree", { opacity: 0, y: -25, duration: 0.4, ease: "power2.in" }, 8.5)
        
        // Sentence 2: Spark Shows Up
        .to(".text-spark", { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 8.9)
        .to(".text-spark", { opacity: 0, y: -25, duration: 0.4, ease: "power2.in" }, 10.3)
        
        // Sentence 3: Discovering Web Dev
        .to(".text-web", { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 10.7)
        .to([".text-web", ".bg-grid-dots"], { opacity: 0, duration: 0.5 }, 12.4);

      // Initialize Matrix point structure configurations
      timeline.set([".matrix-dot-0", ".matrix-dot-1", ".matrix-dot-2"], { opacity: 1 }, 12.8);
      timeline.to(".matrix-dot-1", { x: -45, duration: 0.5, ease: "back.out(1.2)" }, 12.8);
      timeline.to(".matrix-dot-2", { x: 45, duration: 0.5, ease: "back.out(1.2)" }, 12.8);

      // Form a viewport-aware polar ring.
      matrixDotsArray.forEach((_, index) => {
        const theta = index * (Math.PI / 4);

        timeline.to(`.matrix-dot-${index}`, {
          x: () => getRingRadius() * Math.cos(theta),
          y: () => getRingRadius() * Math.sin(theta),
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }, 13.5);
      });

      timeline.to(".text-conceive", { opacity: 1, scale: 1, duration: 1.0, ease: "power2.out" }, 14.1);

      // Ring Contraction System Sequence (Radius decreases swiftly: 190px -> 45px)
      matrixDotsArray.forEach((_, index) => {
        const theta = index * (Math.PI / 4);
        const contractX = 45 * Math.cos(theta);
        const contractY = 45 * Math.sin(theta);

        timeline.to(`.matrix-dot-${index}`, {
          x: contractX,
          y: contractY,
          duration: 0.7,
          ease: "power3.in",
        }, 16.1);
      });

      // Absolute Spread Scatter & Disappear (Entropy Destruction Curve)
      timeline
        .to(".text-conceive", { opacity: 0, duration: 0.35 }, 16.8)
        .to(".text-ideas", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 16.8);

      const chaosVariants = [
        { x: -320, y: 80, scale: 3.8 },
        { x: -160, y: -60, scale: 2.2 },
        { x: -60, y: 140, scale: 3.0 },
        { x: 190, y: -110, scale: 1.8 },
        { x: 340, y: 50, scale: 3.5 },
        { x: -360, y: -145, scale: 2.5 },
        { x: 380, y: 190, scale: 2.0 },
        { x: 90, y: -240, scale: 3.2 },
      ];

      matrixDotsArray.forEach((_, index) => {
        const variant = chaosVariants[index];
        timeline.to(`.matrix-dot-${index}`, {
          x: () => variant.x * getChaosScale(),
          y: () => variant.y * getChaosScale(),
          scale: variant.scale,
          opacity: 0, 
          duration: 1.5,
          ease: "power4.out",
        }, 16.8);
      });

      // --- SCROLL-LINKED CHANNEL BUBBLE GROWTH ---
      // Bubbles now grow with the scrubbed scroll instead of popping all at once.
      timeline
        .to(".channel-bubble", {
          autoAlpha: 1,
          scale: 0.58,
          duration: 0.35,
          ease: "power2.out",
          stagger: {
            amount: 0.35,
            from: "center",
          },
        }, 18.35)
        .to(".channel-bubble", {
          scale: 1,
          duration: 1.0,
          ease: "none",
          stagger: {
            amount: 0.45,
            from: "center",
          },
        }, 18.65);

      // --- PHASE 4: WHITE PANEL RISES, STICKS, THEN "PRACTICAL" BURSTS INTO BLACK ---
      // This starts sooner now, so the user does not need to scroll too long after the community bubbles.
      timeline
        .to(practicalPanel, {
          yPercent: 0,
          duration: 0.95,
          ease: "power3.inOut",
        }, 19.25)
        .to([".text-ideas", ".channel-bubble"], { autoAlpha: 0, duration: 0.28 }, 19.35)
        .to(".practical-bg-dot", { opacity: 0.1, duration: 0.55 }, 19.95)
        .to(".practical-word-from", { opacity: 1, y: 0, duration: 0.42, ease: "power2.out" }, 20.25)
        .to(".practical-word-theory", { opacity: 1, y: 0, duration: 0.42, ease: "power2.out" }, 20.45)
        .to(".practical-word-to", { opacity: 1, y: 0, duration: 0.42, ease: "power2.out" }, 20.65)
        .to(".practical-word-practical", { opacity: 1, y: 0, duration: 0.42, ease: "power2.out" }, 20.85)
        .to({}, { duration: 0.25 })
        .to(".practical-word-from", { opacity: 0, y: -14, duration: 0.32, ease: "power2.in" }, 21.55)
        .to(".practical-word-theory", { opacity: 0, y: -14, duration: 0.32, ease: "power2.in" }, 21.68)
        .to(".practical-word-to", { opacity: 0, y: -14, duration: 0.32, ease: "power2.in" }, 21.81)
        .to(
          ".practical-word-practical",
          {
            x: getPracticalShift,
            scale: () => (window.innerWidth < 640 ? 1.12 : 1.24),
            duration: 0.68,
            ease: "power3.inOut",
          },
          21.58
        )
        .to(
          ".practical-word-practical",
          { scale: () => (window.innerWidth < 640 ? 1.22 : 1.42), duration: 0.22, ease: "power2.in" },
          22.22
        )
        .to(
          ".practical-word-practical",
          { opacity: 0, scale: 0, duration: 0.08 },
          22.48
        );

      timeline
        .to(practicalCenterDot, { opacity: 1, scale: 1, duration: 0.02 }, 22.48)
        .to(".practical-particle-dot", { opacity: 1, scale: 1, duration: 0.02 }, 22.48)
        .to(
          ".practical-particle-dot",
          {
            x: () => gsap.utils.random(-window.innerWidth * 0.62, window.innerWidth * 0.62),
            y: () => gsap.utils.random(-window.innerHeight * 0.56, window.innerHeight * 0.56),
            scale: () => gsap.utils.random(0.25, window.innerWidth < 640 ? 1.55 : 2.25),
            duration: 1.05,
            ease: "power4.out",
            stagger: 0.002,
          },
          22.48
        )
        .to(
          practicalCenterDot,
          { scale: 240, duration: 1.0, ease: "power4.inOut" },
          22.58
        )
        .to(".practical-bg-dot", { opacity: 0, duration: 0.25 }, 22.78)
        .to(".practical-particle-dot", { opacity: 0, duration: 0.42, ease: "power2.out" }, 23.08)
        .to({}, { duration: 0.25 });

      return () => {
        timeline.kill();
      };
    },
    { scope: sectionRef, revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative z-20 bg-[#050505]"
      style={{ height: "1850svh" }}
    >
      <div
        ref={stageRef}
        className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[#050505]"
      >
        {/* =====================================================
            PHASE 1: SVG SLICE COMPOSITION (DARK STAGE)
        ====================================================== */}
        <div
          ref={entryPanelRef}
          className="absolute inset-0 z-10 overflow-hidden bg-[#050505]"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-3">
            <svg
              viewBox="0 0 1600 400"
              aria-hidden="true"
              className="w-[min(96vw,1500px)] overflow-visible"
            >
              <defs>
                <clipPath id={topClipId}>
                  <rect x="-100" y="-100" width="1800" height="302" />
                </clipPath>
                <clipPath id={bottomClipId}>
                  <rect x="-100" y="198" width="1800" height="400" />
                </clipPath>
              </defs>

              <g ref={titleGroupRef}>
                {/* Upper slice */}
                <g clipPath={`url(#${topClipId})`} ref={topWordRef}>
                  <text
                    x="800"
                    y="285"
                    textAnchor="middle"
                    fill="#f7f5ef"
                    style={{ fontSize: 250, fontWeight: 900, letterSpacing: "-0.065em" }}
                  >
                    JOURNEY
                  </text>
                </g>

                {/* Lower slice */}
                <g clipPath={`url(#${bottomClipId})`} ref={bottomWordRef}>
                  <text
                    x="800"
                    y="285"
                    textAnchor="middle"
                    fill="#f7f5ef"
                    style={{ fontSize: 250, fontWeight: 900, letterSpacing: "-0.065em" }}
                  >
                    JOURNEY
                  </text>
                </g>

                {/* Intersecting center label */}
                <text
                  ref={fromLabelRef}
                  x="800"
                  y="212"
                  textAnchor="middle"
                  fill="#ff4c3f"
                  style={{ fontSize: 23, fontWeight: 800, letterSpacing: "0.38em" }}
                >
                  FROM
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* =====================================================
            PHASE 2: THE "MAGIC" EXPLOSION FRAMEWORK (DARK STAGE OVERLAY)
        ====================================================== */}
        <div className="pointer-events-none absolute inset-0 z-[15] flex items-center justify-center overflow-hidden">
          <div
            ref={textGroupRef}
            className="flex flex-row items-center justify-center gap-x-[clamp(0.35rem,2vw,1rem)] whitespace-nowrap text-[clamp(1.35rem,7vw,3.75rem)] font-light tracking-wide text-white"
          >
            <span className="a inline-block will-change-opacity">A</span>
            <span className="childhood inline-block will-change-opacity">Childhood</span>
            <span className="word-curiosity inline-block font-medium text-white will-change-transform">Curiosity</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            {particlesArray.map((_, i) => {
              const diameter = 6 + (i % 8) * 3;
              return (
                <div
                  key={`spark-${i}`}
                  className="particle-dot absolute bg-white rounded-full will-change-transform"
                  style={{ width: `${diameter}px`, height: `${diameter}px` }}
                />
              );
            })}
          </div>
        </div>

        {/* =====================================================
            PHASE 3: THE REVEAL ENVIRONMENT (LIGHT MATTE STAGE)
        ====================================================== */}
        <div
          ref={revealLayerRef}
          className="absolute inset-0 z-20 overflow-hidden bg-[#f3efe7]"
        >
          {/* Geometrically mapped Background Canvas Grid */}
          <div className="bg-grid-dots absolute inset-0 opacity-0 bg-[radial-gradient(#102d29_1.5px,transparent_1.5px)] [background-size:28px_28px] pointer-events-none z-10 will-change-opacity" />

          {/* Typographic Core Layer */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 px-6 text-center">
            <h2 className="text-degree absolute text-[#102d29] text-2xl md:text-4xl font-semibold tracking-tight max-w-2xl leading-relaxed will-change-transform">
              Led me to a BCA Degree at Arunima...
            </h2>
            <h2 className="text-spark absolute text-[#102d29] text-2xl md:text-4xl font-semibold tracking-tight max-w-2xl leading-relaxed will-change-transform">
              Where a spark turned into a passion.
            </h2>
            <h2 className="text-web absolute text-[#102d29] text-3xl md:text-7xl font-black tracking-[-0.045em] max-w-3xl leading-none will-change-transform">
              Discovering Web Dev
            </h2>
          </div>

          {/* Connected Matrix Ring Assembly System */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
            {matrixDotsArray.map((_, i) => (
              <div
                key={`matrix-dot-${i}`}
                className={`matrix-dot matrix-dot-${i} absolute w-3 h-3 bg-[#102d29] rounded-full will-change-transform`}
              />
            ))}

            {/* Inner Core Display Message */}
            <div className="absolute flex w-[min(72vw,34rem)] items-center justify-center px-3 text-center">
              <p className="text-conceive absolute text-[#102d29] text-xl font-medium leading-snug tracking-wide will-change-transform">
                Learning from youtube
              </p>
              <p className="text-ideas absolute text-[clamp(1.45rem,7vw,3.25rem)] font-black uppercase leading-[0.95] tracking-[0.08em] text-[#102d29] will-change-transform sm:text-[clamp(2rem,5vw,3.25rem)] sm:tracking-[0.14em]">
                Fueled by Community
              </p>
            </div>

            {/* =====================================================
                NEW: GENERATIVE RANDOMIZED COMMUNITY BUBBLE MATRIX
            ====================================================== */}
<TooltipProvider delayDuration={150}>
  {COMMUNITY_CHANNELS.map((channel, idx) => (
    <div
      key={`community-position-${idx}`}
      className="channel-position pointer-events-none absolute left-1/2 top-1/2 z-50"
      style={{
        "--mobile-x": `${channel.mobile.x}px`,
        "--mobile-y": `${channel.mobile.y}px`,
        "--tablet-x": `${channel.tablet.x}px`,
        "--tablet-y": `${channel.tablet.y}px`,
        "--desktop-x": `${channel.desktop.x}px`,
        "--desktop-y": `${channel.desktop.y}px`,
        "--compact-x": `${channel.compact.x}px`,
        "--compact-y": `${channel.compact.y}px`,
      } as BubbleStyle}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${channel.name} on YouTube`}
            className={`channel-bubble channel-bubble-${idx} group pointer-events-auto relative flex h-full w-full cursor-pointer select-none items-center justify-center rounded-full border border-white/10 bg-[#102d29] shadow-lg transition-transform duration-300 will-change-transform hover:scale-105`}
          >
            {/* Red Glow Background Effect on Hover */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[#ff0000] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30" />

            {/* Channel Logo (Covers the whole container) */}
            <div className="relative z-10 h-full w-full overflow-hidden rounded-full">
              <Image
                src={channel.image}
                alt={`${channel.name} logo`}
                fill
                sizes="(max-width: 768px) 30vw, 10vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </a>
        </TooltipTrigger>
        
        {/* Shadcn Tooltip content styled exactly to match your design system */}
        <TooltipContent 
          side="top" 
          sideOffset={8}
          className="z-[60] bg-[#1e232a] border border-white/10 text-[#f3efe7] px-3 py-1.5 text-xs font-semibold shadow-xl"
        >
          {channel.name}
        </TooltipContent>
      </Tooltip>
    </div>
  ))}
</TooltipProvider>

            <style jsx global>{`
              .channel-position {
                --bubble-size: clamp(64px, 18vw, 82px);
                width: var(--bubble-size);
                height: var(--bubble-size);
                transform: translate3d(
                  calc(-50% + var(--mobile-x)),
                  calc(-50% + var(--mobile-y)),
                  0
                );
              }

              .channel-bubble:hover,
              .channel-bubble:focus-visible {
                box-shadow: 0 20px 30px -10px rgba(16, 45, 41, 0.45);
                transform: scale(1.08) !important;
              }

              .channel-bubble:focus-visible {
                outline: 3px solid rgba(255, 76, 63, 0.75);
                outline-offset: 4px;
              }

              @media (min-width: 640px) {
                .channel-position {
                  --bubble-size: clamp(88px, 12vw, 108px);
                  transform: translate3d(
                    calc(-50% + var(--tablet-x)),
                    calc(-50% + var(--tablet-y)),
                    0
                  );
                }
              }

              @media (min-width: 1024px) {
                .channel-position {
                  --bubble-size: 96px;
                  transform: translate3d(
                    calc(-50% + var(--desktop-x)),
                    calc(-50% + var(--desktop-y)),
                    0
                  );
                }
              }

              @media (max-height: 700px) and (max-width: 639px) {
                .channel-position {
                  --bubble-size: 68px;
                }
              }

              @media (max-height: 560px) {
                .channel-position {
                  --bubble-size: clamp(60px, 10vw, 72px);
                  transform: translate3d(
                    calc(-50% + var(--compact-x)),
                    calc(-50% + var(--compact-y)),
                    0
                  );
                }
              }
            `}</style>
          </div>
        </div>

        {/* =====================================================
            PHASE 4: WHITE RISING BRIDGE INTO DARK PRACTICAL TRACK
        ====================================================== */}
        <div
          ref={practicalPanelRef}
          className="pointer-events-none absolute inset-0 z-[90] overflow-hidden bg-white text-black will-change-transform"
        >
          <div className="practical-bg-dot pointer-events-none absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] opacity-0 [background-size:24px_24px]" />

          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden px-4 text-center">
            <div
              ref={practicalTextGroupRef}
              className="mx-auto flex max-w-[92vw] flex-row flex-wrap items-center justify-center gap-x-[clamp(0.4rem,1.8vw,1.15rem)] gap-y-2 whitespace-normal text-[clamp(1.75rem,9vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-black sm:whitespace-nowrap"
            >
              <span className="practical-word-from inline-block will-change-transform">
                From
              </span>
              <span className="practical-word-theory inline-block will-change-transform">
                Theory
              </span>
              <span className="practical-word-to inline-block font-light tracking-[-0.08em] will-change-transform">
                To
              </span>
              <span className="practical-word-practical inline-block will-change-transform">
                Practical
              </span>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden">
            {practicalParticlesArray.map((_, i) => {
              const diameter = 5 + (i % 9) * 3;

              return (
                <div
                  key={`practical-spark-${i}`}
                  className="practical-particle-dot absolute rounded-full bg-black will-change-transform"
                  style={{
                    width: `${diameter}px`,
                    height: `${diameter}px`,
                  }}
                />
              );
            })}
          </div>

          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center overflow-hidden">
            <div
              ref={practicalCenterDotRef}
              className="h-5 w-5 rounded-full bg-black will-change-transform"
            />
          </div>
        </div>
      </div>

      {/* Structural bottom offset pinning anchor track */}
      <div className="w-full h-screen bg-[#030303]" />
    </section>
  );
}

type JourneyPoint = {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  x: number;
  y: number;
};

const VIEWBOX_WIDTH = 1600;
const VIEWBOX_HEIGHT = 900;

const CENTER_X = VIEWBOX_WIDTH / 2;
const CENTER_Y = VIEWBOX_HEIGHT / 2;
const PAGE_GAP = 950;

const FINAL_TAIL_EXTRA = 1450;

const JOURNEY_POINTS: JourneyPoint[] = [
  {
    label: "Internship",
    eyebrow: "Clover Tech Nepal",
    title: "Learning Became Practice",
    description:
      "I joined Clover Tech Nepal as a Frontend Developer Intern and started working inside real projects, real teams, and real product workflows.",
    x: 250,
    y: CENTER_Y,
  },
  {
    label: "2024",
    eyebrow: "Full-Time Role",
    title: "Officially Joined As Frontend Developer",
    description:
      "In 2024, I officially joined Clover Tech Nepal as a Frontend Developer and started building professional product interfaces.",
    x: 430,
    y: CENTER_Y + PAGE_GAP,
  },
  {
    label: "2025",
    eyebrow: "Graduation",
    title: "Graduated in 2025",
    description:
      "In 2025, I completed my academic journey and strengthened the foundation that helped me grow further as a professional developer.",
    x: 260,
    y: CENTER_Y + PAGE_GAP * 2,
  },
  {
    label: "Now",
    eyebrow: "Independent Vector",
    title: "Full-Stack & Side Hustles",
    description:
      "Alongside my role, I also work independently as a full-stack developer, building side projects, client work, and real-world solutions.",
    x: 420,
    y: CENTER_Y + PAGE_GAP * 3,
  },
];

const LAST_POINT = JOURNEY_POINTS[JOURNEY_POINTS.length - 1];

const FINAL_DOT_X = CENTER_X;
const FINAL_DOT_Y = LAST_POINT.y + FINAL_TAIL_EXTRA;
const FINAL_WORLD_Y = FINAL_DOT_Y - CENTER_Y;

const DRAW_DURATION = JOURNEY_POINTS.length + 2.5;
const SECTION_PAGES = JOURNEY_POINTS.length + 4;

function buildJourneyPath(points: JourneyPoint[]) {
  let path = `M -220 ${points[0].y - 140}`;

  path += ` C -90 ${points[0].y - 70}, 40 ${points[0].y}, ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i += 1) {
    const current = points[i];
    const next = points[i + 1];
    const direction = i % 2 === 0 ? 1 : -1;

    path += ` C ${current.x + direction * 340} ${current.y + 260}, ${
      next.x - direction * 320
    } ${next.y - 260}, ${next.x} ${next.y}`;
  }

  path += ` C ${LAST_POINT.x + 260} ${LAST_POINT.y + 360}, ${
    CENTER_X - 460
  } ${LAST_POINT.y + 820}, ${CENTER_X - 150} ${FINAL_DOT_Y - 240}`;

  path += ` C ${CENTER_X - 60} ${FINAL_DOT_Y - 130}, ${FINAL_DOT_X} ${
    FINAL_DOT_Y - 50
  }, ${FINAL_DOT_X} ${FINAL_DOT_Y}`;

  return path;
}

const MASTER_JOURNEY_PATH = buildJourneyPath(JOURNEY_POINTS);

function JourneyPathStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const worldRef = useRef<SVGGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const tracerDotRef = useRef<SVGCircleElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const world = worldRef.current;
      const path = pathRef.current;
      const tracer = tracerDotRef.current;

      if (!section || !world || !path || !tracer) return;

      const pathLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.set(world, {
        y: 0,
      });

      gsap.set(".journey-follow-dot", {
        scale: 1,
        autoAlpha: 1,
        transformOrigin: "center center",
      });

      gsap.set(".journey-node-group", {
        autoAlpha: 0,
        scale: 0.35,
        transformOrigin: "center center",
      });

      gsap.set(".journey-horizontal-lane", {
        scaleX: 0,
        transformOrigin: "center center",
        opacity: 0,
      });

      gsap.set(".journey-info-card", {
        opacity: 0,
        y: 36,
        autoAlpha: 0,
      });

      gsap.set(".journey-final-anchor", {
        autoAlpha: 0,
        scale: 0,
        transformOrigin: "center center",
      });

      gsap.set(".journey-end-curtain", {
        clipPath: "circle(0% at 50% 50%)",
      });

      gsap.set(".journey-end-typography", {
        opacity: 0,
        y: 30,
      });

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(path, {
          strokeDashoffset: 0,
        });

        gsap.set(".journey-node-group", {
          autoAlpha: 1,
          scale: 1,
        });

        gsap.set(".journey-horizontal-lane", {
          scaleX: 1,
          opacity: 0.25,
        });

        gsap.set(".journey-info-card", {
          opacity: 1,
          y: 0,
          autoAlpha: 1,
        });

        return;
      }

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      masterTl
        .to(
          world,
          {
            y: -FINAL_WORLD_Y,
            duration: DRAW_DURATION,
            ease: "none",
          },
          0
        )
        .to(
          path,
          {
            strokeDashoffset: 0,
            duration: DRAW_DURATION,
            ease: "none",
          },
          0
        )
        .to(
          tracer,
          {
            motionPath: {
              path,
            },
            duration: DRAW_DURATION,
            ease: "none",
          },
          0
        );

      JOURNEY_POINTS.forEach((point, index) => {
        const pointProgress = (point.y - CENTER_Y) / FINAL_WORLD_Y;
        const entryTime = pointProgress * DRAW_DURATION;
        const nextPoint = JOURNEY_POINTS[index + 1];

        const exitTime = nextPoint
          ? ((nextPoint.y - CENTER_Y) / FINAL_WORLD_Y) * DRAW_DURATION - 0.25
          : DRAW_DURATION - 1.15;

        masterTl
          .to(
            `.node-group-${index}`,
            {
              autoAlpha: 1,
              scale: 1,
              duration: 0.35,
              ease: "back.out(1.7)",
            },
            entryTime
          )
          .to(
            `.lane-line-${index}`,
            {
              scaleX: 1,
              opacity: 0.25,
              duration: 0.45,
              ease: "power2.out",
            },
            entryTime + 0.05
          )
          .to(
            `.info-card-${index}`,
            {
              opacity: 1,
              autoAlpha: 1,
              y: 0,
              duration: 0.55,
              ease: "power3.out",
            },
            entryTime + 0.1
          );

        if (index !== JOURNEY_POINTS.length - 1) {
          masterTl.to(
            `.info-card-${index}`,
            {
              opacity: 0,
              autoAlpha: 0,
              y: -36,
              duration: 0.4,
              ease: "power2.in",
            },
            exitTime
          );
        }
      });

      masterTl
        .to(
          `.info-card-${JOURNEY_POINTS.length - 1}`,
          {
            opacity: 0,
            autoAlpha: 0,
            y: -36,
            duration: 0.4,
            ease: "power2.in",
          },
          DRAW_DURATION - 0.55
        )
        .to(
          ".journey-final-anchor",
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.35,
            ease: "back.out(2)",
          },
          DRAW_DURATION - 0.25
        )
        .to(
          tracer,
          {
            scale: 2.2,
            duration: 0.4,
            ease: "power4.inOut",
          },
          DRAW_DURATION
        )
        .to(
          ".journey-end-curtain",
          {
            clipPath: "circle(150% at 50% 50%)",
            duration: 1.2,
            ease: "power4.inOut",
          },
          DRAW_DURATION + 0.2
        )
        .to(
          ".journey-end-typography",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
          },
          DRAW_DURATION + 0.85
        );

      return () => {
        masterTl.kill();
      };
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full bg-[#030303] text-white"
      style={{
        height: `${SECTION_PAGES * 100}svh`,
      }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[#030303]">
        <svg
          viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-35 lg:opacity-100"
        >
          <g ref={worldRef}>
            {JOURNEY_POINTS.map((point, index) => (
              <g key={`track-lane-${index}`}>
                <line
                  className={`journey-horizontal-lane lane-line-${index} stroke-neutral-800`}
                  x1="-200"
                  x2={VIEWBOX_WIDTH + 200}
                  y1={point.y}
                  y2={point.y}
                  strokeWidth="1"
                />

                <text
                  x="40"
                  y={point.y - 40}
                  className={`journey-node-group node-group-${index} hidden fill-neutral-500 font-mono text-sm font-bold uppercase tracking-widest lg:block`}
                >
                  {point.label}
                </text>
              </g>
            ))}

            <path
              d={MASTER_JOURNEY_PATH}
              fill="none"
              className="stroke-neutral-900"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              ref={pathRef}
              d={MASTER_JOURNEY_PATH}
              fill="none"
              className="stroke-neutral-400 will-change-[stroke-dashoffset]"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {JOURNEY_POINTS.map((point, index) => (
              <g
                key={`anchor-node-${index}`}
                className={`journey-node-group node-group-${index}`}
              >
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="18"
                  className="fill-[#030303] stroke-neutral-500"
                  strokeWidth="3"
                />

                <circle
                  cx={point.x}
                  cy={point.y}
                  r="6"
                  className="fill-neutral-200"
                />
              </g>
            ))}

            <circle
              className="journey-final-anchor fill-neutral-200"
              cx={FINAL_DOT_X}
              cy={FINAL_DOT_Y}
              r="14"
            />

            <circle
              ref={tracerDotRef}
              className="journey-follow-dot fill-neutral-100 stroke-neutral-950 will-change-transform"
              r="10"
              cx="0"
              cy="0"
              strokeWidth="2.5"
            />
          </g>
        </svg>

        <div className="absolute inset-0 z-20">
          {JOURNEY_POINTS.map((point, index) => (
            <article
              key={`card-meta-${index}`}
              className={`journey-info-card info-card-${index} pointer-events-auto absolute inset-0 flex items-center justify-center px-4 text-center sm:px-8 md:px-16 lg:px-20`}
            >
              <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-4 rounded-2xl border border-neutral-800/50 bg-neutral-950/80 p-6 text-center shadow-2xl backdrop-blur-md sm:p-8 lg:p-10">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 sm:text-sm">
                  {point.eyebrow}
                </span>

                <h2 className="max-w-5xl text-center text-3xl font-black uppercase leading-[0.95] tracking-tight text-neutral-100 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  {point.title}
                </h2>

                <p className="mx-auto max-w-2xl text-center text-sm font-normal leading-relaxed text-neutral-400 sm:text-base md:text-lg lg:text-xl lg:leading-loose">
                  {point.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 -translate-x-1/2">
          <p className="animate-pulse font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-600">
            Scroll To Explore Track
          </p>
        </div>

        <div
          className="journey-end-curtain absolute inset-0 z-40 flex flex-col items-center justify-center bg-neutral-50 px-4 text-center text-neutral-900 will-change-[clip-path]"
          style={{
            clipPath: "circle(0% at 50% 50%)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] opacity-30 [background-size:20px_20px]" />

          <div className="max-w-2xl px-2">
            <p className="journey-end-typography mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-neutral-400 sm:text-xs">
              The Next Chapter
            </p>

            <h2 className="journey-end-typography mb-5 text-4xl font-black uppercase leading-[0.9] tracking-tight text-neutral-950 sm:text-6xl md:text-7xl">
              Let&apos;s Build Together
            </h2>

            <p className="journey-end-typography mx-auto mb-8 max-w-xl text-sm font-medium leading-relaxed text-neutral-600 sm:text-base md:text-lg">
              My engineering track doesn&apos;t stop here. Connect with me to
              build scalable production apps, independent architecture
              solutions, or modern interface products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function JourneyA() {
  return (
    <>
      <CommunityJourney />
      <JourneyPathStory />
    </>
  );
}
