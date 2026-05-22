import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Careers",
  description: "Join the OrgClinic team — we're looking for practitioners who are serious about building effective institutions across Solomon Islands and the Pacific.",
};

const values = [
  {
    title: "Locally Led",
    description: "We believe lasting change is driven by people who understand the context. We prioritise local knowledge, local leadership, and local ownership.",
  },
  {
    title: "Rigorous",
    description: "We hold ourselves to high standards — in our analysis, our writing, and our advice. We say what the evidence shows, even when it's uncomfortable.",
  },
  {
    title: "Collaborative",
    description: "We work alongside our clients, not above them. The best strategies come from genuine partnership between advisors and the people who live with the results.",
  },
  {
    title: "Adaptive",
    description: "Pacific contexts are complex and fast-moving. We plan carefully, but we stay nimble — adjusting when conditions change and learning as we go.",
  },
];

const openRoles: { title: string; type: string; location: string; description: string }[] = [];

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PageHero title="Careers" />

      {/* Intro */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-[#002b47]">
            Work That Matters
          </h2>
          <p className="text-base leading-relaxed text-zinc-500">
            OrgClinic is a small, high-performing team of practitioners committed to building effective institutions across Solomon Islands and the Pacific. We're looking for people who bring deep expertise, a collaborative mindset, and genuine passion for the region.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f0f8ff] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-2xl font-extrabold text-[#002b47]">How We Work</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl border border-[#dbeeff] bg-white px-8 py-8 shadow-sm">
                <h3 className="mb-3 text-base font-extrabold text-[#002b47]">{v.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-2xl font-extrabold text-[#002b47]">Open Roles</h2>

          {openRoles.length > 0 ? (
            <div className="flex flex-col gap-4">
              {openRoles.map((role, i) => (
                <div key={i} className="flex items-center justify-between rounded-2xl border border-[#dbeeff] bg-[#f0f8ff] px-8 py-6">
                  <div>
                    <h3 className="font-extrabold text-[#002b47]">{role.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{role.type} · {role.location}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">{role.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="ml-8 shrink-0 rounded-full bg-[#106c9d] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#004771]"
                  >
                    Apply
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-[#dbeeff] bg-[#f0f8ff] px-10 py-16 text-center">
              <p className="text-lg font-extrabold text-[#002b47]">No open roles right now.</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                We don't always advertise. If you're a strong fit for our work, we'd still like to hear from you.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-full border-2 border-[#106c9d] px-8 py-4 font-bold text-[#106c9d] transition-all hover:bg-[#106c9d] hover:text-white hover:-translate-y-0.5"
              >
                Send a Speculative Application
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#002b47] px-6 py-32 md:px-12">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#004771] opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#106c9d] opacity-20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-white">
            Think You Belong Here?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-[#a8c8de]">
            We're always open to conversations with talented practitioners who share our values. Reach out and introduce yourself.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#106c9d] px-8 py-4 font-bold text-white shadow-lg shadow-[#106c9d]/30 transition-all hover:bg-[#004771] hover:-translate-y-0.5 active:scale-95"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
