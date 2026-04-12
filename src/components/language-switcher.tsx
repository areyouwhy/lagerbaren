"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, type Venue, getLangSwitchHref } from "@/lib/i18n";
import { SwedishFlag, UkFlag } from "@/components/flags";

export function LanguageSwitcher({ locale, venue }: { locale: Locale; venue?: Venue }) {
  const pathname = usePathname();

  // Compute the URLs for both languages. For the active locale we use the
  // current pathname as the href (so clicking it is a no-op). For the other
  // locale we ask getLangSwitchHref what the equivalent page is.
  const svHref = venue
    ? locale === "sv"
      ? pathname
      : getLangSwitchHref("en", venue, pathname)
    : "/";
  const enHref = venue
    ? locale === "en"
      ? pathname
      : getLangSwitchHref("sv", venue, pathname)
    : "/en";

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Språkval">
      <Link
        href={svHref}
        aria-label="Byt till svenska"
        aria-current={locale === "sv" ? "page" : undefined}
        className={`block h-4 w-[26px] overflow-hidden rounded-sm ring-1 ring-white/20 transition-all hover:opacity-100 ${
          locale === "sv" ? "opacity-100 ring-white/40" : "opacity-50"
        }`}
      >
        <SwedishFlag className="h-full w-full" />
      </Link>
      <Link
        href={enHref}
        aria-label="Switch to English"
        aria-current={locale === "en" ? "page" : undefined}
        className={`block h-4 w-[26px] overflow-hidden rounded-sm ring-1 ring-white/20 transition-all hover:opacity-100 ${
          locale === "en" ? "opacity-100 ring-white/40" : "opacity-50"
        }`}
      >
        <UkFlag className="h-full w-full" />
      </Link>
    </div>
  );
}
