import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  slidesData as slidesDataKR,
  slidesDataEN,
  slidesDataJP,
} from "../data/slideData";
import { projectsData, translations, CATEGORIES } from "../data/projectDatas";
import { Project } from "@/components/ProjectGridSection/types";

export default function useProjectGrid() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const currentTranslation = translations[language];
  const currentSlidesData =
    language === "KR"
      ? slidesDataKR
      : language === "EN"
        ? slidesDataEN
        : slidesDataJP;
  const currentProjects = projectsData[language];

  const filteredProjects = useMemo(() => {
    return currentProjects.filter((project) => {
      if (activeCategory === "all") return true;
      return project.technologies.some(
        (tech) => tech.toLowerCase() === activeCategory.toLowerCase()
      );
    });
  }, [activeCategory, currentProjects]);

  return {
    activeCategory,
    setActiveCategory,
    selectedProject,
    setSelectedProject,
    currentTranslation,
    currentSlidesData,
    filteredProjects,
    categories: CATEGORIES,
  };
}
