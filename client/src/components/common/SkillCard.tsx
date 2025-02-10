"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

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
  icon: Icon,
  title,
  highlight,
  subtitle,
  description,
  highlightColor = "cyan",
  backContent,
}: SkillCardProps) {
  const bgColorMap: { [key: string]: string } = {
    cyan: "bg-cyan-700",
    red: "bg-red-700",
    blue: "bg-blue-700",
    green: "bg-green-700",
    yellow: "bg-yellow-700",
  };
  const bgColorClass = bgColorMap[highlightColor] || "bg-cyan-700";

  const [isFlipped, setIsFlipped] = useState(false);
  const flipRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    if (!flipRef.current) return;
    setIsFlipped((prev) => !prev);
    gsap.to(flipRef.current, {
      rotationY: isFlipped ? 0 : 180,
      duration: 0.01,
    });
  };

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
        {/* 앞면 */}
        <div
          className="absolute inset-0 h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col gap-4 h-full p-6 bg-zinc-900/50 border justify-center z-10 hover:bg-white/10">
            <div className="flex flex-row gap-4 justify-center">
              <Icon
                size={60}
                className="text-white"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
              />{" "}
              <h2 className="text-xl sm:text-lg xl:text-3xl font-bold text-white">
                <div className="relative inline-block">
                  {highlight}
                  <div
                    className={`absolute bottom-0.5 left-0 h-[7px] w-full ${bgColorClass} -z-10`}
                  ></div>
                </div>
                <br />
                {title}
              </h2>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500">{`<h3>`}</p>
              <div className="border-l-2 border-gray-500 pl-4 ml-4 mt-2 mb-2">
                <h3 className="text-base sm:text-lg xl:text-xl text-white">
                  {subtitle}
                </h3>
                <p className="text-sm sm:text-base xl:text-lg text-gray-300">
                  {description}
                </p>
              </div>
              <p className="text-gray-500">{`<h3>`}</p>
            </div>
          </div>
        </div>

        {/* 뒷면 */}
        <div
          className="absolute inset-0 h-full flex items-center justify-center bg-zinc-800 border text-white p-5"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
}
