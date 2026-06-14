"use client";

import { useState, useRef, useEffect } from "react";

export default function ShowcaseVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScrollDown = () => {
    const heroSection = document.getElementById("t2-mini-hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Direct check: if video is already playing or ready (e.g., cached or loaded quickly)
    if (video.readyState >= 3 || !video.paused) {
      setIsVideoPlaying(true);
    }

    const handlePlaying = () => setIsVideoPlaying(true);
    const handleCanPlay = () => setIsVideoPlaying(true);

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("canplay", handleCanPlay);

    // Re-verify auto-play state in case browser policy delayed it
    const timer = setTimeout(() => {
      if (video && (!video.paused || video.readyState >= 3)) {
        setIsVideoPlaying(true);
      }
    }, 1500);

    return () => {
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("canplay", handleCanPlay);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative w-full h-[95vh] md:h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        <video
          ref={videoRef}
          src="/robottt.mp4"
          preload="auto"
          loop
          muted={isMuted}
          playsInline
          autoPlay
          onPlaying={() => setIsVideoPlaying(true)}
          onCanPlay={() => setIsVideoPlaying(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isVideoPlaying ? "opacity-75" : "opacity-0"
          }`}
        />
        {/* Loading Spinner */}
        {!isVideoPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="w-10 h-10 rounded-full border-4 border-cyan-500/10 border-t-cyan-400 animate-spin" />
          </div>
        )}
      </div>

      {/* Futuristic Gradients overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050816] z-1 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(5,8,22,0.85)_100%)] z-1 pointer-events-none" />

      {/* Tech Grid overlay for cyber aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] z-1 pointer-events-none" />

      {/* Explore T2 Mini button at the bottom center */}
      <div className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 z-10 text-center">
        <button
          onClick={handleScrollDown}
          className="robot-button p-[2px] inline-block cursor-pointer active:scale-95 transition-transform"
        >
          <div className="relative z-10 px-8 py-3 rounded-full bg-black/80 hover:bg-black text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            Explore T2 Mini
            <svg
              className="w-4 h-4 text-cyan-400 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Mute/Unmute Control in Bottom Right */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10 p-3 rounded-full border border-white/10 hover:border-cyan-400 bg-black/50 hover:bg-black/80 backdrop-blur-md text-cyan-400 hover:text-cyan-300 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center group"
        aria-label={isMuted ? "Unmute intro video" : "Mute intro video"}
      >
        {isMuted ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        )}
      </button>
    </section>
  );
}
