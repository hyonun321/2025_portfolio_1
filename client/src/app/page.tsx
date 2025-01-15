import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import IntroductionSection from "@/components/sections/IntroductionSection";

export default function HomePage() {
  return (
    <main className="bg-red-400">
      <HeroSection />
      <ProjectsSection />
      <IntroductionSection />
    </main>
  );
}
