import Link from "next/link";
import { BRAND } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div>
          <h3 className="mb-3 font-bold text-white">{BRAND.lagerbaren.name}</h3>
          <p className="text-sm text-zinc-400">{BRAND.lagerbaren.tagline}</p>
          <p className="mt-2 text-sm text-zinc-400">Tel: {BRAND.lagerbaren.phone}</p>
        </div>
        <div>
          <h3 className="mb-3 font-bold" style={{ color: BRAND.masalaArt.color }}>
            {BRAND.masalaArt.name}
          </h3>
          <p className="text-sm text-zinc-400">{BRAND.masalaArt.tagline}</p>
          <p className="mt-2 text-sm text-zinc-400">Tel: {BRAND.masalaArt.phone}</p>
        </div>
        <div>
          <h3 className="mb-3 font-bold text-white">Kontakt</h3>
          <p className="text-sm text-zinc-400">
            Bokning:{" "}
            <a href="mailto:boka@lagerbaren.se" className="text-zinc-300 hover:text-white">
              boka@lagerbaren.se
            </a>
          </p>
          <p className="mt-2 text-sm text-zinc-400">Södermalm, Stockholm</p>
          <div className="mt-4 flex gap-3">
            <Link href="/en/menu" className="text-xs text-zinc-500 hover:text-zinc-300">
              English Menu
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/5 pt-6 text-center text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} Lagerbaren & Masala Art. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}
