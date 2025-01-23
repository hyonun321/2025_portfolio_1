"use client";
import ProjectCard from "@/components/common/ProjectCard";
import { useState } from "react";
interface Project {
  id: number;
  title: string;
  technologies: string[];
  image: string;
  description: string;
}
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
    description: "React / Typescript / Vite / PandaCSS / Zustand ",
  },
  {
    id: 2,
    title: "얼굴 추적 지향성 스피커",
    technologies: ["Python"],
    image: "images/speaker.jpg",
    description: "Python / Raspberry Pi / OpenCV / Haarcascade",
  },
];
export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const scrollToProject = (projectId: number) => {
    const element = document.getElementById(`project-${projectId}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "all") return true;
    return project.technologies.some(
      (tech) => tech.toLowerCase() === activeCategory.toLowerCase()
    );
  });

  return (
    <div className="w-full relative px-4 py-8 z-10 min-h-screen">
      <h1 className="text-6xl font-bold tracking-tight text-white mb-4 flex justify-center">
        MY PROJECT
      </h1>

      {/* 카테고리 필터 버튼 섹션은 아직 그대로 유지 */}
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
            onClick={() => scrollToProject(project.id)}
          />
        ))}
      </div>

      {/* 그라데이션 라인 */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full">
        <div className="h-1 w-full max-w-xl mx-auto bg-gradient-purple " />
      </div>
    </div>
  );
}
