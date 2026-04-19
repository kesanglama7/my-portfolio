"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowLeft, Link as LinkIcon, MousePointer2, Zap, Users, Wrench, BookOpen, Target } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { PROJECTS } from "@/lib/static_data/project-data";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// ─── Wobbly border radius presets ───────────────────────────────────────────
const WB = {
  card:   "255px 15px 225px 15px / 15px 225px 15px 255px",
  sm:     "15px 225px 15px 255px / 225px 15px 255px 15px",
  tag:    "120px 8px 100px 8px / 8px 100px 8px 120px",
  stamp:  "4px 60px 4px 60px / 60px 4px 60px 4px",
};

// ─── Ink-stroke underline SVG ────────────────────────────────────────────────
function InkUnderline({ color = "#ff4d4d" }: { color?: string }) {
  return (
    <svg viewBox="0 0 200 12" className="w-full h-3 mt-1" preserveAspectRatio="none">
      <path
        d="M2,8 C30,2 60,11 90,6 C120,1 150,10 198,5"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Tape decoration ─────────────────────────────────────────────────────────
function Tape({ rotate = "-2deg", top = "-14px", left = "50%", translateX = "-50%" }: {
  rotate?: string; top?: string; left?: string; translateX?: string;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top,
        left,
        transform: `translateX(${translateX}) rotate(${rotate})`,
        width: "90px",
        height: "26px",
        backgroundColor: "rgba(45,45,45,0.1)",
        border: "1.5px solid rgba(45,45,45,0.2)",
        borderRadius: "3px",
        zIndex: 10,
      }}
    />
  );
}

// ─── Margin ruler ─────────────────────────────────────────────────────────────
function MarginRuler({ progress }: { progress: any }) {
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="fixed left-0 top-0 h-full w-8 hidden lg:flex flex-col items-center z-50 pointer-events-none">
      {/* Red margin line */}
      <div className="absolute left-6 top-0 h-full w-[2px] bg-[#ff4d4d]/20" />
      {/* Pencil progress line */}
      <motion.div
        className="absolute left-6 top-0 w-[2px] bg-[#2d2d2d] origin-top"
        style={{ height }}
      />
      {/* Notebook holes */}
      {[10, 30, 50, 70, 90].map((pct) => (
        <div
          key={pct}
          className="absolute w-3 h-3 rounded-full border-2 border-[#2d2d2d]/20 bg-[var(--color-paper)]"
          style={{ top: `${pct}%` }}
        />
      ))}
    </div>
  );
}

// ─── Tech stack marquee ───────────────────────────────────────────────────────
function TechMarquee({ stack }: { stack: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const totalW = el.scrollWidth / 2;

    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: -totalW,
        duration: 18,
        ease: "none",
        repeat: -1,
      }
    );
  }, []);

  const colors = ["#fff9c4", "#ffffff", "#fde8e8", "#e8f0fe"];
  const rotations = [-2, 1, -1, 2, -3, 1.5];
  const doubled = [...stack, ...stack];

  return (
    <div className="overflow-hidden py-4 -mx-4 md:-mx-10 relative">
      {/* fade edges */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[var(--color-paper)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[var(--color-paper)] to-transparent z-10 pointer-events-none" />
      <div ref={trackRef} className="flex gap-4 w-max">
        {doubled.map((tech, i) => (
          <motion.div
            key={`${tech}-${i}`}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
            style={{
              rotate: rotations[i % rotations.length],
              backgroundColor: colors[i % colors.length],
              borderRadius: WB.tag,
              border: "2.5px solid #2d2d2d",
              boxShadow: "3px 3px 0px 0px #2d2d2d",
              padding: "8px 20px",
              fontFamily: "'Patrick Hand', cursive",
              fontSize: "15px",
              fontWeight: "700",
              color: "#2d2d2d",
              whiteSpace: "nowrap",
              cursor: "default",
              flexShrink: 0,
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Scribble section header ──────────────────────────────────────────────────
function SectionLabel({ icon: Icon, label, color = "#2d2d2d" }: {
  icon: any; label: string; color?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "2.5px solid #2d2d2d",
          boxShadow: "2px 2px 0px 0px #2d2d2d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          flexShrink: 0,
        }}
      >
        <Icon size={18} strokeWidth={2.5} color={color} />
      </div>
      <div>
        <p
          style={{
            fontFamily: "'Kalam', cursive",
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#2d2d2d",
            opacity: 0.4,
            margin: 0,
          }}
        >
          {label}
        </p>
        <InkUnderline color={color} />
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return notFound();

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const briefRef = useRef<HTMLDivElement>(null);
  const buildRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  // Parallax for hero
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, -80]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);

  // ── GSAP: Hero title character-by-character write-on ──────────────────────
  useEffect(() => {
    if (!titleRef.current) return;

    const chars = project.title.split("");
    titleRef.current.textContent = "";

    const tl = gsap.timeline({ delay: 0.3 });

    chars.forEach((char, i) => {
      tl.to(titleRef.current, {
        duration: char === " " ? 0.05 : 0.07,
        text: { value: project.title.slice(0, i + 1), delimiter: "" },
        ease: "none",
      });
    });

    // Category stamp reveal
    gsap.fromTo(
      categoryRef.current,
      { opacity: 0, rotate: -8, scale: 0.7 },
      { opacity: 1, rotate: 2, scale: 1, duration: 0.5, delay: 0.8, ease: "back.out(1.5)" }
    );

    // Hide scroll hint after 3s
    const timer = setTimeout(() => setShowScrollHint(false), 3000);
    return () => clearTimeout(timer);
  }, [project.title]);

  // ── GSAP: Scroll-triggered section reveals ─────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Media card draw-in
      gsap.fromTo(
        mediaRef.current,
        { opacity: 0, y: 60, rotate: -4 },
        {
          opacity: 1, y: 0, rotate: -1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mediaRef.current,
            start: "top 80%",
          },
        }
      );

      // Brief card
      gsap.fromTo(
        briefRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: briefRef.current,
            start: "top 85%",
          },
        }
      );

      // Build section
      gsap.fromTo(
        buildRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buildRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="bg-[var(--color-paper)] min-h-screen relative overflow-x-hidden"
      style={{
        backgroundImage: "radial-gradient(#e5e0d8 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Margin ruler */}
      <MarginRuler progress={smoothProgress} />

      {/* ── STICKY NAV ───────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-[100] px-6 lg:px-16 py-4 flex justify-between items-center bg-[var(--color-paper)]/70 backdrop-blur-md border-b-2 border-dashed border-[var(--color-pencil)]/15">
        <Link
          href="/portfolio"
          className="font-heading text-base flex items-center gap-2 hover:text-[var(--color-marker)] transition-colors group"
        >
          <ArrowLeft size={18} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline tracking-wider uppercase text-sm">Back to Archive</span>
        </Link>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              style={{
                width: 38, height: 38,
                borderRadius: "50%",
                border: "2.5px solid #2d2d2d",
                boxShadow: "2px 2px 0px 0px #2d2d2d",
                display: "flex", alignItems: "center", justifyContent: "center",
                backgroundColor: "#fff",
                transition: "all 0.15s",
              }}
              className="hover:bg-[var(--color-pencil)] hover:text-white"
            >
              <FaGithub size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Site"
              style={{
                width: 38, height: 38,
                borderRadius: "50%",
                border: "2.5px solid #2d2d2d",
                boxShadow: "2px 2px 0px 0px #2d2d2d",
                display: "flex", alignItems: "center", justifyContent: "center",
                backgroundColor: "#ff4d4d",
                color: "#fff",
                transition: "all 0.15s",
              }}
            >
              <LinkIcon size={16} strokeWidth={2.5} />
            </a>
          )}
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-[80vh] flex flex-col justify-center px-6 lg:px-20 pt-12 pb-8 relative"
      >
        {/* Category stamp */}
        <div
          ref={categoryRef}
          aria-label={`Category: ${project.category}`}
          style={{
            display: "inline-block",
            alignSelf: "flex-start",
            backgroundColor: "#ff4d4d",
            color: "#fff",
            fontFamily: "'Kalam', cursive",
            fontSize: "13px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "5px 16px",
            borderRadius: WB.stamp,
            border: "2px solid #2d2d2d",
            boxShadow: "3px 3px 0px 0px #2d2d2d",
            marginBottom: "24px",
            opacity: 0,
          }}
        >
          {project.category}
        </div>

        {/* Main title — GSAP writes it */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: "'Kalam', cursive",
            fontWeight: 700,
            fontSize: "clamp(3rem, 10vw, 8rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            color: "#2d2d2d",
            maxWidth: "900px",
            minHeight: "1em",
          }}
        >
          {/* GSAP fills this */}
        </h1>

        {/* Ink underline decoration */}
        <div className="max-w-[600px] mt-2">
          <InkUnderline color="#2d5da1" />
        </div>

        {/* Role tag */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#fff9c4",
              border: "2px solid #2d2d2d",
              borderRadius: WB.tag,
              boxShadow: "3px 3px 0px 0px #2d2d2d",
              padding: "8px 20px",
              fontFamily: "'Patrick Hand', cursive",
              fontSize: "15px",
              color: "#2d2d2d",
              transform: "rotate(-1deg)",
            }}
          >
            <Users size={15} strokeWidth={2.5} />
            {project.role}
          </div>
        </div>

        {/* Scroll hint */}
        <AnimatePresence>
          {showScrollHint && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, 8, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
              aria-hidden="true"
            >
              <p
                style={{
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: "12px",
                  color: "#2d2d2d",
                  opacity: 0.4,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                scroll to explore
              </p>
              <div
                style={{
                  width: 24, height: 36,
                  border: "2px solid rgba(45,45,45,0.3)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: "4px",
                }}
              >
                <motion.div
                  animate={{ y: [0, 14, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  style={{
                    width: 6, height: 6,
                    borderRadius: "50%",
                    backgroundColor: "#2d2d2d",
                    opacity: 0.4,
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* ── CONTENT BODY ─────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 pb-40 space-y-24 lg:space-y-36">

        {/* ── MEDIA PINBOARD ─────────────────────────────────────────────── */}
        <div ref={mediaRef} className="relative opacity-0">
          {/* Decorative pin */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "#ff4d4d",
              border: "3px solid #c0392b",
              boxShadow: "2px 2px 0px 0px #2d2d2d",
              zIndex: 20,
            }}
          />
          <Tape rotate="-1.5deg" />

          <motion.div
            whileHover={{ rotate: 0, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{
              backgroundColor: "#fff",
              border: "4px solid #2d2d2d",
              borderRadius: WB.card,
              boxShadow: "8px 8px 0px 0px #2d2d2d",
              padding: "12px",
              rotate: "-1deg",
            }}
          >
            {project.thumbnail.type === "video" ? (
              <video
                src={project.thumbnail.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
                style={{ border: "2px solid rgba(45,45,45,0.1)", borderRadius: "4px" }}
              />
            ) : project.thumbnail.type === "image" ? (
              <img
                src={project.thumbnail.url}
                alt={`${project.title} screenshot`}
                className="w-full h-auto"
                style={{ border: "2px solid rgba(45,45,45,0.1)", borderRadius: "4px" }}
              />
            ) : (
              <div
                className="aspect-video flex flex-col items-center justify-center gap-3"
                style={{ backgroundColor: "#e5e0d8" }}
              >
                <MousePointer2 size={40} strokeWidth={1.5} style={{ opacity: 0.3 }} />
                <p
                  style={{
                    fontFamily: "'Kalam', cursive",
                    fontSize: "14px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    opacity: 0.3,
                  }}
                >
                  Visual Archive Pending
                </p>
              </div>
            )}
          </motion.div>

          {/* Description caption below photo */}
          <p
            style={{
              fontFamily: "'Patrick Hand', cursive",
              fontSize: "15px",
              color: "#2d2d2d",
              opacity: 0.5,
              textAlign: "center",
              marginTop: "12px",
              fontStyle: "italic",
            }}
          >
            ↑ {project.description}
          </p>
        </div>

        {/* ── BRIEF + ROLE ──────────────────────────────────────────────────── */}
        <div ref={briefRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0">

          {/* The Brief */}
          <motion.div
            whileHover={{ rotate: 0 }}
            style={{
              backgroundColor: "#fff",
              border: "3px solid #2d2d2d",
              borderRadius: WB.sm,
              boxShadow: "5px 5px 0px 0px #2d2d2d",
              padding: "28px 32px",
              rotate: "-1deg",
              position: "relative",
            }}
          >
            <Tape rotate="1.5deg" left="30px" translateX="0" />
            <SectionLabel icon={Target} label="The Brief" color="#ff4d4d" />
            <p
              style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: "18px",
                lineHeight: 1.65,
                color: "#2d2d2d",
                fontStyle: "italic",
              }}
            >
              "{project.purpose}"
            </p>
          </motion.div>

          {/* Role — post-it */}
          <div className="flex flex-col gap-6">
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              style={{
                backgroundColor: "#fff9c4",
                border: "3px solid #2d2d2d",
                borderRadius: WB.card,
                boxShadow: "5px 5px 0px 0px #2d2d2d",
                padding: "24px 28px",
                rotate: "1.5deg",
              }}
            >
              <SectionLabel icon={Users} label="My Role" color="#2d5da1" />
              <p
                style={{
                  fontFamily: "'Kalam', cursive",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "#2d2d2d",
                  lineHeight: 1.3,
                }}
              >
                {project.role}
              </p>
            </motion.div>

            {/* Status pill */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                alignSelf: "flex-start",
                backgroundColor: project.liveUrl ? "#d4edda" : "#e5e0d8",
                border: "2.5px solid #2d2d2d",
                borderRadius: WB.tag,
                boxShadow: "3px 3px 0px 0px #2d2d2d",
                padding: "10px 22px",
                rotate: "-2deg",
              }}
            >
              <div
                style={{
                  width: 10, height: 10,
                  borderRadius: "50%",
                  backgroundColor: project.liveUrl ? "#27ae60" : "#95a5a6",
                  boxShadow: project.liveUrl ? "0 0 0 3px rgba(39,174,96,0.25)" : "none",
                }}
              />
              <span
                style={{
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#2d2d2d",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {project.liveUrl ? "Live & Deployed" : "Local / Archive"}
              </span>
            </motion.div>
          </div>
        </div>

        {/* ── TECH STACK MARQUEE ─────────────────────────────────────────── */}
        <section>
          <SectionLabel icon={Wrench} label="Tools of the Trade" color="#2d2d2d" />
          <TechMarquee stack={project.techStack} />
        </section>

        {/* ── BUILD ARCHITECTURE ─────────────────────────────────────────── */}
        <section ref={buildRef} className="opacity-0">
          <div
            style={{
              position: "relative",
              backgroundColor: "#2d2d2d",
              border: "4px solid #2d2d2d",
              borderRadius: WB.card,
              boxShadow: "8px 8px 0px 0px #ff4d4d",
              padding: "40px 36px",
              overflow: "hidden",
            }}
          >
            {/* Dot grid on dark bg */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                pointerEvents: "none",
              }}
            />

            {/* Tape on dark card */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-12px",
                right: "60px",
                width: "80px",
                height: "24px",
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1.5px solid rgba(255,255,255,0.2)",
                borderRadius: "3px",
                transform: "rotate(1.5deg)",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div
                  style={{
                    width: 40, height: 40,
                    borderRadius: "50%",
                    border: "2.5px solid rgba(255,255,255,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff9c4",
                  }}
                >
                  <Zap size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Kalam', cursive",
                      fontSize: "11px",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)",
                      margin: 0,
                    }}
                  >
                    Build Architecture
                  </p>
                  <svg viewBox="0 0 200 10" style={{ width: "100%", maxWidth: "200px", height: "10px" }}>
                    <path
                      d="M2,6 C40,2 80,9 120,5 C160,1 180,8 198,4"
                      fill="none"
                      stroke="#2d5da1"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.88)",
                  maxWidth: "820px",
                }}
              >
                {project.howItWasBuilt}
              </p>

              {/* Footer metadata */}
              <div
                style={{
                  marginTop: "32px",
                  paddingTop: "20px",
                  borderTop: "1px dashed rgba(255,255,255,0.12)",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "24px",
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.35)",
                  fontStyle: "italic",
                  letterSpacing: "0.05em",
                }}
              >
                <span>ID: {project.id}</span>
                <span>Stack: {project.techStack[0]} + {project.techStack.length - 1} more</span>
                <span>Status: {project.liveUrl ? "✓ Deployed" : "Local Archive"}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── LINK BUTTONS ─────────────────────────────────────────────────── */}
        {(project.githubUrl || project.liveUrl) && (
          <section className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, boxShadow: "6px 6px 0px 0px #2d2d2d" }}
                whileTap={{ y: 0, boxShadow: "1px 1px 0px 0px #2d2d2d" }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#fff",
                  border: "3px solid #2d2d2d",
                  borderRadius: WB.sm,
                  boxShadow: "4px 4px 0px 0px #2d2d2d",
                  padding: "14px 32px",
                  fontFamily: "'Kalam', cursive",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#2d2d2d",
                  textDecoration: "none",
                  transition: "all 0.12s",
                  cursor: "pointer",
                }}
              >
                <FaGithub size={20} />
                View Source
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, boxShadow: "6px 6px 0px 0px #2d2d2d" }}
                whileTap={{ y: 0, boxShadow: "1px 1px 0px 0px #2d2d2d" }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#ff4d4d",
                  border: "3px solid #2d2d2d",
                  borderRadius: WB.sm,
                  boxShadow: "4px 4px 0px 0px #2d2d2d",
                  padding: "14px 32px",
                  fontFamily: "'Kalam', cursive",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#fff",
                  textDecoration: "none",
                  transition: "all 0.12s",
                  cursor: "pointer",
                }}
              >
                <LinkIcon size={20} strokeWidth={2.5} />
                Live Site
              </motion.a>
            )}
          </section>
        )}
      </div>

      {/* ── FOOTER / NEXT PROJECT ─────────────────────────────────────────── */}
      <footer
        className="border-t-2 border-dashed border-[var(--color-pencil)]/15 py-32 flex flex-col items-center justify-center px-6 gap-8"
      >
        <p
          style={{
            fontFamily: "'Patrick Hand', cursive",
            fontSize: "14px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#2d2d2d",
            opacity: 0.3,
          }}
        >
          — end of case file —
        </p>
        <motion.div whileHover={{ rotate: 0, scale: 1.03 }} style={{ rotate: "-1deg" }}>
          <Link
            href="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#2d2d2d",
              color: "#fff",
              border: "3px solid #2d2d2d",
              borderRadius: WB.card,
              boxShadow: "6px 6px 0px 0px #ff4d4d",
              padding: "18px 48px",
              fontFamily: "'Kalam', cursive",
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 700,
              textDecoration: "none",
              transition: "background 0.15s",
            }}
            className="hover:bg-[var(--color-marker)]"
          >
            <BookOpen size={24} strokeWidth={2.5} />
            Back to the Archive
          </Link>
        </motion.div>
      </footer>

      {/* Watermark */}
      <div
        aria-hidden="true"
        className="fixed -bottom-4 -right-4 font-heading text-[25vw] pointer-events-none select-none z-0"
        style={{
          fontFamily: "'Kalam', cursive",
          opacity: 0.025,
          color: "#2d2d2d",
          lineHeight: 1,
        }}
      >
        {project.id.slice(0, 2).toUpperCase()}
      </div>
    </main>
  );
}