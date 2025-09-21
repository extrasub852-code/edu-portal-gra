import { useEffect, useMemo, useState } from "react";
import { Filters, FiltersSidebar } from "@/components/FiltersSidebar";
import { UseCaseCard } from "@/components/UseCaseCard";
import { AIToolCard } from "@/components/AIToolCard";
import { useCases, categories } from "@/data/useCases";
import { aiTools } from "@/data/aiTools";
import { Search } from "lucide-react";

export default function UseCaseFinder() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    sortBy: "popular",
    showCommunity: true,
    showTools: true,
    categories: [],
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && categories.includes(cat) && !selected.includes(cat)) {
      setSelected((prev) => [...prev, cat]);
    }
  }, []);

  const availableCategories = categories;

  const filteredUseCases = useMemo(() => {
    const text = query.trim().toLowerCase();
    const cats = new Set([...(filters.categories || []), ...selected]);

    let list = useCases.filter((uc) => {
      const matchesText = text
        ? uc.title.toLowerCase().includes(text) ||
          uc.description.toLowerCase().includes(text) ||
          uc.category.toLowerCase().includes(text)
        : true;
      const matchesCat = cats.size ? cats.has(uc.category) : true;
      return matchesText && matchesCat;
    });

    if (filters.sortBy === "popular") {
      list = [...list].sort((a, b) => b.popularity - a.popularity);
    } else {
      list = [...list].sort(
        (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
      );
    }

    return list;
  }, [query, selected, filters]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 600);
  };

  const showCommunity = filters.showCommunity && filteredUseCases.length > 0;
  const showTools = filters.showTools && !showCommunity;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-[#003057] sm:text-4xl">Use Case Finder</h1>
          <p className="mt-2 text-base font-semibold text-[#B3A369]">
            Find solutions or AI tools to bring your ideas to life
          </p>
        </div>

        <div className="mx-auto rounded-2xl border border-[#003057]/15 bg-white p-5 shadow-sm sm:p-7">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#003057]">
                Describe your project or requirement
              </label>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Describe your project or requirement here..."
                rows={4}
                className="w-full resize-y rounded-md border border-[#003057]/20 bg-white px-3 py-2 text-sm text-[#003057] outline-none transition-shadow focus:ring-2 focus:ring-[#B3A369]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#003057]">Category (Optional)</label>
              <div className="flex flex-wrap gap-2">
                {availableCategories.map((c) => {
                  const active = selected.includes(c);
                  return (
                    <button
                      type="button"
                      key={c}
                      onClick={() =>
                        setSelected((prev) =>
                          prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
                        )
                      }
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

            <div className="flex items-center justify-between">
              <div className="text-sm text-[#003057]/70">
                Tip: add a category to improve results
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-[#003057] px-4 py-2 text-sm font-semibold text-[#B3A369] shadow-sm transition-colors hover:bg-[#022d52]"
              >
                <Search className="h-4 w-4" />
                Find Solutions
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
          <FiltersSidebar
            filters={filters}
            onChange={(p) => setFilters((f) => ({ ...f, ...p }))}
            availableCategories={availableCategories}
          />

          <main>
            {loading ? (
              <div className="flex items-center justify-center py-24">
                <svg className="h-8 w-8 animate-spin text-[#B3A369]" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0h-2a6 6 0 10-6 6v2A8 8 0 014 12z" />
                </svg>
              </div>
            ) : (
              <div className="space-y-12">
                {showCommunity && (
                  <section>
                    <header className="mb-4">
                      <h2 className="text-xl font-extrabold text-[#003057]">Community Solutions</h2>
                      <p className="text-sm text-[#003057]/70">
                        Solutions shared by our community members
                      </p>
                    </header>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      {filteredUseCases.map((uc) => (
                        <UseCaseCard key={uc.id} useCase={uc} />
                      ))}
                    </div>
                  </section>
                )}

                {!showCommunity && (
                  <div className="rounded-xl border border-[#003057]/15 bg-white p-6 text-center text-[#003057] shadow-sm">
                    <p className="mb-2 text-lg font-extrabold">No results found</p>
                    <p className="text-sm text-[#003057]/70">
                      We couldn't find matching community use cases. Try these AI tools to get started.
                    </p>
                  </div>
                )}

                {showTools && (
                  <section>
                    <header className="mb-4">
                      <h2 className="text-xl font-extrabold text-[#003057]">AI Tool Suggestions</h2>
                      <p className="text-sm text-[#003057]/70">
                        Recommended AI tools to help implement your ideas
                      </p>
                    </header>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      {aiTools.map((tool) => (
                        <AIToolCard key={tool.id} tool={tool} />
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
