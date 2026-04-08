import React from 'react';
import { Chip } from './Chip';

export interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'center' | 'left';
  tag?: string;
  className?: string;
}

/**
 * SectionHeading - Reusable heading pair with optional chip tag
 * Displays a title in headline font with subtitle below
 * Optional chip badge above the title for categorization
 */
export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  tag,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClass} ${className}`}>
      {tag && (
        <div className="mb-4 inline-flex">
          <Chip variant="ai">{tag}</Chip>
        </div>
      )}
      <h2 className="text-4xl font-extrabold tracking-tight font-headline text-on-surface mb-4">
        {title}
      </h2>
      <p className="text-lg text-secondary max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
