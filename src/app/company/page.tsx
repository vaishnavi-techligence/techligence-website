import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ASSOCIATIONS = [
  {
    name: "VJTI-TBI",
    category: "Incubation & Ecosystem Partner",
    desc: "Technology Business Incubator of Veermata Jijabai Technological Institute, fostering deep-tech hardware startups.",
    logo: (
      <img src="/logos/vjti-tbi.png" alt="VJTI-TBI" className="h-full w-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "VJTI Institute",
    category: "Academic & Research Collaboration",
    desc: "Collaborative research and development in robotics kinematics, embedded systems, and autonomous navigation.",
    logo: (
      <img src="/logos/vjti.jpg" alt="VJTI Institute" className="h-full w-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Chitkara CIIF",
    category: "Innovation & Incubation Partner",
    desc: "Chitkara University Center for Innovation & Incubation Fellowship supporting next-generation tech enterprises.",
    logo: (
      <img src="/logos/ciif.png" alt="Chitkara CIIF" className="h-full w-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Chitkara University",
    category: "Academic & Development Partner",
    desc: "Academic synergy for internship programs, robotic talent development, and technical labs.",
    logo: (
      <img src="/logos/chitkara.png" alt="Chitkara University" className="h-full w-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "AIC Pinnacle",
    category: "Incubation & Startup Support",
    desc: "Atal Incubation Centre supported by Pinnacle, enabling scaling and commercialization of AI systems.",
    logo: (
      <img src="/logos/aic-pinnacle.png" alt="AIC Pinnacle" className="h-full w-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Pinnacle Industries",
    category: "Industrial & Manufacturing Partner",
    desc: "Strategic industrial alignment for production scaling, design optimization, and manufacturing guidance.",
    logo: (
      <img src="/logos/pinnacle.svg" alt="Pinnacle Industries" className="h-full w-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Aumsat Technologies",
    category: "Technology Associate",
    desc: "Synergistic tech exploration combining satellite data insights with localized mobile robotic systems.",
    logo: (
      <img src="/logos/aumsat-new.png" alt="Aumsat Technologies" className="h-full w-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Hydrocawach Technologies",
    category: "Cleantech Associate",
    desc: "Joint engineering explorations to design and deploy specialized robots for environmental utilities.",
    logo: (
      <img src="/logos/hydrocawach-new.png" alt="Hydrocawach Technologies" className="h-full w-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Lokmanya Tilak College, Mumbai",
    category: "Academic & Research Partner",
    desc: "Undergraduate research initiatives, technical workshops, and direct campus recruitment channels.",
    logo: (
      <img src="/logos/ltce.png" alt="Lokmanya Tilak College" className="h-full w-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Silicon India",
    category: "Media & Features Recognition",
    desc: "National media highlight and editorial coverage of our rapid growth and unique service robot lineup.",
    logo: (
      <img src="/logos/silicon-new.png" alt="Silicon India" className="h-full w-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Jumpstart Magazine",
    category: "Startup & Media Coverage",
    desc: "International startup coverage, showcasing Techligence's vision for future humanoid interfaces.",
    logo: (
      <img src="/logos/jumpstart-new.png" alt="Jumpstart Magazine" className="h-full w-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
];

export default function CompanyPage() {
  return (
    <main className="relative min-h-screen bg-[#050816] text-white overflow-x-hidden flex flex-col justify-between">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"></div>
      
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-250px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute left-[-250px] top-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[150px]" />
      </div>

      <Navbar />
      
      {/* Page Content Container */}
      <div className="max-w-[1400px] mx-auto px-6 pt-36 pb-12 w-full relative z-10 flex flex-col justify-center">
        <p className="text-cyan-400 uppercase tracking-[8px] mb-4 text-sm font-semibold">
          WHO WE ARE
        </p>
        <h1 className="text-5xl lg:text-7xl font-black tracking-[-2px] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-cyan-500 uppercase mb-4">
          COMPANY
        </h1>
        <div className="w-24 h-[2px] bg-cyan-400 mb-8"></div>
        <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
          Discover the mission, technology, and engineering pioneers behind Techligence Robotics and our drive for seamless human-robot cooperation.
        </p>
      </div>

      {/* Associated Companies & Organisations Section */}
      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
        <div className="border-t border-white/10 pt-16">
          <p className="text-cyan-400 uppercase tracking-[6px] text-xs font-semibold mb-2 font-mono">
            COLLABORATIVE NETWORK
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4 tracking-tight">
            COMPANIES & ORGANISATIONS WE ARE ASSOCIATED WITH
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mb-12">
            We collaborate with premier academic institutions, startup accelerators, incubation centers, and media agencies to co-create the robotics solutions of tomorrow.
          </p>
<<<<<<< HEAD

          {/* Connected Grid Datasheet Layout */}
          <div className="company-associations-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10 rounded-2xl overflow-hidden bg-black/10 backdrop-blur-md">
            {ASSOCIATIONS.map((org) => (
              <div 
                key={org.name} 
                className="p-8 border-r border-b border-white/10 flex flex-col items-center text-center justify-between transition-all duration-300 hover:bg-cyan-500/[0.02] group relative"
              >
                {/* Subtle light cursor dot on hover */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse pointer-events-none" />

                <div className="flex flex-col items-center w-full">
                  {/* Organization Logo Area */}
                  <div className="h-16 flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-105">
                    {org.logo}
                  </div>

                  {/* Organization Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 leading-snug">
                    {org.name}
                  </h3>

                </div>
              </div>
            ))}

            {/* 12th Balanced Cell - Call to Action */}
            <div className="p-8 border-r border-b border-white/10 flex flex-col items-center text-center justify-between transition-all duration-300 hover:bg-cyan-500/[0.03] group relative bg-cyan-950/5">
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-100 transition-opacity pointer-events-none" />

              <div className="flex flex-col items-center w-full">
                {/* Organization Logo Placeholder Area */}
                <div className="h-16 flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-105">
                  <img src="/logo.png" alt="Techligence" className="h-full w-auto object-contain bg-white p-2 rounded-lg" />
                </div>

                {/* Organization Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 leading-snug">
                  Partner with Us
                </h3>

              </div>

              <a 
                href="/contact" 
                className="inline-flex items-center text-[10px] font-mono text-cyan-400 hover:text-cyan-300 tracking-wider font-bold transition-colors mt-auto"
              >
                [ GET IN TOUCH → ]
              </a>
            </div>
          </div>
=======
>>>>>>> b499eca35a30faf134ed2f0824fc3078fb90b9c7
        </div>
      </div>

      <div className="w-full pb-28 relative z-10 overflow-hidden">

          {/* Companies Marquee (Infinite horizontal slider) */}
          {(() => {
            const allItems = [
              ...ASSOCIATIONS,
              {
                name: "Partner with Us",
                category: "Joint R&D & Deployments",
                desc: "Interested in piloting, collaborative research, incubation opportunities, or custom integrations? Connect with our engineering teams.",
                logo: (
                  <img src="/logo.png" alt="Techligence" className="h-full w-auto object-contain bg-white p-2 rounded-lg" />
                ),
                isCta: true,
              },
            ];
            const doubleList = [...allItems, ...allItems];
            return (
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
                        className={`flex-shrink-0 w-[300px] md:w-[350px] p-8 rounded-2xl border border-white/10 backdrop-blur-md relative overflow-hidden mx-3 group transition-all duration-300 hover:border-cyan-500/30 flex flex-col items-center text-center justify-between ${
                          isCta ? "bg-cyan-950/5 border-cyan-500/20" : "bg-black/10 hover:bg-cyan-500/[0.02]"
                        }`}
                      >
                        {/* Subtle light cursor dot on hover / permanent for CTA */}
                        <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-cyan-400 transition-opacity duration-300 ${
                          isCta ? "opacity-100" : "opacity-0 group-hover:opacity-100 animate-pulse"
                        } pointer-events-none`} />

                        <div className="flex flex-col items-center w-full">
                          {/* Organization Logo Area */}
                          <div className="h-16 flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-105">
                            {org.logo}
                          </div>

                          {/* Organization Title */}
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 leading-snug">
                            {org.name}
                          </h3>

                          {/* Category */}
                          <p className={`text-[10px] font-mono uppercase tracking-wider mb-4 ${
                            isCta ? "text-gray-500" : "text-cyan-400/80"
                          }`}>
                            {org.category}
                          </p>

                          {/* Description */}
                          <p className="text-xs text-gray-400 leading-relaxed font-light max-w-xs">
                            {org.desc}
                          </p>
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
            );
          })()}
      </div>

      <Footer />
    </main>
  );
}

