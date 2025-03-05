"use client";
import React from "react";
import GridProjectModal from "./components/GridProjectModal";
import Modal from "@/components/common/Modal";
import ProjectCard from "@/components/common/ProjectCard";
import useProjectGrid from "./hooks/useProjectGrid";

export default function ProjectGrid() {
  const {
    activeCategory,
    setActiveCategory,
    selectedProject,
    setSelectedProject,
    currentTranslation,
    currentSlidesData,
    filteredProjects,
    categories,
  } = useProjectGrid();

  return (
    <div className="w-full relative px-4 py-8 z-10 min-h-screen">
      <h1 className="flex flex-col items-center justify-center text-4xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
        {currentTranslation.header}
      </h1>

      <div className="flex gap-6 mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`relative px-4 py-2 text-sm md:text-xl transition-all ${
              activeCategory === category.id
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {
              currentTranslation.categories[
                category.id as keyof typeof currentTranslation.categories
              ]
            }
            <span className="ml-2 text-xs opacity-60">{category.count}</span>
            {activeCategory === category.id && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
            )}
          </button>
        ))}
      </div>

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

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <GridProjectModal
            slides={currentSlidesData[selectedProject.id - 1]}
          />
        )}
      </Modal>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full">
        <div className="h-1 w-full max-w-xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>
    </div>
  );
}
