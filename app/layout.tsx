import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Playfair_Display, Manrope, Syne } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastProvider } from "@/components/providers/toast";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kesanglama.com.np"),
  title: {
    default: "Kesang Lama | Creative Frontend Developer",
    template: "%s | Kesang Lama",
  },
  description:
    "Frontend Developer at Clover Tech Nepal specializing in Next.js, React, TypeScript, and cinematic GSAP animations. Fueled by midnight coffee.",
  applicationName: "Kesang Lama Portfolio",
  authors: [{ name: "Kesang Lama", url: "https://kesanglama.com.np" }],
  generator: "Next.js",
  keywords: [
    "Kesang Lama",
    "Frontend Developer",
    "Creative Developer",
    "React Developer Nepal",
    "Next.js",
    "TypeScript",
    "GSAP Animation",
    "Kathmandu",
    "Nepal",
    "Portfolio",
  ],
  creator: "Kesang Lama",
  publisher: "Kesang Lama",
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  openGraph: {
    title: "Kesang Lama | Creative Frontend Developer",
    description: "Frontend Developer based in Nepal, building interactive web experiences with Next.js, TypeScript, and GSAP.",
    url: "https://kesanglama.com.np",
    siteName: "Kesang Lama Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // You need to place a 1200x630 image in your /public folder
        width: 1200,
        height: 630,
        alt: "Kesang Lama - Frontend Developer Portfolio",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Kesang Lama | Creative Frontend Developer",
    description: "Frontend Developer based in Nepal, building interactive web experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", notoSans.variable, playfairDisplayHeading.variable, manrope.variable, syne.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ToastProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
