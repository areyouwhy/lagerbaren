"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SwedishFlag, UkFlag } from "@/components/flags";
import { HELP_SV_TO_EN, HELP_EN_TO_SV, type Locale } from "./nav";

export function HelpLanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  const svUrl = locale === "sv" ? clean : (HELP_EN_TO_SV[clean] ?? "/help");
  const enUrl = locale === "en" ? clean : (HELP_SV_TO_EN[clean] ?? "/en/help");

  const flag =
    "block h-4 w-[26px] overflow-hidden rounded-sm ring-1 transition-all hover:opacity-100";

  return (
    <div
      className="flex items-center gap-2"
      role="group"
      aria-label={locale === "sv" ? "Språkval" : "Language"}
    >
      <Link
        href={svUrl}
        aria-label="Byt till svenska"
        aria-current={locale === "sv" ? "page" : undefined}
        className={`${flag} ${
          locale === "sv"
            ? "opacity-100 ring-white/40"
            : "opacity-50 ring-white/20"
        }`}
      >
        <SwedishFlag className="h-full w-full" />
      </Link>
      <Link
        href={enUrl}
        aria-label="Switch to English"
        aria-current={locale === "en" ? "page" : undefined}
        className={`${flag} ${
          locale === "en"
            ? "opacity-100 ring-white/40"
            : "opacity-50 ring-white/20"
        }`}
      >
        <UkFlag className="h-full w-full" />
      </Link>
    </div>
  );
}
