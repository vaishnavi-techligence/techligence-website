"use client";

import React from 'react';
import { useConfigurator } from '../../contexts/ConfiguratorContext';
import { HospitalIcon, HomeIcon, SparklesIcon, MountainIcon } from './Icons';

export default function EnvironmentSelector() {
  const { config, updateConfig } = useConfigurator();

  const environments = [
    { name: 'None', preset: 'None', icon: <SparklesIcon className="w-4 h-4" /> },
    { name: 'Hospital', preset: 'Hospital', icon: <HospitalIcon className="w-4 h-4" /> },
    { name: 'Luxury Hotel', preset: 'Luxury Hotel', icon: <HomeIcon className="w-4 h-4" /> },
    { name: 'Studio', preset: 'Studio', icon: <MountainIcon className="w-4 h-4" /> },
  ];

  return (
    <div className="mb-7 border-b border-white/5 pb-6">
      <div className="flex items-center gap-2 mb-4">
        <SparklesIcon className="w-4 h-4 text-cyan-400" />
        <h3 className="text-xs font-bold uppercase tracking-widest text-white">3D Environment</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {environments.map((env) => (
          <button
            key={env.preset}
            onClick={() => updateConfig('environment', env.preset)}
            className={`flex items-center gap-2 p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
              config.environment === env.preset
                ? 'bg-cyan-500/10 border-cyan-400/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                : 'bg-slate-950/50 border-white/5 text-gray-400 hover:bg-slate-900/60 hover:text-white hover:border-white/20'
            }`}
          >
            <div className={`shrink-0 ${config.environment === env.preset ? 'text-cyan-400' : 'text-gray-500'}`}>
              {env.icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">{env.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
