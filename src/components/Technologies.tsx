"use client";

import React from "react";

const TECHNOLOGIES = [
  {
    name: "NVIDIA Jetson",
    subtitle: "AI Edge Computing",
    description: "GPU-accelerated vision model inference, real-time object detection, and CUDA processing.",
    color: "from-green-500/10 to-emerald-500/10 border-green-500/20 hover:border-green-400/50",
    glowColor: "rgba(34,197,94,0.15)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#76B900]" fill="currentColor">
        <path d="M22 11.5c0-.85-.1-1.7-.3-2.55l-2.03.82c.2.57.3 1.16.3 1.73 0 3.14-2.56 5.7-5.7 5.7-2.12 0-3.97-1.16-4.96-2.88l-2.03.82C8.78 17.5 11.2 19 14 19c4.27 0 7.73-3.46 7.73-7.73l.27.23zm-5.7-4.14c-1.42 0-2.67.78-3.34 1.94l-2.03.82c1.02-2.5 3.46-4.26 6.33-4.26 3.75 0 6.8 3.05 6.8 6.8l.22.18c0-4.54-3.7-8.24-8.24-8.24l.26.76zm-8.8 6.9c-.3-.57-.45-1.22-.45-1.9 0-2.26 1.84-4.1 4.1-4.1.84 0 1.62.26 2.27.7l.87-.87c-.92-.66-2.05-1.05-3.27-1.05-3.08 0-5.57 2.5-5.57 5.57 0 .93.23 1.8.64 2.57l1.41-.92zm4.7-6.26c-4.48 0-8.1 3.63-8.1 8.1 0 1.25.28 2.43.8 3.5l1.41-.92c-.4-.78-.6-1.63-.6-2.58 0-3.67 2.98-6.65 6.65-6.65.68 0 1.34.1 1.96.3l.87-.87c-.8-.25-1.66-.38-2.54-.38v.52z" />
      </svg>
    ),
  },
  {
    name: "Python",
    subtitle: "Autonomy & AI",
    description: "High-level planning logic, neural network training, script orchestrations, and ROS node bindings.",
    color: "from-blue-500/10 to-yellow-500/10 border-blue-500/20 hover:border-yellow-400/40",
    glowColor: "rgba(59,130,246,0.15)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
        <path d="M11.9 2c-1.8 0-3.5.2-4.8.6-2.7 1-3.6 2.8-3.6 5.5v2.2h4.5v.7H3.5C2.1 11 1 12 1 13.5v3.4C1 18.3 2.1 19 3.5 19h2.2v-3.1c0-1.8 1.4-3.4 3.2-3.4h4.9c1.4 0 2.5-1.1 2.5-2.5V5.1c0-1.8-1.5-3.1-3.2-3.1H11.9z" fill="#3776AB" />
        <path d="M12.1 22c1.8 0 3.5-.2 4.8-.6 2.7-1 3.6-2.8 3.6-5.5v-2.2H16v-.7h4.5c1.4 0 2.5-1 2.5-2.5V7.1c0-1.8-1.5-3.1-3.2-3.1h-2.2v3.1c0 1.8-1.4 3.4-3.2 3.4H9.4c-1.4 0-2.5 1.1-2.5 2.5v4.9c0 1.8 1.5 3.1 3.2 3.1h2z" fill="#FFE052" />
        <circle cx="9.5" cy="5.7" r="0.75" fill="#fff" />
        <circle cx="14.5" cy="18.3" r="0.75" fill="#111" />
      </svg>
    ),
  },
  {
    name: "C++",
    subtitle: "High-Performance Control",
    description: "Real-time kinematic calculations, low-latency sensor driver communication, and core navigation algorithms.",
    color: "from-indigo-500/10 to-blue-500/10 border-blue-500/20 hover:border-blue-400/50",
    glowColor: "rgba(29,78,216,0.15)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#00599C]" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.2L12 20.1l-8-3.9V7.8l8-3.9 8 3.9v8.4z" opacity="0.3" />
        <path d="M12 4.1L3.5 8.3v7.4l8.5 4.2 8.5-4.2V8.3L12 4.1zm2.5 6.3h1.5v1.5h-1.5v1.5h-1v-1.5h-1.5v-1h1.5v-1.5h1v1.5zm3.5 0h1.5v1.5H18v1.5h-1v-1.5h-1.5v-1H17v-1.5h1v1.5zM10.8 13.9c-.4.5-1.1.9-1.9.9-1.5 0-2.6-1.1-2.6-2.8s1.1-2.8 2.6-2.8c.8 0 1.5.4 1.9.9L9.6 11c-.2-.3-.5-.5-.8-.5-.7 0-1.2.6-1.2 1.4s.5 1.4 1.2 1.4c.3 0 .6-.2.8-.5l1.2.9z" />
      </svg>
    ),
  },
  {
    name: "C",
    subtitle: "Low-Level Systems",
    description: "Highly optimized hardware-interfacing layer, memory-managed drivers, and bare-metal integrations.",
    color: "from-indigo-500/10 to-purple-500/10 border-indigo-500/20 hover:border-indigo-400/50",
    glowColor: "rgba(79,70,229,0.15)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#3949AB]" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.2L12 20.1l-8-3.9V7.8l8-3.9 8 3.9v8.4z" opacity="0.3" />
        <path d="M12 4.1L3.5 8.3v7.4l8.5 4.2 8.5-4.2V8.3L12 4.1zm4.5 10.3c-.6.8-1.6 1.4-2.8 1.4-2.1 0-3.7-1.6-3.7-3.8s1.6-3.8 3.7-3.8c1.2 0 2.2.6 2.8 1.4l-1.6 1.1c-.3-.4-.7-.7-1.2-.7-1 0-1.7.8-1.7 2s.7 2 1.7 2c.5 0 .9-.3 1.2-.7l1.6 1.2z" />
      </svg>
    ),
  },
  {
    name: "NVIDIA Isaac Sim",
    subtitle: "Simulation & Synthesis",
    description: "Virtual prototyping, photorealistic physics, and synthetic training data generation in simulated environments.",
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 hover:border-emerald-400/50",
    glowColor: "rgba(16,185,129,0.15)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#76B900]" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 7 2 17 12 22 22 17 22 7" stroke="#76B900" fill="rgba(118,185,0,0.1)" />
        <line x1="12" y1="2" x2="12" y2="22" stroke="#76B900" />
        <line x1="12" y1="12" x2="2" y2="7" stroke="#76B900" />
        <line x1="12" y1="12" x2="22" y2="7" stroke="#76B900" />
        <circle cx="12" cy="12" r="3" fill="#76B900" />
        <circle cx="12" cy="2" r="1.5" fill="#white" />
        <circle cx="2" cy="7" r="1.5" fill="#white" />
        <circle cx="2" cy="17" r="1.5" fill="#white" />
        <circle cx="12" cy="22" r="1.5" fill="#white" />
        <circle cx="22" cy="17" r="1.5" fill="#white" />
        <circle cx="22" cy="7" r="1.5" fill="#white" />
      </svg>
    ),
  },
  {
    name: "ROS / ROS 2",
    subtitle: "Robot Operating System",
    description: "Nodes distribution, message communication, navigation stack (Nav2), and hardware abstraction schemas.",
    color: "from-[#22314E]/20 to-[#E05B35]/10 border-orange-500/20 hover:border-orange-400/50",
    glowColor: "rgba(224,91,53,0.15)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#22314E" />
        <circle cx="12" cy="12" r="1.8" fill="#E05B35" />
        <circle cx="12" cy="7.2" r="1.5" fill="#E05B35" />
        <circle cx="12" cy="16.8" r="1.5" fill="#E05B35" />
        <circle cx="7.2" cy="12" r="1.5" fill="#E05B35" />
        <circle cx="16.8" cy="12" r="1.5" fill="#E05B35" />
        <circle cx="8.6" cy="8.6" r="1.5" fill="#E05B35" />
        <circle cx="15.4" cy="15.4" r="1.5" fill="#E05B35" />
        <circle cx="8.6" cy="15.4" r="1.5" fill="#E05B35" />
        <circle cx="15.4" cy="8.6" r="1.5" fill="#E05B35" />
        <text x="12" y="21.5" fontFamily="sans-serif" fontSize="3.5" fontWeight="bold" fill="white" textAnchor="middle">ROS</text>
      </svg>
    ),
  },
  {
    name: "STM32 microcontrollers",
    subtitle: "ARM Cortex Control",
    description: "Hard real-time actuation, precise stepper/servo motor driver cycles, and direct sensor data capture.",
    color: "from-blue-600/10 to-indigo-700/10 border-blue-500/20 hover:border-blue-400/50",
    glowColor: "rgba(59,130,246,0.15)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#03234B]" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="5" width="14" height="14" rx="2" fill="rgba(3,35,75,0.1)" stroke="#3B82F6" strokeWidth="2" />
        <line x1="8" y1="2" x2="8" y2="5" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="12" y1="2" x2="12" y2="5" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="16" y1="2" x2="16" y2="5" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="8" y1="19" x2="8" y2="22" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="12" y1="19" x2="12" y2="22" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="16" y1="19" x2="16" y2="22" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="2" y1="8" x2="5" y2="8" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="2" y1="12" x2="5" y2="12" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="2" y1="16" x2="5" y2="16" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="19" y1="8" x2="22" y2="8" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="19" y1="12" x2="22" y2="12" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="19" y1="16" x2="22" y2="16" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="9" y="9" width="6" height="6" rx="1" fill="#3B82F6" />
        <text x="12" y="13.2" fontFamily="sans-serif" fontSize="3.2" fontWeight="black" fill="white" textAnchor="middle">ST</text>
      </svg>
    ),
  },
  {
    name: "ESP32 Ecosystem",
    subtitle: "IoT & Wireless Nodes",
    description: "Integrated Wi-Fi/Bluetooth nodes, telemetry streaming, and localized low-power sensor networks.",
    color: "from-red-500/10 to-orange-500/10 border-red-500/20 hover:border-red-400/50",
    glowColor: "rgba(239,68,68,0.15)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#E7352C]" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="5" width="14" height="14" rx="2" fill="rgba(231,53,44,0.05)" stroke="#E7352C" strokeWidth="2" />
        <path d="M9 14.5a3 3 0 016 0" stroke="#E7352C" strokeWidth="1" />
        <path d="M7.5 12.5a5 5 0 019 0" stroke="#E7352C" strokeWidth="1" />
        <path d="M6 10.5a7 7 0 0112 0" stroke="#E7352C" strokeWidth="1" />
        <circle cx="12" cy="15" r="1" fill="#E7352C" />
        <line x1="8" y1="2" x2="8" y2="5" stroke="#E7352C" />
        <line x1="12" y1="2" x2="12" y2="5" stroke="#E7352C" />
        <line x1="16" y1="2" x2="16" y2="5" stroke="#E7352C" />
        <line x1="8" y1="19" x2="8" y2="22" stroke="#E7352C" />
        <line x1="12" y1="19" x2="12" y2="22" stroke="#E7352C" />
        <line x1="16" y1="19" x2="16" y2="22" stroke="#E7352C" />
        <line x1="2" y1="8" x2="5" y2="8" stroke="#E7352C" />
        <line x1="2" y1="12" x2="5" y2="12" stroke="#E7352C" />
        <line x1="2" y1="16" x2="5" y2="16" stroke="#E7352C" />
        <line x1="19" y1="8" x2="22" y2="8" stroke="#E7352C" />
        <line x1="19" y1="12" x2="22" y2="12" stroke="#E7352C" />
        <line x1="19" y1="16" x2="22" y2="16" stroke="#E7352C" />
        <text x="12" y="9.2" fontFamily="sans-serif" fontSize="3" fontWeight="black" fill="#E7352C" textAnchor="middle">ESP32</text>
      </svg>
    ),
  },
  {
    name: "Arduino Boards",
    subtitle: "Rapid Prototyping",
    description: "Quick hardware verification, secondary sensor controller setups, and peripheral module integration.",
    color: "from-teal-500/10 to-cyan-500/10 border-teal-500/20 hover:border-teal-400/50",
    glowColor: "rgba(20,184,166,0.15)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#00979C]" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect width="24" height="24" rx="6" fill="#00979C" stroke="none" />
        <circle cx="9.5" cy="12" r="3.2" stroke="white" strokeWidth="1.5" />
        <line x1="8.5" y1="12" x2="10.5" y2="12" stroke="white" strokeWidth="1.5" />
        <line x1="9.5" y1="11" x2="9.5" y2="13" stroke="white" strokeWidth="1.5" />
        <circle cx="14.5" cy="12" r="3.2" stroke="white" strokeWidth="1.5" />
        <line x1="13.5" y1="12" x2="15.5" y2="12" stroke="white" strokeWidth="1.5" />
        <text x="12" y="20.5" fontFamily="sans-serif" fontSize="3.2" fontWeight="bold" fill="white" textAnchor="middle">ARDUINO</text>
      </svg>
    ),
  },
];

export default function Technologies() {
  // Double array to achieve a seamless scrolling effect
  const doubleTechList = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="relative py-24 bg-[#050816] border-t border-white/5 overflow-hidden">
      {/* Dynamic background glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 px-6 relative z-10">
        <p className="text-[10px] font-mono uppercase tracking-[6px] text-cyan-400 mb-2">
          ENGINEERING STACK
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
          POWERING OUR ROBOTICS ECOSYSTEM
        </h2>
        <div className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4" />
        <p className="mt-4 text-xs md:text-sm text-gray-400 max-w-xl mx-auto">
          We integrate industry-leading hardware, software frameworks, and low-level controllers to construct autonomous systems of unmatched stability and intelligence.
        </p>
      </div>

      {/* Technologies Slider (Infinite Marquee) */}
      <div className="relative overflow-hidden py-4">
        {/* Shadow Masks */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r to-transparent z-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, var(--theme-bg) 0%, transparent 100%)" }} />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l to-transparent z-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(to left, var(--theme-bg) 0%, transparent 100%)" }} />

        <div
          className="flex animate-marquee-left will-change-transform"
          style={{ width: "max-content" }}
        >
          {doubleTechList.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className={`flex-shrink-0 w-[300px] md:w-[330px] p-6 rounded-2xl border bg-white/[0.02] backdrop-blur-md relative overflow-hidden mx-3 group transition-all duration-300 ${tech.color}`}
              style={
                {
                  "--glow-color": tech.glowColor,
                } as React.CSSProperties
              }
            >
              {/* Radial glow background on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--glow-color)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Technical Grid/Coordinates element inside card */}
              <div className="absolute right-2 top-2 text-[8px] font-mono text-white/5 group-hover:text-cyan-400/20 transition-colors pointer-events-none">
                {`[TECH_ID_0${(idx % TECHNOLOGIES.length) + 1}]`}
              </div>

              {/* Logo & Header */}
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-[10px] text-cyan-400 font-mono tracking-wider">
                    {tech.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed relative z-10 line-clamp-3">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 45s linear infinite;
        }
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
