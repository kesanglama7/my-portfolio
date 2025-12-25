'use client'
import HeroSection from "@/components/common/hero-section";
import { Navbar } from "@/components/common/navbar";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-100"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
