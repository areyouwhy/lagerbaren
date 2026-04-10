import Link from "next/link";
import { getDict } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";

export default function LandingPageEN() {
  const t = getDict("en");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="absolute right-6 top-6">
        <LanguageSwitcher locale="en" />
      </div>

      <h1 className="mb-2 text-center text-5xl font-bold tracking-tight text-white md:text-7xl">
        {t.landing.title}
      </h1>
      <p className="mb-16 text-center text-lg text-zinc-500">
        {t.landing.subtitle}
      </p>

      <div className="grid w-full max-w-3xl gap-6 md:grid-cols-2">
        <Link
          href="/en/lagerbaren"
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-10 transition-all hover:border-gold/40 hover:bg-zinc-900/80"
        >
          <h2 className="mb-3 text-4xl font-bold text-gold">Lagerbaren</h2>
          <p className="text-zinc-400 group-hover:text-zinc-300">
            {t.landing.lagerbarenDesc}
          </p>
          <span className="mt-6 inline-block text-sm font-medium text-gold">
            {t.landing.enter} &rarr;
          </span>
        </Link>

        <Link
          href="/en/masala-art"
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-10 transition-all hover:border-teal/40 hover:bg-zinc-900/80"
        >
          <h2 className="mb-3 text-4xl font-bold text-teal">Masala Art</h2>
          <p className="text-zinc-400 group-hover:text-zinc-300">
            {t.landing.masalaArtDesc}
          </p>
          <span className="mt-6 inline-block text-sm font-medium text-teal">
            {t.landing.enter} &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
