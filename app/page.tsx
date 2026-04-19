import { CTASection } from "@/components/main/cta-section";
import { HeroSection } from "@/components/main/hero-section";
import { ProcessSection } from "@/components/main/process-section";
import ProjectSection from "@/components/main/project-section";

export default function Home() {
  return (
      <main>
        <HeroSection />
        <ProjectSection />
        <ProcessSection />
        <CTASection />
      </main>
  );
}
