'use client';

import { MaterialIcon } from '../ui/MaterialIcon';

export default function SocialProofSection() {
  const metrics = [
    {
      value: '500+',
      label: 'Bookings Automated Monthly',
    },
    {
      value: '50+',
      label: 'Car Wash Partners',
    },
    {
      value: '98%',
      label: 'Customer Satisfaction',
    },
  ];

  const testimonials = [
    {
      quote:
        'MobiClear cut our booking management time by 70%. The AI handles everything—we just focus on delivering great service.',
      author: 'Nguyen Van Minh',
      title: 'Owner',
      company: 'SparkleWash Saigon',
      rating: 5,
    },
    {
      quote:
        'Our customers love booking through Zalo. It\'s instant, smart, and feels premium. MobiClear transformed our business.',
      author: 'Tran Thi Lan',
      title: 'CEO',
      company: 'AutoCare Vietnam',
      rating: 5,
    },
  ];

  return (
    <section
      className="bg-surface py-24 md:py-32 px-6 md:px-8 overflow-hidden"
      id="social-proof"
    >
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-24">
        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-extrabold font-headline text-primary">
                {metric.value}
              </div>
              <p className="text-sm text-on-surface-variant uppercase tracking-widest font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-surface-container-lowest rounded-3xl ambient-shadow p-8 md:p-10 space-y-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <MaterialIcon
                    key={i}
                    name="star"
                    filled={true}
                    size="md"
                    className="text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg italic text-on-surface leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-surface-container">
                <p className="font-bold text-base text-on-surface">
                  {testimonial.author}
                </p>
                <p className="text-sm text-on-surface-variant">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
