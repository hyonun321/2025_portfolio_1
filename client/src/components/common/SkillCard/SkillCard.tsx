"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { SkillCardBack } from "./SkillCardBack";
import { SkillCardFront } from "./SkillCardFront";

// highlightColor에 따른 배경 색상 클래스 매핑 상수
const bgColorMap: { [key: string]: string } = {
  cyan: "bg-cyan-700",
  red: "bg-red-700",
  blue: "bg-blue-700",
  green: "bg-green-700",
  yellow: "bg-yellow-700",
};

interface SkillCardProps {
  icon: IconType | LucideIcon;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  highlightColor?: string;
  backContent?: React.ReactNode;
}

export default function SkillCard({
  icon,
  title,
  highlight,
  subtitle,
  description,
  highlightColor = "cyan",
  backContent,
}: SkillCardProps) {
  const bgColorClass = bgColorMap[highlightColor] || "bg-cyan-700";
  const [isFlipped, setIsFlipped] = useState(false);
  const flipRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  useEffect(() => {
    if (!flipRef.current) return;
    gsap.to(flipRef.current, {
      rotationY: isFlipped ? 180 : 0,
      duration: 0.05,
      ease: "power2.inOut",
    });
  }, [isFlipped]);

  return (
    <div
      className="cursor-pointer w-full"
      onClick={handleCardClick}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={flipRef}
        className="relative w-full h-64 transition-transform duration-800"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <SkillCardFront
            Icon={icon}
            highlight={highlight}
            title={title}
            subtitle={subtitle}
            description={description}
            bgColorClass={bgColorClass}
          />
        </div>

        <SkillCardBack backContent={backContent} />
      </div>
    </div>
  );
}
