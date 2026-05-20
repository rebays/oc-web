import { BarChart, Briefcase, ChevronRight, Lightbulb, Shield, TrendingUp, Users } from "lucide-react";

const services = [
  {
    title: "Organizational Health Audits",
    desc: "In-depth diagnostics to identify root causes of inefficiencies and bottlenecks, providing a clear path to recovery.",
    icon: <Lightbulb size={22} />,
  },
  {
    title: "Strategic Planning & Execution",
    desc: "Crafting actionable strategies that align with your vision and market realities, ensuring measurable progress.",
    icon: <BarChart size={22} />,
  },
  {
    title: "Capacity Building & Training",
    desc: "Empowering your team with customized workshops and skill development programs for sustainable performance.",
    icon: <Users size={22} />,
  },
  {
    title: "Project Management Excellence",
    desc: "Guiding complex projects from initiation to completion, ensuring on-time and on-budget delivery.",
    icon: <Briefcase size={22} />,
  },
  {
    title: "Governance & Compliance",
    desc: "Establishing robust frameworks to ensure ethical operations, transparency, and regulatory adherence.",
    icon: <Shield size={22} />,
  },
  {
    title: "Impact Measurement & Evaluation",
    desc: "Designing systems to track, analyze, and report on the true impact of your programs and initiatives.",
    icon: <TrendingUp size={22} />,
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#f0f8ff] px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#106c9d]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#106c9d]">Our Expertise</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#002b47] md:text-5xl">
              Solutions Built for<br />
              <span className="text-[#106c9d]">Pacific Resilience.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base text-zinc-500 leading-relaxed md:text-right">
            International best practices, deeply rooted in local context.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-[#dbeeff] p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#004771]/8 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-[#106c9d] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#dbeeff] text-[#004771] transition-all duration-300 group-hover:bg-[#004771] group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="mb-3 text-lg font-bold text-[#002b47] transition-colors group-hover:text-[#004771]">
                {service.title}
              </h3>

              <p className="mb-6 text-sm text-zinc-500 leading-relaxed">
                {service.desc}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#106c9d] transition-colors hover:text-[#004771]"
              >
                Inquire
                <ChevronRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
