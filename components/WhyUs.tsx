import { Globe, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const pillars = [
  { label: "Deep Local Market Understanding", icon: <Globe size={16} /> },
  { label: "Actionable & Sustainable Solutions", icon: <Award size={16} /> },
  { label: "Community-Centric Approach", icon: <Users size={16} /> },
  { label: "Ethical & Transparent Practices", icon: <CheckCircle size={16} /> },
];

function WhyUs() {
  return (
    <section id="about" className="bg-white px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <div className="relative h-[560px] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1629828552784-259160352ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                alt="Solomon Islands Landscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#002b47]/90 via-[#002b47]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#3b9fd4]">Our Mission</p>
                  <p className="font-semibold leading-snug text-white">
                    &ldquo;Empowering the Solomon Islands through structural integrity and local wisdom.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -right-6 top-10 hidden rounded-2xl bg-[#004771] p-6 shadow-2xl lg:block">
              <p className="text-3xl font-black text-white">20+</p>
              <p className="text-sm font-medium text-[#3b9fd4]">Years of<br />Pacific expertise</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#106c9d]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#106c9d]">Our Foundation</span>
            </div>

            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-[#002b47] leading-tight md:text-5xl">
              Local Wisdom.<br />
              <span className="text-[#106c9d]">Global Standards.</span>
            </h2>

            <p className="mb-10 text-base leading-relaxed text-zinc-600">
              OrgClinic is a specialized advisory firm deeply rooted in the Solomon Islands. We understand that sustainable growth isn&apos;t just about efficiency — it&apos;s about building organizations that respect local culture while competing at international standards.
            </p>

            <div className="mb-10 space-y-3">
              {pillars.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl border border-[#dbeeff] bg-[#f0f8ff] px-5 py-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#dbeeff] text-[#004771]">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#002b47]">{item.label}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#004771] transition-colors hover:text-[#106c9d]"
            >
              Read our full story <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
