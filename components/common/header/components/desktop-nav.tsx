'use client'
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { title: "Portfolio", href: "/portfolio" },
  { title: "Career", href: "/career" },
  { title: "About Us", href: "/about" },
];

export default function Navbar() {
  return (
    <nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between ">
      <Link href="/" className="flex items-center gap-3 group">
        <Image src="/logo.svg" alt="Clover Tech Logo" width={40} height={40} />
        <h2 className="font-heading font-bold leading-[0.85] tracking-tighter text-lg sm:text-xl">Clover Tech Nepal</h2>
      </Link>

      <div className="hidden lg:flex items-center gap-10">
        {navItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className="font-body text-xl hover:text-primary transition-colors relative group"
          >
            {item.title}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-destructive group-hover:w-full transition-all duration-300 rotate-[-1deg]" />
          </Link>
        ))}

        <Link 
          href="/contact" 
          className="wobbly-box px-6 py-2 bg-white font-body text-xl hover:bg-destructive hover:text-white transition-colors border-2 border-black"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}