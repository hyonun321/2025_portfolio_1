interface ProfileImageProps {
  sources: {
    avif?: string;
    webp?: string;
    fallback: string;
  };
  alt: string;
  info?: {
    name: string;
    birth: string;
    education: string;
  };
}

export default function ProfileImage({
  sources,
  alt,
  info,
}: ProfileImageProps) {
  return (
    <div className="w-full md:w-1/2 px-4">
      <div className="max-w-[300px] md:max-w-[400px] mx-auto">
        <div className="relative w-full pt-[100%]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="h-full rounded-full overflow-hidden group relative">
              <picture>
                {sources.avif && (
                  <source srcSet={sources.avif} type="image/avif" />
                )}
                {sources.webp && (
                  <source srcSet={sources.webp} type="image/webp" />
                )}
                <img
                  src={sources.fallback}
                  alt={alt}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </picture>
              <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <p className="text-lg md:text-2xl mb-2">{info?.name}</p>
                <p className="text-base md:text-lg mb-1">{info?.birth}</p>
                <p className="text-base md:text-lg">{info?.education}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
