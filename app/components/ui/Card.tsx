import React from 'react';

type CardVariant = 'default' | 'elevated' | 'glass' | 'glass-dark';

export interface CardProps {
  variant?: CardVariant;
  padding?: string;
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-surface-container-lowest ambient-shadow',
  elevated: 'bg-white ambient-shadow-lg',
  glass: 'glass',
  'glass-dark': 'glass-dark border border-white/10',
};

/**
 * Card - Flexible container component with multiple visual styles
 * Variants:
 *  - default: Light surface with subtle shadow
 *  - elevated: White with larger shadow
 *  - glass: Light glassmorphism
 *  - glass-dark: Dark glassmorphism with ghost border
 */
export function Card({
  variant = 'default',
  padding = 'p-8',
  hover = false,
  children,
  className = '',
}: CardProps) {
  const hoverClass = hover
    ? 'transition-all duration-300 hover:shadow-lg hover:scale-105'
    : '';

  return (
    <div
      className={`rounded-3xl ${variantStyles[variant]} ${padding} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}
