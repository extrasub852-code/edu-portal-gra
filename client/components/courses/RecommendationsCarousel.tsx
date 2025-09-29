import { Link } from "react-router-dom";
import type { Course } from "@/data/courses";

export function RecommendationsCarousel({ items }: { items: Course[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-extrabold text-[#003057]">Suggested Next Courses</h3>
        <Link to="/courses" className="text-sm font-semibold text-[#003057]/70">
          View all
        </Link>
      </div>
      <div className="-mx-3 flex overflow-x-auto gap-4 px-3 py-2">
        {items.map((c) => (
          <div key={c.id} className="min-w-[260px] flex-shrink-0">
            <div className="rounded-xl border border-[#003057]/10 bg-white p-4 shadow-sm">
              <div className="mb-2 text-xs font-semibold text-[#003057]/70">{c.type === "live" ? "Live" : "Self-Paced"}</div>
              <div className="mb-2 text-sm font-extrabold text-[#003057]">{c.title}</div>
              <div className="mb-3 text-sm text-[#003057]/80">{c.description}</div>
              <div className="flex items-center justify-between">
                <button className="rounded-md bg-[#B3A369] px-3 py-2 text-sm font-semibold text-[#003057] hover:bg-[#a4945c]">Enroll Now</button>
                {c.popularity && <div className="text-xs text-[#003057]/70">★ {Math.round((c.popularity / 1000) * 5) / 1}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
