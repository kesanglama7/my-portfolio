// "use client";

// import { motion, type HTMLMotionProps } from "framer-motion";
// import { cn } from "@/lib/utils";
// import type { ReactNode } from "react";

// /* ─── Types ──────────────────────────────────────────────────── */
// type Variant = "primary" | "secondary" | "ghost" | "danger";

// interface WobblyButtonProps extends HTMLMotionProps<"button"> {
//   variant?: Variant;
//   /** Renders as <a> when provided */
//   href?: string;
//   target?: string;
//   rel?: string;
//   children: ReactNode;
// }

// /* ─── Variant styles ─────────────────────────────────────────── */
// const variants: Record<Variant, string> = {
//   // White → red on hover
//   primary:
//     "bg-white text-[var(--color-pencil)] " +
//     "hover:bg-[var(--color-marker)] hover:text-white",

//   // Muted → blue on hover
//   secondary:
//     "bg-[var(--color-muted)] text-[var(--color-pencil)] " +
//     "hover:bg-[var(--color-ink)] hover:text-white",

//   // Transparent, dashed border → post-it on hover
//   ghost:
//     "bg-transparent text-[var(--color-pencil)] " +
//     "border-dashed! " +
//     "hover:bg-[var(--color-postit)]",

//   // Post-it → marker red on hover
//   danger:
//     "bg-[var(--color-postit)] text-[var(--color-pencil)] " +
//     "hover:bg-[var(--color-marker)] hover:text-white",
// };

// /* ─── Shared Framer Motion press mechanics ───────────────────── */
// const pressMotion = {
//   // Hover: shift right+down slightly, shadow shrinks → "lifting"
//   whileHover: {
//     x: 2,
//     y: 2,
//     boxShadow: "2px 2px 0px 0px #2d2d2d",
//     transition: { duration: 0.08 },
//   },
//   // Active: shift further, shadow disappears → "pressed flat"
//   whileTap: {
//     x: 4,
//     y: 4,
//     boxShadow: "0px 0px 0px 0px #2d2d2d",
//     transition: { duration: 0.06 },
//   },
// };

// /* ─── Component ──────────────────────────────────────────────── */
// export function WobblyButton({
//   variant = "primary",
//   href,
//   target,
//   rel,
//   children,
//   className,
//   ...props
// }: WobblyButtonProps) {
//   const classes = cn(
//     // Layout
//     "relative inline-flex items-center justify-center gap-2",
//     "px-6 py-3 min-h-[48px]",
//     // Typography
//     "font-body text-lg md:text-xl leading-none",
//     // Border
//     "border-[3px] border-[var(--color-pencil)]",
//     // Shape — wobbly oval (defined in globals.css, not a Tailwind utility)
//     "wobbly-btn",
//     // Shadow — hard offset
//     "shadow-hard",
//     // Transition for color changes only (translate/shadow handled by Framer)
//     "transition-colors duration-[100ms]",
//     // Cursor
//     "cursor-pointer select-none",
//     // Variant
//     variants[variant],
//     className
//   );

//   if (href) {
//     return (
//       <motion.a
//         href={href}
//         target={target}
//         rel={rel}
//         className={classes}
//         {...pressMotion}
//         // Cast needed because motion.a and motion.button share most props
//         {...(props as HTMLMotionProps<"a">)}
//       >
//         {children}
//       </motion.a>
//     );
//   }

//   return (
//     <motion.button
//       type="button"
//       className={classes}
//       {...pressMotion}
//       {...props}
//     >
//       {children}
//     </motion.button>
//   );
// }














"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Link from 'next/link';

/* ─── Create Motion-Enabled Link ─── */
// This allows Framer Motion to animate the Next.js Link component
const MotionLink = motion.create(Link);

/* ─── Types ──────────────────────────────────────────────────── */
type Variant = "primary" | "secondary" | "ghost" | "danger";

interface WobblyButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: Variant;
  /** Renders as Next.js Link when provided */
  href?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}

/* ─── Variant styles ─────────────────────────────────────────── */
const variants: Record<Variant, string> = {
  primary:
    "bg-white text-[var(--color-pencil)] " +
    "hover:bg-[var(--color-marker)] hover:text-white",

  secondary:
    "bg-[var(--color-muted)] text-[var(--color-pencil)] " +
    "hover:bg-[var(--color-ink)] hover:text-white",

  ghost:
    "bg-transparent text-[var(--color-pencil)] " +
    "border-dashed! " +
    "hover:bg-[var(--color-postit)]",

  danger:
    "bg-[var(--color-postit)] text-[var(--color-pencil)] " +
    "hover:bg-[var(--color-marker)] hover:text-white",
};

/* ─── Shared Framer Motion press mechanics ───────────────────── */
const pressMotion = {
  whileHover: {
    x: 2,
    y: 2,
    boxShadow: "2px 2px 0px 0px #2d2d2d",
    transition: { duration: 0.08 },
  },
  whileTap: {
    x: 4,
    y: 4,
    boxShadow: "0px 0px 0px 0px #2d2d2d",
    transition: { duration: 0.06 },
  },
};

/* ─── Component ──────────────────────────────────────────────── */
export function WobblyButton({
  variant = "primary",
  href,
  target,
  rel,
  children,
  className,
  ...props
}: WobblyButtonProps) {
  const classes = cn(
    // Layout
    "relative inline-flex items-center justify-center gap-2",
    "px-6 py-3 min-h-[48px]",
    // Typography
    "font-body text-lg md:text-xl leading-none",
    // Border
    "border-[3px] border-[var(--color-pencil)]",
    // Shape (Wobbly utility from your CSS)
    "wobbly-btn",
    // Shadow
    "shadow-hard",
    // Color Transitions
    "transition-colors duration-[100ms]",
    // Interaction
    "cursor-pointer select-none",
    variants[variant],
    className
  );

  // If href exists, use the Motion-wrapped Next.js Link
  if (href) {
    return (
      <MotionLink
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...pressMotion}
        // Use 'as any' to avoid prop-type conflicts between Link and motion
        {...(props as any)}
      >
        {children}
      </MotionLink>
    );
  }

  // Otherwise, render a standard motion button
  return (
    <motion.button
      type="button"
      className={classes}
      {...pressMotion}
      {...props}
    >
      {children}
    </motion.button>
  );
}