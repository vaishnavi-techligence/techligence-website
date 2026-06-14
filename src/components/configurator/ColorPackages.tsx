"use client";

import React from 'react';
import { useConfigurator } from '../../contexts/ConfiguratorContext';

const packages = [
  { name: 'MONOLITH', colors: 'Black/White', vibe: 'Timeless', gradient: 'from-[#1A1A1A] to-[#E8E8E8]', primaryVal: '#1A1A1A' },
  { name: 'AQUA', colors: 'Teal/Copper', vibe: 'Fluid', gradient: 'from-[#2A7A8A] to-[#D4AF37]', primaryVal: '#2A7A8A' },
  { name: 'IGNEOUS', colors: 'Orange/Grey', vibe: 'Volcanic', gradient: 'from-[#FF6B35] to-[#6A6A6A]', primaryVal: '#FF6B35' },
  { name: 'ROSE GOLD', colors: 'Blush/Gold', vibe: 'Soft Power', gradient: 'from-[#E8B8C8] to-[#D4AF37]', primaryVal: '#E8B8C8' },
];

export default function ColorPackages() {
  const { updateConfig } = useConfigurator();

  const handleSelectPackage = (primaryVal: string) => {
    updateConfig('primaryColor', primaryVal);
  };

  return (
    <div className="mb-6 border-b border-white/5 pb-6">
      <div className="mb-3">
        <h3 className="text-[10px] font-bold uppercase tracking-[1.5px] text-cyan-400 font-mono">
          CURATED PACKAGES
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-2.5">
        {packages.map((pkg) => (
          <button
            key={pkg.name}
            onClick={() => handleSelectPackage(pkg.primaryVal)}
            className="bg-slate-950/50 hover:bg-slate-900/60 rounded-2xl p-3 text-center hover:scale-[1.02] border border-white/5 hover:border-cyan-400/25 transition-all duration-300 cursor-pointer"
          >
            <div className={`w-full h-10 rounded-lg mb-2 bg-gradient-to-r ${pkg.gradient} border border-white/5`}></div>
            <h4 className="text-xs font-bold text-white group-hover:text-cyan-400">{pkg.name}</h4>
            <p className="text-[9px] text-gray-500 font-mono mt-0.5 uppercase tracking-wider">{pkg.colors} · {pkg.vibe}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
