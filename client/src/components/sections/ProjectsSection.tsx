"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const projects = gsap.utils.toArray(".project-card");

    projects.forEach((project) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "top 30%",
          end: "top 10%",
          scrub: 1,
        },
        opacity: 0,
        x: 50,
        scale: 0.9,
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="project-card bg-white rounded-2xl shadow-lg p-8 transform transition-all">
            <h3 className="text-2xl font-semibold mb-4">프로젝트 1</h3>
            <p className="text-gray-600">프로젝트 설명이 들어갑니다.</p>
          </div>
          {/* 더 많은 프로젝트 카드들... */}
        </div>
      </div>
    </section>
  );
}
