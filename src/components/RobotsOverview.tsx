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
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
              <path d="m12 15-3-3" />
              <path d="m15 9-3-3" />
              <path d="M11.5 11.5a2.5 2.5 0 1 0-3.5-3.5" />
              <path d="M2 22l1.5-1.5" />
              <path d="M9 12c0-2.5 1-5.5 4-8s8.5-4 8.5-4-1.5 5.5-4 8.5-5.5 4-8 4z" />
            </svg>
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Robot Lineup</h3>
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
                    <span className="coming-soon-badge px-1.5 py-0.5 text-[7px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded shadow-[0_0_6px_rgba(0,240,255,0.15)] animate-pulse uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">Height: 135 cm (4.4 ft)</span>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-white text-lg">TELLA S</strong>
                    <span className="coming-soon-badge px-1.5 py-0.5 text-[7px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded shadow-[0_0_6px_rgba(0,240,255,0.15)] animate-pulse uppercase">
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
                    <span className="coming-soon-badge px-1.5 py-0.5 text-[7px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded shadow-[0_0_6px_rgba(0,240,255,0.15)] animate-pulse uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">Height: 130 cm (4.2 ft)</span>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-white text-lg">T-2 Max</strong>
                    <span className="coming-soon-badge px-1.5 py-0.5 text-[7px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded shadow-[0_0_6px_rgba(0,240,255,0.15)] animate-pulse uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">Height: 138 cm (4.5 ft)</span>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-white text-lg">NOVA M1</strong>
                    <span className="coming-soon-badge px-1.5 py-0.5 text-[7px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded shadow-[0_0_6px_rgba(0,240,255,0.15)] animate-pulse uppercase">
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
                    <span className="coming-soon-badge px-1.5 py-0.5 text-[7px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded shadow-[0_0_6px_rgba(0,240,255,0.15)] animate-pulse uppercase">
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
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
              </svg>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Core AI Platform (A-01)</h3>
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
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Anatomy of A-01</h3>
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
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Enterprise Fleet Management & IoT</h3>
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
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M18 17V9" />
              <path d="M13 17V5" />
              <path d="M8 17v-3" />
            </svg>
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Smart Robot Capabilities</h3>
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
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2" />
              <path d="M18 18h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-2" />
              <path d="M3 22h18" />
              <path d="M9 6h6" />
              <path d="M9 10h6" />
              <path d="M9 14h6" />
              <path d="M9 18h6" />
            </svg>
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Key Business Applications</h3>
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
           
          <div className="flex items-center justify-center gap-3 mb-8">
            <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest">Main Selling Points</h3>
          </div>
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
