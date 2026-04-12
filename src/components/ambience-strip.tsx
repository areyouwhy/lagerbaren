import Image from "next/image";

export function AmbienceStrip({
  images,
  alt = "",
}: {
  images: string[];
  alt?: string;
}) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-px sm:grid-cols-3">
      {images.map((src) => (
        <div
          key={src}
          className="relative aspect-[4/3] overflow-hidden bg-zinc-900"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
