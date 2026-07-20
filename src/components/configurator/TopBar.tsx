"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



export default function TopBar() {
  const pathname = usePathname();

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
            src="/logos/logo-light.png"
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
        </div>
      </div>
    </>
  );
}
