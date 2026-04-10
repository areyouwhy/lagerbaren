import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lagerbaren & Masala Art | Södermalm, Stockholm",
  description:
    "Sportbar och indisk restaurang på Södermalm. Lagerbaren — öl, sport och god mat. Masala Art — autentisk indisk och bengalisk mat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
