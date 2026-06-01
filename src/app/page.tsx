import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050816]">
      <Navbar />
      <Hero />
      <Industries />
      <Footer />
    </main>
  );
}