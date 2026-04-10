type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuSection = {
  category: string;
  items: MenuItem[];
};

export function MenuList({ sections }: { sections: MenuSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <div key={section.category}>
          <h2 className="mb-4 border-b border-white/10 pb-2 text-xl font-semibold text-white">
            {section.category}
          </h2>
          <div className="space-y-4">
            {section.items.map((item) => (
              <div key={item.name} className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium text-white">{item.name}</h3>
                  {item.description && (
                    <p className="mt-0.5 text-sm text-zinc-400">{item.description}</p>
                  )}
                </div>
                <span className="shrink-0 text-sm font-medium text-zinc-300">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
