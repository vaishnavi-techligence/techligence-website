import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RobotShowcase from "@/components/RobotShowcase";
import Technologies from "@/components/Technologies";

export default function RobotsPage() {
  return (
    <main className="relative bg-[#050816] text-white overflow-x-hidden">
      <Navbar />
      {/* Cockpit: full viewport, no internal scroll */}
      <RobotShowcase />
      {/* Technologies stack section below – accessible by scrolling */}
      <Technologies />
      <Footer />
    </main>
  );
}

