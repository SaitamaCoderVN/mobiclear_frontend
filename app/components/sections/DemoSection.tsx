'use client';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Chat with AI',
      icon: 'chat',
      timing: 'Instant reply',
      description: 'Send a message on Telegram or Zalo. The AI understands your request and responds in under 2 seconds.',
    },
    {
      number: '02',
      title: 'AI Processes & Optimizes',
      icon: 'psychology',
      timing: '3 seconds',
      description: 'The AI scans every open slot, resolves conflicts, and picks the best time—all in a single pass.',
    },
    {
      number: '03',
      title: 'Booking Confirmed',
      icon: 'check_circle',
      timing: 'Under 10 seconds total',
      description: 'Done. Confirmation sent, calendar updated, reminder scheduled. No forms, no calls, no waiting.',
    },
  ];

  return (
    <section className="bg-surface-container-low py-24 md:py-32 px-6 md:px-8" id="demo">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
            How It Works
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto">
            Three simple steps from chat message to confirmed booking. No forms, no delays.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop Connector Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-surface-container via-primary to-surface-container pointer-events-none" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col items-center md:items-center text-center">
                {/* Step Number & Icon Container */}
                <div className="relative z-10 mb-6 flex flex-col items-center">
                  {/* Circle Background */}
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30 mb-4">
                    <span className="material-symbols-outlined text-5xl text-primary">
                      {step.icon}
                    </span>
                  </div>
                  {/* Step Number */}
                  <div className="text-sm font-bold text-primary tracking-wider uppercase">
                    {step.number}
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-10 space-y-3 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-on-surface font-headline">
                    {step.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide">
                    <span className="material-symbols-outlined text-sm">timer</span>
                    {step.timing}
                  </div>
                  <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Micro-CTA */}
        <div className="text-center pt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 signature-gradient text-on-primary px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <span className="material-symbols-outlined text-base">send</span>
            Try It Now on Telegram or Zalo
          </a>
        </div>
      </div>
    </section>
  );
}
