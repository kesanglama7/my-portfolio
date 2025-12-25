import React, { useEffect, useMemo, useRef, useState } from "react";

type MousePos = { x: number; y: number };

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState<MousePos>({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const words = useMemo(
    () => ["Reliable", "Scalable", "Modern", "Performance"],
    []
  );

  // More professional floating snippets
  const codeSnippets = useMemo(
    () => [
      "export function buildExperience() {",
      "  return { quality: 'high', details: 'precise' }",
      "}",
      "type UI = 'clean' | 'accessible'",
      "const performance = 'optimized'",
      "/* maintainable architecture */",
      "<AppShell />",
      "pnpm build && pnpm start",
    ],
    []
  );

  // Smooth word swap: fade out -> switch -> fade in
  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsAnimating(true);

      // duration must match CSS animation timing below
      window.setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 220);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onLeave = () => setMousePosition({ x: 0, y: 0 });
    el.addEventListener("mouseleave", onLeave);
    return () => el.removeEventListener("mouseleave", onLeave);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    if (e.pointerType === "touch") return;

    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    const next = { x: nx * 20, y: ny * 20 };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setMousePosition(next));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-black overflow-hidden pt-12"
      onPointerMove={handlePointerMove}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20" />
      </div>

      {/* Floating code blocks */}
      <div className="absolute inset-0 overflow-hidden">
        {codeSnippets.map((snippet, i) => {
          const invertX = i % 2 ? 1 : -1;
          const invertY = i % 2 ? -1 : 1;

          return (
            <div
              key={i}
              className="absolute font-mono text-cyan-400/30 text-sm md:text-base whitespace-nowrap select-none code-float"
              style={{
                left: `${(i * 23) % 90}%`,
                top: `${(i * 17) % 80}%`,
                ["--mx" as any]: `${mousePosition.x * invertX}px`,
                ["--my" as any]: `${mousePosition.y * invertY}px`,
                animationDuration: `${8 + i}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {snippet}
            </div>
          );
        })}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 grid-tilt"
        style={{
          ["--gx" as any]: `${mousePosition.x * 0.5}deg`,
          ["--gy" as any]: `${mousePosition.y * 0.5}deg`,
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-5xl">
          {/* Professional label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-white/5 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-[12px] text-cyan-200 font-medium tracking-wide">
            Full Stack Developer
            </span>
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-[0.95]">
              Building{" "}
              <span className="relative inline-block align-baseline">
                {/* animated word wrapper */}
                  <span
                    key={currentWord}
                    className={`word-swap bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text ${
                      isAnimating ? "word-out" : "word-in"
                    }`}
                  >
                    {words[currentWord]}
                  </span>

                {/* <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 expand-bar" /> */}
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[0.95]">
              Digital Experiences
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-[14px] md:text-lg text-gray-300/80 mb-12 max-w-2xl mx-auto">
            I design and build high-quality web products with clean UI, strong performance, and maintainable architecture.
          </p>

          {/* CTA */}
          <div className="flex gap-6 justify-center items-center flex-wrap mb-16">
            <button className="group relative px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-cyan-400 animate-pulse opacity-20" />
            </button>

            <button className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-200 font-bold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400">
              Download Resume
            </button>
          </div>

          {/* Tech stack */}
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <div className="text-gray-500 text-sm font-mono">Tech:</div>
            {["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"].map((tech, i) => (
              <div
                key={tech}
                className="relative group cursor-pointer"
                style={{ animation: `fadeIn 0.5s ease-out ${i * 0.1}s backwards` }}
              >
                <div className="px-4 py-2 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/25 rounded text-cyan-200 text-sm font-mono backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      />

      <style jsx>{`
        .code-float {
          transform: translate(var(--mx, 0px), var(--my, 0px))
            translate(var(--fx, 0px), var(--fy, 0px));
          transition: transform 0.25s ease-out;
          animation-name: floatVars;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes floatVars {
          0%,
          100% {
            --fx: 0px;
            --fy: 0px;
          }
          25% {
            --fx: 10px;
            --fy: -20px;
          }
          75% {
            --fx: -10px;
            --fy: 20px;
          }
        }

        .grid-tilt {
          transform: perspective(500px) rotateX(var(--gy, 0deg))
            rotateY(var(--gx, 0deg));
          transition: transform 0.25s ease-out;
        }

        /* Word animation */
        .word-swap {
          display: inline-block;
          will-change: transform, opacity, filter;
          transform-origin: left center;
        }

        .word-in {
          animation: wordIn 320ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }

        .word-out {
          animation: wordOut 220ms cubic-bezier(0.4, 0, 1, 1) both;
        }

        @keyframes wordIn {
          from {
            opacity: 0;
            transform: translateY(12px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes wordOut {
          from {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
            filter: blur(6px);
          }
        }

        .expand-bar {
          transform-origin: left;
          animation: expandWidth 2s ease-in-out infinite;
        }

        @keyframes expandWidth {
          0%,
          100% {
            transform: scaleX(0);
            opacity: 0;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .code-float,
          .expand-bar,
          .word-in,
          .word-out {
            animation: none !important;
            transition: none !important;
          }
          .grid-tilt {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
