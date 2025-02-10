import { RefObject } from "react";
interface ProjectVideoProps {
  videoRef: RefObject<HTMLDivElement | null>;
  videoUrl: string;
  href: string;
}

export function ProjectVideo({ videoRef, videoUrl, href }: ProjectVideoProps) {
  return (
    <div ref={videoRef} className="md:h-screen flex items-center p-4">
      <div className="relative w-full h-full aspect-video rounded-xl overflow-hidden ">
        <div className="md:h-screen flex items-center p-4">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <video className="w-full h-full" autoPlay muted loop playsInline>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </a>
        </div>
      </div>
    </div>
  );
}
