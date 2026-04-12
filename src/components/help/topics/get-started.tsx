import Link from "next/link";
import { HelpPage } from "../prose";
import { Step, Steps } from "../step";
import { Callout } from "../callout";
import { Kbd } from "../kbd";
import { Path } from "../path";
import type { Locale } from "../nav";

export function GetStarted({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <HelpPage
        title="Get started"
        lede="All site content is edited in Keystatic. Here’s how to log in and find your way around."
      >
        <h2>Log in</h2>
        <Steps>
          <Step n={1}>
            Go to <Link href="/keystatic">/keystatic</Link> on the site (e.g.{" "}
            <code>lagerbaren.vercel.app/keystatic</code>).
          </Step>
          <Step n={2}>
            Click <strong>Sign in with GitHub</strong>. The first time you’ll
            be sent to GitHub to grant access.
          </Step>
          <Step n={3}>
            Once you’re back, you’re logged in. Sessions last a while — next
            time it’ll be quicker.
          </Step>
        </Steps>
        <Callout type="note">
          You need a GitHub account that has been added to the{" "}
          <code>areyouwhy/lagerbaren</code> repo. Contact the developer if
          login isn’t working — your account may need to be added.
        </Callout>

        <h2>What Keystatic looks like</h2>
        <p>The left sidebar is split in two:</p>
        <ul>
          <li>
            <strong>Collections</strong> — lists of entries. All menus, events,
            stories, and the photo strip live here. A collection holds many
            entries of the same type.
          </li>
          <li>
            <strong>Singletons</strong> — fixed pages that exist only once: the
            about-page text, the party venue page, the lunch info.
          </li>
        </ul>

        <h2>Save = publish</h2>
        <p>
          There are no drafts and no preview outside the edit screen.{" "}
          <strong>When you click Save, the change goes live.</strong> The site
          rebuilds automatically and the new version is up within ~5 minutes.
        </p>
        <Callout type="tip">
          Before you save — proofread in the edit screen. That’s where you
          catch typos, not on the public site afterwards.
        </Callout>

        <h2>Don’t see your change on the site?</h2>
        <Steps>
          <Step n={1}>
            Wait ~5 minutes. The site rebuilds in the background after every
            save.
          </Step>
          <Step n={2}>
            Force a hard refresh in your browser:{" "}
            <Kbd>Cmd</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> (Mac) or{" "}
            <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> (Windows).
          </Step>
          <Step n={3}>
            Still nothing? See{" "}
            <Link href="/en/help/troubleshooting">Troubleshooting</Link>.
          </Step>
        </Steps>

        <h2>Two languages: Swedish and English</h2>
        <p>
          Most text fields have two boxes: <strong>Svenska</strong> (Swedish)
          and <strong>English (valfritt)</strong> (optional). Swedish is
          always required. If English is empty, Swedish shows up on the
          English site too — so you can translate later (or never) without
          breaking anything. More in{" "}
          <Link href="/en/help/languages">Swedish & English</Link>.
        </p>

        <h2>Good to know</h2>
        <ul>
          <li>
            You can leave a page without saving — nothing is sent until you
            click <Path>Save</Path>.
          </li>
          <li>
            If you change your mind before saving: click <Path>Reset</Path> or
            navigate away.
          </li>
          <li>
            Already saved and regret it? Contact the developer — every previous
            version is kept.
          </li>
        </ul>
      </HelpPage>
    );
  }

  return (
    <HelpPage
      title="Kom igång"
      lede="Allt innehåll på sajten redigeras i Keystatic. Så här loggar du in och hittar rätt."
    >
      <h2>Logga in</h2>
      <Steps>
        <Step n={1}>
          Gå till <Link href="/keystatic">/keystatic</Link> på sajten (t.ex.{" "}
          <code>lagerbaren.vercel.app/keystatic</code>).
        </Step>
        <Step n={2}>
          Klicka på <strong>Sign in with GitHub</strong>. Du skickas till GitHub
          för att godkänna åtkomst första gången.
        </Step>
        <Step n={3}>
          När du kommer tillbaka är du inloggad. Du stannar inloggad ett tag —
          nästa gång går det snabbare.
        </Step>
      </Steps>
      <Callout type="note">
        Du behöver ett GitHub-konto som har blivit tillagt i repot{" "}
        <code>areyouwhy/lagerbaren</code>. Kontakta utvecklaren om inloggningen
        inte funkar — då behöver vi lägga till ditt konto.
      </Callout>

      <h2>Så ser Keystatic ut</h2>
      <p>Vänstermenyn är uppdelad i två delar:</p>
      <ul>
        <li>
          <strong>Collections</strong> — listor med poster. Hit hör alla menyer,
          event, berättelser och bildremsan. En collection innehåller många
          poster av samma typ.
        </li>
        <li>
          <strong>Singletons</strong> — fasta sidor som bara finns i ett
          exemplar: startsidornas om-text, festväningen, lunchinfo.
        </li>
      </ul>

      <h2>Spar = publicera</h2>
      <p>
        Det finns inga utkast eller förhandsgranskningar utanför
        redigeringsvyn. <strong>När du klickar Save publiceras ändringen.</strong>{" "}
        Sajten bygger om automatiskt och den nya versionen är live inom ~5
        minuter.
      </p>
      <Callout type="tip">
        Innan du sparar — granska texten i redigeringsvyn. Det är där du fångar
        stavfel, inte på den publika sajten efteråt.
      </Callout>

      <h2>Ser du inte ändringen på sajten?</h2>
      <Steps>
        <Step n={1}>
          Vänta ~5 minuter. Sajten bygger om i bakgrunden efter varje spar.
        </Step>
        <Step n={2}>
          Tvinga en hård omladdning i webbläsaren:{" "}
          <Kbd>Cmd</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> (Mac) eller{" "}
          <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> (Windows).
        </Step>
        <Step n={3}>
          Funkar det fortfarande inte? Se{" "}
          <Link href="/help/problem">Vanliga problem</Link>.
        </Step>
      </Steps>

      <h2>Två språk: svenska och engelska</h2>
      <p>
        Varje textfält har två rutor: <strong>Svenska</strong> och{" "}
        <strong>English (valfritt)</strong>. Svenskan är alltid obligatorisk.
        Om engelskan är tom visas svenska även på den engelska sajten — så du
        kan översätta senare utan att något går sönder. Läs mer i{" "}
        <Link href="/help/sprak">Svenska & engelska</Link>.
      </p>

      <h2>Bra att veta</h2>
      <ul>
        <li>
          Du kan lämna en sida utan att spara — ingenting skickas förrän du
          klickar <Path>Save</Path>.
        </li>
        <li>
          Om du ångrar dig innan du sparat: klicka <Path>Reset</Path> eller
          lämna sidan.
        </li>
        <li>
          Har du redan sparat och ångrar dig? Kontakta utvecklaren — alla
          tidigare versioner finns sparade.
        </li>
      </ul>
    </HelpPage>
  );
}
