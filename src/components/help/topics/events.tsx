import { HelpPage } from "../prose";
import { Step, Steps } from "../step";
import { Callout } from "../callout";
import { FieldName } from "../field-name";
import { Path } from "../path";
import type { Locale } from "../nav";

export function Events({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <HelpPage
        title="Events"
        lede="Sports nights, the quiz, live music, special evenings. Here’s how to create and manage events."
      >
        <p className="!mb-8 text-sm text-zinc-500">
          The Keystatic admin UI is in Swedish, so this page keeps the
          Swedish field labels you’ll actually see (with English in
          parentheses on first mention).
        </p>

        <h2>How events show up on the site</h2>
        <ul>
          <li>
            <strong>Event list</strong> (<Path>/lagerbaren/event</Path>) shows
            all upcoming events sorted by date. Featured ones go on top.
          </li>
          <li>
            <strong>Home page</strong> shows the next 5 upcoming events.
          </li>
          <li>
            <strong>Recurring events</strong> (e.g. the Wednesday quiz) always
            appear as upcoming — they never disappear after the day passes.
          </li>
          <li>
            <strong>Past events</strong> — once the date passes, the event
            moves to history automatically. You don’t need to delete it.
          </li>
        </ul>

        <h2 id="one-off">Create a one-off event</h2>
        <p>For example a World Cup final or a special evening with a fixed date.</p>
        <Steps>
          <Step n={1}>
            Go to <Path>Collections → Event</Path> (Events) and click{" "}
            <Path>+ Create</Path>.
          </Step>
          <Step n={2}>
            Fill in <FieldName>Titel</FieldName> (Title). It also becomes the
            URL, so keep it short and avoid weird characters.
          </Step>
          <Step n={3}>
            Fill in <FieldName>Kort beskrivning</FieldName> (Short description,
            shown in the list) and <FieldName>Lång text</FieldName> (Long text,
            shown on the event page). Use blank lines between paragraphs.
          </Step>
          <Step n={4}>
            Set <FieldName>Datum</FieldName> (Date),{" "}
            <FieldName>Tid</FieldName> (Time), and{" "}
            <FieldName>Varumärke</FieldName> (Brand: Lagerbaren / Masala Art /
            Båda).
          </Step>
          <Step n={5}>
            Pick <FieldName>Typ</FieldName> (Type: Sport, Quiz, Musik, or
            Övrigt).
          </Step>
          <Step n={6}>
            <strong>Leave</strong> <FieldName>Återkommande</FieldName>{" "}
            (Recurring) <strong>unchecked</strong>. That checkbox is only for
            events that repeat every week.
          </Step>
          <Step n={7}>
            Add a <FieldName>Hero-bild</FieldName> (Hero image) if you can —
            it shows up large on the event page and in the list.
          </Step>
          <Step n={8}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>

        <h2 id="recurring">Create a recurring event</h2>
        <p>
          For example the weekly quiz or a regular sport club meet that
          happens on the same weekday every week.
        </p>
        <Steps>
          <Step n={1}>
            Go to <Path>Collections → Event</Path> and click{" "}
            <Path>+ Create</Path>.
          </Step>
          <Step n={2}>
            Fill in <FieldName>Titel</FieldName> and the descriptions as
            usual.
          </Step>
          <Step n={3}>
            For <FieldName>Datum</FieldName> — pick any future date (it’s only
            used internally for sorting). The event shows up regardless.
          </Step>
          <Step n={4}>
            Set <FieldName>Tid</FieldName> (e.g. <em>19:00</em>).
          </Step>
          <Step n={5}>
            <strong>Tick</strong> <FieldName>Återkommande</FieldName>.
          </Step>
          <Step n={6}>
            Pick <FieldName>Återkommande dag</FieldName> (Recurring day, e.g.
            Onsdag for Wednesday). That’s what shows up as the badge on the
            event.
          </Step>
          <Step n={7}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>
        <Callout type="warning">
          Never tick Recurring on a one-off event — it’ll stay there forever
          and confuse guests.
        </Callout>

        <h2 id="update">Update an existing event</h2>
        <Steps>
          <Step n={1}>
            Go to <Path>Collections → Event</Path>. Click the event in the
            list.
          </Step>
          <Step n={2}>
            Change what you need — date, time, description, hero image.
          </Step>
          <Step n={3}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>

        <h2>Feature an event</h2>
        <p>
          To pin an event to the top of the list and to the home page:
        </p>
        <Steps>
          <Step n={1}>Open the event.</Step>
          <Step n={2}>
            Tick <FieldName>Utvalt</FieldName> (Featured).
          </Step>
          <Step n={3}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>
        <Callout type="tip">
          Keep only a few featured events at a time — otherwise the
          distinction loses its meaning.
        </Callout>

        <h2>Add a booking link</h2>
        <p>
          Does the event have a separate ticket page or booking form? Paste
          the full URL into the <FieldName>Bokningslänk</FieldName> (Booking
          link) field. A button then appears on the event page.
        </p>

        <h2>Delete an event</h2>
        <p>
          Most events you don’t need to delete — once the date passes they
          move to history automatically. But to actually remove one:
        </p>
        <Steps>
          <Step n={1}>Open the event.</Step>
          <Step n={2}>
            Click <Path>Delete entry</Path> at the top.
          </Step>
          <Step n={3}>Confirm.</Step>
        </Steps>
      </HelpPage>
    );
  }

  return (
    <HelpPage
      title="Event"
      lede="Sportkvällar, quizen, livemusik, specialkvällar. Så här skapar och hanterar du event."
    >
      <h2>Hur event visas på sajten</h2>
      <ul>
        <li>
          <strong>Eventlistan</strong> (<Path>/lagerbaren/event</Path>) visar
          alla kommande event sorterade efter datum. Utvalda ligger överst.
        </li>
        <li>
          <strong>Startsidan</strong> visar de 5 närmast kommande eventen.
        </li>
        <li>
          <strong>Återkommande event</strong> (t.ex. onsdagsquizen) visas
          alltid som kommande — de försvinner aldrig efter att dagen passerat.
        </li>
        <li>
          <strong>Gamla event</strong> — när datumet passerat flyttas eventet
          automatiskt till historiken. Du behöver inte ta bort det.
        </li>
      </ul>

      <h2 id="engangs">Skapa ett engångs-event</h2>
      <p>Till exempel en VM-final eller en specialkväll med ett bestämt datum.</p>
      <Steps>
        <Step n={1}>
          Gå till <Path>Collections → Event</Path> och klicka{" "}
          <Path>+ Create</Path>.
        </Step>
        <Step n={2}>
          Fyll i <FieldName>Titel</FieldName>. Det blir också sidans adress, så
          håll den kort och utan konstiga tecken.
        </Step>
        <Step n={3}>
          Fyll i <FieldName>Kort beskrivning</FieldName> (visas i listan) och{" "}
          <FieldName>Lång text</FieldName> (visas på eventsidan). Använd
          blankrad mellan stycken.
        </Step>
        <Step n={4}>
          Sätt <FieldName>Datum</FieldName>, <FieldName>Tid</FieldName> och{" "}
          <FieldName>Varumärke</FieldName> (Lagerbaren / Masala Art / Båda).
        </Step>
        <Step n={5}>
          Välj <FieldName>Typ</FieldName> (Sport, Quiz, Musik eller Övrigt).
        </Step>
        <Step n={6}>
          <strong>Lämna</strong> <FieldName>Återkommande</FieldName>{" "}
          <strong>omarkerad</strong>. Den kryssrutan är bara för event som
          upprepas varje vecka.
        </Step>
        <Step n={7}>
          Lägg gärna till en <FieldName>Hero-bild</FieldName> — den visas stor
          på eventsidan och i listan.
        </Step>
        <Step n={8}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>

      <h2 id="aterkommande">Skapa ett återkommande event</h2>
      <p>
        Till exempel veckans quiz eller ett fast sportklubbs-möte som händer
        samma veckodag varje vecka.
      </p>
      <Steps>
        <Step n={1}>
          Gå till <Path>Collections → Event</Path> och klicka{" "}
          <Path>+ Create</Path>.
        </Step>
        <Step n={2}>
          Fyll i <FieldName>Titel</FieldName> och beskrivningarna som vanligt.
        </Step>
        <Step n={3}>
          För <FieldName>Datum</FieldName> — välj valfritt framtida datum
          (används bara internt för sortering). Eventet visas oavsett.
        </Step>
        <Step n={4}>
          Sätt <FieldName>Tid</FieldName> (t.ex. <em>19:00</em>).
        </Step>
        <Step n={5}>
          <strong>Kryssa i</strong> <FieldName>Återkommande</FieldName>.
        </Step>
        <Step n={6}>
          Välj <FieldName>Återkommande dag</FieldName> (t.ex. Onsdag). Det är
          det som visas som etikett på eventet.
        </Step>
        <Step n={7}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>
      <Callout type="warning">
        Sätt <em>aldrig</em> Återkommande på ett engångs-event — då ligger det
        kvar för evigt och förvirrar gäster.
      </Callout>

      <h2 id="uppdatera">Uppdatera ett befintligt event</h2>
      <Steps>
        <Step n={1}>
          Gå till <Path>Collections → Event</Path>. Klicka på eventet i listan.
        </Step>
        <Step n={2}>
          Ändra det du behöver — datum, tid, beskrivning, hero-bild.
        </Step>
        <Step n={3}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>

      <h2>Lyfta fram ett event</h2>
      <p>
        För att visa ett event överst på listan och på startsidan:
      </p>
      <Steps>
        <Step n={1}>Öppna eventet.</Step>
        <Step n={2}>
          Kryssa i <FieldName>Utvalt</FieldName>.
        </Step>
        <Step n={3}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>
      <Callout type="tip">
        Ha bara ett fåtal utvalda event samtidigt — annars tappar utmärkelsen
        sin mening.
      </Callout>

      <h2>Lägga till en bokningslänk</h2>
      <p>
        Har eventet en separat biljettsida eller ett bokningsformulär? Klistra
        in hela URL:en i fältet <FieldName>Bokningslänk</FieldName>. Då dyker
        en knapp upp på eventsidan.
      </p>

      <h2>Ta bort ett event</h2>
      <p>
        De flesta event behöver du inte ta bort — när datumet passerat flyttas
        de automatiskt till historiken. Men om du vill radera ett:
      </p>
      <Steps>
        <Step n={1}>Öppna eventet.</Step>
        <Step n={2}>
          Klicka <Path>Delete entry</Path> högst upp och bekräfta.
        </Step>
      </Steps>
    </HelpPage>
  );
}
