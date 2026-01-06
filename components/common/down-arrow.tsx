"use client";

import { motion } from "framer-motion";

interface DownArrowProps {
  onClick: () => void;
}

export default function DownArrow({ onClick }: DownArrowProps) {
  return (
    <motion.button
      onClick={onClick}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="text-gray-700 hover:text-black transition"
      aria-label="Scroll to work section"
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </motion.button>
  );
}