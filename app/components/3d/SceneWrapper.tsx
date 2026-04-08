'use client';

import { ReactNode, Suspense, CSSProperties, Component } from 'react';
import dynamic from 'next/dynamic';

const DynamicCanvas = dynamic(
  () => import('@react-three/fiber').then((mod) => {
    const { Canvas } = mod;
    return { default: Canvas };
  }),
  { ssr: false }
);

interface SceneWrapperProps {
  children: ReactNode;
  className?: string;
  enableOrbitControls?: boolean;
  transparentBg?: boolean;
}

function WebGLFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg">
      <div className="text-center px-4">
        <p className="text-sm font-medium text-on-surface-variant">
          WebGL not supported on this device
        </p>
      </div>
    </div>
  );
}

function ErrorFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg">
      <div className="text-center px-4">
        <p className="text-sm font-medium text-red-600">
          Failed to load 3D scene
        </p>
      </div>
    </div>
  );
}

/**
 * Error boundary for catching 3D scene errors
 */
class SceneErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('3D Scene Error:', error);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

/**
 * SceneWrapper - Reusable Canvas wrapper for 3D scenes
 * Handles Next.js SSR with dynamic import, error boundaries, and WebGL fallbacks
 */
export function SceneWrapper({
  children,
  className = '',
  enableOrbitControls = false,
  transparentBg = true,
}: SceneWrapperProps) {
  return (
    <SceneErrorBoundary>
      <Suspense fallback={<WebGLFallback />}>
        <DynamicCanvas
          gl={{ antialias: true, alpha: true }}
          style={{ width: '100%', height: '100%' }}
          className={className}
          frameloop="always"
          dpr={[1, 2]}
          camera={{
            position: [0, 0, 8],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          {transparentBg ? null : <color attach="background" args={['#f7f9fb']} />}
          {children}
        </DynamicCanvas>
      </Suspense>
    </SceneErrorBoundary>
  );
}
