"use client";

import React from 'react';
import PartSelector from './PartSelector';
import TorsoControls from './TorsoControls';
import ColorPackages from './ColorPackages';
import AttachmentSystem from './AttachmentSystem';

interface RightPanelProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function RightPanel({ activeTab, setActiveTab }: RightPanelProps) {
  return (
    <div className="w-[360px] bg-slate-950/60 backdrop-blur-xl border-l border-white/5 overflow-y-auto p-5 shrink-0 z-10">
      
      {/* Part Selector */}
      <PartSelector activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Torso Controls (Active) */}
      {activeTab === 'torso' && <TorsoControls />}
      
      {/* Color Packages */}
      <ColorPackages />
      
      {/* Attachment System */}
      <AttachmentSystem />
      
    </div>
  );
}
