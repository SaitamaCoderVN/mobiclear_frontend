'use client';

import React from 'react';
import { motion } from 'framer-motion';

type AnimationDirection = 'up' | 'left' | 'right' | 'fade';

export interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const directionVariants = {
  up: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
  },
  left: {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
  },
  right: {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
};

/**
 * AnimatedSection - Scroll-triggered animation wrapper using framer-motion
 * Supports directional animations: up, left, right, fade
 * Animates when element enters viewport
 *
 * @param direction - Animation direction (default: 'up')
 * @param delay - Delay in seconds before animation starts
 * @param duration - Animation duration in seconds (default: 0.6)
 * @param once - Only animate once when entering viewport (default: true)
 */
export function AnimatedSection({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}: AnimatedSectionProps) {
  const variants = directionVariants[direction];

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.whileInView}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      viewport={{ once, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
