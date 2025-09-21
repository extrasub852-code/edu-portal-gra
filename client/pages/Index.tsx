import { Link } from "react-router-dom";
import { ArrowRight, Search, Layers, Sparkles } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-white to-[#F7F9FC]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-[#003057] sm:text-5xl">
              Find the fastest path from idea to implementation
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[#003057]/80">
              Describe your project and instantly discover vetted community solutions or AI tools with battle-tested prompts.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/use-case-finder"
                className="inline-flex items-center justify-center rounded-md bg-[#003057] px-5 py-3 text-sm font-semibold text-[#B3A369] shadow-sm transition-colors hover:bg-[#022d52]"
              >
                <Search className="mr-2 h-4 w-4" />
                Try Use Case Finder
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center rounded-md border border-[#003057]/20 bg-white px-5 py-3 text-sm font-semibold text-[#003057] shadow-sm transition-colors hover:bg-[#003057]/5"
              >
                Browse Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Feature icon={<Search className="h-5 w-5" />} title="Targeted Results" desc="Match requirements to real use cases" />
              <Feature icon={<Sparkles className="h-5 w-5" />} title="AI-Powered" desc="Actionable tools and prompts" />
              <Feature icon={<Layers className="h-5 w-5" />} title="Organized" desc="Filter by category and relevance" />
            </div>
          </div>
          <div>
            <div className="relative mx-auto h-80 w-full max-w-lg overflow-hidden rounded-2xl border border-[#003057]/10 bg-white shadow-lg">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B3A369]/20 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-lg border border-[#003057]/15 bg-white/70 p-6 text-center backdrop-blur">
                  <p className="text-sm font-semibold text-[#003057]">
                    "Describe your project or requirement here..."
                  </p>
                  <div className="mt-3 inline-flex items-center rounded-md bg-[#003057] px-4 py-2 text-sm font-semibold text-[#B3A369]">
                    <Search className="mr-2 h-4 w-4" /> Find Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold text-[#003057]">Popular Categories</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["Education", "Healthcare", "Marketing", "Technology", "Business"].map((c) => (
            <Link
              key={c}
              to={`/use-case-finder?category=${encodeURIComponent(c)}`}
              className="rounded-full border border-[#003057]/20 px-4 py-2 text-sm font-semibold text-[#003057] hover:bg-[#003057]/5"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#0A1E2F] py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-extrabold">Built for Focus</h3>
            <p className="mt-3 text-white/80">
              Minimal, responsive, and distraction-free. Everything in EduPortal is designed to get you from idea to shipped results faster.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-[#003057]/10 bg-white p-4 shadow-sm">
      <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#B3A369]/20 text-[#003057]">
        {icon}
      </div>
      <div className="text-sm font-extrabold text-[#003057]">{title}</div>
      <p className="text-sm text-[#003057]/70">{desc}</p>
    </div>
  );
}
