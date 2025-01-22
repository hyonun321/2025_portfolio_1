// components/project-sections/ProblemSolvingSection.tsx
interface ProblemSolving {
  problem: string;
  solution: string;
  results: string[];
}

export function ProblemSolvingSection({
  problem,
  solution,
  results,
}: ProblemSolving) {
  return (
    <div className="content-card backdrop-blur-md bg-white/10 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <span className="text-green-400 mr-2">Problem Solving</span>
      </h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-red-400 font-semibold mb-2">문제</h4>
          <p className="text-gray-200">{problem}</p>
        </div>
        <div>
          <h4 className="text-blue-400 font-semibold mb-2">해결</h4>
          <p className="text-gray-200">{solution}</p>
        </div>
        <div>
          <h4 className="text-green-400 font-semibold mb-2">결과</h4>
          <ul className="text-gray-200 space-y-2">
            {results.map((result, index) => (
              <li key={index}>• {result}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
