'use client';

export default function AIAgentSection() {
  const features = [
    {
      icon: 'schedule',
      title: 'Always On',
      description: '1,000+ concurrent chats handled. Zero downtime.',
    },
    {
      icon: 'hub',
      title: 'Zero-Touch Operations',
      description: 'Automatic scheduling, conflict resolution, no human needed.',
    },
  ];

  const bentoCards = [
    {
      icon: 'smart_toy',
      title: 'Real-time Learning',
      subtitle: 'Gets smarter with every interaction',
      colSpan: true,
      bgColor: 'bg-primary',
      textColor: 'text-on-primary',
      subtitleColor: 'text-on-primary/90',
    },
    {
      icon: 'analytics',
      title: 'Analytics Dashboard',
      subtitle: 'Live booking insights and performance metrics',
      colSpan: false,
      bgColor: 'bg-surface-container-lowest',
      textColor: 'text-on-surface',
      subtitleColor: 'text-on-surface-variant',
    },
    {
      icon: 'bolt',
      title: 'Auto-Scale',
      subtitle: 'Automatically handles traffic spikes',
      colSpan: false,
      bgColor: 'bg-surface-container-lowest',
      textColor: 'text-on-surface',
      subtitleColor: 'text-on-surface-variant',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto" id="ai-agent">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start">
        {/* Left Column - Features */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
              Your AI Manager That Never Sleeps
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
              It answers customers at 2 AM, fills cancelled slots before you wake up, and runs your booking operations end-to-end—so you don&apos;t have to.
            </p>
          </div>

          {/* Feature List */}
          <div className="grid gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-6 items-start">
                <div className="bg-surface-container-high p-4 rounded-2xl flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-base">{feature.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-on-surface text-lg mb-2">{feature.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Restructured Bento Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Hero Card - Real-time Learning (spans both columns) */}
          <div className="col-span-2">
            <div className="bg-primary text-on-primary p-8 md:p-10 rounded-3xl ambient-shadow transition-all duration-300 hover:scale-[1.02] flex items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-headline mb-2">
                  {bentoCards[0].title}
                </h3>
                <p className="text-sm md:text-base text-on-primary/90">
                  {bentoCards[0].subtitle}
                </p>
              </div>
              <span className="material-symbols-outlined text-5xl flex-shrink-0">
                {bentoCards[0].icon}
              </span>
            </div>
          </div>

          {/* Two Cards Below */}
          {bentoCards.slice(1, 3).map((card) => (
            <div
              key={card.title}
              className={`${card.bgColor} p-6 md:p-8 rounded-3xl ambient-shadow transition-all duration-300 hover:scale-[1.02]`}
            >
              <span className={`material-symbols-outlined ${card.textColor} text-4xl mb-4 block`}>
                {card.icon}
              </span>
              <h4 className={`font-bold font-headline mb-2 text-lg ${card.textColor}`}>
                {card.title}
              </h4>
              <p className={`text-sm leading-relaxed ${card.subtitleColor}`}>
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Micro-CTA */}
      <div className="text-center pt-16">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline transition-colors"
        >
          <span className="material-symbols-outlined text-base">arrow_forward</span>
          Try the AI Manager on Telegram or Zalo
        </a>
      </div>
    </section>
  );
}
