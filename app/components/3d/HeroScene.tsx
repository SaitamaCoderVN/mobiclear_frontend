'use client';

import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';

/**
 * HeroScene - Main 3D hero background with floating geometric shapes
 * Features: rotating shapes, mouse follow, glass materials, particle field
 * Performance: Uses refs instead of state for animation to avoid re-renders
 */
export function HeroScene() {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const icosahedronRef = useRef<THREE.Mesh>(null);
  const particleGroupRef = useRef<THREE.Group>(null);

  // Use refs for mouse tracking to avoid re-renders
  const mouseTargetRef = useRef({ x: 0, y: 0 });
  const mousePosRef = useRef({ x: 0, y: 0 });

  // Mouse tracking - uses ref, no state updates
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<boolean>(false);
    if (!groupRef.current) {
      // Will be set up on first mount via useFrame
    }
  }

  // Single consolidated useFrame for all animations
  useFrame((state) => {
    // Smooth mouse interpolation
    mousePosRef.current.x += (mouseTargetRef.current.x - mousePosRef.current.x) * 0.1;
    mousePosRef.current.y += (mouseTargetRef.current.y - mousePosRef.current.y) * 0.1;

    // Apply mouse influence to group
    if (groupRef.current) {
      groupRef.current.position.x += (mousePosRef.current.x * 0.5 - groupRef.current.position.x) * 0.08;
      groupRef.current.position.y += (mousePosRef.current.y * 0.5 - groupRef.current.position.y) * 0.08;
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

  // Mouse event handler attached to the canvas via onPointerMove on group
  const handlePointerMove = (event: THREE.Event) => {
    const e = event as unknown as PointerEvent;
    if (e.clientX !== undefined) {
      mouseTargetRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    }
  };

  return (
    <group ref={groupRef} onPointerMove={handlePointerMove}>
      {/* Lighting */}
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight position={[5, 8, 5]} intensity={0.8} color="#e0e3e5" castShadow />
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

      {/* Floating Icosahedron */}
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

      {/* Particle Field */}
      <group ref={particleGroupRef}>
        <ParticleField />
      </group>

      {/* Fog for depth */}
      <fog attach="fog" args={['#ffffff', 5, 30]} />
    </group>
  );
}

/**
 * ParticleField - Small glowing particles for digital atmosphere
 */
function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);

  const { geometry } = useMemo(() => {
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      const r = Math.random() * 8;

      positions[i] = Math.sin(phi) * Math.cos(theta) * r;
      positions[i + 1] = Math.cos(phi) * r;
      positions[i + 2] = Math.sin(phi) * Math.sin(theta) * r;

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

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    return { geometry: geom };
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(state.clock.elapsedTime * 0.3 + positions[i]) * 0.0005;
      positions[i] += Math.cos(state.clock.elapsedTime * 0.2 + positions[i + 1]) * 0.0003;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.08}
        sizeAttenuation
        transparent
        vertexColors
        opacity={0.6}
        depthWrite={false}
        depthTest
      />
    </points>
  );
}
