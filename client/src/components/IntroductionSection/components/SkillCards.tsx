"use client";
import React from "react";
import { Monitor, PenTool } from "lucide-react";
import { FaReact } from "react-icons/fa";
import SkillCard from "@/components/common/SkillCard/SkillCard";
import SkillCardBackContent from "@/components/common/SkillCard/SkillCardBackContent";
import useSkillCardsTranslations from "./hooks/useSkillCardsTranslations";

export default function SkillCards() {
  const { card1, card2, card3 } = useSkillCardsTranslations();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      <SkillCard
        icon={FaReact}
        highlight={card1.highlight}
        title={card1.title}
        subtitle={card1.subtitle}
        description={card1.description}
        highlightColor="cyan"
        backContent={<SkillCardBackContent data={card1.backContentData} />}
      />
      <SkillCard
        icon={PenTool}
        highlight={card2.highlight}
        title={card2.title}
        subtitle={card2.subtitle}
        description={card2.description}
        highlightColor="yellow"
        backContent={<SkillCardBackContent data={card2.backContentData} />}
      />
      <SkillCard
        icon={Monitor}
        highlight={card3.highlight}
        title={card3.title}
        subtitle={card3.subtitle}
        description={card3.description}
        highlightColor="red"
        backContent={<SkillCardBackContent data={card3.backContentData} />}
      />
    </div>
  );
}
