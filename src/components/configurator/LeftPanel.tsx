"use client";

import React from 'react';
import { useConfigurator } from '../../contexts/ConfiguratorContext';


const THEMES = [
  'Accent - Gold & White',
  'Blue - Mocha',
  'Gold on Gold',
  'Black & Gold',
  'Pearl & White',
  'White & Blue'
];

interface LeftPanelProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function LeftPanel({ activeTab, setActiveTab }: LeftPanelProps) {
  const { config, updateConfig } = useConfigurator();

  return (
    <div className="w-[360px] bg-slate-950/60 backdrop-blur-xl border-r border-white/5 overflow-y-auto p-5 shrink-0 z-10 flex flex-col gap-6">
      
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
          return (
            <button
              key={theme}
              onClick={() => updateConfig('selectedTheme', theme)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                isActive 
                  ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                  : 'bg-white/5 border-white/10 hover:border-cyan-400/50 hover:bg-white/10'
              }`}
            >
              <div className="font-bold tracking-wide">{theme}</div>
            </button>
          );
        })}
      </div>
      


    </div>
  );
}
