"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface ConfiguratorState {
  selectedRobot: any;
  primaryColor: string | null;
  secondaryColor: string | null;
  glowColor: string;
  glowIntensity: number;
  materialBlend: number;
  selectedMaterial: string | null;
  selectedStitch: string | null;
  selectedTexture: string | null;
  torsoShape: string;
  torsoOverride: boolean;
  attachments: {
    shoulder: string;
    back: string;
  };
}

interface ConfiguratorContextType {
  config: ConfiguratorState;
  updateConfig: (key: keyof ConfiguratorState, value: any) => void;
}

const ConfiguratorContext = createContext<ConfiguratorContextType | undefined>(undefined);

export function ConfiguratorProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<ConfiguratorState>({
    selectedRobot: null,
    primaryColor: null,
    secondaryColor: null,
    glowColor: 'None',
    glowIntensity: 30,
    materialBlend: 50,
    selectedMaterial: null,
    selectedStitch: null,
    selectedTexture: null,
    torsoShape: 'Classic',
    torsoOverride: false,
    attachments: {
      shoulder: 'None',
      back: 'None',
    },
  });

  const updateConfig = (key: keyof ConfiguratorState, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <ConfiguratorContext.Provider value={{ config, updateConfig }}>
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
