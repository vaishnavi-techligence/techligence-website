"use client";

import React, { useState } from 'react';
import TopBar from '../../components/configurator/TopBar';
import BottomBar from '../../components/configurator/BottomBar';
import LeftPanel from '../../components/configurator/LeftPanel';
import RightPanel from '../../components/configurator/RightPanel';
import CenterViewport from '../../components/configurator/CenterViewport';
import { ConfiguratorProvider, useConfigurator } from '../../contexts/ConfiguratorContext';

function ConfiguratorLayout() {
  const [activeTab, setActiveTab] = useState('head');
  const [buyRentMode, setBuyRentMode] = useState<'buy' | 'rent'>('buy');
  const { config } = useConfigurator();

  if (config.isFullscreen) {
    return (
      <div className="robot-cockpit-dark h-screen w-screen bg-[#050816] text-white overflow-hidden font-sans select-none antialiased flex">
        <CenterViewport />
      </div>
    );
  }

  return (
    <div className="robot-cockpit-dark h-screen flex flex-col bg-[#050816] text-white overflow-hidden font-sans select-none antialiased">
      <TopBar />
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden pt-[72px]">
        <RightPanel activeTab={activeTab} setActiveTab={setActiveTab} />
        <CenterViewport />
        <LeftPanel activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <BottomBar buyRentMode={buyRentMode} setBuyRentMode={setBuyRentMode} />
    </div>
  );
}

export default function RoyerConfigurator() {
  return (
    <ConfiguratorProvider>
      <ConfiguratorLayout />
    </ConfiguratorProvider>
  );
}
