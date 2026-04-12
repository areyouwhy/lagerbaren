import { HelpPage } from "../prose";
import { Callout } from "../callout";
import { FieldName } from "../field-name";
import type { Locale } from "../nav";

export function Languages({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <HelpPage
        title="Swedish & English"
        lede="The site is available in Swedish and English. Here’s how it works when you fill in text."
      >
        <p className="!mb-8 text-sm text-zinc-500">
          The Keystatic admin UI is in Swedish, so this page keeps the
          Swedish field labels you’ll actually see (with English in
          parentheses on first mention).
        </p>

        <h2>Two languages, one entry</h2>
        <p>
          Almost every text field has two boxes — <strong>Svenska</strong>{" "}
          (Swedish) and <strong>English (valfritt)</strong> (optional). It’s
          the same entry, the same image, the same date — just text in two
          languages.
        </p>

        <h2>Swedish is required, English is optional</h2>
        <p>
          You always have to fill in Swedish. English can be empty — Swedish
          will then show up on the English site too. That means you can
          create a brand new entry in Swedish first and translate later (or
          never) without breaking anything.
        </p>
        <Callout type="tip">
          Translating every field into English takes time. Prioritise titles
          and main descriptions first — those are what show up in lists and
          search results. Long body text can wait.
        </Callout>

        <h2>How fallback looks</h2>
        <p>
          If <FieldName>Name (English)</FieldName> is empty, the Swedish name
          shows up on the <code>/en/…</code> pages too. Same goes for{" "}
          <FieldName>Beskrivning</FieldName> (Description),{" "}
          <FieldName>Hero-titel</FieldName> (Hero title), and every other
          bilingual field.
        </p>
        <p>
          That also means if you only update Swedish later, the English page
          automatically follows along. You don’t have to update both.
        </p>

        <h2>Adding English text after the fact</h2>
        <ol className="mb-4 list-decimal pl-5 [&>li]:mb-1">
          <li>Open the entry you want to translate.</li>
          <li>Scroll to the field and fill in the English box.</li>
          <li>Save.</li>
        </ol>
        <p>You don’t need to touch the Swedish — it stays as it is.</p>

        <h2>When can English differ from Swedish?</h2>
        <p>
          Some things sound different in English — e.g. dish names (<em>Kötthögar</em>{" "}
          → <em>Meatballs</em>) or marketing-style copy. There it’s clearly
          worth writing separate versions. Other things (the address, phone
          number, the actual time digits) are the same in both languages —
          you can just leave English empty.
        </p>

        <Callout type="note">
          Fields that aren’t translatable — e.g. price, date, image uploads,
          URLs — display the same on both sites. They only have one box.
        </Callout>
      </HelpPage>
    );
  }

  return (
    <HelpPage
      title="Svenska & engelska"
      lede="Sajten finns på svenska och engelska. Så här funkar det när du fyller i text."
    >
      <h2>Två språk, en post</h2>
      <p>
        Nästan alla textfält har två rutor — <strong>Svenska</strong> och{" "}
        <strong>English (valfritt)</strong>. Det är samma post, samma bild,
        samma datum — bara texten som finns i två språk.
      </p>

      <h2>Svenska är obligatoriskt, engelska är valfritt</h2>
      <p>
        Du måste alltid fylla i svenska. Engelska kan vara tomt — då visas
        svenskan även på den engelska sajten. Det betyder att du kan skapa en
        helt ny post på svenska först och översätta senare (eller aldrig),
        utan att något går sönder.
      </p>
      <Callout type="tip">
        Tillräckligt många fält på engelska tar tid. Prioritera titlar och
        huvudbeskrivningar först — det är de som syns på listor och i
        sökresultat. Långa brödtexter kan vänta.
      </Callout>

      <h2>Hur fallback ser ut</h2>
      <p>
        Om <FieldName>Name (English)</FieldName> är tomt visas det svenska
        namnet även på <code>/en/…</code>-sidorna. Detsamma gäller{" "}
        <FieldName>Beskrivning</FieldName>,{" "}
        <FieldName>Hero-titel</FieldName> och alla andra tvåspråkiga fält.
      </p>
      <p>
        Det betyder också att om du ändrar bara svenskan i efterhand kommer
        den engelska sidan automatiskt följa med. Du behöver inte uppdatera
        båda.
      </p>

      <h2>Lägga till engelsk text i efterhand</h2>
      <ol className="mb-4 list-decimal pl-5 [&>li]:mb-1">
        <li>Öppna den post du vill översätta.</li>
        <li>Scrolla till fältet och fyll i engelska rutan.</li>
        <li>Spara.</li>
      </ol>
      <p>Du behöver inte röra svenskan — den ligger kvar som den är.</p>

      <h2>När kan engelska skilja sig från svenska?</h2>
      <p>
        Vissa saker låter annorlunda på engelska — t.ex. rättnamn (<em>Kötthögar</em>{" "}
        → <em>Meatballs</em>) eller säljande formuleringar. Då är det klart
        värt att skriva separata versioner. Andra saker (adress, telefon,
        öppettider-tiderna själva) är samma på båda språken — där kan du bara
        låta engelskan vara tom.
      </p>

      <Callout type="note">
        Fält som inte är översättningsbara — t.ex. pris, datum,
        bilduppladdningar, URL:er — visas likadant på båda sajterna. De har
        bara en ruta.
      </Callout>
    </HelpPage>
  );
}
