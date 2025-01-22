// components/ProjectCard.tsx
interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  onClick: () => void;
}

export default function ProjectCard({
  title,
  image,
  description,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-zinc-800 rounded-lg overflow-hidden cursor-pointer"
    >
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
