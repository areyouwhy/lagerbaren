/**
 * Shared typographic shell for topic pages. Keeps heading sizes,
 * spacing, and paragraph color consistent across /help routes
 * without pulling in a full prose plugin.
 */
export function HelpPage({
  title,
  lede,
  children,
}: {
  title: string;
  lede?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="mb-3 text-4xl font-bold text-white">{title}</h1>
      {lede && <p className="mb-10 text-lg leading-relaxed text-zinc-400">{lede}</p>}
      <div
        className="
          text-zinc-200
          [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white
          [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white
          [&_p]:mb-4 [&_p]:leading-relaxed
          [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul>li]:mb-1
          [&_a]:text-gold [&_a:hover]:underline
          [&_code]:rounded [&_code]:bg-white/10 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.9em]
        "
      >
        {children}
      </div>
    </>
  );
}
