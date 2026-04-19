'use client'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import NavLink from './nav-links';
import Curve from './curve';
import { menuSlide } from './animation';
import { navItems } from '@/lib/static_data/nav-data';


export default function Nav({ closeMenu }: { closeMenu: () => void }) {
  const pathname = usePathname();

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className="fixed top-0 right-0 h-screen bg-[#1a1a1a] text-white z-40 w-full md:w-[450px]"
    >
       <div className="h-full p-12 flex flex-col justify-between box-border">
          <div className="flex flex-col gap-4 mt-20">
            <div className="text-[11px] text-zinc-500 border-b border-zinc-500 pb-4 uppercase tracking-widest font-heading">
              Navigation
            </div>
            {navItems.map((data, index) => (
              <NavLink 
                key={index} 
                data={{ ...data, index }} 
                isActive={pathname === data.href} 
                onClick={closeMenu}
              />
            ))}
          </div>
          
          <div className="flex w-full justify-between text-sm font-hand gap-4 opacity-50">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
          </div>
       </div>
       <Curve />
    </motion.div>
  )
}