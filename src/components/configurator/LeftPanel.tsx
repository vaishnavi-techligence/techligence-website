"use client";

import React from 'react';
import { useConfigurator } from '../../contexts/ConfiguratorContext';


const THEMES = [
  'Arctic Horizon',
  'Midnight Ember',
  'Imperial Luxe',
  'Pearl Essence',
  'Obsidian Royale',
  'Custom Theme'
];

interface LeftPanelProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function LeftPanel({ activeTab, setActiveTab }: LeftPanelProps) {
  const { config, updateConfig } = useConfigurator();

  return (
    <div className="w-full lg:w-[360px] flex-1 lg:flex-none bg-slate-950/60 backdrop-blur-xl border-t lg:border-t-0 lg:border-r border-white/5 overflow-y-auto p-5 shrink-0 z-10 flex flex-col gap-6">
      
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold font-mono tracking-widest text-cyan-400 uppercase">
          T2 Custom Themes
        </h2>
      </div>
      
      <p className="text-sm text-gray-400 leading-relaxed">
        Select a predefined design theme crafted by our design team for your T2 robot.
      </p>

      <div className="space-y-4">
        {THEMES.map((theme) => {
          const isActive = config.selectedTheme === theme;
          const isCustom = theme === 'Custom Theme';
          return (
            <button
              key={theme}
              onClick={() => updateConfig('selectedTheme', theme)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                isActive 
                  ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                  : isCustom
                    ? 'bg-white/5 border-cyan-500/30 hover:border-cyan-400/80 hover:bg-white/10'
                    : 'bg-white/5 border-white/10 hover:border-cyan-400/50 hover:bg-white/10'
              }`}
            >
              <div className="font-bold tracking-wide flex items-center justify-between">
                <span className={isCustom && !isActive ? 'text-cyan-200' : ''}>{theme}</span>
                {isCustom && <span className="text-cyan-500/70 text-sm">✦</span>}
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Custom Color Controls */}
      {config.selectedTheme === 'Custom Theme' && (
        <div className="mt-2 p-5 rounded-xl bg-slate-950/40 border border-cyan-500/30 space-y-5 animate-fade-in shadow-[0_0_20px_rgba(6,182,212,0.1)]">
          <h3 className="text-xs font-bold text-cyan-400 font-mono uppercase tracking-widest border-b border-cyan-500/20 pb-2">
            Custom Colors
          </h3>
          
          <div className="flex justify-between items-center">
            <div>
              <label className="text-[11px] text-gray-300 font-bold uppercase tracking-wider block">Base Colour</label>
              <span className="text-[9px] text-gray-500 font-mono uppercase">Main Chassis</span>
            </div>
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10 shadow-inner cursor-pointer">
              <input 
                type="color" 
                value={config.primaryColor || '#ffffff'} 
                onChange={(e) => updateConfig('primaryColor', e.target.value)}
                className="absolute inset-[-10px] w-[200%] h-[200%] cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <label className="text-[11px] text-gray-300 font-bold uppercase tracking-wider block">Accent Colour</label>
              <span className="text-[9px] text-gray-500 font-mono uppercase">Handles & Accents</span>
            </div>
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10 shadow-inner cursor-pointer">
              <input 
                type="color" 
                value={config.secondaryColor || '#2A5F7A'} 
                onChange={(e) => updateConfig('secondaryColor', e.target.value)}
                className="absolute inset-[-10px] w-[200%] h-[200%] cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
