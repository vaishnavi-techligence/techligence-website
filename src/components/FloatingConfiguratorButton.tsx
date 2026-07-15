"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

export default function FloatingConfiguratorButton() {
  const pathname = usePathname();

  // Do not show the button if we are already on the configurator page
  if (pathname === '/configurator') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50" style={{ animationDuration: '3s' }}>
      <a 
        href="/configurator" 
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border border-cyan-300/50 px-6 py-4 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:shadow-[0_0_35px_rgba(0,240,255,0.8)] group cursor-pointer hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:rotate-12 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
        <span className="font-mono text-[11px] md:text-sm font-black tracking-widest uppercase mt-0.5">
          Design Your Own
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4 ml-1 opacity-90 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
  );
}
