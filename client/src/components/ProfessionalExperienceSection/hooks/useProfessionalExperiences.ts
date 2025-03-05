"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { experiencesData } from "../data";

export default function useProfessionalExperiences() {
  const { language } = useLanguage();
  const experiences = experiencesData[language];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return { experiences, openIndex, handleToggle };
}
