"use client";

import React, { useState } from 'react';
import { useConfigurator } from '../../contexts/ConfiguratorContext';

const textures = [
  { name: 'Micro-Grid', scale: '1.0x', pattern: 'grid' },
  { name: 'Honeycomb', scale: '1.5x', pattern: 'hex' },
  { name: 'Fiber Weave', scale: '0.8x', pattern: 'weave' },
  { name: 'Smooth Satin', scale: '0.0x', pattern: 'smooth' },
];

export default function TextureEngine() {
  const { config, updateConfig } = useConfigurator();
  const [selectedTexture, setSelectedTexture] = useState<string | null>(config.selectedTexture || 'Micro-Grid');
  const [textureScale, setTextureScale] = useState(50);

  const handleSelectTexture = (name: string) => {
    setSelectedTexture(name);
    updateConfig('selectedTexture', name);
  };

  return (
    <div className="mb-4">
      <div className="mb-4">
        <h3 className="text-[10px] font-bold uppercase tracking-[1.5px] text-cyan-400 mb-1 font-mono">
          05. TEXTURE ENGINE
        </h3>
        <p className="text-[10px] text-gray-500 uppercase tracking-[1px] font-mono">Micro-detailing of the surface</p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {textures.map((texture) => (
          <button
            key={texture.name}
            onClick={() => handleSelectTexture(texture.name)}
            className={`bg-slate-950/50 hover:bg-slate-900/60 rounded-2xl p-3 text-center transition-all duration-300 border cursor-pointer ${
              selectedTexture === texture.name 
                ? 'border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.15)]' 
                : 'border-white/5 hover:border-cyan-400/25'
            }`}
          >
            <div className="w-full h-7 rounded-lg mb-2 flex items-center justify-center bg-slate-950 border border-white/5 text-[9px] font-bold text-gray-500 font-mono tracking-wider">
              {texture.pattern.toUpperCase()}
            </div>
            <h4 className="text-[11px] font-bold text-white">{texture.name}</h4>
            <span className="text-[9px] text-gray-500 font-mono mt-0.5 block">{texture.scale} Scale</span>
          </button>
        ))}
      </div>

      <div className="bg-slate-950/50 border border-white/5 rounded-2xl p-4">
        <div className="flex justify-between text-[10px] text-gray-500 font-mono font-bold uppercase mb-2">
          <span>Relief Depth</span>
          <span className="text-cyan-400">{textureScale}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={textureScale}
          onChange={(e) => setTextureScale(Number(e.target.value))}
          className="w-full h-1 bg-slate-950 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 cursor-pointer shadow-[0_0_8px_rgba(6,182,212,0.5)]"
        />
      </div>
    </div>
  );
}
