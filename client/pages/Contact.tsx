import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    // Simulate send
    setTimeout(() => setStatus("sent"), 800);
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-[#003057]">Contact Us</h1>
        <p className="mt-2 text-base font-semibold text-[#B3A369]">We're here to help — send us a message</p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-[#003057]">Need assistance?</h2>
          <p className="text-[#003057]/90">Our support team typically responds within 1 business day. For urgent inquiries, please include a phone number.</p>

          <div className="mt-4 space-y-3 rounded-xl border border-[#003057]/10 bg-white p-4 shadow-sm">
            <div>
              <div className="text-sm font-semibold text-[#003057]">Email</div>
              <div className="text-sm text-[#003057]/80">hello@eduportal.example</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-[#003057]">Phone</div>
              <div className="text-sm text-[#003057]/80">+1 (555) 123-4567</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-[#003057]">Office Hours</div>
              <div className="text-sm text-[#003057]/80">Mon — Fri, 9:00 — 18:00</div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-extrabold text-[#003057]">Follow us</h3>
            <div className="mt-2 flex gap-3">
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#003057] text-[#B3A369]">f</a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#003057] text-[#B3A369]">t</a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#003057] text-[#B3A369]">in</a>
            </div>
          </div>
        </section>

        <section>
          <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-[#003057]/10 bg-white p-6 shadow-sm">
            <label className="block text-sm font-semibold text-[#003057]">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border border-[#003057]/20 px-3 py-2 text-sm text-[#003057]" />

            <label className="block text-sm font-semibold text-[#003057]">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border border-[#003057]/20 px-3 py-2 text-sm text-[#003057]" />

            <label className="block text-sm font-semibold text-[#003057]">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="w-full rounded-md border border-[#003057]/20 px-3 py-2 text-sm text-[#003057]" />

            <div className="flex items-center justify-between">
              <div className="text-sm text-[#003057]/70">
                {status === "error" && <span className="text-red-500">Please fill all fields</span>}
                {status === "sent" && <span className="text-green-600">Message sent. We'll be in touch.</span>}
              </div>

              <button type="submit" className="rounded-md bg-[#B3A369] px-4 py-2 text-sm font-semibold text-[#003057] hover:bg-[#a4945c]">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
