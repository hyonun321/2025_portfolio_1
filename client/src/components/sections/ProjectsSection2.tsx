"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NoctaBackground from "../Background/noctaBackground";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection2() {
  const sectionRef = useRef(null);
  const projectCardRef = useRef(null);

  useEffect(() => {
    const config = {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
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
    <section ref={sectionRef} className="flex relative min-h-screen">
      <NoctaBackground />
      <div className="absolute z-10 container mx-auto px-4 py-20">
        <div
          ref={projectCardRef}
          className="project-card backdrop-blur-md bg-white/10 rounded-2xl p-8 transform"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            실시간 동시편집 마크다운 에디터 Nocta
          </h3>
          <p className="text-gray-200">프로젝트 설명이 들어갑니다.</p>
        </div>
      </div>
    </section>
  );
}
