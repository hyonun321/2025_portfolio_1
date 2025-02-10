import { Monitor, PenTool } from "lucide-react";
import { FaReact } from "react-icons/fa";
import SkillCard from "@/components/common/SkillCard";

export default function SkillCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      <SkillCard
        icon={Monitor}
        highlight="Development"
        title="Nest.js"
        subtitle="JavaScript, TypeScript, Python, C"
        description="반도체 SW 엔지니어 경험"
        highlightColor="red"
      />
      <SkillCard
        icon={FaReact}
        highlight="Frontend Dev"
        title="React, Next.js"
        subtitle="네이버 부스트캠프"
        description="실시간 동시편집 에디터 녹타"
        highlightColor="cyan"
      />
      <SkillCard
        icon={PenTool}
        highlight="Web Design"
        title="Lotties, Figma"
        subtitle="로티 애니메이션 아이콘 제작"
        description="아이콘 디자인 경험"
        highlightColor="yellow"
      />
    </div>
  );
}
