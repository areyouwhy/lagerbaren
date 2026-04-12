import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { getDict, type Venue } from "@/lib/i18n";
import { getStory, getStoryCategoryLabel, getVenueStories } from "@/lib/venue-content";

export async function generateStaticParams() {
  const params: { venue: string; slug: string }[] = [];
  for (const venue of ["lagerbaren", "masala-art"] as Venue[]) {
    const stories = await getVenueStories(venue, "en");
    for (const story of stories) {
      params.push({ venue, slug: story.slug });
    }
  }
  return params;
}

export default async function StoryDetailPageEN({
  params,
}: {
  params: Promise<{ venue: string; slug: string }>;
}) {
  const { venue, slug } = await params;
  const v = venue as Venue;
  const t = getDict("en");
  const brand = BRAND[v];

  const story = await getStory(slug, "en");
  if (!story) notFound();
  if (story.brand !== "both" && story.brand !== v) notFound();

  return (
    <>
      {story.heroImage ? (
        <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden border-b border-white/10">
          <Image
            src={story.heroImage}
            alt={story.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
          <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: brand.accent }}>
              {getStoryCategoryLabel(story.category, "en")}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-6xl">
              {story.title}
            </h1>
            {story.subtitle && (
              <p className="mt-3 max-w-2xl text-lg text-zinc-100 drop-shadow md:text-xl">
                {story.subtitle}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="border-b border-white/10 bg-zinc-900 px-4 py-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: brand.accent }}>
            {getStoryCategoryLabel(story.category, "en")}
          </p>
          <h1
            className="text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: brand.accent }}
          >
            {story.title}
          </h1>
          {story.subtitle && <p className="mt-3 text-lg text-zinc-400">{story.subtitle}</p>}
        </div>
      )}

      <article className="mx-auto max-w-2xl px-4 py-16">
        {story.body && (
          <div className="space-y-5 text-lg leading-relaxed text-zinc-200">
            {story.body
              .split(/\n\n+/)
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </div>
        )}

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href={`/en/${venue}/stories`}
            className="text-sm transition-colors hover:text-white"
            style={{ color: brand.accent }}
          >
            ← {t.stories.backToList}
          </Link>
        </div>
      </article>
    </>
  );
}
