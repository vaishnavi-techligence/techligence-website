"use client";

import React from "react";

const ASSOCIATIONS = [
  {
    name: "VJTI-TBI",
    category: "Incubation & Ecosystem Partner",
    desc: "Technology Business Incubator of Veermata Jijabai Technological Institute, fostering deep-tech hardware startups.",
    logo: (
      <img src="/logos/vjti-tbi.png" alt="VJTI-TBI" className="max-h-[90px] max-w-[200px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "VJTI Institute",
    category: "Academic & Research Collaboration",
    desc: "Collaborative research and development in robotics kinematics, embedded systems, and autonomous navigation.",
    logo: (<img src="/logos/vjti.jpg" alt="VJTI Institute"  className="h-[110px] w-auto object-contain bg-white p-2 rounded-lg" style={{ marginTop: "12px" }} />
    ),
  },
  {
    name: "Chitkara CIIF",
    category: "Innovation & Incubation Partner",
    desc: "Chitkara University Center for Innovation & Incubation Fellowship supporting next-generation tech enterprises.",
    logo: (
      <img src="/logos/ciif.png" alt="Chitkara CIIF" className="max-h-[90px] max-w-[200px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Chitkara University",
    category: "Academic & Development Partner",
    desc: "Academic synergy for internship programs, robotic talent development, and technical labs.",
    logo: (
      <img src="/logos/chitkara.png" alt="Chitkara University" className="max-h-[90px] max-w-[200px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "AIC Pinnacle",
    category: "Incubation & Startup Support",
    desc: "Atal Incubation Centre supported by Pinnacle, enabling scaling and commercialization of AI systems.",
    logo: (
      <img src="/logos/aic-pinnacle.png" alt="AIC Pinnacle" className="max-h-[90px] max-w-[200px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Pinnacle Industries",
    category: "Industrial & Manufacturing Partner",
    desc: "Strategic industrial alignment for production scaling, design optimization, and manufacturing guidance.",
    logo: (
      <img src="/logos/pinnacle.svg" alt="Pinnacle Industries" className="max-h-[90px] max-w-[200px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Aumsat Technologies",
    category: "Technology Associate",
    desc: "Synergistic tech exploration combining satellite data insights with localized mobile robotic systems.",
    logo: (
      <img src="/logos/aumsat-new.png" alt="Aumsat Technologies" className="max-h-[100px] max-w-[200px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Hydrocawach Technologies",
    category: "Cleantech Associate",
    desc: "Joint engineering explorations to design and deploy specialized robots for environmental utilities.",
    logo: (
      <img src="/logos/hydrocawach-new.png" alt="Hydrocawach Technologies" className="max-h-[120px] max-w-[200px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Lokmanya Tilak College, Mumbai",
    category: "Academic & Research Partner",
    desc: "Undergraduate research initiatives, technical workshops, and direct campus recruitment channels.",
    logo: (
      <img src="/logos/ltce.png" alt="Lokmanya Tilak College" className="max-h-[90px] max-w-[260px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Silicon India",
    category: "Media & Features Recognition",
    desc: "National media highlight and editorial coverage of our rapid growth and unique service robot lineup.",
    logo: (
      <img src="/logos/silicon-new.png" alt="Silicon India" className="max-h-[110px] max-w-[200px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Jumpstart Magazine",
    category: "Startup & Media Coverage",
    desc: "International startup coverage, showcasing Techligence's vision for future humanoid interfaces.",
    logo: (
      <img src="/logos/jumpstart-new.png" alt="Jumpstart Magazine" className="max-h-[110px] max-w-[200px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
];

export default function ClientsCarousel() {
  const allItems = [...ASSOCIATIONS];
  const doubleList = [...allItems, ...allItems];

  return (
    <>
      <div className="max-w-[1400px] mx-auto px-6 pb-10 w-full relative z-10">

        <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4 tracking-tight">
          OUR CLIENTS & PARTNERS
        </h2>

        <p className="text-gray-400 text-sm max-w-2xl">
          Trusted by academic institutions, incubation centers, industry leaders, and innovation partners.
        </p>
      </div>
      <div className="w-full pb-6 relative z-10 overflow-hidden">
        <div className="relative overflow-hidden py-4 w-full">
          {/* Left and Right Fade Masks */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r to-transparent z-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, var(--theme-bg) 0%, transparent 100%)" }} />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l to-transparent z-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(to left, var(--theme-bg) 0%, transparent 100%)" }} />

          <div
            className="flex animate-marquee-left will-change-transform"
            style={{ width: "max-content" }}
          >
            {doubleList.map((org, idx) => {
              const isCta = (org as any).isCta;
              return (
                <div
                  key={`${org.name}-${idx}`}
                  className={`flex-shrink-0 w-[220px] md:w-[240px] h-[120px] p-4 rounded-2xl border border-white/10 backdrop-blur-md relative overflow-hidden mx-3 group transition-all duration-300 hover:border-cyan-500/30 flex flex-col items-center text-center justify-between ${
                    isCta ? "bg-cyan-950/5 border-cyan-500/20" : "bg-black/10 hover:bg-cyan-500/[0.02]"
                  }`}
                >
                  {/* Subtle light cursor dot on hover / permanent for CTA */}
                  <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-cyan-400 transition-opacity duration-300 ${
                    isCta ? "opacity-100" : "opacity-0 group-hover:opacity-100 animate-pulse"
                  } pointer-events-none`} />

                  <div className="flex flex-col items-center w-full">
                  {/* Organization Logo Area */}
                  <div className="w-full h-20 flex items-center justify-center mb-4">
                    <div className="w-[180px] h-[70px] flex items-center justify-center">
                      {org.logo}
                    </div>
                  </div>
                  </div>

                  {isCta && (
                    <a
                      href="/contact"
                      className="inline-flex items-center text-[10px] font-mono text-cyan-400 hover:text-cyan-300 tracking-wider font-bold transition-colors mt-6"
                    >
                      [ GET IN TOUCH → ]
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          <style>{`
            @keyframes marqueeLeft {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-left {
              animation: marqueeLeft 50s linear infinite;
            }
            .animate-marquee-left:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </>
  );
}
