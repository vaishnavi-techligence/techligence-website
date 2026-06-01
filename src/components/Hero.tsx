"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const robots = [
    "/robots/front.png",
    "/robots/wave.png",
    "/robots/side.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % robots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
   <section className="relative min-h-screen bg-[#050816] text-white flex items-center overflow-hidden">
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

<h1 className="
text-[90px]
lg:text-[150px]
font-black
leading-none
tracking-[-4px]
text-transparent
bg-clip-text
bg-gradient-to-r
from-white
via-cyan-300
to-cyan-500
">
T2 MINI
</h1>

<h2 className="
  mt-4
  text-3xl
  lg:text-5xl
  font-bold
  text-white
">
  The Future Of Customer Experience
</h2>
<div className="w-24 h-[2px] bg-cyan-400 mt-5 mb-6"></div>
<p className="
  mt-6
  text-lg
  text-gray-400
  max-w-md
">
  AI-powered humanoid robot for reception,
  customer engagement and intelligent assistance.
</p>

<div className="mt-10">
  <button className="robot-button p-[2px]">

    <div className="
      relative z-10
      px-10 py-4
      rounded-full
      bg-[#050816]
      text-white
      font-bold
      tracking-wide
    ">
      EXPLORE T2 MINI
    </div>

  </button>

  <div className="flex gap-2 mt-6">
    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
  </div>
  
  <div className="flex gap-10 mt-12">

  <div>
    <h3 className="text-cyan-400 text-4xl font-bold">
      24/7
    </h3>
    <p className="text-gray-400 text-sm">
      Operation
    </p>
  </div>

  <div className="w-px bg-white/10"></div>

  <div>
    <h3 className="text-cyan-400 text-4xl font-bold">
      Voice AI
    </h3>
    <p className="text-gray-400 text-sm">
      Powered
    </p>
  </div>

  <div className="w-px bg-white/10"></div>

  <div>
    <h3 className="text-cyan-400 text-4xl font-bold">
      Face 
    </h3>
    <p className="text-gray-400 text-sm">
      Recognition
    </p>
  </div>

</div>
</div>
        </div>

        {/* ROBOT */}
<div className="relative flex justify-center items-center lg:-ml-10">
<div
  className="
    absolute
    right-[-80px]
    top-1/2
    -translate-y-1/2
    text-[450px]
    lg:text-[650px]
    font-black
    text-white/[0.05]
    leading-none
    select-none
    pointer-events-none
    z-0
  "
>
  T2
</div>

  <div
    className="
      absolute
      text-[250px]
      font-black
      text-white/[0.03]
      select-none
      pointer-events-none
      leading-none
    "
  >
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
{/* Robot */}
<Image
            src={robots[currentImage]}
            alt="T2 Mini Robot"
            width={1400}
            height={1400}
            priority
            className="
  relative
  z-10
  object-contain
  robot-float
  transition-all
  duration-1000
  hover:scale-105
"
          />

        </div>

      </div>
    </section>
  );
}