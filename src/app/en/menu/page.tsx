import { PageHero } from "@/components/page-hero";
import { reader } from "@/lib/reader";

const LAGERBAREN_LABELS: Record<string, string> = {
  forratt: "Starters",
  varmratt: "Main Courses",
  burgare: "Burgers",
  sallad: "Salads",
  tillbehor: "Sides",
  dessert: "Desserts",
};

const MASALA_LABELS: Record<string, string> = {
  bowl: "Bowls",
  traditionell: "Traditional Dishes",
  bengali: "Bengali Specials",
  tandoori: "Tandoori",
  sides: "Sides & Naan",
  dessert: "Desserts",
};

export default async function EnglishMenuPage() {
  const lagerItems = await reader.collections.menuLagerbaren.all();
  const masalaItems = await reader.collections.menuMasalaArt.all();

  function groupItems(
    items: { slug: string; entry: { name: string; description: string; price: string; category: string } }[],
    labels: Record<string, string>,
  ) {
    const grouped: Record<string, typeof items> = {};
    for (const item of items) {
      const cat = item.entry.category;
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(item);
    }
    return Object.entries(grouped).map(([key, items]) => ({
      label: labels[key] ?? key,
      items,
    }));
  }

  const lagerSections = groupItems(lagerItems, LAGERBAREN_LABELS);
  const masalaSections = groupItems(masalaItems, MASALA_LABELS);

  return (
    <>
      <PageHero title="Menu" subtitle="Lagerbaren & Masala Art" />
      <div className="mx-auto max-w-3xl px-4 py-12">
        {lagerSections.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gold">Lagerbaren</h2>
            {lagerSections.map((section) => (
              <div key={section.label} className="mb-6">
                <h3 className="mb-3 border-b border-white/10 pb-1 text-lg font-semibold text-white">
                  {section.label}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item.slug} className="flex justify-between gap-4">
                      <div>
                        <p className="font-medium text-white">{item.entry.name}</p>
                        {item.entry.description && (
                          <p className="text-sm text-zinc-400">{item.entry.description}</p>
                        )}
                      </div>
                      <span className="shrink-0 text-sm text-zinc-300">{item.entry.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {masalaSections.length > 0 && (
          <section>
            <h2 className="mb-6 text-2xl font-bold text-teal">Masala Art</h2>
            {masalaSections.map((section) => (
              <div key={section.label} className="mb-6">
                <h3 className="mb-3 border-b border-white/10 pb-1 text-lg font-semibold text-white">
                  {section.label}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item.slug} className="flex justify-between gap-4">
                      <div>
                        <p className="font-medium text-white">{item.entry.name}</p>
                        {item.entry.description && (
                          <p className="text-sm text-zinc-400">{item.entry.description}</p>
                        )}
                      </div>
                      <span className="shrink-0 text-sm text-zinc-300">{item.entry.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {lagerSections.length === 0 && masalaSections.length === 0 && (
          <p className="text-center text-zinc-400">Menu coming soon!</p>
        )}
      </div>
    </>
  );
}
