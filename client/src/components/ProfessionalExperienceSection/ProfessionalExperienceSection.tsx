"use client";
import { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaLink } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

interface Experience {
  title: string;
  period: string;
  description: string;
  location?: string;
  website?: string;
  techStack?: string[];
}

function CollapsibleContent({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(isOpen ? `${contentHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className="overflow-hidden transition-[height] duration-500 ease-in-out"
      style={{ height }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
}

// 언어별로 번역된 경험 데이터를 관리합니다.
const experiencesData: { [key: string]: Experience[] } = {
  KR: [
    {
      title: "System Software Engineer",
      period: "2022 - 2023",
      description:
        "반도체 테스트 핸들러 OS SW 엔지니어\n1. Recipe Management System 개발로 작업능률 3배 상승\n2. Git 및 KanbanBoard 도입하여 매뉴얼 배포\n3. 적극적이고 밝은 응대능력으로, 고객사 2개 중 1사 최고만족 달성\n4. 고객응대능력 설문 4명 중 1위 (2022~2023)",
      location: "천안",
      techStack: ["C", "C#", "Windows", "Git", "BitBucket"],
    },
  ],
  EN: [
    {
      title: "System Software Engineer",
      period: "2022 - 2023",
      description:
        "Semiconductor Test Handler OS SW Engineer\n1. Developed a Recipe Management System, tripling work efficiency\n2. Introduced Git and Kanban Board for manual distribution\n3. Achieved highest customer satisfaction in one out of two companies through proactive and positive communication\n4. Ranked 1st among 4 in a customer service survey (2022-2023)",
      location: "Cheonan",
      techStack: ["C", "C#", "Windows", "Git", "BitBucket"],
    },
  ],
  JP: [
    {
      title: "システムソフトウェアエンジニア",
      period: "2022 - 2023",
      description:
        "半導体テストハンドラー OS SWエンジニア\n1. Recipe Management Systemの開発により作業効率が3倍に向上\n2. GitとKanban Boardを導入してマニュアル配布を実施\n3. 積極的で明るい対応により、2社中1社で最高の顧客満足を達成\n4. 顧客対応能力調査で4名中1位 (2022〜2023)",
      location: "チョナン",
      techStack: ["C", "C#", "Windows", "Git", "BitBucket"],
    },
  ],
};

export default function ProfessionalExperienceSection() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // 현재 선택된 언어에 맞는 경험 데이터를 가져옵니다.
  const experiences = experiencesData[language];

  function handleToggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="z-10 w-full flex flex-col justify-center items-center max-w-4xl px-2 py-6 md:px-4 md:py-10 p-6">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center text-white">
        Professional <br /> Experience
      </h2>

      {experiences.map((exp, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="mb-4 w-full rounded-lg overflow-hidden shadow-md"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gradient-to-r from-purple-900 to-indigo-900 text-white hover:from-purple-800 hover:to-indigo-800 transition-colors duration-300 focus:outline-none"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span>{exp.title}</span>
                <span className="text-sm text-gray-300">({exp.period})</span>
              </div>
              <span className="ml-2 text-2xl">{isOpen ? "−" : "+"}</span>
            </button>
            <CollapsibleContent isOpen={isOpen}>
              <div className="bg-zinc-700 px-4 py-4">
                <div className="flex items-center gap-4 text-gray-100 mb-4">
                  {exp.location && (
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-pink-400" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  )}
                  {exp.website && (
                    <div className="flex items-center gap-1">
                      <FaLink />
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline hover:text-indigo-300 transition-colors"
                      >
                        {exp.website}
                      </a>
                    </div>
                  )}
                </div>
                <p className="leading-relaxed whitespace-pre-line text-zinc-50 mb-4">
                  {exp.description}
                </p>
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="bg-zinc-800 p-4 rounded-md">
                    <h3 className="text-white font-semibold mb-2">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-indigo-800 text-white text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CollapsibleContent>
          </div>
        );
      })}
    </section>
  );
}
