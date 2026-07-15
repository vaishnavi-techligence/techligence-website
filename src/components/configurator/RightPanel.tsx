"use client";

import React from 'react';

import TorsoControls from './TorsoControls';
import ColorPackages from './ColorPackages';
import AttachmentSystem from './AttachmentSystem';
import RobotBaseSelector from './RobotBaseSelector';

interface RightPanelProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function RightPanel({ activeTab, setActiveTab }: RightPanelProps) {
  return (
    <div className="w-[360px] bg-slate-950/60 backdrop-blur-xl border-l border-white/5 overflow-y-auto p-5 shrink-0 z-10">
      

      <div className="mt-5 border-t border-white/5 pt-5">
        <RobotBaseSelector />
      </div>
      
      {/* Torso Options (Only show when torso is selected) */}
      {activeTab === 'torso' && (
        <>
          <TorsoControls />
          <ColorPackages />
          <AttachmentSystem />
        </>
      )}
      
    </div>
  );
}
