"use client";

import React, { Suspense } from 'react';
import { MouseIcon, ResetIcon } from './Icons';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import T2FullModel from './T2FullModel';
import { useConfigurator } from '../../contexts/ConfiguratorContext';


const ExpandIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);

const CollapseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14h6m0 0v6m0-6l-7 7m17-11h-6m0 0V4m0 6l7-7M4 10h6m0 0V4m0 6l-7-7m17 11h-6m0 0v6m0-6l7 7" />
  </svg>
);

export default function CenterViewport() {
  const { config, updateConfig } = useConfigurator();

  return (
    <div className={`flex-1 relative overflow-hidden center-viewport-bg h-full ${
      config.isFullscreen ? 'fixed inset-0 z-[100] w-screen h-screen' : ''
    }`}>
      
      {/* Animated Grid - Standardized to Space Blue/Cyan */}
      {config.environment === 'None' && (
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridDrift 20s linear infinite',
          }}
        />
      )}
      
      <style>{`
        @keyframes gridDrift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
      `}</style>
      
      {/* Particle Swarm */}
      {config.environment === 'None' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_70%)] animate-pulse-slow pointer-events-none" />
      )}
      
      {/* Guidance UI */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-slate-950/70 backdrop-blur-md px-4 py-2 rounded-full text-[11px] text-gray-400 border border-white/5 select-none pointer-events-none shadow-[0_5px_15px_rgba(0,0,0,0.5)] flex items-center gap-1.5 z-20">
        <MouseIcon className="w-3.5 h-3.5 text-cyan-400" />
        <span>Drag to rotate • Scroll to zoom</span>
      </div>
      

      
      {/* Controls Container (Top Right) */}
      <div className="absolute top-5 right-5 z-20 flex gap-2">
        <button 
          onClick={() => updateConfig('isFullscreen', !config.isFullscreen)}
          className="bg-slate-950/70 backdrop-blur-md px-4 py-2 rounded-full text-xs text-gray-300 border border-white/5 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.5)] flex items-center gap-1.5"
        >
          {config.isFullscreen ? (
            <><span className="text-sm">←</span><span>Back</span></>
          ) : (
            <><ExpandIcon className="w-3.5 h-3.5" /><span>Preview</span></>
          )}
        </button>

        <button 
          onClick={() => window.location.reload()}
          className="bg-slate-950/70 backdrop-blur-md px-4 py-2 rounded-full text-xs text-gray-300 border border-white/5 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.5)] flex items-center gap-1.5"
        >
          <ResetIcon className="w-3.5 h-3.5" />
          <span>Reset View</span>
        </button>
      </div>
      
      {/* Three.js Canvas */}
      <div className="w-full h-full absolute inset-0 z-10">
        <Canvas shadows={false} dpr={[1, 2]} performance={{ min: 0.5 }} camera={{ position: [0, 0, 3], fov: 45 }}>
          


          <Suspense 
            fallback={
              <Html center>
                <div className="flex flex-col items-center justify-center min-w-[200px]">
                  <div className="w-12 h-12 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mb-4" />
                  <div className="text-xs text-cyan-400 font-bold tracking-[0.15em] font-mono animate-pulse uppercase whitespace-nowrap">
                    Loading 3D Assets...
                  </div>
                </div>
              </Html>
            }
          >
            <T2FullModel />
          </Suspense>
        </Canvas>
      </div>
      
    </div>
  );
}
