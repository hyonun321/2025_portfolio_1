"use client";

import { useRef, useEffect } from "react";

interface VideoBackgroundProps {
  sources: {
    webm: string;
    mp4: string;
    mobileWebm?: string;
  };
}

export default function VideoBackground({ sources }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayedRef = useRef(false); // 최초 재생 여부를 추적

  useEffect(() => {
    if (videoRef.current) {
      if (window.innerWidth < 768 && sources.mobileWebm) {
        videoRef.current.src = sources.mobileWebm;
      }

      const playVideo = async () => {
        try {
          if (videoRef.current && !hasPlayedRef.current) {
            await videoRef.current.play();
            hasPlayedRef.current = true;
          }
        } catch (error) {
          console.log("Video playback error:", error);
        }
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playVideo();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(videoRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [sources.mobileWebm]);

  return (
    <div className="relative z-10 inset-0 w-full h-fit">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={sources.webm} type="video/webm" />
        <source src={sources.mp4} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
