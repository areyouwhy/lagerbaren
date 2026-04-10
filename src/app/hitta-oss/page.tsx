import { PageHero } from "@/components/page-hero";
import { reader } from "@/lib/reader";

export default async function HittaOssPage() {
  const info = await reader.singletons.siteInfo.read();

  return (
    <>
      <PageHero title="Hitta till oss" subtitle="Södermalm, Stockholm" />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Adress</h2>
              <p className="text-zinc-300">{info?.addressLine1}</p>
              {info?.addressLine2 && <p className="text-zinc-300">{info.addressLine2}</p>}
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Öppettider</h2>
              <div className="space-y-1 text-sm text-zinc-400">
                <p>
                  <span className="text-zinc-300">Vardagar:</span>{" "}
                  {info?.openingHoursWeekdays}
                </p>
                <p>
                  <span className="text-zinc-300">Helg:</span>{" "}
                  {info?.openingHoursWeekend}
                </p>
                <p>
                  <span className="text-zinc-300">Lunch:</span>{" "}
                  {info?.lunchHours}
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-gold">Lagerbaren</h2>
              <p className="text-sm text-zinc-400">Tel: {info?.phoneLagerbaren}</p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-teal">Masala Art</h2>
              <p className="text-sm text-zinc-400">Tel: {info?.phoneMasalaArt}</p>
              <p className="text-sm text-zinc-400">
                Instagram: {info?.instagramMasalaArt}
              </p>
              <p className="text-sm text-zinc-400">
                Facebook: {info?.facebookMasalaArt}
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Bokning</h2>
              <a
                href={`mailto:${info?.email ?? "boka@lagerbaren.se"}`}
                className="text-zinc-300 hover:text-white"
              >
                {info?.email ?? "boka@lagerbaren.se"}
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="aspect-square w-full rounded-xl border border-white/10 bg-zinc-900 flex items-center justify-center text-zinc-500">
              <p className="text-center text-sm px-4">
                Karta visas här.<br />
                Fyll i Google Maps Embed URL i Keystatic admin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
