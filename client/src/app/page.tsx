import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import SpaceBackground from "@/components/common/SpaceBackground";

export default function HomePage() {
  return (
    <main className="bg-red-400">
      <HeroSection />
      <ProjectsSection />
      <IntroductionSection />
      <SpaceBackground />
    </main>
  );
}
