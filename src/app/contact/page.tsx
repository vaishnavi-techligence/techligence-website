import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactContent from "./ContactContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Techligence Robotics",
  description: "Get in touch with Techligence Private Limited. Reach our Mumbai and Pune offices or contact us via phone and email.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#050816] text-white overflow-hidden flex flex-col justify-between">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-250px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute left-[-250px] top-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[150px]" />
      </div>

      <Navbar />
      
      {/* Page Content Container */}
      <div className="max-w-[1400px] mx-auto px-6 pt-36 pb-24 min-h-[70vh] relative z-10 flex flex-col justify-center w-full">
        <p className="text-cyan-400 uppercase tracking-[8px] mb-4 text-sm font-semibold">
          GET IN TOUCH
        </p>
        <h1 className="text-5xl lg:text-7xl font-black tracking-[-2px] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-cyan-500 uppercase mb-4">
          CONTACT
        </h1>
        <div className="w-24 h-[2px] bg-cyan-400 mb-8"></div>
        <p className="text-gray-400 text-lg max-w-xl">
          Reach out to our engineering and technical consulting teams for corporate inquiries, custom deployments, or service support.
        </p>

        {/* Interactive Contact Content Grid */}
        <ContactContent />
      </div>

      <Footer />
    </main>
  );
}

