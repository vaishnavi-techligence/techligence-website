import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RobotShowcase from "@/components/RobotShowcase";
import ReviewMarquee from "@/components/ReviewMarquee";

export default function RobotsPage() {
  return (
    <main className="relative bg-[#050816] text-white overflow-x-hidden">
      <Navbar />
      {/* Cockpit: full viewport, no internal scroll */}
      <RobotShowcase />
      {/* Reviews marquee below – accessible by scrolling */}
      <ReviewMarquee />
      <Footer />
    </main>
  );
}
