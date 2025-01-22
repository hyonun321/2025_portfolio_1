export default function ProgressBar() {
  return (
    <div className="flex items-center justify-start absolute bottom-0 left-0 w-full h-1 bg-gray-700/50">
      <div className="h-full w-0 bg-gradient-purple animate-progress" />
    </div>
  );
}
