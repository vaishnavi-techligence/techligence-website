"use client";

import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useGLTF, OrbitControls, Environment, useTexture } from '@react-three/drei';
import { useConfigurator } from '../../contexts/ConfiguratorContext';

// Maps secondary color hex codes to the correct Band model file
const getColorBandFile = (secondaryColor: string | null) => {
  switch (secondaryColor) {
    case '#2A5F7A': // Deep Ocean
      return '/models/head/band-blue.glb';
    case '#F0F4F8': // Celestial White
      return '/models/head/band-white.glb';
    case '#7B2F9D': // Aurora Violet
      return '/models/head/band-purple.glb';
    case '#4ACA6A': // Plasma Green
      return '/models/head/band-green.glb';
    case '#FF6B35': // Solar Flare
      return '/models/head/band-orange.glb';
    default:
      // Fallback to white band
      return '/models/head/band-white.glb';
  }
};

const getGlowHex = (glowName: string) => {
  switch (glowName) {
    case 'Cyan': return '#00FFFF';
    case 'Amber': return '#FFBF00';
    case 'Magenta': return '#FF00FF';
    case 'Ice Blue': return '#A5F2F3';
    case 'Warm Pulse': return '#FF5733';
    case 'Gold': return '#FFD700';
    default: return null;
  }
};

export default function HeadModel() {
  const { config } = useConfigurator();
  
  // Load Head Base
  const { scene: headBaseScene } = useGLTF('/models/head/head-base.glb');
  
  // Load appropriate Band based on secondary color
  const bandFile = getColorBandFile(config.secondaryColor);
  const { scene: bandScene } = useGLTF(bandFile);

  const glowHex = getGlowHex(config.glowColor);

  // Load normal map textures
  const textureMaps = useTexture({
    granite: '/textures/granite_normal.jpg',
    metal: '/textures/metal_normal.jpg',
    fabric: '/textures/fabric_normal.jpg',
    leather: '/textures/leather_normal.jpg',
    matte: '/textures/matte_normal.jpg',
    rough: '/textures/rough_normal.jpg',
    metaMetal: '/textures/meta_metal_normal.jpg',
  });

  // Setup texture repeating
  useMemo(() => {
    Object.values(textureMaps).forEach(texture => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(4, 4); // Scale the textures for better fidelity
    });
  }, [textureMaps]);

  const clonedHead = useMemo(() => {
    const clone = headBaseScene.clone();
    
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          // Handle both single materials and arrays of materials safely
          const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          
          const clonedMaterials = materials.map((origMat) => {
            const mat = origMat.clone() as THREE.MeshStandardMaterial;
            
            if (!mat.name.includes('Display') && !mat.name.includes('Glass')) {
              if (config.primaryColor) {
                mat.color = new THREE.Color(config.primaryColor);
              }
              
              // Apply material properties if explicitly selected
              mat.normalMap = null; // Reset normal map
              mat.normalScale = new THREE.Vector2(1, 1);

              if (config.selectedMaterial === 'Brushed Aluminum') {
                mat.roughness = 0.2;
                mat.metalness = 0.9;
                mat.normalMap = textureMaps.metal;
                mat.normalScale.set(1.5, 1.5);
              } else if (config.selectedMaterial === 'Meta Metal') {
                mat.roughness = 0.15;
                mat.metalness = 1.0;
                mat.normalMap = textureMaps.metaMetal;
                mat.normalScale.set(2.0, 2.0);
              } else if (config.selectedMaterial === 'Premium Fabric') {
                mat.roughness = 0.9;
                mat.metalness = 0.1;
                mat.normalMap = textureMaps.fabric;
                mat.normalScale.set(1.0, 1.0);
              } else if (config.selectedMaterial === 'Lunar Granite') {
                mat.roughness = 0.8;
                mat.metalness = 0.0;
                mat.normalMap = textureMaps.granite;
                mat.normalScale.set(2.0, 2.0);
              }

              // Texture overrides material if explicitly selected and not 'None'
              if (config.selectedTexture === 'Gloss') {
                mat.roughness = 0.05;
                mat.metalness = 0.8;
                mat.normalMap = null; // Glossy usually means perfectly smooth
              } else if (config.selectedTexture === 'Leather') {
                mat.roughness = 0.9;
                mat.metalness = 0.1;
                mat.normalMap = textureMaps.leather;
                mat.normalScale.set(1.2, 1.2);
              } else if (config.selectedTexture === 'Matte') {
                mat.roughness = 0.85;
                mat.metalness = 0.1;
                mat.normalMap = textureMaps.matte;
                mat.normalScale.set(0.5, 0.5);
              } else if (config.selectedTexture === 'Rough') {
                mat.roughness = 0.95;
                mat.metalness = 0.05;
                mat.normalMap = textureMaps.rough;
                mat.normalScale.set(2.0, 2.0);
              }
              
              mat.needsUpdate = true;
            }
            
            // Apply Glow to Display/Glass components
            if ((mat.name.includes('Display') || mat.name.includes('Glass')) && glowHex) {
              mat.emissive = new THREE.Color(glowHex);
              mat.emissiveIntensity = config.glowIntensity / 20; // Scale intensity down to realistic levels
            } else if (mat.name.includes('Display') || mat.name.includes('Glass')) {
              mat.emissive = new THREE.Color(0x000000);
              mat.emissiveIntensity = 0;
            }
            
            return mat;
          });
          
          mesh.material = Array.isArray(mesh.material) ? clonedMaterials : clonedMaterials[0];
        }
      }
    });
    
    return clone;
  }, [headBaseScene, config.primaryColor, glowHex, config.glowIntensity, config.selectedTexture, config.selectedMaterial, textureMaps]);

  const clonedBand = useMemo(() => {
    const clone = bandScene.clone();
    
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          // Handle both single materials and arrays of materials
          const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          
          const clonedMaterials = materials.map(mat => {
            const newMat = mat.clone() as THREE.MeshStandardMaterial;
            
            if (config.secondaryColor) {
              newMat.color = new THREE.Color(config.secondaryColor);
            }
            newMat.map = null; // Remove any baked-in dark textures
            newMat.normalMap = null; // Reset normal map
            newMat.normalScale = new THREE.Vector2(1, 1);
            
            // Apply material properties
            if (config.selectedMaterial === 'Brushed Aluminum') {
              newMat.roughness = 0.2;
              newMat.metalness = 0.9;
              newMat.normalMap = textureMaps.metal;
              newMat.normalScale.set(1.5, 1.5);
            } else if (config.selectedMaterial === 'Meta Metal') {
              newMat.roughness = 0.15;
              newMat.metalness = 1.0;
              newMat.normalMap = textureMaps.metaMetal;
              newMat.normalScale.set(2.0, 2.0);
            } else if (config.selectedMaterial === 'Premium Fabric') {
              newMat.roughness = 0.9;
              newMat.metalness = 0.1;
              newMat.normalMap = textureMaps.fabric;
              newMat.normalScale.set(1.0, 1.0);
            } else if (config.selectedMaterial === 'Lunar Granite') {
              newMat.roughness = 0.8;
              newMat.metalness = 0.0;
              newMat.normalMap = textureMaps.granite;
              newMat.normalScale.set(2.0, 2.0);
            }

            // Texture overrides material
            if (config.selectedTexture === 'Gloss') {
              newMat.roughness = 0.05;
              newMat.metalness = 0.8;
              newMat.normalMap = null; // Ensure smooth
            } else if (config.selectedTexture === 'Leather') {
              newMat.roughness = 0.9;
              newMat.metalness = 0.1;
              newMat.normalMap = textureMaps.leather;
              newMat.normalScale.set(1.2, 1.2);
            } else if (config.selectedTexture === 'Matte') {
              newMat.roughness = 0.85;
              newMat.metalness = 0.1;
              newMat.normalMap = textureMaps.matte;
              newMat.normalScale.set(0.5, 0.5);
            } else if (config.selectedTexture === 'Rough') {
              newMat.roughness = 0.95;
              newMat.metalness = 0.05;
              newMat.normalMap = textureMaps.rough;
              newMat.normalScale.set(2.0, 2.0);
            }

            newMat.needsUpdate = true;
            return newMat;
          });
          
          mesh.material = Array.isArray(mesh.material) ? clonedMaterials : clonedMaterials[0];
        }
      }
    });
    
    return clone;
  }, [bandScene, config.secondaryColor, config.selectedTexture, config.selectedMaterial, textureMaps]);

  return (
    <>
      <OrbitControls 
        makeDefault 
        autoRotate 
        autoRotateSpeed={1.0} 
        enablePan={false}
        enableZoom={true}
        minDistance={1}
        maxDistance={5}
      />
      
      {/* Lighting for premium metallic surfaces */}
      <ambientLight intensity={0.4} />
      
      {/* Dramatic Key Light */}
      <directionalLight 
        position={[4, 6, 4]} 
        intensity={3} 
        color="#ffffff" 
        castShadow
      />
      
      {/* Cool Rim Light */}
      <directionalLight 
        position={[-5, 4, -5]} 
        intensity={2.5} 
        color="#e0f2fe" 
      />

      {/* Warm Fill Light */}
      <directionalLight 
        position={[0, 1.5, 4]} 
        intensity={1.5} 
        color="#FFE5B4" 
      />
      <Environment preset="studio" />

      <group position={[0, -0.5, 0]} scale={1.2}>
        <primitive object={clonedHead} />
        <primitive object={clonedBand} />

        {/* Dynamic Glow Light Casting */}
        {glowHex && (
          <pointLight
            position={[0, 0.4, 0.8]} // Positioned slightly in front of the face
            color={glowHex}
            intensity={(config.glowIntensity / 100) * 1.5}
            distance={3}
            decay={2}
          />
        )}
      </group>
    </>
  );
}
