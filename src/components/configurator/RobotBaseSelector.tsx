"use client";

import React from 'react';
import { LightningIcon } from './Icons';

const robots = [
  { name: 'Joy A-01', role: 'The Gentle Witness', color: 'from-[#E8F4F8]/20 to-[#B8E4F0]/10', disabled: true },
  { name: 'Andy', role: 'The Digital Native', color: 'from-[#5AB0D0]/20 to-[#4A9AB8]/10', disabled: true },
  { name: 'Nova M1', role: 'The Silent Protector', color: 'from-[#6AAACA]/20 to-[#5A9ABA]/10', disabled: true },
  { name: 'Tella S', role: 'The Brave Heart', color: 'from-[#FDF7F0]/20 to-[#F5EDE5]/10', disabled: true },
  { name: 'T-2 MAX', role: 'The Older Brother', color: 'from-[#9AB8C8]/20 to-[#8AA8B8]/10', disabled: true },
  { name: 'T-2 Mini', role: 'The Dreamer', color: 'from-[#FFB347]/20 to-[#FFA01A]/10', disabled: true },
];

export default function RobotBaseSelector() {
  return (
    <div className="mb-7 font-sans">
      <div className="mb-4">
        <h3 className="text-[10px] font-bold uppercase tracking-[1.5px] text-cyan-400 mb-1 font-mono">
          01. SELECT LINEAGE
        </h3>
        <p className="text-[10px] text-gray-500 uppercase tracking-[1px] font-mono">Choose your foundation</p>
      </div>
      
      <div className="grid grid-cols-2 gap-2.5">
        {robots.map((robot) => (
          <div
            key={robot.name}
            className="bg-slate-950/50 rounded-2xl p-3 text-center border border-white/5 transition-all duration-300 cursor-not-allowed opacity-50 select-none hover:shadow-[0_0_15px_rgba(6,182,212,0.05)]"
          >
            <div className={`w-full aspect-square rounded-lg mb-2 bg-gradient-to-br ${robot.color} opacity-40 border border-white/5`}></div>
            <h4 className="text-[13px] font-bold text-white">{robot.name}</h4>
            <p className="text-[10px] text-gray-500 mt-0.5">{robot.role}</p>
            <span className="text-[9px] text-cyan-400 block mt-2 font-mono uppercase tracking-wider font-bold">Coming Soon</span>
          </div>
        ))}
      </div>
      
      <div className="mt-3 text-center flex items-center justify-center gap-1">
        <LightningIcon className="w-3.5 h-3.5 text-cyan-400" />
        <span className="text-[10px] text-gray-500 font-mono">6 unique personalities. Yours to discover.</span>
      </div>
    </div>
  );
}
