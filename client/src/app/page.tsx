import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection1 from "@/components/sections/ProjectsSection1";
import IntroductionSection from "@/components/sections/IntroductionSection";
import SpaceBackground from "@/components/common/SpaceBackground";
import ProjectsSection2 from "@/components/sections/ProjectsSection2";

export default function HomePage() {
  return (
    <main className="bg-zinc-800 flex justify-center flex-col">
      <HeroSection />
      <IntroductionSection />
      <ProjectsSection2 />
      <ProjectsSection1 />
      <SpaceBackground />
    </main>
  );
}
