import { HelpPage } from "../prose";
import { Step, Steps } from "../step";
import { Callout } from "../callout";
import { FieldName } from "../field-name";
import { Path } from "../path";
import type { Locale } from "../nav";

export function Stories({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <HelpPage
        title="Stories"
        lede="Stories about sponsorships, the fan club, the history of the house. Short articles that give the venue personality."
      >
        <p className="!mb-8 text-sm text-zinc-500">
          The Keystatic admin UI is in Swedish, so this page keeps the
          Swedish field labels you’ll actually see (with English in
          parentheses on first mention).
        </p>

        <h2>What a story is</h2>
        <p>
          A story is a small article with its own page. It appears in a list
          on the site and can be featured on the home page. Typical examples:
          a sponsorship piece, a fan-club portrait, or “How we got started”.
        </p>
        <ul>
          <li>
            <strong>Venue</strong> (Lagerbaren, Masala Art, or Both) controls
            where the story shows up.
          </li>
          <li>
            <strong>Type</strong> (Sport, Sponsorship, History, Other) helps
            visitors filter and gives visual categorisation.
          </li>
        </ul>

        <h2 id="create">Create a story</h2>
        <Steps>
          <Step n={1}>
            Go to <Path>Collections → Berättelser</Path> (Stories) and click{" "}
            <Path>+ Create</Path>.
          </Step>
          <Step n={2}>
            Fill in <FieldName>Titel</FieldName> (Title). It also becomes the
            URL — keep it short and readable.
          </Step>
          <Step n={3}>
            Write a <FieldName>Underrubrik</FieldName> (Subtitle) — one
            sentence that sets the tone.
          </Step>
          <Step n={4}>
            Pick <FieldName>Plats</FieldName> (Venue: Lagerbaren / Masala Art
            / Båda) and <FieldName>Typ</FieldName> (Type).
          </Step>
          <Step n={5}>
            Upload a <FieldName>Hero-bild</FieldName> (Hero image) — optional
            but recommended. It shows up large at the top of the story.
          </Step>
          <Step n={6}>
            Write <FieldName>Brödtext</FieldName> (Body text). Keep paragraphs
            short. Leave blank lines between paragraphs.
          </Step>
          <Step n={7}>
            If it should be featured on the home page: tick{" "}
            <FieldName>Visa på startsidan (utvald)</FieldName> (Show on home
            page).
          </Step>
          <Step n={8}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>

        <h2>Update a story</h2>
        <Steps>
          <Step n={1}>
            Go to <Path>Collections → Berättelser</Path>. Click the story.
          </Step>
          <Step n={2}>Change what you need. Save.</Step>
        </Steps>

        <h2>Feature on the home page</h2>
        <Steps>
          <Step n={1}>Open the story.</Step>
          <Step n={2}>
            Tick <FieldName>Visa på startsidan (utvald)</FieldName>.
          </Step>
          <Step n={3}>
            If you have several featured, control the order with{" "}
            <FieldName>Sorteringsordning</FieldName> (Sort order — lower
            number = higher up).
          </Step>
          <Step n={4}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>
        <Callout type="tip">
          1–2 featured stories at a time is usually about right. More gets
          messy and loses impact.
        </Callout>

        <h2>Delete a story</h2>
        <p>
          There’s no archive feature — if you want to remove a story, you do
          it permanently:
        </p>
        <Steps>
          <Step n={1}>Open the story.</Step>
          <Step n={2}>
            Click <Path>Delete entry</Path> at the top and confirm.
          </Step>
        </Steps>
        <Callout type="note">
          Regret it later? Contact the developer. Everything that gets deleted
          is still in history and can be brought back.
        </Callout>

        <h2>Writing tips</h2>
        <ul>
          <li>Keep paragraphs short. Max 3–4 sentences.</li>
          <li>Start with a hook — why should anyone keep reading?</li>
          <li>
            A great photo does more for a story than a long text. Spend time
            on the image choice.
          </li>
          <li>
            Typos in the Swedish field show up on both the SV and EN sites if
            English is empty. Read through before saving.
          </li>
        </ul>
      </HelpPage>
    );
  }

  return (
    <HelpPage
      title="Berättelser"
      lede="Historier om sponsorskap, fanklubben, husets historia. Korta artiklar som ger huset personlighet."
    >
      <h2>Vad en berättelse är</h2>
      <p>
        En berättelse är en liten artikel med egen sida. Den syns i en lista
        på sajten och kan lyftas upp på startsidan. Typiska exempel: en
        sponsorhistoria, en fanklubbsportätt, eller ”Så här började vi”.
      </p>
      <ul>
        <li>
          <strong>Plats</strong> (Lagerbaren, Masala Art eller Båda) styr var
          berättelsen visas.
        </li>
        <li>
          <strong>Typ</strong> (Sport, Sponsorskap, Historia, Annat) hjälper
          besökare att filtrera och ger visuell kategorisering.
        </li>
      </ul>

      <h2 id="skapa">Skapa en berättelse</h2>
      <Steps>
        <Step n={1}>
          Gå till <Path>Collections → Berättelser</Path> och klicka{" "}
          <Path>+ Create</Path>.
        </Step>
        <Step n={2}>
          Fyll i <FieldName>Titel</FieldName>. Det blir också URL:en — håll den
          kort och läsbar.
        </Step>
        <Step n={3}>
          Skriv en <FieldName>Underrubrik</FieldName> (en enda mening som
          sätter tonen).
        </Step>
        <Step n={4}>
          Välj <FieldName>Plats</FieldName> (Lagerbaren / Masala Art / Båda)
          och <FieldName>Typ</FieldName>.
        </Step>
        <Step n={5}>
          Ladda upp en <FieldName>Hero-bild</FieldName> — valfri men
          rekommenderad. Den visas stor överst i berättelsen.
        </Step>
        <Step n={6}>
          Skriv <FieldName>Brödtext</FieldName>. Håll styckena korta. Lämna
          blankrad mellan stycken.
        </Step>
        <Step n={7}>
          Om den ska lyftas upp på startsidan: kryssa i{" "}
          <FieldName>Visa på startsidan (utvald)</FieldName>.
        </Step>
        <Step n={8}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>

      <h2>Uppdatera en berättelse</h2>
      <Steps>
        <Step n={1}>
          Gå till <Path>Collections → Berättelser</Path>. Klicka på
          berättelsen.
        </Step>
        <Step n={2}>Ändra det du behöver. Spara.</Step>
      </Steps>

      <h2>Lyfta fram på startsidan</h2>
      <Steps>
        <Step n={1}>Öppna berättelsen.</Step>
        <Step n={2}>
          Kryssa i <FieldName>Visa på startsidan (utvald)</FieldName>.
        </Step>
        <Step n={3}>
          Om du har flera utvalda, styr ordningen med{" "}
          <FieldName>Sorteringsordning</FieldName> (lägre siffra = högre upp).
        </Step>
        <Step n={4}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>
      <Callout type="tip">
        1–2 utvalda åt gången brukar vara lagom. Fler blir rörigt och tappar
        effekt.
      </Callout>

      <h2>Ta bort en berättelse</h2>
      <p>
        Det finns ingen ”arkiv”-funktion — vill du ta bort en berättelse gör
        du det permanent:
      </p>
      <Steps>
        <Step n={1}>Öppna berättelsen.</Step>
        <Step n={2}>
          Klicka <Path>Delete entry</Path> högst upp och bekräfta.
        </Step>
      </Steps>
      <Callout type="note">
        Ångrar du dig efteråt — kontakta utvecklaren. Allt som tas bort finns
        kvar i historiken och kan återskapas.
      </Callout>

      <h2>Skrivtips</h2>
      <ul>
        <li>Håll styckena korta. Max 3–4 meningar.</li>
        <li>Börja med en krok — varför ska någon läsa vidare?</li>
        <li>
          En bra bild gör mer för berättelsen än en lång text. Lägg ner tid på
          bildvalet.
        </li>
        <li>
          Stavfel på svenska-fältet syns på både SV- och EN-sajten om engelska
          är tomt. Läs igenom innan du sparar.
        </li>
      </ul>
    </HelpPage>
  );
}
