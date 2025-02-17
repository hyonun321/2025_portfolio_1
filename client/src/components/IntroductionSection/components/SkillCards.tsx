"use client";
import React from "react";
import { Monitor, PenTool } from "lucide-react";
import { FaReact } from "react-icons/fa";
import SkillCard from "@/components/common/SkillCard";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SkillCards() {
  const { language } = useLanguage();

  // 언어별 번역 텍스트 객체
  const translations = {
    KR: {
      card1: {
        highlight: "Frontend Dev",
        title: "React",
        subtitle: "실시간 동시편집 에디터 Nocta",
        description: "CRDT 라이브러리 개발",
        backContent: (
          <div className="p-4 text-center">
            <h3 className="text-xl md:text-xl sm:text-2xl font-bold">
              네이버 부스트캠프 9기
              <br /> (24.8~24.12)
            </h3>
            <br />
            <p className="text-left text-lg md:text-lg sm:text-xl">
              - 프론트엔드 과정 수료
              <br />- Javascript, React 기초 IT관련 지식 학습
            </p>
          </div>
        ),
      },
      card2: {
        highlight: "Web Design",
        title: "Lotties, Figma",
        subtitle: "로티 애니메이션 아이콘 제작",
        description: "아이콘 디자인 경험",
        backContent: (
          <div className="flex flex-row items-center justify-around gap-4 w-full">
            <div className="flex flex-col items-center">
              <img
                src="images/nocta_night_gif.gif"
                alt="Nocta Night Animation"
                className="w-32 h-32 md:w-32 md:h-32 object-contain rounded-3xl overflow-hidden"
              />
              <span className="text-lg md:text-xl mt-1 text-center">
                Night GIF
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="icons/nocta_day_icon.svg"
                alt="NocTa Day Icon"
                className="w-32 h-32 md:w-32 md:h-32 object-contain"
              />
              <span className="text-lg md:text-xl mt-1 text-center">
                Day Icon
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="icons/nocta_night_icon.svg"
                alt="NocTa Night Icon"
                className="w-32 h-32 md:w-32 md:h-32 object-contain"
              />
              <span className="text-lg md:text-xl mt-1 text-center">
                Night Icon
              </span>
            </div>
          </div>
        ),
      },
      card3: {
        highlight: "Software",
        title: "Development",
        subtitle: "JavaScript, TypeScript, C",
        description: "반도체 SW 엔지니어 경험",
        backContent: (
          <div className="p-4 text-center">
            <h3 className="text-lg md:text-lg sm:text-xl xl:text-lg font-bold">
              외국계 반도체 SW OS
              <br /> System Software Engineer (22.4~23.6)
            </h3>
            <br />
            <p className="text-left text-sm xl:text-lg sm:text-sm">
              - 고객응대능력 설문, 팀 4명 중 1등
              <br />- Recipe Management System 개발
            </p>
          </div>
        ),
      },
    },
    EN: {
      card1: {
        highlight: "Frontend Dev",
        title: "React",
        subtitle: "Real-time Collaborative Editor Nocta",
        description: "CRDT Library Development",
        backContent: (
          <div className="p-4 text-center">
            <h3 className="text-xl md:text-xl sm:text-2xl font-bold">
              Naver Boostcamp Batch 9
              <br /> (Aug 2024 ~ Dec 2024)
            </h3>
            <br />
            <p className="text-left text-lg md:text-lg sm:text-xl">
              - Completed the Frontend course
              <br />- Learned fundamentals of JavaScript, React, and basic IT knowledge
            </p>
          </div>
        ),
      },
      card2: {
        highlight: "Web Design",
        title: "Lotties, Figma",
        subtitle: "Lottie Animation Icon Creation",
        description: "Icon Design Experience",
        backContent: (
          <div className="flex flex-row items-center justify-around gap-4 w-full">
            <div className="flex flex-col items-center">
              <img
                src="images/nocta_night_gif.gif"
                alt="Nocta Night Animation"
                className="w-32 h-32 md:w-32 md:h-32 object-contain rounded-3xl overflow-hidden"
              />
              <span className="text-lg md:text-xl mt-1 text-center">
                Night GIF
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="icons/nocta_day_icon.svg"
                alt="Nocta Day Icon"
                className="w-32 h-32 md:w-32 md:h-32 object-contain"
              />
              <span className="text-lg md:text-xl mt-1 text-center">
                Day Icon
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="icons/nocta_night_icon.svg"
                alt="Nocta Night Icon"
                className="w-32 h-32 md:w-32 md:h-32 object-contain"
              />
              <span className="text-lg md:text-xl mt-1 text-center">
                Night Icon
              </span>
            </div>
          </div>
        ),
      },
      card3: {
        highlight: "Software",
        title: "Development",
        subtitle: "JavaScript, TypeScript, C",
        description: "Semiconductor SW Engineer Experience",
        backContent: (
          <div className="p-4 text-center">
            <h3 className="text-lg md:text-lg sm:text-xl xl:text-lg font-bold">
              Semiconductor SW OS
              <br /> System Software Engineer  <br/>(Apr 2022 ~ Jun 2023)
            </h3>
            <br />
            <p className="text-left text-sm xl:text-lg sm:text-sm">
              - Ranked 1st among 4 team members in customer service ability survey
              <br />- Developed a Recipe Management System
            </p>
          </div>
        ),
      },
    },
    JP: {
      card1: {
        highlight: "Frontend Dev",
        title: "React",
        subtitle: "リアルタイム共同編集エディター Nocta",
        description: "CRDTライブラリ開発",
        backContent: (
          <div className="p-4 text-center">
            <h3 className="text-xl md:text-xl sm:text-2xl font-bold">
              NAVER Boostcamp 第9期
              <br /> (2024.8~2024.12)
            </h3>
            <br />
            <p className="text-left text-lg md:text-lg sm:text-xl">
              - フロントエンドコース修了
              <br />- Javascript, Reactの基礎やIT関連知識を学習
            </p>
          </div>
        ),
      },
      card2: {
        highlight: "Web Design",
        title: "Lotties, Figma",
        subtitle: "ロッティアニメーションアイコン制作",
        description: "アイコンデザイン経験",
        backContent: (
          <div className="flex flex-row items-center justify-around gap-4 w-full">
            <div className="flex flex-col items-center">
              <img
                src="images/nocta_night_gif.gif"
                alt="Nocta Night Animation"
                className="w-32 h-32 md:w-32 md:h-32 object-contain rounded-3xl overflow-hidden"
              />
              <span className="text-lg md:text-xl mt-1 text-center">
                ナイトGIF
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="icons/nocta_day_icon.svg"
                alt="Nocta Day Icon"
                className="w-32 h-32 md:w-32 md:h-32 object-contain"
              />
              <span className="text-lg md:text-xl mt-1 text-center">
                デイアイコン
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="icons/nocta_night_icon.svg"
                alt="Nocta Night Icon"
                className="w-32 h-32 md:w-32 md:h-32 object-contain"
              />
              <span className="text-lg md:text-xl mt-1 text-center">
                ナイトアイコン
              </span>
            </div>
          </div>
        ),
      },
      card3: {
        highlight: "Software",
        title: "Development",
        subtitle: "JavaScript, TypeScript, C",
        description: "半導体SWエンジニア経験",
        backContent: (
          <div className="p-4 text-center">
            <h3 className="text-lg md:text-lg sm:text-xl xl:text-lg font-bold">
              外資系半導体SW OS
              <br /> システムソフトウェアエンジニア (2022.4~2023.6)
            </h3>
            <br />
            <p className="text-left text-sm xl:text-lg sm:text-sm">
              - 顧客対応能力アンケートでチーム4名中1位
              <br />- Recipe Management Systemの開発
            </p>
          </div>
        ),
      },
    },
  };

  const { card1, card2, card3 } = translations[language];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      <SkillCard
        icon={FaReact}
        highlight={card1.highlight}
        title={card1.title}
        subtitle={card1.subtitle}
        description={card1.description}
        highlightColor="cyan"
        backContent={card1.backContent}
      />
      <SkillCard
        icon={PenTool}
        highlight={card2.highlight}
        title={card2.title}
        subtitle={card2.subtitle}
        description={card2.description}
        highlightColor="yellow"
        backContent={card2.backContent}
      />
      <SkillCard
        icon={Monitor}
        highlight={card3.highlight}
        title={card3.title}
        subtitle={card3.subtitle}
        description={card3.description}
        highlightColor="red"
        backContent={card3.backContent}
      />
    </div>
  );
}
