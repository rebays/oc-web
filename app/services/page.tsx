import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services",
  description: "OrgClinic's advisory services — institutional diagnostics, strategic planning, capacity building, and governance reform across Solomon Islands and the Pacific.",
};

const services = [
  {
    title: "Institutional Diagnostics",
    description:
      "A comprehensive assessment of your organisation's health — governance structures, operational capacity, culture, and systemic risks. We identify what's working, what isn't, and why.",
    points: ["Organisational health assessments", "Governance mapping", "Capacity gap analysis", "Risk and bottleneck identification"],
  },
  {
    title: "Strategic Planning",
    description:
      "Evidence-based strategy development that translates your mandate into a clear, actionable roadmap — co-designed with leadership and grounded in the realities of your operating environment.",
    points: ["Strategic plan development", "Theory of change facilitation", "Priority-setting workshops", "Operational planning"],
  },
  {
    title: "Capacity Building",
    description:
      "We build the internal capabilities your organisation needs to perform — through targeted training, mentoring, system design, and knowledge transfer that sticks.",
    points: ["Leadership development", "Staff training programmes", "Systems and process design", "Knowledge management"],
  },
  {
    title: "Governance Reform",
    description:
      "Supporting governments and public institutions to strengthen accountability, transparency, and effectiveness — with deep respect for local political context and cultural dynamics.",
    points: ["Policy review and reform", "Accountability frameworks", "Board and executive strengthening", "Stakeholder engagement"],
  },
  {
    title: "Monitoring & Evaluation",
    description:
      "Rigorous M&E frameworks that go beyond compliance — built to generate genuine learning, inform adaptive management, and demonstrate real impact to funders and communities.",
    points: ["M&E framework design", "Data collection systems", "Mid-term and final evaluations", "Learning and reporting"],
  },
  {
    title: "Programme Management",
    description:
      "End-to-end management support for development programmes — from design through to close-out — ensuring quality delivery, financial integrity, and meaningful community benefit.",
    points: ["Programme design and inception", "Project management support", "Financial oversight", "Donor reporting"],
  },
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PageHero title="Our Services" />

      {/* Intro */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-[#002b47]">
            What We Deliver
          </h2>
          <p className="text-base leading-relaxed text-zinc-500">
            From rapid diagnostics to multi-year reform programmes, our services are tailored to the complexity of your challenge. We work across the public sector, civil society, and the development sector throughout Solomon Islands and the broader Pacific.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#f0f8ff] px-6 pb-28 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-[#dbeeff] bg-white px-8 py-8 shadow-sm"
              >
                <h3 className="mb-3 text-lg font-extrabold text-[#002b47]">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-zinc-500">{service.description}</p>
                <ul className="mt-auto flex flex-col gap-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[#004771]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b9fd4]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#002b47] px-6 py-32 md:px-12">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#004771] opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#106c9d] opacity-20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-white">
            Not Sure Where to Start?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-[#a8c8de]">
            Most engagements begin with a diagnostic. Talk to us and we'll help you identify the right entry point for your organisation.
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
