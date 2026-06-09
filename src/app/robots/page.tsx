import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RobotShowcase from "@/components/RobotShowcase";
import RobotsOverview from "@/components/RobotsOverview";

export default function RobotsPage() {
  return (
    <main className="relative bg-[#050816] text-white overflow-x-hidden">
      <Navbar />
      {/* Cockpit: full viewport, no internal scroll */}
      <RobotShowcase />
      {/* Brochure Content Section */}
      <RobotsOverview />
      <Footer />
    </main>
  );
}

