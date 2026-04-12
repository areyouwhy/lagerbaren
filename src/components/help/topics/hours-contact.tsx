import { HelpPage } from "../prose";
import { Step, Steps } from "../step";
import { Callout } from "../callout";
import { FieldName } from "../field-name";
import { Path } from "../path";
import type { Locale } from "../nav";

export function HoursContact({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <HelpPage
        title="Hours & contact"
        lede="All contact information — opening hours, phone, email, map, and social links — lives on the about pages for each house."
      >
        <p className="!mb-8 text-sm text-zinc-500">
          The Keystatic admin UI is in Swedish, so this page keeps the
          Swedish field labels you’ll actually see (with English in
          parentheses on first mention).
        </p>

        <h2>Where things live</h2>
        <p>
          Lagerbaren and Masala Art each have their own singleton with their
          own contact info. That means the houses can have different phones,
          emails, and hours — but both are managed the same way.
        </p>
        <ul>
          <li>
            <Path>Singletons → Om Lagerbaren</Path> (About Lagerbaren) —
            Lagerbaren’s info.
          </li>
          <li>
            <Path>Singletons → Om Masala Art</Path> (About Masala Art) —
            Masala Art’s info.
          </li>
        </ul>
        <Callout type="note">
          Lunch hours are a separate field. See the Lunch help page if that’s
          what you’re trying to update.
        </Callout>

        <h2 id="hours">Change opening hours</h2>
        <Steps>
          <Step n={1}>
            Go to <Path>Singletons → Om Lagerbaren</Path> (or{" "}
            <Path>Om Masala Art</Path>).
          </Step>
          <Step n={2}>
            Find <FieldName>Öppettider vardagar</FieldName> (Weekday hours)
            and <FieldName>Öppettider helg</FieldName> (Weekend hours). Write
            the hours the way you want them displayed — e.g.{" "}
            <em>Mon–Thu 11–24</em>.
          </Step>
          <Step n={3}>
            Do the same in English if you want the EN pages translated.
            Otherwise the Swedish version shows there too.
          </Step>
          <Step n={4}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>
        <Callout type="tip">
          Keep the same format on weekdays and weekends — that way it looks
          consistent on the site. E.g. always <em>Mon–Thu 11–24</em> and{" "}
          <em>Fri–Sun 11–02</em>, not mixed styles.
        </Callout>

        <h2>Change the phone number</h2>
        <Steps>
          <Step n={1}>
            Go to the right singleton (<Path>Om Lagerbaren</Path> or{" "}
            <Path>Om Masala Art</Path>).
          </Step>
          <Step n={2}>
            Change <FieldName>Telefon</FieldName> (Phone). Write it the way
            you want it displayed, e.g. <em>08-643 18 08</em>.
          </Step>
          <Step n={3}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>
        <Callout type="warning">
          The number shows up in the header, footer, and the contact page.
          Double-check before saving — a wrong number is worse than no number.
        </Callout>

        <h2>Change the booking email</h2>
        <Steps>
          <Step n={1}>Open the right about page in Keystatic.</Step>
          <Step n={2}>
            Change <FieldName>Bokningsemail</FieldName> (Booking email) to the
            new address.
          </Step>
          <Step n={3}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>

        <h2>Change the address</h2>
        <Steps>
          <Step n={1}>Go to the right singleton.</Step>
          <Step n={2}>
            Change <FieldName>Adress rad 1</FieldName> (Address line 1) and{" "}
            <FieldName>Adress rad 2</FieldName> (Address line 2). Line 1 is
            typically street + number, line 2 is postcode + city — but write
            it however you want it displayed.
          </Step>
          <Step n={3}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>

        <h2>Change the map (Google Maps)</h2>
        <Steps>
          <Step n={1}>
            Open <a href="https://www.google.com/maps">Google Maps</a> and
            search for the address.
          </Step>
          <Step n={2}>
            Click <strong>Share</strong> → the <strong>Embed a map</strong>{" "}
            tab → <strong>COPY HTML</strong>.
          </Step>
          <Step n={3}>Go to the right singleton in Keystatic.</Step>
          <Step n={4}>
            Paste the entire <code>&lt;iframe&gt;</code> code into{" "}
            <FieldName>Google Maps embed</FieldName>.
          </Step>
          <Step n={5}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>
        <Callout type="note">
          Paste the <em>entire</em> iframe tag, including{" "}
          <code>&lt;iframe …&gt;</code> and <code>&lt;/iframe&gt;</code>. If
          you only paste the URL it won’t work.
        </Callout>

        <h2>Instagram and Facebook</h2>
        <Steps>
          <Step n={1}>Go to the right singleton.</Step>
          <Step n={2}>
            Fill in <FieldName>Instagram</FieldName> — either the username
            (e.g. <em>masalaartsodermalm</em>) or the full URL.
          </Step>
          <Step n={3}>
            Same for <FieldName>Facebook</FieldName>.
          </Step>
          <Step n={4}>
            Click <Path>Save</Path>.
          </Step>
        </Steps>
        <Callout type="tip">
          Leave the field empty if you don’t want to show the link at all. It
          then disappears from the header and footer.
        </Callout>
      </HelpPage>
    );
  }

  return (
    <HelpPage
      title="Öppettider & kontakt"
      lede="All kontaktinformation — öppettider, telefon, email, karta och sociala länkar — ligger på om-sidorna för respektive hus."
    >
      <h2>Var saker ligger</h2>
      <p>
        Lagerbaren och Masala Art har var sin singleton med sin egen
        kontaktinfo. Det betyder att husen kan ha olika telefon, email och
        öppettider — men båda hanteras likadant.
      </p>
      <ul>
        <li>
          <Path>Singletons → Om Lagerbaren</Path> — Lagerbarens info.
        </li>
        <li>
          <Path>Singletons → Om Masala Art</Path> — Masala Arts info.
        </li>
      </ul>
      <Callout type="note">
        Lunchtider är ett separat fält. Se Lunch-hjälpsidan om det är lunch du
        vill uppdatera.
      </Callout>

      <h2 id="tider">Byta öppettider</h2>
      <Steps>
        <Step n={1}>
          Gå till <Path>Singletons → Om Lagerbaren</Path> (eller{" "}
          <Path>Om Masala Art</Path>).
        </Step>
        <Step n={2}>
          Hitta <FieldName>Öppettider vardagar</FieldName> och{" "}
          <FieldName>Öppettider helg</FieldName>. Skriv tiderna som de ska
          visas — t.ex. <em>Mån–Tors 11–24</em>.
        </Step>
        <Step n={3}>
          Gör samma sak på engelska om du vill ha EN-sidorna översatta.
          Annars visas svenskan även där.
        </Step>
        <Step n={4}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>
      <Callout type="tip">
        Håll samma format på vardagar och helg — då ser det snyggt ut på
        sajten. T.ex. alltid <em>Mån–Tors 11–24</em> och{" "}
        <em>Fre–Sön 11–02</em>, inte blandat.
      </Callout>

      <h2>Byta telefonnummer</h2>
      <Steps>
        <Step n={1}>
          Gå till rätt singleton (<Path>Om Lagerbaren</Path> eller{" "}
          <Path>Om Masala Art</Path>).
        </Step>
        <Step n={2}>
          Ändra <FieldName>Telefon</FieldName>. Skriv som ni vill att det ska
          visas, t.ex. <em>08-643 18 08</em>.
        </Step>
        <Step n={3}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>
      <Callout type="warning">
        Numret visas i sidhuvudet, sidfoten och på kontaktsidan. Dubbelkolla
        att det stämmer innan du sparar — ett felskrivet nummer är värre än
        inget.
      </Callout>

      <h2>Byta bokningsemail</h2>
      <Steps>
        <Step n={1}>Öppna rätt om-sida i Keystatic.</Step>
        <Step n={2}>
          Ändra <FieldName>Bokningsemail</FieldName> till den nya adressen.
        </Step>
        <Step n={3}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>

      <h2>Byta adress</h2>
      <Steps>
        <Step n={1}>Gå till rätt singleton.</Step>
        <Step n={2}>
          Ändra <FieldName>Adress rad 1</FieldName> och{" "}
          <FieldName>Adress rad 2</FieldName>. Rad 1 är typiskt gata + nummer,
          rad 2 är postnummer + ort — men skriv som ni vill att det ska visas.
        </Step>
        <Step n={3}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>

      <h2>Byta karta (Google Maps)</h2>
      <Steps>
        <Step n={1}>
          Öppna <a href="https://www.google.com/maps">Google Maps</a> och sök
          upp adressen.
        </Step>
        <Step n={2}>
          Klicka <strong>Share</strong> → fliken <strong>Embed a map</strong>{" "}
          → <strong>COPY HTML</strong>.
        </Step>
        <Step n={3}>Gå till rätt singleton i Keystatic.</Step>
        <Step n={4}>
          Klistra in hela <code>&lt;iframe&gt;</code>-koden i{" "}
          <FieldName>Google Maps embed</FieldName>.
        </Step>
        <Step n={5}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>
      <Callout type="note">
        Klistra in <em>hela</em> iframe-taggen inklusive{" "}
        <code>&lt;iframe …&gt;</code> och <code>&lt;/iframe&gt;</code>. Om du
        bara klistrar in URL:en funkar det inte.
      </Callout>

      <h2>Instagram och Facebook</h2>
      <Steps>
        <Step n={1}>Gå till rätt singleton.</Step>
        <Step n={2}>
          Fyll i <FieldName>Instagram</FieldName> — antingen användarnamnet
          (t.ex. <em>masalaartsodermalm</em>) eller hela URL:en.
        </Step>
        <Step n={3}>
          Samma för <FieldName>Facebook</FieldName>.
        </Step>
        <Step n={4}>
          Klicka <Path>Save</Path>.
        </Step>
      </Steps>
      <Callout type="tip">
        Lämna fältet tomt om ni inte vill visa länken alls. Den försvinner då
        från sidhuvudet och sidfoten.
      </Callout>
    </HelpPage>
  );
}
