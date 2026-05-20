function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-white px-6 py-28 md:px-12">
      <div className="mx-auto max-w-2xl text-center">

        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-[#002b47]">
          Who We Are
        </h2>

        <p className="mb-10 text-base leading-relaxed text-zinc-500">
          OrgClinic was founded by practitioners who have spent careers inside the institutions they now advise. We combine deep local knowledge with globally tested frameworks to help governments, NGOs, and development partners build organizations that are effective, resilient, and accountable — not just on paper, but in practice.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center rounded-full border-2 border-[#106c9d] px-8 py-4 font-bold text-[#106c9d] transition-all hover:bg-[#106c9d] hover:text-white hover:-translate-y-0.5 active:scale-95"
        >
          Learn More
        </a>

      </div>
    </section>
  );
}

export default WhoWeAre;
