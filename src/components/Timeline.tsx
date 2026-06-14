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
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNavigate = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= MILESTONES.length || isFading || nextIndex === activeIndex) return;
    setIsFading(true);

    setTimeout(() => {
      setDisplayIndex(nextIndex);
      setActiveIndex(nextIndex);
      setIsFading(false);
    }, 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      if (activeIndex < MILESTONES.length - 1) {
        handleNavigate(activeIndex + 1);
      }
    } else if (diff < -50) {
      if (activeIndex > 0) {
        handleNavigate(activeIndex - 1);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (activeIndex < MILESTONES.length - 1) handleNavigate(activeIndex + 1);
      } else if (e.key === "ArrowLeft") {
        if (activeIndex > 0) handleNavigate(activeIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  const current = MILESTONES[displayIndex];

  // Helper to find active year index
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

  // Dynamic layout measurements
  const getSlideWidth = (aspect: number) => {
    const height = isMobile ? 190 : 330;
    return height * aspect;
  };

  const getTranslateOffset = () => {
    const gap = isMobile ? 16 : 28;
    let offset = 0;
    for (let i = 0; i < activeIndex; i++) {
      offset += getSlideWidth(MILESTONES[i].aspect) + gap;
    }
    offset += getSlideWidth(MILESTONES[activeIndex].aspect) / 2;
    return offset;
  };

  const activeTranslate = getTranslateOffset();

  return (
    <section className="timeline-section w-full py-24 px-4 md:px-6 relative overflow-hidden flex flex-col items-center justify-center select-none">
      
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

        /* Continuous Horizontal Slider CSS Math */
        .timeline-slider-viewport {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 24px 0;
          touch-action: pan-y;
        }

        .timeline-slider-track {
          display: flex;
          align-items: center;
          position: relative;
          left: 50%;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: transform;
          gap: 16px;
          touch-action: pan-y;
        }

        .timeline-slide-item {
          height: 190px;
          background-color: #121212;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          touch-action: pan-y;
        }
        html[data-theme="light"] .timeline-slide-item {
          background-color: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
        }

        @media (min-width: 768px) {
          .timeline-slider-track {
            gap: 28px;
          }
          .timeline-slide-item {
            height: 330px;
          }
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

        .timeline-arrow-btn {
          background-color: rgba(20, 20, 20, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.6);
        }
        .timeline-arrow-btn:hover:not(:disabled) {
          background-color: rgba(30, 30, 30, 0.85);
          border-color: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }
        html[data-theme="light"] .timeline-arrow-btn {
          background-color: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(15, 23, 42, 0.08);
          color: rgba(15, 23, 42, 0.6);
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
        }
        html[data-theme="light"] .timeline-arrow-btn:hover:not(:disabled) {
          background-color: #ffffff;
          border-color: rgba(15, 23, 42, 0.2);
          color: #0f172a;
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
      `}</style>

      {/* Header Section */}
      <div className="text-center mb-10 relative z-10">
        <span className="timeline-header-sub font-mono text-[10px] md:text-[11px] tracking-[0.45em] uppercase mb-2.5 block">
          // CHRONOLOGY OF MILESTONES
        </span>
        <h2 className="timeline-heading text-3xl md:text-5xl font-black tracking-wider uppercase">
          COMPANY GROWTH
        </h2>
        <div className="w-16 h-[2px] bg-cyan-500/50 mx-auto mt-4" />
      </div>

      {/* Continuous Sliding Carousel Viewport */}
      <div className="w-full max-w-6xl relative z-10 flex items-center justify-between">
        
        {/* Left Arrow Button */}
        <div className="absolute left-2 md:left-6 z-20">
          <button
            onClick={() => handleNavigate(activeIndex - 1)}
            disabled={activeIndex === 0}
            className={`timeline-arrow-btn w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 ${
              activeIndex > 0 ? "cursor-pointer opacity-70 hover:opacity-100" : "opacity-15 pointer-events-none"
            }`}
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>

        {/* The Continuous Scroll Row wrapper */}
        <div className="timeline-slider-viewport" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div 
            className="timeline-slider-track"
            style={{
              transform: `translateX(calc(-${activeTranslate}px))`
            }}
          >
            {MILESTONES.map((m, idx) => {
              const isActive = idx === activeIndex;
              const slideWidth = getSlideWidth(m.aspect);
              return (
                <div
                  key={idx}
                  onClick={() => handleNavigate(idx)}
                  className={`timeline-slide-item rounded-2xl flex-shrink-0 cursor-pointer overflow-hidden p-2 transition-all duration-500 ${
                    isActive 
                      ? "scale-100 opacity-100 z-10" 
                      : "scale-90 opacity-25 hover:opacity-45 z-0"
                  }`}
                  style={{
                    width: `${slideWidth}px`,
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
              );
            })}
          </div>
        </div>

        {/* Right Arrow Button */}
        <div className="absolute right-2 md:right-6 z-20">
          <button
            onClick={() => handleNavigate(activeIndex + 1)}
            disabled={activeIndex === MILESTONES.length - 1}
            className={`timeline-arrow-btn w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 ${
              activeIndex < MILESTONES.length - 1 ? "cursor-pointer opacity-70 hover:opacity-100" : "opacity-15 pointer-events-none"
            }`}
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>

      {/* Dynamic Text Information */}
      <div className={`transition-all duration-300 transform ${
        isFading ? "opacity-0 translate-y-3 blur-[1px]" : "opacity-100 translate-y-0 blur-0"
      } text-center mt-6 z-10 relative`}>
        {/* Large Year */}
        <h3 className="timeline-year-text font-mono font-light text-[60px] md:text-[80px] leading-none tracking-tighter select-none">
          {current.year}
        </h3>

        {/* Caption */}
        <p className="timeline-caption text-[17px] md:text-[20px] font-light mt-3 max-w-[620px] mx-auto leading-relaxed px-4">
          {current.sentence}
        </p>
      </div>

      {/* Interactive Bottom Chronological Track (Macro Years) */}
      <div className="w-full max-w-2xl mx-auto mt-14 px-6 relative z-10 select-none">
        
        {/* Track Line Background */}
        <div className="absolute top-[7px] left-8 right-8 h-[2px] timeline-track-bg rounded" />
        
        {/* Track Line Active Fill (Linked to year progress) */}
        <div 
          className="absolute top-[7px] left-8 h-[2px] rounded transition-all duration-500 ease-out"
          style={{ 
            width: `calc(${(activeYearIdx / (TIMELINE_YEARS.length - 1)) * 100}% - ${(activeYearIdx / (TIMELINE_YEARS.length - 1)) * 16}px)`,
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
                onClick={() => handleNavigate(ty.startIndex)}
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
                  className={`text-[11px] md:text-[12px] mt-3.5 transition-colors duration-300 font-mono tracking-wider ${
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
