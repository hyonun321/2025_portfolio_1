"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SkillCards from "./components/SkillCards";
import MeProfileImage from "./components/MeProfileImage";

// Register ScrollTrigger once at the top level
gsap.registerPlugin(ScrollTrigger);

export default function IntroductionSection() {
  const sectionRef = useRef(null);
  const projectCardRef = useRef(null);

  useEffect(() => {
    // Create the animation configuration
    const config = {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "45% center",
        scrub: 1,
        markers: true,
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: 1,
    };

    gsap.fromTo(
      projectCardRef.current,
      {
        // Starting state
        opacity: 0,
        y: 100,
        scale: 0.9,
      },
      {
        ...config,
        scale: 1,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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
