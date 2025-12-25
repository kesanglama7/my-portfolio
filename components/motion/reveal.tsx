"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
};

const getInitialOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

const variants: Variants = {
  hidden: (custom: { direction: Direction; distance: number }) => ({
    opacity: 0,
    ...getInitialOffset(custom.direction, custom.distance),
  }),
  show: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 20,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={{ delay, duration, direction, distance }}
    >
      {children}
    </motion.div>
  );
}
