// "use client";

// import { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Coffee, Skull, Zap, GraduationCap, Briefcase } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const STORY_ITEMS = [
//   {
//     id: "clover-current",
//     title: "The Mercenary Era",
//     sub: "Junior Dev @ Clover Tech",
//     content: "Turning client 'make it pop' notes into responsive trauma. Multi-vendor systems & jewelry shops. CSS is currently winning 3–1.",
//     icon: <Briefcase className="w-8 h-8" />,
//     color: "var(--color-ink)",
//     sticker: "SEND COFFEE",
//   },
//   {
//     id: "clover-past",
//     title: "The Training Arc",
//     sub: "Intern → Trainee",
//     content: "Survived React bootcamp, upgraded to Next.js production torture. Discovered that clean architecture means 'rewrite it tomorrow'.",
//     icon: <Zap className="w-8 h-8" />,
//     color: "var(--color-marker)",
//     sticker: "THERAPY PENDING",
//   },
//   {
//     id: "teaching",
//     title: "The Sensei Era",
//     sub: "CS Teacher @ Higher Secondary",
//     content: "Taught kids programming before they found ChatGPT. Explaining loops to teenagers is a sport where I usually lost.",
//     icon: <Coffee className="w-8 h-8" />,
//     color: "var(--color-pencil)",
//     sticker: "PRE-AI DAYS",
//   },
//   {
//     id: "lama-corp",
//     title: "The Barcode Prisoner",
//     sub: "Invoice Handler @ Lama Corp",
//     content: "Entered invoice data into the abyss. Modisoft C-Store prisoner. Chaos digitized, meaning not so much.",
//     icon: <Skull className="w-8 h-8" />,
//     color: "var(--color-ink)",
//     sticker: "DIGITIZED CHAOS",
//   },
//   {
//     id: "education",
//     title: "Adult Mode: 99%",
//     sub: "BCA Graduate — Arunima College",
//     content: "BCA certificate exists—mostly for framing excuses. Recently graduated and still waiting for the adult mode to unlock.",
//     icon: <GraduationCap className="w-8 h-8" />,
//     color: "var(--color-marker)",
//     sticker: "TU SURVIVOR",
//   },
// ];

// export default function JawDroppingAbout() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//   window.scrollTo(0, 0);

//   const cards = gsap.utils.toArray(".story-card");
  
//   cards.forEach((card: any, i: number) => {
//     gsap.to(card, {
//       scrollTrigger: {
//         trigger: card,
//         start: "top 10%",
//         endTrigger: containerRef.current,
//         end: "bottom bottom",
//         pin: true,
//         pinSpacing: false,
//         scrub: true,
//         onUpdate: (self) => {
//           const progress = self.progress;
//           gsap.set(card, {
//             scale: 1 - progress * 0.05,
//             opacity: 1 - progress * 0.3,
//             filter: `blur(${progress * 2}px)`,
//           });
//         }
//       }
//     });
//   });

//   // 2. IMPORTANT: Refresh ScrollTrigger after a tiny delay 
//   // to ensure Next.js has finished rendering the content
//   const refreshTimer = setTimeout(() => {
//     ScrollTrigger.refresh();
//   }, 100);

//   return () => {
//     clearTimeout(refreshTimer);
//     ScrollTrigger.getAll().forEach(t => t.kill());
//   };
//   }, []);

//   return (
//     <main ref={containerRef} className="bg-[var(--color-paper)] min-h-[500vh] relative">
//       {/* Fixed Intro Header */}
//       <section className="h-screen flex flex-col items-center justify-center sticky top-24 z-0 px-6 text-center">
//         <motion.h1 
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           className="font-heading text-7xl md:text-[12rem] leading-none mb-4"
//         >
//           THINGS <br /> <span className="text-[var(--color-marker)] underline-wavy">ABOUT ME</span>
//         </motion.h1>
//         <p className="font-body text-xl md:text-2xl opacity-40 max-w-xl italic">
//           "I make pixels behave so strangers can buy shiny things they’ll regret later."
//         </p>
//         <div className="mt-12 animate-bounce opacity-20">
//             <div className="w-1 h-20 border-l-2 border-dashed border-black mx-auto" />
//             <span className="text-xs uppercase tracking-[0.3em]">Scroll to Unfold</span>
//         </div>
//       </section>

//       {/* The Story Stack */}
//       <div className="relative z-10 max-w-4xl mx-auto px-6 pb-[20vh]">
//         {STORY_ITEMS.map((item, i) => (
//           <div key={item.id} className="story-card h-screen flex items-center justify-center">
//             <div 
//               className="relative w-full bg-white border-[4px] border-[var(--color-pencil)] p-8 md:p-16 wobbly shadow-hard-lg"
//               style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
//             >
//               {/* Floating Icon */}
//               <div className="absolute -top-10 -right-5 w-20 h-20 bg-[var(--color-postit)] border-2 border-[var(--color-pencil)] rounded-full flex items-center justify-center rotate-12 shadow-hard-sm">
//                 {item.icon}
//               </div>

//               {/* Hand-drawn Sticker */}
//               <div className="absolute -top-4 -left-4 bg-[var(--color-marker)] text-white px-6 py-2 font-heading text-sm rotate-[-5deg] shadow-hard">
//                 {item.sticker}
//               </div>

//               <div className="space-y-4">
//                 <span className="font-body text-xs uppercase tracking-widest font-bold opacity-30">
//                   Chapter 0{i + 1}
//                 </span>
//                 <h2 className="font-heading text-5xl md:text-7xl" style={{ color: item.color }}>
//                   {item.title}
//                 </h2>
//                 <h3 className="font-heading text-2xl md:text-3xl opacity-60">
//                   {item.sub}
//                 </h3>
//                 <div className="h-1 w-32 bg-[var(--color-marker)] wobbly-sm mb-8" />
//                 <p className="font-body text-xl md:text-2xl leading-relaxed text-[var(--color-pencil)]/80">
//                   {item.content}
//                 </p>
//               </div>

//               {/* Subtle Coffee Stain for one card */}
//               {item.id === "clover-current" && (
//                 <div className="absolute -bottom-10 -right-10 w-40 h-40 border-[10px] border-[var(--color-muted)]/10 rounded-full blur-md pointer-events-none" />
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Final "Mercenary" CTA Section */}
//       <section className="h-screen flex items-center justify-center relative z-50">
//         <div className="text-center">
//           <h2 className="font-heading text-6xl md:text-8xl mb-12">Need a <br/> Mercenary?</h2>
//           <motion.button 
//             whileHover={{ scale: 1.1, rotate: 2 }}
//             whileTap={{ scale: 0.9 }}
//             className="bg-[var(--color-ink)] text-white px-12 py-6 font-heading text-3xl wobbly-btn shadow-hard"
//           >
//             Hire the Rogue
//           </motion.button>
//         </div>
//       </section>
//     </main>
//   );
// }















"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Coffee, Skull, Zap, GraduationCap, Briefcase,
  Globe, Code2, Terminal, Star, Lock, Unlock
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// ─── Design tokens ────────────────────────────────────────────────────────────
const WB = {
  card:  "255px 15px 225px 15px / 15px 225px 15px 255px",
  sm:    "15px 225px 15px 255px / 225px 15px 255px 15px",
  tag:   "120px 8px 100px 8px / 8px 100px 8px 120px",
  stamp: "4px 60px 4px 60px / 60px 4px 60px 4px",
};

// ─── Classification stamps ────────────────────────────────────────────────────
type StampType = "TOP SECRET" | "CLASSIFIED" | "REDACTED" | "APPROVED" | "VOID";
const STAMP_COLORS: Record<StampType, { bg: string; border: string }> = {
  "TOP SECRET": { bg: "rgba(255,77,77,0.12)", border: "#ff4d4d" },
  "CLASSIFIED": { bg: "rgba(45,93,161,0.12)", border: "#2d5da1" },
  "REDACTED":   { bg: "rgba(45,45,45,0.12)",  border: "#2d2d2d" },
  "APPROVED":   { bg: "rgba(39,174,96,0.12)",  border: "#27ae60" },
  "VOID":       { bg: "rgba(255,77,77,0.08)",  border: "#ff4d4d" },
};

function Stamp({ label, rotate = "-8deg" }: { label: StampType; rotate?: string }) {
  const c = STAMP_COLORS[label];
  return (
    <div
      aria-label={label}
      style={{
        display: "inline-block",
        border: `3px solid ${c.border}`,
        backgroundColor: c.bg,
        borderRadius: WB.stamp,
        padding: "4px 16px",
        fontFamily: "'Kalam', cursive",
        fontWeight: 700,
        fontSize: "12px",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: c.border,
        transform: `rotate(${rotate})`,
        opacity: 0.85,
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </div>
  );
}

// ─── Redacted bar ─────────────────────────────────────────────────────────────
function Redacted({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <span className={`redacted-target-${id} relative inline`}>
      {/* The black bar that gets revealed away */}
      <span
        className={`redacted-bar-${id}`}
        style={{
          position: "absolute",
          inset: "-2px -4px",
          backgroundColor: "#2d2d2d",
          borderRadius: "2px",
          zIndex: 2,
          transformOrigin: "left",
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </span>
  );
}

// ─── Ink underline ────────────────────────────────────────────────────────────
function InkLine({ color = "#ff4d4d" }: { color?: string }) {
  return (
    <svg viewBox="0 0 300 10" style={{ width: "100%", height: 10, marginTop: 4 }} preserveAspectRatio="none">
      <path d="M2,6 C40,2 80,9 120,5 C160,1 200,9 240,5 C265,2 285,8 298,5"
        fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Notebook margin lines ────────────────────────────────────────────────────
function NotebookLines() {
  return (
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden",
    }}>
      {/* Red margin */}
      <div style={{ position: "absolute", left: 52, top: 0, bottom: 0, width: 2, backgroundColor: "rgba(255,77,77,0.2)" }} />
      {/* Blue lines every 32px */}
      {Array.from({ length: 80 }).map((_, i) => (
        <div key={i} style={{
          position: "absolute", left: 0, right: 0,
          top: 80 + i * 32, height: 1,
          backgroundColor: "rgba(45,93,161,0.08)",
        }} />
      ))}
    </div>
  );
}

// ─── Dossier field row ────────────────────────────────────────────────────────
function FieldRow({ label, value, stamp, redactId }: {
  label: string; value: string; stamp?: StampType; redactId?: string;
}) {
  return (
    <div style={{
      display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "flex-start",
      padding: "10px 0", borderBottom: "1px dashed rgba(45,45,45,0.12)",
    }}>
      <span style={{
        fontFamily: "'Kalam', cursive", fontSize: 11, letterSpacing: "0.2em",
        textTransform: "uppercase", color: "#2d2d2d", opacity: 0.4,
        minWidth: 120, paddingTop: 2,
      }}>
        {label}:
      </span>
      <span style={{
        fontFamily: "'Patrick Hand', cursive", fontSize: 16,
        color: "#2d2d2d", flex: 1, lineHeight: 1.5, position: "relative",
      }}>
        {redactId ? <Redacted id={redactId}>{value}</Redacted> : value}
      </span>
      {stamp && <Stamp label={stamp} rotate={`${Math.random() > 0.5 ? "-" : ""}${3 + Math.floor(Math.random() * 6)}deg`} />}
    </div>
  );
}

// ─── Experience entry ─────────────────────────────────────────────────────────
interface ExpEntry {
  chapter: string;
  title: string;
  sub: string;
  period: string;
  content: string;
  icon: React.ReactNode;
  accent: string;
  stamp: StampType;
  stickerTop: string;
  rotation: number;
}

const ENTRIES: ExpEntry[] = [
  {
    chapter: "01",
    title: "The Mercenary Era",
    sub: "Junior Frontend Developer — Clover Tech Nepal",
    period: "2024 – Present",
    content: "Turning client 'make it pop' notes into responsive trauma. Built Kanto Best Price, a multi-vendor e-commerce platform, solo. Also a jewellery shop system because apparently I enjoy punishment. CSS is currently winning 3–1 and I respect the hustle.",
    icon: <Briefcase size={22} strokeWidth={2.5} />,
    accent: "#2d5da1",
    stamp: "TOP SECRET",
    stickerTop: "SEND COFFEE",
    rotation: -1,
  },
  {
    chapter: "02",
    title: "The Training Arc",
    sub: "Frontend Developer Intern → Trainee — Clover Tech Nepal",
    period: "2023 – 2024",
    content: "Survived a 3-month React bootcamp, was immediately promoted to Next.js production torture. Discovered that 'clean architecture' is a myth invented by people who have never met a real deadline. Progressed to full-time employment, which is either a success story or a cautionary tale.",
    icon: <Zap size={22} strokeWidth={2.5} />,
    accent: "#ff4d4d",
    stamp: "CLASSIFIED",
    stickerTop: "THERAPY PENDING",
    rotation: 1,
  },
  {
    chapter: "03",
    title: "The Sensei Era",
    sub: "Computer Science Teacher — Higher Secondary Level",
    period: "Dec 2022 – Mar 2023",
    content: "Taught Grade 11–12 students programming before they discovered ChatGPT and started questioning my entire existence. Explaining recursion to teenagers who would rather be on TikTok is a sport I did not train for. Still, they learned. Probably.",
    icon: <Coffee size={22} strokeWidth={2.5} />,
    accent: "#2d2d2d",
    stamp: "APPROVED",
    stickerTop: "PRE-AI DAYS",
    rotation: -1.5,
  },
  {
    chapter: "04",
    title: "The Volunteer Arc",
    sub: "Co-Trainer — Book Free Friday, Kathmandu Metropolitan City",
    period: "2022 – 2023",
    content: "Subjected children to Scratch and Raspberry Pi under the Google CS First curriculum. They are now teenagers who probably code better than me. I consider this both my greatest success and my most elaborate act of self-sabotage.",
    icon: <Star size={22} strokeWidth={2.5} />,
    accent: "#27ae60",
    stamp: "APPROVED",
    stickerTop: "BAUDHANATH LEGEND",
    rotation: 1.5,
  },
  {
    chapter: "05",
    title: "The Barcode Prisoner",
    sub: "Office Assistant — Beez Consulting",
    period: "Jul 2023 – Jan 2024",
    content: "Entered invoice data into Modisoft and CStore. Barcodes. Retail prices. Bought items. Sold items. The abyss. Did this while simultaneously interning as a developer, because sleep is apparently optional. Built character. Or broke it. Still investigating.",
    icon: <Skull size={22} strokeWidth={2.5} />,
    accent: "#2d2d2d",
    stamp: "REDACTED",
    stickerTop: "DIGITIZED CHAOS",
    rotation: -2,
  },
  {
    chapter: "06",
    title: "Adult Mode: 99%",
    sub: "Bachelor of Computer Applications — Arunima College, TU",
    period: "2020 – 2024",
    content: "Recently graduated. Certificate exists — primarily for framing excuses. Tribhuvan University survivor. Four years of Object-Oriented Programming exams, one thesis nobody will read, and a deep, personal understanding of why most developers are self-taught.",
    icon: <GraduationCap size={22} strokeWidth={2.5} />,
    accent: "#ff4d4d",
    stamp: "APPROVED",
    stickerTop: "TU SURVIVOR",
    rotation: 1,
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const [accessGranted, setAccessGranted] = useState(false);
  const [classificationDone, setClassificationDone] = useState(false);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const marginProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // ── Boot sequence on mount ────────────────────────────────────────────────
  useEffect(() => {
    const t1 = setTimeout(() => setAccessGranted(true), 1200);
    const t2 = setTimeout(() => setClassificationDone(true), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // ── GSAP: Redaction reveal on scroll ──────────────────────────────────────
  useEffect(() => {
    if (!classificationDone) return;

    const ctx = gsap.context(() => {
      // Reveal each redacted bar by scaling it to 0 on scroll
      document.querySelectorAll("[class*='redacted-bar-']").forEach((bar) => {
        const id = (bar.className as string).match(/redacted-bar-(\S+)/)?.[1];
        if (!id) return;
        gsap.to(bar, {
          scaleX: 0,
          duration: 0.6,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: bar,
            start: "top 75%",
          },
        });
      });

      // Entry cards: stagger slide-up
      gsap.utils.toArray<HTMLElement>(".entry-card").forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, rotate: card.dataset.rotation ?? "0" },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 82%" },
          }
        );
      });

      // Skills tags scatter-in
      gsap.fromTo(".skill-tag",
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1, scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: ".skills-section", start: "top 80%" },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [classificationDone]);

  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    Backend:  ["Node.js", "Supabase", "PostgreSQL", "REST APIs"],
    Tools:    ["Git", "Vercel", "Figma", "VS Code"],
  };

  const skColors = ["#fff9c4", "#ffffff", "#fde8e8", "#e8f0fe"];
  const skRotations = [-2, 1.5, -1, 2, -2.5, 1, -1.5, 2.5];

  return (
    <main
      ref={containerRef}
      className="bg-[var(--color-paper)] min-h-screen relative overflow-x-hidden"
    >
      {/* ── Notebook paper texture ───────────────────────────────────────── */}
      <NotebookLines />

      {/* ── Left margin scroll progress ──────────────────────────────────── */}
      <div className="fixed left-0 top-0 h-full w-8 hidden lg:block z-40 pointer-events-none">
        <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, backgroundColor: "rgba(255,77,77,0.15)" }} />
        <motion.div style={{
          position: "absolute", left: 20, top: 0, width: 2,
          height: marginProgress,
          backgroundColor: "#ff4d4d", opacity: 0.5,
        }} />
        {[15, 30, 45, 60, 75].map(pct => (
          <div key={pct} style={{
            position: "absolute", left: 14, top: `${pct}%`,
            width: 12, height: 12, borderRadius: "50%",
            border: "2px solid rgba(45,45,45,0.2)",
            backgroundColor: "var(--color-paper)",
          }} />
        ))}
      </div>

      {/* ── BOOT SEQUENCE OVERLAY ────────────────────────────────────────── */}
      <AnimatePresence>
        {!classificationDone && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed", inset: 0, zIndex: 999,
              backgroundColor: "#fdfbf7",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 16,
            }}
          >
            <div style={{
              border: "3px solid #2d2d2d",
              borderRadius: WB.card,
              boxShadow: "6px 6px 0px 0px #2d2d2d",
              padding: "40px 60px",
              textAlign: "center",
              backgroundColor: "#fff",
              maxWidth: 420,
              width: "90%",
            }}>
              <Lock size={32} strokeWidth={2} style={{ marginBottom: 16, color: "#ff4d4d" }} />
              <p style={{ fontFamily: "'Kalam', cursive", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", opacity: 0.4, marginBottom: 8 }}>
                Dossier Access Control
              </p>
              <AnimatePresence mode="wait">
                {!accessGranted ? (
                  <motion.p key="loading" exit={{ opacity: 0 }} style={{ fontFamily: "'Patrick Hand', cursive", fontSize: 18, color: "#2d2d2d" }}>
                    Verifying clearance level…
                  </motion.p>
                ) : (
                  <motion.div key="granted" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Unlock size={28} strokeWidth={2} style={{ margin: "0 auto 8px", color: "#27ae60" }} />
                    <p style={{ fontFamily: "'Kalam', cursive", fontSize: 20, fontWeight: 700, color: "#2d2d2d" }}>
                      Access Granted.
                    </p>
                    <p style={{ fontFamily: "'Patrick Hand', cursive", fontSize: 14, opacity: 0.5, marginTop: 4 }}>
                      Loading personnel file…
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO DOSSIER HEADER ───────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center px-10 lg:px-24 py-24 relative z-10">
        <div className="w-full max-w-5xl mx-auto">

          {/* File classification header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={classificationDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center",
              marginBottom: 32,
              padding: "12px 20px",
              border: "2px dashed rgba(45,45,45,0.2)",
              borderRadius: WB.sm,
            }}
          >
            <span style={{ fontFamily: "'Kalam', cursive", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.35 }}>
              Personnel File //
            </span>
            <Stamp label="TOP SECRET" rotate="-2deg" />
            <Stamp label="CLASSIFIED" rotate="1.5deg" />
            <span style={{ fontFamily: "'Patrick Hand', cursive", fontSize: 12, opacity: 0.3, marginLeft: "auto" }}>
              REF: KL-{new Date().getFullYear()}-FRONTEND
            </span>
          </motion.div>

          {/* Main title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={classificationDone ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1
              ref={heroTitleRef}
              style={{
                fontFamily: "'Kalam', cursive",
                fontWeight: 700,
                fontSize: "clamp(3.5rem, 12vw, 9rem)",
                lineHeight: 0.85,
                color: "#2d2d2d",
                marginBottom: 8,
              }}
            >
              KESANG<br />
              <span style={{ color: "#ff4d4d" }}>LAMA</span>
            </h1>
            <InkLine color="#2d5da1" />
          </motion.div>

          {/* Field rows — the dossier identity block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={classificationDone ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              marginTop: 40,
              backgroundColor: "#fff",
              border: "3px solid #2d2d2d",
              borderRadius: WB.card,
              boxShadow: "6px 6px 0px 0px #2d2d2d",
              padding: "28px 32px",
              position: "relative",
            }}
          >
            {/* Tape */}
            <div aria-hidden style={{
              position: "absolute", top: -12, left: "50%",
              transform: "translateX(-50%) rotate(-1.5deg)",
              width: 88, height: 24,
              backgroundColor: "rgba(45,45,45,0.1)",
              border: "1.5px solid rgba(45,45,45,0.2)",
              borderRadius: 3,
            }} />

            <FieldRow label="Designation"  value="Junior Frontend Developer" stamp="APPROVED" />
            <FieldRow label="Current Post" value="Clover Tech Nepal, Kathmandu" />
            <FieldRow label="Speciality"   value="Next.js · TypeScript · Making CSS behave" />
            <FieldRow label="Side Hustle"  value="Freelance Full-Stack (Supabase + PostgreSQL)" stamp="CLASSIFIED" />
            <FieldRow label="Location"     value="Kathmandu, Nepal" />
            <FieldRow label="Threat Level" value="Caffeine-dependent. Approaches deadlines like personal vendettas." stamp="TOP SECRET" redactId="threat" />
            <FieldRow label="Summary"      value="Makes pixels behave so strangers can buy shiny things they'll regret later." />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={classificationDone ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            style={{
              marginTop: 40, display: "flex", alignItems: "center", gap: 12,
              fontFamily: "'Patrick Hand', cursive", fontSize: 13,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#2d2d2d", opacity: 0.3,
            }}
          >
            <div style={{
              width: 1, height: 48,
              border: "1px dashed #2d2d2d",
              opacity: 0.4,
            }} />
            Scroll to access field reports
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ENTRIES ────────────────────────────────────────────── */}
      <section className="px-10 lg:px-24 pb-20 relative z-10 max-w-5xl mx-auto">
        <div style={{
          fontFamily: "'Kalam', cursive",
          fontSize: 11,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          opacity: 0.3,
          marginBottom: 40,
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{ flex: 1, height: 1, border: "1px dashed rgba(45,45,45,0.2)" }} />
          Field Reports // Work Experience
          <div style={{ flex: 1, height: 1, border: "1px dashed rgba(45,45,45,0.2)" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {ENTRIES.map((entry, i) => (
            <div
              key={entry.chapter}
              className="entry-card"
              data-rotation={`${entry.rotation}deg`}
              style={{
                opacity: 0, // GSAP will reveal
                backgroundColor: "#fff",
                border: "3px solid #2d2d2d",
                borderRadius: WB.card,
                boxShadow: `5px 5px 0px 0px ${entry.accent}`,
                padding: "32px 36px",
                position: "relative",
              }}
            >
              {/* Tape */}
              <div aria-hidden style={{
                position: "absolute", top: -12,
                left: `${20 + i * 8}%`,
                transform: `translateX(-50%) rotate(${entry.rotation * -1}deg)`,
                width: 80, height: 22,
                backgroundColor: "rgba(45,45,45,0.1)",
                border: "1.5px solid rgba(45,45,45,0.2)",
                borderRadius: 3,
              }} />

              {/* Top sticker label */}
              <div style={{
                position: "absolute", top: -14, left: 24,
                backgroundColor: entry.accent,
                color: "#fff",
                fontFamily: "'Kalam', cursive",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "3px 14px",
                borderRadius: WB.tag,
                border: "2px solid #2d2d2d",
                boxShadow: "2px 2px 0px 0px #2d2d2d",
              }}>
                {entry.stickerTop}
              </div>

              {/* Chapter + stamp row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
                <span style={{
                  fontFamily: "'Kalam', cursive",
                  fontSize: 11, letterSpacing: "0.3em",
                  textTransform: "uppercase", opacity: 0.3,
                }}>
                  Chapter {entry.chapter}
                </span>
                <Stamp label={entry.stamp} rotate={`${entry.rotation * -2}deg`} />
              </div>

              {/* Icon + Title */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 12 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  border: "2.5px solid #2d2d2d",
                  boxShadow: "3px 3px 0px 0px #2d2d2d",
                  backgroundColor: entry.accent === "#2d2d2d" ? "#fff9c4" : "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  color: entry.accent,
                }}>
                  {entry.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{
                    fontFamily: "'Kalam', cursive", fontWeight: 700,
                    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                    color: entry.accent, lineHeight: 1, margin: 0,
                  }}>
                    {entry.title}
                  </h2>
                  <InkLine color={entry.accent} />
                </div>
              </div>

              {/* Sub + period */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 4, marginBottom: 16 }}>
                <p style={{
                  fontFamily: "'Kalam', cursive", fontWeight: 700,
                  fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                  color: "#2d2d2d", opacity: 0.65, margin: 0,
                }}>
                  {entry.sub}
                </p>
                <span style={{
                  fontFamily: "'Patrick Hand', cursive", fontSize: 13,
                  color: "#2d2d2d", opacity: 0.35, fontStyle: "italic",
                }}>
                  {entry.period}
                </span>
              </div>

              {/* Dashed divider */}
              <div style={{ borderTop: "2px dashed rgba(45,45,45,0.1)", marginBottom: 16 }} />

              {/* Content */}
              <p style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                lineHeight: 1.7, color: "#2d2d2d", opacity: 0.8,
                margin: 0,
              }}>
                {entry.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS SECTION ───────────────────────────────────────────────── */}
      <section className="skills-section px-10 lg:px-24 py-20 relative z-10 max-w-5xl mx-auto">
        <div style={{
          fontFamily: "'Kalam', cursive",
          fontSize: 11, letterSpacing: "0.3em",
          textTransform: "uppercase", opacity: 0.3,
          display: "flex", alignItems: "center", gap: 12, marginBottom: 40,
        }}>
          <div style={{ flex: 1, height: 1, border: "1px dashed rgba(45,45,45,0.2)" }} />
          Arsenal // Skills
          <div style={{ flex: 1, height: 1, border: "1px dashed rgba(45,45,45,0.2)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 28 }}>
          {Object.entries(skills).map(([category, tags], ci) => (
            <div
              key={category}
              style={{
                backgroundColor: "#fff",
                border: "3px solid #2d2d2d",
                borderRadius: WB.sm,
                boxShadow: "5px 5px 0px 0px #2d2d2d",
                padding: "24px 24px 28px",
                position: "relative",
                transform: `rotate(${ci % 2 === 0 ? -1 : 1.5}deg)`,
              }}
            >
              {/* Post-it color top bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 6,
                backgroundColor: ci === 0 ? "#ff4d4d" : ci === 1 ? "#2d5da1" : "#27ae60",
                borderRadius: "inherit inherit 0 0",
              }} />
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <Code2 size={16} strokeWidth={2.5} />
                <span style={{
                  fontFamily: "'Kalam', cursive", fontWeight: 700,
                  fontSize: 13, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "#2d2d2d",
                }}>
                  {category}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {tags.map((tag, ti) => (
                  <motion.span
                    key={tag}
                    className="skill-tag"
                    whileHover={{ scale: 1.08, rotate: 0 }}
                    style={{
                      opacity: 0, // GSAP reveals
                      display: "inline-block",
                      backgroundColor: skColors[(ci * 4 + ti) % skColors.length],
                      border: "2px solid #2d2d2d",
                      borderRadius: WB.tag,
                      boxShadow: "2px 2px 0px 0px #2d2d2d",
                      padding: "4px 14px",
                      fontFamily: "'Patrick Hand', cursive",
                      fontSize: 13, fontWeight: 700,
                      color: "#2d2d2d",
                      rotate: `${skRotations[(ci * 3 + ti) % skRotations.length]}deg`,
                      cursor: "default",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LANGUAGES + EXTRAS ───────────────────────────────────────────── */}
      <section className="px-10 lg:px-24 py-10 relative z-10 max-w-5xl mx-auto">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {[
            { label: "Languages", value: "English · Nepali · Hindi", icon: <Globe size={16} />, rotate: "-1.5deg" },
            { label: "Currently", value: "Building things nobody asked for at 2 AM", icon: <Terminal size={16} />, rotate: "1deg" },
            { label: "Status",    value: "Adult mode: 99% installed", icon: <Zap size={16} />, rotate: "-2deg" },
          ].map(item => (
            <div key={item.label} style={{
              backgroundColor: "#fff9c4",
              border: "2.5px solid #2d2d2d",
              borderRadius: WB.card,
              boxShadow: "4px 4px 0px 0px #2d2d2d",
              padding: "18px 20px",
              transform: `rotate(${item.rotate})`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6, opacity: 0.4 }}>
                {item.icon}
                <span style={{ fontFamily: "'Kalam', cursive", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase" }}>
                  {item.label}
                </span>
              </div>
              <p style={{ fontFamily: "'Patrick Hand', cursive", fontSize: 15, color: "#2d2d2d", margin: 0, lineHeight: 1.5 }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-32 flex flex-col items-center justify-center px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: "#fff",
            border: "4px solid #2d2d2d",
            borderRadius: WB.card,
            boxShadow: "8px 8px 0px 0px #ff4d4d",
            padding: "48px 56px",
            maxWidth: 540,
            position: "relative",
          }}
        >
          <div aria-hidden style={{
            position: "absolute", top: -14, left: "50%",
            transform: "translateX(-50%) rotate(-1deg)",
            width: 100, height: 26,
            backgroundColor: "rgba(45,45,45,0.1)",
            border: "1.5px solid rgba(45,45,45,0.2)",
            borderRadius: 3,
          }} />
          <div style={{ position: "absolute", top: -12, right: 24 }}>
            <Stamp label="APPROVED" rotate="5deg" />
          </div>

          <h2 style={{
            fontFamily: "'Kalam', cursive", fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#2d2d2d", marginBottom: 12,
          }}>
            Need a<br />
            <span style={{ color: "#ff4d4d" }}>Mercenary?</span>
          </h2>
          <p style={{
            fontFamily: "'Patrick Hand', cursive", fontSize: 16,
            color: "#2d2d2d", opacity: 0.6, marginBottom: 28,
            fontStyle: "italic",
          }}>
            I work for coffee, equity, or a sufficiently interesting problem.
          </p>
          <motion.div whileHover={{ y: -4, boxShadow: "6px 6px 0px 0px #2d2d2d" }} whileTap={{ y: 0, boxShadow: "1px 1px 0px 0px #2d2d2d" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                backgroundColor: "#2d2d2d", color: "#fff",
                border: "3px solid #2d2d2d",
                borderRadius: WB.sm,
                boxShadow: "4px 4px 0px 0px #ff4d4d",
                padding: "14px 36px",
                fontFamily: "'Kalam', cursive",
                fontWeight: 700, fontSize: "1.2rem",
                textDecoration: "none",
                transition: "all 0.12s",
              }}
            >
              <Briefcase size={20} strokeWidth={2.5} />
              Hire the Rogue
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Watermark */}
      <div aria-hidden style={{
        position: "fixed", bottom: -20, right: -20,
        fontFamily: "'Kalam', cursive",
        fontSize: "28vw", opacity: 0.02,
        color: "#2d2d2d", lineHeight: 1,
        pointerEvents: "none", userSelect: "none", zIndex: 0,
      }}>
        KL
      </div>
    </main>
  );
}