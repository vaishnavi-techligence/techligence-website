"use client";

import React, { useMemo, useRef } from 'react';
import { useGLTF, OrbitControls, Environment, Center, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useConfigurator } from '../../contexts/ConfiguratorContext';
import * as THREE from 'three';

// Define rich, premium materials
const MATERIALS = {
  white: new THREE.MeshPhysicalMaterial({ color: '#9ca3af', roughness: 0.15, metalness: 0.1, side: THREE.DoubleSide }),
  // Royal gold (deep metallic, not brassy yellow)
  gold: new THREE.MeshPhysicalMaterial({ color: '#C5A059', roughness: 0.2, metalness: 0.85, clearcoat: 0.3, side: THREE.DoubleSide }), 
  imperialBody: new THREE.MeshPhysicalMaterial({ color: '#B8860B', roughness: 0.2, metalness: 0.85, clearcoat: 0.3, side: THREE.DoubleSide }),
  imperialAcc: new THREE.MeshPhysicalMaterial({ color: '#FFDB58', roughness: 0.2, metalness: 0.85, clearcoat: 0.3, side: THREE.DoubleSide }),
  black: new THREE.MeshPhysicalMaterial({ color: '#1a1a1a', roughness: 0.25, metalness: 0.2, side: THREE.DoubleSide }),
  blue: new THREE.MeshPhysicalMaterial({ color: '#0F2C59', roughness: 0.3, metalness: 0.4, side: THREE.DoubleSide }),
  mocha: new THREE.MeshPhysicalMaterial({ color: '#6F4E37', roughness: 0.4, metalness: 0.1, side: THREE.DoubleSide }),
  pearl: new THREE.MeshPhysicalMaterial({ color: '#b3b0a8', roughness: 0.05, metalness: 0.3, clearcoat: 1.0, clearcoatRoughness: 0.1, side: THREE.DoubleSide }),
  pinkish: new THREE.MeshPhysicalMaterial({ color: '#FFA07A', roughness: 0.25, metalness: 0.05, clearcoat: 0.3, side: THREE.DoubleSide }),
};

// Helper to map theme name to glb filenames
const getThemeFiles = (themeName: string) => {
  // PERFORMANCE OPTIMIZATION:
  // Since the design team accidentally exported 6 identical clones of the same white robot,
  // we can completely eliminate network delays and bandwidth waste by just loading ONE base model.
  // Our dynamic JavaScript material injection handles the colors instantly anyway!
  return { 
    body: '/models/t2-themes/01 Body Accent - Gold & White.glb', 
    accessorise: '/models/t2-themes/01 Accessorise Accent - Gold & White.glb' 
  };
};

export default function T2FullModel() {
  const { config } = useConfigurator();
  const robotRef = useRef<THREE.Group>(null);
  
  // Persistent materials that we will smoothly animate
  const bodyMat = useRef(MATERIALS.white.clone());
  const accMat = useRef(MATERIALS.white.clone());

  useFrame((state, delta) => {
    if (!robotRef.current) return;
    
    // Ensure resting pose is maintained if we previously modified it
    if (robotRef.current.position.y !== 0 || robotRef.current.rotation.y !== 0) {
      robotRef.current.position.y = THREE.MathUtils.lerp(robotRef.current.position.y, 0, 0.1);
      robotRef.current.rotation.y = THREE.MathUtils.lerp(robotRef.current.rotation.y, 0, 0.1);
    }

    // --- SMOOTH COLOR TRANSITIONS ---
    let targetBodyMat = MATERIALS.white;
    let targetAccMat = MATERIALS.white;

    switch (config.selectedTheme) {
      case 'Arctic Horizon': targetBodyMat = MATERIALS.white; targetAccMat = MATERIALS.blue; break;
      case 'Midnight Ember': targetBodyMat = MATERIALS.blue; targetAccMat = MATERIALS.mocha; break;
      case 'Imperial Luxe': targetBodyMat = MATERIALS.imperialBody; targetAccMat = MATERIALS.imperialAcc; break;
      case 'Pearl Essence': targetBodyMat = MATERIALS.pinkish; targetAccMat = MATERIALS.pearl; break;
      case 'Obsidian Royale': targetBodyMat = MATERIALS.black; targetAccMat = MATERIALS.gold; break;
      // Custom Theme is handled below
    }

    // Framerate-independent smoothing factor
    const t = 1 - Math.exp(-8 * delta);

    if (config.selectedTheme === 'Custom Theme') {
      // Lerp custom colors
      bodyMat.current.color.lerp(new THREE.Color(config.primaryColor || '#ffffff'), t);
      accMat.current.color.lerp(new THREE.Color(config.secondaryColor || '#2A5F7A'), t);
      
      // Return to default plastic properties for custom themes
      bodyMat.current.roughness = THREE.MathUtils.lerp(bodyMat.current.roughness, 0.15, t);
      bodyMat.current.metalness = THREE.MathUtils.lerp(bodyMat.current.metalness, 0.1, t);
      bodyMat.current.clearcoat = THREE.MathUtils.lerp(bodyMat.current.clearcoat, 0, t);
      
      accMat.current.roughness = THREE.MathUtils.lerp(accMat.current.roughness, 0.15, t);
      accMat.current.metalness = THREE.MathUtils.lerp(accMat.current.metalness, 0.1, t);
      accMat.current.clearcoat = THREE.MathUtils.lerp(accMat.current.clearcoat, 0, t);
    } else {
      // Lerp properties towards preset materials
      const lerpMat = (current: THREE.MeshPhysicalMaterial, target: THREE.MeshPhysicalMaterial) => {
        current.color.lerp(target.color, t);
        current.roughness = THREE.MathUtils.lerp(current.roughness, target.roughness, t);
        current.metalness = THREE.MathUtils.lerp(current.metalness, target.metalness, t);
        current.clearcoat = THREE.MathUtils.lerp(current.clearcoat, target.clearcoat || 0, t);
      };
      
      lerpMat(bodyMat.current, targetBodyMat);
      lerpMat(accMat.current, targetAccMat);
    }
  });
  
  // Load Default Parts
  const { scene: rawDefaultBlack } = useGLTF('/models/t2-themes/01 Default - Black.glb');
  const { scene: rawTextDefault } = useGLTF('/models/t2-themes/02 Text Default - Black.glb');
  const { scene: rawScrewsDefault } = useGLTF('/models/t2-themes/03 Screws & joineries  Default - Black.glb');
  const { scene: rawDisplayDefault } = useGLTF('/models/t2-themes/04 Display  Default - Black.glb');

  // Load Theme Parts
  const themeFiles = getThemeFiles(config.selectedTheme);
  const { scene: rawBodyScene } = useGLTF(themeFiles.body);
  const { scene: rawAccessoriseScene } = useGLTF(themeFiles.accessorise);

  // Dynamically paint the models and fix transparent bugs
  const { bodyScene, accessoriseScene, defBlack, defText, defScrews, defDisplay } = useMemo(() => {
    // Clone to prevent mutating the cached GLTF scene across renders
    const body = rawBodyScene.clone();
    const accessorise = rawAccessoriseScene.clone();
    
    const dBlack = rawDefaultBlack.clone();
    const dText = rawTextDefault.clone();
    const dScrews = rawScrewsDefault.clone();
    const dDisplay = rawDisplayDefault.clone();

    // Fix the accidentally transparent materials in the default base and force glossy to black
    [dBlack, dText, dScrews, dDisplay, body, accessorise].forEach(scene => {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          if (child.material.name === 'GLossy ') {
             child.material = MATERIALS.black; // Ensure the glossy base is actually black
             child.material.transparent = false;
             child.material.transmission = 0;
             child.material.opacity = 1;
          }
          // Make sure text/logos are double-sided in case normals are flipped, and prevent z-fighting
          if (scene === dText) {
             child.material.side = THREE.DoubleSide;
             child.material.transparent = true;
             child.material.depthWrite = false; // Prevent transparent square from cutting into gold panel
             child.material.polygonOffset = true;
             child.material.polygonOffsetFactor = -15; // Push closer to camera
             child.material.polygonOffsetUnits = -20;

             // Perfectly center the text/logo meshes on the X axis to fix GLTF placement errors
             child.updateMatrixWorld(true);
             const box = new THREE.Box3().setFromObject(child);
             const center = new THREE.Vector3();
             box.getCenter(center);
             
             const worldPos = new THREE.Vector3();
             child.getWorldPosition(worldPos);
             
             // 1. Center the mesh
             worldPos.x -= center.x;
             
             // 2. The "T" logo has a long swoosh on the right with no padding. 
             // Nudge it slightly left to balance visual weight and pull the tip away from the slope.
             if (child.name && child.name.includes('Techligence_Logo')) {
                worldPos.x -= 0.005; 
                
                // 3. Physically lift the mesh to prevent edges from sinking into the curved surface
                // If it's on the top of the head (high Y), lift it straight up (+Y)
                if (worldPos.y > 0.8) {
                    worldPos.y += 0.008; // 8mm lift to safely clear the steep dome curve
                } else {
                    // Otherwise it's on the back, lift it outwards (+Z)
                    worldPos.z += 0.005; 
                }
             }
             
             if (child.parent) {
                child.parent.worldToLocal(worldPos);
             }
             child.position.copy(worldPos);
          }
        }
      });
    });

    // Ensure text scale is normal
    dText.scale.set(1, 1, 1);


    const applyMaterial = (scene: THREE.Object3D, targetMat: THREE.Material) => {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Target the white chassis materials specifically, ignoring displays/glass
          const matName = child.material.name;
          if (matName === 'Plastic white material' || matName === 'Blue plastic.003') {
            child.material = targetMat;
          }
        }
      });
    };

    applyMaterial(body, bodyMat.current);
    applyMaterial(accessorise, accMat.current);

    return { 
      bodyScene: body, 
      accessoriseScene: accessorise,
      defBlack: dBlack,
      defText: dText,
      defScrews: dScrews,
      defDisplay: dDisplay
    };
  // ONLY depend on the raw models. The theme logic is now perfectly handled by the animation loop!
  }, [rawBodyScene, rawAccessoriseScene, rawDefaultBlack, rawTextDefault, rawScrewsDefault, rawDisplayDefault]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2.5, 6.8]} fov={45} />
      <OrbitControls 
        makeDefault 
        autoRotate={true}
        autoRotateSpeed={1.0}
        enablePan={false}
        enableZoom={true}
        minDistance={1.5}
        maxDistance={12}
        target={[0, 2.5, 0]}
        maxPolarAngle={Math.PI / 2 - 0.02}
      />
      
      {/* Premium Product Showcase Lighting */}
      <ambientLight intensity={0.4} />
      
      {config.showStudioLights && (
        <>
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
        </>
      )}

      {/* Environment */}
      <Environment preset="studio" />

      {/* Robot: feet at Y=0 */}
      <group position={[0, 0, 0]}>
        <Center position={[0, 2.5, 0]}>
          <group ref={robotRef} scale={1.8}>
            {/* Render the patched defaults */}
            <primitive object={defBlack} key="defaultBlack" />
            <primitive object={defText} key="textDefault" />
            <primitive object={defScrews} key="screwsDefault" />
            <primitive object={defDisplay} key="displayDefault" />
            
            <primitive object={bodyScene} key={`body-${config.selectedTheme}`} />
            <primitive object={accessoriseScene} key={`acc-${config.selectedTheme}`} />
          </group>
        </Center>
        
        {/* Shadow directly on the floor to anchor the robot */}
        <ContactShadows 
          position={[0, 2.05, 0]}
          resolution={1024} 
          scale={10} 
          blur={1.5} 
          opacity={0.9} 
          far={10} 
          color="#000000" 
        />
      </group>
    </>
  );
}

// Preload the base models and defaults so they are instantly ready when the page loads
useGLTF.preload('/models/t2-themes/01 Body Accent - Gold & White.glb');
useGLTF.preload('/models/t2-themes/01 Accessorise Accent - Gold & White.glb');
useGLTF.preload('/models/t2-themes/01 Default - Black.glb');
useGLTF.preload('/models/t2-themes/02 Text Default - Black.glb');
useGLTF.preload('/models/t2-themes/03 Screws & joineries  Default - Black.glb');
useGLTF.preload('/models/t2-themes/04 Display  Default - Black.glb');
