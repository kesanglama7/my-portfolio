"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import LiveSignature from "./live-signature";

type PreloaderProps = {
  onComplete: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.45,
          ease: "easeOut",
        },
      }}
    >
      <motion.div
        className="w-[280px] sm:w-[420px] md:w-[540px]"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <LiveSignature />
      </motion.div>
    </motion.div>
  );
}