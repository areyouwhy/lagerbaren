import { reader } from "./reader";
import { localize, localizePaired, type Locale, type LocalizedString, type Venue } from "./i18n";

// =====================================================================
// CATEGORY LABELS — bilingual
// =====================================================================

const LAGERBAREN_CATEGORIES: Record<string, { sv: string; en: string }> = {
  forratt: { sv: "Förrätter", en: "Starters" },
  pizza: { sv: "Pizza", en: "Pizza" },
  pasta: { sv: "Pasta", en: "Pasta" },
  kott: { sv: "Kött", en: "Meat" },
  plankstek: { sv: "Plankstek", en: "Plank Steak" },
  fisk: { sv: "Fisk", en: "Fish" },
  burgare: { sv: "Burgare", en: "Burgers" },
  sallad: { sv: "Sallad", en: "Salad" },
  varmratt: { sv: "Varmrätt", en: "Mains" },
  tillbehor: { sv: "Tillbehör", en: "Sides" },
  dessert: { sv: "Dessert", en: "Dessert" },
};

const MASALA_CATEGORIES: Record<string, { sv: string; en: string }> = {
  forratt: { sv: "Förrätter", en: "Starters" },
  bowl: { sv: "Brilliant Bengali Bowls", en: "Brilliant Bengali Bowls" },
  tandoori: { sv: "Från Grillen / Tandoori", en: "From the Grill / Tandoori" },
  traditionell: { sv: "Klassiska Grytor", en: "Classic Curries" },
  bengali: { sv: "Kökets Rekommendationer", en: "Chef's Recommendations" },
  vegetarisk: { sv: "Vegetariska Rätter", en: "Vegetarian Dishes" },
  sides: { sv: "Naan & Sides", en: "Naan & Sides" },
  dessert: { sv: "Dessert", en: "Dessert" },
};

const DRINK_CATEGORIES: Record<string, { sv: string; en: string }> = {
  fatol: { sv: "Fatöl", en: "Draft Beer" },
  flaskol: { sv: "Flasköl", en: "Bottled Beer" },
  vin: { sv: "Vin", en: "Wine" },
  cocktails: { sv: "Cocktails", en: "Cocktails" },
  rom: { sv: "Rom", en: "Rum" },
  whisky: { sv: "Whisky", en: "Whisky" },
  alkoholfritt: { sv: "Alkoholfritt", en: "Non-Alcoholic" },
  varmt: { sv: "Varma drycker", en: "Hot Drinks" },
};

const STORY_CATEGORIES: Record<string, { sv: string; en: string }> = {
  sport: { sv: "Sport & Fanklubbar", en: "Sport & Fan Clubs" },
  sponsorship: { sv: "Sponsorskap", en: "Sponsorships" },
  history: { sv: "Vår historia", en: "Our Story" },
  other: { sv: "Annat", en: "Other" },
};

export function getStoryCategoryLabel(category: string, locale: Locale): string {
  const entry = STORY_CATEGORIES[category];
  if (!entry) return category;
  return entry[locale] || entry.sv;
}

// =====================================================================
// MENU SECTIONS — localized at the boundary
// =====================================================================

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  vegetarian?: boolean;
};

export type MenuSection = {
  category: string;
  items: MenuItem[];
};

type RawMenuEntry = {
  name: string;
  nameEn?: string;
  description: LocalizedString;
  price: string;
  category: string;
  vegetarian?: boolean;
  sortOrder?: number;
};

function groupByCategory(
  items: { slug: string; entry: RawMenuEntry }[],
  labels: Record<string, { sv: string; en: string }>,
  locale: Locale,
): MenuSection[] {
  const grouped: Record<string, MenuItem[]> = {};
  for (const item of items) {
    const cat = item.entry.category;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push({
      name: localizePaired(item.entry.name, item.entry.nameEn, locale),
      description: localize(item.entry.description, locale),
      price: item.entry.price,
      vegetarian: item.entry.vegetarian,
    });
  }
  // Iterate in label order so sections render canonically.
  const sections: MenuSection[] = [];
  for (const key of Object.keys(labels)) {
    if (grouped[key]) {
      const label = labels[key];
      sections.push({ category: label[locale] || label.sv, items: grouped[key] });
    }
  }
  for (const key of Object.keys(grouped)) {
    if (!labels[key]) sections.push({ category: key, items: grouped[key] });
  }
  return sections;
}

export async function getVenueMenuSections(venue: Venue, locale: Locale): Promise<MenuSection[]> {
  if (venue === "lagerbaren") {
    const items = await reader.collections.menuLagerbaren.all();
    const sorted = [...items].sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0));
    return groupByCategory(sorted as never, LAGERBAREN_CATEGORIES, locale);
  }
  const items = await reader.collections.menuMasalaArt.all();
  const sorted = [...items].sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0));
  return groupByCategory(sorted as never, MASALA_CATEGORIES, locale);
}

export async function getVenueDrinkSections(locale: Locale): Promise<MenuSection[]> {
  const items = await reader.collections.menuDrinks.all();
  const sorted = [...items].sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0));
  return groupByCategory(sorted as never, DRINK_CATEGORIES, locale);
}

// =====================================================================
// LUNCH
// =====================================================================

export type Weekday = "mon" | "tue" | "wed" | "thu" | "fri";
const WEEKDAYS: readonly Weekday[] = ["mon", "tue", "wed", "thu", "fri"] as const;

export function getTodayWeekday(): Weekday | null {
  const day = new Date().getDay();
  if (day < 1 || day > 5) return null;
  return WEEKDAYS[day - 1];
}

export type LunchItem = {
  slug: string;
  name: string;
  description: string;
  price: string;
  weekday: readonly string[];
  sortOrder: number;
};

function localizeLunchItem(
  i: { slug: string; entry: { name: string; nameEn?: string; description: LocalizedString; price: string; weekday?: readonly string[]; sortOrder?: number } },
  locale: Locale,
): LunchItem {
  return {
    slug: i.slug,
    name: localizePaired(i.entry.name, i.entry.nameEn, locale),
    description: localize(i.entry.description, locale),
    price: i.entry.price,
    weekday: i.entry.weekday ?? [],
    sortOrder: i.entry.sortOrder ?? 0,
  };
}

export async function getAllVenueLunchItems(venue: Venue, locale: Locale): Promise<LunchItem[]> {
  const items = await reader.collections.menuLunch.all();
  return items
    .filter((i) => i.entry.brand === venue)
    .sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0))
    .map((i) => localizeLunchItem(i as never, locale));
}

export async function getLunchInfo(locale: Locale) {
  const data = await reader.singletons.lunchInfo.read();
  if (!data) return null;
  return {
    priceWeekly: localize(data.priceWeekly as never, locale),
    includesText: localize(data.includesText as never, locale),
    favoritbiffenTitle: localize(data.favoritbiffenTitle as never, locale),
    favoritbiffenDescription: localize(data.favoritbiffenDescription as never, locale),
    favoritbiffenPrice: localize(data.favoritbiffenPrice as never, locale),
    hoursLagerbaren: localize(data.hoursLagerbaren as never, locale),
    hoursMasalaArt: localize(data.hoursMasalaArt as never, locale),
    closedMessage: localize(data.closedMessage as never, locale),
  };
}

// =====================================================================
// EVENTS
// =====================================================================

export type EventEntry = {
  slug: string;
  title: string;
  description: string;
  body: string;
  heroImage: string | null;
  date: string | null;
  endDate: string | null;
  time: string;
  location: string;
  bookingUrl: string;
  brand: string;
  category: string;
  recurring: boolean;
  recurringDay: string;
  featured: boolean;
};

function localizeEvent(
  slug: string,
  entry: {
    title: string;
    titleEn?: string;
    description: LocalizedString;
    body: LocalizedString;
    heroImage?: string | null;
    date?: string | null;
    endDate?: string | null;
    time?: string;
    location: LocalizedString;
    bookingUrl?: string;
    brand: string;
    category: string;
    recurring?: boolean;
    recurringDay?: string;
    featured?: boolean;
  },
  locale: Locale,
): EventEntry {
  return {
    slug,
    title: localizePaired(entry.title, entry.titleEn, locale),
    description: localize(entry.description, locale),
    body: localize(entry.body, locale),
    heroImage: entry.heroImage ?? null,
    date: entry.date ?? null,
    endDate: entry.endDate ?? null,
    time: entry.time ?? "",
    location: localize(entry.location, locale),
    bookingUrl: entry.bookingUrl ?? "",
    brand: entry.brand,
    category: entry.category,
    recurring: entry.recurring ?? false,
    recurringDay: entry.recurringDay ?? "",
    featured: entry.featured ?? false,
  };
}

export async function getVenueEvents(venue: Venue, locale: Locale): Promise<EventEntry[]> {
  const events = await reader.collections.events.all();
  return events
    .filter((e) => e.entry.brand === venue || e.entry.brand === "both")
    .map((e) => localizeEvent(e.slug, e.entry as never, locale));
}

export async function getEvent(slug: string, locale: Locale): Promise<EventEntry | null> {
  const raw = await reader.collections.events.read(slug);
  if (!raw) return null;
  return localizeEvent(slug, raw as never, locale);
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

function isUpcoming(event: EventEntry): boolean {
  if (event.recurring) return true;
  const compareDate = event.endDate || event.date;
  if (!compareDate) return true;
  return compareDate >= getToday();
}

export function splitEvents(events: EventEntry[]) {
  const upcoming: EventEntry[] = [];
  const past: EventEntry[] = [];

  for (const event of events) {
    if (isUpcoming(event)) {
      upcoming.push(event);
    } else {
      past.push(event);
    }
  }

  upcoming.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    const dateA = a.recurring && !a.date ? "9999" : (a.date ?? "9999");
    const dateB = b.recurring && !b.date ? "9999" : (b.date ?? "9999");
    return dateA.localeCompare(dateB);
  });

  past.sort((a, b) => {
    const dateA = a.date ?? "";
    const dateB = b.date ?? "";
    return dateB.localeCompare(dateA);
  });

  return { upcoming, past };
}

// =====================================================================
// STORIES
// =====================================================================

export type StoryEntry = {
  slug: string;
  title: string;
  subtitle: string;
  body: string;
  heroImage: string | null;
  brand: string;
  category: string;
  featured: boolean;
  sortOrder: number;
};

function localizeStory(
  slug: string,
  entry: {
    title: string;
    titleEn?: string;
    subtitle: LocalizedString;
    body: LocalizedString;
    heroImage?: string | null;
    brand: string;
    category: string;
    featured?: boolean;
    sortOrder?: number;
  },
  locale: Locale,
): StoryEntry {
  return {
    slug,
    title: localizePaired(entry.title, entry.titleEn, locale),
    subtitle: localize(entry.subtitle, locale),
    body: localize(entry.body, locale),
    heroImage: entry.heroImage ?? null,
    brand: entry.brand,
    category: entry.category,
    featured: entry.featured ?? false,
    sortOrder: entry.sortOrder ?? 0,
  };
}

export async function getVenueStories(venue: Venue, locale: Locale): Promise<StoryEntry[]> {
  const all = await reader.collections.stories.all();
  return all
    .filter((s) => s.entry.brand === venue || s.entry.brand === "both")
    .sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0))
    .map((s) => localizeStory(s.slug, s.entry as never, locale));
}

export async function getFeaturedStories(venue: Venue, locale: Locale): Promise<StoryEntry[]> {
  const stories = await getVenueStories(venue, locale);
  return stories.filter((s) => s.featured);
}

export async function getStory(slug: string, locale: Locale): Promise<StoryEntry | null> {
  const raw = await reader.collections.stories.read(slug);
  if (!raw) return null;
  return localizeStory(slug, raw as never, locale);
}

// =====================================================================
// SINGLETONS — about, festvaning, site-info
// =====================================================================

export async function getVenueAbout(venue: Venue, locale: Locale) {
  const data = venue === "lagerbaren"
    ? await reader.singletons.aboutLagerbaren.read()
    : await reader.singletons.aboutMasalaArt.read();
  if (!data) return null;
  const d = data as Record<string, unknown>;
  return {
    // Branding & hero
    logo: (d.logo as string | null) ?? null,
    heroTitle: localize(d.heroTitle as LocalizedString, locale),
    heroSubtitle: localize(d.heroSubtitle as LocalizedString, locale),
    heroImage: (d.heroImage as string | null) ?? null,
    heroImagePosition: (d.heroImagePosition as string) || "center",
    description: localize(d.description as LocalizedString, locale),
    sportText: localize((d.sportText as LocalizedString) ?? null, locale),
    quizText: localize((d.quizText as LocalizedString) ?? null, locale),
    // Contact & location
    addressLine1: localize((d.addressLine1 as LocalizedString) ?? null, locale),
    addressLine2: localize((d.addressLine2 as LocalizedString) ?? null, locale),
    phone: (d.phone as string) ?? "",
    email: (d.email as string) ?? "",
    openingHoursWeekdays: localize((d.openingHoursWeekdays as LocalizedString) ?? null, locale),
    openingHoursWeekend: localize((d.openingHoursWeekend as LocalizedString) ?? null, locale),
    lunchHours: localize((d.lunchHours as LocalizedString) ?? null, locale),
    mapEmbed: (d.mapEmbed as string) ?? "",
    instagram: (d.instagram as string) ?? "",
    facebook: (d.facebook as string) ?? "",
  };
}

export async function getFestvaningInfo(locale: Locale) {
  const data = await reader.singletons.festvaning.read();
  if (!data) return null;
  return {
    title: localize(data.title as never, locale),
    description: localize(data.description as never, locale),
    capacity: localize(data.capacity as never, locale),
    includesText: localize(data.includesText as never, locale),
    priceInfo: localize(data.priceInfo as never, locale),
    fullBarTitle: localize(data.fullBarTitle as never, locale),
    fullBarDescription: localize(data.fullBarDescription as never, locale),
    contactInfo: localize(data.contactInfo as never, locale),
  };
}

// =====================================================================
// AMBIENCE IMAGES (no localization needed)
// =====================================================================

export async function getAmbienceImages(venue: Venue): Promise<string[]> {
  const items = await reader.collections.ambienceImages.all();
  return items
    .filter((i) => i.entry.venue === venue)
    .sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0))
    .map((i) => i.entry.image)
    .filter((src): src is string => typeof src === "string" && src.length > 0);
}
