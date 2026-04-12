import Link from "next/link";
import { HelpPage } from "../prose";
import { Callout } from "../callout";
import { Kbd } from "../kbd";
import type { Locale } from "../nav";

export function Troubleshooting({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <HelpPage
        title="Troubleshooting"
        lede="Things that tend to happen — and what you can do about them yourself before contacting the developer."
      >
        <h2>“I saved but I don’t see it on the site”</h2>
        <p>This is the absolute most common question. Almost always one of these three:</p>
        <ol className="mb-4 list-decimal pl-5 [&>li]:mb-2">
          <li>
            <strong>The site is still rebuilding.</strong> Wait 5 minutes.
            Every save triggers an automatic rebuild — it takes a couple of
            minutes.
          </li>
          <li>
            <strong>Your browser cached the old version.</strong> Force a
            hard refresh: <Kbd>Cmd</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd>{" "}
            (Mac) or <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd>{" "}
            (Windows).
          </li>
          <li>
            <strong>You never actually saved.</strong> Go back to Keystatic
            and double-check that the field really looks changed. Click{" "}
            <em>Save</em> once more.
          </li>
        </ol>

        <h2>“An image looks weird on mobile”</h2>
        <p>
          Usually it’s the cropping on a hero image. Try changing the{" "}
          <em>Hero focus point</em> on the same page where the image lives,
          or swap to an image with more breathing room around the subject.
          See <Link href="/en/help/images">Images</Link>.
        </p>

        <h2>“I accidentally deleted something”</h2>
        <p>
          Contact the developer. Everything done in Keystatic is saved in the
          site’s history, so it’s almost always possible to bring back an old
          version — a menu, an event, a whole page.
        </p>
        <Callout type="note">
          The faster you reach out, the easier. But even after several months
          the history is still there.
        </Callout>

        <h2>“I can’t log in to Keystatic”</h2>
        <p>A few common causes:</p>
        <ul>
          <li>You’re not logged in to the right GitHub account in your browser.</li>
          <li>Your GitHub account hasn’t been added to the site’s repo yet.</li>
          <li>
            Your browser is blocking cookies. Try a different browser or a
            private window.
          </li>
        </ul>
        <p>If none of that helps — contact the developer.</p>

        <h2>“I can’t upload an image”</h2>
        <ul>
          <li>Check that the image is under ~2 MB. Bigger files cause trouble.</li>
          <li>
            File format should be <code>.jpg</code>, <code>.png</code>,{" "}
            <code>.webp</code>, or <code>.svg</code>.
          </li>
          <li>
            If the upload freezes — try again in a moment, or upload a
            smaller version of the image.
          </li>
        </ul>

        <h2>“I saved but Keystatic is showing an error”</h2>
        <p>
          Sometimes the GitHub session has expired. Log out and back in to
          Keystatic (top-right corner). If the error keeps coming back, take
          a screenshot of the message and send it to the developer.
        </p>

        <h2>Still stuck?</h2>
        <p>Contact the developer. When you write — please include:</p>
        <ul>
          <li>What you were trying to do (e.g. “update the lunch for Friday”).</li>
          <li>Which page / which field you were on.</li>
          <li>What happened (or didn’t happen).</li>
          <li>A screenshot if there’s an error message.</li>
        </ul>
      </HelpPage>
    );
  }

  return (
    <HelpPage
      title="Vanliga problem"
      lede="Saker som brukar hända — och vad du kan göra åt dem själv innan du kontaktar utvecklaren."
    >
      <h2>”Jag sparade men det syns inte på sajten”</h2>
      <p>Det här är den absolut vanligaste frågan. Nästan alltid en av dessa tre:</p>
      <ol className="mb-4 list-decimal pl-5 [&>li]:mb-2">
        <li>
          <strong>Sajten bygger fortfarande om.</strong> Vänta 5 minuter.
          Varje spar triggar en automatisk ombyggnad — den tar ett par
          minuter.
        </li>
        <li>
          <strong>Webbläsaren har cachat den gamla versionen.</strong> Tvinga
          en hård omladdning:{" "}
          <Kbd>Cmd</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> (Mac) eller{" "}
          <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> (Windows).
        </li>
        <li>
          <strong>Du sparade aldrig.</strong> Gå tillbaka till Keystatic och
          dubbelkolla att fältet verkligen ser ändrat ut. Klicka <em>Save</em>{" "}
          en gång till.
        </li>
      </ol>

      <h2>”En bild ser konstig ut på mobilen”</h2>
      <p>
        Oftast är det beskärningen på en hero-bild. Prova att ändra{" "}
        <em>Hero-bildens fokuspunkt</em> på samma sida där bilden ligger,
        eller byt till en bild som har mer utrymme runt motivet. Se{" "}
        <Link href="/help/bilder">Bilder</Link>.
      </p>

      <h2>”Jag råkade ta bort något”</h2>
      <p>
        Kontakta utvecklaren. Allt som görs i Keystatic sparas i sajtens
        historik, så det är nästan alltid möjligt att hämta tillbaka en
        gammal version — en meny, ett event, en hel sida.
      </p>
      <Callout type="note">
        Ju snabbare du hör av dig, desto enklare. Men även efter flera
        månader finns historiken kvar.
      </Callout>

      <h2>”Inloggningen till Keystatic funkar inte”</h2>
      <p>Några vanliga orsaker:</p>
      <ul>
        <li>Du är inte inloggad på rätt GitHub-konto i webbläsaren.</li>
        <li>Ditt GitHub-konto har inte lagts till i sajtens repo ännu.</li>
        <li>
          Webbläsaren blockerar cookies. Prova en annan webbläsare eller ett
          privat fönster.
        </li>
      </ul>
      <p>Om inget av det hjälper — kontakta utvecklaren.</p>

      <h2>”Jag kan inte ladda upp en bild”</h2>
      <ul>
        <li>Kolla att bilden är under ~2 MB. Större filer strular.</li>
        <li>
          Filformatet ska vara <code>.jpg</code>, <code>.png</code>,{" "}
          <code>.webp</code> eller <code>.svg</code>.
        </li>
        <li>
          Om uppladdningen fryser — försök igen en stund senare, eller ladda
          upp en mindre version av bilden.
        </li>
      </ul>

      <h2>”Jag sparade men Keystatic visar ett felmeddelande”</h2>
      <p>
        Ibland kan GitHub-sessionen ha gått ut. Logga ut och in igen i
        Keystatic (uppe i högra hörnet). Om felet kommer tillbaka — ta en
        skärmdump av meddelandet och skicka till utvecklaren.
      </p>

      <h2>Fortfarande stopp?</h2>
      <p>Kontakta utvecklaren. När du skriver — inkludera gärna:</p>
      <ul>
        <li>Vad du försökte göra (t.ex. ”uppdatera lunchen för fredag”).</li>
        <li>Vilken sida / vilket fält du var på.</li>
        <li>Vad som hände eller inte hände.</li>
        <li>Skärmdump om det finns ett felmeddelande.</li>
      </ul>
    </HelpPage>
  );
}
