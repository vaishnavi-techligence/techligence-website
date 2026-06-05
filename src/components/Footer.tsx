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

              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">📧</span>
                  <div className="flex flex-col text-xs gap-1.5 text-gray-400">
                    <a href="mailto:info@techligence.net" className="hover:text-cyan-400 transition-colors">
                      <span className="font-semibold text-white">General:</span> info@techligence.net
                    </a>
                    <a href="mailto:outreach@techligence.net" className="hover:text-cyan-400 transition-colors">
                      <span className="font-semibold text-white">Book Demo:</span> outreach@techligence.net
                    </a>
                    <a href="mailto:support@techligence.net" className="hover:text-cyan-400 transition-colors">
                      <span className="font-semibold text-white">Support:</span> support@techligence.net
                    </a>
                  </div>
                </div>
              </div>

              <p className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <span className="text-cyan-400">📞</span>
                <a href="tel:+917020812247">+91 70208 12247</a>
              </p>

              <div className="pt-2 border-t border-white/5 space-y-3">
                <p className="text-xs leading-relaxed">
                  <strong className="text-white block text-[10px] uppercase tracking-wider mb-0.5 text-cyan-400/90">Mumbai Office:</strong>
                  D9-802, Lokdhara, Phase-3, Kalyan - 421306
                </p>

                <p className="text-xs leading-relaxed">
                  <strong className="text-white block text-[10px] uppercase tracking-wider mb-0.5 text-cyan-400/90">Pune Office:</strong>
                  Shop 1/2/3, Selenia Housing Society, Jadhavwadi, Chikhali, Pimpri-Chinchwad, Pune - 411062
                </p>
              </div>

            </div>
          </div>

          {/* Middle */}

          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4 text-gray-400 flex flex-col items-start">
              <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="/robots" className="hover:text-cyan-400 transition-colors">Robots</a>
              <a href="/solutions" className="hover:text-cyan-400 transition-colors">Solutions</a>
              <a href="/company" className="hover:text-cyan-400 transition-colors">Company</a>
              <a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              <a href="/admin" className="hover:text-cyan-400/80 transition-colors font-mono text-xs text-cyan-400 mt-2">&gt;&gt; ADMIN CONSOLE</a>
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