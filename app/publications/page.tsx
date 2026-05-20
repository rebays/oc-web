import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Publications & Reports",
  description: "Research papers, policy briefs, and evaluation reports published by OrgClinic.",
};

export default function PublicationsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PageHero title="Publications & Reports" />
      <Publications />
      <Footer />
    </main>
  );
}
