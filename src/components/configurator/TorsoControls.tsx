"use client";

import React, { useState } from 'react';
import { useConfigurator } from '../../contexts/ConfiguratorContext';

const shapes = ['Classic', 'Broad', 'Slim', 'Sculpted'];

export default function TorsoControls() {
  const { config, updateConfig } = useConfigurator();
  const [selectedShape, setSelectedShape] = useState<string>(config.torsoShape);
  const [overrideGlobal, setOverrideGlobal] = useState<boolean>(config.torsoOverride);
  const [panelVisibility, setPanelVisibility] = useState<number>(40);

  const handleSelectShape = (shape: string) => {
    setSelectedShape(shape);
    updateConfig('torsoShape', shape);
  };

  const handleToggleOverride = () => {
    const newVal = !overrideGlobal;
    setOverrideGlobal(newVal);
    updateConfig('torsoOverride', newVal);
  };

  return (
    <div className="mb-6 border-b border-white/5 pb-6">
      <div className="mb-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-1">Torso Customization</h3>
        <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wide">The character's core structure</p>
      </div>
      
      {/* Shape Presets */}
      <div className="flex gap-2.5 mb-5 select-none">
        {shapes.map((shape) => (
          <button
            key={shape}
            onClick={() => handleSelectShape(shape)}
            className="flex-1 text-center p-2 rounded-2xl border border-white/5 bg-slate-950/50 hover:bg-slate-900/60 hover:border-cyan-400/20 transition-all duration-300 cursor-pointer"
          >
            <div className={`w-full h-12 rounded-lg mb-1.5 opacity-70 border border-white/5 ${
              shape === 'Classic' ? 'bg-gradient-to-br from-[#4A6A7A]/40 to-[#3A5A6A]/20' :
              shape === 'Broad' ? 'bg-gradient-to-br from-[#5A7A8A]/40 to-[#4A6A7A]/20 w-[110%] -ml-[5%]' :
              shape === 'Slim' ? 'bg-gradient-to-br from-[#3A5A6A]/40 to-[#2A4A5A]/20 w-4/5 mx-auto' :
              'bg-gradient-to-br from-[#4A6A7A]/40 to-[#3A5A6A]/20 [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]'
            }`}></div>
            <span className={`text-[10px] uppercase font-bold tracking-wider font-mono ${selectedShape === shape ? 'text-cyan-400' : 'text-gray-400'}`}>
              {shape}
            </span>
          </button>
        ))}
      </div>
      
      {/* Material Override Toggle */}
      <div className="flex items-center justify-between p-3.5 bg-slate-950/50 border border-white/5 rounded-2xl mb-4">
        <span className="text-[11px] text-gray-300 font-bold uppercase tracking-wider font-mono">Torso Material Override</span>
        <button
          onClick={handleToggleOverride}
          className={`w-10 h-5 rounded-full transition-all duration-300 cursor-pointer ${overrideGlobal ? 'bg-cyan-400' : 'bg-slate-800'} relative`}
        >
          <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-md transition-all duration-300 ${overrideGlobal ? 'right-0.5' : 'left-0.5'}`} />
        </button>
      </div>
      
      {/* Panel Detailing */}
      <div className="bg-slate-950/50 border border-white/5 rounded-2xl p-4">
        <div className="flex justify-between text-[10px] text-gray-500 font-mono font-bold uppercase mb-2">
          <span>Panel Line Depth</span>
          <span className="text-cyan-400">{panelVisibility}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={panelVisibility}
          onChange={(e) => setPanelVisibility(Number(e.target.value))}
          className="w-full h-1 bg-slate-950 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 cursor-pointer shadow-[0_0_8px_rgba(6,182,212,0.5)]"
        />
      </div>
    </div>
  );
}
