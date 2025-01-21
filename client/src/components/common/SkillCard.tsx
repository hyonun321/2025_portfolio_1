import { LucideIcon } from "lucide-react"; // IconProps 대신 LucideIcon을 import
import { IconType } from "react-icons";

interface SkillCardProps {
  icon: IconType | LucideIcon; // IconType과 LucideIcon 타입을 유니온으로 사용
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
}

export default function SkillCard({
  icon: Icon,
  title,
  highlight,
  subtitle,
  description,
}: SkillCardProps) {
  return (
    <div className="flex flex-col min-w-96 gap-4 p-6 bg-zinc-900/50 border z-10">
      <div className="flex flex-row gap-4">
        <Icon size={60} className="text-white" />
        <h2 className="text-2xl font-bold text-white">
          <div className="relative inline-block">
            {highlight}
            <div className="absolute bottom-0.5 left-0  h-[7px] w-full bg-cyan-700 -z-10"></div>
          </div>
          <br></br>
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
