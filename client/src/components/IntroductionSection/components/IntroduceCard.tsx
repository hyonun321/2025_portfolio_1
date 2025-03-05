"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "./data/introduceCardData";

export default function IntroduceCard() {
  const { language } = useLanguage();

  return (
    <div className="m-auto px-4">
      <h3 className="flex flex-col items-center">
        <span className="text-2xl md:text-5xl font-semibold text-white text-center pt-5 pb-5">
          {translations[language].heading}
        </span>
        <p className="text-white text-sm md:text-xl text-left backdrop-blur-md bg-zinc-900/50 rounded-xl p-4 md:p-5">
          {translations[language].text}
        </p>
      </h3>
    </div>
  );
}
