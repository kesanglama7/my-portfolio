import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface StickyTagProps {
  children: ReactNode;
  /** Tailwind rotate class — defaults to -rotate-1 */
  tilt?: string;
  /** Use marker red instead of post-it yellow */
  accent?: boolean;
  className?: string;
}

/**
 * A small sticky-note style label.
 * Used for section labels, skill badges, tech tags, etc.
 *
 * @example
 * <StickyTag>React</StickyTag>
 * <StickyTag accent tilt="rotate-1">Hired!</StickyTag>
 */
export function StickyTag({
  children,
  tilt = "-rotate-1",
  accent = false,
  className,
}: StickyTagProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1",
        "font-body text-sm text-[var(--color-pencil)]",
        "border-2 border-[var(--color-pencil)]",
        "wobbly-sm shadow-hard-sm",
        accent
          ? "bg-[var(--color-marker)] text-white"
          : "bg-[var(--color-postit)]",
        tilt,
        className
      )}
    >
      {children}
    </span>
  );
}