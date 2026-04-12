export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-block rounded-md border border-white/20 bg-zinc-800 px-1.5 py-0.5 font-mono text-[0.75em] text-zinc-100 shadow-[inset_0_-1px_0_rgba(0,0,0,0.4)]">
      {children}
    </kbd>
  );
}
