"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/* ─── Types ──────────────────────────────────────────────────── */
interface WobblyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

interface WobblyTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

/* ─── Shared input base classes ──────────────────────────────── */
const inputBase = [
  // Layout
  "w-full px-4 py-3 min-h-[48px]",
  // Typography
  "font-body text-base text-[var(--color-pencil)]",
  "placeholder:text-[var(--color-pencil)]/40",
  // Background
  "bg-white",
  // Border
  "border-[3px] border-[var(--color-pencil)]",
  // Shape
  "wobbly-sm",
  // Focus — blue ring, no default outline
  "outline-none",
  "focus:border-[var(--color-ink)]",
  "focus:ring-2 focus:ring-[var(--color-ink)]/20",
  // Transition
  "transition-colors duration-[100ms]",
].join(" ");

/* ─── WobblyInput ────────────────────────────────────────────── */
export const WobblyInput = forwardRef<HTMLInputElement, WobblyInputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="font-body text-sm text-[var(--color-pencil)] pl-1"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            inputBase,
            error && "border-[var(--color-marker)] focus:border-[var(--color-marker)]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="font-body text-xs text-[var(--color-marker)] pl-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);
WobblyInput.displayName = "WobblyInput";

/* ─── WobblyTextarea ─────────────────────────────────────────── */
export const WobblyTextarea = forwardRef<
  HTMLTextAreaElement,
  WobblyTextareaProps
>(({ label, error, className, id, ...props }, ref) => {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="font-body text-sm text-[var(--color-pencil)] pl-1"
        >
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={inputId}
        className={cn(
          inputBase,
          "min-h-[140px] resize-none",
          error && "border-[var(--color-marker)] focus:border-[var(--color-marker)]",
          className
        )}
        {...props}
      />
      {error && (
        <p className="font-body text-xs text-[var(--color-marker)] pl-1">
          {error}
        </p>
      )}
    </div>
  );
});
WobblyTextarea.displayName = "WobblyTextarea";