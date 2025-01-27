import { RefObject } from "react";
interface ProjectVideoProps {
  videoRef: RefObject<HTMLDivElement | null>;
  videoUrl: string;
}

export function ProjectVideo({ videoRef, videoUrl }: ProjectVideoProps) {
  return (
    <div ref={videoRef} className="md:h-screen flex items-center p-4">
      <div className="relative w-full h-full aspect-video rounded-xl overflow-hidden bg-zinc-800">
        <video className="w-full h-full" autoPlay muted loop playsInline>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
