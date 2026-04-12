export type Locale = "sv" | "en";
export type Venue = "lagerbaren" | "masala-art";

/**
 * A localized string is either an object with one entry per supported locale,
 * or undefined/null. Empty English values fall back to Swedish so the editor
 * can leave English blank for low-priority content.
 */
export type LocalizedString =
  | { sv: string; en?: string }
  | { sv?: string; en: string }
  | string
  | null
  | undefined;

export function localize(field: LocalizedString, locale: Locale): string {
  if (field == null) return "";
  if (typeof field === "string") return field;
  if (locale === "en") return (field.en || field.sv) ?? "";
  return (field.sv || field.en) ?? "";
}

/**
 * For slug-source fields (which must remain plain strings because Keystatic's
 * fields.slug() can't accept an object). Use this when you have a Swedish
 * canonical value plus an optional English override stored in a sibling field.
 */
export function localizePaired(
  svValue: string | null | undefined,
  enValue: string | null | undefined,
  locale: Locale,
): string {
  if (locale === "en") return (enValue || svValue) ?? "";
  return (svValue || enValue) ?? "";
}

const dict = {
  sv: {
    nav: {
      home: "Hem",
      menu: "Meny",
      lunch: "Lunch",
      gallery: "Galleri",
      stories: "Berättelser",
      events: "Event",
      book: "Boka bord",
      findUs: "Hitta oss",
    },
    landing: {
      title: "Välkommen",
      subtitle: "Två upplevelser — under samma tak",
      lagerbarenDesc: "Sportbar & restaurang. Stort utbud av fatöl, rom & whisky. Alla stora sportevenemang på storbilds-TV.",
      masalaArtDesc: "Autentisk indisk & bengalisk mat. Bowls, traditionella rätter och tandoori — lagat från grunden.",
      enter: "Besök",
    },
    home: {
      upcomingEvents: "Kommande event",
      moreEvents: "Fler event",
      nextEvent: "Nästa event",
      sport: "Sport",
      quiz: "Pubquiz",
      readMore: "Läs mer",
      viewMenu: "Se menyn",
      viewDrinks: "Dryckesmeny",
      viewEvents: "Alla event",
      bookVenue: "Boka lokal",
    },
    menu: {
      title: "Meny",
      food: "Mat",
      drinks: "Dryck",
      lunch: "Lunch",
      lunchHours: "Mån–Fre 11:00–14:00",
      emptyState: "Menyn uppdateras snart. Kom tillbaka!",
    },
    lunch: {
      title: "Lunch",
      todayHeading: "Dagens lunch",
      weekdayLong: {
        mon: "Måndag",
        tue: "Tisdag",
        wed: "Onsdag",
        thu: "Torsdag",
        fri: "Fredag",
      },
      weekdayShort: {
        mon: "Mån",
        tue: "Tis",
        wed: "Ons",
        thu: "Tor",
        fri: "Fre",
      },
      weekHeading: "Hela veckan",
      noItemsToday: "Inga lunchrätter inlagda för idag.",
    },
    stories: {
      title: "Berättelser",
      backToList: "Tillbaka till alla berättelser",
      emptyState: "Inga berättelser ännu.",
    },
    gallery: {
      title: "Galleri",
      clickToZoom: "Klicka på en bild för att se den i större format. Använd piltangenterna för att bläddra.",
      emptyState: "Galleriet uppdateras snart.",
    },
    events: {
      title: "Event",
      upcoming: "Kommande event",
      partyVenue: "Festväningen",
      fullBarBooking: "Boka hela baren",
      emptyState: "Inga kommande event just nu.",
      pastEvents: "Tidigare event",
      recurring: "Varje",
      featured: "Utvalt",
      interested: "Intresserad?",
      sendInquiry: "Skicka bokningsförfrågan",
      backToList: "Tillbaka till alla event",
      bookHere: "Boka här",
      whenLabel: "När",
      whereLabel: "Plats",
      everyWeek: "Varje vecka",
    },
    book: {
      title: "Boka bord",
      subtitle: "Reservera bord eller festlokal",
      description: "Skicka ett mail med datum, tid och antal gäster.",
      orCall: "Eller ring oss",
      partyVenue: "Festväningen",
      partyVenueDesc: "Egen lokal för upp till 60 personer. Perfekt för fester och firmaevent.",
      fullBar: "Helbokning av baren",
      fullBarDesc: "Boka hela Lagerbaren för ert event. Kontakta oss för offert.",
    },
    findUs: {
      title: "Hitta till oss",
      address: "Adress",
      hours: "Öppettider",
      weekdays: "Vardagar",
      weekend: "Helg",
      lunch: "Lunch",
      phone: "Telefon",
      booking: "Bokning",
      mapPlaceholder: "Karta visas här.",
    },
    footer: {
      contact: "Kontakt",
      booking: "Bokning",
      allRights: "Alla rättigheter förbehållna.",
    },
    common: {
      switchLang: "English",
      backToStart: "Tillbaka till start",
    },
  },
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      lunch: "Lunch",
      gallery: "Gallery",
      stories: "Stories",
      events: "Events",
      book: "Book a table",
      findUs: "Find us",
    },
    landing: {
      title: "Welcome",
      subtitle: "Two experiences — under one roof",
      lagerbarenDesc: "Sports bar & restaurant. Wide selection of draft beers, rum & whisky. All major sporting events on big screens.",
      masalaArtDesc: "Authentic Indian & Bengali cuisine. Bowls, traditional dishes and tandoori — made from scratch.",
      enter: "Visit",
    },
    home: {
      upcomingEvents: "Upcoming events",
      moreEvents: "More events",
      nextEvent: "Next event",
      sport: "Sports",
      quiz: "Pub quiz",
      readMore: "Read more",
      viewMenu: "View menu",
      viewDrinks: "Drinks menu",
      viewEvents: "All events",
      bookVenue: "Book venue",
    },
    menu: {
      title: "Menu",
      food: "Food",
      drinks: "Drinks",
      lunch: "Lunch",
      lunchHours: "Mon–Fri 11:00–14:00",
      emptyState: "Menu coming soon!",
    },
    lunch: {
      title: "Lunch",
      todayHeading: "Today's lunch",
      weekdayLong: {
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
      },
      weekdayShort: {
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
      },
      weekHeading: "All week",
      noItemsToday: "No lunch dishes scheduled for today.",
    },
    stories: {
      title: "Stories",
      backToList: "Back to all stories",
      emptyState: "No stories yet.",
    },
    gallery: {
      title: "Gallery",
      clickToZoom: "Click any image to zoom. Use arrow keys to navigate.",
      emptyState: "Gallery coming soon.",
    },
    events: {
      title: "Events",
      upcoming: "Upcoming events",
      partyVenue: "Party venue",
      fullBarBooking: "Book the full bar",
      emptyState: "No upcoming events right now.",
      pastEvents: "Past events",
      recurring: "Every",
      featured: "Featured",
      interested: "Interested?",
      sendInquiry: "Send booking inquiry",
      backToList: "Back to all events",
      bookHere: "Book here",
      whenLabel: "When",
      whereLabel: "Where",
      everyWeek: "Every week",
    },
    book: {
      title: "Book a table",
      subtitle: "Reserve a table or event space",
      description: "Send us an email with your preferred date, time, and number of guests.",
      orCall: "Or call us",
      partyVenue: "Party venue",
      partyVenueDesc: "Private space for up to 60 guests. Perfect for parties and corporate events.",
      fullBar: "Full bar booking",
      fullBarDesc: "Book all of Lagerbaren for your event. Contact us for a quote.",
    },
    findUs: {
      title: "Find us",
      address: "Address",
      hours: "Opening hours",
      weekdays: "Weekdays",
      weekend: "Weekend",
      lunch: "Lunch",
      phone: "Phone",
      booking: "Booking",
      mapPlaceholder: "Map will be shown here.",
    },
    footer: {
      contact: "Contact",
      booking: "Booking",
      allRights: "All rights reserved.",
    },
    common: {
      switchLang: "Svenska",
      backToStart: "Back to start",
    },
  },
} as const;

export type Dict = (typeof dict)["sv"] | (typeof dict)["en"];

export function getDict(locale: Locale) {
  return dict[locale];
}

export function getVenueNav(locale: Locale, venue: Venue) {
  const t = getDict(locale);
  const prefix = locale === "sv" ? `/${venue}` : `/en/${venue}`;
  const paths =
    locale === "sv"
      ? { menu: "meny", lunch: "lunch", gallery: "galleri", stories: "berattelser", events: "event", book: "boka", findUs: "hitta-oss" }
      : { menu: "menu", lunch: "lunch", gallery: "gallery", stories: "stories", events: "events", book: "book", findUs: "find-us" };

  // Home is reachable via the logo/brand link in the header, so it's not
  // duplicated in the nav itself.
  return [
    { label: t.nav.menu, href: `${prefix}/${paths.menu}` },
    { label: t.nav.lunch, href: `${prefix}/${paths.lunch}` },
    { label: t.nav.gallery, href: `${prefix}/${paths.gallery}` },
    { label: t.nav.stories, href: `${prefix}/${paths.stories}` },
    { label: t.nav.events, href: `${prefix}/${paths.events}` },
    { label: t.nav.book, href: `${prefix}/${paths.book}` },
    { label: t.nav.findUs, href: `${prefix}/${paths.findUs}` },
  ];
}

// Subpage slug mappings — kept exhaustive so language switching covers
// every route in the app. Detail-page slugs (e.g. event/<slug>, berattelser/<slug>)
// are language-agnostic and pass through unchanged.
const SV_TO_EN: Record<string, string> = {
  meny: "menu",
  lunch: "lunch",
  galleri: "gallery",
  berattelser: "stories",
  event: "events",
  boka: "book",
  "hitta-oss": "find-us",
};
const EN_TO_SV: Record<string, string> = {
  menu: "meny",
  lunch: "lunch",
  gallery: "galleri",
  stories: "berattelser",
  events: "event",
  book: "boka",
  "find-us": "hitta-oss",
};

/**
 * Build the equivalent URL in the other language for the current pathname.
 * Preserves detail-page slugs (e.g. /event/pep-s-musik-quiz) so users land on
 * the same content in the new language, not the venue homepage.
 *
 * @param locale  current locale of the user (the one we're switching FROM)
 * @param venue   current venue
 * @param pathname full Next.js pathname (from usePathname()), e.g. "/lagerbaren/event/pep-s-musik-quiz"
 */
export function getLangSwitchHref(
  locale: Locale,
  venue: Venue,
  pathname: string,
) {
  const segments = pathname.split("/").filter(Boolean);

  if (locale === "sv") {
    // Switching SV → EN. Path shape: [venue, subpage?, slug?]
    // (the venue layout strips off any leading slash)
    const subpage = segments[1];
    const slug = segments[2];
    const enSubpage = subpage ? SV_TO_EN[subpage] : undefined;
    if (!enSubpage) return `/en/${venue}`;
    return slug
      ? `/en/${venue}/${enSubpage}/${slug}`
      : `/en/${venue}/${enSubpage}`;
  }

  // Switching EN → SV. Path shape: ["en", venue, subpage?, slug?]
  const subpage = segments[2];
  const slug = segments[3];
  const svSubpage = subpage ? EN_TO_SV[subpage] : undefined;
  if (!svSubpage) return `/${venue}`;
  return slug
    ? `/${venue}/${svSubpage}/${slug}`
    : `/${venue}/${svSubpage}`;
}

export function isValidVenue(venue: string): venue is Venue {
  return venue === "lagerbaren" || venue === "masala-art";
}
