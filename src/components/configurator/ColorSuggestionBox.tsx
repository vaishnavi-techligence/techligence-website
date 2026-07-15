"use client";

import React, { useState } from 'react';
import { 
  SparklesIcon, 
  RobotIcon, 
  PaletteIcon, 
  HospitalIcon, 
  FactoryIcon, 
  HomeIcon, 
  LockIcon, 
  BookOpenIcon, 
  TrophyIcon, 
  MountainIcon 
} from './Icons';

export interface ColorSuggestion {
  primary: string;
  secondary: string;
  glow: string;
}

interface PresetSuggestion {
  iconKey: string;
  name: string;
  description: string;
  colors: string[];
  primary: string;
  secondary: string;
  glow: string;
}

const SUGGESTION_PRESETS: PresetSuggestion[] = [
  { 
    iconKey: "hospital", 
    name: "Healthcare", 
    description: "Calm, trustworthy, sterile",
    colors: ["#E8F4F8", "#2A5F7A"],
    primary: "#E8F4F8",
    secondary: "#2A5F7A",
    glow: "None"
  },
  { 
    iconKey: "industrial", 
    name: "Industrial", 
    description: "Durable, visible, functional",
    colors: ["#F5C542", "#FF6B35"],
    primary: "#F5C542",
    secondary: "#FF6B35",
    glow: "None"
  },
  { 
    iconKey: "home", 
    name: "Home Companion", 
    description: "Warm, friendly, approachable",
    colors: ["#E8B8C8", "#F0F4F8"],
    primary: "#E8B8C8",
    secondary: "#F0F4F8",
    glow: "None"
  },
  { 
    iconKey: "security", 
    name: "Security", 
    description: "Authoritative, stealth, alert",
    colors: ["#0A1217", "#4ACA6A"],
    primary: "#0A1217",
    secondary: "#4ACA6A",
    glow: "None"
  },
  { 
    iconKey: "education", 
    name: "Education", 
    description: "Curious, energetic, engaging",
    colors: ["#F0F4F8", "#7B2F9D"],
    primary: "#F0F4F8",
    secondary: "#7B2F9D",
    glow: "None"
  },
  { 
    iconKey: "events", 
    name: "Events/FIFA", 
    description: "Energetic, celebratory, visible",
    colors: ["#FF6B35", "#4ACA6A"],
    primary: "#FF6B35",
    secondary: "#4ACA6A",
    glow: "None"
  },
  { 
    iconKey: "outdoor", 
    name: "Outdoor/Adventure", 
    description: "Rugged, natural, bold",
    colors: ["#3A7A5A", "#FF6B35"],
    primary: "#3A7A5A",
    secondary: "#FF6B35",
    glow: "None"
  },
  { 
    iconKey: "luxury", 
    name: "Luxury/Premium", 
    description: "Elegant, sophisticated, exclusive",
    colors: ["#1A2A2F", "#F0F4F8"],
    primary: "#1A2A2F",
    secondary: "#F0F4F8",
    glow: "None"
  },
];

const RenderPresetIcon = ({ iconKey }: { iconKey: string }) => {
  switch (iconKey) {
    case 'hospital': return <HospitalIcon className="w-5 h-5 text-cyan-400" />;
    case 'industrial': return <FactoryIcon className="w-5 h-5 text-amber-500" />;
    case 'home': return <HomeIcon className="w-5 h-5 text-orange-400" />;
    case 'security': return <LockIcon className="w-5 h-5 text-red-500" />;
    case 'education': return <BookOpenIcon className="w-5 h-5 text-purple-400" />;
    case 'events': return <TrophyIcon className="w-5 h-5 text-yellow-500" />;
    case 'outdoor': return <MountainIcon className="w-5 h-5 text-green-400" />;
    case 'luxury': return <SparklesIcon className="w-5 h-5 text-yellow-400" fill="currentColor" />;
    default: return <SparklesIcon className="w-5 h-5 text-cyan-400" />;
  }
};

interface ColorSuggestionBoxProps {
  onApplySuggestion: (suggestion: ColorSuggestion) => void;
}

export default function ColorSuggestionBox({ onApplySuggestion }: ColorSuggestionBoxProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState<ColorSuggestion & { name: string } | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const handleAISuggestion = () => {
    if (!customPrompt.trim()) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      const prompt = customPrompt.toLowerCase();
      let suggestion: ColorSuggestion & { name: string };
      
      if (prompt.includes('calm') || prompt.includes('peaceful') || prompt.includes('relax') || prompt.includes('hospital')) {
        suggestion = { primary: "#2A5F7A", secondary: "#F0F4F8", glow: "None", name: "Ocean Calm" };
      } else if (prompt.includes('energetic') || prompt.includes('excited') || prompt.includes('party') || prompt.includes('fifa')) {
        suggestion = { primary: "#FF6B35", secondary: "#FF6B35", glow: "None", name: "Solar Burst" };
      } else if (prompt.includes('professional') || prompt.includes('corporate') || prompt.includes('office')) {
        suggestion = { primary: "#C8D8E0", secondary: "#2A5F7A", glow: "None", name: "Executive" };
      } else if (prompt.includes('warm') || prompt.includes('friendly') || prompt.includes('home')) {
        suggestion = { primary: "#E8B8C8", secondary: "#F0F4F8", glow: "None", name: "Home Comfort" };
      } else if (prompt.includes('dark') || prompt.includes('stealth') || prompt.includes('night') || prompt.includes('security')) {
        suggestion = { primary: "#0A1217", secondary: "#4ACA6A", glow: "None", name: "Midnight Ops" };
      } else if (prompt.includes('nature') || prompt.includes('green') || prompt.includes('earth')) {
        suggestion = { primary: "#3A7A5A", secondary: "#FF6B35", glow: "None", name: "Forest Call" };
      } else if (prompt.includes('tech') || prompt.includes('future') || prompt.includes('cyber')) {
        suggestion = { primary: "#00D4FF", secondary: "#7B2F9D", glow: "None", name: "Cyber Pulse" };
      } else {
        suggestion = { primary: "#7B2F9D", secondary: "#2A5F7A", glow: "None", name: "Creative Flow" };
      }
      
      setAiSuggestion(suggestion);
      setIsLoading(false);
    }, 1500);
  };

  const applySuggestion = (suggestion: ColorSuggestion) => {
    onApplySuggestion({
      primary: suggestion.primary,
      secondary: suggestion.secondary,
      glow: suggestion.glow,
    });
    setIsExpanded(false);
    setCustomPrompt('');
    setAiSuggestion(null);
    setSelectedPreset(null);
  };

  const applyPreset = (preset: PresetSuggestion) => {
    setSelectedPreset(preset.name);
    onApplySuggestion({
      primary: preset.primary,
      secondary: preset.secondary,
      glow: preset.glow,
    });
    setIsExpanded(false);
  };

  return (
    <div className="mb-6">
      {/* Suggestion Box Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-gradient-to-r from-cyan-600/20 to-blue-500/20 border border-cyan-400/40 hover:border-cyan-400/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] rounded-2xl p-4 flex items-center justify-between transition-all duration-300 group cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.1)]"
      >
        <div className="flex items-center gap-3">
          <SparklesIcon className="w-6 h-6 text-cyan-400 animate-pulse" />
          <div className="text-left">
            <div className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono">Predefined Themes</div>
            <div className="text-[11px] text-gray-400 mt-0.5">Instantly apply full design packages</div>
          </div>
        </div>
        <span className={`text-cyan-400 text-xs transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-3 bg-slate-950/60 backdrop-blur-xl rounded-2xl p-4 border border-white/5 animate-in slide-in-from-top-2 duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          
          {/* Tab Switcher */}
          <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
            <button 
              className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full transition cursor-pointer flex items-center gap-1.5 ${
                !selectedPreset 
                  ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.25)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setSelectedPreset(null)}
            >
              <RobotIcon className="w-3.5 h-3.5" /> AI Assistant
            </button>
            <button 
              className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full transition cursor-pointer flex items-center gap-1.5 ${
                selectedPreset 
                  ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.25)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setSelectedPreset('presets')}
            >
              <PaletteIcon className="w-3.5 h-3.5" /> Ambience Presets
            </button>
          </div>

          {/* AI Assistant Tab */}
          {!selectedPreset && (
            <div>
              <div className="relative">
                <textarea
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="Describe your vibe... (e.g., 'I want a calm robot for a hospital' or 'energetic colors for a FIFA event')"
                  className="w-full bg-slate-950/70 border border-white/10 rounded-xl p-3 text-xs text-white placeholder:text-gray-600 resize-none focus:outline-none focus:border-cyan-400 transition"
                  rows={3}
                />
              </div>
              
              <div className="flex flex-col gap-2.5 mt-3">
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[9px] text-gray-500 self-center uppercase tracking-wider font-bold">Try:</span>
                  <button 
                    onClick={() => setCustomPrompt("calm and peaceful for a hospital")}
                    className="text-[9px] px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-cyan-400 hover:border-cyan-400 hover:bg-white/10 transition cursor-pointer font-mono flex items-center gap-1"
                  >
                    <HospitalIcon className="w-3 h-3" /> calm hospital
                  </button>
                  <button 
                    onClick={() => setCustomPrompt("energetic for a sports event like FIFA")}
                    className="text-[9px] px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-cyan-400 hover:border-cyan-400 hover:bg-white/10 transition cursor-pointer font-mono flex items-center gap-1"
                  >
                    <TrophyIcon className="w-3 h-3" /> energetic FIFA
                  </button>
                  <button 
                    onClick={() => setCustomPrompt("dark and stealth for security")}
                    className="text-[9px] px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-cyan-400 hover:border-cyan-400 hover:bg-white/10 transition cursor-pointer font-mono flex items-center gap-1"
                  >
                    <LockIcon className="w-3 h-3" /> stealth security
                  </button>
                </div>
                <button
                  onClick={handleAISuggestion}
                  disabled={!customPrompt.trim() || isLoading}
                  className="px-4 py-1.5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 font-bold uppercase tracking-wider text-[10px] rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition cursor-pointer self-end"
                >
                  {isLoading ? 'Thinking...' : 'Suggest →'}
                </button>
              </div>

              {/* AI Suggestion Result */}
              {aiSuggestion && !isLoading && (
                <div className="mt-4 bg-slate-950/80 rounded-xl p-3 border border-cyan-400/20 animate-in slide-in-from-bottom-2">
                  <div className="flex items-center gap-2 mb-2 font-mono text-[9px] font-bold tracking-wider text-cyan-400">
                    <SparklesIcon className="w-3 h-3" />
                    <span>AI SUGGESTION</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-9 h-9 rounded-xl border border-white/5 shadow-inner" style={{ backgroundColor: aiSuggestion.primary }} title={`Primary: ${aiSuggestion.primary}`}></div>
                      <div className="w-9 h-9 rounded-xl border border-white/5 shadow-inner" style={{ backgroundColor: aiSuggestion.secondary }} title={`Secondary: ${aiSuggestion.secondary}`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-white">{aiSuggestion.name}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">Glow: {aiSuggestion.glow}</div>
                    </div>
                    <button
                      onClick={() => applySuggestion(aiSuggestion)}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider rounded-full hover:shadow-[0_0_10px_rgba(6,182,212,0.25)] transition cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Presets Tab */}
          {selectedPreset === 'presets' && (
            <div>
              <div className="flex flex-col gap-2 max-h-72 overflow-y-auto pr-1 custom-scrollbar">
                {SUGGESTION_PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => applyPreset(preset)}
                    className="bg-slate-950/80 hover:bg-slate-900 border border-white/5 hover:border-cyan-400/40 rounded-xl p-3 text-left transition-all duration-300 group cursor-pointer flex items-center gap-3 w-full shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                  >
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/5 group-hover:border-cyan-400/30 transition-colors">
                      <RenderPresetIcon iconKey={preset.iconKey} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition truncate">{preset.name}</div>
                      <div className="text-[9px] text-gray-400 mt-0.5 truncate">{preset.description}</div>
                    </div>
                    <div className="flex gap-1 shrink-0 ml-2">
                      {preset.colors.map((color, idx) => (
                        <div key={idx} className="w-4 h-4 rounded-full border border-white/10 shadow-sm" style={{ backgroundColor: color }}></div>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Close Button */}
          <div className="mt-4 pt-3 border-t border-white/5 flex justify-end">
            <button
              onClick={() => setIsExpanded(false)}
              className="text-[10px] uppercase font-bold tracking-wider text-gray-500 hover:text-white transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
