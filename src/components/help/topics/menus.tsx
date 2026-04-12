import Link from "next/link";
import { HelpPage } from "../prose";
import { Step, Steps } from "../step";
import { Callout } from "../callout";
import { FieldName } from "../field-name";
import { Path } from "../path";
import type { Locale } from "../nav";

export function Menus({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <HelpPage
        title="Menus"
        lede="Three separate menus: Lagerbaren, Masala Art, and Drinks. Each dish is its own entry in a collection."
      >
        <p className="!mb-8 text-sm text-zinc-500">
          The Keystatic admin UI is in Swedish, so this page keeps the
          Swedish field labels you’ll actually see (with English in
          parentheses on first mention).
        </p>

        <h2>Which menu is which?</h2>
        <ul>
          <li>
            <Path>Meny Lagerbaren</Path> (Lagerbaren menu) — à la carte on the
            sports bar side (pizza, burgers, plankstek, salads, etc.).
          </li>
          <li>
            <Path>Meny Masala Art</Path> (Masala Art menu) — Indian/Bengali
            dishes (bowls, traditional curries, tandoori, sides).
          </li>
          <li>
            <Path>Dryckesmeny</Path> (Drinks menu) — drinks shared between the
            two houses (draft beer, wine, rum, whisky, cocktails, etc.).
          </li>
          <li>
            <Path>Lunchmeny</Path> (Lunch menu) — the lunch weekly schedule.
            Managed separately, see <Link href="/en/help/lunch">Lunch</Link>.
          </li>
        </ul>

        <h2>Add a dish</h2>
        <Steps>
          <Step n={1}>
            Go to the right menu (e.g.{" "}
            <Path>Collections → Meny Lagerbaren</Path>) and click{" "}
            <Path>+ Create</Path>.
          </Step>
          <Step n={2}>
            Fill in <FieldName>Namn</FieldName> (Name — Swedish). English is
            optional — fill <FieldName>Name (English)</FieldName> in if the
            English name differs, otherwise the Swedish version shows on the
            English site too.
          </Step>
          <Step n={3}>
            Write a short <FieldName>Beskrivning</FieldName> (Description —
            Swedish, English optional).
          </Step>
          <Step n={4}>
            Fill in <FieldName>Pris</FieldName> (Price) as free text — e.g.{" "}
            <em>149 kr</em>, <em>149:-</em>, or <em>149</em>. Keep the format
            consistent within the same menu.
          </Step>
          <Step n={5}>
            Pick <FieldName>Kategori</FieldName> (Category — e.g. Förrätt /
            Starter, Burgare / Burger, Bowl, Tandoori). It controls which
            heading the dish ends up under.
          </Step>
          <Step n={6}>
            Tick <FieldName>Vegetarisk</FieldName> (Vegetarian) if it is. On
            Masala Art — set <FieldName>Styrka</FieldName> (Spice level: Mild
            / Medium / Stark).
          </Step>
          <Step n={7}>
            Set <FieldName>Sorteringsordning</FieldName> (Sort order) if you
            want to control the order within the category. Lower number shows
            first.
          </Step>
          <Step n={8}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>

        <h2>Change a dish’s price</h2>
        <Steps>
          <Step n={1}>Go to the menu collection and click the dish.</Step>
          <Step n={2}>
            Change <FieldName>Pris</FieldName> to the new value.
          </Step>
          <Step n={3}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>

        <h2>Remove a dish</h2>
        <p>For example when a seasonal dish is taken off the menu.</p>
        <Steps>
          <Step n={1}>Open the dish.</Step>
          <Step n={2}>
            Click <Path>Delete entry</Path> at the top and confirm.
          </Step>
        </Steps>
        <Callout type="tip">
          If the dish might come back in a few months — consider not deleting
          it. Either change its category to one that isn’t shown right now,
          or contact the developer if you’d like a proper hidden state.
        </Callout>

        <h2>Move a dish to a different category</h2>
        <Steps>
          <Step n={1}>Open the dish.</Step>
          <Step n={2}>
            Pick a different <FieldName>Kategori</FieldName>.
          </Step>
          <Step n={3}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>

        <h2>Sort dishes within a category</h2>
        <p>
          Set <FieldName>Sorteringsordning</FieldName> on the dishes you want
          to position — lower number first. Dishes with the same number sort
          in the order they were added. A simple pattern: 10, 20, 30 — that
          way it’s easy to slip a new one in between two existing ones.
        </p>

        <h2>Bulk updates</h2>
        <p>
          Updating many dishes at once? Save often. Each save = one publish
          and one automatic site rebuild. It’s totally fine to save many
          times in a row, but avoid leaving a half-finished change open in the
          edit screen if someone else is also working on it.
        </p>
      </HelpPage>
    );
  }

  return (
    <HelpPage
      title="Menyer"
      lede="Tre separata menyer: Lagerbaren, Masala Art och Drycker. Varje rätt är en egen post i en collection."
    >
      <h2>Vilken meny är vilken?</h2>
      <ul>
        <li>
          <Path>Meny Lagerbaren</Path> — à la carte på sportbar-sidan (pizza,
          burgare, plankstek, sallader osv.).
        </li>
        <li>
          <Path>Meny Masala Art</Path> — indisk/bengalisk meny (bowls,
          traditionella grytor, tandoori, sides).
        </li>
        <li>
          <Path>Dryckesmeny</Path> — drycker som delas mellan båda husen
          (fatöl, vin, rom, whisky, cocktails osv.).
        </li>
        <li>
          <Path>Lunchmeny</Path> — lunchens veckoschema. Hanteras separat, se{" "}
          <Link href="/help/lunch">Lunch</Link>.
        </li>
      </ul>

      <h2>Lägga till en rätt</h2>
      <Steps>
        <Step n={1}>
          Gå till rätt meny (t.ex. <Path>Collections → Meny Lagerbaren</Path>)
          och klicka <Path>+ Create</Path>.
        </Step>
        <Step n={2}>
          Fyll i <FieldName>Namn</FieldName> (svenska). Engelska är valfritt —
          fyll i <FieldName>Name (English)</FieldName> om engelska skiljer sig,
          annars visas svenska även på EN-sajten.
        </Step>
        <Step n={3}>
          Skriv en kort <FieldName>Beskrivning</FieldName> (svenska, engelska
          valfritt).
        </Step>
        <Step n={4}>
          Fyll i <FieldName>Pris</FieldName> som fritext — t.ex.{" "}
          <em>149 kr</em>, <em>149:-</em> eller <em>149</em>. Håll formatet
          konsekvent inom samma meny.
        </Step>
        <Step n={5}>
          Välj <FieldName>Kategori</FieldName> (t.ex. Förrätt, Burgare, Bowl,
          Tandoori). Det styr under vilken rubrik rätten hamnar.
        </Step>
        <Step n={6}>
          Kryssa i <FieldName>Vegetarisk</FieldName> om rätten är det. På
          Masala Art — sätt <FieldName>Styrka</FieldName> (Mild / Medium /
          Stark).
        </Step>
        <Step n={7}>
          Sätt <FieldName>Sorteringsordning</FieldName> om du vill styra
          ordningen inom kategorin. Lägre siffra visas först.
        </Step>
        <Step n={8}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>

      <h2>Ändra pris på en rätt</h2>
      <Steps>
        <Step n={1}>Gå till menyns collection och klicka på rätten.</Step>
        <Step n={2}>
          Ändra <FieldName>Pris</FieldName> till det nya värdet.
        </Step>
        <Step n={3}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>

      <h2>Ta bort en rätt</h2>
      <p>Till exempel när en säsongsrätt tas av menyn.</p>
      <Steps>
        <Step n={1}>Öppna rätten.</Step>
        <Step n={2}>
          Klicka <Path>Delete entry</Path> högst upp och bekräfta.
        </Step>
      </Steps>
      <Callout type="tip">
        Om rätten kanske kommer tillbaka om några månader — överväg att inte
        ta bort den, utan bara ändra kategorin till något som inte visas just
        nu, eller kontakta utvecklaren om du vill ha ett ”dolt”-läge.
      </Callout>

      <h2>Ändra kategori (flytta mellan avdelningar)</h2>
      <Steps>
        <Step n={1}>Öppna rätten.</Step>
        <Step n={2}>
          Välj en annan <FieldName>Kategori</FieldName>.
        </Step>
        <Step n={3}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>

      <h2>Sortera rätter inom en kategori</h2>
      <p>
        Sätt <FieldName>Sorteringsordning</FieldName> på de rätter du vill
        styra — lägre siffra först. Rätter med samma siffra sorteras i den
        ordning de lagts in. Ett enkelt mönster: 10, 20, 30 — då är det lätt
        att skjuta in en ny mellan två.
      </p>

      <h2>Bulk-uppdateringar</h2>
      <p>
        Ska du ändra många rätter på en gång? Spara ofta. Varje spar = en
        publicering och en automatisk ombyggnad av sajten. Det är lugnt att
        spara många gånger i rad, men undvik att lämna en halvfärdig ändring
        öppen i redigeringsvyn om någon annan också håller på.
      </p>
    </HelpPage>
  );
}
