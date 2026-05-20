"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { type: "image", src: "/helping-hand.jpg", alt: "OrgClinic — Helping hand" },
  { type: "video", src: "/hero.mp4" },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[115vh] flex items-center bg-white">

      {/* Carousel container */}
      <div className="absolute inset-x-0 top-0 bottom-16 z-0 overflow-hidden" style={{ borderRadius: "0 0 50% 50% / 0 0 5rem 5rem" }}>

        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            {slide.type === "video" ? (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt!}
                fill
                priority
                className="object-cover"
              />
            )}
          </div>
        ))}

        <div className="absolute inset-0 bg-linear-to-br from-[#002b47]/80 via-[#002b47]/60 to-[#004771]/50" />

        {/* Decorative glows */}
        <div className="absolute top-1/4 right-0 h-125 w-125 rounded-full bg-[#106c9d]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#3b9fd4]/10 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-12 pt-52 pb-40 text-center">

        <h1 className="mb-6 text-4xl font-black text-white leading-[1.05] md:text-5xl lg:text-6xl">
          Better Health<br />
          for Your{" "}
          <span className="text-[#3b9fd4]">Organization.</span>
        </h1>

        <p className="mb-10 mx-auto max-w-lg text-2xl font-bold leading-relaxed text-[#a8c8de]">
          Institutional diagnostics and strategic advisory for Solomon Islands organizations.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#106c9d] px-8 py-4 font-bold text-white shadow-lg shadow-[#106c9d]/30 transition-all hover:bg-[#3b9fd4] hover:-translate-y-0.5 active:scale-95"
          >
            Book a Consultation
          </a>
        </div>

        {/* Slide indicators */}
        <div className="mt-10 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;
