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
      className="bg-surface-container-low py-6 px-6 md:px-8 overflow-hidden"
      id="compliance"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 flex-wrap">
        {badges.map((badge) => (
          <div key={badge.label} className="inline-flex items-center gap-2">
            <MaterialIcon
              name={badge.icon}
              size="md"
              className="text-on-surface-variant"
            />
            <span className="text-sm text-on-surface-variant font-medium">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
