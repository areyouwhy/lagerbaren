"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, type Venue, getDict, getLangSwitchHref } from "@/lib/i18n";

export function LanguageSwitcher({ locale, venue }: { locale: Locale; venue?: Venue }) {
  const pathname = usePathname();
  const t = getDict(locale);

  let href: string;
  if (venue) {
    // Inside a venue — map SV paths to EN paths and vice versa
    const venuePath = locale === "sv"
      ? pathname.replace(`/${venue}`, "")
      : pathname.replace(`/en/${venue}`, "");
    href = getLangSwitchHref(locale, venue, venue + venuePath);
  } else {
    // Landing page
    href = locale === "sv" ? "/en" : "/";
  }

  return (
    <Link
      href={href}
      className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
    >
      {t.common.switchLang}
    </Link>
  );
}
