import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Process",
  description: "How OrgClinic works — a structured, evidence-based approach to institutional diagnostics and strategic advisory.",
};

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by listening. Through interviews, document reviews, and structured observation, we build a clear picture of your organisation — its mandate, its people, and the pressures it operates under.",
  },
  {
    number: "02",
    title: "Diagnosis",
    description:
      "Using our institutional diagnostics framework, we identify root causes — not just symptoms. We map governance structures, decision-making flows, capacity gaps, and systemic blockers.",
  },
  {
    number: "03",
    title: "Co-Design",
    description:
      "Solutions are built with your team, not handed down to them. We facilitate structured workshops to co-design strategies that are grounded in local context and politically achievable.",
  },
  {
    number: "04",
    title: "Implementation Support",
    description:
      "We remain engaged through execution — providing technical assistance, coaching leaders, and adapting the plan as conditions on the ground evolve.",
  },
  {
    number: "05",
    title: "Monitoring & Evaluation",
    description:
      "We establish clear indicators from the outset and track them rigorously. Progress is documented, lessons are captured, and results are reported transparently to all stakeholders.",
  },
  {
    number: "06",
    title: "Sustainability Handover",
    description:
      "Every engagement ends with a deliberate transition — ensuring your team owns the systems, skills, and knowledge to sustain the gains long after we leave.",
  },
];

export default function ProcessPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PageHero title="Our Process" />

      {/* Intro */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-[#002b47]">
            Rigorous. Adaptive. Locally Grounded.
          </h2>
          <p className="text-base leading-relaxed text-zinc-500">
            Our methodology is built on decades of on-the-ground experience across Solomon Islands and the Pacific. Every engagement follows a structured six-phase approach — flexible enough to fit your context, robust enough to deliver real change.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#f0f8ff] px-6 pb-28 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-8 rounded-2xl border border-[#dbeeff] bg-white px-8 py-8 shadow-sm"
              >
                <span className="shrink-0 text-5xl font-black text-[#dbeeff] leading-none">
                  {step.number}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-extrabold text-[#002b47]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500">{step.description}</p>
                </div>
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
            Ready to Start the Conversation?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-[#a8c8de]">
            Every engagement begins with a no-obligation discovery call. Tell us about your organisation and we'll tell you how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#106c9d] px-8 py-4 font-bold text-white shadow-lg shadow-[#106c9d]/30 transition-all hover:bg-[#004771] hover:-translate-y-0.5 active:scale-95"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
