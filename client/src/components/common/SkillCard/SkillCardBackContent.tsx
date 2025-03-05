interface BackContentData {
  header?: string;
  paragraphs?: string[];
  items?: {
    imageSrc: string;
    alt: string;
    caption: string;
  }[];
}

interface SkillCardBackContentProps {
  data: BackContentData;
}

export default function SkillCardBackContent({
  data,
}: SkillCardBackContentProps) {
  if (data.paragraphs) {
    return (
      <div className="p-4 text-center">
        {data.header && (
          <>
            <h3 className="text-xl md:text-xl sm:text-2xl font-bold">
              {data.header}
            </h3>
            <br />
          </>
        )}
        <p className="text-left text-lg md:text-lg sm:text-xl">
          {data.paragraphs.map((text, idx) => (
            <span key={idx}>
              {text}
              <br />
            </span>
          ))}
        </p>
      </div>
    );
  }

  if (data.items) {
    return (
      <div className="flex flex-row items-center justify-around gap-4 w-full">
        {data.items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={item.imageSrc}
              alt={item.alt}
              className="w-32 h-32 md:w-32 md:h-32 object-contain"
            />
            <span className="text-lg md:text-xl mt-1 text-center">
              {item.caption}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
