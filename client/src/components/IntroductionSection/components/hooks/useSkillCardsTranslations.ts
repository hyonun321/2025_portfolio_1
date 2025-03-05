"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { skillCardsTranslations } from "../data/skillCardsTranslations";

export default function useSkillCardsTranslations() {
  const { language } = useLanguage();
  return skillCardsTranslations[language];
}
