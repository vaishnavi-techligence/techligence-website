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

export default function RobotShowcase() {
  const [activeRobotIndex, setActiveRobotIndex] = useState(0);
  const activeRobot = ROBOTS_DATA[activeRobotIndex];
  
  // Dynamic sync states for wheel full focus vs docked cockpit view
  const [isSynced, setIsSynced] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Views: video (3D loop), front, side, back, wave (orthographic static)
  const [activeView, setActiveView] = useState<"video" | "front" | "side" | "back" | "wave">("video");
  
  // Interactive UI Transitions
  const [isSurgeActive, setIsSurgeActive] = useState(false);
  const [flashActive, setFlashActive] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
  // RPG stats numbers animations state
  const [animatedStats, setAnimatedStats] = useState({
    cognitiveAI: 0,
    dexterity: 0,
    agility: 0,
    power: 0
  });

  // Terminal log reader simulation
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);
  const logIndexRef = useRef(0);



  // Refs for smooth portal transitions
  const landingSectionRef = useRef<HTMLDivElement>(null);
  const cockpitSectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle Canvas Background Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      maxLife: number;
      life: number;
    }> = [];

    // Fit canvas
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initial setup
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
      
      // Get current robot theme colors for standard blend
      const themeRgb = activeRobot.rgbColor;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life++;
        p.y += p.speedY;
        p.x += p.speedX;

        // Reset if goes off top or reaches end of life
        if (p.y < 0 || p.life >= p.maxLife) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 10;
          p.life = 0;
          p.size = Math.random() * 2 + 1;
          p.speedY = -(Math.random() * 0.8 + 0.3);
          p.speedX = (Math.random() - 0.5) * 0.4;
          p.opacity = Math.random() * 0.5 + 0.1;
        }

        // Calculate opacity based on life
        const lifeRatio = p.life / p.maxLife;
        const currentOpacity = lifeRatio < 0.2 
          ? (lifeRatio * 5) * p.opacity 
          : (1 - lifeRatio) * p.opacity;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${themeRgb}, ${currentOpacity})`;
        ctx.fill();
        
        // Add subtle neon glow to larger particles
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

  // Handle flash triggers and stats refilling upon robot selection changes
  useEffect(() => {
    // Flash effect
    setFlashActive(true);
    const flashTimer = setTimeout(() => setFlashActive(false), 500);

    // RPG Stats Counters reset and fill-up animation
    setAnimatedStats({ cognitiveAI: 0, dexterity: 0, agility: 0, power: 0 });
    
    let currentStats = { cognitiveAI: 0, dexterity: 0, agility: 0, power: 0 };
    const step = 2;
    const interval = setInterval(() => {
      let done = true;
      
      (["cognitiveAI", "dexterity", "agility", "power"] as const).forEach(key => {
        const target = activeRobot.stats[key];
        if (currentStats[key] < target) {
          currentStats[key] = Math.min(target, currentStats[key] + step);
          done = false;
        }
      });

      setAnimatedStats({ ...currentStats });

      if (done) {
        clearInterval(interval);
      }
    }, 15);

    // Diagnostic console logs ticker typing effect
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

  // Entrance Surge Trigger Flow (Scroll down to Selection cockpit)
  const triggerEntranceSurge = () => {
    setIsSurgeActive(true);
    setFlashActive(true);
    
    setTimeout(() => {
      setFlashActive(false);
      cockpitSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setIsSurgeActive(false);
      }, 1000);
    }, 600);
  };

  const handleRobotClick = (index: number) => {
    if (isTransitioning) return;

    if (!isSynced) {
      // Centered state click: select and trigger smooth slide down transition
      setIsTransitioning(true);
      setActiveRobotIndex(index);
      setActiveView("video");
      
      setTimeout(() => {
        setIsSynced(true);
        setIsTransitioning(false);
      }, 700);
    } else {
      // Docked state click: rotate locally in place and swap active robot details instantly!
      setActiveRobotIndex(index);
      setActiveView("video");
    }
  };

  return (
    <div className="relative w-full bg-[#050816] text-white">
      {/* Background Canvas Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full opacity-65" />
      </div>

      {/* GPU SVG Chroma Filter for pure black chroma-key rendering of loop video */}
      <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: "absolute" }}>
        <defs>
          <filter id="remove-black-showcase" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 3.5 3.5 3.5 0 -0.5"
            />
          </filter>
        </defs>
      </svg>

      {/* Screen flash transition overlay */}
      <div 
        className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 ${
          flashActive ? "opacity-35" : "opacity-0"
        }`} 
        style={{
          background: `radial-gradient(circle, rgba(${activeRobot.rgbColor}, 0.6) 0%, transparent 80%)`
        }}
      />

      {/* Spacing alignment matches the rest of the pages */}
      


      {/* ========================================================
          THE COMMAND COCKPIT (Interactive Single-Screen Selector Wheel)
          ======================================================== */}
      <section 
        ref={cockpitSectionRef}
        className="cockpit-section relative min-h-screen lg:h-screen lg:min-h-0 w-full pt-28 pb-4 px-6 bg-[#050816] z-10 flex flex-col justify-between overflow-hidden"
      >
        <div className="max-w-[1400px] w-full mx-auto flex flex-col justify-between h-full lg:h-[calc(100vh-130px)] gap-4">
          
          {/* Compact Dashboard Header */}
          <div className="text-center mb-2 relative lg:mb-0">
            <p className="text-[9px] font-mono uppercase tracking-[5px] mb-1 text-cyan-400/80">
              CONSOLE HOST: CORE.COMMAND // 0x48FA
            </p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-1 uppercase transition-all duration-300">
              {isSynced ? "COMMAND SELECTION COCKPIT" : "CHASSIS FRAME INITIALIZATION"}
            </h2>
            <p className="text-gray-400 text-xs max-w-xl mx-auto hidden lg:block leading-tight transition-all duration-300">
              {isSynced 
                ? "Autonomous humanoid chassis linked. Specs synced, telemetry loaded, orthographic diagnostic metrics online."
                : "Select an autonomous chassis framework below to initialize the quantum link and sync cockpit systems."
              }
            </p>
            {!isSynced && (
              <p className="text-[9px] font-mono text-cyan-400 uppercase tracking-[4px] animate-pulse mt-2.5">
                [ AWAITING QUANTUM SYNC - SELECT ACTIVE ROBOT FRAME ]
              </p>
            )}
            <div className="w-12 h-[1px] bg-cyan-500/20 mx-auto mt-2 lg:hidden" />
          </div>

          {/* Selector Cockpit Dashboard Grid - Realigned horizontally for perfect top alignment */}
          <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-stretch relative z-10">
            
            {/* LEFT HUD: Technical Readouts / Specifications (3 Columns) */}
            <div className={`lg:col-span-3 flex flex-col gap-3.5 order-2 lg:order-1 relative z-25 transition-all duration-700 ease-out ${
              isSynced ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16 pointer-events-none"
            }`}>
              
              {/* Selected Model Details card */}
              <div className="p-4 rounded-xl border border-white/5 bg-slate-900/30 backdrop-blur-md relative overflow-hidden transition-all duration-500 flex flex-col justify-between">
                <div 
                  className="absolute top-0 left-0 w-[4px] h-full transition-all duration-500" 
                  style={{ backgroundColor: activeRobot.color }}
                />
                
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase">
                    ACTIVE FRAME: 0{activeRobotIndex + 1} // MODEL
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-0.5 mb-1 tracking-tight">
                    {activeRobot.name}
                  </h3>
                  <p className="text-xs font-semibold mb-2" style={{ color: activeRobot.color }}>
                    {activeRobot.role}
                  </p>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  {activeRobot.description}
                </p>
              </div>

              {/* Physical specifications */}
              <div className="p-4 rounded-xl border border-white/5 bg-slate-900/30 backdrop-blur-md grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">UNIT HEIGHT</p>
                  <p className="text-xs font-extrabold text-white mt-0.5">{activeRobot.specs.height}</p>
                </div>
                <div>
                  <p className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">BATTERY PROFILE</p>
                  <p className="text-xs font-extrabold text-white mt-0.5 truncate">{activeRobot.specs.battery.split(" ")[0]}</p>
                </div>
                <div>
                  <p className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">{activeRobot.specs.specialLabel.toUpperCase()}</p>
                  <p className="text-xs font-extrabold text-white mt-0.5 truncate">{activeRobot.specs.special}</p>
                </div>
                <div>
                  <p className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">CORE THERMALS</p>
                  <p className="text-xs font-extrabold text-green-400 mt-0.5">36.5°C</p>
                </div>
              </div>

              {/* Telemetry quick values */}
              <div className="p-4 rounded-xl border border-white/5 bg-slate-900/20 backdrop-blur-md grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">AI FRAMEWORK</p>
                  <p className="text-[11px] font-bold text-white mt-0.5">Techligence-L2</p>
                </div>
                <div>
                  <p className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">DIAGNOSTICS</p>
                  <p className="text-[11px] font-bold text-green-400 mt-0.5">ONLINE // 100%</p>
                </div>
                <div>
                  <p className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">COMMUNICATION</p>
                  <p className="text-[11px] font-bold text-white mt-0.5">5G QUANTUM LINK</p>
                </div>
                <div>
                  <p className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">SYSTEM STATE</p>
                  <p className="text-[11px] font-bold text-cyan-400 mt-0.5">READY</p>
                </div>
              </div>

            </div>

            {/* CENTER FOCUS: The active Spotlight 3D Viewer (6 Columns) */}
            <div className={`lg:col-span-6 flex flex-col items-center justify-center min-h-[360px] lg:min-h-0 relative order-1 lg:order-2 transition-all duration-700 ease-out ${
              isSynced ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
            }`}>
              
              {/* Spotlight base stand area */}
              <div className="relative w-full h-[280px] sm:h-[300px] lg:h-[320px] flex items-center justify-center mx-auto z-10 mb-2">
                {/* Circular glowing telemetry ring inside central preview */}
                <div className="absolute w-[120%] h-[80%] rounded-full border border-dashed pointer-events-none z-0 opacity-15 animate-[spin_40s_linear_infinite]" style={{ borderColor: "#00f0ff", transform: "scaleY(0.35) rotate(15deg)" }} />
                <div className="absolute w-[110%] h-[70%] rounded-full border pointer-events-none z-0 opacity-25 animate-[spin_20s_linear_infinite_reverse]" style={{ borderColor: "#00f0ff", transform: "scaleY(0.35) rotate(-15deg)" }} />

                {/* Ambient dynamic reflection floor glows */}
                <div 
                  className="absolute bottom-[6%] left-[45%] w-[58%] h-[20px] bg-black/85 rounded-full z-0 pointer-events-none scale-y-[0.35] shadow-[0_0_25px_12px_rgba(0,0,0,0.95)] animate-shadow-pulse" 
                  style={{ transform: "translate(-50%, 0)" }}
                />
                <div 
                  className="absolute bottom-[6%] left-[45%] w-[40%] h-[14px] rounded-full z-0 pointer-events-none scale-y-[0.35] animate-shadow-pulse"
                  style={{ 
                    transform: "translate(-50%, 0)",
                    backgroundColor: "rgba(0, 240, 255, 0.2)"
                  }}
                />

                {/* Universal dynamic renderer */}
                {activeView === "video" && activeRobot.id === "t2-mini" ? (
                  !videoError ? (
                    <video
                      src="/Robo.mp4"
                      loop
                      muted
                      playsInline
                      autoPlay
                      className="w-full h-full object-contain robot-float pointer-events-none relative z-10 transition-all duration-500"
                      style={{
                        filter: "url(#remove-black-showcase)",
                        clipPath: "polygon(0 0, 100% 0, 100% 85%, 75% 85%, 75% 100%, 0 100%)"
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
                      <p className="text-red-400 font-semibold mb-2">Video Offline</p>
                    </div>
                  )
                ) : (
                  <div className="w-full h-full relative z-10 flex items-center justify-center py-2">
                    <img 
                      src={activeView === "video" ? activeRobot.image : `/robots/${activeView}.png`} 
                      alt={`${activeRobot.name} visual`}
                      className="w-full h-full object-contain robot-float transition-all duration-500 relative z-10"
                      style={{
                        filter: "url(#remove-black-showcase)"
                      }}
                    />
                  </div>
                )}

                {/* Viewer Mode Selector Toggle Deck (Positioned Absolutely inside Spotlight container to lock it vertically) */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1.5 p-1 rounded-xl border border-white/5 bg-black/60 backdrop-blur-md z-30 select-none scale-90 sm:scale-95">
                  {[
                    { view: "video", label: "3D MODEL", index: "01" },
                    { view: "front", label: "FRONT VIEW", index: "02" },
                    { view: "side", label: "SIDE VIEW", index: "03" },
                    { view: "back", label: "BACK VIEW", index: "04" }
                  ].map((item) => {
                    const isActive = activeView === item.view;
                    return (
                      <button
                        key={item.view}
                        onClick={() => setActiveView(item.view as any)}
                        className={`px-3 py-2 rounded-lg text-[9px] font-mono font-bold tracking-widest transition-all duration-300 cursor-pointer flex flex-col items-center select-none ${
                          isActive 
                            ? "text-black shadow-md scale-105" 
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                        style={isActive ? {
                          boxShadow: "0 0 10px 1px rgba(0, 240, 255, 0.45)",
                          backgroundColor: "#00f0ff",
                          color: "#050816"
                        } : {}}
                      >
                        <span className="text-[7px] opacity-60 mb-0.5">{item.index}</span>
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RIGHT HUD: RPG Diagnostic Metrics & Terminal Logs Ticker (3 Columns) */}
            <div className={`lg:col-span-3 flex flex-col gap-3.5 order-3 relative z-25 transition-all duration-700 ease-out ${
              isSynced ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16 pointer-events-none"
            }`}>
              
              {/* Telemetry specs dashboard (RPG Progress Cards) */}
              <div className="p-4 rounded-xl border border-white/5 bg-slate-900/30 backdrop-blur-md relative overflow-hidden">
                <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase block mb-4">
                  HARDWARE SYSTEM RATINGS
                </span>
                
                <div className="flex flex-col gap-3.5">
                  {/* Rating 1: Cognitive AI */}
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold mb-1">
                      <span className="text-gray-300">Cognitive Decision AI</span>
                      <span className="font-mono text-cyan-400">{animatedStats.cognitiveAI}%</span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${animatedStats.cognitiveAI}%`,
                          backgroundColor: "#00f0ff",
                          boxShadow: "0 0 8px #00f0ff"
                        }}
                      />
                    </div>
                  </div>

                  {/* Rating 2: Physical Dexterity */}
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold mb-1">
                      <span className="text-gray-300">Kinetic Physical Dexterity</span>
                      <span className="font-mono text-cyan-400">{animatedStats.dexterity}%</span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${animatedStats.dexterity}%`,
                          backgroundColor: "#00f0ff",
                          boxShadow: "0 0 8px #00f0ff"
                        }}
                      />
                    </div>
                  </div>

                  {/* Rating 3: Spatial Agility */}
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold mb-1">
                      <span className="text-gray-300">Spatial LiDAR Agility</span>
                      <span className="font-mono text-cyan-400">{animatedStats.agility}%</span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${animatedStats.agility}%`,
                          backgroundColor: "#00f0ff",
                          boxShadow: "0 0 8px #00f0ff"
                        }}
                      />
                    </div>
                  </div>

                  {/* Rating 4: Battery & Power Core */}
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold mb-1">
                      <span className="text-gray-300">Power Core Endurance</span>
                      <span className="font-mono text-cyan-400">{animatedStats.power}%</span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${animatedStats.power}%`,
                          backgroundColor: "#00f0ff",
                          boxShadow: "0 0 8px #00f0ff"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagnostic Terminal Logs console screen */}
              <div className="p-4 rounded-xl border border-white/5 bg-black/60 font-mono text-[9px] leading-relaxed text-gray-400 relative overflow-hidden h-[120px] flex flex-col justify-end">
                <div 
                  className="absolute top-0 left-0 w-full h-[2px]"
                  style={{ backgroundColor: "#00f0ff" }}
                />
                
                <div className="flex flex-col gap-0.5 w-full overflow-hidden">
                  <p className="text-cyan-400 font-bold mb-0.5">{">> SYSTEM INTERCONNECT DIAGNOSTICS"}</p>
                  
                  {displayedLogs.map((log, i) => (
                    <p key={i} className="truncate transition-opacity duration-300">
                      {">> "}{log}
                    </p>
                  ))}
                  
                  {displayedLogs.length < activeRobot.logs.length && (
                    <p className="animate-pulse text-cyan-400/50">{">> DEPLOYING CHASSIS MODULES..."}</p>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* 2D SCREEN-FACING ROTARY SELECTION DISC */}
          <div className="relative w-full h-[145px] lg:h-[130px] mt-2 lg:mt-0 flex items-center justify-center select-none overflow-visible z-20 transition-all duration-700">
            


            {/* The circular, spinning 2D glassmorphic selector disc */}
            <div 
              className="absolute left-1/2 rounded-full border-[3px] border-cyan-500/35 bg-gradient-to-b from-[#0b122f] to-[#040716] transition-all duration-[800ms] ease-out select-none shadow-[0_0_55px_rgba(6,182,212,0.25),_inset_0_0_35px_rgba(6,182,212,0.2)]"
              style={{ 
                width: "480px",
                height: "480px",
                bottom: isSynced ? "-410px" : "165px",
                transform: `translateX(-50%) rotate(${activeRobotIndex * -60}deg) scale(${isSynced ? 1.0 : 1.15})`,
              }}
            >
              {/* Concentric high-tech glowing inner rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] h-[92%] rounded-full border border-cyan-500/10 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-dashed border-cyan-500/15 pointer-events-none animate-[spin_80s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border border-cyan-500/10 pointer-events-none animate-[spin_50s_linear_infinite_reverse]" />
              
              {/* Central glowing hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] rounded-full border border-cyan-500/20 bg-[#060919] shadow-[inset_0_0_20px_rgba(6,182,212,0.15)] pointer-events-none flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-cyan-500/5 border border-cyan-500/30 animate-pulse" />
              </div>

              {/* Spoke ticks */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div 
                  key={deg}
                  className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent origin-center pointer-events-none"
                  style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}
                />
              ))}

              {/* Render the 6 robot selection cards inside the rotating disc */}
              {ROBOTS_DATA.map((robot, index) => {
                const isActive = index === activeRobotIndex;
                const angle = index * 60; // evenly space 6 robots around the full circle
                const rad = (angle * Math.PI) / 180;
                const radius = 185; // radial distance from disc center
                const x = Math.sin(rad) * radius;
                const y = -Math.cos(rad) * radius; // standard top-center coordinate spacing

                return (
                  <button
                    key={robot.id}
                    onClick={() => handleRobotClick(index)}
                    className={`absolute rounded-xl border transition-all duration-500 cursor-pointer w-24 h-[110px] sm:w-26 sm:h-[120px] flex flex-col items-center justify-between p-2.5 backdrop-blur-md select-none text-left group`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                      borderColor: isActive ? "#00f0ff" : "rgba(255, 255, 255, 0.08)",
                      boxShadow: isActive ? "0 0 20px rgba(0, 240, 255, 0.35)" : "none",
                      backgroundColor: isActive ? "rgba(11, 16, 38, 0.95)" : "rgba(5, 8, 22, 0.65)"
                    }}
                  >
                    {/* Monospace Indicator Tag at the top */}
                    <div className="w-full flex justify-between items-center text-[7px] font-mono text-gray-500 font-bold mb-1">
                      <span>[ 0{index + 1} ]</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cyan-400" style={{ color: "#00f0ff" }}>
                        {isActive ? "ACTIVE" : "SELECT"}
                      </span>
                    </div>

                    {/* Circular asset thumbnail render with dynamic glow border */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden relative bg-black/40 flex items-center justify-center border border-white/10 mb-1 transition-transform duration-500 group-hover:scale-105">
                      <img 
                        src={robot.image} 
                        alt={robot.name}
                        className="w-[85%] h-[85%] object-contain mt-0.5 relative z-10"
                        style={{ 
                          filter: "url(#remove-black-showcase)" 
                        }}
                      />
                      {/* Active animated pulsing theme border highlights */}
                      <div 
                        className={`absolute inset-0 rounded-full border-2 transition-opacity duration-500 ${
                          isActive ? "opacity-100 animate-pulse" : "opacity-0"
                        }`}
                        style={{ borderColor: "#00f0ff" }}
                      />
                    </div>

                    {/* Monospace Label text */}
                    <div className="text-center w-full mt-auto">
                      <span 
                        className="text-[9px] font-mono font-black tracking-wider uppercase transition-colors text-center truncate block w-full"
                        style={{ color: isActive ? "#00f0ff" : "rgb(156, 163, 175)" }}
                      >
                        {robot.name}
                      </span>
                      <span className="text-[7px] font-mono text-gray-500 block truncate leading-none mt-0.5">
                        {robot.role.split(" & ")[0].split(" // ")[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Sweep light floor reflect overlay */}
            <div 
              className="absolute left-1/2 bottom-0 w-[55vw] h-10 rounded-full blur-3xl opacity-20 pointer-events-none z-0"
              style={{ 
                transform: "translateX(-50%)",
                backgroundColor: "#00f0ff"
              }}
            />

          </div>

        </div>
      </section>
      {/* ========================================================
          PHASE 3: TRUST & LEAD CONVERSION BLOCK
          ======================================================== */}
      <section className="relative py-28 px-6 border-t border-white/5 bg-[#050816] z-10 overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1400px] w-full mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[8px] mb-3 text-cyan-400">
              TRUSTED WORLDWIDE
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              DEPLOYED ACROSS LEADING INDUSTRIES
            </h2>
            <div className="w-16 h-[2px] bg-cyan-400 mx-auto mt-6" />
          </div>

          {/* Corporate partners grid (Glassmorphism minimalist branding) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {[
              { title: "Smart Retail", label: "T2 Mini", desc: "Automating checkout hubs and welcoming VIP premium clients." },
              { title: "Healthcare Facilities", label: "T2 Max", desc: "Delivering autonomous patient care supplies cleanly." },
              { title: "Enterprise Offices", label: "Andy R1", desc: "Interactive gestural support and company workspace map help." },
              { title: "Logistics Hubs", label: "Nova M1", desc: "Mapping dynamic warehouses with 150m precise lidar ranges." }
            ].map((industry, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md transition-all duration-300 text-left group"
              >
                <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">0{index + 1} // SECTOR</span>
                <h4 className="text-lg font-bold text-white tracking-wide mb-2 group-hover:text-cyan-400 transition-colors">
                  {industry.title}
                </h4>
                <div className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-widest">{industry.label} ACTIVE</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial slider / block (Cyber-glass treatments) */}
          <div className="grid md:grid-cols-2 gap-8 mb-28">
            {[
              {
                quote: "The integration of Techligence T2 Mini humanoid units transformed our flagship lobby. Guests are wowed by the real-time AI responses, and the dynamic visual presence anchors our futuristic enterprise branding perfectly.",
                author: "Sarah Jenkins",
                role: "VP of Operations, RetailCorp Global"
              },
              {
                quote: "Nova M1 fleet navigation and LiDAR precision solved our warehouse logistics mapping deadlock in days. Safe, autonomous navigation that handles both human traffic and machinery mapping flawlessly.",
                author: "Marcus Chen",
                role: "Director of Automation, AlphaCare Labs"
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md relative overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Quote accent */}
                <div className="absolute top-4 right-6 text-7xl font-serif text-white/5 select-none font-bold">“</div>
                
                <p className="text-gray-300 italic text-base leading-relaxed mb-6 z-10 relative">
                  "{item.quote}"
                </p>
                
                <div className="flex items-center gap-4 border-t border-white/5 pt-6 z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-black font-extrabold text-sm uppercase">
                    {item.author[0]}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">{item.author}</h5>
                    <p className="text-[10px] text-gray-500 font-mono uppercase">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Book Demo Glowing Lead Conversion Card */}
          <div className="relative p-8 md:p-14 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#080d26] to-[#04081b] overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="text-left max-w-xl">
              <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-widest uppercase block mb-2">
                AUTHENTICATE BOOKING LINK //
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                READY TO ELEVATE YOUR SERVICE ECOSYSTEM?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connect with our product specialist engineers. Book a private fleet demo and request a customized hardware and cognitive AI diagnostics appraisal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto relative z-10">
              <a 
                href="/contact" 
                className="robot-button p-[2px] w-full sm:w-auto transition-transform duration-300 hover:scale-105 active:scale-95 text-center flex items-center justify-center"
                style={{
                  boxShadow: "0 0 25px rgba(6, 182, 212, 0.2)"
                }}
              >
                <div className="relative z-10 px-10 py-4.5 rounded-full bg-[#050816] text-white font-bold tracking-widest text-xs uppercase w-full">
                  SCHEDULE PRIVATE DEMO
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Inline animations styles for the local scan glows */}
      <style>{`
        @keyframes scanGlow {
          0% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 0.85;
          }
          90% {
            opacity: 0.85;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        /* Responsive zoom height media query to prevent vertical overlapping and ensure scrolling on compact screens */
        @media (max-height: 740px) and (min-width: 1024px) {
          .cockpit-section {
            height: auto !important;
            min-height: 100vh !important;
            overflow: visible !important;
            padding-top: 100px !important;
            padding-bottom: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
