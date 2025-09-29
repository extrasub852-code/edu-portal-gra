export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-[#003057]">About EduPortal</h1>
        <p className="mt-2 text-base font-semibold text-[#B3A369]">A streamlined platform for learning, teaching, and growth</p>
      </header>

      <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-extrabold text-[#003057]">Our Mission</h2>
          <p className="text-[#003057]/90">
            EduPortal exists to make high-quality learning accessible and effective. We combine community-contributed
            use cases, curated courses, and intelligent tool recommendations so learners and educators can go from idea to
            impact faster.
          </p>

          <h3 className="mt-6 text-lg font-extrabold text-[#003057]">What we offer</h3>
          <ul className="mt-3 space-y-3">
            <li className="flex gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#B3A369]/20 text-[#003057]">📚</span>
              <div>
                <div className="font-semibold text-[#003057]">Curated Courses</div>
                <div className="text-sm text-[#003057]/80">High-quality self-paced and live courses taught by practitioners.</div>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#B3A369]/20 text-[#003057]">🤝</span>
              <div>
                <div className="font-semibold text-[#003057]">Community Knowledge</div>
                <div className="text-sm text-[#003057]/80">Real use cases and examples shared by educators and builders.</div>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#B3A369]/20 text-[#003057]">🛠️</span>
              <div>
                <div className="font-semibold text-[#003057]">Practical Tools</div>
                <div className="text-sm text-[#003057]/80">AI tool suggestions with ready-made prompts to accelerate your work.</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-[#003057]/10 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-extrabold text-[#003057]">By the numbers</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-md bg-[#F7F8FA] p-4 text-center">
              <div className="text-2xl font-extrabold text-[#003057]">1,200+</div>
              <div className="mt-1 text-sm text-[#003057]/70">Courses available</div>
            </div>
            <div className="rounded-md bg-[#F7F8FA] p-4 text-center">
              <div className="text-2xl font-extrabold text-[#003057]">85k+</div>
              <div className="mt-1 text-sm text-[#003057]/70">Learners worldwide</div>
            </div>
            <div className="rounded-md bg-[#F7F8FA] p-4 text-center">
              <div className="text-2xl font-extrabold text-[#003057]">3.8k</div>
              <div className="mt-1 text-sm text-[#003057]/70">Community use cases</div>
            </div>
            <div className="rounded-md bg-[#F7F8FA] p-4 text-center">
              <div className="text-2xl font-extrabold text-[#003057]">99%</div>
              <div className="mt-1 text-sm text-[#003057]/70">Satisfaction rating</div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-extrabold text-[#003057]">Our Team</h4>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-md border border-[#003057]/8 p-3">
                <div className="h-10 w-10 rounded-full bg-[#003057] flex items-center justify-center text-sm font-bold text-[#B3A369]">AL</div>
                <div>
                  <div className="font-semibold text-[#003057]">Alex Lee</div>
                  <div className="text-xs text-[#003057]/70">Chief Product Officer</div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-md border border-[#003057]/8 p-3">
                <div className="h-10 w-10 rounded-full bg-[#003057] flex items-center justify-center text-sm font-bold text-[#B3A369]">PS</div>
                <div>
                  <div className="font-semibold text-[#003057]">Priya Singh</div>
                  <div className="text-xs text-[#003057]/70">Head of Curriculum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-[#003057]/10 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-extrabold text-[#003057]">Get involved</h3>
        <p className="mt-2 text-[#003057]/80">Share a use case, suggest a course, or partner with us to reach more learners.</p>
        <div className="mt-4 flex items-center gap-3">
          <a href="/contact" className="rounded-md bg-[#B3A369] px-4 py-2 text-sm font-semibold text-[#003057]">Contact Us</a>
          <a href="/use-case-finder" className="rounded-md border border-[#003057]/10 px-4 py-2 text-sm font-semibold text-[#003057]">Find Use Cases</a>
        </div>
      </section>
    </main>
  );
}
