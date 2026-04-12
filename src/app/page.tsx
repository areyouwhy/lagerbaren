import Link from "next/link";
import Image from "next/image";
import { getDict, type Locale, type Venue } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";
import { BRAND } from "@/lib/constants";
import { getVenueAbout } from "@/lib/venue-content";

const LOCALE: Locale = "sv";

export default async function LandingPage() {
  const t = getDict(LOCALE);
  const [lager, masala] = await Promise.all([
    getVenueAbout("lagerbaren", LOCALE),
    getVenueAbout("masala-art", LOCALE),
  ]);

  return (
    <div className="relative flex min-h-screen flex-col md:flex-row">
      {/* Language switcher floats over both panels */}
      <div className="absolute right-6 top-6 z-20">
        <LanguageSwitcher locale={LOCALE} />
      </div>

      <VenuePanel
        href="/lagerbaren"
        venue="lagerbaren"
        heroImage={lager?.heroImage ?? null}
        heroPosition={lager?.heroImagePosition}
        logo={lager?.logo ?? null}
        ariaLabel={`${t.landing.enter} Lagerbaren`}
      />
      <VenuePanel
        href="/masala-art"
        venue="masala-art"
        heroImage={masala?.heroImage ?? null}
        heroPosition={masala?.heroImagePosition}
        logo={masala?.logo ?? null}
        ariaLabel={`${t.landing.enter} Masala Art`}
      />
    </div>
  );
}

function VenuePanel({
  href,
  venue,
  heroImage,
  heroPosition,
  logo,
  ariaLabel,
}: {
  href: string;
  venue: Venue;
  heroImage: string | null;
  heroPosition?: string;
  logo: string | null;
  ariaLabel: string;
}) {
  const brand = BRAND[venue];
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="group relative flex min-h-[50vh] flex-1 items-center justify-center overflow-hidden md:min-h-screen"
    >
      {heroImage && (
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={heroPosition ? { objectPosition: heroPosition } : undefined}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 transition-opacity duration-500 group-hover:from-black/30 group-hover:via-black/20 group-hover:to-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo}
            alt={brand.name}
            className="h-32 w-auto drop-shadow-2xl md:h-48"
          />
        ) : (
          <h2
            className="text-5xl font-bold tracking-tight drop-shadow-lg md:text-7xl"
            style={{ color: brand.accent }}
          >
            {brand.name}
          </h2>
        )}
      </div>
    </Link>
  );
}
