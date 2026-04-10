import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { type Locale, type Venue, getDict } from "@/lib/i18n";

export function VenueFooter({ locale, venue }: { locale: Locale; venue: Venue }) {
  const t = getDict(locale);
  const brand = BRAND[venue];
  const otherVenue = venue === "lagerbaren" ? "masala-art" : "lagerbaren";
  const otherBrand = BRAND[otherVenue];

  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div>
          <h3 className="mb-3 font-bold" style={{ color: brand.accent }}>
            {brand.name}
          </h3>
          <p className="text-sm text-zinc-400">{brand.tagline[locale]}</p>
          <p className="mt-2 text-sm text-zinc-400">{t.findUs.phone}: {brand.phone}</p>
        </div>
        <div>
          <h3 className="mb-3 font-bold text-zinc-300">{t.footer.contact}</h3>
          <p className="text-sm text-zinc-400">
            {t.footer.booking}:{" "}
            <a href="mailto:boka@lagerbaren.se" className="text-zinc-300 hover:text-white">
              boka@lagerbaren.se
            </a>
          </p>
          <p className="mt-2 text-sm text-zinc-400">Södermalm, Stockholm</p>
        </div>
        <div>
          <h3 className="mb-3 font-bold" style={{ color: otherBrand.accent }}>
            {otherBrand.name}
          </h3>
          <p className="text-sm text-zinc-400">{otherBrand.tagline[locale]}</p>
          <Link
            href={locale === "sv" ? `/${otherVenue}` : `/en/${otherVenue}`}
            className="mt-2 inline-block text-sm transition-colors hover:text-white"
            style={{ color: otherBrand.accent }}
          >
            {t.landing.enter} {otherBrand.name} &rarr;
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/5 pt-6 text-center">
        <Link
          href={locale === "sv" ? "/" : "/en"}
          className="text-xs text-zinc-600 hover:text-zinc-400"
        >
          {t.common.backToStart}
        </Link>
        <p className="mt-2 text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Lagerbaren &amp; Masala Art. {t.footer.allRights}
        </p>
      </div>
    </footer>
  );
}
