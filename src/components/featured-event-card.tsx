import Image from "next/image";
import Link from "next/link";
import type { EventEntry } from "@/lib/venue-content";

const CATEGORY_ICONS: Record<string, string> = {
  sport: "⚽",
  quiz: "🧠",
  musik: "🎵",
  ovrigt: "📌",
};

export function FeaturedEventCard({
  event,
  fallbackImage,
  href,
  accentColor,
  eyebrow,
  recurringLabel,
}: {
  event: EventEntry;
  fallbackImage: string | null;
  href: string;
  accentColor: string;
  /** Eyebrow text shown above the title — e.g. "Nästa event" / "Next event". */
  eyebrow: string;
  /** Localized "every" prefix for recurring events — e.g. "Varje". */
  recurringLabel: string;
}) {
  const bgImage = event.heroImage || fallbackImage;
  const icon = CATEGORY_ICONS[event.category] ?? "📌";

  // Format the date pill content
  const dateParts: string[] = [];
  if (event.recurring) {
    dateParts.push(`${recurringLabel}${event.recurringDay ? ` ${event.recurringDay}` : ""}`);
  } else if (event.date) {
    dateParts.push(event.date);
  }
  if (event.time) {
    dateParts.push(event.time);
  }
  const dateLabel = dateParts.join(" · ");

  return (
    <Link
      href={href}
      className="group relative block h-[55vh] min-h-[400px] w-full overflow-hidden border-b border-white/10"
    >
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/85" />

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-14 text-center">
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] drop-shadow"
          style={{ color: accentColor }}
        >
          {eyebrow}
        </p>
        <h2 className="mb-3 text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-6xl">
          {event.title}
        </h2>
        {event.description && (
          <p className="mb-6 max-w-2xl text-lg text-zinc-100 drop-shadow md:text-xl">
            {event.description}
          </p>
        )}
        {dateLabel && (
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition-colors group-hover:bg-white/20">
            <span aria-hidden="true">{icon}</span>
            {dateLabel}
          </span>
        )}
      </div>
    </Link>
  );
}
