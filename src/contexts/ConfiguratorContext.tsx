"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface ConfiguratorState {
  selectedTheme: string;
  environment: string;
  isFullscreen: boolean;
  attachments: {
    shoulder: string;
    back: string;
  };
  primaryColor: string | null;
  secondaryColor: string | null;
  glowColor: string;
  glowIntensity: number;
  selectedMaterial: string;
  selectedTexture: string;
  materialBlend: number;
  selectedStitch: string;
  torsoShape: string;
  torsoOverride: boolean;
  showStudioLights: boolean;
}

interface ConfiguratorContextType {
  config: ConfiguratorState;
  updateConfig: (key: keyof ConfiguratorState, value: any) => void;
  resetConfig: () => void;
}

const ConfiguratorContext = createContext<ConfiguratorContextType | undefined>(undefined);

export function ConfiguratorProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<ConfiguratorState>({
    selectedTheme: 'Arctic Horizon',
    environment: 'None',
    isFullscreen: false,
    attachments: { shoulder: 'None', back: 'None' },
    primaryColor: '#ffffff',
    secondaryColor: '#2A5F7A',
    glowColor: 'Cyan',
    glowIntensity: 50,
    selectedMaterial: 'Brushed Aluminum',
    selectedTexture: 'Matte',
    materialBlend: 0.5,
    selectedStitch: 'Standard',
    torsoShape: 'Standard',
    torsoOverride: false,
    showStudioLights: true,
  });

  const updateConfig = (key: keyof ConfiguratorState, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const resetConfig = () => {
    setConfig({
      selectedTheme: 'Arctic Horizon',
      environment: 'None',
      isFullscreen: false,
      attachments: { shoulder: 'None', back: 'None' },
      primaryColor: '#ffffff',
      secondaryColor: '#2A5F7A',
      glowColor: 'Cyan',
      glowIntensity: 50,
      selectedMaterial: 'Brushed Aluminum',
      selectedTexture: 'Matte',
      materialBlend: 0.5,
      selectedStitch: 'Standard',
      torsoShape: 'Standard',
      torsoOverride: false,
      showStudioLights: true,
    });
  };

  return (
    <ConfiguratorContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </ConfiguratorContext.Provider>
  );
}

export function useConfigurator() {
  const context = useContext(ConfiguratorContext);
  if (!context) {
    throw new Error('useConfigurator must be used within a ConfiguratorProvider');
  }
  return context;
}
