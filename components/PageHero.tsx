import Image from "next/image";

interface PageHeroProps {
  title: string;
}

function PageHero({ title }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center bg-white">
      <div
        className="absolute inset-x-0 top-0 bottom-0 z-0 overflow-hidden"
        style={{ borderRadius: "0 0 50% 50% / 0 0 5rem 5rem" }}
      >
        <Image
          src="/helping-hand.jpg"
          alt="OrgClinic"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#002b47]/80 via-[#002b47]/60 to-[#004771]/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-12 pt-36 pb-24 text-center">
        <h1 className="text-4xl font-black text-white leading-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}

export default PageHero;
