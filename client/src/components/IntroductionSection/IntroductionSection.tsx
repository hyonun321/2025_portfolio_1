"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SkillCards from "./components/SkillCards";
import MeProfileImage from "./components/MeProfileImage";
import RotatingText from "./components/RotatingText";
import IntroduceCard from "./components/IntroduceCard";
import ProgrammingSkills from "./components/ProgrammingSkills";
gsap.registerPlugin(ScrollTrigger);

export default function IntroductionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const config = {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "40% center",
          scrub: 1,
          markers: false,
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
      };

      gsap.fromTo(
        projectCardRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          ...config,
          scale: 1,
        }
      );
    });

    mm.add("(max-width: 767px)", () => {
      const config = {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "40% center",
          scrub: 1,
          markers: false,
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
      };

      gsap.fromTo(
        projectCardRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          ...config,
          scale: 1,
        }
      );
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex relative min-h-screen min-w-full justify-center"
    >
      <div className="z-10 container mx-auto px-2 py-6 md:px-4 md:py-10">
        <div
          ref={projectCardRef}
          className="project-card backdrop-blur-md rounded-2xl p-4 md:p-8 transform"
        >
          <h3 className="flex flex-col text-2xl md:text-5xl font-semibold mb-2 md:mb-4 text-white justify-center items-center">
            <RotatingText />
          </h3>
          <div className="flex flex-col border-x rounded-2xl p-4 md:p-16 gap-4 md:gap-16">
            <div className="flex flex-col md:flex-row mb-2 md:mb-5 justify-center items-center">
              <MeProfileImage />
              <IntroduceCard />
            </div>
            <ProgrammingSkills />
            <SkillCards />
          </div>
        </div>
      </div>
    </section>
  );
}
