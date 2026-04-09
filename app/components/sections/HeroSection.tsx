'use client';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32 pt-20 sm:pt-24 md:pt-28 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16"
      id="hero"
    >
      {/* Left Column */}
      <div className="flex-1 space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-tertiary-container text-on-tertiary-container text-xs sm:text-sm font-semibold">
          <span className="material-symbols-outlined mr-2 text-base">auto_awesome</span>
          Built for Vietnam&apos;s Car Wash Industry
        </div>

        {/* Headline */}
        <h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-on-surface leading-[1.1] font-headline"
          style={{ letterSpacing: '-0.03em' }}
        >
          Your <span className="text-primary">AI Manager</span> That Fills Every Slot.
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-on-surface-variant leading-snug max-w-xl">
          Your car wash&apos;s AI manager that fills every slot, confirms every booking in under 10 seconds, and never double-books again.
        </p>

        {/* CTAs - Telegram & Zalo */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="https://t.me/mobiclear_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="signature-gradient text-on-primary flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm md:text-base tracking-wide uppercase transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Telegram_logo.svg" alt="Telegram" className="w-6 h-6" />
            Book on Telegram
          </a>
          <a
            href="https://zalo.me/1902829874729738998"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container-high text-on-surface flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm md:text-base tracking-wide uppercase transition-all duration-300 hover:bg-surface-container-highest active:scale-95"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Icon_of_Zalo.svg" alt="Zalo" className="w-6 h-6" />
            Book on Zalo
          </a>
        </div>

        {/* Trust Metric */}
        <div className="flex items-center gap-3 pt-2">
          <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          <p className="text-sm font-medium text-on-surface-variant">
            Live on Zalo &amp; Telegram across 10+ Vietnamese cities
          </p>
        </div>
      </div>

      {/* Right Column - Hero Image like stitch */}
      <div className="flex-1 w-full relative">
        {/* Car Wash Image */}
        <div className="aspect-[4/3] rounded-3xl overflow-hidden ambient-shadow bg-surface-container-low" style={{ border: '8px solid rgba(255,255,255,0.5)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAppqsCgb8c0Cgy2xu23zhrglO58_hbOkZPioyNNK6nv2e9TwKPzix8SSTQXBAGayPAilgNjNoh6tKB9ksLYQWrQaxDQ5rWAe4orYFWvMT8Q9Vm4qp6KSJYAq1PonTvDWvs4juL0WmLph9vFVnZfHZjz6RQyRwEB9Vuur0C8l1zBRoGv265Xzdo6OECD-cvk8X6XIHWuny39GFfIzLSH7aHeaDBA6GcSS7BGi6in4eaLz1kHa_7ZLHd--ze5-pR-pqqBWC3IUlLRA"
            alt="Luxury car being detailed inside a bright high-tech car wash bay with soft blue lighting and water droplets"
          />
        </div>

        {/* Floating Booking Confirmed Card */}
        <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-surface-container-lowest p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl ambient-shadow flex items-center gap-3 sm:gap-4 max-w-[220px] sm:max-w-xs" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div className="bg-tertiary-container text-on-tertiary-container p-3 rounded-full flex-shrink-0">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <div>
            <div className="font-bold text-sm text-on-surface">Booking Confirmed</div>
            <div className="text-xs text-on-surface-variant">AI Agent scheduled your wash for 2:00 PM</div>
          </div>
        </div>
      </div>
    </section>
  );
}
