import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { BRAND } from "@/lib/constants";
import { getDict, type Venue } from "@/lib/i18n";
import { getVenueEvents } from "@/lib/venue-content";
import { reader } from "@/lib/reader";

export default async function VenueHomeEN({
  params,
}: {
  params: Promise<{ venue: string }>;
}) {
  const { venue } = await params;
  const v = venue as Venue;
  const t = getDict("en");
  const brand = BRAND[v];
  const events = await getVenueEvents(v);

  const lagerAbout = v === "lagerbaren" ? await reader.singletons.aboutLagerbaren.read() : null;
  const masalaAbout = v === "masala-art" ? await reader.singletons.aboutMasalaArt.read() : null;

  const heroTitle = lagerAbout?.heroTitle ?? masalaAbout?.heroTitle ?? brand.name;
  const heroSubtitle = lagerAbout?.heroSubtitle ?? masalaAbout?.heroSubtitle ?? brand.tagline.en;
  const description = lagerAbout?.description ?? masalaAbout?.description ?? "";

  return (
    <>
      <PageHero title={heroTitle} subtitle={heroSubtitle} accentColor={brand.accent} />

      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="mb-12 text-lg leading-relaxed text-zinc-300">
          {description}
        </p>

        {lagerAbout && (
          <div className="mb-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-zinc-900 p-6">
              <h2 className="mb-2 text-xl font-bold text-gold">{t.home.sport}</h2>
              <p className="text-sm text-zinc-400">{lagerAbout.sportText}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-zinc-900 p-6">
              <h2 className="mb-2 text-xl font-bold text-gold">{t.home.quiz}</h2>
              <p className="text-sm text-zinc-400">{lagerAbout.quizText}</p>
            </div>
          </div>
        )}

        {events.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-white">{t.home.upcomingEvents}</h2>
            <div className="space-y-3">
              {events.slice(0, 5).map((event) => (
                <div
                  key={event.slug}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-zinc-900 px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-white">{event.entry.title}</p>
                    <p className="text-sm text-zinc-400">{event.entry.description}</p>
                  </div>
                  <div className="text-right text-sm text-zinc-400">
                    <p>{event.entry.date}</p>
                    <p>{event.entry.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="flex flex-wrap gap-4">
          <Link
            href={`/en/${venue}/menu`}
            className="rounded-full px-6 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
            style={{ backgroundColor: brand.accent }}
          >
            {t.home.viewMenu}
          </Link>
          <Link
            href={`/en/${venue}/events`}
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
