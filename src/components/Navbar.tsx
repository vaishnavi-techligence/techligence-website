"use client";

import { useState, useEffect } from "react";
import BookDemoModal from "./BookDemoModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-fit z-50 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300">
        <div className="px-6 py-2 flex items-center justify-between gap-4 whitespace-nowrap">
          {/* Logo + Brand */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
            <img
              src="/logo.png"
              alt="Techligence Logo"
              width={28}
              height={28}
              className="object-contain"
            />
            <h1 className="text-sm sm:text-base font-black bg-gradient-to-r from-cyan-300 to-cyan-500 text-transparent bg-clip-text tracking-wide">
              TECHLIGENCE
            </h1>
          </a>

          {/* Nav links (Desktop) */}
          <div className="hidden lg:flex gap-6 items-center flex-shrink-0">
            <a href="/" className="relative text-[10px] uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Home</a>
            <a href="/robots" className="relative text-[10px] uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Robots</a>
            <a href="/solutions" className="relative text-[10px] uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Solutions</a>
            <a href="/company" className="relative text-[10px] uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Company</a>
            <a href="/contact" className="relative text-[10px] uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </div>

          {/* Right Action container */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-white/10 hover:border-cyan-400 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 transition-all cursor-pointer flex items-center justify-center"
              aria-label="Toggle light/dark theme"
            >
              {theme === "dark" ? (
                /* Sun Icon for dark mode (click to go to light) */
                <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                /* Moon Icon for light mode (click to go to dark) */
                <svg className="w-3.5 h-3.5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            {/* CTA (hidden on small mobile, shown on md and up) */}
            <button 
              id="book-demo-cta"
              onClick={() => setIsModalOpen(true)}
              className="robot-button p-[1.5px] flex-shrink-0 cursor-pointer hidden md:block"
            >
              <div className="relative z-10 px-4 py-1.5 rounded-full bg-[#050816] text-white font-bold text-[9px] tracking-wider">
                BOOK DEMO
              </div>
            </button>

            {/* Hamburger Button (Mobile/Tablet only) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden items-center justify-center p-1.5 text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Glassmorphic Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col items-center justify-center gap-8 ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-sm font-mono tracking-widest text-gray-300 text-center">
          <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors uppercase py-2 px-4 block">Home</a>
          <a href="/robots" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors uppercase py-2 px-4 block">Robots</a>
          <a href="/solutions" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors uppercase py-2 px-4 block">Solutions</a>
          <a href="/company" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors uppercase py-2 px-4 block">Company</a>
          <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors uppercase py-2 px-4 block">Contact</a>
        </div>
        
        <button
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsModalOpen(true);
          }}
          className="robot-button p-[1.5px] mt-4"
        >
          <div className="relative z-10 px-8 py-3 rounded-full bg-[#050816] text-white font-bold text-xs tracking-wider">
            BOOK DEMO
          </div>
        </button>
      </div>

      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
