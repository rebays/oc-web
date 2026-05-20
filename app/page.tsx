import Hero from "@/components/Hero";
import Header from "@/components/Header";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import WhyUs from "@/components/WhyUs";
import WhoWeAre from "@/components/WhoWeAre";
import FeaturedProjects from "@/components/FeaturedProjects";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <WhoWeWorkWith />
      <WhyUs />
      <WhoWeAre />
      <FeaturedProjects />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
