type CalloutType = "tip" | "warning" | "note";

const styles: Record<CalloutType, { border: string; bg: string; label: string; labelText: string }> = {
  tip: {
    border: "border-teal/30",
    bg: "bg-teal/5",
    label: "Tips",
    labelText: "text-teal",
  },
  warning: {
    border: "border-amber-500/40",
    bg: "bg-amber-500/5",
    label: "Obs",
    labelText: "text-amber-400",
  },
  note: {
    border: "border-white/15",
    bg: "bg-white/5",
    label: "Bra att veta",
    labelText: "text-zinc-300",
  },
};

export function Callout({
  type = "note",
  children,
}: {
  type?: CalloutType;
  children: React.ReactNode;
}) {
  const s = styles[type];
  return (
    <aside
      className={`my-6 rounded-xl border ${s.border} ${s.bg} px-5 py-4`}
      role="note"
    >
      <div className={`mb-1 text-xs font-semibold uppercase tracking-wide ${s.labelText}`}>
        {s.label}
      </div>
      <div className="text-sm leading-relaxed text-zinc-200 [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}
