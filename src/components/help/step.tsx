type StepProps = {
  n: number;
  children: React.ReactNode;
};

export function Step({ n, children }: StepProps) {
  return (
    <li className="mb-4 flex gap-4 list-none">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-sm font-semibold text-gold">
        {n}
      </div>
      <div className="pt-1 leading-relaxed text-zinc-200 [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </li>
  );
}

export function Steps({ children }: { children: React.ReactNode }) {
  return <ol className="my-6 list-none pl-0">{children}</ol>;
}
