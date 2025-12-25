"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToHash = (hash: string) => {
    // runs only in browser (called from clicks)
    const id = hash.startsWith("#") ? hash : `#${hash}`;
    const el = document.querySelector(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToHash(href);
  };

  const onHireMe = () => {
    setIsOpen(false);
    scrollToHash("#contact");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Home */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-110 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight text-white">
            RavenDA
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => onNavClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="default" size="sm" onClick={onHireMe}>
            Hire Me
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => onNavClick(e, link.href)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-4" onClick={onHireMe}>
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
