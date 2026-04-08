'use client';

import { MaterialIcon } from '../ui/MaterialIcon';

export default function PricingCTASection() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      badge: null,
      highlighted: false,
      cta: 'Get Started',
      features: [
        'Up to 100 bookings/month',
        '1 messaging channel',
        'Basic analytics',
        'Email support',
      ],
    },
    {
      name: 'Pro',
      price: '$99/mo',
      badge: 'Most Popular',
      highlighted: true,
      cta: 'Start Free Trial',
      features: [
        'Unlimited bookings',
        'All messaging channels (Telegram, Zalo, Viber)',
        'Advanced AI analytics',
        'Priority support',
        'Custom integrations',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      badge: null,
      highlighted: false,
      cta: 'Contact Sales',
      features: [
        'Unlimited locations',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
      ],
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-surface-container-low to-surface py-24 md:py-32 px-6 md:px-8 overflow-hidden"
      id="pricing-cta"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline text-on-surface tracking-tight">
            Plans That Scale With You
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
            Start free. Upgrade when ready.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col gap-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-primary text-on-primary md:scale-105 ambient-shadow-lg'
                  : 'bg-surface-container-lowest border border-surface-container text-on-surface'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-tertiary text-on-tertiary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Name & Price */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-headline">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-extrabold">
                    {plan.price}
                  </span>
                  {plan.price !== 'Free' && plan.price !== 'Custom' && (
                    <span className={plan.highlighted ? 'text-on-primary/80' : 'text-on-surface-variant'}>
                      per month
                    </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className={`flex items-start gap-3 ${
                      plan.highlighted ? 'text-on-primary' : 'text-on-surface'
                    }`}
                  >
                    <span className={`material-symbols-outlined flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-tertiary' : 'text-tertiary'}`}>
                      check
                    </span>
                    <span className="text-sm md:text-base leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 md:py-4 rounded-xl font-bold text-sm md:text-base uppercase tracking-wide transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-on-primary text-primary hover:shadow-lg active:scale-95'
                    : 'bg-primary text-on-primary hover:bg-primary-container active:scale-95'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Supporting Text */}
        <div className="text-center text-sm text-on-surface-variant">
          <p>All plans include 24/7 support + 99.99% SLA guarantee. No setup fees.</p>
        </div>
      </div>
    </section>
  );
}
