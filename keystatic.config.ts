import { config, fields, collection, singleton } from "@keystatic/core";

const useGithub = process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB === "1";

// Localized text field — produces { sv, en } object on disk and in the editor
// English is optional; pages fall back to Swedish via the localize() helper.
const localizedText = (label: string, opts?: { multiline?: boolean; description?: string }) =>
  fields.object({
    sv: fields.text({
      label: "Svenska",
      multiline: opts?.multiline ?? false,
    }),
    en: fields.text({
      label: "English (valfritt — faller tillbaka till svenska om tomt)",
      multiline: opts?.multiline ?? false,
    }),
  }, {
    label,
    ...(opts?.description ? { description: opts.description } : {}),
  });

export default config({
  storage: useGithub
    ? {
        kind: "github",
        repo: "areyouwhy/lagerbaren",
      }
    : { kind: "local" },
  collections: {
    menuLagerbaren: collection({
      label: "Meny Lagerbaren",
      slugField: "name",
      path: "src/content/menu-lagerbaren/*/",
      format: "json",
      schema: {
        name: fields.slug({ name: { label: "Namn (svenska, används som URL)" } }),
        nameEn: fields.text({
          label: "Name (English)",
          description: "Valfritt — faller tillbaka till svenska om tomt.",
        }),
        description: localizedText("Beskrivning", { multiline: true }),
        price: fields.text({ label: "Pris" }),
        category: fields.select({
          label: "Kategori",
          options: [
            { label: "Förrätt", value: "forratt" },
            { label: "Pizza", value: "pizza" },
            { label: "Pasta", value: "pasta" },
            { label: "Kött", value: "kott" },
            { label: "Plankstek", value: "plankstek" },
            { label: "Fisk", value: "fisk" },
            { label: "Burgare", value: "burgare" },
            { label: "Sallad", value: "sallad" },
            { label: "Varmrätt", value: "varmratt" },
            { label: "Tillbehör", value: "tillbehor" },
            { label: "Dessert", value: "dessert" },
          ],
          defaultValue: "varmratt",
        }),
        vegetarian: fields.checkbox({ label: "Vegetarisk", defaultValue: false }),
        sortOrder: fields.integer({ label: "Sorteringsordning", defaultValue: 0 }),
      },
    }),
    menuMasalaArt: collection({
      label: "Meny Masala Art",
      slugField: "name",
      path: "src/content/menu-masala-art/*/",
      format: "json",
      schema: {
        name: fields.slug({ name: { label: "Namn (svenska, används som URL)" } }),
        nameEn: fields.text({
          label: "Name (English)",
          description: "Valfritt — faller tillbaka till svenska om tomt.",
        }),
        description: localizedText("Beskrivning", { multiline: true }),
        price: fields.text({ label: "Pris" }),
        category: fields.select({
          label: "Kategori",
          options: [
            { label: "Förrätt", value: "forratt" },
            { label: "Bowl", value: "bowl" },
            { label: "Tandoori", value: "tandoori" },
            { label: "Klassisk gryta", value: "traditionell" },
            { label: "Bengali Special", value: "bengali" },
            { label: "Vegetarisk", value: "vegetarisk" },
            { label: "Sides & Naan", value: "sides" },
            { label: "Dessert", value: "dessert" },
          ],
          defaultValue: "bowl",
        }),
        vegetarian: fields.checkbox({ label: "Vegetarisk", defaultValue: false }),
        spicy: fields.select({
          label: "Styrka",
          options: [
            { label: "Mild", value: "mild" },
            { label: "Medium", value: "medium" },
            { label: "Stark", value: "stark" },
          ],
          defaultValue: "medium",
        }),
        sortOrder: fields.integer({ label: "Sorteringsordning", defaultValue: 0 }),
      },
    }),
    menuLunch: collection({
      label: "Lunchmeny",
      slugField: "name",
      path: "src/content/menu-lunch/*/",
      format: "json",
      schema: {
        name: fields.slug({ name: { label: "Namn (svenska, används som URL)" } }),
        nameEn: fields.text({
          label: "Name (English)",
          description: "Valfritt — faller tillbaka till svenska om tomt.",
        }),
        description: localizedText("Beskrivning", { multiline: true }),
        price: fields.text({ label: "Pris" }),
        brand: fields.select({
          label: "Varumärke",
          options: [
            { label: "Lagerbaren", value: "lagerbaren" },
            { label: "Masala Art", value: "masala-art" },
          ],
          defaultValue: "lagerbaren",
        }),
        weekday: fields.multiselect({
          label: "Veckodagar",
          options: [
            { label: "Måndag", value: "mon" },
            { label: "Tisdag", value: "tue" },
            { label: "Onsdag", value: "wed" },
            { label: "Torsdag", value: "thu" },
            { label: "Fredag", value: "fri" },
          ],
        }),
        sortOrder: fields.integer({ label: "Sorteringsordning", defaultValue: 0 }),
      },
    }),
    menuDrinks: collection({
      label: "Dryckesmeny",
      slugField: "name",
      path: "src/content/menu-drinks/*/",
      format: "json",
      schema: {
        name: fields.slug({ name: { label: "Namn (svenska, används som URL)" } }),
        nameEn: fields.text({
          label: "Name (English)",
          description: "Valfritt — faller tillbaka till svenska om tomt.",
        }),
        description: localizedText("Beskrivning", { multiline: true }),
        price: fields.text({ label: "Pris" }),
        category: fields.select({
          label: "Kategori",
          options: [
            { label: "Fatöl", value: "fatol" },
            { label: "Flasköl", value: "flaskol" },
            { label: "Vin", value: "vin" },
            { label: "Cocktails", value: "cocktails" },
            { label: "Rom", value: "rom" },
            { label: "Whisky", value: "whisky" },
            { label: "Alkoholfritt", value: "alkoholfritt" },
            { label: "Varmtdrycker", value: "varmt" },
          ],
          defaultValue: "fatol",
        }),
        sortOrder: fields.integer({ label: "Sorteringsordning", defaultValue: 0 }),
      },
    }),
    stories: collection({
      label: "Berättelser",
      slugField: "title",
      path: "src/content/stories/*/",
      format: "json",
      schema: {
        title: fields.slug({ name: { label: "Titel (svenska, används som URL)" } }),
        titleEn: fields.text({
          label: "Title (English)",
          description: "Valfritt — faller tillbaka till svenska om tomt.",
        }),
        subtitle: localizedText("Underrubrik"),
        heroImage: fields.image({
          label: "Hero-bild (valfri)",
          description: "Bild som visas i toppen av berättelsen.",
          directory: "public/images/cms/stories",
          publicPath: "/images/cms/stories/",
        }),
        body: localizedText("Brödtext", { multiline: true }),
        brand: fields.select({
          label: "Plats",
          options: [
            { label: "Lagerbaren", value: "lagerbaren" },
            { label: "Masala Art", value: "masala-art" },
            { label: "Båda", value: "both" },
          ],
          defaultValue: "lagerbaren",
        }),
        category: fields.select({
          label: "Typ",
          options: [
            { label: "Sport / Fanklubb", value: "sport" },
            { label: "Sponsorskap", value: "sponsorship" },
            { label: "Vår historia", value: "history" },
            { label: "Annat", value: "other" },
          ],
          defaultValue: "other",
        }),
        featured: fields.checkbox({
          label: "Visa på startsidan (utvald)",
          defaultValue: false,
        }),
        sortOrder: fields.integer({ label: "Sorteringsordning", defaultValue: 0 }),
      },
    }),
    ambienceImages: collection({
      label: "Bildremsa",
      slugField: "title",
      path: "src/content/ambience-images/*/",
      format: "json",
      schema: {
        title: fields.slug({
          name: { label: "Titel (intern referens — visas inte på sidan)" },
        }),
        image: fields.image({
          label: "Bild",
          description: "Foto för galleriet och eventuellt startsidan.",
          directory: "public/images/cms/ambience",
          publicPath: "/images/cms/ambience/",
          validation: { isRequired: true },
        }),
        venue: fields.select({
          label: "Plats",
          options: [
            { label: "Lagerbaren", value: "lagerbaren" },
            { label: "Masala Art", value: "masala-art" },
          ],
          defaultValue: "lagerbaren",
        }),
        featuredOnHome: fields.checkbox({
          label: "Visa på startsidan",
          description: "Markera för att visa denna bild i den lilla bildremsan på startsidan. Max 6 bilder per plats visas — välj de bästa. Galleriet visar alltid alla bilder oavsett detta val.",
          defaultValue: false,
        }),
        sortOrder: fields.integer({ label: "Sorteringsordning (lägre först)", defaultValue: 0 }),
      },
    }),
    events: collection({
      label: "Event",
      slugField: "title",
      path: "src/content/events/*/",
      format: "json",
      schema: {
        title: fields.slug({ name: { label: "Titel (svenska, används som URL)" } }),
        titleEn: fields.text({
          label: "Title (English)",
          description: "Valfritt — faller tillbaka till svenska om tomt.",
        }),
        description: localizedText("Kort beskrivning (visas i listan)", { multiline: true }),
        body: localizedText("Lång text (visas på eventsidan)", {
          multiline: true,
          description: "Skriv flera stycken med blanka rader emellan.",
        }),
        heroImage: fields.image({
          label: "Hero-bild (valfri)",
          description: "Stor bild i toppen av eventsidan.",
          directory: "public/images/cms/events",
          publicPath: "/images/cms/events/",
        }),
        date: fields.date({ label: "Datum" }),
        endDate: fields.date({ label: "Slutdatum (valfritt, för flerdagars-event)" }),
        time: fields.text({ label: "Tid" }),
        location: localizedText("Plats (om annan än vårt vanliga ställe)", {
          description: "Lämna tomt för att använda Lagerbarens vanliga adress.",
        }),
        bookingUrl: fields.text({
          label: "Bokningslänk (valfri)",
          description: "URL till biljettsida eller bokningsformulär.",
        }),
        brand: fields.select({
          label: "Varumärke",
          options: [
            { label: "Lagerbaren", value: "lagerbaren" },
            { label: "Masala Art", value: "masala-art" },
            { label: "Båda", value: "both" },
          ],
          defaultValue: "lagerbaren",
        }),
        category: fields.select({
          label: "Typ",
          options: [
            { label: "Sport", value: "sport" },
            { label: "Quiz", value: "quiz" },
            { label: "Musik", value: "musik" },
            { label: "Övrigt", value: "ovrigt" },
          ],
          defaultValue: "sport",
        }),
        recurring: fields.checkbox({ label: "Återkommande (visas alltid som kommande)", defaultValue: false }),
        recurringDay: fields.select({
          label: "Återkommande dag (om återkommande)",
          options: [
            { label: "—", value: "" },
            { label: "Måndag", value: "Måndag" },
            { label: "Tisdag", value: "Tisdag" },
            { label: "Onsdag", value: "Onsdag" },
            { label: "Torsdag", value: "Torsdag" },
            { label: "Fredag", value: "Fredag" },
            { label: "Lördag", value: "Lördag" },
            { label: "Söndag", value: "Söndag" },
          ],
          defaultValue: "",
        }),
        featured: fields.checkbox({ label: "Utvalt (visas överst)", defaultValue: false }),
      },
    }),
  },
  singletons: {
    lunchInfo: singleton({
      label: "Lunchinfo",
      path: "src/content/lunch-info/",
      format: "json",
      schema: {
        priceWeekly: localizedText("Pris veckans lunch"),
        includesText: localizedText("Vad ingår", { multiline: true }),
        favoritbiffenTitle: localizedText("Favoritbiffen — titel"),
        favoritbiffenDescription: localizedText("Favoritbiffen — beskrivning", { multiline: true }),
        favoritbiffenPrice: localizedText("Favoritbiffen — pris"),
        hoursLagerbaren: localizedText("Lunchtider Lagerbaren"),
        hoursMasalaArt: localizedText("Lunchtider Masala Art"),
        closedMessage: localizedText("Stängt-meddelande (helger)", { multiline: true }),
      },
    }),
    festvaning: singleton({
      label: "Festväningen",
      path: "src/content/festvaning/",
      format: "json",
      schema: {
        title: localizedText("Titel"),
        description: localizedText("Beskrivning", { multiline: true }),
        capacity: localizedText("Kapacitet"),
        includesText: localizedText("Vad ingår", { multiline: true }),
        priceInfo: localizedText("Prisinformation", { multiline: true }),
        fullBarTitle: localizedText("Helbokning av baren — titel"),
        fullBarDescription: localizedText("Helbokning av baren — beskrivning", { multiline: true }),
        contactInfo: localizedText("Kontaktinfo"),
      },
    }),
    aboutLagerbaren: singleton({
      label: "Om Lagerbaren",
      path: "src/content/about-lagerbaren/",
      format: "json",
      schema: {
        // — Branding & hero —
        logo: fields.image({
          label: "Logotyp",
          description: "Visas i headern och footern. Använd PNG eller SVG med transparent bakgrund.",
          directory: "public/images/cms/about-lagerbaren",
          publicPath: "/images/cms/about-lagerbaren/",
        }),
        heroTitle: localizedText("Hero-titel"),
        heroSubtitle: localizedText("Hero-undertitel"),
        heroImage: fields.image({
          label: "Hero-bild (stor bild i toppen av sidan)",
          description: "Den stora bilden besökare ser först. Använd ett bra foto av baren eller maten.",
          directory: "public/images/cms/about-lagerbaren",
          publicPath: "/images/cms/about-lagerbaren/",
        }),
        showLogoOnHero: fields.checkbox({
          label: "Visa logotyp på hero-bilden",
          description: "Markera för att visa logotypen ovanpå hero-bilden istället för text-titeln. Kräver att en logotyp är uppladdad.",
          defaultValue: false,
        }),
        heroImagePosition: fields.select({
          label: "Hero-bildens fokuspunkt",
          description: "Välj vilken del av bilden som ska visas när den beskärs. Använd om standardmitten klipper på fel ställe.",
          options: [
            { label: "Mitten (standard)", value: "center" },
            { label: "Topp", value: "top" },
            { label: "Botten", value: "bottom" },
            { label: "Vänster", value: "left" },
            { label: "Höger", value: "right" },
            { label: "Övre vänster", value: "top left" },
            { label: "Övre höger", value: "top right" },
            { label: "Nedre vänster", value: "bottom left" },
            { label: "Nedre höger", value: "bottom right" },
          ],
          defaultValue: "center",
        }),
        description: localizedText("Beskrivning", { multiline: true }),
        sportText: localizedText("Sport-text", { multiline: true }),
        quizText: localizedText("Quiz-text"),
        // — Contact & location —
        addressLine1: localizedText("Adress rad 1"),
        addressLine2: localizedText("Adress rad 2"),
        phone: fields.text({ label: "Telefon", defaultValue: "08-643 18 08" }),
        email: fields.text({ label: "Bokningsemail", defaultValue: "boka@lagerbaren.se" }),
        openingHoursWeekdays: localizedText("Öppettider vardagar"),
        openingHoursWeekend: localizedText("Öppettider helg"),
        lunchHours: localizedText("Lunchtider"),
        mapEmbed: fields.text({
          label: "Google Maps embed",
          description: "Klistra in <iframe>-koden från Google Maps Share → Embed a map.",
          multiline: true,
        }),
        instagram: fields.text({ label: "Instagram", description: "Användarnamn eller URL." }),
        facebook: fields.text({ label: "Facebook", description: "Användarnamn eller URL." }),
      },
    }),
    aboutMasalaArt: singleton({
      label: "Om Masala Art",
      path: "src/content/about-masala-art/",
      format: "json",
      schema: {
        // — Branding & hero —
        logo: fields.image({
          label: "Logotyp",
          description: "Visas i headern och footern. Använd PNG eller SVG med transparent bakgrund.",
          directory: "public/images/cms/about-masala-art",
          publicPath: "/images/cms/about-masala-art/",
        }),
        heroTitle: localizedText("Hero-titel"),
        heroSubtitle: localizedText("Hero-undertitel"),
        heroImage: fields.image({
          label: "Hero-bild (stor bild i toppen av sidan)",
          description: "Den stora bilden besökare ser först. Använd ett bra foto av en bowl eller curry.",
          directory: "public/images/cms/about-masala-art",
          publicPath: "/images/cms/about-masala-art/",
        }),
        showLogoOnHero: fields.checkbox({
          label: "Visa logotyp på hero-bilden",
          description: "Markera för att visa logotypen ovanpå hero-bilden istället för text-titeln. Kräver att en logotyp är uppladdad.",
          defaultValue: false,
        }),
        heroImagePosition: fields.select({
          label: "Hero-bildens fokuspunkt",
          description: "Välj vilken del av bilden som ska visas när den beskärs. Använd om standardmitten klipper på fel ställe.",
          options: [
            { label: "Mitten (standard)", value: "center" },
            { label: "Topp", value: "top" },
            { label: "Botten", value: "bottom" },
            { label: "Vänster", value: "left" },
            { label: "Höger", value: "right" },
            { label: "Övre vänster", value: "top left" },
            { label: "Övre höger", value: "top right" },
            { label: "Nedre vänster", value: "bottom left" },
            { label: "Nedre höger", value: "bottom right" },
          ],
          defaultValue: "center",
        }),
        description: localizedText("Beskrivning", { multiline: true }),
        // — Contact & location —
        addressLine1: localizedText("Adress rad 1"),
        addressLine2: localizedText("Adress rad 2"),
        phone: fields.text({ label: "Telefon", defaultValue: "08-36 88 48" }),
        email: fields.text({ label: "Bokningsemail", defaultValue: "boka@lagerbaren.se" }),
        openingHoursWeekdays: localizedText("Öppettider vardagar"),
        openingHoursWeekend: localizedText("Öppettider helg"),
        lunchHours: localizedText("Lunchtider"),
        mapEmbed: fields.text({
          label: "Google Maps embed",
          description: "Klistra in <iframe>-koden från Google Maps Share → Embed a map.",
          multiline: true,
        }),
        instagram: fields.text({ label: "Instagram", description: "Användarnamn eller URL." }),
        facebook: fields.text({ label: "Facebook", description: "Användarnamn eller URL." }),
      },
    }),
  },
});
