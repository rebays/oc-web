const stats = [
  { value: "10+", label: "Years Established" },
  { value: "8",   label: "Countries Worked In" },
  { value: "60+", label: "Projects Delivered" },
  { value: "85%", label: "Locally-Led Projects" },
];

function WhyUs() {
  return (
    <section id="about" className="bg-[#f0f8ff] px-6 py-28 md:px-12">
      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#106c9d]">At a Glance</p>
        <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-[#002b47] md:text-5xl">
          Our Impact in Numbers
        </h2>
        <p className="mb-16 text-base leading-relaxed text-zinc-500 max-w-xl mx-auto">
          Over a decade of on-the-ground advisory work across the Pacific, delivering measurable outcomes for governments, NGOs, and institutions.
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#dbeeff] bg-white px-6 py-10 shadow-sm"
            >
              <p className="mb-2 text-5xl font-black text-[#004771]">{s.value}</p>
              <p className="text-sm font-semibold text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#106c9d] px-8 py-4 font-bold text-white shadow-lg shadow-[#106c9d]/30 transition-all hover:bg-[#004771] hover:-translate-y-0.5 active:scale-95"
          >
            See Our Work
          </a>
        </div>

      </div>
    </section>
  );
}

export default WhyUs;
