import { notFound } from "next/navigation";
import { isValidVenue, type Venue } from "@/lib/i18n";
import { VenueHeader } from "@/components/header";
import { VenueFooter } from "@/components/footer";

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

  return (
    <>
      <VenueHeader locale="sv" venue={venue as Venue} />
      <main className="flex-1">{children}</main>
      <VenueFooter locale="sv" venue={venue as Venue} />
    </>
  );
}
