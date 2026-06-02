import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RobotShowcase from "@/components/RobotShowcase";

export default function RobotsPage() {
  return (
    <main className="relative min-h-screen bg-[#050816] text-white overflow-hidden flex flex-col justify-between">
      <Navbar />
      <RobotShowcase />
      <Footer />
    </main>
  );
}
