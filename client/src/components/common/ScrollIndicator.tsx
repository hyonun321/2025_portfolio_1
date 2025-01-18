"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollIndicator = () => {
  const indicatorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    gsap.from(indicatorRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: 1.8,
    });

    // 스크롤 도트의 무한 반복 애니메이션
    const dotAnimation = gsap.to(dotRef.current, {
      y: 15,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // 컴포넌트가 언마운트될 때 애니메이션 정리
    return () => {
      dotAnimation.kill();
    };
  }, []);

  return (
    <div
      ref={indicatorRef}
      className="absolute bottom-10 text-white flex flex-col items-center"
    >
      <div className="w-6 h-10 border-2 border-white rounded-full mb-2 flex justify-center">
        <div ref={dotRef} className="w-1 h-2 bg-white rounded-full mt-2" />
      </div>
      <span className="text-sm text-gray-400">Scroll Down</span>
    </div>
  );
};

export default ScrollIndicator;
