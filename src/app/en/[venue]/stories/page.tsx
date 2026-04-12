import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { BRAND } from "@/lib/constants";
import { getDict, type Venue } from "@/lib/i18n";
import { getStoryCategoryLabel, getVenueStories, type StoryEntry } from "@/lib/venue-content";

const LOCALE = "en";

export default async function VenueStoriesPageEN({
  params,
}: {
  params: Promise<{ venue: string }>;
}) {
  const { venue } = await params;
  const v = venue as Venue;
  const t = getDict(LOCALE);
  const brand = BRAND[v];

  const stories = await getVenueStories(v, LOCALE);

  const grouped = new Map<string, StoryEntry[]>();
  for (const story of stories) {
    const cat = story.category ?? "other";
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat)!.push(story);
  }

  return (
    <>
      <PageHero title={t.stories.title} subtitle={brand.name} accentColor={brand.accent} />

      <div className="mx-auto max-w-4xl px-4 py-12">
        {stories.length === 0 ? (
          <p className="text-zinc-400">{t.stories.emptyState}</p>
        ) : (
          <div className="space-y-12">
            {Array.from(grouped.entries()).map(([category, items]) => (
              <section key={category}>
                <h2 className="mb-6 text-sm uppercase tracking-wider text-zinc-500">
                  {getStoryCategoryLabel(category, LOCALE)}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {items.map((story) => (
                    <Link
                      key={story.slug}
                      href={`/en/${venue}/stories/${story.slug}`}
                      className="group overflow-hidden rounded-xl border border-white/10 bg-zinc-900 transition-colors hover:border-white/20"
                    >
                      {story.heroImage && (
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={story.heroImage}
                            alt={story.title}
                            fill
                            sizes="(min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-xl font-semibold text-white">{story.title}</h3>
                        {story.subtitle && (
                          <p className="mt-1 text-sm text-zinc-400">{story.subtitle}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
