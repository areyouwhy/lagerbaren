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
    <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-6">
      {images.map((src) => (
        <div
          key={src}
          className="relative aspect-square overflow-hidden bg-zinc-900"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 16vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
