import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { getDict, type Venue } from "@/lib/i18n";
import { getEvent, getSiteInfo, getVenueEvents } from "@/lib/venue-content";

export async function generateStaticParams() {
  const params: { venue: string; slug: string }[] = [];
  for (const venue of ["lagerbaren", "masala-art"] as Venue[]) {
    const events = await getVenueEvents(venue);
    for (const event of events) {
      params.push({ venue, slug: event.slug });
    }
  }
  return params;
}

const CATEGORY_LABELS: Record<string, string> = {
  sport: "Sport",
  quiz: "Quiz",
  musik: "Music",
  ovrigt: "Other",
};

export default async function EventDetailPageEN({
  params,
}: {
  params: Promise<{ venue: string; slug: string }>;
}) {
  const { venue, slug } = await params;
  const v = venue as Venue;
  const t = getDict("en");
  const brand = BRAND[v];

  const event = await getEvent(slug);
  if (!event) notFound();
  if (event.brand !== "both" && event.brand !== v) notFound();

  const siteInfo = await getSiteInfo();
  const fallbackLocation = [siteInfo?.addressLine1, siteInfo?.addressLine2]
    .filter(Boolean)
    .join(", ");
  const locationDisplay = event.location || fallbackLocation;

  const whenDisplay = event.recurring
    ? `${t.events.everyWeek}${event.recurringDay ? ` · ${event.recurringDay}` : ""}${event.time ? ` · ${event.time}` : ""}`
    : [event.date, event.endDate && event.endDate !== event.date ? `– ${event.endDate}` : null, event.time]
        .filter(Boolean)
        .join(" · ");

  return (
    <>
      {event.heroImage ? (
        <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden border-b border-white/10">
          <Image
            src={event.heroImage}
            alt={event.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
          <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: brand.accent }}>
              {CATEGORY_LABELS[event.category] ?? event.category}
              {event.featured && " · ★"}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-6xl">
              {event.title}
            </h1>
            {event.description && (
              <p className="mt-3 max-w-2xl text-lg text-zinc-100 drop-shadow md:text-xl">
                {event.description}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="border-b border-white/10 bg-zinc-900 px-4 py-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: brand.accent }}>
            {CATEGORY_LABELS[event.category] ?? event.category}
            {event.featured && " · ★"}
          </p>
          <h1
            className="text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: brand.accent }}
          >
            {event.title}
          </h1>
          {event.description && (
            <p className="mt-3 text-lg text-zinc-400">{event.description}</p>
          )}
        </div>
      )}

      <article className="mx-auto max-w-2xl px-4 py-16">
        <div className="mb-10 rounded-xl border border-white/10 bg-zinc-900 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-1 text-xs uppercase tracking-wider text-zinc-500">
                {t.events.whenLabel}
              </h3>
              <p className="text-white">{whenDisplay || "—"}</p>
            </div>
            {locationDisplay && (
              <div>
                <h3 className="mb-1 text-xs uppercase tracking-wider text-zinc-500">
                  {t.events.whereLabel}
                </h3>
                <p className="text-white">{locationDisplay}</p>
              </div>
            )}
          </div>
        </div>

        {event.body && (
          <div className="space-y-5 text-lg leading-relaxed text-zinc-200">
            {event.body
              .split(/\n\n+/)
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </div>
        )}

        {event.bookingUrl && (
          <div className="mt-10 text-center">
            <a
              href={event.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-8 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
              style={{ backgroundColor: brand.accent }}
            >
              {t.events.bookHere}
            </a>
          </div>
        )}

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href={`/en/${venue}/events`}
            className="text-sm transition-colors hover:text-white"
            style={{ color: brand.accent }}
          >
            ← {t.events.backToList}
          </Link>
        </div>
      </article>
    </>
  );
}
