// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useCallback, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Instagram, Linkedin, Mail, Menu, X } from "lucide-react";
// import { menuItems } from "@/lib/data";

// export default function Header() {
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const scrollToTop = useCallback(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setMobileMenuOpen(false);
//   }, []);

// const scrollToSection = useCallback((id: string) => {
//   const el = document.getElementById(id);
//   if (el) {
//     // Get position
//     const headerHeight = 80; // Adjust if your header is taller/shorter
//     const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;

//     // Scroll a bit extra (200px) to push past the parallax fade zone
//     // This ensures the white projects sheet clearly comes into view
//     const offsetPosition = elementPosition - headerHeight - 200;

//     window.scrollTo({
//       top: offsetPosition,
//       behavior: "smooth",
//     });
//   }
//   setMobileMenuOpen(false);
// }, []);

//   const handleNavClick = (item: (typeof menuItems)[number]) => {
//     // ✅ only "Work" scrolls (and only on home)
//     if (isHome && item.homeId) {
//       scrollToSection(item.homeId);
//       return;
//     }

//     // otherwise just close menu (Link will navigate)
//     setMobileMenuOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white z-40 shadow-sm">
//       <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="flex items-center space-x-3 cursor-pointer select-none"
//           onClick={scrollToTop}
//         >
//           <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
//             <span className="text-white text-xl font-bold">K</span>
//           </div>
//           <span className="hidden sm:block text-lg font-semibold">Kesang Lama</span>
//                   <div className="hidden md:flex items-center space-x-8">
//           {menuItems.map((item) => {
//             // Work is special: scroll on home, link otherwise
//             if (item.homeId) {
//               return isHome ? (
//                 <motion.button
//                   key={item.label}
//                   onClick={() => handleNavClick(item)}
//                   whileHover={{ scale: 1.05 }}
//                   className="text-gray-900 hover:text-gray-600 transition font-medium text-base"
//                 >
//                   {item.label}
//                 </motion.button>
//               ) : (
//                 <motion.div key={item.label} whileHover={{ scale: 1.05 }}>
//                   <Link
//                     href={item.href}
//                     className="text-gray-900 hover:text-gray-600 transition font-medium text-base"
//                   >
//                     {item.label}
//                   </Link>
//                 </motion.div>
//               );
//             }

//             return (
//               <motion.div key={item.label} whileHover={{ scale: 1.05 }}>
//                 <Link
//                   href={item.href}
//                   className="text-gray-900 hover:text-gray-600 transition font-medium text-base"
//                 >
//                   {item.label}
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>
//         </motion.div>

//         {/* Social Icons - Desktop */}
//         <div className="hidden md:flex items-center space-x-4">
//           <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-600 hover:text-gray-900 transition">
//             <Linkedin size={20} />
//           </motion.a>
//           <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-600 hover:text-gray-900 transition">
//             <Instagram size={20} />
//           </motion.a>
//           <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-600 hover:text-gray-900 transition">
//             <Mail size={20} />
//           </motion.a>
//         </div>

//         {/* Mobile Menu Button */}
//         <motion.button
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setMobileMenuOpen((v) => !v)}
//           className="md:hidden p-2 text-gray-900"
//           aria-label="Toggle menu"
//         >
//           {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </motion.button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
//           >
//             <div className="px-4 py-4 space-y-4">
//               {menuItems.map((item, idx) =>
//                 item.homeId && isHome ? (
//                   <motion.button
//                     key={item.label}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: idx * 0.06 }}
//                     onClick={() => handleNavClick(item)}
//                     className="block w-full text-left py-2 text-lg text-gray-900 hover:text-gray-600 transition font-medium"
//                   >
//                     {item.label}
//                   </motion.button>
//                 ) : (
//                   <motion.div
//                     key={item.label}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: idx * 0.06 }}
//                   >
//                     <Link
//                       href={item.href}
//                       onClick={() => setMobileMenuOpen(false)}
//                       className="block w-full text-left py-2 text-lg text-gray-900 hover:text-gray-600 transition font-medium"
//                     >
//                       {item.label}
//                     </Link>
//                   </motion.div>
//                 )
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Menu, X } from "lucide-react";
import { menuItems } from "@/lib/data";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 200;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  }, []);

  const handleNavClick = (item: (typeof menuItems)[number]) => {
    if (isHome && item.homeId) {
      scrollToSection(item.homeId);
      return;
    }
    setMobileMenuOpen(false);
  };

  // FIXED: Proper active state detection
  const isActive = (href: string, homeId?: string) => {
    // On home page: "Work" is active (since it scrolls to section)
    if (isHome && homeId === "work") return true;
    // On other pages: exact path match
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-40 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3 cursor-pointer select-none"
          onClick={scrollToTop}
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
            {/* <span className="text-white text-xl font-bold">K</span> */}
            <Image
              src="/avatar.jpeg"
              alt="Kesang Lama Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div>
          <span className="hidden sm:block text-lg font-semibold">Kesang Lama</span>
          <span className="text-xs hidden sm:block font-medium tracking-wide">Full Stack Developer</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => {
            const active = isActive(item.href, item.homeId);

            if (item.homeId && isHome) {
              return (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  whileHover={{ scale: 1.05 }}
                  className={`transition font-medium text-base ${
                    active
                      ? "text-red-500 font-bold"
                      : "text-gray-900 hover:text-gray-600"
                  }`}
                >
                  {item.label}
                </motion.button>
              );
            }

            return (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                className={`transition font-medium text-base ${
                  active
                    ? "text-red-500 font-bold"
                    : "text-gray-900 hover:text-gray-600"
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
              </motion.div>
            );
          })}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-600 hover:text-gray-900 transition">
            <Linkedin size={20} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-600 hover:text-gray-900 transition">
            <Instagram size={20} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-600 hover:text-gray-900 transition">
            <Mail size={20} />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="md:hidden p-2 text-gray-900"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item, idx) => {
                const active = isActive(item.href, item.homeId);

                return item.homeId && isHome ? (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    onClick={() => handleNavClick(item)}
                    className={`block w-full text-left py-3 text-lg transition font-medium ${
                      active ? "text-red-500 font-bold" : "text-gray-900"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ) : (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block w-full text-left py-3 text-lg transition font-medium ${
                        active ? "text-red-500 font-bold" : "text-gray-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}