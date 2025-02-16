"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollIndicator from "@/components/common/ScrollIndicator";
import LanguageSelector from "../common/LanguageSelector";

const HeroSection = () => {
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const selectorRef = useRef(null); 

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.from(nameRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    })
      .from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.3"
      )
      .from(
        selectorRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.2" 
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
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-4"
        >
          HYONUN
        </h1>
        <p ref={subtitleRef} className="sm:text-sm md:text-xl text-gray-300">
          FRONT-END DEVELOPER & UI ENGINEER
        </p>
      </div>
      <div ref={selectorRef} className="mt-4 z-10">
        <LanguageSelector />
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
