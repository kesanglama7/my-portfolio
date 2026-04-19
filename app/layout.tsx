import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "@/app/globals.css";
import LenisProvider from "@/providers/lenis";
import { Footer } from "@/components/common/footer";
import Header from "@/components/common/header";
import { ToastProvider } from "@/providers/toast";

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
  display: "swap",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kesang Lama — Frontend Developer",
  description:
    "Frontend Developer at Clover Tech Nepal. Building with Next.js, TypeScript, and a whole lot of midnight coffee.",
  keywords: ["Frontend Developer", "Next.js", "TypeScript", "Kathmandu", "Nepal", "Portfolio"],
  authors: [{ name: "Kesang Lama", url: "https://kesanglama.com.np" }],
  openGraph: {
    title: "Kesang Lama — Frontend Developer",
    description: "Frontend Developer at Clover Tech Nepal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${kalam.variable} ${patrickHand.variable}`}
    >
      <body>
        <LenisProvider>
          <ToastProvider>
            <Header />
            {children}
            <Footer />
          </ToastProvider>
        </LenisProvider>
      </body>
    </html>
  );
}