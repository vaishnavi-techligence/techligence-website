"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300">
      {/* 
        GPU-Accelerated SVG Filter for Logo Black Background Removal.
        Removes the black square background inside/around logo.png and blends it cleanly with the navbar.
      */}
      <svg width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }}>
        <defs>
          <filter id="remove-black-logo" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 3.5 3.5 3.5 0 -0.5"
            />
          </filter>
        </defs>
      </svg>

      <div className="px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Techligence Logo"
            width={48}
            height={48}
            className="object-contain"
            style={{ filter: "url(#remove-black-logo)" }}
          />

          <div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-300 to-cyan-500 text-transparent bg-clip-text">
              TECHLIGENCE
            </h1>
          </div>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <a
            href="/"
            className="relative text-xs uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>

          <a
            href="/robots"
            className="relative text-xs uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Robots
          </a>

          <a
            href="/solutions"
            className="relative text-xs uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Solutions
          </a>

          <a
            href="/company"
            className="relative text-xs uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Company
          </a>

          <a
            href="/contact"
            className="relative text-xs uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </div>

        <button className="robot-button p-[1.5px]">
          <div className="relative z-10 px-6 py-2 rounded-full bg-[#050816] text-white font-bold text-xs">
            BOOK DEMO
          </div>
        </button>
      </div>
    </nav>
  );
}