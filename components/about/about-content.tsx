// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import type { Variants } from "framer-motion";

// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: { duration: 0.65, ease: EASE },
//   },
// };

// const line: Variants = {
//   hidden: { scaleX: 0, opacity: 0 },
//   show: {
//     scaleX: 1,
//     opacity: 1,
//     transition: { duration: 0.7, ease: EASE },
//   },
// };

// const listItem: Variants = {
//   hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: { duration: 0.55, ease: EASE },
//   },
// };

// type Row = {
//   title: string;
//   org: string;
//   meta?: string;
//   date?: string;
// };

// const WORK: Row[] = [
//   {
//     title: "Junior Frontend Developer",
//     org: "Clover Tech Nepal",
//     meta: "Next.js • Multi-vendor e-commerce • Client-driven projects • Jewellery retail systems",
//     date: "(Current)",
//   },
//   {
//     title: "Frontend Developer (Intern → Trainee)",
//     org: "Clover Tech Nepal",
//     meta: "React internship → Next.js traineeship with production workflows and component architecture",
//     date: "(Past)",
//   },
//   {
//     title: "Computer Science Teacher",
//     org: "Higher Secondary Level",
//     meta: "Taught CS fundamentals, programming basics, and digital literacy",
//   },
//   {
//     title: "Invoice & Data Handler",
//     org: "Lama Corporation",
//     meta: "Handled invoicing, data records, and operational documentation",
//   },
//   {
//     title: "Co-Trainer / Volunteer",
//     org: "Book Free Friday Program — Kathmandu Metropolitan City",
//     meta: "Co-facilitated by Digital & Beyond Pvt. Ltd. (Google for Education Partner). Covered Raspberry Pi Code Club, Scratch, and Google CS First curriculum",
//   },
//   {
//     title: "Freelance Developer",
//     org: "Independent",
//     meta: "Building small SaaS tools and custom web solutions for clients alongside full-time work",
//   },
// ];

// const EDUCATION: Row[] = [
//   {
//     title: "Bachelor of Computer Applications (BCA)",
//     org: "Arunima College",
//     meta: "Tribhuvan University (TU), Nepal",
//     date: "(Recently Graduated)",
//   },
// ];

// function SectionTitle({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.h2
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.3 }}
//       className="mt-12 text-sm font-semibold tracking-[0.14em] text-black"
//     >
//       {children}
//     </motion.h2>
//   );
// }

// export default function AboutContent() {
//   return (
//     <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 bg-white">
//       {/* Header */}
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.4 }}
//       >
//         <h1 className="text-xl sm:text-2xl font-semibold tracking-wide text-black">
//           KESANG LAMA
//         </h1>
//         <p className="mt-2 text-sm text-black/60">
//           Frontend-focused developer • Next.js • TypeScript
//         </p>

//         <p className="mt-7 text-[15px] leading-7 text-black/80">
//   Kesang Lama is a frontend-focused developer working with Next.js and
//   TypeScript to build clean, scalable web applications. Recently graduated with
//   a Bachelor of Computer Applications (BCA), he focuses on turning real-world
//   requirements into usable, maintainable interfaces.
//   <br />
//   <br />
//   Currently a Junior Frontend Developer at Clover Tech Nepal, he works on
//   client-driven projects including multi-vendor e-commerce platforms and retail
//   systems, while also building small SaaS tools as a freelancer.
// </p>

//       </motion.div>

//       {/* Divider */}
//       <motion.div
//         variants={line}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.4 }}
//         className="mt-10 h-px w-full origin-left bg-black/20"
//       />

//       {/* WORK */}
//       <SectionTitle>WORK EXPERIENCE</SectionTitle>

//       <motion.div
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         className="mt-6 space-y-5"
//       >
//         {WORK.map((w) => (
//           <motion.div
//             key={`${w.title}-${w.org}`}
//             variants={listItem}
//             className="border-b border-black/10 pb-5 last:border-b-0 last:pb-0"
//           >
//             <p className="text-[14px] leading-6 text-black font-medium">
//               {w.title} <span className="font-normal text-black/75">— {w.org}</span>{" "}
//               {w.date ? <span className="text-black/55">{w.date}</span> : null}
//             </p>

//             {w.meta ? (
//               <p className="mt-1 text-[13px] leading-6 text-black/65">
//                 {w.meta}
//               </p>
//             ) : null}
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Divider */}
//       <motion.div
//         variants={line}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.4 }}
//         className="mt-12 h-px w-full origin-left bg-black/20"
//       />

//       {/* EDUCATION */}
//       <SectionTitle>EDUCATION</SectionTitle>

//       <motion.div
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         className="mt-6 space-y-5"
//       >
//         {EDUCATION.map((e) => (
//           <motion.div
//             key={`${e.title}-${e.org}`}
//             variants={listItem}
//             className="border-b border-black/10 pb-5 last:border-b-0 last:pb-0"
//           >
//             <p className="text-[14px] leading-6 text-black font-medium">
//               {e.title},{" "}
//               <span className="font-normal text-black/75">{e.org}</span>{" "}
//               {e.meta ? <span className="text-black/60">— {e.meta}</span> : null}{" "}
//               {e.date ? <span className="text-black/55">{e.date}</span> : null}
//             </p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }




















"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
};

const line: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE },
  },
};

// ✅ Parent variants for lists (THIS is the fix)
const listContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-12 text-sm font-semibold tracking-[0.14em] text-black uppercase"
    >
      {children}
    </motion.h2>
  );
}

export default function AboutContent() {
  const workItems = [
    {
      title: "Junior Frontend Developer",
      org: "Clover Tech Nepal",
      meta: "Turning client “just make it pop” notes into responsive trauma • Multi-vendor e-commerce • Jewellery shop system • CSS currently winning 3–1",
      date: "(Current – send coffee)",
    },
    {
      title: "Frontend Developer (Intern → Trainee)",
      org: "Clover Tech Nepal",
      meta: "Survived React bootcamp, upgraded to Next.js production torture • Discovered that clean architecture means “rewrite it again tomorrow”",
      date: "(Past – therapy pending)",
    },
    {
      title: "Computer Science Teacher",
      org: "Higher Secondary Level",
      meta: "Taught kids programming before they found ChatGPT and questioned my entire existence",
    },
    {
      title: "Invoice & Data Handler",
      org: "Lama Corporation",
      meta: "Entered invoice data: barcodes, retail prices, bought/sold items • Modisoft C-Store prisoner • Chaos digitized, meaning not so much",
    },
    {
      title: "Co-Trainer / Volunteer",
      org: "Book Free Friday Program — Kathmandu Metropolitan City",
      meta: "Subjected children to Scratch and Raspberry Pi • Google CS First survivor • They still recognize me in Baudhanath",
    },
    {
      title: "Freelance Developer",
      org: "Independent",
      meta: "Crafting small SaaS tools nobody will ever use • Vibe-coding at 2 a.m. • My co-founder is existential dread",
    },
  ];

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 bg-white">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h1 className="text-xl sm:text-2xl font-semibold tracking-wide text-black">
          KESANG LAMA
        </h1>
        <p className="mt-2 text-sm text-black/60">
          Frontend mercenary • Next.js • TypeScript • Occasional vibe code
        </p>

        <p className="mt-7 text-[14px] leading-7 text-black/80">
          I make pixels behave so strangers can buy shiny things they’ll regret later.
          <br />
          Next.js pays the rent. TypeScript reminds me I’m replaceable.
          <br />
          BCA certificate exists — mostly for framing excuses.
          <br />
          Clover keeps the lights on. Freelance keeps the midnight regret cinematic.
        </p>
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={line}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mt-10 h-px w-full origin-left bg-black/20"
      />

      {/* WORK EXPERIENCE */}
      <SectionTitle>WORK EXPERIENCE (times I sold sleep for commits)</SectionTitle>

      {/* ✅ Add variants + viewport here */}
      <motion.div
        variants={listContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 space-y-6"
      >
        {workItems.map((item, index) => (
          <motion.div
            key={`${item.title}-${index}`}
            variants={listItem}
            className="border-b border-black/10 pb-6 last:border-b-0 last:pb-0"
          >
            <p className="text-[14px] leading-6 text-black font-medium">
              {item.title}{" "}
              <span className="font-normal text-black/75">— {item.org}</span>{" "}
              {item.date && <span className="text-black/55">{item.date}</span>}
            </p>
            {item.meta && (
              <p className="mt-1 text-[13px] leading-6 text-black/65">
                {item.meta}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={line}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mt-12 h-px w-full origin-left bg-black/20"
      />

      {/* EDUCATION */}
      <SectionTitle>EDUCATION (the part that looks good on paper)</SectionTitle>

      {/* ✅ Add variants + viewport here too */}
      <motion.div
        variants={listContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 space-y-5"
      >
        <motion.div
          variants={listItem}
          className="border-b border-black/10 pb-5 last:border-b-0 last:pb-0"
        >
          <p className="text-[14px] leading-6 text-black font-medium">
            Bachelor of Computer Applications (BCA),{" "}
            <span className="font-normal text-black/75">Arunima College</span>{" "}
            <span className="text-black/60">— Tribhuvan University, Nepal</span>{" "}
            <span className="text-black/55">
              (Recently Graduated – still waiting for adult mode to unlock)
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
