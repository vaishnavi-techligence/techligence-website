"use client";

import React from "react";

export default function RobotsOverview() {
  return (
    <section className="relative py-24 bg-[#050816] border-t border-white/5 overflow-hidden text-white font-sans">
      {/* Dynamic background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[10px] font-mono uppercase tracking-[6px] text-cyan-400 mb-4">
            Techligence Robotics Overview
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 tracking-tight uppercase mb-6 leading-tight">
            Meet Your New Receptionist
          </h2>
          <div className="w-24 h-[2px] bg-cyan-400 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            A Robotic Assistant for the Future of Hospitality.
            <br/><br/>
            <span className="text-sm md:text-base text-gray-400">
              Techligence Robotics develops AI-powered service and hospitality robots designed for customer interaction, reception management, navigation, guidance, and business automation.
            </span>
          </p>
        </div>

        {/* Robot Lineup Section */}
        <div>
          <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">🚀 Robot Lineup</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-cyan-500/5 transition-colors">
              <h4 className="text-cyan-400 font-mono text-sm tracking-wider mb-4 uppercase">Hospitality & Service</h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-white text-lg">T-2 Mini</strong>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">Height: 122 cm (4.0 ft)</span>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-white text-lg">JOY A-01</strong>
                    <span className="px-1.5 py-0.5 text-[7px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded shadow-[0_0_6px_rgba(0,240,255,0.15)] animate-pulse uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">Height: 135 cm (4.4 ft)</span>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-white text-lg">TELLA S</strong>
                    <span className="px-1.5 py-0.5 text-[7px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded shadow-[0_0_6px_rgba(0,240,255,0.15)] animate-pulse uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">Height: 130 cm (4.0 ft)</span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-cyan-500/5 transition-colors">
              <h4 className="text-cyan-400 font-mono text-sm tracking-wider mb-4 uppercase">Advanced Service</h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-white text-lg">ANDY R-1</strong>
                    <span className="px-1.5 py-0.5 text-[7px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded shadow-[0_0_6px_rgba(0,240,255,0.15)] animate-pulse uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">Height: 130 cm (4.2 ft)</span>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-white text-lg">T-2 Max</strong>
                    <span className="px-1.5 py-0.5 text-[7px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded shadow-[0_0_6px_rgba(0,240,255,0.15)] animate-pulse uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">Height: 138 cm (4.5 ft)</span>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-white text-lg">NOVA M1</strong>
                    <span className="px-1.5 py-0.5 text-[7px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded shadow-[0_0_6px_rgba(0,240,255,0.15)] animate-pulse uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">Mentioned in lineup</span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-cyan-500/5 transition-colors">
              <h4 className="text-cyan-400 font-mono text-sm tracking-wider mb-4 uppercase">Woodgen Series</h4>
              <p className="text-sm text-gray-400 mb-4">Hand-crafted wooden robot variants.</p>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-white text-lg">Joy A-01 (Wood)</strong>
                    <span className="px-1.5 py-0.5 text-[7px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded shadow-[0_0_6px_rgba(0,240,255,0.15)] animate-pulse uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">Height: 135 cm (4.4 ft)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Two Column Section: Core AI Platform & Anatomy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Core AI Platform */}
          <div>
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">🧠 Core AI Platform (A-01)</h3>
            </div>
            <p className="text-gray-400 mb-6 text-sm">Techligence's flagship AI platform powers its robot ecosystem through:</p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                  <span className="text-cyan-400 font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Specialized AI</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Intelligent human-robot interactions. LLM-powered conversations with a broad knowledge base.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                  <span className="text-cyan-400 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Seamless Integration</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Works smoothly with existing business infrastructure and systems.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                  <span className="text-cyan-400 font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Global Navigation</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Advanced mapping, autonomous navigation, and intelligent guidance capabilities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Anatomy */}
          <div>
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">🔧 Anatomy of A-01</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-cyan-300 font-bold mb-2">Expressive Digital Face</h4>
                <p className="text-xs text-gray-400">Human-centric interaction engine for emotional and visual communication.</p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-cyan-300 font-bold mb-2">2-6 DoF Articulated Arms</h4>
                <p className="text-xs text-gray-400">Enhanced gestures and animations for better user engagement.</p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-cyan-300 font-bold mb-2">SLAM Chassis</h4>
                <p className="text-xs text-gray-400">Sensor-rich mobility platform for spatial awareness and navigation.</p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-cyan-300 font-bold mb-2">High Friction Wheels</h4>
                <p className="text-xs text-gray-400">Precise movement control for stable autonomous operation.</p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 sm:col-span-2">
                <h4 className="text-cyan-300 font-bold mb-2">Rigid Fiber / Wooden Shell</h4>
                <p className="text-xs text-gray-400">Durable construction ensuring a long operational lifespan.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Enterprise Fleet Management */}
        <div>
          <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">🌐 Enterprise Fleet Management & IoT</h3>
          </div>
          <p className="text-gray-400 mb-8 max-w-2xl text-sm">The platform supports large-scale robot deployments with an interconnected ecosystem.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-cyan-500/20 bg-cyan-950/20 rounded-2xl">
              <h4 className="text-white font-bold text-lg mb-2">Mass Dispatch</h4>
              <p className="text-sm text-gray-400">Manage up to <strong className="text-cyan-400">100 robots simultaneously</strong> in one environment.</p>
            </div>
            <div className="p-6 border border-cyan-500/20 bg-cyan-950/20 rounded-2xl">
              <h4 className="text-white font-bold text-lg mb-2">Complex Routing</h4>
              <p className="text-sm text-gray-400">Handles intersections, multiple pathways, roundabouts, and dynamic environments.</p>
            </div>
            <div className="p-6 border border-cyan-500/20 bg-cyan-950/20 rounded-2xl">
              <h4 className="text-white font-bold text-lg mb-2">Ad Hoc Networking</h4>
              <p className="text-sm text-gray-400">Robots communicate directly with each other to reduce network bottlenecks.</p>
            </div>
            <div className="p-6 border border-cyan-500/20 bg-cyan-950/20 rounded-2xl">
              <h4 className="text-white font-bold text-lg mb-2">IoT Cloud</h4>
              <p className="text-sm text-gray-400">Real-time monitoring, robot health tracking, remote updates, and business analytics.</p>
            </div>
          </div>
        </div>

        {/* Smart Capabilities */}
        <div>
          <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">📊 Smart Robot Capabilities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500" />
              <h4 className="text-white font-bold mb-2 text-lg">Predictive Models</h4>
              <p className="text-sm text-gray-400">LLM-based AI responses with an intelligent conversation system.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500" />
              <h4 className="text-white font-bold mb-2 text-lg">Automated Decision Making</h4>
              <p className="text-sm text-gray-400">Autonomous task execution with reduced human intervention.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500" />
              <h4 className="text-white font-bold mb-2 text-lg">Data-Driven Insights</h4>
              <p className="text-sm text-gray-400">Business analytics, operational intelligence, and corporate reporting support.</p>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div>
          <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">🏨 Key Business Applications</h3>
          </div>
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-purple-500" />
              <h4 className="text-xl font-bold text-white mb-3 tracking-wider uppercase">Malls</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Techligence robots transform your mall into an interactive brand experience. Strategically positioned at entrances, atriums, and high-footfall zones, our robots display dynamic advertisements, promote ongoing offers, and engage shoppers in real time in their preferred language. From guiding visitors to stores and restrooms, to broadcasting flash sales and brand activations, T-2 Mini keeps your mall experience smart, memorable, and monetised.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-purple-500" />
              <h4 className="text-xl font-bold text-white mb-3 tracking-wider uppercase">Corporate Parks</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                T-2 Mini replaces the revolving door of reception and security staff with a tireless, intelligent robot that works 24×7 greeting visitors, verifying credentials, issuing digital passes, and notifying hosts all without a single HR headache. Deployed across lobby entrances, tower receptions, and security checkpoints, T-2 Mini ensures every visitor gets a consistent, professional, and multilingual experience while your campus stays secure and audit-ready.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-purple-500" />
              <h4 className="text-xl font-bold text-white mb-3 tracking-wider uppercase">Corporate Spaces</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                In a shared corporate tower or co-working campus, every tenant deserves a premium front-desk experience without the cost of dedicated staff per floor. T-2 Mini serves all tenants simultaneously, with configurable branding, language preferences, and information per company. From guiding guests to the right floor and meeting room, to managing access logs and real-time security alerts, our robots integrate into your building's ecosystem making every square foot smarter.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-purple-500" />
              <h4 className="text-xl font-bold text-white mb-3 tracking-wider uppercase">Healthcare & Hospital Solutions</h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Enhance patient and visitor experiences with intelligent robotic assistance. Techligence robots help healthcare facilities provide navigation support, answer common questions, assist visitors, and streamline reception operations, allowing staff to focus more on patient care.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                <div>
                  <h5 className="text-cyan-400 font-bold mb-3 uppercase text-xs tracking-widest">Key Benefits</h5>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><span className="text-cyan-500/50">▹</span> Improved patient experience</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-500/50">▹</span> Faster visitor assistance</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-500/50">▹</span> Reduced reception workload</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-500/50">▹</span> Easy navigation and wayfinding</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-500/50">▹</span> Multilingual communication</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-500/50">▹</span> Modern healthcare experience</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-purple-400 font-bold mb-3 uppercase text-xs tracking-widest">Applications</h5>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><span className="text-purple-500/50">▹</span> Reception Assistance</li>
                    <li className="flex items-center gap-2"><span className="text-purple-500/50">▹</span> Visitor Navigation</li>
                    <li className="flex items-center gap-2"><span className="text-purple-500/50">▹</span> Information Helpdesk</li>
                    <li className="flex items-center gap-2"><span className="text-purple-500/50">▹</span> Visitor Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selling Points & Pitch */}
        <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900/40 border border-cyan-500/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
           <div className="absolute bottom-4 left-4 w-12 h-[1px] bg-cyan-500/50" />
           
          <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest mb-8">⭐ Main Selling Points</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "AI-powered conversations", "Multilingual communication", "Autonomous navigation", 
              "Visitor management", "Security monitoring", "Digital advertising", 
              "Self-charging functionality", "Fleet management", "Cloud-connected operations",
              "Made for Indian businesses with global scalability"
            ].map(point => (
              <span key={point} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors cursor-default">
                {point}
              </span>
            ))}
          </div>

          <div className="w-16 h-[1px] bg-white/20 mx-auto mb-10" />

          <p className="text-sm md:text-lg text-cyan-50 font-mono leading-relaxed max-w-4xl mx-auto italic border-l-2 border-cyan-400 pl-6 text-left">
            "Techligence Robotics builds AI-powered autonomous service robots that combine reception assistance, navigation, customer engagement, and enterprise fleet management into a single smart robotics ecosystem."
          </p>
        </div>

      </div>
    </section>
  );
}
