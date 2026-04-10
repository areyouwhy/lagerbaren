"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BRAND } from "@/lib/constants";
import { type Locale, type Venue, getVenueNav, getDict } from "@/lib/i18n";
import { LanguageSwitcher } from "./language-switcher";

export function VenueHeader({ locale, venue }: { locale: Locale; venue: Venue }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav = getVenueNav(locale, venue);
  const brand = BRAND[venue];
  const t = getDict(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href={locale === "sv" ? `/${venue}` : `/en/${venue}`}
          className="text-lg font-bold tracking-wide"
          style={{ color: brand.accent }}
        >
          {brand.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname === item.href
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} venue={venue} />
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label={locale === "sv" ? "Meny" : "Menu"}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-white/10 bg-zinc-950 px-4 pb-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm transition-colors ${
                pathname === item.href
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 border-t border-white/10 pt-2">
            <LanguageSwitcher locale={locale} venue={venue} />
          </div>
        </nav>
      )}
    </header>
  );
}
