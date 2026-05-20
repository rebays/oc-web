import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "OrgClinic — Institutional Diagnostics & Strategic Advisory",
  description:
    "OrgClinic is a specialised advisory firm delivering institutional diagnostics, strategic planning, and capacity building for governments, NGOs, and development partners across Solomon Islands and the Pacific.",
  openGraph: {
    title: "OrgClinic — Institutional Diagnostics & Strategic Advisory",
    description:
      "Specialised advisory for governments, NGOs, and development partners across Solomon Islands and the Pacific.",
    siteName: "OrgClinic",
  },
};
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import WhyUs from "@/components/WhyUs";
import WhoWeAre from "@/components/WhoWeAre";
import FeaturedProjects from "@/components/FeaturedProjects";
import CTA from "@/components/CTA";
import Publications from "@/components/Publications";
import LatestArticles from "@/components/LatestArticles";
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
      <Publications />
      <LatestArticles />
      <CTA />
      <Footer />
    </main>
  );
}
