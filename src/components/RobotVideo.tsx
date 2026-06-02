"use client";

import { useState } from "react";

export default function RobotVideo() {
  const [hasError, setHasError] = useState(false);

  const handleVideoError = () => {
    setHasError(true);
  };

  return (
    <div className="relative w-full max-w-[650px] aspect-[1440/1956] flex items-center justify-center mx-auto z-10 overflow-hidden">
      {/* 
        GPU-Accelerated SVG Filter for Black Background Removal (Chroma Key).
        Runs entirely on the GPU at native 60fps with absolute zero CPU lag or JS overhead.
        
        The matrix calculates: Alpha = 3.5 * (R + G + B) - 0.5
        - Keys out pure black (0,0,0) and dark compression noise fully.
        - Provides a smooth, feathered blend for intermediate shadows.
        - Leaves the brightly lit robot 100% opaque (no holes).
      */}
      <svg width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }}>
        <defs>
          <filter id="remove-black" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 3.5 3.5 3.5 0 -0.5"
            />
          </filter>
        </defs>
      </svg>

      {/* Inline styles for local physics-synchronized floor shadow pulse */}
      <style>{`
        @keyframes shadowPulse {
          0%, 100% {
            transform: translate(-50%, 0) scale(1) scaleY(0.3);
            opacity: 0.85;
            filter: blur(12px);
          }
          50% {
            transform: translate(-50%, 0) scale(0.78) scaleY(0.3);
            opacity: 0.45;
            filter: blur(16px);
          }
        }
        .animate-shadow-pulse {
          animation: shadowPulse 4s ease-in-out infinite;
        }
      `}</style>

      {/* Dynamic Physics-synchronized Dual-Layer Floor Shadow */}
      {!hasError && (
        <>
          {/* Main dark floor contact shadow */}
          <div 
            className="absolute bottom-[6%] left-[45%] w-[55%] h-[24px] bg-black/85 rounded-full z-0 pointer-events-none scale-y-[0.3] shadow-[0_0_30px_12px_rgba(0,0,0,0.95)] shadow-black animate-shadow-pulse" 
            style={{ transform: "translate(-50%, 0)" }}
          />
          {/* Secondary ambient cyan reflection projection onto the floor */}
          <div 
            className="absolute bottom-[6%] left-[45%] w-[38%] h-[16px] bg-cyan-500/25 rounded-full z-0 pointer-events-none scale-y-[0.3] animate-shadow-pulse"
            style={{ transform: "translate(-50%, 0)" }}
          />
        </>
      )}

      {/* Video element rendering directly with GPU-accelerated filter (perfectly smooth, zero lag) */}
      {!hasError && (
        <video
          src="/Robo.mp4"
          loop
          muted
          playsInline
          autoPlay
          onError={handleVideoError}
          className="w-full h-full object-contain robot-float pointer-events-none relative z-10"
          style={{
            transform: "scale(1.05)",
            filter: "url(#remove-black) contrast(1.05) brightness(1.02) drop-shadow(0 15px 35px rgba(6, 182, 212, 0.22))",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 75% 85%, 75% 100%, 0 100%)",
          }}
        />
      )}

      {/* Fallback if video fails to load */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md">
          <p className="text-red-400 font-medium mb-2">Video playback failed</p>
          <p className="text-gray-400 text-sm">
            Please ensure "Robo.mp4" exists in your public folder.
          </p>
        </div>
      )}
    </div>
  );
}
