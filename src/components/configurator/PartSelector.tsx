"use client";

import React from 'react';
import { StarIcon, LockIcon } from './Icons';

const parts = [
  { id: 'head', name: 'Head', locked: true },
  { id: 'torso', name: 'Torso', active: true, star: true },
  { id: 'arms', name: 'Arms', coming: true },
  { id: 'chassis', name: 'Chassis', coming: true },
];

interface PartSelectorProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function PartSelector({ activeTab, setActiveTab }: PartSelectorProps) {
  return (
    <div className="flex gap-1.5 mb-6 bg-slate-950 p-1 border border-white/5 rounded-full select-none">
      {parts.map((part) => (
        <button
          key={part.id}
          onClick={() => !part.coming && setActiveTab(part.id)}
          disabled={part.coming}
          className={`
            flex-1 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-1
            ${activeTab === part.id 
              ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.25)]' 
              : part.coming 
                ? 'text-gray-600 cursor-not-allowed' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }
          `}
        >
          <span>{part.name}</span>
          {part.star && <StarIcon className="text-slate-950" />}
          {part.locked && <LockIcon className="w-3 h-3 text-gray-500" />}
          {part.coming && <span className="text-[8px] opacity-75 font-mono">Soon</span>}
        </button>
      ))}
    </div>
  );
}
