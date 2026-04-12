import { notFound } from "next/navigation";
import { isValidVenue, type Venue } from "@/lib/i18n";
import { VenueHeader } from "@/components/header";
import { VenueFooter } from "@/components/footer";
import { getVenueAbout } from "@/lib/venue-content";

export function generateStaticParams() {
  return [{ venue: "lagerbaren" }, { venue: "masala-art" }];
}

export default async function VenueLayoutEN({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ venue: string }>;
}) {
  const { venue } = await params;
  if (!isValidVenue(venue)) notFound();
  const v = venue as Venue;
  const about = await getVenueAbout(v, "en");

  return (
    <>
      <VenueHeader locale="en" venue={v} logo={about?.logo ?? null} />
      <main className="flex-1">{children}</main>
      <VenueFooter locale="en" venue={v} info={about ?? null} />
    </>
  );
}
