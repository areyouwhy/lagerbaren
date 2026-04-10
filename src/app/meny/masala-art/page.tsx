import { PageHero } from "@/components/page-hero";
import { MenuList } from "@/components/menu-list";
import { reader } from "@/lib/reader";

const CATEGORY_LABELS: Record<string, string> = {
  bowl: "Bowls",
  traditionell: "Traditionella rätter",
  bengali: "Bengali Special",
  tandoori: "Tandoori",
  sides: "Sides & Naan",
  dessert: "Dessert",
};

export default async function MenyMasalaArtPage() {
  const items = await reader.collections.menuMasalaArt.all();
  const sorted = items.sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0));

  const grouped = sorted.reduce<Record<string, { name: string; description: string; price: string }[]>>(
    (acc, item) => {
      const cat = item.entry.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push({
        name: item.entry.name,
        description: item.entry.description,
        price: item.entry.price,
      });
      return acc;
    },
    {}
  );

  const sections = Object.entries(grouped).map(([key, items]) => ({
    category: CATEGORY_LABELS[key] ?? key,
    items,
  }));

  return (
    <>
      <PageHero title="Meny Masala Art" subtitle="Indisk & Bengalisk mat" accentColor="#76e9c7" />
      <div className="mx-auto max-w-2xl px-4 py-12">
        {sections.length > 0 ? (
          <MenuList sections={sections} />
        ) : (
          <p className="text-center text-zinc-400">
            Menyn uppdateras snart. Kom tillbaka!
          </p>
        )}
      </div>
    </>
  );
}
