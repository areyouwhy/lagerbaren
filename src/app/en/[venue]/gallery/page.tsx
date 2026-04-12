import { PageHero } from "@/components/page-hero";
import { PhotoGallery } from "@/components/photo-gallery";
import { BRAND } from "@/lib/constants";
import { getDict, type Venue } from "@/lib/i18n";
import { getAmbienceImages } from "@/lib/venue-content";

export default async function VenueGalleryPageEN({
  params,
}: {
  params: Promise<{ venue: string }>;
}) {
  const { venue } = await params;
  const v = venue as Venue;
  const t = getDict("en");
  const brand = BRAND[v];

  const images = await getAmbienceImages(v);

  return (
    <>
      <PageHero title={t.gallery.title} subtitle={brand.name} accentColor={brand.accent} />

      <div className="mx-auto max-w-6xl px-4 py-12">
        {images.length === 0 ? (
          <p className="text-zinc-400">{t.gallery.emptyState}</p>
        ) : (
          <>
            <p className="mb-8 text-sm text-zinc-500">{t.gallery.clickToZoom}</p>
            <PhotoGallery images={images} alt={`${brand.name} — photos`} />
          </>
        )}
      </div>
    </>
  );
}
