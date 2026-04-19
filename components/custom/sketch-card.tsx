"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/* ─── Types ──────────────────────────────────────────────────── */
type Decoration = "tape" | "tack" | "none";
type RadiusVariant = "wobbly" | "wobbly-md" | "wobbly-sm";

interface SketchCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  /** Visual decoration pinned to the top of the card */
  decoration?: Decoration;
  /** Which wobbly radius to apply */
  radius?: RadiusVariant;
  /** Tailwind rotate class — e.g. "rotate-1" or "-rotate-2" */
  tilt?: string;
  /** Post-it yellow background */
  postit?: boolean;
  /** Remove the border entirely */
  noBorder?: boolean;
  /** Override default shadow — pass a custom shadow class */
  shadowClass?: string;
  /** Disable the hover jiggle (e.g. for static containers) */
  noHover?: boolean;
}

export function SketchCard({
  children,
  decoration = "none",
  radius = "wobbly-md",
  tilt,
  postit = false,
  noBorder = false,
  shadowClass = "shadow-hard",
  noHover = false,
  className,
  ...props
}: SketchCardProps) {
  // Determine jiggle direction from tilt so it feels natural
  const jiggleRotate = tilt?.startsWith("-") ? -2 : 1.5;

  return (
    <motion.div
      className={cn(
        // Base
        "relative bg-white p-6",
        // Border
        !noBorder && "border-[3px] border-[var(--color-pencil)]",
        // Radius (CSS class, not Tailwind utility)
        radius,
        // Shadow
        shadowClass,
        // Post-it
        postit && "bg-[var(--color-postit)]",
        // Tilt
        tilt,
        className
      )}
      // Framer Motion: jiggle on hover (disabled when noHover)
      whileHover={
        noHover
          ? undefined
          : {
              rotate: jiggleRotate,
              scale: 1.02,
              transition: { duration: 0.1, ease: "easeOut" },
            }
      }
      {...props}
    >
      {/* Decorations — absolutely positioned, outside normal flow */}
      {decoration === "tape" && (
        <div className="tape" aria-hidden="true" />
      )}
      {decoration === "tack" && (
        <div className="tack" aria-hidden="true" />
      )}

      {children}
    </motion.div>
  );
}