"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProgressBar from "@/components/common/PrograssBar";
const texts = ["Frontend", "HTML/CSS", "Javascript", "Typescript"];

export default function RotatingText() {
  const textRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    textRefs.current.forEach((textRef) => {
      if (!textRef) return;

      gsap.set(textRef, {
        x: "100%",
        opacity: 0,
      });

      timeline
        .to(textRef, {
          x: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(textRef, {
          x: "0%",
          opacity: 1,
          duration: 3,
        })
        .to(textRef, {
          x: "-100%",
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        });
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-20 w-full overflow-hidden">
      {texts.map((text, index) => (
        <div
          key={text}
          ref={(el: HTMLDivElement | null): void => {
            textRefs.current[index] = el;
          }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-5xl font-bold text-white"
        >
          {text}
        </div>
      ))}
      <ProgressBar />
    </div>
  );
}
