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
      className="relative overflow-hidden px-6 md:px-8 py-24 md:py-32 pt-24 md:pt-28 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16"
      id="hero"
    >
      {/* Left Column */}
      <div className="flex-1 space-y-10 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-tertiary-container text-on-tertiary-container text-sm font-semibold">
          <span className="material-symbols-outlined mr-2 text-base">auto_awesome</span>
          Next-Gen Booking Automation
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-on-surface leading-[1.1] font-headline"
          style={{ letterSpacing: '-0.03em' }}
        >
          Stop Losing Bookings. Let <span className="text-primary">AI</span> Handle It.
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-on-surface-variant leading-snug max-w-xl">
          Your car wash&apos;s AI manager that handles 100% of booking chaos.
          Instant confirmations, zero double-bookings, and customers who book 3x faster.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="signature-gradient text-on-primary flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm md:text-base tracking-wide uppercase transition-all duration-300 hover:shadow-lg active:scale-95">
            <span className="material-symbols-outlined">play_arrow</span>
            Watch Demo
          </button>
          <button className="bg-surface-container-high text-on-surface flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm md:text-base tracking-wide uppercase transition-all duration-300 hover:bg-surface-container-highest active:scale-95">
            <span className="material-symbols-outlined">mail</span>
            Get Early Access
          </button>
        </div>

        {/* Trust Metric */}
        <div className="flex items-center gap-3 pt-2">
          <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          <p className="text-sm font-medium text-on-surface-variant">
            Trusted by 50+ car wash operators in Vietnam
          </p>
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
      </div>
    </section>
  );
}
