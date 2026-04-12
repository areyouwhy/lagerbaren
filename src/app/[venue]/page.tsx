import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { AmbienceStrip } from "@/components/ambience-strip";
import { BRAND } from "@/lib/constants";
import { getDict, type Venue } from "@/lib/i18n";
import { getAmbienceImages, getVenueAbout, getVenueEvents, splitEvents } from "@/lib/venue-content";
import { UpcomingEventList } from "@/components/event-list";

const LOCALE = "sv";

export default async function VenueHome({
  params,
}: {
  params: Promise<{ venue: string }>;
}) {
  const { venue } = await params;
  const v = venue as Venue;
  const t = getDict(LOCALE);
  const brand = BRAND[v];
  const events = await getVenueEvents(v, LOCALE);

  const about = await getVenueAbout(v, LOCALE);
  const heroTitle = about?.heroTitle || brand.name;
  const heroSubtitle = about?.heroSubtitle || brand.tagline.sv;
  const description = about?.description || "";
  const heroImage = about?.heroImage ?? null;
  const ambienceImages = await getAmbienceImages(v);

  return (
    <>
      <PageHero
        title={heroTitle}
        subtitle={heroSubtitle}
        accentColor={brand.accent}
        backgroundImage={heroImage ?? undefined}
        backgroundAlt={`${brand.name} — ${heroSubtitle}`}
      />

      {ambienceImages.length > 0 && (
        <AmbienceStrip images={ambienceImages} alt={`${brand.name} — interiör och mat`} />
      )}

      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="mb-12 text-lg leading-relaxed text-zinc-300">{description}</p>

        {v === "lagerbaren" && about && (
          <div className="mb-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-zinc-900 p-6">
              <h2 className="mb-2 text-xl font-bold text-gold">{t.home.sport}</h2>
              <p className="text-sm text-zinc-400">{about.sportText}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-zinc-900 p-6">
              <h2 className="mb-2 text-xl font-bold text-gold">{t.home.quiz}</h2>
              <p className="text-sm text-zinc-400">{about.quizText}</p>
            </div>
          </div>
        )}

        {(() => {
          const { upcoming } = splitEvents(events);
          return upcoming.length > 0 ? (
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-white">{t.home.upcomingEvents}</h2>
              <UpcomingEventList events={upcoming.slice(0, 5)} eventPathBase={`/${venue}/event`} />
            </section>
          ) : null;
        })()}

        <div className="flex flex-wrap gap-4">
          <Link
            href={`/${venue}/meny`}
            className="rounded-full px-6 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
            style={{ backgroundColor: brand.accent }}
          >
            {t.home.viewMenu}
          </Link>
          <Link
            href={`/${venue}/event`}
            className="rounded-full border px-6 py-2 text-sm font-medium transition-colors hover:bg-white/5"
            style={{ borderColor: brand.accent + "66", color: brand.accent }}
          >
            {t.home.viewEvents}
          </Link>
        </div>
      </div>
    </>
  );
}
