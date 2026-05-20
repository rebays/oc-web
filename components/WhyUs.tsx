import { Globe, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

function WhyUs() {
  return (
    <section id="about" className="relative bg-white px-6 py-24 dark:bg-zinc-950 md:px-12 overflow-hidden">
      {/* Subtle Background Text for Texture */}
      <div className="absolute -bottom-10 -left-10 select-none opacity-[0.02] dark:opacity-[0.05]">
        <h2 className="text-[12rem] font-black tracking-tighter">COMMITMENT</h2>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
        
        {/* Visual Column */}
        <div className="relative w-full flex-1 group">
          <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1629828552784-259160352ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
              alt="Solomon Islands Landscape"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#004771]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Floating Stats/Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white">
              <p className="text-sm font-medium uppercase tracking-widest opacity-80 mb-1">Our Mission</p>
              <p className="text-xl font-bold italic">&quot;Empowering the Solomon Islands through structural integrity and local wisdom.&quot;</p>
            </div>
          </div>
          
          {/* Decorative geometric accent */}
          <div className="absolute -top-4 -right-4 -z-10 h-32 w-32 rounded-full bg-[#106c9d]/10 blur-3xl" />
        </div>

        {/* Content Column */}
        <div className="flex-1 lg:pl-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#106c9d]" />
            <span className="text-sm font-bold uppercase tracking-widest text-[#106c9d]">Our Foundation</span>
          </div>

          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white md:text-5xl leading-[1.1]">
            Bridging Local Wisdom with <br />
            <span className="text-[#106c9d]">Global Excellence.</span>
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            OrgClinic is a specialized advisory firm deeply rooted in the Solomon Islands. We understand that sustainable growth isn&apos;t just about efficiency—it&apos;s about building organizations that respect local culture while competing at international standards.
          </p>

          <div className="space-y-6">
            {[
              { label: "Deep Local Market Understanding", icon: <Globe size={18} /> },
              { label: "Actionable & Sustainable Solutions", icon: <Award size={18} /> },
              { label: "Community-Centric Approach", icon: <Users size={18} /> },
              { label: "Ethical & Transparent Practices", icon: <CheckCircle size={18} /> }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group flex items-center gap-4 border-l-2 border-zinc-100 py-1 pl-6 transition-all hover:border-[#106c9d]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#106c9d]/5 text-[#106c9d] transition-colors group-hover:bg-[#106c9d] group-hover:text-white">
                  {item.icon}
                </div>
                <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 transition-colors group-hover:text-[#106c9d]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <button type="button" className="mt-12 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#004771] dark:text-[#106c9d] hover:underline decoration-2 underline-offset-8 transition-all">
            Read our full story <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;