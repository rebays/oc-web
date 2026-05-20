import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import WhoWeAre from "@/components/WhoWeAre";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us",
  description: "Learn about OrgClinic — our mission, our approach, and the impact we've delivered across Solomon Islands and the Pacific.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PageHero title="About Us" />
      <WhoWeAre />
      <WhyUs />
      <Footer />
    </main>
  );
}
