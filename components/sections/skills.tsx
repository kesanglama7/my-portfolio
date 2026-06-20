"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type SkillsProps = {
  isReady?: boolean;
};

type Skill = {
  name: string;
  image: string;
  initialRotation: number;
};

type Position = {
  x: number;
  y: number;
};

const SEARCH_TEXT = "what i know";
const HUB_POSITION_PERCENT = 55;

const SKILLS: Skill[] = [
  {
    name: "React",
    image: "/skills/react.png",
    initialRotation: -6,
  },
  {
    name: "Next.js",
    image: "/skills/next.png",
    initialRotation: 6,
  },
  {
    name: "TypeScript",
    image: "/skills/typescript.png",
    initialRotation: -4,
  },
  {
    name: "Tailwind CSS",
    image: "/skills/tailwind.png",
    initialRotation: 4,
  },
  {
    name: "GSAP",
    image: "/skills/gsap.png",
    initialRotation: 5,
  },
  {
    name: "Zustand",
    image: "/skills/zustand.png",
    initialRotation: -5,
  },
];

const BASE_WAVES = [
  "M-140 108C31 10 157 36 265 125C355 200 440 217 531 148C634 71 722 60 817 132C916 207 1019 201 1131 111C1215 44 1310 19 1433 74",
  "M-126 174C25 80 143 93 238 174C331 253 438 277 544 207C649 137 731 125 820 194C923 272 1031 265 1141 177C1234 102 1323 76 1439 126",
  "M-112 242C22 161 131 170 222 241C318 316 432 348 552 270C654 202 737 194 826 254C930 324 1045 331 1161 242C1250 174 1339 151 1451 200",
];


function MagnifierGraphic() {
  return (
    <div className="relative h-full w-full">
      <span
        className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-current sm:border-[6px]"
      />

      <span
        className="absolute left-[68%] top-[68%] h-[8%] w-[35%] origin-left rotate-45 rounded-full bg-current"
      />
    </div>
  );
}



function TopographicBackground() {
  const totalSets = 12;     
  const yOffsetStep = 75;   

  return (
    <div className="topography-background absolute inset-0 overflow-hidden bg-black">
      <div className="topography-camera absolute -inset-[8%] will-change-[filter,transform,opacity]">
        <svg
          aria-hidden="true"
          viewBox="0 0 1300 900"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <g>
            {Array.from({ length: totalSets }).map((_, setIndex) => {
              const currentYShift = setIndex * yOffsetStep;
              
              // NEW: Organic variance math
              // This subtly shifts lines left/right and expands them as they descend
              const xShift = Math.sin(setIndex) * 40; 
              const scaleX = 1 + setIndex * 0.1;     
              const scaleY = 1 + setIndex * 0.025;     

              return BASE_WAVES.map((path, waveIndex) => (
                <path
                  key={`wave-set-${setIndex}-path-${waveIndex}`}
                  d={path}
                  fill="none"
                  stroke="white"
                  strokeWidth="2.7"
                  strokeOpacity={Math.max(0.14 - setIndex * 0.008, 0.03)}
                  vectorEffect="non-scaling-stroke"
                  // Applies the translation AND the organic scale warp
                  transform={`translate(${xShift}, ${currentYShift}) scale(${scaleX}, ${scaleY})`}
                  style={{ transformOrigin: "center" }}
                />
              ));
            })}
          </g>
        </svg>
      </div>

      <div className="topography-vignette absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_43%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
}
export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const getElement = <T extends Element>(selector: string): T => {
        const element = section.querySelector<T>(selector);

        if (!element) {
          throw new Error(`Skills animation element not found: ${selector}`);
        }

        return element;
      };

      const getElements = <T extends Element>(selector: string): T[] => {
        return Array.from(section.querySelectorAll<T>(selector));
      };

      const searchStage = getElement<HTMLDivElement>(".search-stage");
      const searchShell = getElement<HTMLDivElement>(".search-shell");
      const searchText = getElement<HTMLDivElement>(".search-text");
      const searchLetters = getElements<HTMLSpanElement>(".search-letter");
      const searchCursor = getElement<HTMLSpanElement>(".search-cursor");
      const magnifierPosition = getElement<HTMLDivElement>(".magnifier-position");
      const magnifierScale = getElement<HTMLDivElement>(".magnifier-scale");
      const transitionVeil = getElement<HTMLDivElement>(".transition-veil");
      const lensPulse = getElement<HTMLDivElement>(".lens-pulse");
      const topographyCamera = getElement<HTMLDivElement>(".topography-camera");
      const topographyVignette = getElement<HTMLDivElement>(".topography-vignette");
      const treeStage = getElement<HTMLDivElement>(".tree-stage");
      const treeTrunk = getElement<HTMLDivElement>(".tree-trunk");
      const fallingBall = getElement<HTMLDivElement>(".falling-ball");
      const skillHub = getElement<HTMLDivElement>(".skill-hub");
      const hubDashedRing = getElement<HTMLDivElement>(".hub-dashed-ring");
      const hubIcon = getElement<HTMLDivElement>(".hub-icon");
      const branchLayer = getElement<SVGGElement>(".branch-layer");
      const branchPaths = getElements<SVGPathElement>(".branch-path");
      const skillNodes = getElements<HTMLDivElement>(".skill-node");
      const showcaseBlur = getElement<HTMLDivElement>(".showcase-blur");
      const worksWipe = getElement<HTMLDivElement>(".works-wipe");
      const worksIntroduction = getElement<HTMLDivElement>(".works-introduction");
      const worksWords = getElements<HTMLElement>(".works-word");
      const worksLine = getElement<HTMLDivElement>(".works-line");

      const isMobile = (): boolean => window.innerWidth < 640;

      const getSearchWidth = (): number => {
        if (window.innerWidth < 480) {
          return window.innerWidth * 0.84;
        }

        if (window.innerWidth < 768) {
          return Math.min(window.innerWidth * 0.78, 470);
        }

        return Math.min(window.innerWidth * 0.46, 640);
      };

      const getSearchHeight = (): number => {
        if (window.innerWidth < 480) {
          return 42;
        }

        if (window.innerWidth < 768) {
          return 46;
        }

        return 52;
      };

      const getSearchIconOffset = (): number => {
        const rightPadding = isMobile() ? 28 : 34;
        return getSearchWidth() / 2 - rightPadding;
      };

      const getMagnifierScale = (): number => {
        const diagonal = Math.sqrt(
          window.innerWidth ** 2 + window.innerHeight ** 2,
        );

        const iconWidth = magnifierScale.offsetWidth || 64;
        const circularLensDiameter = iconWidth * 0.58;

        return (diagonal / circularLensDiameter) * 1.42;
      };

      const getResponsiveLayout = (): Position[] => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const isShortLandscape = width > height && height < 620;

        if (isShortLandscape) {
          return [
            { x: 17, y: 24 },
            { x: 50, y: 20 },
            { x: 83, y: 24 },
            { x: 17, y: 82 },
            { x: 50, y: 86 },
            { x: 83, y: 82 },
          ];
        }

        if (width < 480) {
          return [
            { x: 22, y: 21 },
            { x: 78, y: 21 },
            { x: 18, y: 47 },
            { x: 82, y: 47 },
            { x: 26, y: 80 },
            { x: 74, y: 80 },
          ];
        }

        if (width < 768) {
          return [
            { x: 23, y: 23 },
            { x: 77, y: 23 },
            { x: 17, y: 49 },
            { x: 83, y: 49 },
            { x: 28, y: 80 },
            { x: 72, y: 80 },
          ];
        }

        if (width < 1100) {
          return [
            { x: 25, y: 25 },
            { x: 75, y: 25 },
            { x: 17, y: 50 },
            { x: 83, y: 50 },
            { x: 29, y: 79 },
            { x: 71, y: 79 },
          ];
        }

        return [
          { x: 27, y: 26 },
          { x: 73, y: 26 },
          { x: 18, y: 50 },
          { x: 82, y: 50 },
          { x: 30, y: 79 },
          { x: 70, y: 79 },
        ];
      };

      const applyResponsiveLayout = (): void => {
        const positions = getResponsiveLayout();

        skillNodes.forEach((node, index) => {
          const position = positions[index];
          if (!position) return;

          gsap.set(node, {
            left: `${position.x}%`,
            top: `${position.y}%`,
          });
        });
      };

      const updateBranchGeometry = (): void => {
        const hubX = skillHub.offsetLeft;
        const hubY = skillHub.offsetTop;
        const hubRadius = skillHub.offsetWidth / 2 + 7;

        branchPaths.forEach((path, index) => {
          const node = skillNodes[index];
          if (!node) return;

          const nodeX = node.offsetLeft;
          const nodeY = node.offsetTop;
          const deltaX = nodeX - hubX;
          const deltaY = nodeY - hubY;
          const distance = Math.max(
            Math.sqrt(deltaX * deltaX + deltaY * deltaY),
            1,
          );

          const unitX = deltaX / distance;
          const unitY = deltaY / distance;
          const icon = node.querySelector<HTMLElement>(".skill-icon");
          const nodeRadius = (icon?.offsetWidth ?? node.offsetWidth) / 2 + 8;
          const startX = hubX + unitX * hubRadius;
          const startY = hubY + unitY * hubRadius;
          const endX = nodeX - unitX * nodeRadius;
          const endY = nodeY - unitY * nodeRadius;
          const curveStrength = window.innerWidth < 640 ? 0.12 : 0.1;
          const perpendicularX = -unitY;
          const perpendicularY = unitX;
          const direction = index % 2 === 0 ? -1 : 1;
          const curveOffset = Math.min(36, distance * curveStrength) * direction;
          const controlOneX =
            startX + deltaX * 0.32 + perpendicularX * curveOffset;
          const controlOneY =
            startY + deltaY * 0.23 + perpendicularY * curveOffset;
          const controlTwoX =
            endX - deltaX * 0.25 + perpendicularX * curveOffset * 0.35;
          const controlTwoY =
            endY - deltaY * 0.18 + perpendicularY * curveOffset * 0.35;

          path.setAttribute(
            "d",
            [
              `M ${startX} ${startY}`,
              `C ${controlOneX} ${controlOneY}`,
              `${controlTwoX} ${controlTwoY}`,
              `${endX} ${endY}`,
            ].join(" "),
          );
        });
      };

      applyResponsiveLayout();
      updateBranchGeometry();

      gsap.set(searchStage, { autoAlpha: 1 });
      gsap.set(searchShell, {
        xPercent: -50,
        yPercent: -50,
        width: 30,
        height: 13,
        scale: 0.72,
        autoAlpha: 0,
        transformOrigin: "center center",
      });
      gsap.set(searchText, { autoAlpha: 1, x: 0 });
      gsap.set(searchLetters, { autoAlpha: 0, x: -2 });
      gsap.set(searchCursor, { autoAlpha: 0 });
      gsap.set(magnifierPosition, {
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
      });
      gsap.set(magnifierScale, {
        autoAlpha: 0,
        scale: 0.3,
        transformOrigin: "50% 50%",
      });
      gsap.set(transitionVeil, { autoAlpha: 0 });
      gsap.set(lensPulse, {
        xPercent: -50,
        yPercent: -50,
        autoAlpha: 0,
        scale: 0.25,
        transformOrigin: "50% 50%",
      });
      gsap.set(topographyCamera, {
        xPercent: 0,
        yPercent: 0,
        scale: 1.02,
        filter: "blur(0px)",
        opacity: 1,
        transformOrigin: "50% 50%",
      });
      gsap.set(topographyVignette, { opacity: 1 });
      gsap.set(treeStage, {
        autoAlpha: 0,
        visibility: "hidden",
        scale: 1,
        transformOrigin: `50% ${HUB_POSITION_PERCENT}%`,
      });
      gsap.set(treeTrunk, {
        xPercent: -50,
        scaleY: 0,
        autoAlpha: 0,
        transformOrigin: "top center",
      });
      gsap.set(fallingBall, {
        xPercent: -50,
        yPercent: -50,
        y: -40,
        scale: 0.62,
        autoAlpha: 0,
      });
      gsap.set(skillHub, {
        xPercent: -50,
        yPercent: -50,
        scale: 0.15,
        autoAlpha: 0,
      });
      gsap.set(hubDashedRing, { rotation: -40 });
      gsap.set(hubIcon, { scale: 0, rotation: -22 });
      gsap.set(branchLayer, {
        display: "none",
        visibility: "hidden",
        autoAlpha: 0,
      });
      gsap.set(branchPaths, {
        visibility: "hidden",
        autoAlpha: 0,
        strokeDasharray: 1,
        strokeDashoffset: 1,
      });

      skillNodes.forEach((node, index) => {
        const skill = SKILLS[index];
        gsap.set(node, {
          xPercent: -50,
          yPercent: -50,
          visibility: "hidden",
          autoAlpha: 0,
          scale: 0.25,
          y: 16,
          rotation: skill?.initialRotation ?? 0,
        });
      });

      gsap.set(showcaseBlur, { autoAlpha: 0 });
      gsap.set(worksWipe, {
        clipPath: `circle(0vmax at 50% ${HUB_POSITION_PERCENT}%)`,
      });
      gsap.set(worksIntroduction, { autoAlpha: 0, y: 42 });
      gsap.set(worksWords, { autoAlpha: 0, y: 22 });
      gsap.set(worksLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set(searchStage, { display: "none" });
        gsap.set(treeStage, { visibility: "visible", autoAlpha: 1 });
        gsap.set(treeTrunk, { autoAlpha: 1, scaleY: 1 });
        gsap.set(skillHub, { autoAlpha: 1, scale: 1 });
        gsap.set(hubIcon, { scale: 1, rotation: 0 });
        gsap.set(branchLayer, {
          display: "block",
          visibility: "visible",
          autoAlpha: 1,
        });
        gsap.set(branchPaths, {
          visibility: "visible",
          autoAlpha: 1,
          strokeDashoffset: 0,
        });
        gsap.set(skillNodes, {
          visibility: "visible",
          autoAlpha: 1,
          scale: 1,
          y: 0,
          rotation: 0,
        });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
           id: "skills-scroll-trigger",
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * 10}`,
          scrub: 0.85,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(
        topographyCamera,
        {
          xPercent: -1,
          yPercent: 0.55,
          scale: 1.045,
          duration: 8.8,
          ease: "none",
        },
        0,
      );

      timeline.to(
        searchShell,
        {
          autoAlpha: 1,
          scale: 1,
          width: getSearchWidth,
          height: getSearchHeight,
          duration: 0.58,
          ease: "power3.out",
        },
        0.08,
      );

      timeline.to(
        magnifierPosition,
        {
          x: getSearchIconOffset,
          duration: 0.5,
          ease: "power3.out",
        },
        0.14,
      );

      timeline.to(
        magnifierScale,
        {
          autoAlpha: 1,
          scale: 0.66,
          duration: 0.32,
          ease: "power3.out",
        },
        0.22,
      );

      timeline.to(searchCursor, { autoAlpha: 1, duration: 0.01 }, 0.72);

      timeline.to(
        searchLetters,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.026,
          stagger: 0.075,
          ease: "none",
        },
        0.78,
      );

      timeline.to(
        searchCursor,
        {
          autoAlpha: 0,
          duration: 0.11,
          repeat: 3,
          yoyo: true,
        },
        1.62,
      );

      timeline.to(
        searchShell,
        {
          width: () => getSearchWidth() * 1.06,
          duration: 0.36,
        },
        2.1,
      );

      timeline.to(
        magnifierPosition,
        {
          x: 0,
          y: 0,
          duration: 0.82,
          ease: "power3.inOut",
        },
        2.4,
      );

      timeline.to(
        magnifierScale,
        {
          scale: 1,
          duration: 0.82,
          ease: "power3.inOut",
        },
        2.4,
      );

      timeline.to(
        searchText,
        {
          x: -22,
          autoAlpha: 0.74,
          duration: 0.66,
        },
        2.44,
      );

      timeline.to(searchText, { autoAlpha: 0, duration: 0.26 }, 3.17);

      timeline.to(
        searchShell,
        {
          width: 116,
          scaleX: 0.68,
          autoAlpha: 0.5,
          duration: 0.5,
          ease: "power3.inOut",
        },
        3.14,
      );

      timeline.to(
        magnifierScale,
        {
          scale: 1.7,
          duration: 0.5,
          ease: "power3.inOut",
        },
        3.14,
      );

      timeline.to(
        searchShell,
        {
          width: 40,
          height: 17,
          scaleX: 0.18,
          autoAlpha: 0,
          duration: 0.42,
        },
        3.54,
      );

      timeline.to(
        lensPulse,
        {
          autoAlpha: 0.3,
          scale: 1,
          duration: 0.36,
          ease: "power2.out",
        },
        3.48,
      );

      timeline.to(transitionVeil, { autoAlpha: 1, duration: 0.5 }, 3.64);

      timeline.to(
        magnifierScale,
        {
          scale: 4.1,
          duration: 0.68,
          ease: "power3.inOut",
        },
        3.58,
      );

      timeline.to(
        lensPulse,
        {
          autoAlpha: 0.12,
          scale: 4.6,
          duration: 0.74,
        },
        3.72,
      );

      timeline.to(
        magnifierScale,
        {
          scale: getMagnifierScale,
          duration: 1.08,
          ease: "power3.inOut",
        },
        4.1,
      );

      timeline.set(treeStage, { visibility: "visible" }, 4.56);
      timeline.to(treeStage, { autoAlpha: 1, duration: 0.34 }, 4.56);

      timeline.to(
        treeTrunk,
        {
          autoAlpha: 1,
          scaleY: 1,
          duration: 0.92,
          ease: "power2.out",
        },
        4.64,
      );

      timeline.to(
        fallingBall,
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.16,
        },
        4.84,
      );

      timeline.to(
        fallingBall,
        {
          y: () => window.innerHeight * (HUB_POSITION_PERCENT / 100),
          duration: 0.94,
          ease: "power2.inOut",
        },
        4.84,
      );

      timeline.to(
        magnifierScale,
        {
          autoAlpha: 0,
          duration: 0.36,
          ease: "power2.out",
        },
        4.98,
      );

      timeline.to(lensPulse, { autoAlpha: 0, duration: 0.42 }, 4.98);
      timeline.to(transitionVeil, { autoAlpha: 0, duration: 0.58 }, 5.06);
      timeline.to(searchStage, { autoAlpha: 0, duration: 0.16 }, 5.2);

      timeline.to(
        fallingBall,
        {
          scale: 0.7,
          backgroundColor: "#e4e4e4",
          duration: 0.24,
        },
        5.7,
      );

      timeline.to(
        skillHub,
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.46,
          ease: "back.out(1.6)",
        },
        5.76,
      );

      timeline.to(
        fallingBall,
        {
          autoAlpha: 0,
          scale: 0.2,
          duration: 0.22,
        },
        5.88,
      );

      timeline.to(
        hubIcon,
        {
          scale: 1,
          rotation: 0,
          duration: 0.42,
          ease: "back.out(1.8)",
        },
        5.94,
      );

      timeline.to(
        hubDashedRing,
        {
          rotation: 82,
          duration: 2.5,
          ease: "none",
        },
        5.92,
      );

      timeline.set(
        branchLayer,
        {
          display: "block",
          visibility: "visible",
        },
        6.22,
      );

      timeline.to(branchLayer, { autoAlpha: 1, duration: 0.12 }, 6.22);

      timeline.set(
        branchPaths,
        {
          visibility: "visible",
          autoAlpha: 1,
        },
        6.24,
      );

      timeline.to(
        branchPaths,
        {
          strokeDashoffset: 0,
          duration: 1.05,
          stagger: {
            each: 0.12,
            from: "start",
          },
          ease: "power2.inOut",
        },
        6.26,
      );

      branchPaths.forEach((_, index) => {
        const skillNode = skillNodes[index];
        if (!skillNode) return;

        const nodeStart = 6.68 + index * 0.12;

        timeline.set(skillNode, { visibility: "visible" }, nodeStart);

        timeline.to(
          skillNode,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 0.52,
            ease: "back.out(1.5)",
          },
          nodeStart,
        );
      });

      timeline.addLabel("skillsShowcase", 8.1);

      timeline.to({}, { duration: 0.78 }, 8.26);

      timeline.to(
        topographyCamera,
        {
          filter: "blur(12px)",
          scale: 1.075,
          opacity: 0.58,
          duration: 0.78,
          ease: "power2.inOut",
        },
        8.84,
      );

      timeline.to(topographyVignette, { opacity: 0.76, duration: 0.78 }, 8.84);
      timeline.to(showcaseBlur, { autoAlpha: 1, duration: 0.62 }, 8.9);

      timeline.to(
        worksWipe,
        {
          clipPath: `circle(13vmax at 50% ${HUB_POSITION_PERCENT}%)`,
          duration: 0.32,
          ease: "power2.in",
        },
        9.3,
      );

      timeline.to(
        worksWipe,
        {
          clipPath: `circle(165vmax at 50% ${HUB_POSITION_PERCENT}%)`,
          duration: 0.8,
          ease: "power3.inOut",
        },
        9.55,
      );

      timeline.to(treeStage, { autoAlpha: 0, duration: 0.3 }, 9.78);

      timeline.to(
        worksIntroduction,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.74,
          ease: "power3.out",
        },
        10.14,
      );

      timeline.to(
        worksWords,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.09,
          ease: "power3.out",
        },
        10.24,
      );

      timeline.to(
        worksLine,
        {
          scaleX: 1,
          duration: 0.72,
          ease: "power3.out",
        },
        10.4,
      );

      timeline.to({}, { duration: 0.85 }, 11);

      let resizeFrame = 0;

      const refreshLayout = (): void => {
        applyResponsiveLayout();
        updateBranchGeometry();
      };

      const handleResize = (): void => {
        window.cancelAnimationFrame(resizeFrame);

        resizeFrame = window.requestAnimationFrame(() => {
          refreshLayout();
          ScrollTrigger.refresh();
        });
      };

      const handleRefreshInit = (): void => {
        refreshLayout();
      };

      const handleRefresh = (): void => {
        updateBranchGeometry();
      };

      window.addEventListener("resize", handleResize);
      ScrollTrigger.addEventListener("refreshInit", handleRefreshInit);
      ScrollTrigger.addEventListener("refresh", handleRefresh);

      requestAnimationFrame(() => {
        refreshLayout();
        ScrollTrigger.refresh();
      });

      return () => {
        window.cancelAnimationFrame(resizeFrame);
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.removeEventListener("refreshInit", handleRefreshInit);
        ScrollTrigger.removeEventListener("refresh", handleRefresh);
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    },
    {
      scope: sectionRef,
      dependencies: [],
      revertOnUpdate: true,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative z-20 h-[100svh] w-full overflow-hidden bg-black text-white"
    >
      <h2 className="sr-only">My skills</h2>

      <TopographicBackground />

      <div 
        className="tree-stage pointer-events-none invisible absolute inset-0 z-10 opacity-0 will-change-transform"
        style={{ visibility: "hidden", opacity: 0 }}
      >
        <div
          className="tree-trunk absolute left-1/2 top-0 w-px bg-white/90 opacity-0"
          style={{ height: `${HUB_POSITION_PERCENT}%` }}
        />

        <div className="falling-ball absolute left-1/2 top-0 h-11 w-11 rounded-full bg-white opacity-0 shadow-[0_0_24px_rgba(255,255,255,0.18)] sm:h-14 sm:w-14 lg:h-16 lg:w-16" />

        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <g
            className="branch-layer"
            style={{ display: "none", visibility: "hidden", opacity: 0 }}
          >
            {SKILLS.map((skill) => (
              <path
                key={`branch-${skill.name}`}
                className="branch-path"
                d="M 0 0"
                pathLength="1"
                fill="none"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1"
                strokeDashoffset="1"
                opacity="0"
                visibility="hidden"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </g>
        </svg>

        <div 
          className="skill-hub absolute left-1/2 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#202020] opacity-0 shadow-[0_0_0_15px_rgba(31,31,31,0.98)] sm:h-[84px] sm:w-[84px] sm:shadow-[0_0_0_20px_rgba(31,31,31,0.98)] lg:h-[94px] lg:w-[94px] lg:shadow-[0_0_0_24px_rgba(31,31,31,0.98)]"
          style={{ top: `${HUB_POSITION_PERCENT}%` }}
        >
          <div className="hub-dashed-ring absolute -inset-3 rounded-full border border-dashed border-white/85 sm:-inset-4" />

          <div className="hub-icon flex h-9 w-9 items-center justify-center rounded-full border border-white/75 bg-[#161616] font-mono text-[9px] font-bold tracking-[-0.08em] sm:h-11 sm:w-11 sm:text-[11px] lg:h-12 lg:w-12 lg:text-xs">
            {"</>"}
          </div>
        </div>

        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="skill-node invisible absolute z-20 flex flex-col items-center opacity-0 will-change-transform"
            style={{
              left: "50%",
              top: "50%",
              visibility: "hidden",
              opacity: 0,
            }}
          >
            <div className="skill-icon relative h-11 w-11 overflow-hidden rounded-lg border border-white/75 bg-black/85 shadow-[0_10px_28px_rgba(0,0,0,0.45)] backdrop-blur-md sm:h-14 sm:w-14 lg:h-16 lg:w-16">
              <Image
                src={skill.image}
                alt={skill.name}
                fill
                draggable={false}
                sizes="(max-width: 640px) 44px, (max-width: 1024px) 56px, 64px"
                className="object-contain p-2 sm:p-2.5 lg:p-3"
              />
            </div>

            <span className="mt-1.5 max-w-[86px] text-center text-[8px] font-medium uppercase leading-tight tracking-[0.11em] text-white/75 sm:mt-2 sm:max-w-[105px] sm:text-[9px] lg:text-[10px] lg:tracking-[0.14em]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <div className="transition-veil pointer-events-none absolute inset-0 z-[15] opacity-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025)_0%,rgba(0,0,0,0.08)_34%,rgba(0,0,0,0.5)_100%)]" />

      <div className="lens-pulse pointer-events-none absolute left-1/2 top-1/2 z-[16] h-24 w-24 rounded-full border border-white/20 bg-white/[0.02] opacity-0 shadow-[0_0_90px_rgba(255,255,255,0.12)] sm:h-28 sm:w-28" />

      <div  className="search-stage absolute inset-0 z-20">
        <div className="search-shell absolute left-1/2 top-1/2 overflow-hidden rounded-full border-2 border-white/95 bg-black/30 opacity-0 backdrop-blur-[2px] will-change-[width,height,transform,opacity]">
          <div className="search-text absolute inset-y-0 left-0 flex items-center whitespace-nowrap px-4 pr-14 text-[12px] font-semibold lowercase tracking-[-0.03em] sm:px-5 sm:pr-16 sm:text-sm md:px-6 md:pr-20 md:text-base">
          {SEARCH_TEXT.split("").map((letter, index) => {
            // Check if we are currently rendering the very last letter
            const isLastLetter = index === SEARCH_TEXT.length - 1;

            return (
              <span
                key={`${letter}-${index}`}
                className="search-letter inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
                
                {/* Directly injected cursor: Only renders after the last letter */}
                {isLastLetter && (
                  <span className="search-cursor ml-[4px] inline-block h-[1.15em] w-[2px] translate-y-[3px] bg-white animate-pulse" />
                )}
              </span>
            );
          })}
        </div>
        </div>

        <div className="magnifier-position pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 sm:h-16 sm:w-16">
          <div className="magnifier-scale h-full w-full text-white opacity-0 will-change-transform">
            <MagnifierGraphic />
          </div>
        </div>
      </div>

      <div className="showcase-blur pointer-events-none absolute inset-0 z-[5] bg-black/10 opacity-0 backdrop-blur-[2px]" />

      <div
        className="works-wipe absolute inset-0 z-50 overflow-hidden bg-[#f1f1ef] text-neutral-950 will-change-[clip-path]"
        style={{
          clipPath: `circle(0vmax at 50% ${HUB_POSITION_PERCENT}%)`,
        }}
      >
        <div className="works-introduction flex h-full w-full items-center px-6 opacity-0 sm:px-10 lg:px-20">
          <div className="mx-auto w-full max-w-7xl">
            <p className="works-word mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 opacity-0 sm:text-sm">
              Selected projects
            </p>

            <h3 className="works-word text-[clamp(3.5rem,11vw,10rem)] font-bold leading-[0.82] tracking-[-0.075em] opacity-0">
              Works
            </h3>

            <div className="works-line mt-8 h-px w-full origin-left scale-x-0 bg-neutral-950/25" />
          </div>
        </div>
      </div>
    </section>
  );
}
