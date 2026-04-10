import { PageHero } from "@/components/page-hero";
import { reader } from "@/lib/reader";

export default async function LunchPage() {
  const items = await reader.collections.menuLunch.all();
  const sorted = items.sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0));

  const lagerbarenItems = sorted.filter((i) => i.entry.brand === "lagerbaren");
  const masalaItems = sorted.filter((i) => i.entry.brand === "masala-art");

  return (
    <>
      <PageHero title="Lunch" subtitle="Mån–Fre 11:00–14:00" />
      <div className="mx-auto max-w-3xl px-4 py-12">
        {sorted.length === 0 ? (
          <p className="text-center text-zinc-400">
            Lunchmenyn uppdateras varje vecka. Kom tillbaka snart!
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {lagerbarenItems.length > 0 && (
              <div>
                <h2 className="mb-4 border-b border-gold/30 pb-2 text-xl font-bold text-gold">
                  Lagerbaren
                </h2>
                <div className="space-y-4">
                  {lagerbarenItems.map((item) => (
                    <div key={item.slug}>
                      <div className="flex justify-between">
                        <h3 className="font-medium text-white">{item.entry.name}</h3>
                        <span className="text-sm text-zinc-300">{item.entry.price}</span>
                      </div>
                      {item.entry.description && (
                        <p className="text-sm text-zinc-400">{item.entry.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {masalaItems.length > 0 && (
              <div>
                <h2 className="mb-4 border-b border-teal/30 pb-2 text-xl font-bold text-teal">
                  Masala Art
                </h2>
                <div className="space-y-4">
                  {masalaItems.map((item) => (
                    <div key={item.slug}>
                      <div className="flex justify-between">
                        <h3 className="font-medium text-white">{item.entry.name}</h3>
                        <span className="text-sm text-zinc-300">{item.entry.price}</span>
                      </div>
                      {item.entry.description && (
                        <p className="text-sm text-zinc-400">{item.entry.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
