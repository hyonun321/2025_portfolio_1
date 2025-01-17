// src/components/Interactive/AnimatedSection.tsx
"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function AnimatedSection() {
  useEffect(() => {
    // GSAP 애니메이션 설정
    gsap.from(".animated-element", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".animated-element",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="animated-element py-20">
      <div className="container mx-auto px-4">
        <h2>프로젝트 소개</h2>
        {/* 컨텐츠 */}
      </div>
    </section>
  );
}
