"use client";
import React, { useState } from "react";
import GridProjectModal from "./components/GridProjectModal";
import Modal from "@/components/common/Modal";
import ProjectCard from "@/components/common/ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Project } from "@/types";
// slidesData 파일에서 각 언어별 데이터를 import합니다.
import { slidesData as slidesDataKR, slidesDataEN, slidesDataJP } from "./data/SlideData";

const translations = {
  KR: {
    header: "MY PROJECT", // 필요에 따라 번역 수정
    categories: {
      all: "전체",
      react: "React",
      python: "Python",
    },
  },
  EN: {
    header: "MY PROJECT",
    categories: {
      all: "All",
      react: "React",
      python: "Python",
    },
  },
  JP: {
    header: "MY PROJECT", // 필요 시 "マイプロジェクト" 등으로 수정
    categories: {
      all: "全て",
      react: "React",
      python: "Python",
    },
  },
};

const CATEGORIES = [
  { id: "all", count: 2 },
  { id: "react", count: 1 },
  { id: "python", count: 1 },
];

// 프로젝트 데이터: 언어별로 번역된 데이터를 관리합니다.
const projectsData: { [key: string]: Project[] } = {
  KR: [
    {
      id: 1,
      title: "실시간 동시편집 에디터 Nocta",
      technologies: ["React"],
      image: "images/nocta_inform.jpg",
      description: "React / Typescript / Vite / PandaCSS / Zustand",
    },
    {
      id: 2,
      title: "얼굴 추적 지향성 스피커",
      technologies: ["Python"],
      image: "images/speaker.jpg",
      description: "Python / Raspberry Pi / OpenCV / Haarcascade",
    },
  ],
  EN: [
    {
      id: 1,
      title: "Real-time Collaborative Editor Nocta",
      technologies: ["React"],
      image: "images/nocta_inform.jpg",
      description: "React / Typescript / Vite / PandaCSS / Zustand",
    },
    {
      id: 2,
      title: "Face-Tracking Directional Speaker",
      technologies: ["Python"],
      image: "images/speaker.jpg",
      description: "Python / Raspberry Pi / OpenCV / Haarcascade",
    },
  ],
  JP: [
    {
      id: 1,
      title: "リアルタイム共同編集エディター Nocta",
      technologies: ["React"],
      image: "images/nocta_inform.jpg",
      description: "React / Typescript / Vite / PandaCSS / Zustand",
    },
    {
      id: 2,
      title: "顔追跡指向スピーカー",
      technologies: ["Python"],
      image: "images/speaker.jpg",
      description: "Python / Raspberry Pi / OpenCV / Haarcascade",
    },
  ],
};

export default function ProjectGrid() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 현재 언어에 따른 번역 데이터 선택
  const currentTranslation = translations[language];
  // 현재 언어에 따라 슬라이드 데이터 선택
  const currentSlidesData =
    language === "KR" ? slidesDataKR : language === "EN" ? slidesDataEN : slidesDataJP;
  // 현재 언어에 따른 프로젝트 데이터 선택
  const currentProjects = projectsData[language];

  const filteredProjects = currentProjects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.technologies.some(
      (tech) => tech.toLowerCase() === activeCategory.toLowerCase()
    );
  });

  return (
    <div className="w-full relative px-4 py-8 z-10 min-h-screen">
      <h1 className="flex flex-col items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
        {currentTranslation.header}
      </h1>

      {/* 카테고리 필터 버튼 */}
      <div className="flex gap-6 mb-12 justify-center">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`relative px-4 py-2 text-xl transition-all ${
              activeCategory === category.id
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {currentTranslation.categories[category.id as keyof typeof currentTranslation.categories]}
            <span className="ml-2 text-xs opacity-60">{category.count}</span>
            {activeCategory === category.id && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
            )}
          </button>
        ))}
      </div>

      {/* 프로젝트 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* 모달창 */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <GridProjectModal slides={currentSlidesData[selectedProject.id - 1]} />
        )}
      </Modal>

      {/* 그라데이션 라인 (장식) */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full">
        <div className="h-1 w-full max-w-xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>
    </div>
  );
}
