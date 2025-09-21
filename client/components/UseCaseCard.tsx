import { Star, Bookmark } from "lucide-react";

export type UseCase = {
  id: string;
  title: string;
  description: string;
  author: string;
  category: string;
  rating: number; // 0-5
  popularity: number; // number of likes or score
  dateAdded: string; // ISO
};

export function UseCaseCard({ useCase }: { useCase: UseCase }) {
  const { title, description, author, category, rating } = useCase;

  return (
    <article className="group flex flex-col rounded-xl border border-[#003057]/15 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center rounded-full bg-[#B3A369]/15 px-2.5 py-1 text-xs font-bold text-[#003057] ring-1 ring-[#B3A369]/30">
          {category}
        </span>
        <div className="flex items-center gap-1 text-[#B3A369]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={i < Math.round(rating) ? "h-4 w-4 fill-[#B3A369]" : "h-4 w-4"}
            />
          ))}
          <span className="ml-1 text-xs font-semibold text-[#003057]">{rating.toFixed(1)}</span>
        </div>
      </div>
      <h3 className="mb-1 text-lg font-extrabold text-[#003057]">{title}</h3>
      <p className="mb-4 text-sm text-[#003057]/80">{description}</p>
      <div className="mt-auto flex items-center justify-between pt-2">
        <p className="text-xs font-semibold text-[#B3A369]">by {author}</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#B3A369] hover:underline"
        >
          View Full Use Case
          <Bookmark className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
