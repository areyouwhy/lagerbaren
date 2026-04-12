import Link from "next/link";
import { HelpPage } from "../prose";
import { Step, Steps } from "../step";
import { Callout } from "../callout";
import { FieldName } from "../field-name";
import { Path } from "../path";
import type { Locale } from "../nav";

export function Pages({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <HelpPage
        title="Pages"
        lede="The fixed pages that always exist — unlike events and stories that come and go. Keystatic calls them singletons."
      >
        <p className="!mb-8 text-sm text-zinc-500">
          The Keystatic admin UI is in Swedish, so this page keeps the
          Swedish field labels you’ll actually see (with English in
          parentheses on first mention).
        </p>

        <h2>Which pages are there?</h2>
        <ul>
          <li>
            <Path>Om Lagerbaren</Path> (About Lagerbaren) — everything about
            Lagerbaren: logo, hero, description, contact info, hours, map,
            social links. See <Link href="/en/help/home-page">Home page</Link>{" "}
            and <Link href="/en/help/hours-contact">Hours & contact</Link>.
          </li>
          <li>
            <Path>Om Masala Art</Path> (About Masala Art) — same structure as
            Lagerbaren, but for Masala Art.
          </li>
          <li>
            <Path>Festväningen</Path> (The party venue) — the page that
            describes the function room for bookings. See below.
          </li>
          <li>
            <Path>Lunchinfo</Path> (Lunch info) — the general lunch
            information. See <Link href="/en/help/lunch">Lunch</Link>.
          </li>
        </ul>

        <h2>Difference between Singletons and Collections</h2>
        <p>
          <strong>Singletons</strong> exist only once. You can’t create
          another “Om Lagerbaren” page — there’s one, you just swap its
          contents.
        </p>
        <p>
          <strong>Collections</strong> are lists where you can add, remove,
          and edit as many entries as you like — events, stories, menu
          dishes, photos.
        </p>

        <h2>Festväningen (the party venue)</h2>
        <p>
          The page guests see when looking to book the function room. Content
          comes from the <Path>Festväningen</Path> singleton.
        </p>
        <Steps>
          <Step n={1}>
            Go to <Path>Singletons → Festväningen</Path>.
          </Step>
          <Step n={2}>
            Edit the fields:
            <ul className="!mt-2">
              <li>
                <FieldName>Titel</FieldName> (Title) — the page heading.
              </li>
              <li>
                <FieldName>Beskrivning</FieldName> (Description) — short,
                inviting text about the room.
              </li>
              <li>
                <FieldName>Kapacitet</FieldName> (Capacity) — e.g.{" "}
                <em>up to 60 people</em>.
              </li>
              <li>
                <FieldName>Vad ingår</FieldName> (What’s included) — a bullet
                list of what comes with the booking.
              </li>
              <li>
                <FieldName>Prisinformation</FieldName> (Price info) — price,
                minimums, what gets added on top.
              </li>
              <li>
                <FieldName>Helbokning av baren — titel</FieldName> and{" "}
                <FieldName>Helbokning av baren — beskrivning</FieldName>{" "}
                (Full bar booking — title/description) — for inquiries about
                the entire bar.
              </li>
              <li>
                <FieldName>Kontaktinfo</FieldName> (Contact info) — how guests
                book (phone, email).
              </li>
            </ul>
          </Step>
          <Step n={3}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>
        <Callout type="tip">
          Keep the description short and concrete. People booking are looking
          for: capacity, price, and how to get in touch. Everything else is
          extra.
        </Callout>

        <h2>Change the logo or hero image on the about pages</h2>
        <Steps>
          <Step n={1}>
            Go to <Path>Singletons → Om Lagerbaren</Path> or{" "}
            <Path>Om Masala Art</Path>.
          </Step>
          <Step n={2}>
            Drag a new image to <FieldName>Logotyp</FieldName> (Logo) or{" "}
            <FieldName>Hero-bild</FieldName> (Hero image).
          </Step>
          <Step n={3}>
            For the hero image — adjust{" "}
            <FieldName>Hero-bildens fokuspunkt</FieldName> (Focus point) if
            it’s being cropped wrong.
          </Step>
          <Step n={4}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>
        <Callout type="note">
          The logo shows up in the header and footer across the whole site.
          Keep it square or near-square, and use PNG or SVG with a transparent
          background.
        </Callout>
      </HelpPage>
    );
  }

  return (
    <HelpPage
      title="Sidor"
      lede="De fasta sidorna som alltid finns — till skillnad från event och berättelser som kommer och går. I Keystatic kallas de singletons."
    >
      <h2>Vilka sidor finns?</h2>
      <ul>
        <li>
          <Path>Om Lagerbaren</Path> — allt om Lagerbaren: logga, hero,
          beskrivning, kontaktinfo, öppettider, karta, sociala länkar. Se{" "}
          <Link href="/help/startsidan">Startsidan</Link> och{" "}
          <Link href="/help/oppettider">Öppettider & kontakt</Link>.
        </li>
        <li>
          <Path>Om Masala Art</Path> — samma struktur som Lagerbaren, men för
          Masala Art.
        </li>
        <li>
          <Path>Festväningen</Path> — sidan som beskriver festväningen för
          bokningar. Se nedan.
        </li>
        <li>
          <Path>Lunchinfo</Path> — den generella lunchinformationen. Se{" "}
          <Link href="/help/lunch">Lunch</Link>.
        </li>
      </ul>

      <h2>Skillnad mellan Singletons och Collections</h2>
      <p>
        <strong>Singletons</strong> finns bara i ett exemplar. Du kan inte
        skapa fler ”Om Lagerbaren”-sidor — den finns, du byter bara ut
        innehållet.
      </p>
      <p>
        <strong>Collections</strong> är listor där du kan lägga till, ta bort
        och ändra lika många poster du vill — event, berättelser, menyrätter,
        bilder.
      </p>

      <h2>Festväningen</h2>
      <p>
        Sidan för gäster som vill boka festväningen. Innehållet kommer från
        singleton <Path>Festväningen</Path>.
      </p>
      <Steps>
        <Step n={1}>
          Gå till <Path>Singletons → Festväningen</Path>.
        </Step>
        <Step n={2}>
          Redigera fälten:
          <ul className="!mt-2">
            <li>
              <FieldName>Titel</FieldName> — sidans rubrik.
            </li>
            <li>
              <FieldName>Beskrivning</FieldName> — kort säljande text om
              lokalen.
            </li>
            <li>
              <FieldName>Kapacitet</FieldName> — t.ex.{" "}
              <em>upp till 60 personer</em>.
            </li>
            <li>
              <FieldName>Vad ingår</FieldName> — punktlista med vad som ingår
              i bokningen.
            </li>
            <li>
              <FieldName>Prisinformation</FieldName> — pris, miniminivåer, vad
              som tillkommer.
            </li>
            <li>
              <FieldName>Helbokning av baren — titel</FieldName> och{" "}
              <FieldName>Helbokning av baren — beskrivning</FieldName> — för
              förfrågningar om hela baren.
            </li>
            <li>
              <FieldName>Kontaktinfo</FieldName> — hur gäster bokar (telefon,
              email).
            </li>
          </ul>
        </Step>
        <Step n={3}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>
      <Callout type="tip">
        Håll beskrivningen kort och konkret. Bokare letar efter: kapacitet,
        pris och hur man hör av sig. Allt annat är extra.
      </Callout>

      <h2>Byta logga eller hero-bild på om-sidorna</h2>
      <Steps>
        <Step n={1}>
          Gå till <Path>Singletons → Om Lagerbaren</Path> eller{" "}
          <Path>Om Masala Art</Path>.
        </Step>
        <Step n={2}>
          Dra en ny bild till <FieldName>Logotyp</FieldName> eller{" "}
          <FieldName>Hero-bild</FieldName>.
        </Step>
        <Step n={3}>
          För hero-bilden — justera{" "}
          <FieldName>Hero-bildens fokuspunkt</FieldName> om den klipps på fel
          ställe.
        </Step>
        <Step n={4}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>
      <Callout type="note">
        Loggan visas i sidhuvudet och sidfoten på hela sajten. Håll den
        kvadratisk eller nästan kvadratisk, och använd helst PNG eller SVG med
        transparent bakgrund.
      </Callout>
    </HelpPage>
  );
}
