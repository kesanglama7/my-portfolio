"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Mail, RotateCcw, Send, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";
import { useToast } from "@/components/providers/toast";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TRACE_LINES = Array.from({ length: 18 });


export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const lockRef = useRef(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { showToast } = useToast();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.set(".contact-rise-panel", { yPercent: 100 });
      gsap.set(".contact-grid-dots", { opacity: 0 });
      gsap.set(".contact-card", {
        opacity: 0,
        y: 54,
        scale: 0.96,
        transformOrigin: "center center",
      });
      gsap.set(".contact-field", { opacity: 0, y: 18 });
      gsap.set(".contact-scroll-hint", { opacity: 0, y: 10 });
      gsap.set(".contact-trace-line", {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "center center",
      });
      gsap.set(".contact-signal-dot", {
        opacity: 0,
        scale: 0,
        transformOrigin: "center center",
      });
      gsap.set(".contact-final-wash", {
        clipPath: "circle(0% at 50% 50%)",
        WebkitClipPath: "circle(0% at 50% 50%)",
      });
      gsap.set(".contact-final-copy", { opacity: 0, y: 32 });

      if (prefersReducedMotion) {
        gsap.set(".contact-rise-panel", { yPercent: 0 });
        gsap.set([".contact-grid-dots", ".contact-card"], {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        gsap.set(".contact-final-wash", {
          clipPath: "circle(150% at 50% 50%)",
          WebkitClipPath: "circle(150% at 50% 50%)",
        });
        gsap.set(".contact-field", { opacity: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 0.65,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(
          ".contact-rise-panel",
          { yPercent: 0, duration: 0.75, ease: "power3.out" },
          0
        )
        .to(".contact-grid-dots", { opacity: 0.16, duration: 0.45 }, 0.28)
        .to(
          ".contact-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.62,
            ease: "power3.out",
          },
          0.62
        )
        .to(
          ".contact-field",
          {
            opacity: 1,
            y: 0,
            duration: 0.38,
            ease: "power2.out",
            stagger: 0.035,
          },
          0.92
        )
        .to(".contact-scroll-hint", { opacity: 1, y: 0, duration: 0.3 }, 1.22)
        .to({}, { duration: 0.35 })
        .to(".contact-scroll-hint", { opacity: 0, duration: 0.18 }, 1.78)
        .to(
          ".contact-card",
          {
            opacity: 0.12,
            y: -14,
            scale: 0.965,
            duration: 0.46,
            ease: "power2.inOut",
          },
          1.82
        )
        .to(
          ".contact-trace-line",
          {
            opacity: 0.72,
            scaleX: 1,
            duration: 0.44,
            ease: "power2.out",
            stagger: { amount: 0.12, from: "center" },
          },
          2.08
        )
        .to(
          ".contact-trace-line",
          {
            opacity: 0,
            scaleX: 0.02,
            duration: 0.42,
            ease: "power2.inOut",
            stagger: { amount: 0.08, from: "center" },
          },
          2.52
        )
        .to(
          ".contact-signal-dot",
          { opacity: 1, scale: 1, duration: 0.2, ease: "back.out(2)" },
          2.68
        )
        .to(".contact-card", { opacity: 0, duration: 0.18 }, 2.76)
        .to(
          ".contact-final-wash",
          {
            clipPath: "circle(150% at 50% 50%)",
            WebkitClipPath: "circle(150% at 50% 50%)",
            duration: 0.72,
            ease: "power3.inOut",
          },
          2.9
        )
        .to(
          ".contact-signal-dot",
          { opacity: 0, scale: 0.7, duration: 0.28, ease: "power2.out" },
          3.1
        )
        .to(
          ".contact-final-copy",
          {
            opacity: 1,
            y: 0,
            duration: 0.48,
            ease: "power3.out",
            stagger: 0.08,
          },
          3.32
        );

      return () => {
        timeline.kill();
      };
    },
    { scope: sectionRef }
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (lockRef.current) return;
    lockRef.current = true;
    setIsSubmitting(true);

    const formEl = formRef.current;
    const formData = new FormData(formEl ?? e.currentTarget);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      company: String(formData.get("company") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: { ok?: boolean; message?: string } = await res
        .json()
        .catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Message failed.");
      }

      showToast("Signal received. I'll get back to you soon.", "success");
      setSubmitted(true);
      formRef.current?.reset();
    } catch {
      showToast("Message could not be sent. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
      lockRef.current = false;
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative z-20 h-[285svh] bg-neutral-50"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-neutral-50">
        <div className="contact-rise-panel absolute inset-0 overflow-hidden bg-[#030303] text-neutral-50 will-change-transform">
          <div className="contact-grid-dots pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

          <div className="flex items-center justify-center z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
              <div className="contact-card relative rounded-3xl border border-white/10 bg-neutral-950 p-6 shadow-2xl shadow-black will-change-transform sm:p-10">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="contact-form"
                      ref={formRef}
                      onSubmit={onSubmit}
                      initial={false}
                      exit={{ opacity: 0, y: -12 }}
                      className="relative z-10 space-y-6"
                    >
                      <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">Project Brief</h3>
                          <p className="text-sm text-neutral-400">Send a direct message</p>
                        </div>
                      </div>

                      <input
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        className="hidden"
                        aria-hidden="true"
                      />

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="contact-field">
                          <Field label="Your Name" htmlFor="name">
                            <input
                              id="name"
                              name="name"
                              required
                              minLength={2}
                              type="text"
                              placeholder="John Doe"
                              className={inputClassName}
                            />
                          </Field>
                        </div>

                        <div className="contact-field">
                          <Field label="Email Address" htmlFor="email">
                            <input
                              id="email"
                              name="email"
                              required
                              type="email"
                              placeholder="you@example.com"
                              className={inputClassName}
                            />
                          </Field>
                        </div>
                      </div>

                      <div className="contact-field">
                        <Field label="Message" htmlFor="message">
                          <textarea
                            id="message"
                            name="message"
                            required
                            minLength={10}
                            rows={5}
                            placeholder="Tell me about your project or idea..."
                            className={cn(inputClassName, "resize-none")}
                          />
                        </Field>
                      </div>

                      <div className="contact-field flex gap-4 pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={cn(
                            "flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition-all",
                            isSubmitting
                              ? "cursor-not-allowed opacity-70"
                              : "hover:bg-neutral-200 active:scale-[0.98]"
                          )}
                        >
                          {isSubmitting ? (
                            <>
                              Sending <Loader2 className="h-4 w-4 animate-spin" />
                            </>
                          ) : (
                            <>
                              Send Message <Send className="h-4 w-4" />
                            </>
                          )}
                        </button>

                        <button
                          type="reset"
                          disabled={isSubmitting}
                          className="flex h-12 items-center justify-center rounded-xl border border-white/10 px-6 text-sm font-medium text-neutral-400 transition-colors hover:bg-white/5 hover:text-white disabled:opacity-50"
                        >
                          <RotateCcw className="h-4 w-4 sm:mr-2" />
                          <span className="hidden sm:inline">Clear</span>
                        </button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-state"
                      initial={{ opacity: 0, y: 18, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12 }}
                      className="relative z-10 flex min-h-[400px] flex-col items-center justify-center text-center"
                    >
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Signal Received</h3>
                      <p className="mt-3 text-neutral-400 max-w-sm mx-auto">
                        Your message landed safely. The auto-reply should be in
                        your inbox, and I&apos;ll follow up personally soon.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-8 rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
                      >
                        Send Another
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
          </div>

          <p className="contact-scroll-hint pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-700">
            Scroll To Close The Track
          </p>

          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center overflow-hidden">
            <div className="relative h-[70vh] w-[min(88vw,56rem)]">
              {TRACE_LINES.map((_, index) => {
                const offset = (index - (TRACE_LINES.length - 1) / 2) * 18;
                const width = Math.max(120, 760 - Math.abs(offset) * 4.8);

                return (
                  <span
                    key={`contact-trace-${index}`}
                    className="contact-trace-line absolute left-1/2 top-1/2 h-px rounded-full bg-white/60"
                    style={{
                      width: `${width}px`,
                      transform: `translate(-50%, ${offset}px)`,
                    }}
                  />
                );
              })}
            </div>

            <div className="contact-signal-dot absolute h-7 w-7 rounded-full bg-white shadow-[0_0_34px_rgba(255,255,255,0.42)] will-change-transform" />
          </div>

          <div
            className="contact-final-wash pointer-events-none absolute inset-0 z-[35] bg-neutral-50 will-change-[clip-path]"
            style={{
              clipPath: "circle(0% at 50% 50%)",
              WebkitClipPath: "circle(0% at 50% 50%)",
            }}
          />

          <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center px-4 text-center text-neutral-950">
            <div className="max-w-4xl">
              <p className="contact-final-copy mb-4 font-mono text-sm font-semibold tracking-widest text-neutral-500 uppercase">
                Signal Sent · Track Complete
              </p>
              <h2 className="contact-final-copy text-6xl font-black uppercase leading-[0.8] tracking-[-0.08em] sm:text-8xl md:text-9xl lg:text-[11rem]">
                The End
              </h2>
              <p className="contact-final-copy mx-auto mt-7 max-w-xl text-lg font-medium leading-relaxed text-neutral-600">
                But if the idea is real, this is where the next build begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
};

function Field({ label, htmlFor, children }: FieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-neutral-300"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClassName =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors placeholder:text-neutral-600 focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-0";