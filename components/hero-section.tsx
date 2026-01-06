// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   const scrollToWork = () => {
//     const el = document.getElementById("work");
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="min-h-screen flex flex-col items-center justify-center relative"
//     >
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//         className="text-left max-w-6xl ml-0 mt-0 lg:-ml-[300px] lg:-mt-[150px]"
//       >
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
//           Hello. I am Kesang Lama.
//         </h1>
//         <p className="text-[12px] sm:text-lg md:text-xl text-gray-500">
//           Multidisciplinary Designer always loves more than just one thing.
//         </p>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.button
//         onClick={scrollToWork}
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 1.5 }}
//         className="absolute bottom-10 text-gray-700 hover:text-black transition focus:outline-none"
//         aria-label="Scroll to work section"
//       >
//         <svg
//           width="40"
//           height="40"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//         >
//           <polyline points="6 9 12 15 18 9" />
//         </svg>
//       </motion.button>
//     </motion.section>
//   );
// }



// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   const scrollToWork = () => {
//     window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
//   };

//   return (
//     <motion.section
//       className="min-h-screen flex flex-col items-center justify-center relative bg-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//         className="text-left max-w-6xl px-6 lg:-ml-[450px] lg:-mt-[120px]"
//       >
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
//           Hello. I am Kesang Lama.
//         </h1>
//         <p className="text-sm sm:text-lg md:text-xl text-gray-500">
//           Multidisciplinary Designer always loves more than just one thing.
//         </p>
//       </motion.div>

//       <motion.button
//         onClick={scrollToWork}
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 1.5 }}
//         className="absolute bottom-10 text-gray-700 hover:text-black transition"
//         aria-label="Scroll to work section"
//       >
//         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <polyline points="6 9 12 15 18 9" />
//         </svg>
//       </motion.button>
//     </motion.section>
//   );
// }





"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-white">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-left max-w-6xl px-6 lg:-ml-[450px] lg:-mt-[50px]"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          Hello. I am Kesang Lama.
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-gray-500">
          Frontend by passion, full-stack by responsibility — building with Next.js.
        </p>
      </motion.div>
    </section>
  );
}