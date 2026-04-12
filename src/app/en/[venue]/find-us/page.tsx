import { PageHero } from "@/components/page-hero";
import { BRAND } from "@/lib/constants";
import { getDict, type Venue } from "@/lib/i18n";
import { getVenueAbout } from "@/lib/venue-content";

const LOCALE = "en";

export default async function VenueFindUsPageEN({
  params,
}: {
  params: Promise<{ venue: string }>;
}) {
  const { venue } = await params;
  const v = venue as Venue;
  const t = getDict(LOCALE);
  const brand = BRAND[v];
  const info = await getVenueAbout(v, LOCALE);

  return (
    <>
      <PageHero title={t.findUs.title} accentColor={brand.accent} />

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">{t.findUs.address}</h2>
              {info?.addressLine1 && <p className="text-zinc-300">{info.addressLine1}</p>}
              {info?.addressLine2 && <p className="text-zinc-300">{info.addressLine2}</p>}
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">{t.findUs.hours}</h2>
              <div className="space-y-1 text-sm text-zinc-400">
                {info?.openingHoursWeekdays && (
                  <p>
                    <span className="text-zinc-300">{t.findUs.weekdays}:</span>{" "}
                    {info.openingHoursWeekdays}
                  </p>
                )}
                {info?.openingHoursWeekend && (
                  <p>
                    <span className="text-zinc-300">{t.findUs.weekend}:</span>{" "}
                    {info.openingHoursWeekend}
                  </p>
                )}
                {info?.lunchHours && (
                  <p>
                    <span className="text-zinc-300">{t.findUs.lunch}:</span> {info.lunchHours}
                  </p>
                )}
              </div>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold" style={{ color: brand.accent }}>
                {brand.name}
              </h2>
              <p className="text-sm text-zinc-400">
                {t.findUs.phone}: {info?.phone || brand.phone}
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">{t.findUs.booking}</h2>
              <a
                href={`mailto:${info?.email || "boka@lagerbaren.se"}`}
                className="text-zinc-300 hover:text-white"
              >
                {info?.email || "boka@lagerbaren.se"}
              </a>
            </div>

            {(info?.instagram || info?.facebook) && (
              <div>
                {info?.instagram && (
                  <p className="text-sm text-zinc-400">Instagram: {info.instagram}</p>
                )}
                {info?.facebook && (
                  <p className="text-sm text-zinc-400">Facebook: {info.facebook}</p>
                )}
              </div>
            )}
          </div>

          <div className="flex items-start">
            {info?.mapEmbed ? (
              <div
                className="aspect-square w-full overflow-hidden rounded-xl border border-white/10 [&>iframe]:h-full [&>iframe]:w-full"
                dangerouslySetInnerHTML={{ __html: info.mapEmbed }}
              />
            ) : (
              <div className="flex aspect-square w-full items-center justify-center rounded-xl border border-white/10 bg-zinc-900 text-zinc-500">
                <p className="px-4 text-center text-sm">{t.findUs.mapPlaceholder}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
