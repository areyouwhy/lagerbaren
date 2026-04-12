import type { Metadata } from "next";
import { HelpShell } from "@/components/help/shell";

export const metadata: Metadata = {
  title: "Help — Lagerbaren & Masala Art",
  description: "Guide to managing content in Keystatic.",
  robots: { index: false, follow: false },
};

export default function HelpLayoutEn({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HelpShell locale="en">{children}</HelpShell>;
}
