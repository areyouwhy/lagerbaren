import { config, fields, collection, singleton } from "@keystatic/core";

const useGithub = process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB === "1";

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
        name: fields.slug({ name: { label: "Namn" } }),
        description: fields.text({ label: "Beskrivning", multiline: true }),
        price: fields.text({ label: "Pris" }),
        category: fields.select({
          label: "Kategori",
          options: [
            { label: "Förrätt", value: "forratt" },
            { label: "Varmrätt", value: "varmratt" },
            { label: "Burgare", value: "burgare" },
            { label: "Sallad", value: "sallad" },
            { label: "Tillbehör", value: "tillbehor" },
            { label: "Dessert", value: "dessert" },
          ],
          defaultValue: "varmratt",
        }),
        sortOrder: fields.integer({ label: "Sorteringsordning", defaultValue: 0 }),
      },
    }),
    menuMasalaArt: collection({
      label: "Meny Masala Art",
      slugField: "name",
      path: "src/content/menu-masala-art/*/",
      format: "json",
      schema: {
        name: fields.slug({ name: { label: "Namn" } }),
        description: fields.text({ label: "Beskrivning", multiline: true }),
        price: fields.text({ label: "Pris" }),
        category: fields.select({
          label: "Kategori",
          options: [
            { label: "Bowl", value: "bowl" },
            { label: "Traditionell rätt", value: "traditionell" },
            { label: "Bengali Special", value: "bengali" },
            { label: "Tandoori", value: "tandoori" },
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
        name: fields.slug({ name: { label: "Namn" } }),
        description: fields.text({ label: "Beskrivning", multiline: true }),
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
        name: fields.slug({ name: { label: "Namn" } }),
        description: fields.text({ label: "Beskrivning", multiline: true }),
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
          description: "Foto för bildremsan på startsidan.",
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
        sortOrder: fields.integer({ label: "Sorteringsordning (lägre först)", defaultValue: 0 }),
      },
    }),
    events: collection({
      label: "Event",
      slugField: "title",
      path: "src/content/events/*/",
      format: "json",
      schema: {
        title: fields.slug({ name: { label: "Titel" } }),
        description: fields.text({ label: "Beskrivning", multiline: true }),
        date: fields.date({ label: "Datum" }),
        endDate: fields.date({ label: "Slutdatum (valfritt, för flerdagars-event)" }),
        time: fields.text({ label: "Tid" }),
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
    siteInfo: singleton({
      label: "Kontaktinformation",
      path: "src/content/site-info/",
      format: "json",
      schema: {
        addressLine1: fields.text({ label: "Adress rad 1", defaultValue: "Södermalm, Stockholm" }),
        addressLine2: fields.text({ label: "Adress rad 2" }),
        phoneLagerbaren: fields.text({ label: "Telefon Lagerbaren", defaultValue: "08-643 18 08" }),
        phoneMasalaArt: fields.text({ label: "Telefon Masala Art", defaultValue: "08-36 88 48" }),
        email: fields.text({ label: "Bokningsemail", defaultValue: "boka@lagerbaren.se" }),
        instagramMasalaArt: fields.text({ label: "Instagram Masala Art", defaultValue: "@masalaartsodermalm" }),
        facebookMasalaArt: fields.text({ label: "Facebook Masala Art", defaultValue: "masalaartstreetfood" }),
        openingHoursWeekdays: fields.text({ label: "Öppettider vardagar", defaultValue: "11:00 – 23:00" }),
        openingHoursWeekend: fields.text({ label: "Öppettider helg", defaultValue: "12:00 – 01:00" }),
        lunchHours: fields.text({ label: "Lunchtider", defaultValue: "11:00 – 14:00" }),
        googleMapsEmbed: fields.text({ label: "Google Maps Embed URL", multiline: true }),
      },
    }),
    festvaning: singleton({
      label: "Festväningen",
      path: "src/content/festvaning/",
      format: "json",
      schema: {
        title: fields.text({ label: "Titel", defaultValue: "Festväningen" }),
        description: fields.text({ label: "Beskrivning", multiline: true, defaultValue: "Vår festväning rymmer upp till 60 personer och är perfekt för födelsedagar, firmafester, release-fester och andra tillställningar." }),
        capacity: fields.text({ label: "Kapacitet", defaultValue: "Upp till 60 personer" }),
        includesText: fields.text({ label: "Vad ingår", multiline: true, defaultValue: "Egen bar, ljudsystem, projektor, mikrofon. Möjlighet att beställa mat från både Lagerbaren och Masala Art." }),
        priceInfo: fields.text({ label: "Prisinformation", multiline: true, defaultValue: "Kontakta oss för offert. Pris beror på dag, tid och antal gäster." }),
        fullBarTitle: fields.text({ label: "Helbokningav baren - Titel", defaultValue: "Boka hela Lagerbaren" }),
        fullBarDescription: fields.text({ label: "Helbokning av baren - Beskrivning", multiline: true, defaultValue: "Vill ni ha hela Lagerbaren för er? Vi erbjuder helbokning av baren för större event och fester. Perfekt för firmaevent, releasefester eller privata tillställningar." }),
        contactInfo: fields.text({ label: "Kontaktinfo", defaultValue: "Kontakta oss på boka@lagerbaren.se eller ring 08-643 18 08" }),
      },
    }),
    aboutLagerbaren: singleton({
      label: "Om Lagerbaren",
      path: "src/content/about-lagerbaren/",
      format: "json",
      schema: {
        heroTitle: fields.text({ label: "Hero-titel", defaultValue: "Lagerbaren" }),
        heroSubtitle: fields.text({ label: "Hero-undertitel", defaultValue: "Södermalms sportbar sedan 2005" }),
        heroImage: fields.image({
          label: "Hero-bild (stor bild i toppen av sidan)",
          description: "Den stora bilden besökare ser först. Använd ett bra foto av baren eller maten.",
          directory: "public/images/cms/about-lagerbaren",
          publicPath: "/images/cms/about-lagerbaren/",
        }),
        description: fields.text({ label: "Beskrivning", multiline: true, defaultValue: "Lagerbaren är Södermalms sportbar med stort utbud av fatöl, rom och whisky. Vi visar alla stora sportevenemang på våra storbilds-TV och projektorer. Välkommen till oss för lunch, after work eller en helkväll med god mat och dryck." }),
        sportText: fields.text({ label: "Sport-text", multiline: true, defaultValue: "Vi visar alla stora sportevenemang — fotboll, hockey, basket, MMA och mer. Stolt sponsor av Hammarbys sportlag." }),
        quizText: fields.text({ label: "Quiz-text", defaultValue: "Pubquiz varje onsdag kl 19:00. Samla laget och kom!" }),
      },
    }),
    aboutMasalaArt: singleton({
      label: "Om Masala Art",
      path: "src/content/about-masala-art/",
      format: "json",
      schema: {
        heroTitle: fields.text({ label: "Hero-titel", defaultValue: "Masala Art" }),
        heroSubtitle: fields.text({ label: "Hero-undertitel", defaultValue: "Indisk & Bengalisk mat på Södermalm" }),
        heroImage: fields.image({
          label: "Hero-bild (stor bild i toppen av sidan)",
          description: "Den stora bilden besökare ser först. Använd ett bra foto av en bowl eller curry.",
          directory: "public/images/cms/about-masala-art",
          publicPath: "/images/cms/about-masala-art/",
        }),
        description: fields.text({ label: "Beskrivning", multiline: true, defaultValue: "Masala Art serverar autentisk indisk och bengalisk mat i hjärtat av Södermalm. Våra bowls och traditionella rätter lagas från grunden med färska kryddor och ingredienser." }),
      },
    }),
  },
});
