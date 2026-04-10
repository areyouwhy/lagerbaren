import { reader } from "./reader";
import type { Venue } from "./i18n";

export async function getVenueAbout(venue: Venue) {
  if (venue === "lagerbaren") {
    return reader.singletons.aboutLagerbaren.read();
  }
  return reader.singletons.aboutMasalaArt.read();
}

export async function getVenueMenuSections(venue: Venue) {
  if (venue === "lagerbaren") {
    const items = await reader.collections.menuLagerbaren.all();
    const sorted = items.sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0));
    return groupByCategory(sorted, LAGERBAREN_CATEGORIES);
  }
  const items = await reader.collections.menuMasalaArt.all();
  const sorted = items.sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0));
  return groupByCategory(sorted, MASALA_CATEGORIES);
}

export async function getVenueDrinkSections() {
  const items = await reader.collections.menuDrinks.all();
  const sorted = items.sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0));
  return groupByCategory(sorted, DRINK_CATEGORIES);
}

export async function getVenueLunchItems(venue: Venue) {
  const items = await reader.collections.menuLunch.all();
  return items
    .filter((i) => i.entry.brand === venue)
    .sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0));
}

export type EventEntry = Awaited<ReturnType<typeof reader.collections.events.all>>[number];

export async function getVenueEvents(venue: Venue) {
  const events = await reader.collections.events.all();
  return events.filter(
    (e) => e.entry.brand === venue || e.entry.brand === "both",
  );
}

function getToday() {
  return new Date().toISOString().split("T")[0];
}

function isUpcoming(event: EventEntry): boolean {
  if (event.entry.recurring) return true;
  const compareDate = event.entry.endDate || event.entry.date;
  if (!compareDate) return true; // no date = show it
  return compareDate >= getToday();
}

function isPast(event: EventEntry): boolean {
  return !isUpcoming(event);
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

  // Sort upcoming: featured first, then by date ascending
  upcoming.sort((a, b) => {
    if (a.entry.featured && !b.entry.featured) return -1;
    if (!a.entry.featured && b.entry.featured) return 1;
    // Recurring events without a real upcoming date go last among upcoming
    const dateA = a.entry.recurring && !a.entry.date ? "9999" : (a.entry.date ?? "9999");
    const dateB = b.entry.recurring && !b.entry.date ? "9999" : (b.entry.date ?? "9999");
    return dateA.localeCompare(dateB);
  });

  // Sort past: most recent first
  past.sort((a, b) => {
    const dateA = a.entry.date ?? "";
    const dateB = b.entry.date ?? "";
    return dateB.localeCompare(dateA);
  });

  return { upcoming, past };
}

export async function getSiteInfo() {
  return reader.singletons.siteInfo.read();
}

export async function getFestvaningInfo() {
  return reader.singletons.festvaning.read();
}

// Category label maps
const LAGERBAREN_CATEGORIES: Record<string, string> = {
  forratt: "Förrätt",
  varmratt: "Varmrätt",
  burgare: "Burgare",
  sallad: "Sallad",
  tillbehor: "Tillbehör",
  dessert: "Dessert",
};

const MASALA_CATEGORIES: Record<string, string> = {
  bowl: "Bowls",
  traditionell: "Traditionella rätter",
  bengali: "Bengali Special",
  tandoori: "Tandoori",
  sides: "Sides & Naan",
  dessert: "Dessert",
};

const DRINK_CATEGORIES: Record<string, string> = {
  fatol: "Fatöl",
  flaskol: "Flasköl",
  vin: "Vin",
  cocktails: "Cocktails",
  rom: "Rom",
  whisky: "Whisky",
  alkoholfritt: "Alkoholfritt",
  varmt: "Varma drycker",
};

export type MenuSection = {
  category: string;
  items: { name: string; description: string; price: string }[];
};

function groupByCategory(
  items: { slug: string; entry: { name: string; description: string; price: string; category: string } }[],
  labels: Record<string, string>,
): MenuSection[] {
  const grouped: Record<string, MenuSection["items"]> = {};
  for (const item of items) {
    const cat = item.entry.category;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push({
      name: item.entry.name,
      description: item.entry.description,
      price: item.entry.price,
    });
  }
  return Object.entries(grouped).map(([key, items]) => ({
    category: labels[key] ?? key,
    items,
  }));
}
