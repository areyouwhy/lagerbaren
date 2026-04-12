import Link from "next/link";
import type { Locale } from "./nav";

type Topic = { slug: string; title: string; blurb: string };
type Quick = { href: string; title: string };

const TOPICS: Record<Locale, Topic[]> = {
  sv: [
    {
      slug: "komma-igang",
      title: "Kom igång",
      blurb: "Logga in, rundtur av Keystatic, och hur spar fungerar.",
    },
    {
      slug: "startsidan",
      title: "Startsidan",
      blurb: "Vad som styr hero-bild, bildremsa och vad som lyfts upp.",
    },
    {
      slug: "event",
      title: "Event",
      blurb:
        "Skapa engångs- och återkommande event. Uppdatera, lyft fram, ta bort.",
    },
    {
      slug: "berattelser",
      title: "Berättelser",
      blurb: "Historier om sponsorskap, fanklubben och huset.",
    },
    {
      slug: "menyer",
      title: "Menyer",
      blurb:
        "Lagerbaren, Masala Art och drycker — lägg till, ändra pris, ta bort.",
    },
    {
      slug: "lunch",
      title: "Lunch",
      blurb: "Uppdatera nästa vecka, ändra pågående vecka, byt pris.",
    },
    {
      slug: "sidor",
      title: "Sidor",
      blurb: "Om-sidor, festväningen och andra fasta sidor.",
    },
    {
      slug: "oppettider",
      title: "Öppettider & kontakt",
      blurb: "Byt telefon, email, öppettider, karta och sociala länkar.",
    },
    {
      slug: "bilder",
      title: "Bilder",
      blurb: "Hur bilder laddas upp, storlek, och fokuspunkt på hero-bilder.",
    },
    {
      slug: "sprak",
      title: "Svenska & engelska",
      blurb: "Hur tvåspråkiga fält fungerar och när engelska är valfritt.",
    },
    {
      slug: "problem",
      title: "Vanliga problem",
      blurb: "”Det syns inte efter jag sparade” och andra tips.",
    },
  ],
  en: [
    {
      slug: "get-started",
      title: "Get started",
      blurb: "Log in, take a tour of Keystatic, and learn how saving works.",
    },
    {
      slug: "home-page",
      title: "Home page",
      blurb:
        "What drives the hero image, the photo strip, and what gets featured.",
    },
    {
      slug: "events",
      title: "Events",
      blurb:
        "Create one-off and recurring events. Update, feature, remove.",
    },
    {
      slug: "stories",
      title: "Stories",
      blurb:
        "Stories about sponsorships, the fan club, and the house itself.",
    },
    {
      slug: "menus",
      title: "Menus",
      blurb:
        "Lagerbaren, Masala Art, and drinks — add items, change prices, remove.",
    },
    {
      slug: "lunch",
      title: "Lunch",
      blurb:
        "Update next week, change the current week, swap the price.",
    },
    {
      slug: "pages",
      title: "Pages",
      blurb: "About pages, the party venue, and other fixed pages.",
    },
    {
      slug: "hours-contact",
      title: "Hours & contact",
      blurb: "Change phone, email, opening hours, map, and social links.",
    },
    {
      slug: "images",
      title: "Images",
      blurb:
        "How to upload images, file sizes, and focus points on hero images.",
    },
    {
      slug: "languages",
      title: "Swedish & English",
      blurb:
        "How bilingual fields work and when English is optional.",
    },
    {
      slug: "troubleshooting",
      title: "Troubleshooting",
      blurb: "“My change isn’t showing up” and other quick fixes.",
    },
  ],
};

const QUICK: Record<Locale, Quick[]> = {
  sv: [
    { href: "/help/lunch#nasta-vecka", title: "Uppdatera nästa veckas lunch" },
    { href: "/help/lunch#pagaende", title: "Ändra pågående veckas lunch" },
    { href: "/help/event#engangs", title: "Skapa ett engångs-event" },
    { href: "/help/event#aterkommande", title: "Skapa ett återkommande event" },
    { href: "/help/event#uppdatera", title: "Uppdatera ett event" },
    { href: "/help/berattelser#skapa", title: "Skapa en berättelse" },
    { href: "/help/oppettider#tider", title: "Byta öppettider" },
    { href: "/help/startsidan#hero", title: "Byta hero-bild på startsidan" },
  ],
  en: [
    { href: "/en/help/lunch#next-week", title: "Update next week’s lunch" },
    { href: "/en/help/lunch#current", title: "Change the current week’s lunch" },
    { href: "/en/help/events#one-off", title: "Create a one-off event" },
    { href: "/en/help/events#recurring", title: "Create a recurring event" },
    { href: "/en/help/events#update", title: "Update an event" },
    { href: "/en/help/stories#create", title: "Create a story" },
    { href: "/en/help/hours-contact#hours", title: "Change opening hours" },
    { href: "/en/help/home-page#hero", title: "Change the home-page hero image" },
  ],
};

const COPY = {
  sv: {
    h1: "Hjälp",
    lede: (
      <>
        Så här sköter du innehållet på Lagerbaren och Masala Art. Hela sajten
        redigeras via{" "}
        <Link href="/keystatic" className="text-gold hover:underline">
          Keystatic
        </Link>{" "}
        — den här guiden visar hur du gör de vanligaste sakerna, steg för steg.
      </>
    ),
    quickHeading: "Snabbguider",
    topicsHeading: "Alla ämnen",
  },
  en: {
    h1: "Help",
    lede: (
      <>
        Here&rsquo;s how to manage content for Lagerbaren and Masala Art. The
        whole site is edited through{" "}
        <Link href="/keystatic" className="text-gold hover:underline">
          Keystatic
        </Link>{" "}
        — this guide walks you through the most common tasks, step by step.
      </>
    ),
    quickHeading: "Quick guides",
    topicsHeading: "All topics",
  },
} as const;

export function HelpLanding({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const topics = TOPICS[locale];
  const quick = QUICK[locale];
  const base = locale === "sv" ? "/help" : "/en/help";

  return (
    <>
      <h1 className="mb-3 text-4xl font-bold text-white">{t.h1}</h1>
      <p className="mb-10 text-lg leading-relaxed text-zinc-400">{t.lede}</p>

      <section className="mb-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
          {t.quickHeading}
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {quick.map((q) => (
            <li key={q.title}>
              <Link
                href={q.href}
                className="block rounded-lg border border-white/10 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-200 transition-colors hover:border-gold/40 hover:text-white"
              >
                {q.title} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
          {t.topicsHeading}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {topics.map((topic) => (
            <li key={topic.slug}>
              <Link
                href={`${base}/${topic.slug}`}
                className="block rounded-xl border border-white/10 bg-zinc-900/60 p-5 transition-colors hover:border-gold/40"
              >
                <div className="mb-1 text-base font-semibold text-white">
                  {topic.title}
                </div>
                <div className="text-sm text-zinc-400">{topic.blurb}</div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
