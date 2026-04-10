import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { reader } from "@/lib/reader";

export default async function LagerbarenPage() {
  const about = await reader.singletons.aboutLagerbaren.read();
  const events = await reader.collections.events.all();
  const lagerEvents = events.filter((e) => e.entry.brand !== "masala-art");

  return (
    <>
      <PageHero
        title={about?.heroTitle ?? "Lagerbaren"}
        subtitle={about?.heroSubtitle ?? "Södermalms sportbar"}
        accentColor="#d4a843"
      />

      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="mb-12 text-lg leading-relaxed text-zinc-300">
          {about?.description ?? "Välkommen till Lagerbaren!"}
        </p>

        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-zinc-900 p-6">
            <h2 className="mb-2 text-xl font-bold text-gold">Sport</h2>
            <p className="text-sm text-zinc-400">
              {about?.sportText ?? "Vi visar alla stora sportevenemang."}
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-zinc-900 p-6">
            <h2 className="mb-2 text-xl font-bold text-gold">Pubquiz</h2>
            <p className="text-sm text-zinc-400">
              {about?.quizText ?? "Pubquiz varje onsdag kl 19:00."}
            </p>
          </div>
        </div>

        {lagerEvents.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-white">Kommande event</h2>
            <div className="space-y-3">
              {lagerEvents.slice(0, 5).map((event) => (
                <div
                  key={event.slug}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-zinc-900 px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-white">{event.entry.title}</p>
                    <p className="text-sm text-zinc-400">{event.entry.description}</p>
                  </div>
                  <div className="text-right text-sm text-zinc-400">
                    <p>{event.entry.date}</p>
                    <p>{event.entry.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="flex flex-wrap gap-4">
          <Link
            href="/meny/lagerbaren"
            className="rounded-full bg-gold px-6 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Se menyn
          </Link>
          <Link
            href="/dryck"
            className="rounded-full border border-gold/40 px-6 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
          >
            Dryckesmeny
          </Link>
          <Link
            href="/festvaning"
            className="rounded-full border border-white/20 px-6 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5"
          >
            Festväningen
          </Link>
        </div>
      </div>
    </>
  );
}
