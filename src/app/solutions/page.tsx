import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SolutionsPage() {
  return (
    <main className="bg-[#050816] text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-36 pb-8">
        <p className="text-cyan-400 tracking-[8px] uppercase text-sm">
          Intelligent Integration
        </p>

        <h1 className="text-6xl font-black mt-4">
          SOLUTIONS
        </h1>

        <div className="w-24 h-[2px] bg-cyan-400 mt-4 mb-8"></div>

        <p className="text-gray-400 max-w-2xl text-lg">
          Tailored AI receptionist and host services designed to transform
          healthcare, hospitality, retail and corporate environments.
        </p>
      </section>

      {/* Healthcare */}
      <section
        id="healthcare"
        className="max-w-7xl mx-auto px-6 py-12 scroll-mt-52"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
      <Image
        src="/solutions/hospitality.jpg"
        alt="Healthcare"
        width={700}
        height={500}
        className="rounded-3xl object-cover w-full"
      />

          <div>
            <p className="text-cyan-400 uppercase tracking-[4px]">
              Healthcare
            </p>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              Healthcare & Hospital Solutions
            </h2>

            <p className="text-gray-300 leading-8">
              Enhance patient and visitor experiences with intelligent robotic
              assistance. Techligence robots help healthcare facilities provide
              navigation support, answer common questions, assist visitors and
              streamline reception operations.
            </p>

            <div className="mt-6 text-gray-400 space-y-2">
              <p>✓ Improved patient experience</p>
              <p>✓ Faster visitor assistance</p>
              <p>✓ Visitor navigation</p>
              <p>✓ Information helpdesk</p>
            </div>

            <p className="mt-6 text-cyan-400 font-semibold">
              Robot Used: T2 Mini
            </p>
          </div>
        </div>
      </section>

      {/* Mall */}
      <section
        id="mall"
        className="max-w-7xl mx-auto px-6 py-12 scroll-mt-52"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[4px]">
              Retail
            </p>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              Mall & Retail Solutions
            </h2>

            <p className="text-gray-300 leading-8">
              From guiding visitors to stores and restrooms to broadcasting
              promotions and brand campaigns, Techligence robots improve
              customer engagement and create a memorable shopping experience.
            </p>

            <div className="mt-6 text-gray-400 space-y-2">
              <p>✓ Store navigation</p>
              <p>✓ Promotions & advertisements</p>
              <p>✓ Customer engagement</p>
              <p>✓ Product information</p>
            </div>

            <p className="mt-6 text-cyan-400 font-semibold">
              Robot Used: T2 Mini
            </p>
          </div>

          <Image
            src="/solutions/mall.jpg"
            alt="Mall"
            width={700}
            height={500}
            className="rounded-3xl object-cover w-full"
          />
        </div>
      </section>

      {/* Hospitality */}
      <section
        id="hospitality"
        className="max-w-7xl mx-auto px-6 py-12 scroll-mt-52"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
      <Image
        src="/solutions/healthcare.jpg"
        alt="Hospitality"
        width={700}
        height={500}
        className="rounded-3xl object-cover w-full"
      />

          <div>
            <p className="text-cyan-400 uppercase tracking-[4px]">
              Hospitality
            </p>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              Luxury Hotels & Resorts
            </h2>

            <p className="text-gray-300 leading-8">
              Techligence robots seamlessly blend into luxury hotel
              environments, helping guests with navigation, check-ins,
              information services and personalized experiences.
            </p>

            <div className="mt-6 text-gray-400 space-y-2">
              <p>✓ Guest welcome</p>
              <p>✓ Concierge assistance</p>
              <p>✓ Room directions</p>
              <p>✓ Premium guest experience</p>
            </div>

            <p className="mt-6 text-cyan-400 font-semibold">
              Robot Used: T2 Mini
            </p>
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section
        id="corporate"
        className="max-w-7xl mx-auto px-6 py-12 scroll-mt-52"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[4px]">
              Corporate
            </p>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              Corporate Office Solutions
            </h2>

            <p className="text-gray-300 leading-8">
              Techligence robots provide visitor management, meeting room
              guidance, reception support and intelligent office navigation
              while improving operational efficiency.
            </p>

            <div className="mt-6 text-gray-400 space-y-2">
              <p>✓ Visitor management</p>
              <p>✓ Meeting room guidance</p>
              <p>✓ Reception support</p>
              <p>✓ Office navigation</p>
            </div>

            <p className="mt-6 text-cyan-400 font-semibold">
              Robot Used: T2 Mini
            </p>
          </div>

          <Image
            src="/solutions/corporate.jpg"
            alt="Corporate"
            width={700}
            height={500}
            className="rounded-3xl object-cover w-full"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}