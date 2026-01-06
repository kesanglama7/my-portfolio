import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import ScrollToTop from "@/components/common/scroll-to-top";

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
      weight: "700",
    },
  ],
  variable: "--font-drug",
});

export const metadata: Metadata = {
  title: "Kesang Lama | Portfolio",
  description: "Personal portfolio of Kesang Lama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${drugFont.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
              <Header />
              <main>
                  {children}
              </main>
              <Footer />
              <ScrollToTop />
            </div>
      </body>
    </html>
  );
}
