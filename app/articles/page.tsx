import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import LatestArticles from "@/components/LatestArticles";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Articles",
  description: "Insights, analysis, and commentary from the OrgClinic team on governance, capacity building, and institutional reform.",
};

export default function ArticlesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PageHero title="Articles" />
      <LatestArticles />
      <Footer />
    </main>
  );
}
