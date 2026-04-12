"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, type Venue, getDict, getLangSwitchHref } from "@/lib/i18n";

export function LanguageSwitcher({ locale, venue }: { locale: Locale; venue?: Venue }) {
  const pathname = usePathname();
  const t = getDict(locale);

  const href = venue
    ? getLangSwitchHref(locale, venue, pathname)
    : locale === "sv"
      ? "/en"
      : "/";

  return (
    <Link
      href={href}
      className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
    >
      {t.common.switchLang}
    </Link>
  );
}
