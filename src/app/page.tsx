import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24">
      <h1 className="mb-4 text-center text-5xl font-bold tracking-tight text-white md:text-7xl">
        Välkommen
      </h1>
      <p className="mb-16 text-center text-lg text-zinc-400">
        Södermalms sportbar &amp; indiska restaurang — under samma tak
      </p>

      <div className="grid w-full max-w-3xl gap-6 md:grid-cols-2">
        <Link
          href="/lagerbaren"
          className="group rounded-2xl border border-white/10 bg-zinc-900 p-8 transition-all hover:border-gold/40 hover:bg-zinc-900/80"
        >
          <h2 className="mb-2 text-3xl font-bold text-gold">Lagerbaren</h2>
          <p className="text-zinc-400 group-hover:text-zinc-300">
            Sportbar &amp; restaurang. Stort utbud av fatöl, rom &amp; whisky.
            Alla stora sportevenemang på storbilds-TV.
          </p>
          <span className="mt-4 inline-block text-sm text-gold">
            Se meny &amp; event &rarr;
          </span>
        </Link>

        <Link
          href="/masala-art"
          className="group rounded-2xl border border-white/10 bg-zinc-900 p-8 transition-all hover:border-teal/40 hover:bg-zinc-900/80"
        >
          <h2 className="mb-2 text-3xl font-bold text-teal">Masala Art</h2>
          <p className="text-zinc-400 group-hover:text-zinc-300">
            Autentisk indisk &amp; bengalisk mat. Bowls, traditionella rätter
            och tandoori — lagat från grunden.
          </p>
          <span className="mt-4 inline-block text-sm text-teal">
            Se meny &rarr;
          </span>
        </Link>
      </div>

      <div className="mt-16 grid gap-4 text-center text-sm text-zinc-500 sm:grid-cols-3 sm:gap-8">
        <div>
          <p className="font-medium text-zinc-300">Lunch</p>
          <p>Mån–Fre 11:00–14:00</p>
        </div>
        <div>
          <p className="font-medium text-zinc-300">Pubquiz</p>
          <p>Onsdagar kl 19:00</p>
        </div>
        <div>
          <p className="font-medium text-zinc-300">Bokning</p>
          <p>boka@lagerbaren.se</p>
        </div>
      </div>
    </div>
  );
}
