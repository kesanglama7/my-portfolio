// "use client";
// import { motion } from "framer-motion";
// import { ExternalLink } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { FaGithub } from "react-icons/fa";

// interface ProjectProps {
//   title: string;
//   category: string;
//   image: string;
//   rotation: number;
//   index: number;
// }

// export default function ProjectCard({ title, category, rotation, index }: ProjectProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.5, rotate: 0, y: 100 }}
//       whileInView={{ 
//         opacity: 1, 
//         scale: 1, 
//         rotate: rotation, 
//         y: 0 
//       }}
//       viewport={{ once: true }}
//       transition={{ 
//         type: "spring", 
//         stiffness: 50, 
//         delay: index * 0.1,
//         duration: 0.8 
//       }}
//       whileHover={{ 
//         rotate: 0, 
//         scale: 1.05, 
//         zIndex: 50,
//         transition: { duration: 0.2 } 
//       }}
//       className={cn(
//         "relative w-72 md:w-80 aspect-[4/5] bg-white border-[3px] border-[var(--color-pencil)] p-4",
//         "wobbly shadow-hard-lg cursor-pointer group"
//       )}
//     >
//       {/* Decorative Tape */}
//       <div className="tape -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[rgba(200,196,188,0.4)]" />

//       {/* Image Placeholder with Sketch Filter */}
//       <div className="w-full h-[60%] bg-[var(--color-muted)] border-2 border-[var(--color-pencil)] wobbly-sm mb-4 overflow-hidden relative">
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-20" />
//         <div className="w-full h-full flex items-center justify-center text-4xl">🖼️</div>
//       </div>

//       <div className="space-y-1">
//         <span className="font-body text-xs uppercase tracking-widest text-[var(--color-ink)] font-bold">
//           {category}
//         </span>
//         <h3 className="font-heading text-2xl leading-tight group-hover:underline-wavy transition-all">
//           {title}
//         </h3>
//       </div>

//       <div className="absolute bottom-4 right-4 flex gap-2">
//         <div className="w-8 h-8 rounded-full border-2 border-[var(--color-pencil)] flex items-center justify-center hover:bg-[var(--color-postit)] transition-colors">
//           <FaGithub size={14} />
//         </div>
//         <div className="w-8 h-8 rounded-full border-2 border-[var(--color-pencil)] flex items-center justify-center hover:bg-[var(--color-marker)] hover:text-white transition-colors">
//           <ExternalLink size={14} />
//         </div>
//       </div>
//     </motion.div>
//   );
// }


"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, FolderGit2, PlayCircle, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/static_data/project-data";

// ─── Wobbly radius presets ────────────────────────────────────────────────────
const WB = {
  card:  "255px 15px 225px 15px / 15px 225px 15px 255px",
  media: "12px 180px 12px 180px / 180px 12px 180px 12px",
  tag:   "120px 8px 100px 8px / 8px 100px 8px 120px",
  num:   "60% 40% 50% 50% / 40% 60% 40% 60%",
};

// ─── Ink squiggle underline ────────────────────────────────────────────────────
function SquiggleUnderline({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 260 10"
      className="w-full h-[10px] mt-1"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M2,6 C20,1 40,9 60,5 C80,1 100,9 120,5 C140,1 160,9 180,5 C200,1 220,9 240,5 C250,2 256,7 258,5"
        fill="none"
        stroke="#ff4d4d"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </svg>
  );
}

// ─── Dashed corner marks (blueprint feel) ─────────────────────────────────────
function CornerMarks() {
  const style = (pos: React.CSSProperties): React.CSSProperties => ({
    position: "absolute",
    width: 16,
    height: 16,
    borderColor: "rgba(45,45,45,0.25)",
    borderStyle: "dashed",
    ...pos,
  });
  return (
    <>
      <div aria-hidden="true" style={style({ top: 8, left: 8, borderWidth: "2px 0 0 2px" })} />
      <div aria-hidden="true" style={style({ top: 8, right: 8, borderWidth: "2px 2px 0 0" })} />
      <div aria-hidden="true" style={style({ bottom: 16, left: 8, borderWidth: "0 0 2px 2px" })} />
      <div aria-hidden="true" style={style({ bottom: 16, right: 8, borderWidth: "0 2px 2px 0" })} />
    </>
  );
}

export default function ProjectCard({
  project,
  index,
  mobile = false,
}: {
  project: Project;
  index: number;
  mobile?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // ── 3-D tilt via mouse position ───────────────────────────────────────────
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-4, 4]), { stiffness: 200, damping: 20 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (mobile) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  function onMouseEnter() {
    setHovered(true);
    videoRef.current?.play();
  }

  // Category → accent color map
  const categoryColors: Record<string, string> = {
    "SaaS Management": "#2d5da1",
    "E-commerce":      "#ff4d4d",
    "Education / Clone": "#27ae60",
    "Non-Profit":      "#8e44ad",
    "Web Profile":     "#2d5da1",
    "Cybersecurity":   "#c0392b",
    "Healthcare":      "#27ae60",
  };
  const accent = categoryColors[project.category] ?? "#ff4d4d";

  return (
    <Link href={`/portfolio/${project.id}`} className="block" style={{ perspective: "800px" }}>
      <motion.div
        ref={cardRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          rotate: mobile ? 0 : project.rotation,
          rotateX: mobile ? 0 : rotateX,
          rotateY: mobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
          backgroundColor: "#ffffff",
          border: "3px solid #2d2d2d",
          borderRadius: WB.card,
          boxShadow: hovered
            ? `7px 7px 0px 0px ${accent}`
            : "5px 5px 0px 0px #2d2d2d",
          padding: "20px 20px 36px",
          position: "relative",
          overflow: "hidden",
          transition: "box-shadow 0.2s ease",
          cursor: "pointer",
          ...(mobile ? { width: "100%" } : { width: "420px", minHeight: "560px", flexShrink: 0 }),
        }}
        className={cn(!mobile && "xl:w-[500px] xl:min-h-[640px]")}
      >
        {/* ── Blueprint corner marks ──────────────────────────────────────── */}
        <CornerMarks />

        {/* ── Tape strip ──────────────────────────────────────────────────── */}
        <motion.div
          aria-hidden="true"
          animate={hovered ? { backgroundColor: "rgba(255,249,196,0.7)" } : { backgroundColor: "rgba(45,45,45,0.1)" }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            top: -10,
            left: "50%",
            transform: "translateX(-50%) rotate(-1.5deg)",
            width: 88,
            height: 24,
            border: "1.5px solid rgba(45,45,45,0.2)",
            borderRadius: "3px",
            zIndex: 20,
          }}
        />

        {/* ── MEDIA ───────────────────────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            border: "2.5px solid #2d2d2d",
            borderRadius: WB.media,
            overflow: "hidden",
            backgroundColor: "#fdfbf7",
            marginBottom: "16px",
          }}
        >
          {project.thumbnail.type === "video" ? (
            <>
              <video
                ref={videoRef}
                src={project.thumbnail.url}
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: hovered ? 1 : 0.75,
                  transition: "opacity 0.3s, transform 0.4s",
                  transform: hovered ? "scale(1.04)" : "scale(1)",
                }}
              />
              {/* Play hint */}
              <motion.div
                animate={{ opacity: hovered ? 0 : 0.5 }}
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: 11,
                  color: "#2d2d2d",
                  pointerEvents: "none",
                }}
              >
                <PlayCircle size={14} strokeWidth={2.5} />
                hover to play
              </motion.div>
            </>
          ) : project.thumbnail.type === "image" ? (
            <img
              src={project.thumbnail.url}
              alt={`${project.title} preview`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.45s ease",
                transform: hovered ? "scale(1.06)" : "scale(1)",
              }}
            />
          ) : (
            /* Empty state — blueprint grid */
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                backgroundImage: "linear-gradient(rgba(45,93,161,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(45,93,161,0.06) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            >
              <FolderGit2 size={32} strokeWidth={1.5} style={{ color: accent, opacity: 0.35 }} />
              <span
                style={{
                  fontFamily: "'Kalam', cursive",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.3,
                  color: "#2d2d2d",
                }}
              >
                No Capture
              </span>
            </div>
          )}

          {/* Accent color band at bottom of media */}
          <motion.div
            aria-hidden="true"
            animate={{ scaleX: hovered ? 1 : 0 }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 4,
              backgroundColor: accent,
              transformOrigin: "left",
            }}
          />
        </div>

        {/* ── INFO ────────────────────────────────────────────────────────── */}
        <div style={{ padding: "0 6px" }}>

          {/* Category tag */}
          <div style={{ marginBottom: 8 }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: hovered ? accent : "transparent",
                color: hovered ? "#fff" : accent,
                border: `1.5px solid ${accent}`,
                borderRadius: WB.tag,
                padding: "2px 12px",
                fontFamily: "'Patrick Hand', cursive",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Title + animated squiggle underline */}
          <div style={{ marginBottom: 10 }}>
            <h3
              style={{
                fontFamily: "'Kalam', cursive",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3vw, 2rem)",
                lineHeight: 1.1,
                color: "#2d2d2d",
                margin: 0,
              }}
            >
              {project.title}
            </h3>
            <SquiggleUnderline active={hovered} />
          </div>

          {/* Description — appears on hover */}
          <motion.p
            animate={{ opacity: hovered ? 0.65 : 0, height: hovered ? "auto" : 0 }}
            transition={{ duration: 0.25 }}
            style={{
              fontFamily: "'Patrick Hand', cursive",
              fontSize: 15,
              lineHeight: 1.55,
              color: "#2d2d2d",
              margin: 0,
              overflow: "hidden",
            }}
          >
            {project.description}
          </motion.p>
        </div>

        {/* ── FOOTER ROW ──────────────────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 16,
            right: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Index badge */}
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: WB.num,
              border: "2.5px solid #2d2d2d",
              boxShadow: "2px 2px 0px 0px #2d2d2d",
              backgroundColor: hovered ? accent : "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Kalam', cursive",
              fontSize: 14,
              fontWeight: 700,
              color: hovered ? "#fff" : "#2d2d2d",
              transition: "all 0.2s",
              flexShrink: 0,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Link icons — stop propagation so they don't trigger the card link */}
          <div
            style={{ display: "flex", gap: 8, alignItems: "center" }}
            onClick={(e) => e.preventDefault()}
          >
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "2px solid #2d2d2d",
                  boxShadow: "2px 2px 0px 0px #2d2d2d",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2d2d2d",
                  transition: "all 0.15s",
                }}
                className="hover:bg-[#2d2d2d] hover:text-white hover:!shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <FaGithub size={14} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "2px solid #2d2d2d",
                  boxShadow: "2px 2px 0px 0px #2d2d2d",
                  backgroundColor: "#ff4d4d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  transition: "all 0.15s",
                }}
                className="hover:!shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <ExternalLink size={13} strokeWidth={2.5} />
              </a>
            )}

            {/* "Open" arrow — always visible as the primary CTA */}
            <motion.div
              animate={hovered
                ? { backgroundColor: "#2d2d2d", x: 0, y: 0, boxShadow: "0px 0px 0px 0px #2d2d2d" }
                : { backgroundColor: "#ffffff", x: 0, y: 0, boxShadow: "2px 2px 0px 0px #2d2d2d" }
              }
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "2px solid #2d2d2d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: hovered ? "#fff" : "#2d2d2d",
                transition: "color 0.15s",
                pointerEvents: "none",
              }}
            >
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}