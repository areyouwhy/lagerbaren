import Link from "next/link";
import { HELP_NAV, helpHrefFor, type HelpNavItem, type Locale } from "./nav";
import { HelpLanguageToggle } from "./language-toggle";

const T = {
  sv: {
    title: "Hjälp",
    openKeystatic: "Öppna Keystatic →",
    backTitle: "← Hjälp",
  },
  en: {
    title: "Help",
    openKeystatic: "Open Keystatic →",
    backTitle: "← Help",
  },
} as const;

function groupNav(locale: Locale): Array<[string, HelpNavItem[]]> {
  const map = new Map<string, HelpNavItem[]>();
  for (const item of HELP_NAV) {
    const key = item.group[locale];
    const list = map.get(key) ?? [];
    list.push(item);
    map.set(key, list);
  }
  return Array.from(map.entries());
}

export function HelpShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = T[locale];
  const groups = groupNav(locale);
  const homeHref = locale === "sv" ? "/help" : "/en/help";

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 md:flex-row md:gap-10 md:py-12">
      <header className="mb-8 flex items-center justify-between md:hidden">
        <Link href={homeHref} className="text-sm font-semibold text-gold">
          {t.backTitle}
        </Link>
        <HelpLanguageToggle locale={locale} />
      </header>

      <aside className="mb-10 shrink-0 md:sticky md:top-8 md:mb-0 md:w-60 md:self-start">
        <div className="mb-6 hidden items-center justify-between md:flex">
          <Link href={homeHref} className="text-lg font-bold text-white">
            {t.title}
          </Link>
          <HelpLanguageToggle locale={locale} />
        </div>
        <nav className="space-y-6 text-sm">
          {groups.map(([group, items]) => (
            <div key={group}>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {group}
              </div>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item.slug[locale] || "index"}>
                    <Link
                      href={helpHrefFor(item, locale)}
                      className="block rounded-md px-2 py-1 text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {item.label[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="pt-4">
            <Link
              href="/keystatic"
              className="block rounded-md border border-white/15 px-3 py-2 text-center text-xs font-medium text-zinc-200 transition-colors hover:border-gold/40 hover:text-gold"
            >
              {t.openKeystatic}
            </Link>
          </div>
        </nav>
      </aside>

      <main className="min-w-0 flex-1 pb-24">
        <article className="max-w-2xl text-zinc-200">{children}</article>
      </main>
    </div>
  );
}
