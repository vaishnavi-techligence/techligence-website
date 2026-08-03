"use client";

import React from 'react';
import { ShareIcon, CashIcon, ClipboardIcon, LightningIcon } from './Icons';
import { useConfigurator } from '../../contexts/ConfiguratorContext';

interface BottomBarProps {
  buyRentMode: 'buy' | 'rent';
  setBuyRentMode: (mode: 'buy' | 'rent') => void;
}

export default function BottomBar({ buyRentMode, setBuyRentMode }: BottomBarProps) {
  const { config, updateConfig } = useConfigurator();

  // Calculate customization progress dynamically from context
  const customizedCount = [
    config.primaryColor !== null,
    config.secondaryColor !== null,
  ].filter(Boolean).length;

  const progressPercent = (customizedCount / 2) * 100;

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link copied! Share your design.');
    }
  };

  const handleQuote = () => {
    window.location.href = `/contact?type=${buyRentMode}`;
  };

  return (
    <div className="relative h-20 bg-slate-950/60 backdrop-blur-xl border-t border-white/5 px-4 md:px-6 flex items-center justify-between shrink-0 z-20 overflow-x-auto whitespace-nowrap gap-6 lg:gap-0 [&::-webkit-scrollbar]:hidden">
      
      {/* Left Actions */}
      <div className="flex gap-2">
        <button onClick={() => window.history.back()} className="px-4 py-2 border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-white/10 text-gray-300 hover:text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5">
          <span>←</span> Back
        </button>
        <button onClick={handleShare} className="px-4 py-2 border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-white/10 text-gray-300 hover:text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5">
          <ShareIcon className="w-3.5 h-3.5" /> Share
        </button>
      </div>
      
      {/* Mode Selector */}
      <div className="flex gap-1.5 bg-slate-950 p-1 border border-white/5 rounded-full">
        <button
          onClick={() => setBuyRentMode('buy')}
          className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 ${
            buyRentMode === 'buy'
              ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <CashIcon className="w-3.5 h-3.5" /> Buy
        </button>
        <button
          onClick={() => setBuyRentMode('rent')}
          className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5 ${
            buyRentMode === 'rent'
              ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <ClipboardIcon className="w-3.5 h-3.5" /> Rent
        </button>
      </div>
      
      {/* Disclaimer Note */}
      <div className="flex flex-col justify-center flex-1 px-4 min-w-[280px] lg:min-w-0">
        <p className="text-[9px] text-gray-500/80 text-center font-mono leading-tight whitespace-normal">
          Note: Colors shown in the configurator are for reference only. Actual colors may vary slightly due to lighting, screen settings, and material finishes.
        </p>
      </div>
      
      {/* Right Actions */}
      <div className="flex gap-3">
        <button onClick={handleQuote} className="px-5 py-2.5 border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-white/10 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer">
          {buyRentMode === 'buy' ? 'Request Purchase Quote' : 'Request Rental Quote'}
        </button>
      </div>
      
    </div>
  );
}
