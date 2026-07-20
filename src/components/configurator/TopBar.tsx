"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopBar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Robots', path: '/robots' },
    { name: 'Solutions', path: '/solutions' },
  ];

  return (
    <>
      <div className="h-[72px] bg-slate-950/60 backdrop-blur-xl border-b border-white/5 px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer select-none">
          <img
            src={theme === "light" ? "/logos/logo-light.png" : "/logos/logo-dark.png"}
            alt="Techligence logo"
            className="h-8 w-8 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-[14px] font-black bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent tracking-widest font-mono leading-none">
              TECHLIGENCE
            </span>
            <span className="text-[8px] text-gray-500 font-bold tracking-[2px] uppercase font-mono mt-0.5">
              ROYER CONFIG SYSTEM
            </span>
          </div>
        </Link>
        
        {/* Navigation - Matches Navbar.tsx typography */}
        <div className="flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative text-[10px] uppercase tracking-[1.5px] font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full ${
                pathname === item.path
                  ? 'text-cyan-400 after:w-full'
                  : 'text-gray-300 hover:text-cyan-400 after:w-0'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-1.5 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
              theme === "light" 
                ? "border-gray-200 hover:border-cyan-500 bg-gray-100 hover:bg-cyan-50 text-gray-600 hover:text-cyan-600" 
                : "border-white/10 hover:border-cyan-400 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400"
            }`}
            aria-label="Toggle light/dark theme"
          >
            {theme === "dark" ? (
              <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
