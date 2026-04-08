'use client';

export default function AIAgentSection() {
  const features = [
    {
      icon: 'schedule',
      title: 'Always On',
      description: 'Handles 1,000+ concurrent booking requests across Telegram, Zalo, and Viber simultaneously.',
    },
    {
      icon: 'hub',
      title: 'Zero-Touch Operations',
      description: 'Automatic queue optimization, resource allocation, and conflict resolution—no human intervention needed.',
    },
  ];

  const bentoCards = [
    {
      icon: 'analytics',
      title: 'Real-time Data',
      subtitle: 'Live dashboard with booking analytics',
      colorClass: 'bg-surface-container-lowest',
      iconColor: 'text-tertiary-container',
    },
    {
      icon: 'bolt',
      title: 'Instant Scaling',
      subtitle: 'Auto-scales to meet demand spikes',
      colorClass: 'bg-primary text-on-primary',
      iconColor: 'text-on-primary',
    },
    {
      icon: 'settings_suggest',
      title: 'Auto-Optimize',
      subtitle: 'AI learns and improves continuously',
      colorClass: 'bg-surface-container-high',
      iconColor: 'text-on-surface-variant',
    },
    {
      icon: 'smart_toy',
      title: 'Self Learning',
      subtitle: 'Gets smarter with every interaction',
      colorClass: 'bg-surface-container-lowest',
      iconColor: 'text-primary',
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto" id="ai-agent">
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
        {/* Left Column - Features */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
              MobiClear AI Agent Layer
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
              The invisible brain powering your service operations. Not just a bot, but a dedicated digital manager.
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

        {/* Right Column - Bento Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* First Column */}
          <div className="space-y-4">
            {bentoCards.slice(0, 2).map((card) => (
              <div
                key={card.title}
                className={`${card.colorClass} p-8 rounded-3xl ambient-shadow transition-all duration-300 hover:scale-[1.02]`}
              >
                <span className={`material-symbols-outlined ${card.iconColor} text-4xl mb-6 block`}>
                  {card.icon}
                </span>
                <div className={`font-bold font-headline mb-2 ${card.colorClass.includes('text-on-primary') ? 'text-on-primary' : 'text-on-surface'}`}>
                  {card.title}
                </div>
                <div className={`text-xs leading-relaxed ${card.colorClass.includes('text-on-primary') ? 'text-on-primary/90' : 'text-on-surface-variant'}`}>
                  {card.subtitle}
                </div>
              </div>
            ))}
          </div>

          {/* Second Column (offset) */}
          <div className="space-y-4 pt-12">
            {bentoCards.slice(2, 4).map((card) => (
              <div
                key={card.title}
                className={`${card.colorClass} p-8 rounded-3xl ambient-shadow transition-all duration-300 hover:scale-[1.02]`}
              >
                <span className={`material-symbols-outlined ${card.iconColor} text-4xl mb-6 block`}>
                  {card.icon}
                </span>
                <div className={`font-bold font-headline mb-2 ${card.colorClass.includes('text-on-primary') ? 'text-on-primary' : 'text-on-surface'}`}>
                  {card.title}
                </div>
                <div className={`text-xs leading-relaxed ${card.colorClass.includes('text-on-primary') ? 'text-on-primary/90' : 'text-on-surface-variant'}`}>
                  {card.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
