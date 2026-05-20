const featured = {
  tag: "Governance & Institutional Reform",
  title: "Strengthening the Office of the Prime Minister",
  description:
    "A comprehensive institutional review and reform programme delivered in partnership with the PMO, focusing on restructuring internal workflows, improving policy coordination, and building the capacity of senior advisors to drive evidence-based decision-making across government.",
  year: "2023",
  client: "Prime Minister's Office",
};

const projects = [
  {
    tag: "Capacity Building",
    title: "RSIPF Leadership Development Programme",
    description: "Designed and facilitated a 12-month leadership curriculum for senior RSIPF officers, covering strategic management, accountability frameworks, and community policing.",
    client: "RSIPF",
    year: "2022",
  },
  {
    tag: "Strategic Planning",
    title: "SPREP Pacific Environment Strategy",
    description: "Supported SPREP in developing a regional environmental monitoring strategy aligned with Pacific Island Forum commitments and international climate obligations.",
    client: "SPREP",
    year: "2023",
  },
  {
    tag: "Health Systems",
    title: "MERHD Organisational Health Audit",
    description: "Conducted an end-to-end diagnostic of MERHD's operational structure, surfacing systemic bottlenecks and delivering a prioritised roadmap for reform.",
    client: "MERHD",
    year: "2024",
  },
];

function FeaturedProjects() {
  return (
    <section id="projects" className="bg-[#f0f8ff] px-6 py-28 md:px-12">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#106c9d]">Our Work</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-[#002b47] md:text-5xl">Featured Projects</h2>
        </div>

        {/* Main featured project */}
        <div className="mb-6 rounded-3xl bg-[#002b47] p-10 md:p-14">
          <span className="mb-4 inline-block rounded-full bg-[#106c9d]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#3b9fd4]">
            {featured.tag}
          </span>
          <h3 className="mb-5 text-2xl font-extrabold leading-snug text-white md:text-3xl">
            {featured.title}
          </h3>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#a8c8de]">
            {featured.description}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#a8c8de]/70">
            <span><span className="font-semibold text-[#a8c8de]">Client:</span> {featured.client}</span>
            <span><span className="font-semibold text-[#a8c8de]">Year:</span> {featured.year}</span>
          </div>
        </div>

        {/* Three project cards */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#dbeeff] bg-white p-7 flex flex-col gap-3"
            >
              <span className="self-start rounded-full bg-[#dbeeff] px-3 py-1 text-xs font-bold text-[#004771]">
                {p.tag}
              </span>
              <h4 className="text-base font-extrabold text-[#002b47] leading-snug">{p.title}</h4>
              <p className="text-sm leading-relaxed text-zinc-500 flex-1">{p.description}</p>
              <div className="mt-2 flex gap-4 text-xs text-zinc-400">
                <span>{p.client}</span>
                <span>{p.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#106c9d] px-8 py-4 font-bold text-white shadow-lg shadow-[#106c9d]/30 transition-all hover:bg-[#004771] hover:-translate-y-0.5 active:scale-95"
          >
            View Our Projects
          </a>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;
