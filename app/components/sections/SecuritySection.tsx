'use client';

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: 'verified_user',
      label: 'End-to-end data encryption',
    },
    {
      icon: 'shield',
      label: 'Privacy-first AI modeling',
    },
    {
      icon: 'monitoring',
      label: '24/7 Security monitoring',
    },
  ];

  const techBadges = ['AES-256', 'ISO 27001', 'SOC2'];

  return (
    <section className="bg-inverse-surface py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 text-inverse-on-surface overflow-hidden relative" id="security">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-primary to-tertiary" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 relative z-10">
        {/* Left Column - Security Features */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Your Customers&apos; Data Is Locked Down. Your Bookings Never Go Offline.
          </h2>
          <p className="text-inverse-on-surface/80 text-base md:text-lg leading-relaxed">
            Phone numbers, booking history, personal info—all encrypted end-to-end. And your system stays live 24/7, even during traffic spikes and peak Saturday mornings.
          </p>

          {/* Security Features List */}
          <ul className="space-y-6">
            {securityFeatures.map((feature) => (
              <li key={feature.label} className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-primary text-base flex-shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {feature.icon}
                </span>
                <span className="font-medium text-base">{feature.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Glass Card */}
        <div className="glass-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 ghost-border flex flex-col items-center text-center space-y-4 sm:space-y-6">
          {/* Lock Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
            <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary">lock</span>
          </div>

          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-bold">99.99% Uptime SLA</h3>

          {/* Description */}
          <p className="text-inverse-on-surface/80 text-sm md:text-base leading-relaxed">
            Ensuring your customers can always book, regardless of traffic spikes or demand surges.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            {techBadges.map((badge) => (
              <div key={badge} className="px-4 py-2 bg-white/10 rounded-lg text-xs font-mono text-inverse-on-surface">
                {badge}
              </div>
            ))}
          </div>

          {/* Compliance Badges */}
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <div className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-inverse-on-surface/80 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              GDPR Compliant
            </div>
            <div className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-inverse-on-surface/80 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              Vietnam Data Residency
            </div>
          </div>

          {/* Compliance Note */}
          <p className="text-xs text-inverse-on-surface/60 pt-2">
            Independently audited. SOC 2 Type II compliant.
          </p>
        </div>
      </div>
    </section>
  );
}
