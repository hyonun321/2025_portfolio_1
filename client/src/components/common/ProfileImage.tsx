interface ProfileImageProps {
  sources: {
    avif?: string;
    webp?: string;
    fallback: string;
  };
  width?: number;
  height?: number;
  alt: string;
  info?: {
    name: string;
    birth: string;
    education: string;
  };
}

export default function ProfileImage({
  sources,
  width = 400,
  height = 400,
  alt,
  info,
}: ProfileImageProps) {
  return (
    <div className="flex mx-auto w-1/2 m-6 justify-center">
      <div
        className="rounded-full overflow-hidden relative group"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <picture>
          {sources.avif && <source srcSet={sources.avif} type="image/avif" />}
          {sources.webp && <source srcSet={sources.webp} type="image/webp" />}
          <img
            src={sources.fallback}
            width={width}
            height={height}
            alt={alt}
            className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
          />
        </picture>
        {/* 호버 시 나타나는 텍스트 오버레이 */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <p className="text-2xl mb-2">{info?.name}</p>
          <p className="text-lg mb-1">{info?.birth}</p>
          <p className="text-lg">{info?.education}</p>
        </div>
      </div>
    </div>
  );
}
