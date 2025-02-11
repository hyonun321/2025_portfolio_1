import { Monitor, PenTool } from "lucide-react";
import { FaReact } from "react-icons/fa";
import SkillCard from "@/components/common/SkillCard";

export default function SkillCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      <SkillCard
        icon={FaReact}
        highlight="Frontend Dev"
        title="React"
        subtitle="실시간 동시편집 에디터 Nocta"
        description="CRDT 라이브러리 개발"
        highlightColor="cyan"
        backContent={
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
        }
      />

      <SkillCard
        icon={PenTool}
        highlight="Web Design"
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
        }
      />
      <SkillCard
        icon={Monitor}
        highlight="Software"
        title="Development"
        subtitle="JavaScript, TypeScript, C"
        description="반도체 SW 엔지니어 경험"
        highlightColor="red"
        backContent={
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
        }
      />
    </div>
  );
}
