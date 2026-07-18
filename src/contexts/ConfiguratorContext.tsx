"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface ConfiguratorState {
  selectedTheme: string;
  environment: string;
  isFullscreen: boolean;
}

interface ConfiguratorContextType {
  config: ConfiguratorState;
  updateConfig: (key: keyof ConfiguratorState, value: any) => void;
}

const ConfiguratorContext = createContext<ConfiguratorContextType | undefined>(undefined);

export function ConfiguratorProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<ConfiguratorState>({
    selectedTheme: 'Accent - Gold & White',
    environment: 'None',
    isFullscreen: false,
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
