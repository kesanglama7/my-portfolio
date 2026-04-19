'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from './animation';

export default function NavLink({ data, isActive, onClick }: any) {
  return (
    <motion.div className="relative flex items-center group" custom={data.index} variants={slide} initial="initial" animate="enter" exit="exit">
      <motion.div variants={scale} animate={isActive ? "open" : "closed"} className="w-2 h-2 bg-destructive rounded-full absolute -left-8" />
      <Link href={data.href} onClick={onClick} className="text-5xl md:text-6xl font-heading hover:translate-x-2 transition-transform duration-200">
        {data.title}
      </Link>
    </motion.div>
  );
}