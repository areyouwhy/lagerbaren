import Link from "next/link";
import { HelpPage } from "../prose";
import { Step, Steps } from "../step";
import { Callout } from "../callout";
import { FieldName } from "../field-name";
import { Path } from "../path";
import type { Locale } from "../nav";

export function HomePage({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <HelpPage
        title="Home page"
        lede="There are two home pages — one for Lagerbaren and one for Masala Art. Here’s how to change what visitors see first when they land."
      >
        <p className="!mb-8 text-sm text-zinc-500">
          The Keystatic admin UI is in Swedish, so this page keeps the
          Swedish field labels you’ll actually see (with English in
          parentheses on first mention).
        </p>

        <h2>What controls what</h2>
        <p>The home page is assembled from several sources in Keystatic:</p>
        <ul>
          <li>
            <strong>Hero (the big image and text at the top)</strong> — comes
            from the singletons <Path>Om Lagerbaren</Path> (About Lagerbaren)
            and <Path>Om Masala Art</Path> (About Masala Art). The fields are{" "}
            <FieldName>heroTitle</FieldName>,{" "}
            <FieldName>heroSubtitle</FieldName>,{" "}
            <FieldName>heroImage</FieldName>, and{" "}
            <FieldName>heroImagePosition</FieldName>.
          </li>
          <li>
            <strong>Photo strip</strong> — a row of ambience photos under the
            hero. Comes from the <Path>Bildremsa</Path> (Photo strip)
            collection. Each photo has a venue (Lagerbaren or Masala Art).
          </li>
          <li>
            <strong>Description</strong> — a shorter body text under the photo
            strip. The <FieldName>description</FieldName> field on the
            corresponding About page.
          </li>
          <li>
            <strong>Upcoming events</strong> — the next 5 events for the venue
            show up automatically. Manage them in <Path>Event</Path> (Events).
          </li>
          <li>
            <strong>Sport & Quiz (Lagerbaren only)</strong> — the fields{" "}
            <FieldName>sportText</FieldName> and{" "}
            <FieldName>quizText</FieldName> on <Path>Om Lagerbaren</Path>.
          </li>
        </ul>

        <h2 id="hero">Change the hero image</h2>
        <Steps>
          <Step n={1}>
            Go to <Path>Singletons → Om Lagerbaren</Path> (or{" "}
            <Path>Om Masala Art</Path>).
          </Step>
          <Step n={2}>
            Find the <FieldName>Hero-bild</FieldName> (Hero image) field. Drag
            a new image onto it or click to pick one from your computer.
          </Step>
          <Step n={3}>
            If the image gets cropped wrong, adjust{" "}
            <FieldName>Hero-bildens fokuspunkt</FieldName> (Hero focus point).
            Pick e.g. <em>Topp</em> (top) if faces are too low, or{" "}
            <em>Botten</em> (bottom) if too much sky is showing.
          </Step>
          <Step n={4}>
            Click <Path>Save</Path>. Wait ~5 min and hard-refresh the site.
          </Step>
        </Steps>
        <Callout type="tip">
          Good hero images are wide (landscape), at least 1600px wide, and
          have something happening near the centre. See{" "}
          <Link href="/en/help/images">Images</Link> for more.
        </Callout>

        <h2>Change the hero title or subtitle</h2>
        <Steps>
          <Step n={1}>
            Go to <Path>Singletons → Om Lagerbaren</Path> or{" "}
            <Path>Om Masala Art</Path>.
          </Step>
          <Step n={2}>
            Edit <FieldName>Hero-titel</FieldName> and{" "}
            <FieldName>Hero-undertitel</FieldName>. Fill in both Swedish and
            English if you like — otherwise Swedish shows on the English site
            too.
          </Step>
          <Step n={3}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>

        <h2>Change the photo strip</h2>
        <Steps>
          <Step n={1}>
            Go to <Path>Collections → Bildremsa</Path>.
          </Step>
          <Step n={2}>
            Click an existing photo to replace it, or click <Path>+ Create</Path>{" "}
            to add a new one.
          </Step>
          <Step n={3}>
            Set <FieldName>Plats</FieldName> (Venue) to Lagerbaren or Masala
            Art — that controls which home page the photo shows on.
          </Step>
          <Step n={4}>
            Use <FieldName>Sorteringsordning</FieldName> (Sort order) to
            control the order. Lower number = further to the left.
          </Step>
          <Step n={5}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>
        <Callout type="note">
          To <strong>remove</strong> a photo from the strip: open it in
          Bildremsa and click <Path>Delete entry</Path> at the top.
        </Callout>

        <h2>Featuring a story or an event</h2>
        <p>
          The home page automatically pulls up anything marked as featured:
        </p>
        <ul>
          <li>
            <strong>Event:</strong> tick <FieldName>Utvalt</FieldName>{" "}
            (Featured) on the event — it shows at the top of the upcoming list.
          </li>
          <li>
            <strong>Story:</strong> tick{" "}
            <FieldName>Visa på startsidan (utvald)</FieldName> (Show on home
            page). Combine with{" "}
            <FieldName>Sorteringsordning</FieldName> (Sort order) if you have
            several featured.
          </li>
        </ul>
      </HelpPage>
    );
  }

  return (
    <HelpPage
      title="Startsidan"
      lede="Det finns två startsidor — en för Lagerbaren och en för Masala Art. Så här byter du det som visas först när någon kommer in."
    >
      <h2>Vad som styr vad</h2>
      <p>
        Startsidan sätts ihop av flera olika källor i Keystatic:
      </p>
      <ul>
        <li>
          <strong>Hero (den stora bilden och texten överst)</strong> — kommer
          från singletons <Path>Om Lagerbaren</Path> respektive{" "}
          <Path>Om Masala Art</Path>. Fälten är{" "}
          <FieldName>heroTitle</FieldName>,{" "}
          <FieldName>heroSubtitle</FieldName>,{" "}
          <FieldName>heroImage</FieldName> och{" "}
          <FieldName>heroImagePosition</FieldName>.
        </li>
        <li>
          <strong>Bildremsan</strong> — en rad med stämningsbilder under hero.
          Kommer från collection <Path>Bildremsa</Path>. Varje bild har en
          plats (Lagerbaren eller Masala Art).
        </li>
        <li>
          <strong>Beskrivningen</strong> — en kortare brödtext under
          bildremsan. Fältet <FieldName>description</FieldName> på respektive
          om-sida.
        </li>
        <li>
          <strong>Kommande event</strong> — de fem närmast kommande eventen
          för platsen visas automatiskt. Hantera dem i <Path>Event</Path>.
        </li>
        <li>
          <strong>Sport & Quiz (bara Lagerbaren)</strong> — fälten{" "}
          <FieldName>sportText</FieldName> och{" "}
          <FieldName>quizText</FieldName> på <Path>Om Lagerbaren</Path>.
        </li>
      </ul>

      <h2 id="hero">Byta hero-bild</h2>
      <Steps>
        <Step n={1}>
          Gå till <Path>Singletons → Om Lagerbaren</Path> (eller{" "}
          <Path>Om Masala Art</Path>).
        </Step>
        <Step n={2}>
          Hitta fältet <FieldName>Hero-bild</FieldName>. Dra en ny bild dit
          eller klicka för att välja från datorn.
        </Step>
        <Step n={3}>
          Om bilden klipps på fel ställe — justera{" "}
          <FieldName>Hero-bildens fokuspunkt</FieldName>. Välj t.ex.{" "}
          <em>Topp</em> om ansikten hamnar för lågt, eller <em>Botten</em> om
          himlen tar för mycket plats.
        </Step>
        <Step n={4}>
          Klicka <Path>Save</Path>. Vänta ~5 min och ladda om sajten hårt.
        </Step>
      </Steps>
      <Callout type="tip">
        Bra hero-bilder är breda (liggande), minst 1600px breda, och har något
        som händer i mitten. Se <Link href="/help/bilder">Bilder</Link> för mer.
      </Callout>

      <h2>Ändra hero-titeln eller undertiteln</h2>
      <Steps>
        <Step n={1}>
          Gå till <Path>Singletons → Om Lagerbaren</Path> eller{" "}
          <Path>Om Masala Art</Path>.
        </Step>
        <Step n={2}>
          Ändra <FieldName>Hero-titel</FieldName> och{" "}
          <FieldName>Hero-undertitel</FieldName>. Fyll i både svenska och
          engelska om du vill — annars visas svenska även på EN-sajten.
        </Step>
        <Step n={3}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>

      <h2>Byta bildremsans foton</h2>
      <Steps>
        <Step n={1}>
          Gå till <Path>Collections → Bildremsa</Path>.
        </Step>
        <Step n={2}>
          Klicka på en befintlig bild för att byta ut den, eller klicka{" "}
          <Path>+ Create</Path> för att lägga till en ny.
        </Step>
        <Step n={3}>
          Ställ in <FieldName>Plats</FieldName> (Lagerbaren eller Masala Art) —
          det styr på vilken startsida bilden visas.
        </Step>
        <Step n={4}>
          Använd <FieldName>Sorteringsordning</FieldName> för att styra
          ordningen. Lägre siffra = längre till vänster.
        </Step>
        <Step n={5}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>
      <Callout type="note">
        För att <strong>ta bort</strong> en bild ur remsan: öppna bilden i
        Bildremsa och klicka <Path>Delete entry</Path> högst upp.
      </Callout>

      <h2>Lyfta fram en berättelse eller ett event</h2>
      <p>
        Startsidan lyfter automatiskt upp det som är markerat som utvalt:
      </p>
      <ul>
        <li>
          <strong>Event:</strong> markera <FieldName>Utvalt</FieldName> på
          eventet — det visas överst bland kommande event.
        </li>
        <li>
          <strong>Berättelse:</strong> markera{" "}
          <FieldName>Visa på startsidan (utvald)</FieldName>. Kombinera med{" "}
          <FieldName>Sorteringsordning</FieldName> om du har flera utvalda.
        </li>
      </ul>
    </HelpPage>
  );
}
