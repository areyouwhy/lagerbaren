import { PageHero } from "@/components/page-hero";
import { BRAND } from "@/lib/constants";
import { getDict, type Venue } from "@/lib/i18n";
import {
  getAllVenueLunchItems,
  getLunchInfo,
  getTodayWeekday,
  type Weekday,
} from "@/lib/venue-content";

const WEEKDAYS = ["mon", "tue", "wed", "thu", "fri"] as const;

export default async function VenueLunchPage({
  params,
}: {
  params: Promise<{ venue: string }>;
}) {
  const { venue } = await params;
  const v = venue as Venue;
  const t = getDict("sv");
  const brand = BRAND[v];

  const today = getTodayWeekday();
  const allItems = await getAllVenueLunchItems(v);
  const lunchInfo = await getLunchInfo();

  const itemsForDay = (day: Weekday) =>
    allItems.filter((i) => {
      const days = (i.entry.weekday ?? []) as readonly string[];
      return days.includes(day);
    });

  const todayItems = today ? itemsForDay(today) : [];
  const hours = v === "lagerbaren" ? lunchInfo?.hoursLagerbaren : lunchInfo?.hoursMasalaArt;

  return (
    <>
      <PageHero
        title={t.lunch.title}
        subtitle={brand.name}
        accentColor={brand.accent}
      />

      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Lunch info frame */}
        <div className="mb-12 rounded-xl border border-white/10 bg-zinc-900 p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-white">
              Veckans lunch{" "}
              <span style={{ color: brand.accent }}>{lunchInfo?.priceWeekly}</span>
            </h2>
            {hours && <p className="text-sm text-zinc-400">{hours}</p>}
          </div>
          {lunchInfo?.includesText && (
            <p className="mt-2 text-sm text-zinc-400">{lunchInfo.includesText}</p>
          )}
        </div>

        {/* Today's lunch */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white">{t.lunch.todayHeading}</h2>
            {today && (
              <p className="mt-1 text-sm uppercase tracking-wider" style={{ color: brand.accent }}>
                {t.lunch.weekdayLong[today]}
              </p>
            )}
          </div>

          {!today ? (
            <p className="text-zinc-400">{lunchInfo?.closedMessage}</p>
          ) : todayItems.length === 0 ? (
            <p className="text-zinc-400">{t.lunch.noItemsToday}</p>
          ) : (
            <div className="space-y-5">
              {todayItems.map((item) => (
                <div
                  key={item.slug}
                  className="flex justify-between gap-4 border-b border-white/5 pb-5 last:border-0"
                >
                  <div>
                    <h3 className="text-lg font-medium text-white">{item.entry.name}</h3>
                    {item.entry.description && (
                      <p className="mt-1 text-sm text-zinc-400">{item.entry.description}</p>
                    )}
                  </div>
                  <span className="shrink-0 text-sm font-medium text-zinc-200">
                    {item.entry.price}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Favoritbiffen highlight (Lagerbaren-style upsell, also surfaced for both venues if set) */}
        {v === "lagerbaren" && lunchInfo?.favoritbiffenTitle && (
          <section
            className="mb-16 rounded-xl border p-6"
            style={{ borderColor: brand.accent + "55", backgroundColor: brand.accent + "0a" }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold" style={{ color: brand.accent }}>
                {lunchInfo.favoritbiffenTitle}
              </h3>
              <span className="text-sm font-medium text-zinc-200">
                {lunchInfo.favoritbiffenPrice}
              </span>
            </div>
            {lunchInfo.favoritbiffenDescription && (
              <p className="mt-2 text-sm text-zinc-300">{lunchInfo.favoritbiffenDescription}</p>
            )}
          </section>
        )}

        {/* Whole week */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-white">{t.lunch.weekHeading}</h2>
          <div className="space-y-8">
            {WEEKDAYS.map((day) => {
              const items = itemsForDay(day);
              if (items.length === 0) return null;
              const isToday = day === today;
              return (
                <div key={day}>
                  <h3
                    className={`mb-3 text-sm uppercase tracking-wider ${
                      isToday ? "" : "text-zinc-500"
                    }`}
                    style={isToday ? { color: brand.accent } : undefined}
                  >
                    {t.lunch.weekdayLong[day]}
                  </h3>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.slug} className="flex justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-zinc-200">{item.entry.name}</p>
                          {item.entry.description && (
                            <p className="text-xs text-zinc-500">{item.entry.description}</p>
                          )}
                        </div>
                        <span className="shrink-0 text-xs text-zinc-400">{item.entry.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
