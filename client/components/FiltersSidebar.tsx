import { ChangeEvent } from "react";

export type Filters = {
  sortBy: "popular" | "newest";
  showCommunity: boolean;
  showTools: boolean;
  categories: string[];
};

export function FiltersSidebar({
  filters,
  onChange,
  availableCategories,
}: {
  filters: Filters;
  onChange: (p: Partial<Filters>) => void;
  availableCategories: string[];
}) {
  const toggleCategory = (cat: string) => {
    const next = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    onChange({ categories: next });
  };

  return (
    <aside className="sticky top-20 hidden h-max w-full max-w-xs shrink-0 rounded-xl border border-[#003057]/15 bg-white p-5 shadow-sm md:block">
      <h3 className="mb-3 text-sm font-extrabold text-[#003057]">Filter Results</h3>

      <div className="mb-5">
        <label className="mb-2 block text-xs font-semibold text-[#003057]/70">Sort By</label>
        <select
          className="w-full rounded-md border border-[#003057]/20 bg-white px-3 py-2 text-sm text-[#003057] focus:outline-none focus:ring-2 focus:ring-[#B3A369]"
          value={filters.sortBy}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange({ sortBy: e.target.value as Filters["sortBy"] })}
        >
          <option value="popular">Most Popular</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <div className="mb-5">
        <label className="mb-2 block text-xs font-semibold text-[#003057]/70">Type</label>
        <div className="space-y-2 text-sm text-[#003057]">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.showCommunity}
              onChange={(e) => onChange({ showCommunity: e.target.checked })}
            />
            Community Solutions
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.showTools}
              onChange={(e) => onChange({ showTools: e.target.checked })}
            />
            AI Tools
          </label>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold text-[#003057]/70">Categories</label>
        <div className="flex flex-wrap gap-2">
          {availableCategories.map((c) => {
            const active = filters.categories.includes(c);
            return (
              <button
                key={c}
                onClick={() => toggleCategory(c)}
                className={
                  "rounded-full border px-3 py-1 text-xs font-semibold transition-colors " +
                  (active
                    ? "border-[#B3A369] bg-[#B3A369]/20 text-[#003057]"
                    : "border-[#003057]/20 text-[#003057] hover:bg-[#003057]/5")
                }
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
