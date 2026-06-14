"use client";

import React, { useState, useEffect } from 'react';
import { useConfigurator } from '../../contexts/ConfiguratorContext';
import ColorSuggestionBox, { ColorSuggestion } from './ColorSuggestionBox';

const primaryColors = [
  { name: 'Celestial White', value: '#F0F4F8' },
  { name: 'Midnight Carbon', value: '#1A2A2F' },
  { name: 'Solar Flare', value: '#FF6B35' },
  { name: 'Deep Ocean', value: '#2A5F7A' },
  { name: 'Forest Verdant', value: '#3A7A5A' },
  { name: 'Aurora Violet', value: '#7B2F9D' },
  { name: 'Terracotta Dawn', value: '#D47A4A' },
  { name: 'Industrial Yellow', value: '#F5C542' },
  { name: 'Liquid Silver', value: '#C8D8E0' },
  { name: 'Obsidian Black', value: '#0A1217' },
  { name: 'Rose Quartz', value: '#E8B8C8' },
  { name: 'Plasma Green', value: '#4ACA6A' },
];

const glowOptions = ['None', 'Cyan', 'Amber', 'Magenta', 'Ice Blue', 'Warm Pulse', 'Gold'];

export default function ColorSystem() {
  const { config, updateConfig } = useConfigurator();
  
  const [selectedPrimary, setSelectedPrimary] = useState<string | null>(config.primaryColor);
  const [selectedSecondary, setSelectedSecondary] = useState<string | null>(config.secondaryColor);
  const [selectedGlow, setSelectedGlow] = useState<string>(config.glowColor);
  const [glowIntensity, setGlowIntensity] = useState<number>(config.glowIntensity);

  // Sync state with global config when config updates (e.g. from packages or suggestions)
  useEffect(() => {
    setSelectedPrimary(config.primaryColor);
  }, [config.primaryColor]);

  useEffect(() => {
    setSelectedSecondary(config.secondaryColor);
  }, [config.secondaryColor]);

  useEffect(() => {
    setSelectedGlow(config.glowColor);
  }, [config.glowColor]);

  const handleSelectPrimary = (value: string) => {
    setSelectedPrimary(value);
    updateConfig('primaryColor', value);
  };

  const handleSelectSecondary = (value: string) => {
    setSelectedSecondary(value);
    updateConfig('secondaryColor', value);
  };

  const handleSelectGlow = (value: string) => {
    setSelectedGlow(value);
    updateConfig('glowColor', value);
  };

  const handleChangeIntensity = (value: number) => {
    setGlowIntensity(value);
    updateConfig('glowIntensity', value);
  };

  const handleApplySuggestion = ({ primary, secondary, glow }: ColorSuggestion) => {
    setSelectedPrimary(primary);
    setSelectedSecondary(secondary);
    setSelectedGlow(glow);
    
    updateConfig('primaryColor', primary);
    updateConfig('secondaryColor', secondary);
    updateConfig('glowColor', glow);
    
    // Smooth scroll patch
    if (typeof document !== 'undefined') {
      document.querySelector('.swatch-grid')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div className="mb-7 border-b border-white/5 pb-6">
      <div className="mb-4">
        <h3 className="text-[10px] font-bold uppercase tracking-[1.5px] text-cyan-400 mb-1 font-mono">
          02. COLOR PERSONALITY
        </h3>
        <p className="text-[10px] text-gray-500 uppercase tracking-[1px] font-mono">Choose your robot's energy</p>
      </div>

      {/* ✨ AI Color Ambience Assistant */}
      <ColorSuggestionBox onApplySuggestion={handleApplySuggestion} />
      
      {/* Primary Colors */}
      <div className="mb-4 swatch-grid">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400 font-semibold">Primary Body</span>
          <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">Dominant energy</span>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {primaryColors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleSelectPrimary(color.value)}
              className={`aspect-square rounded-xl transition-all cursor-pointer ${
                selectedPrimary === color.value
                  ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#050816] scale-105 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                  : 'hover:scale-105 border border-white/5'
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Secondary Accent Colors */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400 font-semibold">Secondary Accent</span>
          <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">For joints, sensors</span>
        </div>
        <div className="grid grid-cols-8 gap-1.5">
          {primaryColors.slice(0, 8).map((color) => (
            <button
              key={color.name}
              onClick={() => handleSelectSecondary(color.value)}
              className={`w-full aspect-square rounded-lg transition-all cursor-pointer ${
                selectedSecondary === color.value
                  ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#050816] scale-105 shadow-[0_0_8px_rgba(6,182,212,0.4)]'
                  : 'hover:scale-105 border border-white/5'
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>
      
      {/* Glow Color - Premium */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400 font-semibold">Glow Color</span>
          <span className="text-[10px] text-[#FFB347] font-semibold font-mono">✦ PREMIUM</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {glowOptions.map((glow) => (
            <button
              key={glow}
              onClick={() => handleSelectGlow(glow)}
              className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition cursor-pointer ${
                selectedGlow === glow
                  ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.25)]'
                  : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {glow}
            </button>
          ))}
        </div>
        {selectedGlow !== 'None' && (
          <div className="flex items-center gap-3 bg-white/5 px-3 py-2 border border-white/5 rounded-xl mt-3 animate-in fade-in duration-300">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-mono">Intensity</span>
            <input
              type="range"
              min="0"
              max="100"
              value={glowIntensity}
              onChange={(e) => handleChangeIntensity(Number(e.target.value))}
              className="flex-1 h-1 bg-slate-950 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 cursor-pointer shadow-[0_0_8px_rgba(6,182,212,0.5)]"
            />
            <span className="text-[10px] text-cyan-400 font-bold font-mono">{glowIntensity}%</span>
          </div>
        )}
      </div>

      {/* Applied Suggestion Feedback */}
      {(selectedPrimary || selectedSecondary) && (
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Current scheme:</span>
            <div className="flex gap-1">
              {selectedPrimary && <div className="w-5 h-5 rounded-md border border-white/5" style={{ backgroundColor: selectedPrimary }} title={`Primary: ${selectedPrimary}`}></div>}
              {selectedSecondary && <div className="w-5 h-5 rounded-md border border-white/5" style={{ backgroundColor: selectedSecondary }} title={`Secondary: ${selectedSecondary}`}></div>}
            </div>
          </div>
          <span className="text-[9px] text-cyan-400 font-bold uppercase tracking-wider font-mono">Glow: {selectedGlow}</span>
        </div>
      )}
    </div>
  );
}
