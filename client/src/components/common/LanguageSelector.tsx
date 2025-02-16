"use client";
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSelector: React.FC = () => {
  const { language, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "KR" as const, label: "한국어" },
    { code: "EN" as const, label: "English" },
    { code: "JP" as const, label: "日本語" },
  ];

  const handleLanguageChange = (langCode: "KR" | "EN" | "JP") => {
    changeLanguage(langCode);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <span className="text-sm text-gray-300 mr-2">Language</span>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center px-3 py-2 bg-gray-700 text-white text-sm rounded-md hover:bg-gray-600 focus:outline-none"
      >
        {languages.find((l) => l.code === language)?.label ?? "언어"}
        <svg
          className="ml-2 h-4 w-4 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 
            1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36  bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 
                    ${language === lang.code ? "font-bold text-blue-500" : "text-gray-700"}
                  `}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
