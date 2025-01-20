"use client";

import { useRef, useEffect } from "react";

export default function SpeakerBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // 모바일에서는 저해상도 버전 사용
      if (window.innerWidth < 768) {
        videoRef.current.src = "/videos/speaker_background-mobile.webm";
      }

      // 화면 밖으로 나가면 비디오 일시정지
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              videoRef.current?.pause();
            } else {
              videoRef.current?.play();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (videoRef.current) {
        observer.observe(videoRef.current);
      }

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className=" z-10 inset-0 w-full h-fit">
      <video ref={videoRef} autoPlay muted loop playsInline width="100%">
        <source src="/videos/speaker_background.webm" type="video/webm" />
        <source src="/videos/speaker_background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
