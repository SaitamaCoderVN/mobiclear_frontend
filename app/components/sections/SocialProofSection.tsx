'use client';

import { MaterialIcon } from '../ui/MaterialIcon';

export default function SocialProofSection() {
  const metrics = [
    {
      value: '70%',
      label: 'Less admin time vs. manual booking',
    },
    {
      value: '10+',
      label: 'Cities across Vietnam served',
    },
    {
      value: '4.9/5',
      label: 'Rating from 500+ verified reviews',
    },
  ];

  const testimonials = [
    {
      quote:
        'MobiClear cut our admin time by 70%. We reinvested those hours into upselling premium detailing—revenue per customer is up 25% since we started.',
      author: 'Nguyen Van Minh',
      title: 'Owner',
      company: 'SparkleWash Saigon',
      rating: 5,
    },
    {
      quote:
        'Our customers love booking through Zalo. It\'s instant, smart, and feels premium. We added 40 new weekly bookings in the first month alone.',
      author: 'Tran Thi Lan',
      title: 'CEO',
      company: 'AutoCare Vietnam',
      rating: 5,
    },
    {
      quote:
        'We went from losing 10 bookings a week to zero missed slots. The AI fills cancellation gaps automatically—that recovered over 2 million VND per month for us.',
      author: 'Le Hoang Duc',
      title: 'Operations Manager',
      company: 'CleanMaster Chain',
      rating: 5,
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 1);
  };

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-surface-container-lowest rounded-3xl ambient-shadow p-8 md:p-10 space-y-6 flex flex-col"
            >
              {/* Stars & Verified Badge */}
              <div className="flex items-center gap-3">
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
                <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">
                  Verified review
                </span>
              </div>

              {/* Opening Quote Mark */}
              <div className="text-4xl text-primary/20 leading-none">
                "
              </div>

              {/* Quote */}
              <p className="text-lg text-on-surface leading-relaxed flex-grow">
                {testimonial.quote}
              </p>

              {/* Author Info */}
              <div className="pt-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
                  {getInitials(testimonial.author)}
                </div>
                <div>
                  <p className="font-bold text-base text-on-surface">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
