import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface SkillCardProps {
  icon: IconType | LucideIcon;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  highlightColor?: string;
}

export default function SkillCard({
  icon: Icon,
  title,
  highlight,
  subtitle,
  description,
  highlightColor = "cyan",
}: SkillCardProps) {
  const bgColorMap: { [key: string]: string } = {
    cyan: "bg-cyan-700",
    red: "bg-red-700",
    blue: "bg-blue-700",
    green: "bg-green-700",
    yellow: "bg-yellow-700",
  };

  const bgColorClass = bgColorMap[highlightColor] || "bg-cyan-700";

  return (
    <div className="flex flex-col w-full  gap-4 p-6 bg-zinc-900/50 border justify-center z-10 cursor-pointer hover:bg-white/10">
      <div className="flex flex-row gap-4 justify-center">
        <Icon size={60} className="text-white" />
        <h2 className="text-2xl font-bold text-white">
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
          <h3 className="text-xl text-white">{subtitle}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        <p className="text-gray-500">{`<h3>`}</p>
      </div>
    </div>
  );
}
