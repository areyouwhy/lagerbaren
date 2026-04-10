export function PageHero({
  title,
  subtitle,
  accentColor,
}: {
  title: string;
  subtitle?: string;
  accentColor?: string;
}) {
  return (
    <div className="border-b border-white/10 bg-zinc-900 px-4 py-16 text-center">
      <h1
        className="text-4xl font-bold tracking-tight md:text-5xl"
        style={accentColor ? { color: accentColor } : { color: "white" }}
      >
        {title}
      </h1>
      {subtitle && <p className="mt-3 text-lg text-zinc-400">{subtitle}</p>}
    </div>
  );
}
