"use client";
import { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaLink } from "react-icons/fa";
import useProfessionalExperiences from "./hooks/useProfessionalExperiences";

function CollapsibleContent({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(isOpen ? `${contentHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className="overflow-hidden transition-[height] duration-500 ease-in-out"
      style={{ height }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
}

export default function ProfessionalExperienceSection() {
  const { experiences, openIndex, handleToggle } = useProfessionalExperiences();

  return (
    <section className="z-10 w-full flex flex-col justify-center items-center max-w-4xl px-2 py-6 md:px-4 md:py-10 p-6">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center text-white">
        Professional <br /> Experience
      </h2>

      {experiences.map((exp, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="mb-4 w-full rounded-lg overflow-hidden shadow-md"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gradient-to-r from-purple-900 to-indigo-900 text-white hover:from-purple-800 hover:to-indigo-800 transition-colors duration-300 focus:outline-none"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span>{exp.title}</span>
                <span className="text-sm text-gray-300">({exp.period})</span>
              </div>
              <span className="ml-2 text-2xl">{isOpen ? "−" : "+"}</span>
            </button>
            <CollapsibleContent isOpen={isOpen}>
              <div className="bg-zinc-700 px-4 py-4">
                <div className="flex items-center gap-4 text-gray-100 mb-4">
                  {exp.location && (
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-pink-400" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  )}
                  {exp.website && (
                    <div className="flex items-center gap-1">
                      <FaLink />
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline hover:text-indigo-300 transition-colors"
                      >
                        {exp.website}
                      </a>
                    </div>
                  )}
                </div>
                <p className="leading-relaxed whitespace-pre-line text-zinc-50 mb-4">
                  {exp.description}
                </p>
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="bg-zinc-800 p-4 rounded-md">
                    <h3 className="text-white font-semibold mb-2">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-indigo-800 text-white text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CollapsibleContent>
          </div>
        );
      })}
    </section>
  );
}
