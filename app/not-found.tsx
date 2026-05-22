import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-[#002b47] px-6 py-40 text-center">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#004771] opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#106c9d] opacity-20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <span
            className="text-[10rem] leading-none text-white/10 select-none"
            style={{ fontFamily: "var(--font-evermore)" }}
          >
            404
          </span>

          <div className="-mt-8 flex flex-col items-center gap-4">
            <h1 className="text-3xl font-black text-white md:text-4xl">
              Page Not Found
            </h1>
            <p className="max-w-md text-base leading-relaxed text-[#a8c8de]">
              This page doesn't exist or has been moved. Let's get you back to where the work happens.
            </p>
          </div>

          <Link
            href="/"
            className="mt-4 inline-flex items-center rounded-full bg-[#106c9d] px-8 py-4 font-bold text-white shadow-lg shadow-[#106c9d]/30 transition-all hover:bg-[#004771] hover:-translate-y-0.5 active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
