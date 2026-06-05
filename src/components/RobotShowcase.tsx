"use client";

import { useState, useEffect, useRef } from "react";

// Robot Profiles Data matching the approved implementation plan
interface Robot {
  id: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  color: string; // hex
  rgbColor: string; // rgb
  hueRotate: string; // css filter
  image: string; // path to main PNG image
  video?: string; // path to optional video loop
  specs: {
    height: string;
    battery: string;
    special: string;
    specialLabel: string;
  };
  stats: {
    cognitiveAI: number;
    dexterity: number;
    agility: number;
    power: number;
  };
  logs: string[];
}

const ROBOTS_DATA: Robot[] = [
  {
    id: "joy-a01",
    name: "JOY A-01",
    role: "Intelligent Robotic Assistant",
    tagline: "Meet Your New Digital Receptionist",
    description: "An elegant bipedal hospitality specialist designed to elevate lobby reception, patient concierge, and VIP business greetings with an expressive face.",
    color: "#00f0ff",
    rgbColor: "0, 240, 255",
    hueRotate: "hue-rotate(0deg)",
    image: "/robots/joy-a01.png",
    video: "/robots/joy-a01.mp4",
    specs: {
      height: "1.35m (4.4ft)",
      battery: "24h Continuous",
      special: "2-6 DoF Articulated Arms",
      specialLabel: "Mechanics"
    },
    stats: {
      cognitiveAI: 94,
      dexterity: 88,
      agility: 78,
      power: 85
    },
    logs: [
      "INITIALIZING CONCIERGE INTERFACE Core-v4.0",
      "EXPRESSIVE DIGITAL FACE ACTIVATION: NOMINAL",
      "ARTICULATED MOTION CONTROLLERS ONLINE // 6 DoF",
      "RIGID FIBER SHIELD DYNAMICS VERIFIED",
      "MOBILITY BASE DEPLOYED // RECEPTION READY"
    ]
  },
  {
    id: "t2-mini",
    name: "T2 MINI",
    role: "AI Reception & Engagement",
    tagline: "The Future Of Customer Experience",
    description: "Compact humanoid customer engagement specialist optimized for seamless lobby interaction, voice-guided guidance, and corporate office assistance.",
    color: "#00f0ff",
    rgbColor: "0, 240, 255",
    hueRotate: "hue-rotate(0deg)",
    image: "/robots/t2-mini.png",
    video: "/robots/t2-mini.mp4",
    specs: {
      height: "1.22m (4.0ft)",
      battery: "20h Continuous",
      special: "Compact SLAM",
      specialLabel: "Navigation"
    },
    stats: {
      cognitiveAI: 92,
      dexterity: 70,
      agility: 85,
      power: 95
    },
    logs: [
      "INITIALIZING NEURAL LINK // COGNITIVE CORE v2.8",
      "BATTERY PACK AT 98% // THERMALS NOMINAL",
      "LIDAR PRECISION CALIBRATED // ACCURACY TO 0.1MM",
      "SPEECH RECOGNITION ONLINE // LATENCY 12MS",
      "GUEST DETECTION VECTOR ENABLED // RECEPTION READY"
    ]
  },
  {
    id: "tella-s",
    name: "TELLA S",
    role: "Customer Relations & Concierge",
    tagline: "Enterprise Fleet Service Dynamics",
    description: "Sleek and robust corporate service frame featuring interactive double-display HUD panels to coordinate client data and guest onboarding.",
    color: "#00f0ff",
    rgbColor: "0, 240, 255",
    hueRotate: "hue-rotate(0deg)",
    image: "/robots/tella-s.png",
    video: "/robots/tella-s.mp4",
    specs: {
      height: "1.30m (4.0ft)",
      battery: "24h Continuous",
      special: "Interactive HUD",
      specialLabel: "Display Core"
    },
    stats: {
      cognitiveAI: 90,
      dexterity: 82,
      agility: 80,
      power: 92
    },
    logs: [
      "TELLA S ONLINE // QUANTUM INTERCONNECT LINK",
      "DUAL-DISPLAY HUD CALIBRATION... COMPLETED",
      "SLAM DYNAMICS MODULE: NOMINAL",
      "DATA ACQUISITION BUFFER CLEAR // STANDBY"
    ]
  },
  {
    id: "andy-r1",
    name: "ANDY R1",
    role: "Gesture Mimicry & Support",
    tagline: "Fluid Kinematic Mimicry Interaction",
    description: "Advanced bipedal research platform equipped with high-degree-of-freedom actuators for natural body language, biped balance, and gestural support.",
    color: "#00f0ff",
    rgbColor: "0, 240, 255",
    hueRotate: "hue-rotate(0deg)",
    image: "/robots/andy-r1.png",
    video: "/robots/andy-r1.mp4",
    specs: {
      height: "1.30m (4.2ft)",
      battery: "18h Continuous",
      special: "42 Deg. of Freedom",
      specialLabel: "Actuators"
    },
    stats: {
      cognitiveAI: 85,
      dexterity: 96,
      agility: 90,
      power: 80
    },
    logs: [
      "ESTABLISHING SYNPATIC INTERFACE...",
      "KINEMATIC EQUATIONS RESOLVED // GAIT BALANCED",
      "TORQUE SENSORS CALIBRATED // 42 DOF ONLINE",
      "GESTURAL IMITATION MODEL ACTIVE",
      "SYSTEM RUNNING AT MAXIMUM PHYSICAL DEXTERITY"
    ]
  },
  {
    id: "t2-max",
    name: "T2 MAX",
    role: "Autonomous Logistics & Delivery",
    tagline: "Industrial Strength Payload Freight",
    description: "Heavy-duty bipedal freight carrier designed to carry heavy payloads safely across corporate offices, medical wings, and logistics depots.",
    color: "#00f0ff",
    rgbColor: "0, 240, 255",
    hueRotate: "hue-rotate(0deg)",
    image: "/robots/t2-max.png",
    video: "/robots/t2-max.mp4",
    specs: {
      height: "1.38m (4.5ft)",
      battery: "30h Continuous",
      special: "80 Kilograms Cap",
      specialLabel: "Cargo Space"
    },
    stats: {
      cognitiveAI: 88,
      dexterity: 80,
      agility: 75,
      power: 99
    },
    logs: [
      "LOAD CAPACITY VERIFIED // BALANCE ON SPEC",
      "TRACTION INTEGRITY MONITORED // ZERO SLIPPAGE",
      "HEAVY COLLISION AVOIDANCE MODE ACTIVE",
      "CARGO BAY LOCK ENGAGED // EN-ROUTE",
      "LOGISTICS FREIGHT SYSTEM READY"
    ]
  },
  {
    id: "nova-m1",
    name: "NOVA M1",
    role: "High-Definition Facility Mapping",
    tagline: "High-Definition LiDAR Spatial Intelligence",
    description: "Advanced mapping specialist engineered with high-precision SLAM navigation and a 905nm LiDAR pulse scanner to map facilities dynamically.",
    color: "#00f0ff",
    rgbColor: "0, 240, 255",
    hueRotate: "hue-rotate(0deg)",
    image: "/robots/nova-m1.png",
    video: "/robots/nova-m1.mp4",
    specs: {
      height: "0.90m (3.0ft)",
      battery: "36h Continuous",
      special: "150m Lidar range",
      specialLabel: "LiDAR Array"
    },
    stats: {
      cognitiveAI: 96,
      dexterity: 40,
      agility: 98,
      power: 98
    },
    logs: [
      "EMITTING LASER TELEMETRY ARRAY // 905NM PULSE",
      "CONSTRUCTING 3D VOXEL CLOUD... COMPLETE",
      "SLAM NAVIGATIONAL RESOLUTION AT 100%",
      "FACILITY MAP SYNCED WITH CLOUD GRID",
      "ACTIVE AVOIDING STATIC & DYNAMIC BARRIERS"
    ]
  }
];

// Per-robot positioning adjustments to handle varying blank space at the top/bottom of the video frames
const ROBOT_LAYOUT_ADJUSTMENTS: Record<string, { scale: number; translateY: string; bottomClip: string }> = {
  "joy-a01": { scale: 1.0,  translateY: "-2%",  bottomClip: "94%" },
  "t2-mini": { scale: 1.0,  translateY: "2%",   bottomClip: "94%" },
  "tella-s": { scale: 1.0,  translateY: "2%",   bottomClip: "100%" },
  "andy-r1": { scale: 1.0,  translateY: "2%",   bottomClip: "94%" },
  "t2-max":  { scale: 1.0,  translateY: "1%",   bottomClip: "99.5%" },
  "nova-m1": { scale: 1.0,  translateY: "2%",   bottomClip: "96%" },
};

export default function RobotShowcase() {
  const [activeRobotIndex, setActiveRobotIndex] = useState(0);
  const activeRobot = ROBOTS_DATA[activeRobotIndex];

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeView, setActiveView] = useState<"video" | "front" | "side" | "back" | "wave">("video");
  const [flashActive, setFlashActive] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const [animatedStats, setAnimatedStats] = useState({
    cognitiveAI: 0, dexterity: 0, agility: 0, power: 0
  });

  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);
  const logIndexRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [showHud, setShowHud] = useState(false);

  // Parse query parameters for deep linking
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const robotId = params.get("robot");
      if (robotId) {
        const index = ROBOTS_DATA.findIndex((r) => r.id === robotId);
        if (index !== -1) {
          setActiveRobotIndex(index);
        }
      }
    }
  }, []);

  // Scroll listener to animate HUD elements in when scrolling down the page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowHud(true);
      } else {
        setShowHud(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Particle Canvas Background Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number; y: number; size: number;
      speedY: number; speedX: number;
      opacity: number; maxLife: number; life: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedY: -(Math.random() * 0.8 + 0.3),
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
        maxLife: Math.random() * 200 + 100,
        life: Math.random() * 100
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const themeRgb = activeRobot.rgbColor;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life++;
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < 0 || p.life >= p.maxLife) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 10;
          p.life = 0;
          p.size = Math.random() * 2 + 1;
          p.speedY = -(Math.random() * 0.8 + 0.3);
          p.speedX = (Math.random() - 0.5) * 0.4;
          p.opacity = Math.random() * 0.5 + 0.1;
        }

        const lifeRatio = p.life / p.maxLife;
        const currentOpacity = lifeRatio < 0.2
          ? (lifeRatio * 5) * p.opacity
          : (1 - lifeRatio) * p.opacity;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${themeRgb}, ${currentOpacity})`;
        ctx.fill();

        if (p.size > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${themeRgb}, ${currentOpacity * 0.25})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeRobot]);

  // Stats animation + rolling logs on robot change
  useEffect(() => {
    setFlashActive(true);
    const flashTimer = setTimeout(() => setFlashActive(false), 500);

    setAnimatedStats({ cognitiveAI: 0, dexterity: 0, agility: 0, power: 0 });
    let current = { cognitiveAI: 0, dexterity: 0, agility: 0, power: 0 };
    const step = 2;
    const interval = setInterval(() => {
      let done = true;
      (["cognitiveAI", "dexterity", "agility", "power"] as const).forEach(key => {
        const target = activeRobot.stats[key];
        if (current[key] < target) {
          current[key] = Math.min(target, current[key] + step);
          done = false;
        }
      });
      setAnimatedStats({ ...current });
      if (done) clearInterval(interval);
    }, 15);

    setDisplayedLogs([]);
    logIndexRef.current = 0;
    const logsInterval = setInterval(() => {
      if (logIndexRef.current < activeRobot.logs.length) {
        setDisplayedLogs(prev => [...prev, activeRobot.logs[logIndexRef.current]]);
        logIndexRef.current++;
      } else {
        clearInterval(logsInterval);
      }
    }, 450);

    return () => {
      clearTimeout(flashTimer);
      clearInterval(interval);
      clearInterval(logsInterval);
    };
  }, [activeRobotIndex]);

  const handleRobotClick = (index: number) => {
    if (isTransitioning) return;
    setActiveRobotIndex(index);
    setActiveView("video");
    setVideoError(false);   // reset so next robot's video gets a fresh attempt
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const layoutAdjustment = activeView === "video"
    ? (ROBOT_LAYOUT_ADJUSTMENTS[activeRobot.id] || { scale: 1.0, translateY: "0%" })
    : { scale: 1.0, translateY: "0%" };

  return (
    /* Responsive scrollable container that allows full heights but scrolls if items exceed viewport */
    <div
      className="relative w-full bg-[#050816] text-white min-h-screen flex flex-col overflow-x-hidden"
    >
      {/* Background Canvas Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full opacity-65" />
      </div>

      {/* CAD Flowing Circuit Traces SVG removed to resolve black bars */}

      {/* Global GPU SVG Chroma Filters used from layout.tsx */}

      {/* Screen flash transition overlay */}
      <div
        className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 ${flashActive ? "opacity-35" : "opacity-0"}`}
        style={{ background: `radial-gradient(circle, rgba(${activeRobot.rgbColor}, 0.6) 0%, transparent 80%)` }}
      />

      {/* ── MAIN LAYOUT: flex-grow with proper responsive padding ── */}
      <div className="relative z-10 flex-grow flex flex-col pt-[120px] px-4 pb-4 gap-4 max-w-7xl mx-auto w-full min-h-0">

        {/* ── HEADER ── compact, never grows */}
        <div className="text-center flex-shrink-0">
          <p className="text-[8px] font-mono uppercase tracking-[5px] text-cyan-400/70">
            CONSOLE HOST: CORE.COMMAND // 0x48FA
          </p>
          <h2 className="text-xl md:text-2xl font-black tracking-tight text-white uppercase leading-none">
            COMMAND SELECTION COCKPIT
          </h2>
        </div>

        {/* ── COCKPIT GRID: responsive stack on mobile, 3-column layout on desktop ── */}
        <div className="flex-grow min-h-0 grid grid-cols-1 lg:grid-cols-[2.2fr_5fr_2.2fr] gap-4">

          {/* ── LEFT PANEL: identity + specs + telemetry ── */}
          <div className="flex flex-col gap-2 min-h-0 order-2 lg:order-1">

            {/* Robot identity */}
            <div className="flex-shrink-0 p-3 rounded-xl border border-white/5 bg-slate-900/30 backdrop-blur-md relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-[3px] h-full rounded-l-xl transition-all duration-500"
                style={{ backgroundColor: activeRobot.color }}
              />
              <div className="pl-3">
                <span className="text-[7px] font-mono tracking-widest text-gray-400 uppercase">
                  ACTIVE FRAME: 0{activeRobotIndex + 1} // MODEL
                </span>
                <h3 className="text-lg font-extrabold text-white mt-0.5 tracking-tight leading-none">{activeRobot.name}</h3>
                <p className="text-[10px] font-semibold mt-1 mb-1.5" style={{ color: activeRobot.color }}>{activeRobot.role}</p>
                <p className="text-[10px] text-gray-400 leading-relaxed">{activeRobot.description}</p>
              </div>
            </div>

            {/* Physical specs 2×2 grid */}
            <div className="flex-shrink-0 p-3 rounded-xl border border-white/5 bg-slate-900/30 backdrop-blur-md grid grid-cols-2 gap-2">
              {[
                ["UNIT HEIGHT",   activeRobot.specs.height, "text-white"],
                ["BATTERY",       activeRobot.specs.battery.split(" ")[0], "text-white"],
                [activeRobot.specs.specialLabel.toUpperCase(), activeRobot.specs.special, "text-white"],
                ["THERMALS",      "36.5°C", "text-green-400"],
              ].map(([label, value, col]) => (
                <div key={label}>
                  <p className="text-[7px] font-mono text-gray-500 uppercase tracking-wider">{label}</p>
                  <p className={`text-[10px] font-extrabold mt-0.5 truncate ${col}`}>{value}</p>
                </div>
              ))}
            </div>

            {/* Telemetry 2×2 grid */}
            <div className="flex-shrink-0 p-3 rounded-xl border border-white/5 bg-slate-900/20 backdrop-blur-md grid grid-cols-2 gap-2">
              {[
                ["AI FRAMEWORK",  "Techligence-L2",  "text-white"],
                ["DIAGNOSTICS",   "ONLINE",           "text-green-400"],
                ["COMMS",         "5G QUANTUM",       "text-white"],
                ["STATE",         "READY",            "text-cyan-400"],
              ].map(([label, value, col]) => (
                <div key={label}>
                  <p className="text-[7px] font-mono text-gray-500 uppercase tracking-wider">{label}</p>
                  <p className={`text-[10px] font-bold mt-0.5 truncate ${col}`}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CENTER PANEL: robot viewer, positioned on top layer, no overflow clipping ── */}
          <div className="flex flex-col min-h-0 items-center justify-center relative order-1 lg:order-2 min-h-[300px] h-[40vh] lg:h-auto lg:min-h-0 z-30 pointer-events-none">

            {/* Consolidated Robotic Name & Navigation Header */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-40 text-center pointer-events-auto select-none flex items-center justify-center gap-4 md:gap-6 w-full max-w-[450px]">
              {/* Left Chevron Button */}
              <button
                onClick={() => handleRobotClick((activeRobotIndex - 1 + ROBOTS_DATA.length) % ROBOTS_DATA.length)}
                className="p-1.5 rounded-full border border-cyan-500/25 bg-slate-950/60 hover:bg-slate-900/80 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(0,240,255,0.4)] text-gray-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer flex-shrink-0"
                aria-label="Previous Robot"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Robot Name */}
              <div className="flex-shrink-0">
                <h2 className="text-cyan-400 font-mono text-xl md:text-2xl lg:text-3xl font-black tracking-[6px] uppercase drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                  {activeRobot.name}
                </h2>
                <div className="w-12 h-[2px] bg-cyan-400/50 mx-auto mt-1.5 blur-[0.5px]"></div>
              </div>

              {/* Right Chevron Button */}
              <button
                onClick={() => handleRobotClick((activeRobotIndex + 1) % ROBOTS_DATA.length)}
                className="p-1.5 rounded-full border border-cyan-500/25 bg-slate-950/60 hover:bg-slate-900/80 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(0,240,255,0.4)] text-gray-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer flex-shrink-0"
                aria-label="Next Robot"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Futuristic Left Cyber Telemetry (Vertical HUD Axis) */}
            <div className="hidden xl:flex absolute left-[12%] top-[18%] bottom-[18%] w-[60px] flex-col items-center justify-between pointer-events-none select-none z-10 font-mono text-[7px] text-cyan-500/40">
              <span className="tracking-widest rotate-90 origin-left translate-x-3 mb-4">[ELEV_AXIS]</span>
              <div className="relative w-[1px] flex-grow bg-cyan-500/20">
                {/* Tick marks */}
                {[0.2, 0.4, 0.6, 0.8].map((top, idx) => (
                  <div 
                    key={idx} 
                    className="absolute w-2 h-[1px] bg-cyan-500/30 -left-1" 
                    style={{ top: `${top * 100}%` }}
                  >
                    <span className="absolute left-3 -top-1 opacity-70">y_0{idx+1}</span>
                  </div>
                ))}
                {/* Animated horizontal cursor */}
                <div 
                  className="absolute w-4 h-[1px] bg-cyan-400 left-[-7px] shadow-[0_0_8px_#00f0ff] animate-[elevCursor_6s_ease-in-out_infinite]"
                />
              </div>
              <span className="mt-4">VAL_0x9A</span>
            </div>

            {/* Futuristic Right Cyber Telemetry (LiDAR Sweep / Sector Scope) */}
            <div className="hidden xl:flex absolute right-[12%] top-[22%] w-[120px] flex-col gap-4 pointer-events-none select-none z-10 font-mono text-[7px] text-cyan-500/40 text-left">
              <div>
                <span className="block text-[8px] font-bold text-cyan-400/50 mb-1">[SECTOR_SWEEP]</span>
                <div className="relative w-12 h-12 rounded-full border border-cyan-500/20 flex items-center justify-center">
                  {/* Rotating sweep line */}
                  <div className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-cyan-500/10 animate-[spin_8s_linear_infinite]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/30 animate-pulse" />
                </div>
              </div>
              
              <div className="border-t border-cyan-500/20 pt-2 flex flex-col gap-1">
                <span>PING: 14MS // OK</span>
                <span>SIGNAL: 99.8%</span>
                <span>SECTOR: 0x4BFA</span>
                <span>BANDWIDTH: 5.4 Gbps</span>
              </div>

              <div className="w-full h-8 border border-dashed border-cyan-500/15 rounded-sm relative overflow-hidden bg-cyan-500/[0.02]">
                <div className="absolute top-1 left-2 w-2 h-2 bg-cyan-400/20 animate-pulse rounded-full" />
                <div className="absolute top-1 left-6 w-8 h-[1px] bg-cyan-500/30" />
                <div className="absolute top-3 left-6 w-12 h-[1px] bg-cyan-500/30" />
              </div>
            </div>

            {/* Decorative orbital rings */}
            <div
              className="absolute w-[88%] h-[55%] rounded-full border border-dashed pointer-events-none z-0 opacity-10 animate-[spin_40s_linear_infinite]"
              style={{ borderColor: "#00f0ff", transform: "translateY(16px) scaleY(0.3) rotate(15deg)" }}
            />
            <div
              className="absolute w-[76%] h-[50%] rounded-full border pointer-events-none z-0 opacity-15 animate-[spin_20s_linear_infinite_reverse]"
              style={{ borderColor: "#00f0ff", transform: "translateY(16px) scaleY(0.3) rotate(-15deg)" }}
            />

            {/* Futuristic HUD Specs Badge Left */}
            <div className={`hidden lg:block absolute left-[4%] top-[25%] z-20 border border-cyan-500/30 bg-slate-950/70 backdrop-blur-md p-2.5 rounded-sm font-mono select-none text-left w-[130px] shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-700 ease-out ${
              showHud ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"
            }`}>
              <div className="text-lg font-black text-cyan-400 leading-none mb-1">{activeRobot.stats.cognitiveAI}%</div>
              <div className="text-[7px] text-gray-400 uppercase tracking-widest leading-tight">Cognitive Core</div>
            </div>

            {/* Futuristic HUD Specs Badge Right */}
            <div className={`hidden lg:block absolute right-[4%] top-[48%] z-20 border border-cyan-500/30 bg-slate-950/70 backdrop-blur-md p-2.5 rounded-sm font-mono select-none text-left w-[130px] shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-700 ease-out ${
              showHud ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
            }`}>
              <div className="text-lg font-black text-cyan-400 leading-none mb-1">{activeRobot.stats.dexterity}%</div>
              <div className="text-[7px] text-gray-400 uppercase tracking-widest leading-tight">Kinetic Motion</div>
            </div>

            {/* HUD Dashed Connector Lines */}
            <svg className={`hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20 transition-opacity duration-700 ease-out ${
              showHud ? "opacity-100" : "opacity-0"
            }`}>
              {/* Left Line Segment 1 */}
              <line 
                x1="20%" y1="31%" 
                x2="28%" y2="31%" 
                stroke="#00f0ff" 
                strokeWidth="1" 
                strokeDasharray="3,3" 
                className="opacity-45"
              />
              {/* Left Line Segment 2 (Angled) */}
              <line 
                x1="28%" y1="31%" 
                x2="48%" y2="39%" 
                stroke="#00f0ff" 
                strokeWidth="1" 
                strokeDasharray="3,3" 
                className="opacity-45"
              />
              {/* Right Line Segment 1 */}
              <line 
                x1="80%" y1="54%" 
                x2="72%" y2="54%" 
                stroke="#00f0ff" 
                strokeWidth="1" 
                strokeDasharray="3,3" 
                className="opacity-45"
              />
              {/* Right Line Segment 2 (Angled) */}
              <line 
                x1="72%" y1="54%" 
                x2="58%" y2="61%" 
                stroke="#00f0ff" 
                strokeWidth="1" 
                strokeDasharray="3,3" 
                className="opacity-45"
              />
            </svg>

            {/* Target Pulsing Dot Left */}
            <div 
              className={`hidden lg:block absolute w-2.5 h-2.5 rounded-full bg-cyan-400/40 z-30 animate-ping pointer-events-none transition-opacity duration-700 ease-out ${
                showHud ? "opacity-100" : "opacity-0"
              }`}
              style={{ left: "48%", top: "39%", transform: "translate(-50%, -50%)" }}
            />
            <div 
              className={`hidden lg:block absolute w-1.5 h-1.5 rounded-full bg-cyan-300 z-30 shadow-[0_0_8px_#00f0ff] pointer-events-none transition-opacity duration-700 ease-out ${
                showHud ? "opacity-100" : "opacity-0"
              }`}
              style={{ left: "48%", top: "39%", transform: "translate(-50%, -50%)" }}
            />

            {/* Target Pulsing Dot Right */}
            <div 
              className={`hidden lg:block absolute w-2.5 h-2.5 rounded-full bg-cyan-400/40 z-30 animate-ping pointer-events-none transition-opacity duration-700 ease-out ${
                showHud ? "opacity-100" : "opacity-0"
              }`}
              style={{ left: "58%", top: "61%", transform: "translate(-50%, -50%)" }}
            />
            <div 
              className={`hidden lg:block absolute w-1.5 h-1.5 rounded-full bg-cyan-300 z-30 shadow-[0_0_8px_#00f0ff] pointer-events-none transition-opacity duration-700 ease-out ${
                showHud ? "opacity-100" : "opacity-0"
              }`}
              style={{ left: "58%", top: "61%", transform: "translate(-50%, -50%)" }}
            />

            {/* ── Robot media: per-robot background removal with centering translation ── */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10 pt-0 overflow-hidden">
              <div 
                className="relative w-full h-full flex items-center justify-center transition-all duration-500"
                style={{ transform: `scale(${layoutAdjustment.scale}) translateY(${layoutAdjustment.translateY})` }}
              >
                {/* Floor shadow glows inside the translation container to lock to the robot base */}
                <div
                  className="absolute bottom-[16%] left-1/2 w-[44%] h-[14px] bg-black/85 rounded-full pointer-events-none z-0"
                  style={{ transform: "translate(-50%,0) scaleY(0.25)", filter: "blur(14px)" }}
                />
                <div
                  className="absolute bottom-[16%] left-1/2 w-[30%] h-[10px] rounded-full pointer-events-none z-0"
                  style={{ transform: "translate(-50%,0) scaleY(0.25)", backgroundColor: "rgba(0,240,255,0.28)", filter: "blur(9px)" }}
                />

                {(() => {
                  // Apply dynamic filter selection (remove-white-showcase for white bg, remove-green-showcase for green bg) and WebkitClipPath to hide watermark
                  const isLandscape = ["tella-s", "nova-m1"].includes(activeRobot.id);
                  const filterId = activeRobot.id === "t2-max" ? "remove-white-showcase" : "remove-green-showcase";
                  
                  const layoutAdjustment = ROBOT_LAYOUT_ADJUSTMENTS[activeRobot.id] || { scale: 1.0, translateY: "0%", bottomClip: "100%" };
                  const bottomClipNum = parseFloat(layoutAdjustment.bottomClip || "100");
                  const bottomCrop = 100 - bottomClipNum;

                  const videoStyle: React.CSSProperties = isLandscape
                    ? {
                        filter: `url(#${filterId})`,
                        height: "100%",
                        width: "auto",
                        maxWidth: "none",
                        aspectRatio: "16 / 9",
                        clipPath: `inset(0% 34.375% ${bottomCrop}% 34.375%)`,
                        WebkitClipPath: `inset(0% 34.375% ${bottomCrop}% 34.375%)`,
                        backgroundColor: "transparent",
                      }
                    : {
                        filter: `url(#${filterId})`,
                        height: "100%",
                        width: "auto",
                        aspectRatio: activeRobot.id === "t2-max" ? "1440 / 1956" : "9 / 16",
                        clipPath: `inset(0% 3% ${bottomCrop}% 3%)`,
                        WebkitClipPath: `inset(0% 3% ${bottomCrop}% 3%)`,
                        backgroundColor: "transparent",
                      };

                  return activeView === "video" && activeRobot.video ? (
                    !videoError ? (
                      <video
                        key={activeRobot.id}
                        src={activeRobot.video}
                        loop muted playsInline autoPlay
                        className="h-full w-auto max-w-full object-contain robot-float pointer-events-none relative z-10 transition-all duration-500"
                        style={videoStyle}
                        onError={() => setVideoError(true)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md z-10">
                        <p className="text-red-400 font-semibold">Video Offline</p>
                        <p className="text-xs text-gray-500 mt-1">Check /public/robots/{activeRobot.id}.mp4</p>
                      </div>
                    )
                  ) : (
                    <img
                      src={activeView === "video" ? activeRobot.image : `/robots/${activeView}.png`}
                      alt={`${activeRobot.name} visual`}
                      className="h-full w-auto max-w-full object-contain robot-float transition-all duration-500 relative z-10"
                      style={
                        activeView !== "video"
                          ? {
                              filter: "url(#remove-black-showcase)",
                              clipPath: `inset(0% 3% ${bottomCrop}% 3%)`,
                              WebkitClipPath: `inset(0% 3% ${bottomCrop}% 3%)`,
                            }
                          : undefined
                      }
                    />
                  );
                })()}
              </div>
            </div>

            {/* Viewport Selection overlay for mobile (rendered inside the viewer panel for quick access) */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 flex lg:hidden items-center justify-center gap-1.5 pointer-events-auto w-[90%] max-w-[360px] p-1.5 rounded-xl bg-slate-950/70 border border-white/5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              {[
                { view: "video", label: "3D MODEL" },
                { view: "front", label: "FRONT" },
                { view: "side",  label: "SIDE" },
                { view: "back",  label: "BACK" },
              ].map(({ view, label }) => {
                const isActive = activeView === view;
                return (
                  <button
                    key={view}
                    onClick={() => setActiveView(view as "video" | "front" | "side" | "back" | "wave")}
                    className="flex-1 py-1 rounded-lg text-[8px] font-mono font-black tracking-wider transition-all duration-300 cursor-pointer text-center"
                    style={isActive
                      ? { boxShadow: "0 0 8px rgba(0,240,255,0.4)", backgroundColor: "#00f0ff", color: "#050816" }
                      : { backgroundColor: "transparent", color: "rgb(156,163,175)" }
                    }
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT PANEL: ratings + logs + view-selector ── */}
          <div className="flex flex-col gap-2 min-h-0 order-3 lg:order-3">

            {/* Hardware rating bars */}
            <div className="flex-shrink-0 p-3 rounded-xl border border-white/5 bg-slate-900/30 backdrop-blur-md">
              <span className="text-[7px] font-mono tracking-widest text-gray-500 uppercase block mb-2.5">
                HARDWARE SYSTEM RATINGS
              </span>
              <div className="flex flex-col gap-2.5">
                {(["Cognitive Decision AI", "Kinetic Dexterity", "Spatial LiDAR Agility", "Power Core Endurance"] as const).map((label, i) => {
                  const keys = ["cognitiveAI", "dexterity", "agility", "power"] as const;
                  const val = animatedStats[keys[i]];
                  return (
                    <div key={label}>
                      <div className="flex justify-between text-[10px] font-semibold mb-1">
                        <span className="text-gray-300">{label}</span>
                        <span className="font-mono text-cyan-400">{val}%</span>
                      </div>
                      <div className="w-full h-[3px] rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{ width: `${val}%`, backgroundColor: "#00f0ff", boxShadow: "0 0 8px #00f0ff" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Diagnostic terminal logs */}
            <div
              className="flex-shrink-0 p-3 rounded-xl border border-white/5 bg-black/60 font-mono text-[8px] leading-relaxed text-gray-400 relative overflow-hidden flex flex-col justify-end"
              style={{ height: "92px" }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px]" style={{ backgroundColor: "#00f0ff" }} />
              <p className="text-cyan-400 font-bold mb-0.5">&gt;&gt; SYSTEM DIAGNOSTICS</p>
              {displayedLogs.map((log, i) => (
                <p key={i} className="truncate">&gt;&gt; {log}</p>
              ))}
              {displayedLogs.length < activeRobot.logs.length && (
                <p className="animate-pulse text-cyan-400/50">&gt;&gt; LOADING...</p>
              )}
            </div>

            {/* ── VIEW SELECTOR BUTTONS ── moved from center panel ── */}
            <div className="flex-shrink-0 hidden lg:block">
              <p className="text-[7px] font-mono text-gray-500 uppercase tracking-wider mb-1.5">VIEWPORT MODE</p>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { view: "video", label: "3D MODEL",   idx: "01" },
                  { view: "front", label: "FRONT VIEW", idx: "02" },
                  { view: "side",  label: "SIDE VIEW",  idx: "03" },
                  { view: "back",  label: "BACK VIEW",  idx: "04" },
                ].map(({ view, label, idx }) => {
                  const isActive = activeView === view;
                  return (
                    <button
                      key={view}
                      onClick={() => setActiveView(view as "video" | "front" | "side" | "back" | "wave")}
                      className="px-2 py-1.5 rounded-lg text-[8px] font-mono font-bold tracking-widest transition-all duration-300 cursor-pointer flex flex-col items-center"
                      style={isActive
                        ? { boxShadow: "0 0 10px rgba(0,240,255,0.45)", backgroundColor: "#00f0ff", color: "#050816" }
                        : { backgroundColor: "rgba(255,255,255,0.02)", color: "rgb(156,163,175)", border: "1px solid rgba(255,255,255,0.08)" }
                      }
                    >
                      <span className="text-[6px] opacity-60 mb-0.5">{idx}</span>
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── SELECTION DOCK: scrollable row on mobile, compact grid on desktop ── */}
        <div className="flex-shrink-0 w-full overflow-hidden lg:-mt-20 relative z-40">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0 max-w-3xl mx-auto w-full px-2 lg:px-0">
            {ROBOTS_DATA.map((robot, index) => {
              const isActive = index === activeRobotIndex;
              return (
                <button
                  key={robot.id}
                  onClick={() => handleRobotClick(index)}
                  className="rounded-xl border transition-all duration-300 cursor-pointer w-24 h-[76px] flex-shrink-0 flex flex-col items-center justify-between p-2 backdrop-blur-md select-none group text-center relative overflow-hidden lg:w-full"
                  style={{
                    borderColor: isActive ? "#00f0ff" : "rgba(255,255,255,0.08)",
                    boxShadow: isActive ? "0 0 12px rgba(0,240,255,0.2)" : "none",
                    backgroundColor: isActive ? "rgba(11,16,38,0.85)" : "rgba(5,8,22,0.45)"
                  }}
                >
                  {isActive && <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400" />}
                  <div className="w-full flex justify-between items-center text-[6px] font-mono text-gray-500 font-bold">
                    <span>0{index + 1}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400">
                      {isActive ? "●" : "○"}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-black/30 flex items-center justify-center border border-white/5 transition-transform duration-300 group-hover:scale-110">
                    <img src={robot.image} alt={robot.name} className="w-[85%] h-[85%] object-contain" />
                  </div>
                  <span
                    className="text-[7px] font-mono font-black tracking-wider uppercase truncate block w-full text-center"
                    style={{ color: isActive ? "#00f0ff" : "rgb(156,163,175)" }}
                  >
                    {robot.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Inline keyframes */}
      <style>{`
        .robot-float {
          animation: robotFloat 4s ease-in-out infinite;
        }
        @keyframes robotFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes elevCursor {
          0%, 100% { top: 10%; }
          50%       { top: 90%; }
        }
        @keyframes flowSignal {
          0% {
            stroke-dashoffset: 115;
          }
          30%, 100% {
            stroke-dashoffset: -15;
          }
        }
      `}</style>
    </div>
  );
}
