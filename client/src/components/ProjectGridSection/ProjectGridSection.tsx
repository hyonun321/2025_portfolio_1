"use client";
import React, { useState } from "react";
import GridProjectModal from "./components/GridProjectModal";
import Modal from "@/components/common/Modal";
import ProjectCard from "@/components/common/ProjectCard";
import { Project } from "@/types";

// 슬라이드 타입 (ProjectModalContent와 동일)
type SlideData = {
  mediaUrl: string;
  title: string;
  description?: string;
  link?: string;
  linkTitle?: string;
  link2?: string;
  link2Title?: string;
};

// 프로젝트 카테고리 정의
const CATEGORIES = [
  { id: "all", label: "All", count: 2 },
  { id: "react", label: "React", count: 1 },
  { id: "python", label: "Python", count: 1 },
];

const PROJECTS: Project[] = [
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
];
const slidesData: SlideData[][] = [
  [
    {
      mediaUrl: "videos/nocta_background.mp4",
      title: "실시간 동시편집 에디터 Nocta",
      description:
        "CRDT를 기반으로 한 동시편집 에디터로, 실시간 협업이 가능합니다. 사용자가 동시에 문서를 편집해도 충돌 없이 잘 합쳐집니다.",
      link: "https://youtu.be/0AZAixGrMbo?si=XYzCG6aHaeZS5cbu",
      linkTitle: "Youtube",
      link2: "",
      link2Title: "",
    },
    {
      mediaUrl: "images/schema.png",
      title: "CRDT 라이브러리 구조",
      description:
        "아키텍처 다이어그램과 내부 동작 원리를 설명합니다. 라이브러리는 서버/클라이언트가 비동기로 협업하며, 로컬 저장을 지원합니다.",
    },
  ],
  [
    {
      mediaUrl: "videos/speaker_background.mp4",
      title: "얼굴 추적 지향성 스피커",
      description:
        "초음파 스피커와 haarcascade를 활용한 얼굴추적 지향성 스피커",
      link: "https://youtu.be/odPTTYyX-1s?si=Tj_n4PJSfy5Z6inz",
      linkTitle: "Youtube",
    },
    {
      mediaUrl: "images/schema.png",
      title: "CRDT 라이브러리 구조",
      description:
        "아키텍처 다이어그램과 내부 동작 원리를 설명합니다. 라이브러리는 서버/클라이언트가 비동기로 협업하며, 로컬 저장을 지원합니다.",
    },
  ],
];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "all") return true;
    return project.technologies.some(
      (tech) => tech.toLowerCase() === activeCategory.toLowerCase()
    );
  });

  return (
    <div className="w-full relative px-4 py-8 z-10 min-h-screen">
      <h1 className="flex flex-col items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
        MY PROJECT
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
            {category.label}
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
          <GridProjectModal slides={slidesData[selectedProject.id - 1]} />
        )}
      </Modal>

      {/* 그라데이션 라인 (장식) */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full">
        <div className="h-1 w-full max-w-xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>
    </div>
  );
}
