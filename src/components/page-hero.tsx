import Image from "next/image";

export function PageHero({
  title,
  subtitle,
  accentColor,
  backgroundImage,
  backgroundAlt,
  backgroundPosition,
  logoOverlay,
}: {
  title: string;
  subtitle?: string;
  accentColor?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  /** CSS object-position value, e.g. "center", "top", "bottom right". */
  backgroundPosition?: string;
  /** When set, render this logo image instead of the H1 title text. */
  logoOverlay?: string | null;
}) {
  if (backgroundImage) {
    return (
      <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden border-b border-white/10">
        <Image
          src={backgroundImage}
          alt={backgroundAlt ?? ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={backgroundPosition ? { objectPosition: backgroundPosition } : undefined}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-16 text-center">
          {logoOverlay ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoOverlay}
              alt={title}
              className="h-28 w-auto drop-shadow-2xl md:h-40"
            />
          ) : (
            <h1
              className="text-5xl font-bold tracking-tight drop-shadow-lg md:text-7xl"
              style={accentColor ? { color: accentColor } : { color: "white" }}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg text-zinc-100 drop-shadow md:text-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-white/10 bg-zinc-900 px-4 py-16 text-center">
      <h1
        className="text-4xl font-bold tracking-tight md:text-5xl"
        style={accentColor ? { color: accentColor } : { color: "white" }}
      >
        {title}
      </h1>
      {subtitle && <p className="mt-3 text-lg text-zinc-400">{subtitle}</p>}
    </div>
  );
}
