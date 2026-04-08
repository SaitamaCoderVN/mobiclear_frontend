'use client';

import { MaterialIcon } from '../ui/MaterialIcon';

export default function PricingCTASection() {
  const features = [
    'No setup fees',
    'Free Starter plan included',
    'Scale as you grow',
    '24/7 support',
  ];

  return (
    <section
      className="bg-gradient-to-b from-surface-container-low to-surface py-24 md:py-32 px-6 md:px-8 overflow-hidden"
      id="pricing-cta"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Heading */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline text-on-surface tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
            Start free. Scale as you grow. No hidden fees, ever.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-4 bg-surface-container-lowest p-6 rounded-2xl"
            >
              <MaterialIcon
                name="check_circle"
                filled={true}
                size="lg"
                className="text-primary flex-shrink-0"
              />
              <span className="text-base md:text-lg font-semibold text-on-surface">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <button className="signature-gradient text-on-primary inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-bold text-base md:text-lg tracking-wide uppercase transition-all duration-300 hover:shadow-lg active:scale-95">
            <span className="material-symbols-outlined">play_arrow</span>
            Start Free Now
          </button>
        </div>

        {/* Supporting Text */}
        <p className="text-sm text-on-surface-variant">
          No credit card required. Get instant access to our full feature set.
        </p>
      </div>
    </section>
  );
}
