"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function IntroductionSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const projects = gsap.utils.toArray(".project-card");

    projects.forEach((project) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
        opacity: 0,
        y: 100,
        scale: 0.9,
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex relative min-h-screen min-w-full justify-center mb-10"
    >
      <div className="absolute z-10 container mx-auto px-4 py-20">
        <div
          ref={projectCardRef}
          className="project-card backdrop-blur-m rounded-2xl p-8 transform"
        >
          <h3 className="flex text-5xl font-semibold mb-4 text-white justify-center items-center">
            Frontend <br />
            움직이는 애니메이션에 프로그래스바 추가
          </h3>
          <span className="flex flex-col border-x rounded-2xl">
            <MeProfileImage />
            <SkillCards />
          </span>
        </div>
      </div>
    </section>
  );
}
