import { ChevronRight } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-[#002b47]">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/helping-hand.jpg"
          alt="OrgClinic — Helping hand"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#002b47]/80 via-[#002b47]/60 to-[#004771]/50" />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-[#106c9d]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#3b9fd4]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-12 pt-52 pb-24 text-center">
        <div>

          {/* Content */}
          <div>
            <h1 className="mb-6 text-4xl font-black font-serif text-white leading-[1.05] md:text-5xl lg:text-6xl">
              Better Health<br />
              for Your{" "}
              <span className="text-[#3b9fd4]">Organization.</span>
            </h1>

            <p className="mb-10 max-w-lg text-2xl font-bold leading-relaxed text-[#a8c8de]">
              Institutional diagnostics and strategic advisory for Solomon Islands organizations.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#106c9d] px-8 py-4 font-bold text-white shadow-lg shadow-[#106c9d]/30 transition-all hover:bg-[#3b9fd4] hover:-translate-y-0.5 active:scale-95"
              >
                Book a Consultation
                <ChevronRight size={18} />
              </a>
            </div>
          </div>


        {/* Scroll cue */}
        <div className="mt-20 flex justify-center">
          <div className="h-12 w-px bg-linear-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
