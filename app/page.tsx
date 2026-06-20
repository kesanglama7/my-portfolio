"use client";

import { useCallback, useState } from "react";

import Header from "@/components/common/header";
import Preloader from "@/components/customs/preloader";
import ScrollProvider from "@/components/providers/scroll-provider";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Works from "@/components/sections/works";
import JourneyA from "@/components/sections/jorney-full";
import Contact from "@/components/sections/contact";

export default function Page() {
  const [showPreloader, setShowPreloader] =
    useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setShowPreloader(false);
  }, []);

  return (
    <ScrollProvider>
      <Header PERSON_NAME="Kesang Lama" />

      <main
        className="relative w-full"
      >
        <Hero isReady={!showPreloader} />

        {showPreloader && (
          <Preloader
            onComplete={handlePreloaderComplete}
          />
        )}

        <Skills />

        <Works />

        {/* <Journey /> */}
        <JourneyA />
        <Contact />
      </main>
    </ScrollProvider>
  );
}