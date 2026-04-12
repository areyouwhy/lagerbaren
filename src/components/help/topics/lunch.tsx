import Link from "next/link";
import { HelpPage } from "../prose";
import { Step, Steps } from "../step";
import { Callout } from "../callout";
import { FieldName } from "../field-name";
import { Path } from "../path";
import type { Locale } from "../nav";

export function Lunch({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <HelpPage
        title="Lunch"
        lede="The page you’ll update most often. Two parts: the dishes themselves and the general lunch info (price, hours, what’s included)."
      >
        <p className="!mb-8 text-sm text-zinc-500">
          The Keystatic admin UI is in Swedish, so this page keeps the
          Swedish field labels you’ll actually see (with English in
          parentheses on first mention).
        </p>

        <h2>Two different places to edit</h2>
        <ul>
          <li>
            <Path>Collections → Lunchmeny</Path> (Lunch menu) — the dishes
            themselves. Each dish is an entry with name, description, price,
            venue, and which weekdays it’s served.
          </li>
          <li>
            <Path>Singletons → Lunchinfo</Path> (Lunch info) — the general
            information surrounding it: weekly price, what’s included, lunch
            hours, the favoritbiff, the closed-message for weekends.
          </li>
        </ul>

        <h2>How the rotation works</h2>
        <p>
          Each dish has a <FieldName>Varumärke</FieldName> (Venue: Lagerbaren
          or Masala Art) and a list of{" "}
          <FieldName>Veckodagar</FieldName> (Weekdays). The dish only shows up
          on the days you tick. So you can have different dishes on different
          days, or the same dish all week.
        </p>

        <h2 id="next-week">Update next week’s lunch</h2>
        <p>
          The simplest approach is to edit the previous week’s dishes
          directly — swap the name, description, and price, and leave the
          weekdays alone. That way you don’t create new entries every week.
        </p>
        <Steps>
          <Step n={1}>
            Go to <Path>Collections → Lunchmeny</Path>.
          </Step>
          <Step n={2}>
            Click the first dish you want to swap. Change{" "}
            <FieldName>Namn</FieldName> (Name),{" "}
            <FieldName>Beskrivning</FieldName> (Description), and{" "}
            <FieldName>Pris</FieldName> (Price).
          </Step>
          <Step n={3}>
            Check that <FieldName>Varumärke</FieldName> (Venue) and{" "}
            <FieldName>Veckodagar</FieldName> (Weekdays) are still right.
          </Step>
          <Step n={4}>
            Click <Path>Save</Path>.
          </Step>
          <Step n={5}>
            Repeat for each dish. One save at a time is fine.
          </Step>
          <Step n={6}>
            When you’re done, do a quick check at{" "}
            <Path>/lagerbaren/lunch</Path> or{" "}
            <Path>/masala-art/lunch</Path> on the site. Wait ~5 min if it’s
            not visible right away.
          </Step>
        </Steps>
        <Callout type="tip">
          Try to do a whole week at once — Sunday or Monday morning. Then you
          avoid leaving a half-finished change live for several days.
        </Callout>

        <h2 id="current">Change the current week’s menu</h2>
        <p>
          If a dish runs out — or you swap one mid-week — here’s how:
        </p>
        <Steps>
          <Step n={1}>
            Open the dish in <Path>Collections → Lunchmeny</Path>.
          </Step>
          <Step n={2}>
            <strong>Option A</strong> — remove the dish for one or more days:
            untick the day in <FieldName>Veckodagar</FieldName> and save.
          </Step>
          <Step n={3}>
            <strong>Option B</strong> — replace the dish: change name,
            description, and price directly on the entry. Save.
          </Step>
          <Step n={4}>
            <strong>Option C</strong> — a brand new dish mid-week: click{" "}
            <Path>+ Create</Path>, fill in the fields, only tick the days
            remaining in the week. Save.
          </Step>
        </Steps>

        <h2>Change the weekly lunch price</h2>
        <p>
          This is the <em>general</em> weekly lunch price, not the price of an
          individual dish.
        </p>
        <Steps>
          <Step n={1}>
            Go to <Path>Singletons → Lunchinfo</Path>.
          </Step>
          <Step n={2}>
            Change <FieldName>Pris veckans lunch</FieldName> (Weekly lunch
            price).
          </Step>
          <Step n={3}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>

        <h2>Change lunch hours</h2>
        <Steps>
          <Step n={1}>
            Go to <Path>Singletons → Lunchinfo</Path>.
          </Step>
          <Step n={2}>
            Change <FieldName>Lunchtider Lagerbaren</FieldName> (Lagerbaren
            lunch hours) and/or{" "}
            <FieldName>Lunchtider Masala Art</FieldName> (Masala Art lunch
            hours).
          </Step>
          <Step n={3}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>
        <Callout type="note">
          Hours for the rest of the day live on <Path>Om Lagerbaren</Path>{" "}
          and <Path>Om Masala Art</Path>. See{" "}
          <Link href="/en/help/hours-contact">Hours & contact</Link>.
        </Callout>

        <h2>Update the “favoritbiff”</h2>
        <Steps>
          <Step n={1}>
            Go to <Path>Singletons → Lunchinfo</Path>.
          </Step>
          <Step n={2}>
            Change <FieldName>Favoritbiffen — titel</FieldName> (Favourite
            steak — title), <FieldName>Favoritbiffen — beskrivning</FieldName>{" "}
            (description), and <FieldName>Favoritbiffen — pris</FieldName>{" "}
            (price).
          </Step>
          <Step n={3}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>

        <h2>Closed-message (weekends)</h2>
        <p>
          The <FieldName>Stängt-meddelande (helger)</FieldName> (Closed
          message — weekends) field shows up on the lunch page automatically
          on Saturdays and Sundays. You don’t need to touch it every week —
          the text stays put and only displays when it’s the weekend.
        </p>
      </HelpPage>
    );
  }

  return (
    <HelpPage
      title="Lunch"
      lede="Den här sidan uppdaterar du oftast. Två delar: själva rätterna och den allmänna lunchinfon (pris, tider, vad som ingår)."
    >
      <h2>Två olika ställen att redigera</h2>
      <ul>
        <li>
          <Path>Collections → Lunchmeny</Path> — själva rätterna. Varje rätt är
          en post med namn, beskrivning, pris, varumärke och vilka veckodagar
          den serveras.
        </li>
        <li>
          <Path>Singletons → Lunchinfo</Path> — den allmänna informationen som
          ligger runt omkring: veckans pris, vad som ingår, lunchtider,
          favoritbiffen, stängt-meddelande för helger.
        </li>
      </ul>

      <h2>Hur rotationen fungerar</h2>
      <p>
        Varje rätt har ett <FieldName>Varumärke</FieldName> (Lagerbaren eller
        Masala Art) och en lista med <FieldName>Veckodagar</FieldName>. Rätten
        visas bara på de dagar du kryssat i. Du kan alltså ha olika rätter
        olika dagar, eller samma rätt hela veckan.
      </p>

      <h2 id="nasta-vecka">Uppdatera nästa veckas lunch</h2>
      <p>
        Det enklaste är att redigera föregående veckas rätter direkt — byta ut
        namn, beskrivning och pris, och låta dagarna vara. Så slipper du skapa
        nya poster varje vecka.
      </p>
      <Steps>
        <Step n={1}>
          Gå till <Path>Collections → Lunchmeny</Path>.
        </Step>
        <Step n={2}>
          Klicka på den första rätten du vill byta ut. Ändra{" "}
          <FieldName>Namn</FieldName>, <FieldName>Beskrivning</FieldName> och{" "}
          <FieldName>Pris</FieldName>.
        </Step>
        <Step n={3}>
          Kontrollera att <FieldName>Varumärke</FieldName> och{" "}
          <FieldName>Veckodagar</FieldName> stämmer.
        </Step>
        <Step n={4}>
          Klicka <Path>Save</Path>.
        </Step>
        <Step n={5}>
          Upprepa för varje rätt. Spara en i taget — det är lugnt.
        </Step>
        <Step n={6}>
          När alla är uppdaterade: kolla snabbt <Path>/lagerbaren/lunch</Path>{" "}
          eller <Path>/masala-art/lunch</Path> på sajten. Vänta ~5 min om det
          inte syns direkt.
        </Step>
      </Steps>
      <Callout type="tip">
        Jobba gärna en hel måndag eller söndag, lägg upp hela veckans menu på
        en gång. Då slipper du göra en halv ändring som ligger live i flera
        dagar.
      </Callout>

      <h2 id="pagaende">Ändra pågående veckas meny</h2>
      <p>
        Om en rätt tar slut — eller om ni byter ut den mitt i veckan — gör du
        så här:
      </p>
      <Steps>
        <Step n={1}>
          Öppna rätten i <Path>Collections → Lunchmeny</Path>.
        </Step>
        <Step n={2}>
          <strong>Alternativ A</strong> — ta bort rätten för en eller flera
          dagar: avmarkera den dagen i <FieldName>Veckodagar</FieldName> och
          spara.
        </Step>
        <Step n={3}>
          <strong>Alternativ B</strong> — byt ut rätten: ändra namn,
          beskrivning och pris direkt på posten. Spara.
        </Step>
        <Step n={4}>
          <strong>Alternativ C</strong> — helt ny rätt mitt i veckan: klicka{" "}
          <Path>+ Create</Path>, fyll i fälten, sätt bara de dagar som
          återstår i veckan. Spara.
        </Step>
      </Steps>

      <h2>Byta pris på veckans lunch</h2>
      <p>
        Det här är veckans <em>generella</em> lunchpris, inte priset på en
        enskild rätt.
      </p>
      <Steps>
        <Step n={1}>
          Gå till <Path>Singletons → Lunchinfo</Path>.
        </Step>
        <Step n={2}>
          Ändra <FieldName>Pris veckans lunch</FieldName>.
        </Step>
        <Step n={3}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>

      <h2>Ändra lunchtider</h2>
      <Steps>
        <Step n={1}>
          Gå till <Path>Singletons → Lunchinfo</Path>.
        </Step>
        <Step n={2}>
          Ändra <FieldName>Lunchtider Lagerbaren</FieldName> och/eller{" "}
          <FieldName>Lunchtider Masala Art</FieldName>.
        </Step>
        <Step n={3}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>
      <Callout type="note">
        Öppettider för resten av dagen ligger på <Path>Om Lagerbaren</Path>{" "}
        och <Path>Om Masala Art</Path>. Se{" "}
        <Link href="/help/oppettider">Öppettider & kontakt</Link>.
      </Callout>

      <h2>Uppdatera ”favoritbiffen”</h2>
      <Steps>
        <Step n={1}>
          Gå till <Path>Singletons → Lunchinfo</Path>.
        </Step>
        <Step n={2}>
          Ändra <FieldName>Favoritbiffen — titel</FieldName>,{" "}
          <FieldName>Favoritbiffen — beskrivning</FieldName> och{" "}
          <FieldName>Favoritbiffen — pris</FieldName>.
        </Step>
        <Step n={3}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>

      <h2>Stängt-meddelande (helger)</h2>
      <p>
        Fältet <FieldName>Stängt-meddelande (helger)</FieldName> visas
        automatiskt på lunchsidan på lördagar och söndagar. Du behöver inte
        röra det varje vecka — texten står kvar och visas bara när det är
        helg.
      </p>
    </HelpPage>
  );
}
