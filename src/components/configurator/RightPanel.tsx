"use client";

import React from 'react';

interface RightPanelProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function RightPanel({ activeTab, setActiveTab }: RightPanelProps) {
  // Right panel is currently empty as all configuration is handled via Themes in the LeftPanel
  return null;
}
