import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectSection2 from "@/components/ProjectSection2/ProjectSection2";
import IntroductionSection from "@/components/IntroductionSection/IntroductionSection";
import SpaceBackground from "@/components/common/SpaceBackground";
import ProjectSection1 from "@/components/ProjectSection1/ProjectSection1";
import ProjectGridSection from "@/components/ProjectGridSection/ProjectGridSection";
import ProfessionalExperienceSection from "@/components/ProfessionalExperienceSection/ProfessionalExperienceSection";
export default function HomePage() {
  return (
    <main className="bg-zinc-800 flex justify-center flex-col gap-40">
      <HeroSection />
      <IntroductionSection />
      <ProjectGridSection />
      <div className="project-details">
        <ProjectSection1 />
        <ProjectSection2 />
      </div>
      <ProfessionalExperienceSection />
      <SpaceBackground />
    </main>
  );
}
