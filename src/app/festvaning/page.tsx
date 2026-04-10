import { PageHero } from "@/components/page-hero";
import { reader } from "@/lib/reader";

export default async function FestvaningPage() {
  const data = await reader.singletons.festvaning.read();

  return (
    <>
      <PageHero title={data?.title ?? "Festväningen"} subtitle="Boka för fest & event" accentColor="#d4a843" />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-12 rounded-xl border border-white/10 bg-zinc-900 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gold">Festväningen</h2>
          <p className="mb-4 text-zinc-300">{data?.description}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-1 text-sm font-medium text-zinc-400">Kapacitet</h3>
              <p className="text-white">{data?.capacity}</p>
            </div>
            <div>
              <h3 className="mb-1 text-sm font-medium text-zinc-400">Pris</h3>
              <p className="text-white">{data?.priceInfo}</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1 text-sm font-medium text-zinc-400">Vad ingår</h3>
            <p className="text-white">{data?.includesText}</p>
          </div>
        </div>

        <div className="mb-12 rounded-xl border border-white/10 bg-zinc-900 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gold">
            {data?.fullBarTitle ?? "Boka hela Lagerbaren"}
          </h2>
          <p className="text-zinc-300">{data?.fullBarDescription}</p>
        </div>

        <div className="rounded-xl border border-gold/30 bg-gold/5 p-6 text-center">
          <p className="text-lg font-medium text-gold">Intresserad?</p>
          <p className="mt-2 text-zinc-300">{data?.contactInfo}</p>
          <a
            href="mailto:boka@lagerbaren.se"
            className="mt-4 inline-block rounded-full bg-gold px-6 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Skicka bokningsförfrågan
          </a>
        </div>
      </div>
    </>
  );
}
