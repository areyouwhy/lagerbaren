export function FieldName({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[0.85em] text-zinc-100">
      {children}
    </span>
  );
}
