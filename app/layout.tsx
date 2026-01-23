import { Poppins } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import ScrollToTop from "@/components/common/scroll-to-top";
import JsonLd from "@/lib/seo/jsonld";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// layout.tsx
const drugFont = LocalFont({
  src: [
    {
      path: "../public/fonts/Drugs-Thin.otf",
      weight: "100",
    },
    {
      path: "../public/fonts/Drugs-Light.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/Drugs-Regular.otf", // Regular
      weight: "400",
    },
    {
      path: "../public/fonts/Drugs-Bold.otf",
      weight: "800",
    },
  ],
  variable: "--font-drug",
});

const cursiveFont = LocalFont({
  src: [
    {
      path: "../public/fonts/cursive.ttf",
      weight: "500",
    },
  ],
  variable: "--font-cursive",
});

export const metadata = {
  metadataBase: new URL("https://www.kesanglama.com.np"),
  title: "Kesang Lama — Multidisciplinary Designer & Developer",
  description:
    "Portfolio of Kesang Lama. Multidisciplinary designer & full-stack developer from Nepal.",
  openGraph: {
    title: "Kesang Lama — Designer & Developer",
    description:
      "Portfolio of Kesang Lama. Multidisciplinary designer & full-stack developer from Nepal.",
    url: "https://www.kesanglama.com.np",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", sizes: "96x96", type: "image/png" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${drugFont.variable} ${cursiveFont.variable} font-sans antialiased`}>
        <JsonLd />
        <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
              <Header />
              <main>
                  {children}
                  <Toaster richColors />
              </main>
              <Footer />
              <ScrollToTop />
            </div>
      </body>
    </html>
  );
}
