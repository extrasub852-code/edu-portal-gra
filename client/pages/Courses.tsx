import { useMemo } from "react";
import { useCourses } from "@/hooks/useCourses";
import { CourseCardSelfPaced } from "@/components/courses/CourseCardSelfPaced";
import { CourseCardLive } from "@/components/courses/CourseCardLive";
import { RecommendationsCarousel } from "@/components/courses/RecommendationsCarousel";
import { courses as seedCourses, recommended as recommendedSeed } from "@/data/courses";

export default function Courses() {
  const { loading, data } = useCourses();

  const selfPaced = useMemo(() => data.filter((c) => c.type === "self"), [data]);
  const live = useMemo(() => data.filter((c) => c.type === "live"), [data]);
  const upcoming = useMemo(() => data.filter((c) => new Date(c.nextSession || 0).getTime() > Date.now()), [data]);

  const recommendations = recommendedSeed;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-[#003057]">Your Courses</h1>
        <p className="mt-2 text-base font-semibold text-[#B3A369]">Track your learning and discover what's next</p>
      </div>

      <div className="mt-10">
        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-[#003057]">Self-Paced Courses</h2>
            <div className="text-sm text-[#003057]/70">{loading ? "Loading..." : `${selfPaced.length} courses`}</div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <svg className="h-8 w-8 animate-spin text-[#B3A369]" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0h-2a6 6 0 10-6 6v2A8 8 0 014 12z" />
              </svg>
            </div>
          ) : selfPaced.length === 0 ? (
            <div className="rounded-xl border border-[#003057]/10 bg-white p-6 text-center text-[#003057] shadow-sm">
              <p className="mb-2 text-lg font-extrabold">No self-paced courses found</p>
              <p className="text-sm text-[#003057]/70">Explore recommended courses below to continue learning.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {selfPaced.map((c) => (
                <CourseCardSelfPaced key={c.id} course={c} onContinue={() => alert(`Continue ${c.title}`)} />
              ))}
            </div>
          )}
        </section>

        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-[#003057]">Live Courses</h2>
            <div className="text-sm text-[#003057]/70">{loading ? "Loading..." : `${live.length} upcoming`}</div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <svg className="h-8 w-8 animate-spin text-[#B3A369]" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0h-2a6 6 0 10-6 6v2A8 8 0 014 12z" />
              </svg>
            </div>
          ) : live.length === 0 ? (
            <div className="rounded-xl border border-[#003057]/10 bg-white p-6 text-center text-[#003057] shadow-sm">
              <p className="mb-2 text-lg font-extrabold">No live courses scheduled</p>
              <p className="text-sm text-[#003057]/70">Check upcoming sessions or browse recommended live trainings.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {live.map((c) => (
                <CourseCardLive key={c.id} course={c} onJoin={() => alert(`Join ${c.title}`)} />
              ))}
            </div>
          )}
        </section>

        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-[#003057]">Upcoming Courses</h2>
            <div className="text-sm text-[#003057]/70">{upcoming.length} upcoming</div>
          </div>

          {upcoming.length === 0 ? (
            <div className="rounded-xl border border-[#003057]/10 bg-white p-4 text-sm text-[#003057]/70">No upcoming courses</div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((c) => (
                <div key={c.id} className="rounded-xl border border-[#003057]/10 bg-white p-4 shadow-sm">
                  <div className="mb-2 text-xs font-semibold text-[#B3A369]">{c.type === "live" ? "Live" : "Self-Paced"}</div>
                  <div className="mb-1 text-sm font-extrabold text-[#003057]">{c.title}</div>
                  <div className="mb-3 text-sm text-[#003057]/80">{c.description}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-[#003057]/70">{c.nextSession ? new Date(c.nextSession).toLocaleDateString() : "TBD"}</div>
                    <button className="rounded-md bg-[#B3A369] px-3 py-2 text-sm font-semibold text-[#003057] hover:bg-[#a4945c]">Details</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <RecommendationsCarousel items={recommendations} />
        </section>
      </div>
    </div>
  );
}
