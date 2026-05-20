import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <CTA />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
