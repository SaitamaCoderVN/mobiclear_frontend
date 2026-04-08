import React from 'react';

type IconSize = 'sm' | 'md' | 'lg' | 'xl';

export interface MaterialIconProps {
  name: string;
  filled?: boolean;
  size?: IconSize;
  className?: string;
}

const sizeMap: Record<IconSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-2xl',
  xl: 'text-4xl',
};

/**
 * MaterialIcon - Wrapper for Google Material Symbols
 * Uses variable font weight via fontVariationSettings
 * Requires Material Symbols font to be loaded
 */
export function MaterialIcon({
  name,
  filled = false,
  size = 'md',
  className = '',
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined inline-flex items-center justify-center ${sizeMap[size]} ${className}`}
      style={{
        fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
      }}
    >
      {name}
    </span>
  );
}
