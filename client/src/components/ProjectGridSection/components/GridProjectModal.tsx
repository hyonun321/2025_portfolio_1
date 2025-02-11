"use client";
import React, { useState } from "react";

// 슬라이드 데이터 타입
export type SlideData = {
  mediaUrl: string; // 동영상(.mp4) 또는 이미지(.png/.jpg) 경로
  title: string;
  description?: string;
  link?: string;
  linkTitle?: string;
};

// props 타입
interface GridProjectModalProps {
  slides: SlideData[];
}

export default function GridProjectModal({ slides }: GridProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  // 동영상인지 판별
  const isVideo = (url: string) =>
    url.endsWith(".mp4") || url.endsWith(".webm");

  // 슬라이드 이동
  const goToNext = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // 현재 표시 중인 슬라이드
  const slide = slides[currentIndex];

  return (
    <div
      className="
        flex flex-col 
        w-full              /* 모달 내부에서 꽉 채울 크기 */
        h-[80vh]            /* 세로 높이를 브라우저 뷰포트의 80%로 제한 */
        bg-zinc-800 
        rounded-lg 
        overflow-hidden
      "
    >
      {/* 상단 영역: 이미지 or 비디오 (절반 높이) */}
      <div className="relative w-full h-1/2 bg-black">
        {isVideo(slide.mediaUrl) ? (
          <video
            src={slide.mediaUrl}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={slide.mediaUrl}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* 하단 영역: 텍스트 + 링크 (스크롤 가능) */}
      <div className="flex flex-col h-1/2 overflow-y-auto p-4">
        <h2 className="text-2xl text-white font-semibold mb-2">
          {slide.title}
        </h2>
        {slide.description && (
          <p className="text-gray-300 leading-relaxed mb-4">
            {slide.description}
          </p>
        )}
        {slide.link && (
          <div className="mt-4">
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-400 transition"
            >
              {slide.linkTitle || "LINK"}
            </a>
          </div>
        )}
      </div>

      {/* 이전/다음 버튼 + 페이지 표시 */}
      <div className="bg-zinc-700 flex items-center justify-between p-4">
        <button
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className="
            px-3 py-2 text-white bg-zinc-600 rounded 
            hover:bg-zinc-500 transition 
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          이전
        </button>

        <span className="text-gray-200">
          {currentIndex + 1} / {totalSlides}
        </span>

        <button
          onClick={goToNext}
          disabled={currentIndex === totalSlides - 1}
          className="
            px-3 py-2 text-white bg-zinc-600 rounded 
            hover:bg-zinc-500 transition
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          다음
        </button>
      </div>
    </div>
  );
}
