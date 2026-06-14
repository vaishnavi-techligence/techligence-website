"use client";

import React, { useState } from 'react';
import { useConfigurator } from '../../contexts/ConfiguratorContext';

const stitches = [
  { name: 'Heritage Stitch', pattern: 'repeating-linear-gradient(90deg,#D4AF37,#D4AF37_4px,#1A1A1A_4px,#1A1A1A_8px)' },
  { name: 'Monolith Seam', pattern: '#4A6A7A' },
  { name: 'Tech Trace', pattern: 'repeating-linear-gradient(90deg,#00D4FF,#00D4FF_2px,#1A1A1A_2px,#1A1A1A_6px)' },
  { name: 'Industrial Grid', pattern: 'repeating-linear-gradient(90deg,#D4AF37,#D4AF37_4px,#1A1A1A_4px,#1A1A1A_8px)' },
];

export default function StitchingSystem() {
  const { config, updateConfig } = useConfigurator();
  const [selectedStitch, setSelectedStitch] = useState<string | null>(config.selectedStitch);

  const handleSelectStitch = (name: string) => {
    setSelectedStitch(name);
    updateConfig('selectedStitch', name);
  };

  return (
    <div className="mb-7 border-b border-white/5 pb-6">
      <div className="mb-4">
        <h3 className="text-[10px] font-bold uppercase tracking-[1.5px] text-cyan-400 mb-1 font-mono">
          04. CRAFT SIGNATURE
        </h3>
        <p className="text-[10px] text-gray-500 uppercase tracking-[1px] font-mono">The details that matter</p>
      </div>
      
      <div className="grid grid-cols-2 gap-2.5">
        {stitches.map((stitch) => (
          <button
            key={stitch.name}
            onClick={() => handleSelectStitch(stitch.name)}
            className={`bg-slate-950/50 hover:bg-slate-900/60 rounded-2xl p-3 text-center transition-all duration-300 border cursor-pointer ${
              selectedStitch === stitch.name 
                ? 'border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.15)]' 
                : 'border-white/5 hover:border-cyan-400/25'
            }`}
          >
            <div className="w-full h-7 rounded-lg mb-2 border border-white/5" style={{ background: stitch.pattern }}></div>
            <h4 className="text-[11px] font-bold text-white">{stitch.name}</h4>
          </button>
        ))}
      </div>
    </div>
  );
}
