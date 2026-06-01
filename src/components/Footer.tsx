export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-16">

          {/* Left */}

          <div>
            <h2 className="
              text-4xl
              font-black
              bg-gradient-to-r
              from-white
              to-cyan-400
              text-transparent
              bg-clip-text
            ">
              TECHLIGENCE
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Revolutionizing industries with AI-powered service
              robots and intelligent automation solutions.
            </p>

            <div className="mt-8 space-y-4 text-gray-400">

              <p>
                📧 info@techligence.net
              </p>

              <p>
                📞 +91 70208 12247
              </p>

              <p>
                📍 Lokdhara Phase 3, Kalyan,
                Maharashtra 421306
              </p>

            </div>
          </div>

          {/* Middle */}

          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>Home</p>
              <p>Robots</p>
              <p>Solutions</p>
              <p>Company</p>
              <p>Contact</p>

            </div>
          </div>

          {/* Right */}

          <div>
            <h3 className="text-xl font-bold mb-6">
              Products
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>T2 Mini</p>
              <p>T2 Max</p>
              <p>Andy R1</p>
              <p>Nova M1</p>

            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Techligence Robotics. All rights reserved.
          </p>

          <div className="flex gap-6 mt-6 md:mt-0">

            <span className="text-cyan-400 text-xl">
              X
            </span>

            <span className="text-cyan-400 text-xl">
              in
            </span>

            <span className="text-cyan-400 text-xl">
              IG
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}