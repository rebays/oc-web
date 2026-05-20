import Image from "next/image";
import Header from "@/components/Header";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our People — OrgClinic",
  description:
    "Meet the advisors behind OrgClinic — practitioners with decades of on-the-ground experience in institutional reform, governance, and capacity building across Solomon Islands and the Pacific.",
  openGraph: {
    title: "Our People — OrgClinic",
    description:
      "The team behind OrgClinic: senior advisors with deep roots in Solomon Islands and internationally tested frameworks.",
    siteName: "OrgClinic",
  },
};

export default function PeoplePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Page hero — half screen height */}
      <section className="relative min-h-[50vh] flex items-center bg-white">
        <div
          className="absolute inset-x-0 top-0 bottom-0 z-0 overflow-hidden"
          style={{ borderRadius: "0 0 50% 50% / 0 0 5rem 5rem" }}
        >
          <Image
            src="/helping-hand.jpg"
            alt="OrgClinic — Our People"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-[#002b47]/80 via-[#002b47]/60 to-[#004771]/50" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-12 pt-36 pb-24 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#3b9fd4]">Leadership</p>
          <h1 className="text-4xl font-black font-serif text-white leading-tight md:text-5xl lg:text-6xl">
            Our People
          </h1>
        </div>
      </section>

      <Team />
      <Footer />
    </main>
  );
}
