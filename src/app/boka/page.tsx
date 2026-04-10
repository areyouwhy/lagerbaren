import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export default function BokaPage() {
  return (
    <>
      <PageHero title="Boka bord" subtitle="Reservera bord eller festlokal" />
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="mb-8 rounded-xl border border-white/10 bg-zinc-900 p-8 text-center">
          <h2 className="mb-4 text-xl font-bold text-white">Bordsbokning</h2>
          <p className="mb-6 text-zinc-400">
            Boka bord hos Lagerbaren eller Masala Art. Skicka ett mail med
            datum, tid och antal gäster.
          </p>
          <a
            href="mailto:boka@lagerbaren.se?subject=Bordsbokning"
            className="inline-block rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            boka@lagerbaren.se
          </a>
          <p className="mt-4 text-sm text-zinc-500">
            Eller ring oss: 08-643 18 08
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href="/festvaning"
            className="rounded-xl border border-gold/20 bg-zinc-900 p-6 transition-colors hover:border-gold/40"
          >
            <h3 className="mb-2 font-bold text-gold">Festväningen</h3>
            <p className="text-sm text-zinc-400">
              Egen lokal för upp till 60 personer. Perfekt för fester och
              firmaevent.
            </p>
          </Link>
          <Link
            href="/festvaning"
            className="rounded-xl border border-gold/20 bg-zinc-900 p-6 transition-colors hover:border-gold/40"
          >
            <h3 className="mb-2 font-bold text-gold">Helbokning av baren</h3>
            <p className="text-sm text-zinc-400">
              Boka hela Lagerbaren för ert event. Kontakta oss för offert.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
