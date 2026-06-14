import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";

interface ExperienceBadgeProps {
  years: string;
}

function ExperienceBadge({ years }: ExperienceBadgeProps) {
  return (
    <div className="mt-5 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400 bg-cyan-500/20 text-cyan-300 text-sm font-bold transition-all duration-300 hover:bg-cyan-500/30 hover:border-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)] group/badge">
      <svg
        className="w-4 h-4 text-cyan-400 fill-cyan-400/20 group-hover/badge:scale-110 transition-transform duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
      <span>{years} Years Experience</span>
    </div>
  );
}



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
      <img src="/logos/aumsat-new.png" alt="Aumsat Technologies" className="max-h-[90px] max-w-[200px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Hydrocawach Technologies",
    category: "Cleantech Associate",
    desc: "Joint engineering explorations to design and deploy specialized robots for environmental utilities.",
    logo: (
      <img src="/logos/hydrocawach-new.png" alt="Hydrocawach Technologies" className="max-h-[90px] max-w-[200px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
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
      <img src="/logos/silicon-new.png" alt="Silicon India" className="max-h-[90px] max-w-[200px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
    ),
  },
  {
    name: "Jumpstart Magazine",
    category: "Startup & Media Coverage",
    desc: "International startup coverage, showcasing Techligence's vision for future humanoid interfaces.",
    logo: (
      <img src="/logos/jumpstart-new.png" alt="Jumpstart Magazine" className="max-h-[90px] max-w-[200px] w-auto h-auto object-contain bg-white p-2 rounded-lg" />
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
        {/* About Techligence */}
<section className="max-w-[1400px] mx-auto px-6 pb-20 w-full relative z-10">
  <div className="rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card)] p-8 md:p-12">

    <p className="text-cyan-500 uppercase tracking-[6px] text-xs font-semibold mb-3">
      ABOUT TECHLIGENCE
    </p>

    <h2 className="text-3xl md:text-5xl font-black mb-6 text-[var(--theme-text)]">
      India's AI-Powered Service Robot Company
    </h2>

    <p className="text-[var(--theme-text-secondary)] text-lg leading-relaxed max-w-4xl">
      Techligence Robotics is focused on building intelligent service robots
      for healthcare, hospitality, retail, corporate and educational
      environments. We combine robotics, artificial intelligence and autonomous
      technologies to create smart solutions that improve customer engagement,
      visitor assistance and operational efficiency.
    </p>

    <div className="grid md:grid-cols-3 gap-6 mt-10">

      <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-background)] p-6">
        <h3 className="text-cyan-500 font-bold mb-3">
          Mission
        </h3>
        <p className="text-[var(--theme-text-secondary)] text-sm">
          To innovate and deliver advanced robotic solutions that empower industries and enrich lives.
        </p>
      </div>

      <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-background)] p-6">
        <h3 className="text-cyan-500 font-bold mb-3">
          Industry
        </h3>
        <p className="text-[var(--theme-text-secondary)] text-sm">
          Robotics, Artificial Intelligence & Automation
        </p>
      </div>

      <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-background)] p-6">
        <h3 className="text-cyan-500 font-bold mb-3">
          Founded
        </h3>
        <p className="text-[var(--theme-text-secondary)] text-sm">
          AI-powered service robotics and autonomous systems development.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Leadership Team */}
<section className="max-w-[1400px] mx-auto px-6 pb-24 relative z-10">

  <div className="text-center mb-16">
    <p className="text-cyan-400 uppercase tracking-[6px] text-xs font-semibold mb-3">
      LEADERSHIP TEAM
    </p>

    <h2 className="text-4xl md:text-5xl font-black mb-6">
      The Team Behind Techligence
    </h2>

    <p className="text-gray-400 max-w-4xl mx-auto">
      Techligence Robotics is driven by a multidisciplinary team of innovators,
      engineers, researchers and business leaders dedicated to advancing
      AI-powered service robotics and intelligent automation solutions.
    </p>
  </div>

  {/* Founders */}
  <div className="grid md:grid-cols-3 gap-8 mb-20">

    <div className="bg-black/20 border border-cyan-500/20 rounded-3xl p-8 text-center">
      <img
        src="/team/kunal-gawhale.jpg"
        alt="Kunal Gawhale"
        className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-400 object-cover object-top shadow-[0_0_25px_rgba(0,255,255,0.3)]"
      />
      <h3 className="text-2xl font-bold">Kunal Gawhale</h3>
      <p className="text-cyan-400 font-semibold">Founder & CEO</p>
      <p className="text-sm text-gray-400 mt-2">M.Tech (EXTC), VJTI Mumbai</p>

      <p className="text-gray-300 text-sm mt-4 leading-relaxed">
        Leads product strategy, robotics innovation and business growth
        initiatives focused on intelligent service robots.
      </p>

      <ExperienceBadge years="6+" />
    </div>

    <div className="bg-black/20 border border-cyan-500/20 rounded-3xl p-8 text-center">
      <img
        src="/team/priyanka-udmale.jpg"
        alt="Priyanka Udmale"
        className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-400 object-cover object-top shadow-[0_0_25px_rgba(0,255,255,0.3)]"
      />
      <h3 className="text-2xl font-bold">Priyanka Udmale</h3>
      <p className="text-cyan-400 font-semibold">Co-Founder & CFO</p>
      <p className="text-sm text-gray-400 mt-2">
        Ph.D. Research Scholar (Pursuing), E&C, VJTI Mumbai
      </p>

      <p className="text-gray-300 text-sm mt-4 leading-relaxed">
        Oversees financial planning, strategic partnerships and operational
        growth while supporting innovation and commercialization.
      </p>

      <ExperienceBadge years="8+" />
    </div>

    <div className="bg-black/20 border border-cyan-500/20 rounded-3xl p-8 text-center">
      <img
        src="/team/dr-sandeep-udmale.jpg"
        alt="Dr. Sandeep Udmale"
        className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-400 object-cover object-top shadow-[0_0_25px_rgba(0,255,255,0.3)]"
      />
      <h3 className="text-2xl font-bold">Dr. Sandeep Udmale</h3>
      <p className="text-cyan-400 font-semibold">Co-Founder & Director</p>
      <p className="text-sm text-gray-400 mt-2">
        Ph.D., IIT-BHU, Varanasi
      </p>

      <p className="text-gray-300 text-sm mt-4 leading-relaxed">
        Provides technical leadership in artificial intelligence, robotics
        research and autonomous systems development.
      </p>

      <ExperienceBadge years="16+" />
    </div>

  </div>

{/* Advisory Board */}
<div className="mt-10">
  <h3 className="text-4xl font-bold text-center mb-12">
    Advisory Board & Mentors
  </h3>

  <div className="grid md:grid-cols-4 gap-6">

    {/* Mentor 1 */}
    <div className="bg-black/20 border border-cyan-500/20 rounded-3xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300">
      <img
        src="/team/surendra-agarwal.jpg"
        alt="Surendra Agarwal"
        className="w-28 h-28 rounded-full mx-auto mb-5 border-4 border-cyan-400 object-cover shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      />

      <h4 className="text-xl font-bold">
        Surendra Agarwal
      </h4>

      <p className="text-cyan-400 text-sm font-semibold mt-2">
        Senior Industry Mentor
      </p>

      <p className="text-gray-400 text-sm mt-3">
        Ex. Bajaj Auto, L&T
      </p>

      <ExperienceBadge years="52+" />
    </div>

    {/* Mentor 2 */}
    <div className="bg-black/20 border border-cyan-500/20 rounded-3xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300">
      <img
        src="/team/ashok-yavele.jpg"
        alt="Ashok Yavele"
        className="w-28 h-28 rounded-full mx-auto mb-5 border-4 border-cyan-400 object-cover shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      />

      <h4 className="text-xl font-bold">
        Ashok Yavele
      </h4>

      <p className="text-cyan-400 text-sm font-semibold mt-2">
        Automotive Industry Advisor
      </p>

      <p className="text-gray-400 text-sm mt-3">
        Ex. Force Motors
      </p>

      <ExperienceBadge years="45+" />
    </div>

    {/* Mentor 3 */}
    <div className="bg-black/20 border border-cyan-500/20 rounded-3xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300">
      <img
        src="/team/sunil-dhadiwal.jpg"
        alt="Sunil Dhadiwal"
        className="w-28 h-28 rounded-full mx-auto mb-5 border-4 border-cyan-400 object-cover shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      />

      <h4 className="text-xl font-bold">
        Sunil Dhadiwal
      </h4>

      <p className="text-cyan-400 text-sm font-semibold mt-2">
        Business & Manufacturing Mentor
      </p>

      <p className="text-gray-400 text-sm mt-3">
        CEO, AIC Pinnacle
      </p>

      <ExperienceBadge years="30+" />
    </div>

    {/* Mentor 4 */}
    <div className="bg-black/20 border border-cyan-500/20 rounded-3xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300">
      <img
        src="/team/chaitanya-rajguru.jpg"
        alt="Chaitanya Rajguru"
        className="w-28 h-28 rounded-full mx-auto mb-5 border-4 border-cyan-400 object-cover shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      />

      <h4 className="text-xl font-bold">
        Chaitanya Rajguru
      </h4>

      <p className="text-cyan-400 text-sm font-semibold mt-2">
        Technology & Innovation Mentor
      </p>

      <p className="text-gray-400 text-sm mt-3">
        Ex. Intel, KPIT, Whirlpool
      </p>

      <ExperienceBadge years="35+" />
    </div>

  </div>
</div>

</section>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 pb-10 w-full relative z-10">
        <p className="text-cyan-400 uppercase tracking-[6px] text-xs font-semibold mb-2 font-mono">
          CLIENTS & PARTNERS
        </p>

        <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4 tracking-tight">
          OUR CLIENTS & PARTNERS
        </h2>

        <p className="text-gray-400 text-sm max-w-2xl">
          Trusted by academic institutions, incubation centers, industry leaders, and innovation partners.
        </p>
      </div>
      <div className="w-full pb-28 relative z-10 overflow-hidden">

          {/* Companies Marquee (Infinite horizontal slider) */}
          {(() => {
            const allItems = [
              ...ASSOCIATIONS,
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
            );
          })()}
      </div>

      <Timeline />

      <Footer />
    </main>
  );
}

