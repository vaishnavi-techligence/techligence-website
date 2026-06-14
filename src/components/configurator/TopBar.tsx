"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BellIcon, SaveIcon, ClipboardIcon } from './Icons';

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

interface TopBarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export default function TopBar({ isLoggedIn, setIsLoggedIn }: TopBarProps) {
  const pathname = usePathname();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showUserStudio, setShowUserStudio] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Robots', path: '/robots' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Configurator', path: '/configurator' },
  ];

  return (
    <>
      <div className="h-[72px] bg-slate-950/65 backdrop-blur-xl border-b border-white/5 px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        
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
        
        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Notifications */}
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserStudio(false);
            }}
            className="relative p-2 rounded-full border border-white/5 bg-white/5 hover:border-cyan-400 hover:bg-white/10 text-gray-300 hover:text-cyan-400 transition cursor-pointer flex items-center justify-center group"
          >
            <BellIcon className="w-4.5 h-4.5 transition" />
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 text-[9px] font-extrabold px-1 py-0.5 rounded-full min-w-[15px] text-center shadow-[0_0_10px_rgba(6,182,212,0.4)]">
              3
            </span>
          </button>
          
          {/* Login / User */}
          {!isLoggedIn ? (
            <button
              onClick={() => setShowLoginModal(true)}
              className="px-4 py-1.5 border border-white/10 hover:border-cyan-400 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
            >
              Sign In
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => {
                  setShowUserStudio(!showUserStudio);
                  setShowNotifications(false);
                }}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 cursor-pointer p-[1px] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition"
              >
                <div className="w-full h-full rounded-full bg-[#050816] flex items-center justify-center text-xs font-bold text-cyan-400">
                  U
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowLoginModal(false)}>
          <div className="bg-[#050816]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 w-[400px] shadow-[0_10px_40px_rgba(0,0,0,0.8)]" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-5 bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">Welcome Back</h3>
            <input type="email" placeholder="Email" className="w-full p-3 mb-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition" />
            <input type="password" placeholder="Password" className="w-full p-3 mb-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition" />
            <button 
              onClick={() => {
                setIsLoggedIn(true);
                setShowLoginModal(false);
              }}
              className="w-full py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 font-bold uppercase tracking-wider rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition cursor-pointer"
            >
              Sign In
            </button>
            <div className="text-center mt-4 text-xs text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition">Forgot password?</a> | 
              <a href="#" className="hover:text-cyan-400 ml-2 transition">Create account</a>
            </div>
          </div>
        </div>
      )}

      {/* User Studio Panel */}
      {showUserStudio && isLoggedIn && (
        <div className="absolute top-20 right-6 w-72 bg-[#050816]/95 border border-white/10 backdrop-blur-2xl rounded-2xl p-4 z-50 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <h4 className="font-bold text-cyan-400 mb-3 text-sm tracking-wide uppercase">Your Studio</h4>
          <div className="mb-4 space-y-1">
            <div className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">Saved Designs</div>
            <div className="text-sm font-medium text-white hover:text-cyan-400 cursor-pointer">Sentinel v2 (Draft)</div>
            <div className="text-sm font-medium text-white hover:text-cyan-400 cursor-pointer">Mini Custom</div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">Active Rentals</div>
            <div className="text-sm text-gray-300">Joy A-01 · 12 days left</div>
          </div>
          <button className="w-full mt-4 py-2 border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-white/10 text-cyan-400 text-xs font-bold tracking-wider uppercase rounded-lg transition cursor-pointer">
            View Dashboard →
          </button>
        </div>
      )}

      {/* Notifications Panel */}
      {showNotifications && (
        <div className="absolute top-20 right-6 w-80 bg-[#050816]/95 border border-white/10 backdrop-blur-2xl rounded-2xl z-50 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="p-4 border-b border-white/5 flex justify-between items-center">
            <span className="font-bold text-xs uppercase tracking-wider text-cyan-400">Notifications</span>
            <button className="text-gray-400 hover:text-white text-[10px] uppercase font-bold tracking-wider cursor-pointer">Mark all read</button>
          </div>
          <div className="p-4 border-b border-white/5 flex gap-3 cursor-pointer hover:bg-white/5 transition items-center">
            <SaveIcon className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <div className="text-xs font-medium text-white">Your design was auto-saved</div>
              <div className="text-[9px] text-gray-500">2 min ago</div>
            </div>
          </div>
          <div className="p-4 flex gap-3 cursor-pointer hover:bg-white/5 transition items-center">
            <ClipboardIcon className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <div className="text-xs font-medium text-white">Your rental starts in 3 days</div>
              <div className="text-[9px] text-gray-500">Yesterday</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
