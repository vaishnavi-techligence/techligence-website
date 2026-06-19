"use client";

import { useState, useRef, useEffect } from "react";

const MILESTONES = [
  // 2017-2021
  {
    year: "2017-2021",
    sentence: "Exposing the first bipedal mechanical joints.",
    image: "/Timeline Photos/Screenshot 2026-06-14 203902.png",
    glowColor: "rgba(245, 158, 11, 0.15)",
    glowColorRaw: "#f59e0b",
    aspect: 0.912,
  },
  {
    year: "2017-2021",
    sentence: "Obsession with custom kinetic linkages.",
    image: "/Timeline Photos/Screenshot 2026-06-14 203923.png",
    glowColor: "rgba(245, 158, 11, 0.15)",
    glowColorRaw: "#f59e0b",
    aspect: 1.105,
  },
  {
    year: "2017-2021",
    sentence: "Testing early static balance and structural frames.",
    image: "/Timeline Photos/Screenshot 2026-06-14 204211.png",
    glowColor: "rgba(245, 158, 11, 0.15)",
    glowColorRaw: "#f59e0b",
    aspect: 0.657,
  },
  {
    year: "2017-2021",
    sentence: "VJTI Base Lab foundation trials.",
    image: "/Timeline Photos/Screenshot 2026-06-14 204219.png",
    glowColor: "rgba(245, 158, 11, 0.15)",
    glowColorRaw: "#f59e0b",
    aspect: 0.624,
  },
  // 2023
  {
    year: "2023",
    sentence: "Experimenting with modular grid mechanics.",
    image: "/Timeline Photos/Screenshot 2026-06-14 203955.png",
    glowColor: "rgba(100, 116, 139, 0.15)",
    glowColorRaw: "#64748b",
    aspect: 0.882,
  },
  {
    year: "2023",
    sentence: "Spliced articulation learning curves.",
    image: "/Timeline Photos/Screenshot 2026-06-14 204126.png",
    glowColor: "rgba(100, 116, 139, 0.15)",
    glowColorRaw: "#64748b",
    aspect: 1.206,
  },
  // 2024
  {
    year: "2024",
    sentence: "First walk: Full bipedal pedestrian structure.",
    image: "/Timeline Photos/Screenshot 2026-06-14 204100.png",
    glowColor: "rgba(217, 119, 6, 0.15)",
    glowColorRaw: "#d97706",
    aspect: 0.817,
  },
  {
    year: "2024",
    sentence: "Integrating stable walking and balancing cycles.",
    image: "/Timeline Photos/Screenshot 2026-06-14 203938.png",
    glowColor: "rgba(217, 119, 6, 0.15)",
    glowColorRaw: "#d97706",
    aspect: 0.640,
  },
  {
    year: "2024",
    sentence: "Pihu vocal speech hardware layout.",
    image: "/Timeline Photos/Screenshot 2026-06-14 204043.png",
    glowColor: "rgba(217, 119, 6, 0.15)",
    glowColorRaw: "#d97706",
    aspect: 0.942,
  },
  {
    year: "2024",
    sentence: "First vocal trials and verbal response alignment.",
    image: "/Timeline Photos/Screenshot 2026-06-14 204151.png",
    glowColor: "rgba(217, 119, 6, 0.15)",
    glowColorRaw: "#d97706",
    aspect: 0.655,
  },
  // 2025
  {
    year: "2025",
    sentence: "Developing custom, in-house smart actuators.",
    image: "/Timeline Photos/Screenshot 2026-06-14 203912.png",
    glowColor: "rgba(234, 88, 12, 0.15)",
    glowColorRaw: "#ea580c",
    aspect: 1.267,
  },
  {
    year: "2025",
    sentence: "High-frequency torque control calibration.",
    image: "/Timeline Photos/Screenshot 2026-06-14 204229.png",
    glowColor: "rgba(234, 88, 12, 0.15)",
    glowColorRaw: "#ea580c",
    aspect: 3.572,
  },
  // 2026
  {
    year: "2026",
    sentence: "Deploying T2 Mini prototypes for field trials.",
    image: "/Timeline Photos/Screenshot 2026-06-14 204139.png",
    glowColor: "rgba(6, 182, 212, 0.15)",
    glowColorRaw: "#06b6d4",
    aspect: 1.394,
  },
  {
    year: "2026",
    sentence: "Autonomous fleet connectivity diagnostics.",
    image: "/Timeline Photos/Screenshot 2026-06-14 204204.png",
    glowColor: "rgba(6, 182, 212, 0.15)",
    glowColorRaw: "#06b6d4",
    aspect: 1.265,
  },
  {
    year: "2026",
    sentence: "T2 Mini commercial environment deployment.",
    image: "/robots/t2-mini.png",
    glowColor: "rgba(6, 182, 212, 0.15)",
    glowColorRaw: "#06b6d4",
    aspect: 0.667,
  },
  // 2026+
  {
    year: "2026+",
    sentence: "T2 Max: Heavy-duty autonomous delivery scaling.",
    image: "/robots/t2-max.png",
    glowColor: "rgba(59, 130, 246, 0.15)",
    glowColorRaw: "#3b82f6",
    aspect: 0.538,
  },
  {
    year: "2026+",
    sentence: "Nova M1: Scaling custom humanoid integration.",
    image: "/robots/nova-m1.png",
    glowColor: "rgba(139, 92, 246, 0.15)",
    glowColorRaw: "#8b5cf6",
    aspect: 0.691,
  },
];

const TIMELINE_YEARS = [
  { label: "2017-2021", startIndex: 0, glowColorRaw: "#f59e0b" },
  { label: "2023", startIndex: 4, glowColorRaw: "#64748b" },
  { label: "2024", startIndex: 6, glowColorRaw: "#d97706" },
  { label: "2025", startIndex: 10, glowColorRaw: "#ea580c" },
  { label: "2026", startIndex: 12, glowColorRaw: "#06b6d4" },
  { label: "2026+", startIndex: 15, glowColorRaw: "#3b82f6" },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const centerPos = scrollLeft + container.clientWidth / 2;
      
      const children = Array.from(container.children) as HTMLElement[];
      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(centerPos - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigateYear = (index: number) => {
    const container = containerRef.current;
    if (container) {
      const children = Array.from(container.children) as HTMLElement[];
      const targetChild = children[index];
      if (targetChild) {
        container.scrollTo({
          left: targetChild.offsetLeft - container.clientWidth / 2 + targetChild.offsetWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  };

  const getActiveYearIndex = () => {
    for (let i = TIMELINE_YEARS.length - 1; i >= 0; i--) {
      if (activeIndex >= TIMELINE_YEARS[i].startIndex) {
        return i;
      }
    }
    return 0;
  };

  const activeYearIdx = getActiveYearIndex();
  const activeYear = TIMELINE_YEARS[activeYearIdx];

  return (
    <section className="timeline-section w-full py-24 relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Dynamic Theme Stylesheet */}
      <style>{`
        .timeline-section {
          background-color: #0a0a0a;
          color: #ffffff;
          transition: background-color 0.4s ease, color 0.4s ease;
        }
        html[data-theme="light"] .timeline-section {
          background-color: #f8fafc;
          color: #0f172a;
        }

        .timeline-header-sub {
          color: rgba(6, 182, 212, 0.85);
          font-weight: 600;
        }
        html[data-theme="light"] .timeline-header-sub {
          color: #0088cc;
        }

        .timeline-heading {
          background: linear-gradient(180deg, #ffffff 0%, #a3a3a3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        html[data-theme="light"] .timeline-heading {
          background: linear-gradient(180deg, #0f172a 0%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .timeline-slide-item {
          background-color: #121212;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        html[data-theme="light"] .timeline-slide-item {
          background-color: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
        }

        .timeline-year-text {
          color: #ffffff;
        }
        html[data-theme="light"] .timeline-year-text {
          color: #0f172a;
        }

        .timeline-caption {
          color: #a3a3a3;
        }
        html[data-theme="light"] .timeline-caption {
          color: #475569;
        }

        .timeline-track-bg {
          background-color: rgba(255, 255, 255, 0.08);
        }
        html[data-theme="light"] .timeline-track-bg {
          background-color: rgba(15, 23, 42, 0.08);
        }

        .timeline-node-inactive {
          background-color: #1e1e1e;
          border-color: rgba(255, 255, 255, 0.12);
        }
        html[data-theme="light"] .timeline-node-inactive {
          background-color: #f1f5f9;
          border-color: rgba(15, 23, 42, 0.12);
        }

        .timeline-label-inactive {
          color: #666666;
        }
        html[data-theme="light"] .timeline-label-inactive {
          color: #64748b;
        }

        .timeline-label-active {
          color: #ffffff;
        }
        html[data-theme="light"] .timeline-label-active {
          color: #0f172a;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Header Section */}
      <div className="text-center mb-10 relative z-10 px-4">
        <span className="timeline-header-sub font-mono text-[10px] md:text-[11px] tracking-[0.45em] uppercase mb-2.5 block">
          // CHRONOLOGY OF MILESTONES
        </span>
        <h2 className="timeline-heading text-3xl md:text-5xl font-black tracking-wider uppercase">
          COMPANY GROWTH
        </h2>
        <div className="w-16 h-[2px] bg-cyan-500/50 mx-auto mt-4" />
      </div>

      {/* Native Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 md:gap-12 items-center relative z-10 py-12"
        style={{
          paddingLeft: "calc(50% - min(40vw, 225px))",
          paddingRight: "calc(50% - min(40vw, 225px))",
          scrollPaddingInline: "calc(50% - min(40vw, 225px))"
        }}
      >
        {MILESTONES.map((m, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={idx}
              className={`snap-center flex-shrink-0 flex flex-col items-center transition-all duration-500 ${
                isActive ? "opacity-100 scale-100" : "opacity-40 scale-90"
              }`}
              style={{
                width: '80vw',
                maxWidth: '450px'
              }}
            >
              <div 
                className="timeline-slide-item rounded-2xl overflow-hidden p-2 w-full aspect-[4/3] mb-8"
                style={{
                  boxShadow: isActive ? `0 20px 45px -12px ${m.glowColor}` : 'none',
                  borderColor: isActive ? m.glowColorRaw + "40" : undefined
                }}
              >
                <img
                  src={m.image}
                  alt={`Techligence Milestone Detail ${m.year}`}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              {/* Text Info embedded in each card */}
              <div className="text-center w-full">
                <h3 className="timeline-year-text font-mono font-light text-[40px] md:text-[60px] leading-none tracking-tighter">
                  {m.year}
                </h3>
                <p className="timeline-caption text-[15px] md:text-[18px] font-light mt-3 leading-relaxed px-4">
                  {m.sentence}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Bottom Chronological Track (Macro Years) */}
      <div className="w-full max-w-3xl mx-auto mt-8 px-6 md:px-12 relative z-10 select-none">
        
        {/* Track Line Background */}
        <div className="absolute top-[7px] left-8 right-8 md:left-14 md:right-14 h-[2px] timeline-track-bg rounded" />
        
        {/* Track Line Active Fill */}
        <div 
          className="absolute top-[7px] left-8 md:left-14 h-[2px] rounded transition-all duration-500 ease-out"
          style={{ 
            width: `calc(${(activeYearIdx / (TIMELINE_YEARS.length - 1)) * 100}% - ${(activeYearIdx / (TIMELINE_YEARS.length - 1)) * 32}px)`,
            backgroundColor: activeYear.glowColorRaw,
            boxShadow: `0 0 8px ${activeYear.glowColorRaw}`
          }}
        />
        
        {/* Timeline Labeled Nodes */}
        <div className="flex justify-between items-start relative z-10">
          {TIMELINE_YEARS.map((ty, idx) => {
            const isYearActive = idx === activeYearIdx;
            return (
              <button
                key={ty.label}
                onClick={() => handleNavigateYear(ty.startIndex)}
                className="flex flex-col items-center group cursor-pointer focus:outline-none"
                style={{ width: '64px' }}
                aria-label={`Go to period ${ty.label}`}
              >
                {/* Visual Dot */}
                <div 
                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 ${
                    isYearActive 
                      ? "scale-125" 
                      : "timeline-node-inactive hover:border-neutral-400 dark:hover:border-neutral-500 hover:scale-110"
                  }`}
                  style={{
                    borderColor: isYearActive ? ty.glowColorRaw : undefined,
                    backgroundColor: isYearActive ? ty.glowColorRaw : undefined,
                    boxShadow: isYearActive ? `0 0 10px ${ty.glowColorRaw}` : undefined
                  }}
                />
                
                {/* Year label text */}
                <span 
                  className={`text-[10px] md:text-[12px] mt-3.5 transition-colors duration-300 font-mono tracking-wider ${
                    isYearActive 
                      ? "timeline-label-active font-bold" 
                      : "timeline-label-inactive group-hover:text-neutral-900 dark:group-hover:text-neutral-100"
                  }`}
                >
                  {ty.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
}
