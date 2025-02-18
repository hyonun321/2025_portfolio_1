"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Highlight1, Highlight2 } from "@/components/common/Typography";

export default function IntroduceCard() {
  const { language } = useLanguage();
  // 언어별로 텍스트를 정리한 객체
  const translations = {
    KR: {
      heading: "협업하고 싶은 개발자",
      text: (
        <>
          <Highlight1>사용자 경험을 최우선으로 생각</Highlight1>하며, <br />
          프로젝트에 <Highlight2>강한 Ownership</Highlight2>을 가지고 있습니다.
          <br />
          <br />
          <Highlight1>기술 공유 세션을 주도</Highlight1>하고, <br />
          팀원들과의 적극적인 코드 리뷰를 통해 서로의 성장을 돕습니다.
          <br />
          <br />
          <Highlight2>배움을 위해 겸손한 자세</Highlight2>와
          <Highlight2> 적극적으로 공유하는 자세</Highlight2>가 <br />
          제가 추구하는 개발자의 핵심 가치입니다.
        </>
      ),
    },
    EN: {
      heading: "A Developer You'd Love to Collaborate With",
      text: (
        <>
          <Highlight1>I prioritize user experience</Highlight1> above all, <br />
          and take <Highlight2>strong ownership</Highlight2> of every project.
          <br />
          <br />
          I <Highlight1>lead tech-sharing sessions</Highlight1>, <br />
          and foster mutual growth through active code reviews.
          <br />
          <br />
          A <Highlight2>humble attitude to learn</Highlight2> and
          <Highlight2> proactive sharing</Highlight2> <br />
          are the core values I pursue as a developer.
        </>
      ),
    },
    JP: {
      heading: "一緒に仕事したい開発者",
      text: (
        <>
          <Highlight1>ユーザー体験を最優先に考え</Highlight1>、 <br />
          プロジェクトに<Highlight2>強いオーナーシップ</Highlight2>を持っています。
          <br />
          <br />
          <Highlight1>技術共有セッションを主導</Highlight1>し、 <br />
          チームメンバーとの積極的なコードレビューを通じてお互いの成長を支えます。
          <br />
          <br />
          <Highlight2>学ぶための謙虚な姿勢</Highlight2>と
          <Highlight2>積極的に共有する姿勢</Highlight2>が <br />
          私が目指す開発者の核心価値です。
        </>
      ),
    },
  };

  return (
    <div className="m-auto px-4">
      <h3 className="flex flex-col items-center">
        {/* 언어에 따라 heading 다르게 표시 */}
        <span className="text-2xl md:text-5xl font-semibold text-white text-center pt-5 pb-5">
          {translations[language].heading}
        </span>
        {/* 언어에 따라 본문 text 다르게 표시 */}
        <p className="text-white text-sm md:text-xl text-left backdrop-blur-md bg-zinc-900/50 rounded-xl p-4 md:p-5">
          {translations[language].text}
        </p>
      </h3>
    </div>
  );
}
