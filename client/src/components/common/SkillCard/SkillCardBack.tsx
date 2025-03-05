export // 카드 뒷면 렌더링 컴포넌트
function SkillCardBack({ backContent }: { backContent?: React.ReactNode }) {
  return (
    <div
      className="absolute inset-0 h-full flex items-center justify-center bg-zinc-800 border text-white p-5"
      style={{
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
      {backContent}
    </div>
  );
}
