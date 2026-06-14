export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-16">

          {/* Left */}

          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Techligence logo"
                className="navbar-logo w-10 h-10 object-contain"
              />
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
            </div>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Revolutionizing industries with AI-powered service
              robots and intelligent automation solutions.
            </p>

            <div className="mt-8 space-y-5 text-gray-400">

              {/* Addresses at the top */}
              <div className="space-y-4 pb-4 border-b border-white/5">
                <div className="flex gap-3 items-start">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=D9-802,+Lokdhara,+Phase-3,+Kalyan+-+421306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0 mt-0.5"
                    aria-label="View Mumbai Office on Google Maps"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                    </svg>
                  </a>
                  <div className="text-xs leading-relaxed">
                    <strong className="text-white block text-[10px] uppercase tracking-wider mb-0.5 text-cyan-400/90">Mumbai Office:</strong>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=D9-802,+Lokdhara,+Phase-3,+Kalyan+-+421306"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      D9-802, Lokdhara, Phase-3, Kalyan - 421306
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Shop+1/2/3,+Selenia+Housing+Society,+Jadhavwadi,+Chikhali,+Pimpri-Chinchwad,+Pune+-+411062"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0 mt-0.5"
                    aria-label="View Pune Office on Google Maps"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                    </svg>
                  </a>
                  <div className="text-xs leading-relaxed">
                    <strong className="text-white block text-[10px] uppercase tracking-wider mb-0.5 text-cyan-400/90">Pune Office:</strong>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Shop+1/2/3,+Selenia+Housing+Society,+Jadhavwadi,+Chikhali,+Pimpri-Chinchwad,+Pune+-+411062"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Shop 1/2/3, Selenia Housing Society, Jadhavwadi, Chikhali, Pimpri-Chinchwad, Pune - 411062
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Info (Emails & Phone) below addresses */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
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

                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.58c0-1.017.762-1.785 1.785-1.785h1.86c.646 0 1.228.384 1.488.978l.848 1.932c.266.608.066 1.304-.469 1.68l-1.104.793a12.083 12.083 0 005.282 5.282l.793-1.104c.376-.535 1.071-.735 1.68-.469l1.932.848c.594.26 1.017.842 1.017 1.488v1.86c0 1.022-.768 1.785-1.785 1.785H18c-8.837 0-16-7.163-16-16v-.22z" />
                  </svg>
                  <a href="tel:+917020812247" className="hover:text-cyan-400 transition-colors text-xs">
                    <span className="font-semibold text-white">Customer Care:</span> +91 70208 12247
                  </a>
                </div>
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
            </div>
          </div>

          {/* Right */}

          <div>
            <h3 className="text-xl font-bold mb-6">
              Products
            </h3>

            <div className="space-y-4 text-gray-400 flex flex-col items-start">

              <a href="/robots?robot=t2-mini" className="hover:text-cyan-400 transition-colors">T2 Mini</a>
              <a href="/robots?robot=joy-a01" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span>Joy A-01</span>
                <span className="coming-soon-badge px-2 py-0.5 text-[8px] font-black tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full uppercase scale-90 origin-left">Coming Soon</span>
              </a>
              <a href="/robots?robot=tella-s" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span>Tella S</span>
                <span className="coming-soon-badge px-2 py-0.5 text-[8px] font-black tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full uppercase scale-90 origin-left">Coming Soon</span>
              </a>
              <a href="/robots?robot=andy-r1" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span>Andy R1</span>
                <span className="coming-soon-badge px-2 py-0.5 text-[8px] font-black tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full uppercase scale-90 origin-left">Coming Soon</span>
              </a>
              <a href="/robots?robot=t2-max" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span>T2 Max</span>
                <span className="coming-soon-badge px-2 py-0.5 text-[8px] font-black tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full uppercase scale-90 origin-left">Coming Soon</span>
              </a>
              <a href="/robots?robot=nova-m1" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span>Nova M1</span>
                <span className="coming-soon-badge px-2 py-0.5 text-[8px] font-black tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full uppercase scale-90 origin-left">Coming Soon</span>
              </a>

            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Techligence Robotics. All rights reserved.
          </p>

          <div className="flex gap-5 mt-6 md:mt-0 items-center">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Follow Techligence on X">
              <svg className="w-5 h-5 text-cyan-400 hover:text-cyan-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://in.linkedin.com/company/techligence-world" target="_blank" rel="noopener noreferrer" aria-label="Connect with Techligence on LinkedIn">
              <svg className="w-5 h-5 text-cyan-400 hover:text-cyan-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/techligence_official/" target="_blank" rel="noopener noreferrer" aria-label="Follow Techligence on Instagram">
              <svg className="w-5 h-5 text-cyan-400 hover:text-cyan-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}