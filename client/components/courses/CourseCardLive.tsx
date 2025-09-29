import { useEffect, useMemo, useState } from "react";
import type { Course } from "@/data/courses";

function formatCountdown(ms: number) {
  if (ms <= 0) return "Starting soon";
  const s = Math.floor(ms / 1000) % 60;
  const m = Math.floor(ms / (1000 * 60)) % 60;
  const h = Math.floor(ms / (1000 * 60 * 60)) % 24;
  const d = Math.floor(ms / (1000 * 60 * 60 * 24));
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m ${s}s`;
}

export function CourseCardLive({ course, onJoin }: { course: Course; onJoin?: (id: string) => void }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const nextDate = useMemo(() => (course.nextSession ? new Date(course.nextSession) : null), [course.nextSession]);
  const diff = nextDate ? nextDate.getTime() - now : null;

  return (
    <article className="flex flex-col rounded-xl border border-[#003057]/10 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-extrabold text-[#003057]">{course.title}</h3>
        <span className="text-xs font-semibold text-[#B3A369]">Live</span>
      </div>
      <p className="mb-3 text-sm text-[#003057]/80">{course.description}</p>

      <div className="mb-4 flex items-center justify-between text-sm">
        <div>
          <div className="text-xs font-semibold text-[#B3A369]">Next Session</div>
          <div className="text-sm text-[#003057]">{nextDate ? nextDate.toLocaleString() : "TBA"}</div>
        </div>
        <div className="text-right text-sm">
          <div className="text-xs font-semibold text-[#003057]/70">Instructor</div>
          <div className="text-sm text-[#003057]">{course.instructor ?? "—"}</div>
        </div>
      </div>

      <div className="mb-4 text-sm text-[#003057]/70">{diff !== null ? `Starts in ${formatCountdown(diff)}` : "Date TBD"}</div>

      <div className="mt-auto flex items-center justify-end gap-3">
        <button
          onClick={() => onJoin?.(course.id)}
          className="rounded-md bg-[#B3A369] px-4 py-2 text-sm font-semibold text-[#003057] shadow-sm hover:bg-[#a4945c]"
        >
          Join Session
        </button>
      </div>
    </article>
  );
}
