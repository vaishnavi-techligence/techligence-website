"use client";

import React, { useState } from 'react';
import ColorSystem from './ColorSystem';
import MaterialSystem from './MaterialSystem';
import StitchingSystem from './StitchingSystem';
import TextureEngine from './TextureEngine';
import RobotBaseSelector from './RobotBaseSelector';
import { useConfigurator } from '../../contexts/ConfiguratorContext';
import { PaletteIcon, LayerIcon, ThreadIcon, MicroscopeIcon, LightningIcon, SparklesIcon } from './Icons';

export default function LeftPanel() {
  const { config } = useConfigurator();

  // Collapsible categories state
  const [expandedSections, setExpandedSections] = useState({
    exterior: true,    // Expanded by default
    materials: false,  // Collapsed by default
    stitching: false,  // Collapsed by default
    texture: false,    // Collapsed by default
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Calculate customization progress dynamically from context
  const customizedCount = [
    config.primaryColor !== null,
    config.selectedMaterial !== null,
    config.selectedStitch !== null,
    config.selectedTexture !== null
  ].filter(Boolean).length;

  const progressPercent = (customizedCount / 4) * 100;

  const handleExpandAll = () => {
    setExpandedSections({
      exterior: true,
      materials: true,
      stitching: true,
      texture: true,
    });
  };

  const handleCollapseAll = () => {
    setExpandedSections({
      exterior: false,
      materials: false,
      stitching: false,
      texture: false,
    });
  };

  return (
    <div className="w-[320px] bg-slate-950/60 backdrop-blur-xl border-r border-white/5 overflow-y-auto p-5 shrink-0 z-10 select-none">
      
      {/* Personalized Progress Tracker (Premium Polish) */}
      <div className="mb-6 bg-slate-950/50 border border-white/5 rounded-2xl p-3.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider font-mono flex items-center gap-1">
            <LightningIcon className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            Customization Progress
          </span>
          <span className="text-[10px] text-cyan-400 font-bold font-mono">{customizedCount} / 4</span>
        </div>
        <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-white/5">
          <div 
            className="bg-gradient-to-r from-cyan-400 to-violet-500 h-full rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        
        {/* Toggle Utilities */}
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
          <button 
            onClick={handleExpandAll}
            className="text-[9px] uppercase tracking-wider font-mono font-bold text-gray-500 hover:text-cyan-400 transition cursor-pointer"
          >
            Expand All
          </button>
          <button 
            onClick={handleCollapseAll}
            className="text-[9px] uppercase tracking-wider font-mono font-bold text-gray-500 hover:text-cyan-400 transition cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Section 1: Robot Base Selection (Always Visible) */}
      <div className="border-b border-white/5 pb-4 mb-3">
        <RobotBaseSelector />
      </div>

      {/* Accordion Categories Container */}
      <div className="space-y-2">
        
        {/* 1. EXTERIOR CATEGORY */}
        <div className="border-b border-white/5 pb-3">
          <button
            onClick={() => toggleSection('exterior')}
            className="w-full flex items-center justify-between py-2 text-left group cursor-pointer hover:bg-white/5 px-2 rounded-xl transition duration-200"
          >
            <div className="flex items-center gap-2">
              <PaletteIcon className={`w-4.5 h-4.5 ${expandedSections.exterior ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'} transition-colors`} />
              <h3 className={`text-[11px] font-bold uppercase tracking-wider font-mono transition-colors ${expandedSections.exterior ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'}`}>
                EXTERIOR
              </h3>
            </div>
            <span className={`text-cyan-400 text-[9px] transition-transform duration-200 ${expandedSections.exterior ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          {/* Preview Chips (Collapsed State) */}
          {!expandedSections.exterior && (
            <div className="flex gap-1.5 mt-1.5 ml-8 overflow-x-auto no-scrollbar">
              {['Paint', 'Glow', 'Accents'].map(chip => (
                <span key={chip} className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/5 rounded-full text-gray-500 font-mono uppercase font-bold tracking-wider">
                  {chip}
                </span>
              ))}
            </div>
          )}

          {/* Collapsible Content */}
          {expandedSections.exterior && (
            <div className="mt-3 animate-slide-in ml-2">
              <ColorSystem />
            </div>
          )}
        </div>

        {/* 2. MATERIALS CATEGORY */}
        <div className="border-b border-white/5 pb-3">
          <button
            onClick={() => toggleSection('materials')}
            className="w-full flex items-center justify-between py-2 text-left group cursor-pointer hover:bg-white/5 px-2 rounded-xl transition duration-200"
          >
            <div className="flex items-center gap-2">
              <LayerIcon className={`w-4.5 h-4.5 ${expandedSections.materials ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'} transition-colors`} />
              <h3 className={`text-[11px] font-bold uppercase tracking-wider font-mono transition-colors ${expandedSections.materials ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'}`}>
                MATERIALS
              </h3>
            </div>
            <span className={`text-cyan-400 text-[9px] transition-transform duration-200 ${expandedSections.materials ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          {/* Preview Chips (Collapsed State) */}
          {!expandedSections.materials && (
            <div className="flex gap-1.5 mt-1.5 ml-8 overflow-x-auto no-scrollbar">
              {['Soft', 'Hard', 'Granite'].map(chip => (
                <span key={chip} className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/5 rounded-full text-gray-500 font-mono uppercase font-bold tracking-wider">
                  {chip}
                </span>
              ))}
            </div>
          )}

          {/* Collapsible Content */}
          {expandedSections.materials && (
            <div className="mt-3 animate-slide-in ml-2">
              <MaterialSystem />
            </div>
          )}
        </div>

        {/* 3. STITCHING CATEGORY */}
        <div className="border-b border-white/5 pb-3">
          <button
            onClick={() => toggleSection('stitching')}
            className="w-full flex items-center justify-between py-2 text-left group cursor-pointer hover:bg-white/5 px-2 rounded-xl transition duration-200"
          >
            <div className="flex items-center gap-2">
              <ThreadIcon className={`w-4.5 h-4.5 ${expandedSections.stitching ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'} transition-colors`} />
              <h3 className={`text-[11px] font-bold uppercase tracking-wider font-mono transition-colors ${expandedSections.stitching ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'}`}>
                STITCHING
              </h3>
            </div>
            <span className={`text-cyan-400 text-[9px] transition-transform duration-200 ${expandedSections.stitching ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          {/* Preview Chips (Collapsed State) */}
          {!expandedSections.stitching && (
            <div className="flex gap-1.5 mt-1.5 ml-8 overflow-x-auto no-scrollbar">
              {['Heritage', 'Monolith', 'Tech'].map(chip => (
                <span key={chip} className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/5 rounded-full text-gray-500 font-mono uppercase font-bold tracking-wider">
                  {chip}
                </span>
              ))}
            </div>
          )}

          {/* Collapsible Content */}
          {expandedSections.stitching && (
            <div className="mt-3 animate-slide-in ml-2">
              <StitchingSystem />
            </div>
          )}
        </div>

        {/* 4. TEXTURE CATEGORY */}
        <div className="pb-2">
          <button
            onClick={() => toggleSection('texture')}
            className="w-full flex items-center justify-between py-2 text-left group cursor-pointer hover:bg-white/5 px-2 rounded-xl transition duration-200"
          >
            <div className="flex items-center gap-2">
              <MicroscopeIcon className={`w-4.5 h-4.5 ${expandedSections.texture ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'} transition-colors`} />
              <h3 className={`text-[11px] font-bold uppercase tracking-wider font-mono transition-colors ${expandedSections.texture ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'}`}>
                TEXTURE
              </h3>
            </div>
            <span className={`text-cyan-400 text-[9px] transition-transform duration-200 ${expandedSections.texture ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          {/* Preview Chips (Collapsed State) */}
          {!expandedSections.texture && (
            <div className="flex gap-1.5 mt-1.5 ml-8 overflow-x-auto no-scrollbar">
              {['Matte', 'Brushed', 'Carbon'].map(chip => (
                <span key={chip} className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/5 rounded-full text-gray-500 font-mono uppercase font-bold tracking-wider">
                  {chip}
                </span>
              ))}
            </div>
          )}

          {/* Collapsible Content */}
          {expandedSections.texture && (
            <div className="mt-3 animate-slide-in ml-2">
              <TextureEngine />
            </div>
          )}
        </div>

      </div>

      {/* Accordion slide-in keyframe helper style */}
      <style>{`
        @keyframes slideInFromTop {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slideInFromTop 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Subtle bottom helper tag */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-1.5 text-gray-500 select-none">
        <SparklesIcon className="w-3.5 h-3.5 text-cyan-400/50" />
        <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-center">
          Click any section to explore
        </span>
      </div>

    </div>
  );
}
