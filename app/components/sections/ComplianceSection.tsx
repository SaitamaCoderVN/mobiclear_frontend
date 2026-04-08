'use client';

import { MaterialIcon } from '../ui/MaterialIcon';

export default function ComplianceSection() {
  const badges = [
    {
      icon: 'verified',
      label: 'SOC 2 Type II',
    },
    {
      icon: 'lock',
      label: 'AES-256 Encrypted',
    },
    {
      icon: 'location_on',
      label: 'Vietnam Data Residency',
    },
    {
      icon: 'verified_user',
      label: 'GDPR Compliant',
    },
  ];

  return (
    <section
      className="bg-surface-container-lowest py-12 md:py-16 px-6 md:px-8 overflow-hidden"
      id="compliance"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
            Built for Trust & Compliance
          </h3>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container hover:scale-105 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-2xl text-primary">
                {badge.icon}
              </span>
              <span className="text-sm font-semibold text-on-surface text-center leading-tight">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
