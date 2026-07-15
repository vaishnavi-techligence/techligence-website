"use client";

import React, { useState } from 'react';
import ColorSystem from './ColorSystem';
import MaterialSystem from './MaterialSystem';
import StitchingSystem from './StitchingSystem';
import TextureEngine from './TextureEngine';
import { useConfigurator } from '../../contexts/ConfiguratorContext';
import { PaletteIcon, LayerIcon, ThreadIcon, MicroscopeIcon, LightningIcon, SparklesIcon } from './Icons';
import ColorSuggestionBox, { ColorSuggestion } from './ColorSuggestionBox';
import EnvironmentSelector from './EnvironmentSelector';
import RobotBaseSelector from './RobotBaseSelector';
import PartSelector from './PartSelector';

interface LeftPanelProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function LeftPanel({ activeTab, setActiveTab }: LeftPanelProps) {
  const { config, updateConfig } = useConfigurator();

  const handleApplySuggestion = ({ primary, secondary, glow }: ColorSuggestion) => {
    updateConfig('primaryColor', primary);
    updateConfig('secondaryColor', secondary);
    updateConfig('glowColor', glow);
  };

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
      
      {/* Part Selector */}
      <PartSelector activeTab={activeTab} setActiveTab={setActiveTab} />


      {/* ✨ AI Color Ambience Assistant (Moved to top) */}
      {/* Ambience Presets & AI */}
      <div className="mb-6">
        <EnvironmentSelector />
        
        <ColorSuggestionBox onApplySuggestion={handleApplySuggestion} />
      </div>

      {/* Removed Robot Base Selector from here to move to the other panel */}

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
              <span className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/5 rounded-full text-gray-500 font-mono uppercase font-bold tracking-wider">
                Select
              </span>
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
          
          {/* Collapsible Content */}
          {expandedSections.stitching && (
            <div className="mt-3 animate-slide-in ml-2">
              <StitchingSystem />
            </div>
          )}
        </div>

        {/* 4. TEXTURE CATEGORY */}
        <div className="border-b border-white/5 pb-3">
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
              <span className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/5 rounded-full text-gray-500 font-mono uppercase font-bold tracking-wider">
                Select
              </span>
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
