"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextAnimation() {
  const startTrigger = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const borderText1 = useRef(null);
  const borderText2 = useRef(null);

  // GSAP 애니메이션 설정
  useEffect(() => {
    const config = {
      scrollTrigger: {
        trigger: startTrigger.current,
        start: "top top",
        toggleActions: "play play play play",
        scrub: 1,
      },
      x: 1500,
      duration: 1,
    };

    gsap.to(text1.current, config);
    gsap.to(borderText1.current, config);
    gsap.to(text2.current, {
      ...config,
      x: -1500,
    });
    gsap.to(borderText2.current, {
      ...config,
      x: -1500,
    });
  }, []);

  const [isShown, setIsShown] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerHeight < window.pageYOffset) setIsShown(false);
      else setIsShown(true);
    });
  }, []);

  return (
    <div
      ref={startTrigger}
      className={`w-full h-screen overflow-hidden flex items-center relative
        ${isShown ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
    >
      {/* 메인 텍스트 레이어 */}
      <div className="absolute top-1/4 w-full">
        <div
          ref={text1}
          className="font-montserrat font-black text-9xl leading-[14.6rem] whitespace-nowrap text-blue-600
            md:whitespace-pre-line"
        >
          HYONUN
        </div>
        <div
          ref={text2}
          className="font-montserrat font-black text-9xl leading-[14.6rem] whitespace-nowrap text-blue-600
            absolute right-0 md:text-6xl"
        >
          FRONTEND
        </div>
      </div>

      {/* 중앙 원 */}
      <div className="w-full h-screen flex items-center justify-center">
        <div className="relative w-[35rem] h-[35rem] rounded-full bg-white"></div>
      </div>

      {/* 테두리 텍스트 레이어 */}
      <div className="absolute top-1/4 w-full">
        <div
          ref={borderText1}
          className="font-montserrat font-black text-9xl leading-[14.6rem] whitespace-nowrap
            text-transparent [-webkit-text-stroke:0.02em_#4444ff] md:whitespace-pre-line"
        >
          HYONUN
        </div>
        <div
          ref={borderText2}
          className="font-montserrat font-black text-9xl leading-[14.6rem] whitespace-nowrap
            text-transparent [-webkit-text-stroke:0.02em_#4444ff] absolute right-0 md:text-6xl"
        >
          FRONTEND
        </div>
      </div>
    </div>
  );
}
