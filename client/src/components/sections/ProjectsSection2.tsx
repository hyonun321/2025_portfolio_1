"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NoctaBackground from "./components/noctaBackground";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection2() {
  const sectionRef = useRef(null);
  const projectCardRef = useRef(null);

  useEffect(() => {
    const config = {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "40% center",
        scrub: 1,
        markers: true,
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      x: 0,
      duration: 1,
    };

    gsap.fromTo(
      projectCardRef.current,
      {
        // Starting state
        opacity: 0,
        x: -500,
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
    <section ref={sectionRef} className="flex relative justify-center">
      <NoctaBackground />
      <div className="absolute z-10 container mx-auto px-4 py-20">
        <div
          ref={projectCardRef}
          className="project-card backdrop-blur-md bg-white/10 rounded-2xl p-8 transform"
        >
          <h3 className="text-2xl mb-4 text-white">
            실시간 동시편집 마크다운 에디터 Nocta
          </h3>
          <p className="text-gray-200"> 기간 : 양랄ㅇ</p>
        </div>
      </div>
    </section>
  );
}
