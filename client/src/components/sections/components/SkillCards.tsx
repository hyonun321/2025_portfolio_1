import { Monitor, PenTool } from "lucide-react";
import { FaReact } from "react-icons/fa";
import SkillCard from "@/components/common/SkillCard";

export default function SkillCards() {
  return (
    <div className="flex flex-row justify-center">
      <SkillCard
        icon={Monitor}
        highlight="Development"
        title="Software"
        subtitle="JavaScript, TypeScript, Python, C"
        description="엔지니어링 경험"
      />
      <SkillCard
        icon={FaReact}
        highlight="Frontend "
        title="Dev"
        subtitle="React, NextJS"
        description="경험 라라라"
      />
      <SkillCard
        icon={PenTool}
        highlight="Web "
        title="Design"
        subtitle="Lotties, Figma"
        description="로티 애니메이션 제작, 아이콘 디자인 경험"
      />
    </div>
  );
}
