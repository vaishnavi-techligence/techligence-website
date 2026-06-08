import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ASSOCIATIONS = [
  {
    name: "VJTI-TBI",
    category: "Incubation & Ecosystem Partner",
    desc: "Technology Business Incubator of Veermata Jijabai Technological Institute, fostering deep-tech hardware startups.",
    logo: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#D4AF37]" fill="currentColor">
        <path d="M50 15 L80 25 V55 C80 75 50 85 50 85 C50 85 20 75 20 55 V25 Z" fill="none" stroke="#D4AF37" strokeWidth="2" />
        <path d="M35 55 A 15 15 0 0 1 65 55 Z" fill="#D4AF37" opacity="0.8" />
        <line x1="50" y1="55" x2="50" y2="40" stroke="#D4AF37" strokeWidth="2" />
        <line x1="50" y1="55" x2="40" y2="44" stroke="#D4AF37" strokeWidth="2" />
        <line x1="50" y1="55" x2="60" y2="44" stroke="#D4AF37" strokeWidth="2" />
        <line x1="50" y1="55" x2="33" y2="50" stroke="#D4AF37" strokeWidth="2" />
        <line x1="50" y1="55" x2="67" y2="50" stroke="#D4AF37" strokeWidth="2" />
        <path d="M25 58 Q 37 55 50 58 T 75 58" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M25 64 Q 37 61 50 64 T 75 64" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="50" cy="55" r="7" fill="#050816" stroke="#D4AF37" strokeWidth="1.5" />
        <text x="50" y="32" fontFamily="sans-serif" fontSize="7" fontWeight="black" fill="white" textAnchor="middle">VJTI</text>
        <text x="50" y="78" fontFamily="sans-serif" fontSize="6" fontWeight="black" fill="#D4AF37" textAnchor="middle">TBI</text>
      </svg>
    ),
  },
  {
    name: "VJTI Institute",
    category: "Academic & Research Collaboration",
    desc: "Collaborative research and development in robotics kinematics, embedded systems, and autonomous navigation.",
    logo: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#D4AF37]" fill="currentColor">
        <path d="M50 15 L80 25 V55 C80 75 50 85 50 85 C50 85 20 75 20 55 V25 Z" fill="none" stroke="#D4AF37" strokeWidth="2" />
        <path d="M35 55 A 15 15 0 0 1 65 55 Z" fill="#D4AF37" opacity="0.8" />
        <line x1="50" y1="55" x2="50" y2="38" stroke="#D4AF37" strokeWidth="2" />
        <line x1="50" y1="55" x2="38" y2="42" stroke="#D4AF37" strokeWidth="2" />
        <line x1="50" y1="55" x2="62" y2="42" stroke="#D4AF37" strokeWidth="2" />
        <line x1="50" y1="55" x2="31" y2="49" stroke="#D4AF37" strokeWidth="2" />
        <line x1="50" y1="55" x2="69" y2="49" stroke="#D4AF37" strokeWidth="2" />
        <path d="M25 58 Q 37 55 50 58 T 75 58" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M25 64 Q 37 61 50 64 T 75 64" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M45 72 L50 68 L55 72 Z" fill="#D4AF37" />
        <circle cx="50" cy="65" r="1.5" fill="#FF8C00" />
        <text x="50" y="32" fontFamily="sans-serif" fontSize="7" fontWeight="black" fill="white" textAnchor="middle">VJTI</text>
        <text x="50" y="80" fontFamily="sans-serif" fontSize="5.5" fontWeight="bold" fill="white" textAnchor="middle">MUMBAI</text>
      </svg>
    ),
  },
  {
    name: "Chitkara CIIF",
    category: "Innovation & Incubation Partner",
    desc: "Chitkara University Center for Innovation & Incubation Fellowship supporting next-generation tech enterprises.",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 text-[#E31E24]" fill="currentColor">
        <path d="M15 5 C30 5 33 22 33 22 C33 22 28 32 15 32 C3 32 5 15 15 5 Z" fill="#E31E24" />
        <path d="M21 10 C30 10 32 20 32 20 C32 20 28 26 21 26 C13 26 15 15 21 10 Z" fill="#050816" />
        <text x="42" y="18" fontFamily="sans-serif" fontSize="10" fontWeight="950" fill="white">CHITKARA</text>
        <text x="42" y="29" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#E31E24" letterSpacing="1.5">CIIF</text>
      </svg>
    ),
  },
  {
    name: "Chitkara University",
    category: "Academic & Development Partner",
    desc: "Academic synergy for internship programs, robotic talent development, and technical labs.",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 text-[#E31E24]" fill="currentColor">
        <path d="M15 5 C30 5 33 22 33 22 C33 22 28 32 15 32 C3 32 5 15 15 5 Z" fill="#E31E24" />
        <path d="M21 10 C30 10 32 20 32 20 C32 20 28 26 21 26 C13 26 15 15 21 10 Z" fill="#050816" />
        <text x="42" y="17" fontFamily="sans-serif" fontSize="10" fontWeight="950" fill="white">CHITKARA</text>
        <text x="42" y="28" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold" fill="#888" letterSpacing="0.5">UNIVERSITY</text>
      </svg>
    ),
  },
  {
    name: "AIC Pinnacle",
    category: "Incubation & Startup Support",
    desc: "Atal Incubation Centre supported by Pinnacle, enabling scaling and commercialization of AI systems.",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8">
        <polygon points="12,30 24,10 36,30" fill="none" stroke="#00D2FF" strokeWidth="2" />
        <polygon points="20,30 28,17 36,30" fill="#FF6B00" />
        <text x="44" y="18" fontFamily="sans-serif" fontSize="10" fontWeight="950" fill="white">AIC PINNACLE</text>
        <text x="44" y="29" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold" fill="#FF6B00" letterSpacing="1">ALLIANCE</text>
      </svg>
    ),
  },
  {
    name: "Pinnacle Industries",
    category: "Industrial & Manufacturing Partner",
    desc: "Strategic industrial alignment for production scaling, design optimization, and manufacturing guidance.",
    logo: (
      <svg viewBox="0 0 130 40" className="h-8">
        <polygon points="12,30 24,10 36,30" fill="none" stroke="#00D2FF" strokeWidth="2" />
        <polygon points="20,30 28,17 36,30" fill="#FF6B00" />
        <text x="44" y="17" fontFamily="sans-serif" fontSize="10" fontWeight="950" fill="white">PINNACLE</text>
        <text x="44" y="28" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold" fill="#888" letterSpacing="0.5">INDUSTRIES</text>
      </svg>
    ),
  },
  {
    name: "Aumsat Technologies",
    category: "Technology Associate",
    desc: "Synergistic tech exploration combining satellite data insights with localized mobile robotic systems.",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8">
        <circle cx="18" cy="20" r="10" fill="none" stroke="#2196F3" strokeWidth="2" />
        <path d="M18 10 A 10 10 0 0 1 28 20" fill="none" stroke="#4CAF50" strokeWidth="2.5" />
        <circle cx="18" cy="20" r="3.5" fill="#4CAF50" />
        <line x1="18" y1="20" x2="26" y2="12" stroke="white" strokeWidth="1.5" />
        <text x="36" y="18" fontFamily="sans-serif" fontSize="10" fontWeight="950" fill="white">AUMSAT</text>
        <text x="36" y="29" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold" fill="#4CAF50" letterSpacing="0.8">TECHNOLOGIES</text>
      </svg>
    ),
  },
  {
    name: "Hydrocawach Technologies",
    category: "Cleantech Associate",
    desc: "Joint engineering explorations to design and deploy specialized robots for environmental utilities.",
    logo: (
      <svg viewBox="0 0 130 40" className="h-8">
        <path d="M12 10 L22 5 L32 10 V20 C32 27 22 32 22 32 C22 32 12 27 12 20 Z" fill="none" stroke="#00A3E0" strokeWidth="2" />
        <path d="M22 11 C19 15 19 21 22 25 C25 21 25 15 22 11 Z" fill="#00A3E0" />
        <text x="38" y="17" fontFamily="sans-serif" fontSize="9.5" fontWeight="950" fill="white">HYDROCAWACH</text>
        <text x="38" y="28" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold" fill="#00A3E0" letterSpacing="0.8">TECHNOLOGIES</text>
      </svg>
    ),
  },
  {
    name: "Lokmanya Tilak College, Mumbai",
    category: "Academic & Research Partner",
    desc: "Undergraduate research initiatives, technical workshops, and direct campus recruitment channels.",
    logo: (
      <svg viewBox="0 0 130 40" className="h-8">
        <circle cx="16" cy="20" r="11" fill="none" stroke="#FFD700" strokeWidth="1.5" />
        <circle cx="16" cy="20" r="8.5" fill="rgba(128,0,0,0.2)" stroke="#FFD700" strokeWidth="0.5" />
        <path d="M15 25 L17 25 L18 17 L14 17 Z" fill="#FFD700" />
        <path d="M13 15 Q16 10 19 15 Z" fill="#FF5722" />
        <text x="32" y="15" fontFamily="sans-serif" fontSize="9" fontWeight="950" fill="white">LOKMANYA TILAK</text>
        <text x="32" y="23" fontFamily="sans-serif" fontSize="6.2" fontWeight="bold" fill="#FFD700">COLLEGE OF ENG.</text>
        <text x="32" y="30" fontFamily="sans-serif" fontSize="5.5" fontWeight="bold" fill="#888" letterSpacing="0.5">MUMBAI</text>
      </svg>
    ),
  },
  {
    name: "Silicon India",
    category: "Media & Features Recognition",
    desc: "National media highlight and editorial coverage of our rapid growth and unique service robot lineup.",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8">
        <text x="2" y="24" fontFamily="sans-serif" fontSize="15" fontWeight="950" fill="white" letterSpacing="-0.5">
          silicon<tspan fill="#E31E24">india</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "Jumpstart Magazine",
    category: "Startup & Media Coverage",
    desc: "International startup coverage, showcasing Techligence's vision for future humanoid interfaces.",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8">
        <text x="2" y="24" fontFamily="Impact, Arial Black, sans-serif" fontSize="16" fontWeight="bold" fill="white" letterSpacing="0.5">
          JUMPSTART
        </text>
        <rect x="92" y="10" width="6" height="18" fill="#FFD700" />
      </svg>
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
      <div className="max-w-[1400px] mx-auto px-6 pb-28 w-full relative z-10">
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
                  {/* Organization Logo Area with Grayscale transition */}
                  <div className="h-16 flex items-center justify-center mb-6 grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-105">
                    {org.logo}
                  </div>

                  {/* Organization Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 leading-snug">
                    {org.name}
                  </h3>

                  {/* Category */}
                  <p className="text-[10px] text-cyan-400/80 font-mono uppercase tracking-wider mb-4">
                    {org.category}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed font-light max-w-xs">
                    {org.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* 12th Balanced Cell - Call to Action */}
            <div className="p-8 border-r border-b border-white/10 flex flex-col items-center text-center justify-between transition-all duration-300 hover:bg-cyan-500/[0.03] group relative bg-cyan-950/5">
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-100 transition-opacity pointer-events-none" />

              <div className="flex flex-col items-center w-full">
                {/* Organization Logo Placeholder Area */}
                <div className="h-16 flex items-center justify-center mb-6 text-cyan-500/40 group-hover:text-cyan-400 transition-colors duration-500">
                  <svg viewBox="0 0 100 30" className="h-6" fill="currentColor">
                    <rect x="5" y="5" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="15" y1="5" x2="15" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="5" y1="15" x2="25" y2="15" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="32" y="19" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="white">TECHLIGENCE</text>
                  </svg>
                </div>

                {/* Organization Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 leading-snug">
                  Partner with Us
                </h3>

                {/* Category */}
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-4">
                  Joint R&D & Deployments
                </p>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed font-light mb-6 max-w-xs">
                  Interested in piloting, collaborative research, incubation opportunities, or custom integrations? Connect with our engineering teams.
                </p>
              </div>

              <a 
                href="/contact" 
                className="inline-flex items-center text-[10px] font-mono text-cyan-400 hover:text-cyan-300 tracking-wider font-bold transition-colors mt-auto"
              >
                [ GET IN TOUCH → ]
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

