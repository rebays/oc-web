import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Work",
  description: "Explore OrgClinic's featured projects and advisory engagements across Solomon Islands and the Pacific.",
};

export default function OurProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PageHero title="Our Work" />
      <FeaturedProjects />
      <Footer />
    </main>
  );
}
