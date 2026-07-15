"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const RoyerBrandLogo = () => (
  <svg className="w-8 h-8 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" stroke="url(#royer-grad-1)" strokeWidth="4" strokeLinejoin="round" />
    <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" stroke="url(#royer-grad-2)" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5" />
    {/* Stylized sharp 'R' */}
    <path d="M38,30 H55 C65,30 65,42 55,42 H38 M38,30 V70 M38,42 H48 L62,70" stroke="url(#royer-grad-1)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    {/* Glowing power core dot in the center */}
    <circle cx="50" cy="50" r="3" fill="#00ffff" className="animate-pulse" />
    <defs>
      <linearGradient id="royer-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00eaff" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="royer-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ff00aa" />
        <stop offset="100%" stopColor="#00eaff" />
      </linearGradient>
    </defs>
  </svg>
);

export default function TopBar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Robots', path: '/robots' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Configurator', path: '/configurator' },
  ];

  return (
    <>
      <div className="h-[72px] bg-slate-950/60 backdrop-blur-xl border-b border-white/5 px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        
        {/* Brand Logo - Custom Badass Royer Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer select-none">
          <RoyerBrandLogo />
          <div className="flex flex-col">
            <span className="text-[14px] font-black bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent tracking-widest font-mono leading-none">
              ROYER
            </span>
            <span className="text-[8px] text-gray-500 font-bold tracking-[2px] uppercase font-mono mt-0.5">
              CONFIG SYSTEM
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
        </div>
      </div>
    </>
  );
}
