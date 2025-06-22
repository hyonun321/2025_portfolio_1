import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export function SkillCardFront({
  Icon,
  highlight,
  title,
  subtitle,
  description,
  bgColorClass,
}: {
  Icon: IconType | LucideIcon;
  highlight: string;
  title: string;
  subtitle: string;
  description: string;
  bgColorClass: string;
}) {
  return (
    <div className="flex flex-col gap-0 md:gap-4 h-full p-6 bg-zinc-900/50 border justify-center z-10 hover:bg-white/10">
      <div className="flex flex-row gap-2 md:gap-4 justify-center">
        <Icon
          size={50}
          className="text-white"
          style={{ fontSize: "clamp(2rem, 5vw, 1rem)" }}
        />
        <h2 className="text-xl sm:text-lg xl:text-3xl font-bold text-white">
          <div className="relative inline-block">
            {highlight}
            <div
              className={`absolute bottom-0.5 left-0 h-[7px] w-full ${bgColorClass} -z-10`}
            />
          </div>
          <br />
          {title}
        </h2>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-500">{`<h3>`}</p>
        <div className="border-l-2 border-gray-500 pl-4 ml-4 mt-2 mb-2">
          <h3 className="text-base sm:text-md xl:text-xl text-white">
            {subtitle}
          </h3>
          <p className="text-sm sm:text-base xl:text-lg text-gray-300">
            {description}
          </p>
        </div>
        <p className="text-gray-500">{`<h3>`}</p>
      </div>
    </div>
  );
}
