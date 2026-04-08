'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';

interface MousePosition {
  x: number;
  y: number;
}

/**
 * HeroScene - Main 3D hero background with floating geometric shapes
 * Features: rotating shapes, mouse follow, glass materials, particle field
 */
export function HeroScene() {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const icosahedronRef = useRef<THREE.Mesh>(null);
  const particleGroupRef = useRef<THREE.Group>(null);

  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const mouseTargetRef = useRef<MousePosition>({ x: 0, y: 0 });

  // Mouse tracking for interactive follow effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseTargetRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth mouse position interpolation
  useFrame(() => {
    setMousePos((prev) => ({
      x: prev.x + (mouseTargetRef.current.x - prev.x) * 0.1,
      y: prev.y + (mouseTargetRef.current.y - prev.y) * 0.1,
    }));
  });

  // Animate shapes
  useFrame((state) => {
    if (groupRef.current) {
      // Apply mouse influence with smooth easing
      groupRef.current.position.x += (mousePos.x * 0.5 - groupRef.current.position.x) * 0.08;
      groupRef.current.position.y += (mousePos.y * 0.5 - groupRef.current.position.y) * 0.08;
    }

    // Rotate individual shapes
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.0003;
      sphereRef.current.rotation.y += 0.0005;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x += 0.0007;
      torusRef.current.rotation.z += 0.0004;
    }

    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.y += 0.0006;
      icosahedronRef.current.rotation.z += 0.0003;
    }

    // Animate particle field
    if (particleGroupRef.current) {
      particleGroupRef.current.rotation.x += 0.00008;
      particleGroupRef.current.rotation.y += 0.00012;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ambient light for general illumination */}
      <ambientLight intensity={0.6} color="#ffffff" />

      {/* Directional light from top-right for clean shadows */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={0.8}
        color="#e0e3e5"
        castShadow
      />

      {/* Soft fill light from opposite side */}
      <directionalLight position={[-3, -2, -3]} intensity={0.3} color="#0051c9" />

      {/* Floating Sphere - Primary Blue Glass */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={sphereRef} position={[-3, 2, 0]} scale={1.2} castShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshTransmissionMaterial
            backside
            thickness={0.8}
            chromaticAberration={0.05}
            anisotropicBlur={0.1}
            distortion={0.3}
            distortionScale={0.3}
            temporalDistortion={0.2}
            color="#0051c9"
            transparent
            transmission={0.95}
            opacity={0.85}
            roughness={0.2}
            metalness={0.1}
            ior={1.5}
          />
        </mesh>
      </Float>

      {/* Floating Torus - Teal Glass */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh ref={torusRef} position={[3, -1, 1]} scale={0.9} castShadow>
          <torusGeometry args={[1, 0.4, 16, 32]} />
          <MeshTransmissionMaterial
            backside
            thickness={0.6}
            chromaticAberration={0.04}
            anisotropicBlur={0.1}
            distortion={0.25}
            distortionScale={0.25}
            temporalDistortion={0.15}
            color="#008075"
            transparent
            transmission={0.93}
            opacity={0.8}
            roughness={0.25}
            metalness={0.05}
            ior={1.4}
          />
        </mesh>
      </Float>

      {/* Floating Icosahedron - Primary Blue with transparency */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={icosahedronRef} position={[0, 3, -2]} scale={0.8} castShadow>
          <icosahedronGeometry args={[1, 4]} />
          <MeshTransmissionMaterial
            backside
            thickness={1}
            chromaticAberration={0.06}
            anisotropicBlur={0.15}
            distortion={0.4}
            distortionScale={0.35}
            temporalDistortion={0.25}
            color="#316be4"
            transparent
            transmission={0.92}
            opacity={0.75}
            roughness={0.15}
            metalness={0.15}
            ior={1.6}
          />
        </mesh>
      </Float>

      {/* Particle Field - Digital atmosphere */}
      <group ref={particleGroupRef} position={[0, 0, 0]}>
        <ParticleField />
      </group>

      {/* Fog for depth and atmosphere */}
      <fog attach="fog" args={['#ffffff', 5, 30]} />
    </group>
  );
}

/**
 * ParticleField - Hundreds of small glowing particles
 * Creates a digital, flowing atmosphere around the shapes
 */
function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(state.clock.elapsedTime * 0.3 + positions[i]) * 0.0005;
      positions[i] += Math.cos(state.clock.elapsedTime * 0.2 + positions[i + 1]) * 0.0003;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  // Create particle geometry
  const particleCount = 300;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    // Random positions in a sphere
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 2;
    const r = Math.random() * 8;

    positions[i] = Math.sin(phi) * Math.cos(theta) * r;
    positions[i + 1] = Math.cos(phi) * r;
    positions[i + 2] = Math.sin(phi) * Math.sin(theta) * r;

    // Gradient colors from primary blue to teal
    const t = Math.random();
    const color = new THREE.Color().lerpColors(
      new THREE.Color('#0051c9'),
      new THREE.Color('#008075'),
      t
    );

    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.08}
        sizeAttenuation={true}
        transparent
        vertexColors
        opacity={0.6}
        depthWrite={false}
        depthTest={true}
      />
    </points>
  );
}
