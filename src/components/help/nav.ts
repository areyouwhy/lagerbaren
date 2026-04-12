export type Locale = "sv" | "en";

export type HelpNavItem = {
  group: Record<Locale, string>;
  slug: Record<Locale, string>; // empty string for the index page
  label: Record<Locale, string>;
};

export const HELP_NAV: HelpNavItem[] = [
  {
    group: { sv: "Börja här", en: "Start here" },
    slug: { sv: "", en: "" },
    label: { sv: "Översikt", en: "Overview" },
  },
  {
    group: { sv: "Börja här", en: "Start here" },
    slug: { sv: "komma-igang", en: "get-started" },
    label: { sv: "Kom igång", en: "Get started" },
  },
  {
    group: { sv: "Innehåll", en: "Content" },
    slug: { sv: "startsidan", en: "home-page" },
    label: { sv: "Startsidan", en: "Home page" },
  },
  {
    group: { sv: "Innehåll", en: "Content" },
    slug: { sv: "event", en: "events" },
    label: { sv: "Event", en: "Events" },
  },
  {
    group: { sv: "Innehåll", en: "Content" },
    slug: { sv: "berattelser", en: "stories" },
    label: { sv: "Berättelser", en: "Stories" },
  },
  {
    group: { sv: "Innehåll", en: "Content" },
    slug: { sv: "menyer", en: "menus" },
    label: { sv: "Menyer", en: "Menus" },
  },
  {
    group: { sv: "Innehåll", en: "Content" },
    slug: { sv: "lunch", en: "lunch" },
    label: { sv: "Lunch", en: "Lunch" },
  },
  {
    group: { sv: "Innehåll", en: "Content" },
    slug: { sv: "sidor", en: "pages" },
    label: { sv: "Sidor", en: "Pages" },
  },
  {
    group: { sv: "Innehåll", en: "Content" },
    slug: { sv: "oppettider", en: "hours-contact" },
    label: { sv: "Öppettider & kontakt", en: "Hours & contact" },
  },
  {
    group: { sv: "Tvärs över", en: "Cross-cutting" },
    slug: { sv: "bilder", en: "images" },
    label: { sv: "Bilder", en: "Images" },
  },
  {
    group: { sv: "Tvärs över", en: "Cross-cutting" },
    slug: { sv: "sprak", en: "languages" },
    label: { sv: "Svenska & engelska", en: "Swedish & English" },
  },
  {
    group: { sv: "Tvärs över", en: "Cross-cutting" },
    slug: { sv: "problem", en: "troubleshooting" },
    label: { sv: "Vanliga problem", en: "Troubleshooting" },
  },
];

export function helpHrefFor(item: HelpNavItem, locale: Locale): string {
  const base = locale === "sv" ? "/help" : "/en/help";
  return item.slug[locale] ? `${base}/${item.slug[locale]}` : base;
}

/**
 * Bidirectional URL maps for the language toggle.
 * Built from HELP_NAV so adding a topic in one place updates everything.
 */
export const HELP_SV_TO_EN: Record<string, string> = Object.fromEntries(
  HELP_NAV.map((item) => [helpHrefFor(item, "sv"), helpHrefFor(item, "en")]),
);

export const HELP_EN_TO_SV: Record<string, string> = Object.fromEntries(
  HELP_NAV.map((item) => [helpHrefFor(item, "en"), helpHrefFor(item, "sv")]),
);
