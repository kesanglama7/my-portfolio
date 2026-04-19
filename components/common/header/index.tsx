'use client'
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
// import Navbar from './components/desktop-nav';
import Nav from './components/mobile-nav';
import { Navbar } from '../nav-bar';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="relative w-full z-50">
      <Navbar />
      <div className="lg:hidden fixed top-4 right-6 z-[100]">
        <button 
          onClick={() => setIsActive(!isActive)} 
          className="w-10 h-10 bg-primary rounded-wobbly-sm flex items-center justify-center cursor-pointer shadow-hard border-2 border-black"
        >
          <div className={`relative w-5 transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`}>
            <div className={`h-[2px] w-full bg-white transition-all ${isActive ? 'translate-y-[1px]' : '-translate-y-1.5'}`} />
            <div className={`h-[2px] w-full bg-white transition-all ${isActive ? '-rotate-90 -translate-y-[1px]' : 'translate-y-1.5'}`} />
          </div>
        </button>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav closeMenu={() => setIsActive(false)} />}
      </AnimatePresence>
    </header>
  );
}