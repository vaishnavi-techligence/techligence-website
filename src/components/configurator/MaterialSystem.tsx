"use client";

import React, { useState } from 'react';
import { useConfigurator } from '../../contexts/ConfiguratorContext';

const materials = [
  { name: 'Premium Fabric', description: 'Warm, sound-dampening', pattern: 'fabric', bestFor: 'Companions, Healthcare' },
  { name: 'Brushed Aluminum', description: 'Industrial elegance', pattern: 'metal', bestFor: 'Logistics, Manufacturing' },
  { name: 'Lunar Granite', description: 'Monumental presence', pattern: 'granite', bestFor: 'Premium, Security', premium: true },
];

export default function MaterialSystem() {
  const { config, updateConfig } = useConfigurator();
  const [blend, setBlend] = useState<number>(config.materialBlend);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(config.selectedMaterial);

  const handleBlendChange = (val: number) => {
    setBlend(val);
    updateConfig('materialBlend', val);
  };

  const handleSelectMaterial = (name: string) => {
    setSelectedMaterial(name);
    updateConfig('selectedMaterial', name);
  };

  return (
    <div className="mb-7 border-b border-white/5 pb-6">
      <div className="mb-4">
        <h3 className="text-[10px] font-bold uppercase tracking-[1.5px] text-cyan-400 mb-1 font-mono">
          03. MATERIAL SOUL
        </h3>
        <p className="text-[10px] text-gray-500 uppercase tracking-[1px] font-mono">Soft or hard? Warm or cold?</p>
      </div>
      
      {/* Material Blend Slider */}
      <div className="bg-slate-950/50 border border-white/5 rounded-2xl p-4 mb-4">
        <div className="flex justify-between text-[9px] text-gray-500 uppercase tracking-wider font-mono font-bold mb-2.5">
          <span>Soft Fabric</span>
          <span>Balanced</span>
          <span>Hard Metal</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={blend}
          onChange={(e) => handleBlendChange(Number(e.target.value))}
          className="w-full h-1 bg-slate-950 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-slate-950 cursor-pointer shadow-[0_0_8px_rgba(6,182,212,0.5)]"
        />
      </div>
      
      {/* Material Cards */}
      <div className="space-y-2">
        {materials.map((material) => (
          <div
            key={material.name}
            onClick={() => handleSelectMaterial(material.name)}
            className={`bg-slate-950/50 rounded-2xl p-3 flex gap-3 cursor-pointer transition-all duration-300 border ${
              selectedMaterial === material.name
                ? 'border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.15)] translate-x-1'
                : 'border-white/5 hover:border-cyan-400/30 hover:bg-slate-900/60 hover:translate-x-1'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl border border-white/5 shrink-0 ${
              material.pattern === 'fabric' ? 'bg-[repeating-linear-gradient(45deg,#8AA4AE,#8AA4AE_4px,#6A8A9A_4px,#6A8A9A_8px)]' :
              material.pattern === 'metal' ? 'bg-gradient-to-br from-[#C8D8E0] to-[#A8B8C0]' :
              'bg-[radial-gradient(circle_at_30%_40%,#8A7A60_1px,#6A5A40_1px)] bg-[length:6px_6px]'
            }`}></div>
            <div>
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                {material.name} {material.premium && <span className="text-[#FFB347] font-mono text-[10px]">★</span>}
              </h4>
              <p className="text-[10px] text-gray-500 mt-0.5">{material.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
