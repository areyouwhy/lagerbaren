"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, type Venue, getLangSwitchHref } from "@/lib/i18n";

// Swedish flag — 16:10 with yellow Nordic cross offset to the hoist side
function SwedishFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 10"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect width="16" height="10" fill="#006AA7" />
      <rect x="0" y="4" width="16" height="2" fill="#FECC00" />
      <rect x="5" y="0" width="2" height="10" fill="#FECC00" />
    </svg>
  );
}

// Union Jack — simplified but recognizable at 20–24px display sizes
function UkFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 30"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <clipPath id="uk-clip">
        <rect width="60" height="30" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <g clipPath="url(#uk-clip)">
        {/* Diagonals — white background */}
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        {/* Diagonals — red overlay */}
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
        {/* Cross of St George — white border */}
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        {/* Cross of St George — red */}
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

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
