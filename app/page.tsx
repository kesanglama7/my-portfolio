// 'use client'

// import HomeParallax from "@/components/motion/home-parallax";

// export default function Home() {

//   return (
//     <HomeParallax />
//   );
// }




import type { Metadata } from "next";
import HomeParallax from "@/components/motion/home-parallax";

export const metadata: Metadata = {
  title: "Kesang Lama — Multidisciplinary Designer & Developer",
  description:
    "Portfolio of Kesang Lama, a multidisciplinary designer and full-stack developer from Nepal. Selected works, design systems, and web projects.",
  keywords: [
    "Kesang Lama",
    "Web Developer Nepal",
    "UI UX Designer Nepal",
    "Next.js Developer",
    "Full Stack Developer Nepal",
  ],
  openGraph: {
    title: "Kesang Lama — Designer & Developer",
    description:
      "Selected works and digital experiences by Kesang Lama. Designer & full-stack developer from Nepal.",
    url: "https://yourdomain.com",
    siteName: "Kesang Lama Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kesang Lama — Designer & Developer",
    description:
      "Multidisciplinary designer & full-stack developer from Nepal.",
  },
};

export default function Home() {
  return <HomeParallax />;
}
