"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollIndicator from "@/components/common/ScrollIndicator";

const HeroSection = () => {
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // 메인 텍스트 애니메이션만 담당
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.from(nameRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    }).from(
      subtitleRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative h-screen bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center z-10">
        <h1
          ref={nameRef}
          className="text-8xl font-bold tracking-tight text-white mb-4"
        >
          HYONUN
        </h1>
        <p ref={subtitleRef} className="text-xl text-gray-300">
          FRONT-END DEVELOPER & UI ENGINEER
        </p>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
