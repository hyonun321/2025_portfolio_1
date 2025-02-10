interface TechnicalExperience {
  title: string;
  points: string[];
}

interface TechnicalSectionProps {
  experiences: TechnicalExperience[];
}

export function TechnicalSection({ experiences }: TechnicalSectionProps) {
  return (
    <div className="content-card backdrop-blur-md w-full bg-white/10 rounded-xl p-6">
      <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
        <span className="text-green-400 mr-2">기술적 도전 경험</span>
      </h3>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h4 className="text-blue-400 font-semibold mb-2">{exp.title}</h4>
            <ul className="text-gray-200 text-xl space-y-2">
              {exp.points.map((point, pointIndex) => (
                <li key={pointIndex}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
