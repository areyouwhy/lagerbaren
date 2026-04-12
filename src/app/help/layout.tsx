import type { Metadata } from "next";
import { HelpShell } from "@/components/help/shell";

export const metadata: Metadata = {
  title: "Hjälp — Lagerbaren & Masala Art",
  description: "Guide för att hantera innehåll i Keystatic.",
  robots: { index: false, follow: false },
};

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return <HelpShell locale="sv">{children}</HelpShell>;
}
