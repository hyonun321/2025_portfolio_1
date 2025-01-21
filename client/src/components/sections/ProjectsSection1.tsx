"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SpeakerBackground from "../Background/noctaBackground";

// Register ScrollTrigger once at the top level
gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection1() {
  const sectionRef = useRef(null);
  const projectCardRef = useRef(null);

  useEffect(() => {
    // Create the animation configuration
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
      <SpeakerBackground />
      <div className="absolute z-10 container mx-auto px-4 py-20">
        <div
          ref={projectCardRef}
          className="project-card backdrop-blur-md bg-white/10 rounded-2xl p-8 transform"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            얼굴 추적 지향성 스피커
          </h3>
          <p className="text-gray-200">프로젝트 설명이 들어갑니다.</p>
        </div>
      </div>
    </section>
  );
}
