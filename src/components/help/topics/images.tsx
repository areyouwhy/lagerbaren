import { HelpPage } from "../prose";
import { Callout } from "../callout";
import { FieldName } from "../field-name";
import type { Locale } from "../nav";

export function Images({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <HelpPage
        title="Images"
        lede="How images work in Keystatic — file size, format, focus point, and how to swap them out."
      >
        <p className="!mb-8 text-sm text-zinc-500">
          The Keystatic admin UI is in Swedish, so this page keeps the
          Swedish field labels you’ll actually see (with English in
          parentheses on first mention).
        </p>

        <h2>Upload an image</h2>
        <p>
          All image fields work the same way. You can either drag a file from
          your computer onto the field, or click the field and pick from the
          file browser. When you save, the image is uploaded and becomes part
          of the site.
        </p>

        <h2>Size and format</h2>
        <ul>
          <li>
            <strong>Max ~2 MB per image.</strong> Bigger files slow down the
            site and the content takes up unnecessary space.
          </li>
          <li>
            <strong>1200–1600 px wide</strong> is enough for most things. Hero
            images can go bigger (1600+) to look sharp on large screens.
          </li>
          <li>
            <strong>JPG</strong> for photos (food, bar, ambience).
          </li>
          <li>
            <strong>PNG or SVG</strong> for logos. Ideally with a transparent
            background.
          </li>
        </ul>
        <Callout type="tip">
          Uploading directly from your phone? Check that the file isn’t 8 MB
          first. Use an app like <em>Image Size</em> to shrink it, or resize
          on your computer before uploading.
        </Callout>

        <h2>Hero images and focus points</h2>
        <p>
          Hero images (the big ones at the top of pages) get cropped
          differently on mobile and desktop. If the most important thing in
          the image isn’t in the centre, it’ll get clipped.
        </p>
        <p>
          The fix is the <FieldName>Hero-bildens fokuspunkt</FieldName> (Hero
          focus point) field. Pick the part of the image that should always
          be visible — e.g. <em>Topp</em> (top) if faces sit high, or{" "}
          <em>Botten</em> (bottom) if the interesting bit is closer to the
          ground.
        </p>
        <Callout type="note">
          You won’t see the result inside Keystatic. Save, wait ~5 min, and
          check on the site. Still wrong — try a different focus point or a
          different image.
        </Callout>

        <h2>Swap an image</h2>
        <p>
          Open the entry where the image lives (e.g. a menu dish or an about
          page), drag a new file onto the image field, and save. The old
          image gets replaced.
        </p>

        <h2>Remove an image</h2>
        <p>
          Every image field has a small <strong>x</strong> button or{" "}
          <strong>Remove</strong> link. Click it to clear the field — and
          save.
        </p>
        <Callout type="warning">
          Removing an image from a field doesn’t delete it from the server —
          it stays in the repo. That’s no problem in practice, but worth
          knowing if you ever wonder where old images go.
        </Callout>

        <h2>Reusing the same image</h2>
        <p>
          Each image upload becomes a new file, even if you upload the same
          image twice. It’s not the end of the world, but if you know you’ll
          use the same photo in several places — use a different image for
          variety, or contact the developer if you need something more
          advanced.
        </p>

        <h2>Where the images live</h2>
        <p>
          If you’re curious: every uploaded image is saved to the site’s code
          repo under <code>/images/cms/</code>. You can open any image at its
          own address, e.g.{" "}
          <code>/images/cms/events/world-cup-final/heroImage.jpg</code>.
          You don’t need to worry about that — Keystatic handles all of it.
        </p>
      </HelpPage>
    );
  }

  return (
    <HelpPage
      title="Bilder"
      lede="Hur bilder funkar i Keystatic — upplösning, format, fokuspunkt och hur man byter ut."
    >
      <h2>Ladda upp en bild</h2>
      <p>
        Alla bildfält funkar likadant. Du kan antingen dra en fil från din
        dator direkt till fältet, eller klicka på fältet och välja från
        filbläddraren. När du sparar laddas bilden upp och blir en del av
        sajten.
      </p>

      <h2>Storlek och format</h2>
      <ul>
        <li>
          <strong>Max ~2 MB per bild.</strong> Större filer gör sajten långsam
          och innehållet tar onödig plats.
        </li>
        <li>
          <strong>1200–1600 px bred</strong> räcker för de flesta ändamål.
          Hero-bilder får gärna vara 1600+ för att se skarpa ut på stora
          skärmar.
        </li>
        <li>
          <strong>JPG</strong> för foton (mat, bar, stämning).
        </li>
        <li>
          <strong>PNG eller SVG</strong> för loggor. Helst med transparent
          bakgrund.
        </li>
      </ul>
      <Callout type="tip">
        Ska du ladda upp en bild direkt från mobilen? Kolla först att den inte
        är 8 MB stor. Använd en app som <em>Image Size</em> eller krymp på
        datorn innan du laddar upp.
      </Callout>

      <h2>Hero-bilder och fokuspunkt</h2>
      <p>
        Hero-bilder (de stora bilderna överst på sidor) beskärs olika på
        mobil och desktop. Om det viktigaste i bilden inte ligger i mitten
        kommer det klippas.
      </p>
      <p>
        Lösningen är fältet <FieldName>Hero-bildens fokuspunkt</FieldName>.
        Välj den del av bilden som alltid ska synas — t.ex. <em>Topp</em> om
        ansikten ligger högt upp, eller <em>Botten</em> om det intressanta
        finns närmare marken.
      </p>
      <Callout type="note">
        Du ser inte resultatet direkt i Keystatic. Spara, vänta ~5 min, och
        kolla på sajten. Är det fortfarande fel — prova en annan fokuspunkt
        eller en annan bild.
      </Callout>

      <h2>Byta ut en bild</h2>
      <p>
        Öppna posten där bilden ligger (t.ex. en menyrätt eller en om-sida),
        dra en ny fil till bildfältet, och spara. Den gamla bilden ersätts.
      </p>

      <h2>Ta bort en bild</h2>
      <p>
        I varje bildfält finns en liten <strong>x</strong>-knapp eller{" "}
        <strong>Remove</strong>-länk. Klicka där för att rensa fältet — och
        spara.
      </p>
      <Callout type="warning">
        Att ta bort en bild från ett fält raderar den inte från servern — den
        ligger kvar i repot. Det är inget problem rent praktiskt, men värt
        att känna till om du undrar var gamla bilder tar vägen.
      </Callout>

      <h2>Återanvända samma bild</h2>
      <p>
        Varje bilduppladdning blir en ny fil, även om du laddar upp samma bild
        två gånger. Det är inte hela världen, men om du vet att du kommer
        använda samma foto på flera ställen — använd en annan bild på det
        andra stället för variation, eller kontakta utvecklaren om det gäller
        något mer avancerat.
      </p>

      <h2>Var bilderna hamnar</h2>
      <p>
        Om du är nyfiken: alla uppladdade bilder sparas i sajtens kodarkiv
        under <code>/images/cms/</code>. Du kan öppna vilken bild som helst på
        en egen adress, t.ex.{" "}
        <code>/images/cms/events/vm-final/heroImage.jpg</code>. Det där
        behöver du inte bry dig om — Keystatic sköter hela den biten.
      </p>
    </HelpPage>
  );
}
