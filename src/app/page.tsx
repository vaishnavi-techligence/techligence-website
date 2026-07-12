import Navbar from "../components/Navbar";
import ShowcaseVideo from "../components/ShowcaseVideo";
import Hero from "../components/Hero";
import ClientsCarousel from "@/components/ClientsCarousel";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import AboutTechligence from "@/components/AboutTechligence";

export default function Home() {
  return (
    <main className="bg-[#050816] overflow-x-hidden">
      <Navbar />
      <ShowcaseVideo />
      <AboutTechligence />
      <Hero />
      <ClientsCarousel />
      <Industries />
      <Footer />
    </main>
  );
}