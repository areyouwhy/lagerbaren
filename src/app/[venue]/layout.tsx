import { notFound } from "next/navigation";
import { isValidVenue, type Venue } from "@/lib/i18n";
import { VenueHeader } from "@/components/header";
import { VenueFooter } from "@/components/footer";
import { getVenueAbout } from "@/lib/venue-content";

export function generateStaticParams() {
  return [{ venue: "lagerbaren" }, { venue: "masala-art" }];
}

export default async function VenueLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ venue: string }>;
}) {
  const { venue } = await params;
  if (!isValidVenue(venue)) notFound();
  const v = venue as Venue;
  const about = await getVenueAbout(v, "sv");

  return (
    <>
      <VenueHeader locale="sv" venue={v} logo={about?.logo ?? null} />
      <main className="flex-1">{children}</main>
      <VenueFooter locale="sv" venue={v} info={about ?? null} />
    </>
  );
}
