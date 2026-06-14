"use client";

import React, { useEffect, useRef } from 'react';
import { MouseIcon, ResetIcon } from './Icons';

export default function CenterViewport() {
  const viewportRef = useRef<HTMLDivElement>(null);

  // Placeholder for Three.js integration
  useEffect(() => {
    // When 3D models are ready, initialize Three.js here
    console.log('Center viewport ready — Three.js will load here');
  }, []);

  return (
    <div className="flex-1 relative overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#0e1726,#050816)] h-full">
      
      {/* Animated Grid - Standardized to Space Blue/Cyan */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'gridDrift 20s linear infinite',
        }}
      />
      
      <style>{`
        @keyframes gridDrift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
      `}</style>
      
      {/* Particle Swarm */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_70%)] animate-pulse-slow" />
      
      {/* Holographic Core - Matches Landing Page Gradient Vibes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 select-none pointer-events-none">
        {/* Crystal */}
        <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-cyan-400 to-violet-600 animate-spin-slow animate-pulse-glow"
             style={{ clipPath: 'polygon(50% 0%, 80% 30%, 80% 70%, 50% 100%, 20% 70%, 20% 30%)' }} />
        
        {/* Text */}
        <div className="text-xs text-gray-500 font-bold tracking-[0.15em] font-mono animate-pulse uppercase">
          YOUR ROBOT WILL APPEAR HERE
        </div>
      </div>
      
      {/* Guidance UI */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-slate-950/70 backdrop-blur-md px-4 py-2 rounded-full text-[11px] text-gray-400 border border-white/5 select-none pointer-events-none shadow-[0_5px_15px_rgba(0,0,0,0.5)] flex items-center gap-1.5">
        <MouseIcon className="w-3.5 h-3.5 text-cyan-400" />
        <span>Drag to rotate • Scroll to zoom</span>
      </div>
      
      {/* Reset View Button */}
      <button 
        onClick={() => console.log('Reset view — camera position restored')}
        className="absolute top-5 right-5 bg-slate-950/70 backdrop-blur-md px-4 py-2 rounded-full text-xs text-gray-300 border border-white/5 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 z-10 cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.5)] flex items-center gap-1.5"
      >
        <ResetIcon className="w-3.5 h-3.5" />
        <span>Reset View</span>
      </button>
      
      {/* Add custom animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); box-shadow: 0 0 30px rgba(6,182,212,0.4); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
      
      {/* Three.js canvas will be injected here */}
      <div ref={viewportRef} className="w-full h-full" id="three-canvas-container" />
      
    </div>
  );
}
