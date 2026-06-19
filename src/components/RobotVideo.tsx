"use client";

import { useState, useEffect, useRef } from "react";

export default function RobotVideo() {
  const [hasError, setHasError] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoError = () => {
    setHasError(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Programmatically enforce muted state to prevent React hydration issues
    video.muted = true;
    video.defaultMuted = true;

    // Direct check: if video is already playing or ready (e.g., cached or loaded quickly)
    if (video.readyState >= 3 || !video.paused) {
      setIsVideoPlaying(true);
    }

    const handlePlaying = () => setIsVideoPlaying(true);
    const handleCanPlay = () => setIsVideoPlaying(true);

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  // Detect Safari/WebKit/iOS
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent.toLowerCase();
      const isIOS = /iphone|ipad|ipod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      const isMacSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(ua);
      setIsSafari(isIOS || isMacSafari);
    }
  }, []);

  return (
    <div className="relative w-full max-w-[480px] aspect-[3/4] overflow-hidden mx-auto z-10 robot-float">
      {!hasError && (
        <>
          {!isVideoPlaying && !isSafari && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 transition-opacity duration-300">
              <div className="w-8 h-8 rounded-full border-2 border-cyan-500/10 border-t-cyan-400 animate-spin" />
            </div>
          )}
          
          {isSafari ? (
            <img
              src="/robots/andy-r1.png"
              alt="Robot"
              className="pointer-events-none w-full h-auto relative z-20 object-contain"
              style={{
                transform: "translateY(-10%) scale(0.92)",
                clipPath: "inset(0% 3% 0% 3%)",
                WebkitClipPath: "inset(0% 3% 0% 3%)",
                maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
              }}
            />
          ) : (
            <video
              ref={videoRef}
              src="/Robo.mp4"
              preload="auto"
              loop
              muted={true}
              playsInline
              autoPlay
              onPlaying={() => setIsVideoPlaying(true)}
              onCanPlay={() => setIsVideoPlaying(true)}
              onError={handleVideoError}
              className="pointer-events-none w-full h-auto relative transition-opacity duration-300 z-20"
              style={{
                transform: "translateY(-10%) scale(0.92)",
                filter: "var(--filter-remove-green) contrast(1.05) brightness(1.02)",
                clipPath: "inset(0% 3% 0% 3%)",
                WebkitClipPath: "inset(0% 3% 0% 3%)",
                maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
                opacity: isVideoPlaying ? 1 : 0,
              }}
            />
          )}
        </>
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
