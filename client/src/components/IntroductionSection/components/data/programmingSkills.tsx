import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";

export type ProficiencyLevel = "BASIC" | "INTERMEDIATE" | "COMFORTABLE";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: ProficiencyLevel;
  color: string;
}
export const skills: Skill[] = [
  {
    name: "React",
    icon: <FaReact />,
    level: "COMFORTABLE",
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    level: "COMFORTABLE",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    level: "COMFORTABLE",
    color: "#3178C6",
  },
  {
    name: "styled-components",
    icon: <SiStyledcomponents />,
    level: "COMFORTABLE",
    color: "#DB7093",
  },
  {
    name: "SCSS",
    icon: <SiSass />,
    level: "INTERMEDIATE",
    color: "#CC6699",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    level: "INTERMEDIATE",
    color: "#06B6D4",
  },
];
