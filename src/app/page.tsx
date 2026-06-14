import Navbar from "../components/Navbar";
import ShowcaseVideo from "../components/ShowcaseVideo";
import Hero from "../components/Hero";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050816] overflow-x-hidden">
      <Navbar />
      <ShowcaseVideo />
      <Hero />
      <Industries />
      <Footer />
    </main>
  );
}