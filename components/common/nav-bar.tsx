"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PenLine } from "lucide-react";
import { WobblyButton } from "@/components/custom/wobbly-button";
import { cn } from "@/lib/utils";
import { navItems } from '@/lib/static_data/nav-data';

export function Navbar() {
const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-30",
          "transition-all duration-300",
          scrolled
            ? "bg-[var(--color-paper)]/90 backdrop-blur-sm border-b-[3px] border-[var(--color-pencil)]"
            : "bg-transparent"
        )}
      >
        <nav
          className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Kesang Lama — home"
          >
            <motion.div
              className={cn(
                "w-9 h-9 flex items-center justify-center",
                "bg-[var(--color-pencil)] text-[var(--color-paper)]",
                "border-[3px] border-[var(--color-pencil)]",
                "wobbly-btn shadow-hard-sm"
              )}
              whileHover={{ rotate: -8, scale: 1.1 }}
              transition={{ duration: 0.1 }}
            >
              <PenLine size={18} strokeWidth={2.5} />
            </motion.div>
            <span className="font-heading text-xl font-bold leading-none">
              Kesang<span className="text-[var(--color-marker)]">.</span>
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navItems.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 font-body text-lg",
                      "text-[var(--color-pencil)] transition-colors duration-100",
                      "hover:text-[var(--color-marker)]",
                      "group"
                    )}
                  >
                    {link.title}
                    {/* Wobbly underline on active / hover */}
                    <motion.span
                      className="absolute bottom-0 left-2 right-2 h-[3px] bg-[var(--color-marker)] wobbly-sm"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.15 }}
                      style={{ originX: 0 }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:block">
            <WobblyButton
              href="/contact"
              variant="primary"
              className="text-base! px-5 py-2"
            >
              Contact Me ✏️
            </WobblyButton>
          </div>

          {/* ── Mobile hamburger ── */}
          <motion.button
            className={cn(
              "md:hidden flex items-center justify-center",
              "w-10 h-10 border-[3px] border-[var(--color-pencil)]",
              "bg-white wobbly-btn shadow-hard-sm",
              "cursor-pointer"
            )}
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.92 }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </motion.button>
        </nav>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-[var(--color-pencil)]/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              className={cn(
                "fixed top-0 right-0 bottom-0 z-50 w-[280px]",
                "bg-[var(--color-paper)]",
                "border-l-[3px] border-[var(--color-pencil)]",
                "flex flex-col pt-20 px-8 gap-6",
                // Dot grid inside drawer
                "bg-[radial-gradient(var(--color-muted)_1px,transparent_1px)] [background-size:20px_20px]"
              )}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close button */}
              <motion.button
                className={cn(
                  "absolute top-4 right-4",
                  "w-10 h-10 flex items-center justify-center",
                  "border-[3px] border-[var(--color-pencil)] bg-white",
                  "wobbly-btn shadow-hard-sm cursor-pointer"
                )}
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <X size={18} strokeWidth={2.5} />
              </motion.button>

              {/* Mobile nav links */}
              <ul className="flex flex-col gap-2" role="list">
                {navItems.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block font-heading text-3xl font-bold py-2",
                        "text-[var(--color-pencil)] hover:text-[var(--color-marker)]",
                        "transition-colors duration-100",
                        pathname === link.href && "text-[var(--color-marker)]"
                      )}
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <hr className="dashed-divider" />

              <WobblyButton href="/contact" variant="primary" className="w-full justify-center">
                Hire me ✏️
              </WobblyButton>

              {/* Decorative sticky note */}
              <div className={cn(
                "mt-auto mb-8 p-4 bg-[var(--color-postit)]",
                "border-[3px] border-[var(--color-pencil)]",
                "wobbly shadow-hard rotate-1 text-sm font-body"
              )}>
                Currently open to<br />
                <strong>freelance & full-time</strong><br />
                opportunities 🚀
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}