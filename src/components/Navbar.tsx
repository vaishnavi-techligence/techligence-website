"use client";

import { useState } from "react";
import BookDemoModal from "./BookDemoModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-fit z-50 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300">
        <div className="px-8 py-2.5 flex items-center gap-6 whitespace-nowrap">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="/logo.png"
              alt="Techligence Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <h1 className="text-lg font-black bg-gradient-to-r from-cyan-300 to-cyan-500 text-transparent bg-clip-text tracking-wide">
              TECHLIGENCE
            </h1>
          </div>

          {/* Nav links */}
          <div className="hidden lg:flex gap-6 items-center flex-shrink-0">
            <a href="/" className="relative text-[10px] uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Home</a>
            <a href="/robots" className="relative text-[10px] uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Robots</a>
            <a href="/solutions" className="relative text-[10px] uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Solutions</a>
            <a href="/company" className="relative text-[10px] uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Company</a>
            <a href="/contact" className="relative text-[10px] uppercase tracking-[1.5px] text-gray-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </div>

          {/* CTA */}
          <button 
            id="book-demo-cta"
            onClick={() => setIsModalOpen(true)}
            className="robot-button p-[1.5px] flex-shrink-0 cursor-pointer"
          >
            <div className="relative z-10 px-5 py-1.5 rounded-full bg-[#050816] text-white font-bold text-[10px] tracking-wider">
              BOOK DEMO
            </div>
          </button>
        </div>
      </nav>

      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
