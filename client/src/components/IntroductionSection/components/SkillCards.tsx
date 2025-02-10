import { Monitor, PenTool } from "lucide-react";
import { FaReact } from "react-icons/fa";
import SkillCard from "@/components/common/SkillCard";

export default function SkillCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      <SkillCard
        icon={FaReact}
        highlight="Frontend"
        title="React, Next.js"
        subtitle="실시간 동시편집 에디터 Nocta (24.10~24.12)"
        description="실시간 동시편집 에디터 CRDT 라이브러리 개발 "
        highlightColor="cyan"
        backContent={
          <div className="p-4 text-center">
            <h3 className="text-[clamp(1rem,2.5vw,1.5rem)] font-bold">
              추가 정보
            </h3>
            <p className="text-[clamp(0.8rem,2vw,1.2rem)]">
              여기에 더 자세한 내용을 넣을 수 있습니다.
            </p>
          </div>
        }
      />

      <SkillCard
        icon={PenTool}
        highlight="UI/UX"
        title="Lotties, Figma"
        subtitle="로티 애니메이션 아이콘 제작"
        description="아이콘 디자인 경험"
        highlightColor="yellow"
        backContent={
          <div className="flex flex-row items-center  justify-around gap-4 w-full">
            <div className="flex flex-col items-center ">
              <img
                src="images/nocta_night_gif.gif"
                alt="Nocta Night Animation"
                className="w-32 h-32 md:w-32 md:h-32 object-contain rounded-3xl overflow-hidden"
              />
              <span className="text-lg md:text-xl mt-1">Night GIF</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="icons/nocta_day_icon.svg"
                alt="NocTa Day Icon"
                className="w-32 h-32 md:w-32 md:h-32 object-contain"
              />
              <span className="text-lg md:text-xl mt-1">Day Icon</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="icons/nocta_night_icon.svg"
                alt="NocTa Night Icon"
                className="w-32 h-32 md:w-32 md:h-32 object-contain"
              />
              <span className="text-lg md:text-xl mt-1">Night Icon</span>
            </div>
          </div>
        }
      />
      <SkillCard
        icon={Monitor}
        highlight="Programming"
        title="Nest.js"
        subtitle="JavaScript, TypeScript"
        description="반도체 SW 엔지니어 경험"
        highlightColor="red"
      />
    </div>
  );
}
