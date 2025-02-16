"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextType {
  language: "KR" | "EN" | "JP";
  changeLanguage: (lang: "KR" | "EN" | "JP") => void;
}

const defaultContextValue: LanguageContextType = {
  language: "KR",
  changeLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"KR" | "EN" | "JP">("KR");

  const changeLanguage = (lang: "KR" | "EN" | "JP") => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
