import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectsSection2 from "@/components/ProjectSection2/ProjectsSection2";
import IntroductionSection from "@/components/IntroductionSection/IntroductionSection";
import SpaceBackground from "@/components/common/SpaceBackground";
import ProjectsSection1 from "@/components/ProjectsSection1/ProjectsSection1";
import ProjectGridSection from "@/components/ProjectGridSection/ProjectGridSection";

export default function HomePage() {
  return (
    <main className="bg-zinc-800 flex justify-center flex-col gap-40">
      <HeroSection />
      <IntroductionSection />
      <ProjectGridSection />
      <div className="project-details">
        <ProjectsSection1 />
        <ProjectsSection2 />
      </div>
      <SpaceBackground />
    </main>
  );
}
