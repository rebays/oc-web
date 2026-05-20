import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "OrgClinic transformed our operational efficiency. Their understanding of local nuances was invaluable to our expansion.",
    name: "Maria T.",
    title: "CEO, Honiara Trading Co.",
    initials: "HT",
  },
  {
    quote: "The strategic planning sessions were incredibly insightful. We now have a clear path forward for the next five years.",
    name: "John F.",
    title: "Director, Ministry of Health",
    initials: "MH",
  },
  {
    quote: "Their capacity building program significantly boosted our team's morale and productivity. A sustainable partnership indeed.",
    name: "Sarah L.",
    title: "Program Manager, Local NGO",
    initials: "LN",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-white px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#002b47] md:text-5xl">
            Trusted by the <span className="text-[#106c9d]">Pacific&apos;s Leaders.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-[#dbeeff] bg-[#f0f8ff] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#004771]/8"
            >
              <Quote className="mb-6 text-[#dbeeff]" size={36} fill="currentColor" />

              <p className="mb-8 flex-1 text-base leading-relaxed text-zinc-700">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 border-t border-[#dbeeff] pt-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#004771] text-xs font-bold uppercase tracking-wider text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-[#002b47]">{t.name}</p>
                  <p className="text-xs font-medium text-[#106c9d]">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners placeholder */}
        <div className="mt-20 border-t border-[#dbeeff] pt-12 text-center">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
            Partnering with Organizations across the Islands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-20">
            <div className="h-5 w-32 rounded-full bg-[#004771]" />
            <div className="h-5 w-24 rounded-full bg-[#004771]" />
            <div className="h-5 w-36 rounded-full bg-[#004771]" />
            <div className="h-5 w-28 rounded-full bg-[#004771]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
