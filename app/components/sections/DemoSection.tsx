'use client';

import { useState } from 'react';

export default function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-surface-container-low py-28 md:py-36 px-6 md:px-8" id="demo">
      <div className="max-w-5xl mx-auto text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
          Experience the AI Magic
        </h2>
        <p className="text-on-surface-variant text-base md:text-lg">
          Watch how MobiClear handles a complex booking request in seconds.
        </p>
      </div>

      {/* Video Placeholder */}
      <div className="max-w-4xl mx-auto aspect-video bg-surface-container-lowest rounded-3xl overflow-hidden ambient-shadow flex items-center justify-center relative group">
        {/* Placeholder Background */}
        <div className="absolute inset-0 w-full h-full bg-surface-container-lowest flex items-center justify-center" />

        {/* Play Button Overlay */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative z-10 w-20 h-20 signature-gradient rounded-full flex items-center justify-center text-on-primary ambient-shadow scale-100 group-hover:scale-105 transition-transform duration-300"
          aria-label="Play video"
        >
          <span className="material-symbols-outlined text-4xl ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>
            play_arrow
          </span>
        </button>
      </div>
    </section>
  );
}
