"use client";

const REVIEWS_ROW1 = [
  {
    name: "Sarah Jenkins",
    role: "VP of Operations",
    company: "RetailCorp Global",
    rating: 5,
    text: "The T2 Mini transformed our flagship lobby. Guests are genuinely wowed by the real-time AI responses — it anchors our futuristic brand perfectly.",
    avatar: "SJ",
    avatarColor: "from-cyan-400 to-blue-500",
  },
  {
    name: "Marcus Chen",
    role: "Director of Automation",
    company: "AlphaCare Labs",
    rating: 5,
    text: "Nova M1 fleet navigation solved our warehouse mapping deadlock in days. Safe, autonomous precision that handles human traffic and machinery flawlessly.",
    avatar: "MC",
    avatarColor: "from-violet-400 to-purple-500",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    company: "NexGen Hospitality",
    rating: 5,
    text: "JOY A-01 greets every hotel guest with warmth and precision. The expressive face display alone increased guest satisfaction scores by 34% in our pilot.",
    avatar: "PS",
    avatarColor: "from-pink-400 to-rose-500",
  },
  {
    name: "David Müller",
    role: "Head of R&D",
    company: "EuroLogistics AG",
    rating: 5,
    text: "Andy R1's 42-DoF actuators made our ergonomic research obsolete — the natural gesture mimicry is unlike anything we've seen in the market.",
    avatar: "DM",
    avatarColor: "from-amber-400 to-orange-500",
  },
  {
    name: "Aisha Okonkwo",
    role: "Chief Innovation Officer",
    company: "Meridian Health",
    rating: 5,
    text: "T2 Max carries our medical supply payloads with zero incidents across 6 months of continuous deployment. The ROI was visible within the first quarter.",
    avatar: "AO",
    avatarColor: "from-emerald-400 to-teal-500",
  },
  {
    name: "James Thornton",
    role: "CEO",
    company: "SmartSpace Corp.",
    rating: 5,
    text: "Tella S turned our corporate HQ into a showcase for investors. The dual-display HUD with live data feeds makes every visitor stop and stare.",
    avatar: "JT",
    avatarColor: "from-sky-400 to-indigo-500",
  },
];

const REVIEWS_ROW2 = [
  {
    name: "Yuki Tanaka",
    role: "Operations Manager",
    company: "FutureMart Japan",
    rating: 5,
    text: "Deploying T2 Mini across 8 retail floors reduced customer wait time by 60%. The multi-language support is flawless — even handles complex dialect queries.",
    avatar: "YT",
    avatarColor: "from-red-400 to-rose-500",
  },
  {
    name: "Carlos Rivera",
    role: "Facility Director",
    company: "AeroPort Dubai",
    rating: 5,
    text: "Nova M1 mapped our entire 1.2M sqft terminal in under 4 hours with sub-centimetre precision. It redefined our entire infrastructure planning process.",
    avatar: "CR",
    avatarColor: "from-lime-400 to-green-500",
  },
  {
    name: "Dr. Emily Foster",
    role: "Research Lead",
    company: "Oxford BioTech",
    rating: 5,
    text: "Andy R1's gestural data is publication-grade. We've produced 3 peer-reviewed papers from our kinematic research collaboration with Techligence.",
    avatar: "EF",
    avatarColor: "from-fuchsia-400 to-pink-500",
  },
  {
    name: "Raj Mehta",
    role: "Smart City Planner",
    company: "Mumbai MetroHubs",
    rating: 5,
    text: "The Tella S fleet handles 12,000+ daily citizen interactions at our metro hubs. Multilingual, patient, and always on — the perfect public service ambassador.",
    avatar: "RM",
    avatarColor: "from-yellow-400 to-amber-500",
  },
  {
    name: "Ingrid Larsson",
    role: "Chief Sustainability Officer",
    company: "NordCargo Group",
    rating: 5,
    text: "T2 Max reduced our manual handling carbon footprint by 28%. The autonomous logistics routing is genuinely intelligent — not just scripted path-following.",
    avatar: "IL",
    avatarColor: "from-cyan-500 to-teal-400",
  },
  {
    name: "Omar Al-Rashid",
    role: "VP Technology",
    company: "Gulf HealthTech",
    rating: 5,
    text: "JOY A-01's patient-facing concierge role exceeded every KPI we set. Patients actually prefer its calm, consistent responses over human receptionists.",
    avatar: "OA",
    avatarColor: "from-violet-500 to-blue-400",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3 h-3 fill-cyan-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof REVIEWS_ROW1[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] p-5 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-md relative overflow-hidden mx-2 group hover:border-cyan-500/30 transition-all duration-300">
      {/* Subtle corner glow on hover */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Quote mark */}
      <div className="absolute top-3 right-4 text-5xl font-serif text-white/5 select-none font-bold leading-none">&ldquo;</div>

      {/* Stars */}
      <div className="mb-3">
        <StarRating count={review.rating} />
      </div>

      {/* Review text */}
      <p className="text-[11px] text-gray-300 leading-relaxed mb-4 line-clamp-4 italic">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-2.5 border-t border-white/5 pt-3">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${review.avatarColor} flex items-center justify-center text-black font-extrabold text-[10px] flex-shrink-0`}>
          {review.avatar}
        </div>
        <div>
          <p className="text-[11px] font-bold text-white">{review.name}</p>
          <p className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">{review.role} · {review.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function ReviewMarquee() {
  // Double each row for seamless infinite loop
  const row1 = [...REVIEWS_ROW1, ...REVIEWS_ROW1];
  const row2 = [...REVIEWS_ROW2, ...REVIEWS_ROW2];

  return (
    <section className="relative py-20 bg-[#050816] border-t border-white/5 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12 px-6 relative z-10">
        <p className="text-[9px] font-mono uppercase tracking-[6px] text-cyan-400 mb-2">
          TRUSTED WORLDWIDE
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
          DEPLOYED ACROSS LEADING INDUSTRIES
        </h2>
        <div className="w-12 h-[2px] bg-cyan-400 mx-auto mt-4" />
      </div>

      {/* Row 1: slides LEFT */}
      <div className="relative mb-4 overflow-hidden">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, var(--theme-bg) 0%, transparent 100%)" }} />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(to left, var(--theme-bg) 0%, transparent 100%)" }} />

        <div className="flex animate-marquee-left will-change-transform" style={{ width: "max-content" }}>
          {row1.map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Row 2: slides RIGHT */}
      <div className="relative overflow-hidden">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, var(--theme-bg) 0%, transparent 100%)" }} />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(to left, var(--theme-bg) 0%, transparent 100%)" }} />

        <div className="flex animate-marquee-right will-change-transform" style={{ width: "max-content" }}>
          {row2.map((review, i) => (
            <ReviewCard key={`r2-${i}`} review={review} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 40s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
