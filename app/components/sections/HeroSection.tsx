'use client';

import dynamic from 'next/dynamic';

const SceneWrapper = dynamic(
  () => import('../3d/SceneWrapper').then((mod) => ({ default: mod.SceneWrapper })),
  { ssr: false }
);
const HeroScene = dynamic(
  () => import('../3d/HeroScene').then((mod) => ({ default: mod.HeroScene })),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-6 md:px-8 py-24 md:py-32 pt-32 md:pt-40 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16"
      id="hero"
    >
      {/* Left Column */}
      <div className="flex-1 space-y-10 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-tertiary-container text-on-tertiary-container text-sm font-medium">
          <span className="material-symbols-outlined mr-2 text-base">auto_awesome</span>
          Next-Gen Booking Automation
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1] font-headline">
          The Intelligent <span className="text-primary">Flow</span> of Car Care.
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-xl">
          MobiClear automates your car wash scheduling through AI. Seamlessly
          book via your favorite chat apps without lifting a finger.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="signature-gradient text-on-primary flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm md:text-base tracking-wide uppercase transition-all duration-300 hover:shadow-lg active:scale-95">
            <span className="material-symbols-outlined">send</span>
            Book on Telegram
          </button>
          <button className="bg-surface-container-high text-on-surface flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm md:text-base tracking-wide uppercase transition-all duration-300 hover:bg-surface-container-highest active:scale-95">
            <span className="material-symbols-outlined">chat</span>
            Book on Zalo
          </button>
        </div>
      </div>

      {/* Right Column - 3D Hero Scene */}
      <div className="flex-1 w-full relative">
        {/* 3D Scene Background */}
        <div className="aspect-[4/3] rounded-3xl overflow-hidden ambient-shadow bg-gradient-to-br from-surface-container-low to-surface-container relative">
          <div className="absolute inset-0">
            <SceneWrapper transparentBg={false}>
              <HeroScene />
            </SceneWrapper>
          </div>
        </div>

        {/* Floating Booking Confirmed Card */}
        <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-2xl ambient-shadow flex items-center gap-4 max-w-xs border-l-4 border-primary z-10">
          <div className="bg-tertiary-container text-on-tertiary-container p-3 rounded-full flex-shrink-0">
            <span
              className="material-symbols-outlined text-base"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
          </div>
          <div className="flex-1">
            <div className="font-bold text-on-surface text-sm">Booking Confirmed</div>
            <div className="text-xs text-on-surface-variant">
              AI Agent scheduled your wash for 2:00 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
