'use client';

import { useRef, useState, ReactNode } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

interface FloatingCard3DProps {
  position?: [number, number, number];
  scale?: number;
  children?: ReactNode;
  htmlContent?: string;
  rotation?: [number, number, number];
}

/**
 * FloatingCard3D - Interactive 3D card with parallax tilt on hover
 * Glass material with refraction effect and edge glow
 * Can overlay HTML content using drei's Html component
 */
export function FloatingCard3D({
  position = [0, 0, 0],
  scale = 1,
  children,
  htmlContent,
  rotation = [0, 0, 0],
}: FloatingCard3DProps) {
  const cardRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle mouse movement for tilt effect
  const handleMouseMove = (event: THREE.Event) => {
    if (!hovered) return;

    const clientX = (event as any).clientX ?? 0;
    const clientY = (event as any).clientY ?? 0;

    setMousePos({
      x: (clientX / window.innerWidth) * 2 - 1,
      y: -(clientY / window.innerHeight) * 2 + 1,
    });
  };

  // Animate card rotation based on mouse position
  useFrame(() => {
    if (!cardRef.current || !groupRef.current) return;

    if (hovered) {
      // Tilt effect - max 15 degrees
      const targetRotationX = mousePos.y * 0.3;
      const targetRotationY = mousePos.x * 0.3;

      cardRef.current.rotation.x += (targetRotationX - cardRef.current.rotation.x) * 0.1;
      cardRef.current.rotation.y += (targetRotationY - cardRef.current.rotation.y) * 0.1;

      // Lift up slightly when hovered
      cardRef.current.position.z += (0.5 - cardRef.current.position.z) * 0.1;

      // Increase glow intensity
      if (glowRef.current) {
        const mat = glowRef.current.material as THREE.MeshBasicMaterial;
        mat.opacity += (0.3 - mat.opacity) * 0.1;
      }
    } else {
      // Return to neutral state
      cardRef.current.rotation.x += (rotation[0] - cardRef.current.rotation.x) * 0.1;
      cardRef.current.rotation.y += (rotation[1] - cardRef.current.rotation.y) * 0.1;
      cardRef.current.position.z += (0 - cardRef.current.position.z) * 0.1;

      // Decrease glow intensity
      if (glowRef.current) {
        const mat = glowRef.current.material as THREE.MeshBasicMaterial;
        mat.opacity += (0.1 - mat.opacity) * 0.1;
      }
    }

    // Gentle floating animation
    if (groupRef.current) {
      groupRef.current.position.y += Math.sin(Date.now() * 0.001) * 0.001;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main Card Mesh */}
      <mesh
        ref={cardRef}
        scale={scale}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onPointerMove={handleMouseMove}
        castShadow
        receiveShadow
      >
        {/* Card geometry - thin plane */}
        <boxGeometry args={[3, 2, 0.1]} />

        {/* Glass material with refraction */}
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          transmission={0.8}
          thickness={0.1}
          roughness={0.1}
          metalness={0.05}
          ior={1.5}
          opacity={0.95}
          clearcoat={1}
          clearcoatRoughness={0.1}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Glow edge effect - surrounds the card */}
      <mesh ref={glowRef} scale={scale} position={[0, 0, 0.01]}>
        <boxGeometry args={[3.05, 2.05, 0.01]} />
        <meshBasicMaterial
          color="#0051c9"
          transparent
          opacity={0.1}
          emissive="#0051c9"
          emissiveIntensity={0.3}
          side={THREE.BackSide}
        />
      </mesh>

      {/* HTML overlay content */}
      {htmlContent && (
        <Html
          scale={1}
          position={[0, 0, 0.08]}
          transform
          wrapperClass="flex items-center justify-center"
        >
          <div
            className="w-48 h-32 flex items-center justify-center text-center pointer-events-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </Html>
      )}

      {children && (
        <Html scale={1} position={[0, 0, 0.08]} transform wrapperClass="flex items-center justify-center">
          <div className="w-48 h-32 flex items-center justify-center text-center pointer-events-none">
            {children}
          </div>
        </Html>
      )}

      {/* Ambient light to illuminate the card */}
      <pointLight position={[1, 1, 2]} intensity={0.5} color="#0051c9" />
      <pointLight position={[-1, -1, 2]} intensity={0.3} color="#008075" />
    </group>
  );
}
