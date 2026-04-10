import { PageHero } from "@/components/page-hero";
import { BRAND } from "@/lib/constants";
import { getDict, type Venue } from "@/lib/i18n";
import { getVenueEvents, getFestvaningInfo } from "@/lib/venue-content";

export default async function VenueEventsPageEN({
  params,
}: {
  params: Promise<{ venue: string }>;
}) {
  const { venue } = await params;
  const v = venue as Venue;
  const t = getDict("en");
  const brand = BRAND[v];
  const events = await getVenueEvents(v);
  const festvaning = v === "lagerbaren" ? await getFestvaningInfo() : null;

  return (
    <>
      <PageHero title={t.events.title} subtitle={brand.name} accentColor={brand.accent} />

      <div className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-bold text-white">{t.events.upcoming}</h2>
        {events.length > 0 ? (
          <div className="mb-12 space-y-3">
            {events.map((event) => (
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
        ) : (
          <p className="mb-12 text-zinc-400">{t.events.emptyState}</p>
        )}

        {festvaning && (
          <>
            <div className="mb-8 rounded-xl border border-white/10 bg-zinc-900 p-8">
              <h2 className="mb-4 text-2xl font-bold text-gold">{t.events.partyVenue}</h2>
              <p className="text-zinc-300">{festvaning.description}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="mb-1 text-sm font-medium text-zinc-400">Capacity</h3>
                  <p className="text-white">{festvaning.capacity}</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-medium text-zinc-400">Pricing</h3>
                  <p className="text-white">{festvaning.priceInfo}</p>
                </div>
              </div>
            </div>

            <div className="mb-8 rounded-xl border border-white/10 bg-zinc-900 p-8">
              <h2 className="mb-4 text-2xl font-bold text-gold">{t.events.fullBarBooking}</h2>
              <p className="text-zinc-300">{festvaning.fullBarDescription}</p>
            </div>

            <div className="rounded-xl border border-gold/30 bg-gold/5 p-6 text-center">
              <p className="text-lg font-medium text-gold">{t.events.interested}</p>
              <p className="mt-2 text-zinc-300">{festvaning.contactInfo}</p>
              <a
                href="mailto:boka@lagerbaren.se"
                className="mt-4 inline-block rounded-full bg-gold px-6 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                {t.events.sendInquiry}
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
}
