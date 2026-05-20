
function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#002b47] px-6 py-28 md:px-12">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#004771] opacity-60 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#106c9d] opacity-20 blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white leading-tight">
          Ready to Transform<br />
          <span className="text-[#3b9fd4]">Your Organization?</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-[#a8c8de]">
          Whether you&apos;re a local NGO or a government agency, our diagnostic approach uncovers the path to sustainable growth. Let&apos;s start the conversation.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center rounded-xl bg-[#106c9d] px-8 py-4 font-bold text-white shadow-2xl shadow-[#106c9d]/30 transition-all hover:bg-[#3b9fd4] hover:-translate-y-0.5 active:scale-95"
        >
          Request a Free Consultation
        </a>
      </div>
    </section>
  );
}

export default CTA;
