import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our People",
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
      <PageHero title="Our People" />
      <Team />
      <Footer />
    </main>
  );
}
