"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ProficiencyLevel, skills } from "./data/programmingSkills";

interface ProficiencyInfo {
  label: string;
  color: string;
  fillPercent: string;
}

export default function ProgrammingSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  const proficiencyLevels: Record<ProficiencyLevel, ProficiencyInfo> = {
    BASIC: { label: "BASIC", color: "bg-blue-400", fillPercent: "30%" },
    INTERMEDIATE: {
      label: "INTERMEDIATE",
      color: "bg-purple-500",
      fillPercent: "60%",
    },
    COMFORTABLE: {
      label: "COMFORTABLE",
      color: "bg-teal-500",
      fillPercent: "85%",
    },
  };

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      {
        opacity: 0,
        y: 20,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      }
    );

    // 진행 바 애니메이션
    const progressBars = document.querySelectorAll(".skill-progress-bar");
    gsap.fromTo(
      progressBars,
      { width: "0%" },
      {
        width: (i, target) => {
          const level = target.dataset.level as ProficiencyLevel;
          return proficiencyLevels[level].fillPercent;
        },
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 3,
      }
    );

    return () => {
      gsap.killTweensOf(skillsRef.current);
      gsap.killTweensOf(progressBars);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full text-white">
      <h3 className="text-xl md:text-3xl font-bold mb-6 text-center">
        Tech Stack
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {skills.map((skill, index) => {
          const level = proficiencyLevels[skill.level];

          return (
            <div
              key={skill.name}
              ref={(el) => {
                skillsRef.current[index] = el;
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-gray-700/50 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-3">
                <div
                  className="text-2xl md:text-3xl mr-3"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold">
                    {skill.name}
                  </h4>
                  <div className="flex items-center mt-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${level.color}`}
                    >
                      {level.label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="skill-progress-bar h-full rounded-full"
                  data-level={skill.level}
                  style={{ backgroundColor: skill.color, width: "0%" }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
