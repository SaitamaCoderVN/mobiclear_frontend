import React from 'react';
import { MaterialIcon } from './MaterialIcon';

type ChipVariant = 'ai' | 'status' | 'tech';

export interface ChipProps {
  variant: ChipVariant;
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ChipVariant, string> = {
  ai: 'bg-tertiary-container text-on-tertiary-container',
  status: 'bg-surface-container-high text-on-surface-variant',
  tech: 'bg-white/10 text-white font-mono text-xs',
};

/**
 * Chip - Pill-shaped badge component
 * Variants: ai (green), status (gray), tech (glass)
 */
export function Chip({
  variant,
  icon,
  children,
  className = '',
}: ChipProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${variantStyles[variant]} ${className}`}
    >
      {icon && <MaterialIcon name={icon} size="sm" />}
      {children}
    </div>
  );
}
