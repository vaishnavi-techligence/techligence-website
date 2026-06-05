"use client";

import { useState } from "react";

export default function RobotVideo() {
  const [hasError, setHasError] = useState(false);

  const handleVideoError = () => {
    setHasError(true);
  };

  return (
    /*
      Container: aspect-[3/4] instead of 9/16 — makes it SHORTER in layout,
      which reduces the grid row height and eliminates the large centering gap.
      overflow-hidden clips the video to this shorter box.
    */
    <div className="relative w-full max-w-[480px] aspect-[3/4] overflow-hidden mx-auto z-10 robot-float">
      {/* Video: width fills the container, translateY(-18%) shifts up to trim dead top space */}
      {!hasError && (
        <video
          src="/Robo.mp4"
          loop
          muted
          playsInline
          autoPlay
          onError={handleVideoError}
          className="pointer-events-none w-full h-auto"
          style={{
            transform: "translateY(-14.8%) scale(0.92)",
            filter: "url(#remove-green) contrast(1.05) brightness(1.02)",
            clipPath: "inset(0% 3% 0% 3%)",
            WebkitClipPath: "inset(0% 3% 0% 3%)",
          }}
        />
      )}

      {/* Fallback if video fails to load */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md">
          <p className="text-red-400 font-medium mb-2">Video playback failed</p>
          <p className="text-gray-400 text-sm">
            Please ensure &quot;Robo.mp4&quot; exists in your public folder.
          </p>
        </div>
      )}
    </div>
  );
}
