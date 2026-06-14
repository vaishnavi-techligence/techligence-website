"use client";

import React, { useState } from 'react';
import TopBar from '../../components/configurator/TopBar';
import BottomBar from '../../components/configurator/BottomBar';
import LeftPanel from '../../components/configurator/LeftPanel';
import RightPanel from '../../components/configurator/RightPanel';
import CenterViewport from '../../components/configurator/CenterViewport';
import { ConfiguratorProvider } from '../../contexts/ConfiguratorContext';

export default function RoyerConfigurator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('torso');
  const [buyRentMode, setBuyRentMode] = useState<'buy' | 'rent'>('buy');

  return (
    <ConfiguratorProvider>
      <div className="h-screen flex flex-col bg-[#050816] text-white overflow-hidden font-sans select-none antialiased">
        
        {/* Top Bar - 72px */}
        <TopBar 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn} 
        />
        
        {/* Main Content - Flex Row with margin-top for Top Bar height */}
        <div className="flex flex-1 overflow-hidden pt-[72px]">
          
          {/* Left Panel - 320px */}
          <LeftPanel />
          
          {/* Center Viewport - Dynamic Width */}
          <CenterViewport />
          
          {/* Right Panel - 360px */}
          <RightPanel activeTab={activeTab} setActiveTab={setActiveTab} />
          
        </div>
        
        {/* Bottom Bar - 80px */}
        <BottomBar 
          buyRentMode={buyRentMode} 
          setBuyRentMode={setBuyRentMode} 
        />
        
      </div>
    </ConfiguratorProvider>
  );
}
