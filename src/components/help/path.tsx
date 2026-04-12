export function Path({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-zinc-900 px-2 py-0.5 font-mono text-[0.85em] text-gold ring-1 ring-inset ring-white/10">
      {children}
    </span>
  );
}
