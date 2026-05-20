import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact",
  description: "Get in touch with OrgClinic to book a consultation or learn more about our advisory services.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PageHero title="Get in Touch" />
      <Contact />
      <Footer />
    </main>
  );
}
