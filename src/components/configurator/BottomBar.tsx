"use client";

import React from 'react';
import { SaveIcon, ShareIcon, SearchIcon, ResetIcon, CashIcon, ClipboardIcon } from './Icons';

interface BottomBarProps {
  buyRentMode: 'buy' | 'rent';
  setBuyRentMode: (mode: 'buy' | 'rent') => void;
}

export default function BottomBar({ buyRentMode, setBuyRentMode }: BottomBarProps) {
  const handleSave = () => {
    console.log('Saving configuration...');
    alert('Configuration saved! (Connected to your backend)');
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link copied! Share your design.');
    }
  };

  const handleReset = () => {
    if (confirm('Reset all settings?')) {
      console.log('Reset configuration');
      alert('Settings reset to default.');
    }
  };

  const handleQuote = () => {
    alert('Request quote — connects to sales team.');
  };

  const handleCart = () => {
    alert(`Added to cart (${buyRentMode === 'buy' ? 'purchase' : 'rental'}).`);
  };

  return (
    <div className="h-20 bg-slate-950/65 backdrop-blur-xl border-t border-white/5 px-6 flex items-center justify-between shrink-0 z-20">
      
      {/* Left Actions */}
      <div className="flex gap-2">
        <button onClick={() => window.history.back()} className="px-4 py-2 border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-white/10 text-gray-300 hover:text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5">
          <span>←</span> Back
        </button>
        <button onClick={handleSave} className="px-4 py-2 border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-white/10 text-gray-300 hover:text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5">
          <SaveIcon className="w-3.5 h-3.5" /> Save
        </button>
        <button onClick={handleShare} className="px-4 py-2 border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-white/10 text-gray-300 hover:text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5">
          <ShareIcon className="w-3.5 h-3.5" /> Share
        </button>
        <button className="px-4 py-2 border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-white/10 text-gray-300 hover:text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5">
          <SearchIcon className="w-3.5 h-3.5" /> Preview
        </button>
        <button onClick={handleReset} className="px-4 py-2 border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-white/10 text-gray-300 hover:text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5">
          <ResetIcon className="w-3.5 h-3.5" /> Reset
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
      
      {/* Rent Details (conditional) */}
      {buyRentMode === 'rent' && (
        <div className="flex gap-3 items-center bg-white/5 px-3 py-1.5 border border-white/5 rounded-xl">
          <select className="bg-transparent text-xs text-white focus:outline-none cursor-pointer">
            <option className="bg-[#050816]">1 week</option>
            <option className="bg-[#050816]">1 month</option>
            <option className="bg-[#050816]">3 months</option>
            <option className="bg-[#050816]">1 year</option>
          </select>
          <input type="date" className="bg-transparent text-xs text-white focus:outline-none cursor-pointer scheme-dark" />
          <span className="text-xs text-[#FFB347] font-semibold font-mono">$XXX + deposit</span>
        </div>
      )}
      
      {/* Right Actions */}
      <div className="flex gap-3">
        <button onClick={handleQuote} className="px-5 py-2.5 border border-white/10 bg-white/5 hover:border-cyan-400 hover:bg-white/10 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer">
          Request Quote
        </button>
        
        {/* Premium robot-button design matches main site landing page */}
        <button 
          onClick={handleCart} 
          className="relative p-[1.5px] overflow-hidden rounded-full cursor-pointer hover:shadow-[0_0_25px_rgba(0,234,255,0.45)] transition duration-300 bg-gradient-to-r from-cyan-400 to-violet-600 font-bold uppercase tracking-wider text-[10px]"
        >
          <div className="relative z-10 px-6 py-2 rounded-full bg-[#050816] text-white hover:bg-transparent hover:text-slate-950 transition duration-300">
            Add to Cart +
          </div>
        </button>
      </div>
      
    </div>
  );
}
