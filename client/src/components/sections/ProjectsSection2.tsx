"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NoctaBackground from "../Background/noctaBackground";
export default function ProjectsSection2() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger 플러그인을 등록합니다
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(
      sectionRef,
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "0% center",
          end: "15% 80%",
          scrub: 1,
          markers: true,
          toggleActions: "play play play play",
        },
      },
      { x: -1500, duration: 1 }
    );
  });

  return (
    <section ref={sectionRef} className="relative h-max">
      <NoctaBackground />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="project-card backdrop-blur-md bg-white/10 rounded-2xl p-8 transform transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              실시간 동시편집 마크다운 에디터 Nocta
            </h3>
            <p className="text-gray-200">프로젝트 설명이 들어갑니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
