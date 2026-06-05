"use client";

import RobotVideo from "./RobotVideo";

export default function Hero() {

  return (
   <section className="relative min-h-screen bg-[#050816] text-white flex items-center overflow-hidden pt-16 pb-8">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
    <div className="absolute inset-0 overflow-hidden">

<div className="absolute right-[-250px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />

</div>
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
<p className="text-cyan-400 uppercase tracking-[8px] mb-4 text-sm">
  TECHLIGENCE ROBOTICS
</p>

<h1 className="text-[60px] sm:text-[90px] lg:text-[150px] font-black leading-none tracking-[-4px] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-cyan-500">
  T2 MINI
</h1>

<h2 className="mt-4 text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
  The Future Of Customer Experience
</h2>
<div className="w-24 h-[2px] bg-cyan-400 mt-5 mb-6"></div>
<p className="mt-6 text-lg text-gray-400 max-w-md">
  AI-powered humanoid robot for reception,
  customer engagement and intelligent assistance.
</p>

<div className="mt-10">
  <a href="/robots?robot=t2-mini" className="robot-button p-[2px] inline-block">

    <div className="relative z-10 px-10 py-4 rounded-full bg-[#050816] text-white font-bold tracking-wide">
      EXPLORE T2 MINI
    </div>

  </a>

  <div className="flex gap-2 mt-6">
    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
  </div>
  
  <div className="flex flex-wrap gap-6 sm:gap-10 mt-12 justify-start items-center">

  <div className="flex-shrink-0">
    <h3 className="text-cyan-400 text-3xl sm:text-4xl font-bold">
      24/7
    </h3>
    <p className="text-gray-400 text-xs sm:text-sm">
      Operation
    </p>
  </div>

  <div className="hidden sm:block w-px h-10 bg-white/10"></div>

  <div className="flex-shrink-0">
    <h3 className="text-cyan-400 text-3xl sm:text-4xl font-bold">
      Voice AI
    </h3>
    <p className="text-gray-400 text-xs sm:text-sm">
      Powered
    </p>
  </div>

  <div className="hidden sm:block w-px h-10 bg-white/10"></div>

  <div className="flex-shrink-0">
    <h3 className="text-cyan-400 text-3xl sm:text-4xl font-bold">
      Face 
    </h3>
    <p className="text-gray-400 text-xs sm:text-sm">
      Recognition
    </p>
  </div>

</div>
</div>
        </div>

        {/* ROBOT */}
<div className="relative flex justify-center items-center lg:-ml-10">
<div className="absolute right-[-80px] top-1/2 -translate-y-1/2 text-[450px] lg:text-[650px] font-black text-white/[0.05] leading-none select-none pointer-events-none z-0">
  T2
</div>

  <div className="absolute text-[250px] font-black text-white/[0.03] select-none pointer-events-none leading-none">
    AI
  </div>

{/* Glow */}
<div className="absolute w-[1000px] h-[1000px] bg-cyan-500 rounded-full blur-[350px] opacity-20"></div>

{/* Stars */}
<div className="absolute top-[20%] left-[10%] w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>

<div className="absolute top-[35%] right-[12%] w-3 h-3 bg-cyan-400 rounded-full blur-[2px] animate-pulse"></div>

<div className="absolute bottom-[25%] left-[15%] w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>

<div className="absolute bottom-[20%] right-[20%] w-3 h-3 bg-cyan-400 rounded-full blur-[2px] animate-pulse"></div>

<div className="absolute top-[55%] left-[35%] w-4 h-4 bg-cyan-400 rounded-full blur-[8px] opacity-70"></div>

<div className="absolute bottom-[40%] right-[35%] w-4 h-4 bg-cyan-400 rounded-full blur-[8px] opacity-70"></div>

<div className="absolute top-[15%] right-[30%] w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>

<div className="absolute top-[25%] left-[25%] w-1 h-1 bg-cyan-400 rounded-full"></div>

<div className="absolute top-[45%] right-[5%] w-2 h-2 bg-cyan-400 rounded-full blur-[1px]"></div>

<div className="absolute bottom-[15%] right-[10%] w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>

<div className="absolute bottom-[30%] left-[5%] w-1 h-1 bg-cyan-400 rounded-full"></div>

<div className="absolute bottom-[45%] right-[25%] w-2 h-2 bg-cyan-400 rounded-full blur-[1px]"></div>
{/* Technical HUD/Radar System in the background */}
<div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] flex items-center justify-center pointer-events-none select-none z-0 opacity-40">
  {/* Outer rotating dashed ring */}
  <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-cyan-500/30 animate-spin-slow"></div>
  {/* Middle solid ring */}
  <div className="absolute w-[480px] h-[480px] rounded-full border border-cyan-400/20"></div>
  {/* Inner reverse rotating technical ring */}
  <div className="absolute w-[360px] h-[360px] rounded-full border border-double border-cyan-300/40 animate-spin-reverse-slow"></div>
  {/* Technical grid lines */}
  <div className="absolute w-[650px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
  <div className="absolute h-[650px] w-[1px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
  {/* Tiny glowing coordinate indicators */}
  <div className="absolute top-[22%] right-[22%] text-[10px] font-mono text-cyan-400/50 tracking-widest">SYS.ACTIVE // 99.8%</div>
  <div className="absolute bottom-[22%] left-[22%] text-[10px] font-mono text-cyan-400/50 tracking-widest">GRID.COORD // T2-MINI</div>
</div>

{/* Inline custom keyframe animations */}
<style>{`
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes spinReverseSlow {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
  .animate-spin-slow {
    animation: spinSlow 35s linear infinite;
  }
  .animate-spin-reverse-slow {
    animation: spinReverseSlow 25s linear infinite;
  }
`}</style>

{/* Robot */}
<RobotVideo />

</div>

</div>
</section>
);
}