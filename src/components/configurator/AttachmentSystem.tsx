"use client";

import React, { useState } from 'react';
import { useConfigurator } from '../../contexts/ConfiguratorContext';

const shoulderOptions = ['None', 'Light Panel', 'Cargo Hook', 'Shield', 'Scanner Array'];
const backOptions = ['None', 'Battery Pack', 'Storage Unit', 'Sensor Hub'];

export default function AttachmentSystem() {
  const { config, updateConfig } = useConfigurator();
  const [shoulder, setShoulder] = useState<string>(config.attachments.shoulder);
  const [back, setBack] = useState<string>(config.attachments.back);

  const handleSelectShoulder = (opt: string) => {
    setShoulder(opt);
    updateConfig('attachments', {
      ...config.attachments,
      shoulder: opt,
    });
  };

  const handleSelectBack = (opt: string) => {
    setBack(opt);
    updateConfig('attachments', {
      ...config.attachments,
      back: opt,
    });
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="text-[10px] text-gray-500 uppercase tracking-wider font-mono font-bold block mb-2.5">
          Shoulder Attachments
        </label>
        <div className="flex flex-wrap gap-1.5">
          {shoulderOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelectShoulder(opt)}
              className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                shoulder === opt
                  ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.25)] border-transparent'
                  : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="text-[10px] text-gray-500 uppercase tracking-wider font-mono font-bold block mb-2.5">
          Back Mount Accessories
        </label>
        <div className="flex flex-wrap gap-1.5">
          {backOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelectBack(opt)}
              className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                back === opt
                  ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.25)] border-transparent'
                  : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
