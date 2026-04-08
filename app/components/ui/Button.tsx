import React from 'react';
import { MaterialIcon } from './MaterialIcon';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'signature-gradient text-on-primary uppercase tracking-widest font-bold hover:shadow-lg',
  secondary:
    'bg-surface-container-high text-on-surface hover:bg-surface-container-highest',
  tertiary:
    'bg-transparent text-primary hover:underline',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

/**
 * Button - Versatile button component with three variants
 * Primary: Full gradient with uppercase text
 * Secondary: Surface container with elevated hover state
 * Tertiary: Transparent with text color and underline hover
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-2 rounded-xl font-medium transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {icon && <MaterialIcon name={icon} size="md" />}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {icon && <MaterialIcon name={icon} size="md" />}
      {children}
    </button>
  );
}
