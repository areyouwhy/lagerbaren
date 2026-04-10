import { PageHero } from "@/components/page-hero";
import { MenuList } from "@/components/menu-list";
import { BRAND } from "@/lib/constants";
import { getDict, type Venue } from "@/lib/i18n";
import { getVenueMenuSections, getVenueDrinkSections, getVenueLunchItems } from "@/lib/venue-content";

export default async function VenueMenuPage({
  params,
}: {
  params: Promise<{ venue: string }>;
}) {
  const { venue } = await params;
  const v = venue as Venue;
  const t = getDict("sv");
  const brand = BRAND[v];

  const foodSections = await getVenueMenuSections(v);
  const drinkSections = v === "lagerbaren" ? await getVenueDrinkSections() : [];
  const lunchItems = await getVenueLunchItems(v);

  return (
    <>
      <PageHero
        title={t.menu.title}
        subtitle={brand.name}
        accentColor={brand.accent}
      />

      <div className="mx-auto max-w-2xl px-4 py-12">
        {/* Food */}
        <h2 className="mb-6 text-2xl font-bold text-white">{t.menu.food}</h2>
        {foodSections.length > 0 ? (
          <MenuList sections={foodSections} />
        ) : (
          <p className="mb-8 text-zinc-400">{t.menu.emptyState}</p>
        )}

        {/* Lunch */}
        {lunchItems.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-2 text-2xl font-bold text-white">{t.menu.lunch}</h2>
            <p className="mb-6 text-sm text-zinc-500">{t.menu.lunchHours}</p>
            <div className="space-y-4">
              {lunchItems.map((item) => (
                <div key={item.slug} className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-white">{item.entry.name}</h3>
                    {item.entry.description && (
                      <p className="text-sm text-zinc-400">{item.entry.description}</p>
                    )}
                  </div>
                  <span className="shrink-0 text-sm text-zinc-300">{item.entry.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Drinks (Lagerbaren only) */}
        {drinkSections.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-white">{t.menu.drinks}</h2>
            <MenuList sections={drinkSections} />
          </div>
        )}
      </div>
    </>
  );
}
