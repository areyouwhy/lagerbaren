import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { BRAND } from "@/lib/constants";
import { getDict, type Venue } from "@/lib/i18n";

export default async function VenueBookPageEN({
  params,
}: {
  params: Promise<{ venue: string }>;
}) {
  const { venue } = await params;
  const v = venue as Venue;
  const t = getDict("en");
  const brand = BRAND[v];

  return (
    <>
      <PageHero title={t.book.title} subtitle={t.book.subtitle} accentColor={brand.accent} />

      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="mb-8 rounded-xl border border-white/10 bg-zinc-900 p-8 text-center">
          <h2 className="mb-4 text-xl font-bold text-white">{t.book.title}</h2>
          <p className="mb-6 text-zinc-400">{t.book.description}</p>
          <a
            href="mailto:boka@lagerbaren.se?subject=Table%20Booking"
            className="inline-block rounded-full px-6 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
            style={{ backgroundColor: brand.accent }}
          >
            boka@lagerbaren.se
          </a>
          <p className="mt-4 text-sm text-zinc-500">
            {t.book.orCall}: {brand.phone}
          </p>
        </div>

        {v === "lagerbaren" && (
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              href="/en/lagerbaren/events"
              className="rounded-xl border border-gold/20 bg-zinc-900 p-6 transition-colors hover:border-gold/40"
            >
              <h3 className="mb-2 font-bold text-gold">{t.book.partyVenue}</h3>
              <p className="text-sm text-zinc-400">{t.book.partyVenueDesc}</p>
            </Link>
            <Link
              href="/en/lagerbaren/events"
              className="rounded-xl border border-gold/20 bg-zinc-900 p-6 transition-colors hover:border-gold/40"
            >
              <h3 className="mb-2 font-bold text-gold">{t.book.fullBar}</h3>
              <p className="text-sm text-zinc-400">{t.book.fullBarDesc}</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
