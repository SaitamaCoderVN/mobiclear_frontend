'use client';

import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface WaterParticlesProps {
  count?: number;
  speed?: number;
  scale?: number;
  position?: [number, number, number];
}

/**
 * WaterParticles - Animated particle system with wave-like flow
 * Hundreds of small glowing particles flowing like water current
 * Uses Points geometry with custom animation for performance
 */
export function WaterParticles({
  count = 400,
  speed = 1,
  scale = 1,
  position = [0, 0, 0],
}: WaterParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Create particle data using useMemo to avoid recreating on every render
  const { positions, colors, initialPositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const initPos = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      // Create wave pattern - particles distributed in a band
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 8;

      pos[i] = x;
      pos[i + 1] = y;
      pos[i + 2] = z;

      // Store initial positions for wave calculation
      initPos[i] = x;
      initPos[i + 1] = y;
      initPos[i + 2] = z;

      // Color gradient from primary blue to teal
      const t = Math.random();
      const color = new THREE.Color().lerpColors(
        new THREE.Color('#0051c9'),
        new THREE.Color('#008075'),
        t
      );

      col[i] = color.r;
      col[i + 1] = color.g;
      col[i + 2] = color.b;
    }

    return { positions: pos, colors: col, initialPositions: initPos };
  }, [count]);

  // Update particle positions with wave motion
  useFrame((state) => {
    if (!pointsRef.current) return;

    const positionAttribute = pointsRef.current.geometry.attributes.position;
    const posArray = positionAttribute.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count * 3; i += 3) {
      const x = initialPositions[i];
      const y = initialPositions[i + 1];
      const z = initialPositions[i + 2];

      // Create flowing wave effect
      const waveX = Math.sin(time * 0.5 + y * 0.5) * 0.5 + x;
      const waveY = Math.cos(time * 0.3 + x * 0.4) * 0.3 + y;
      const waveZ = Math.sin(time * 0.4 + (x + y) * 0.3) * 0.4 + z;

      // Smooth motion toward wave position
      posArray[i] += (waveX - posArray[i]) * 0.1 * speed;
      posArray[i + 1] += (waveY - posArray[i + 1]) * 0.1 * speed;
      posArray[i + 2] += (waveZ - posArray[i + 2]) * 0.1 * speed;
    }

    positionAttribute.needsUpdate = true;
  });

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geom;
  }, [positions, colors]);

  return (
    <group ref={groupRef} position={position}>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          size={0.06 * scale}
          sizeAttenuation={true}
          transparent
          vertexColors
          opacity={0.7}
          depthWrite={false}
          depthTest={true}
          fog={true}
        />
      </points>
    </group>
  );
}
