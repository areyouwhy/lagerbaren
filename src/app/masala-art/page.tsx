import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { reader } from "@/lib/reader";

export default async function MasalaArtPage() {
  const about = await reader.singletons.aboutMasalaArt.read();

  return (
    <>
      <PageHero
        title={about?.heroTitle ?? "Masala Art"}
        subtitle={about?.heroSubtitle ?? "Indisk & Bengalisk mat"}
        accentColor="#76e9c7"
      />

      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="mb-12 text-lg leading-relaxed text-zinc-300">
          {about?.description ?? "Välkommen till Masala Art!"}
        </p>

        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-teal/20 bg-zinc-900 p-6 text-center">
            <p className="text-3xl">🍛</p>
            <h3 className="mt-2 font-bold text-teal">Bowls</h3>
            <p className="mt-1 text-sm text-zinc-400">Fräscha och smakrika</p>
          </div>
          <div className="rounded-xl border border-teal/20 bg-zinc-900 p-6 text-center">
            <p className="text-3xl">🫓</p>
            <h3 className="mt-2 font-bold text-teal">Traditionellt</h3>
            <p className="mt-1 text-sm text-zinc-400">Klassiska indiska rätter</p>
          </div>
          <div className="rounded-xl border border-teal/20 bg-zinc-900 p-6 text-center">
            <p className="text-3xl">🔥</p>
            <h3 className="mt-2 font-bold text-teal">Tandoori</h3>
            <p className="mt-1 text-sm text-zinc-400">Grillat i lerugn</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/meny/masala-art"
            className="rounded-full bg-teal px-6 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Se menyn
          </Link>
          <Link
            href="/lunch"
            className="rounded-full border border-teal/40 px-6 py-2 text-sm font-medium text-teal transition-colors hover:bg-teal/10"
          >
            Lunchmeny
          </Link>
        </div>
      </div>
    </>
  );
}
