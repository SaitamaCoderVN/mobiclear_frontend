'use client';

import { useState } from 'react';
import { MaterialIcon } from '../ui/MaterialIcon';

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

const faqs: FAQItem[] = [
  {
    id: 'platforms',
    question: 'What messaging platforms does MobiClear support?',
    answer:
      'Currently, MobiClear integrates with Telegram, Zalo, and Viber. We\'re expanding to Facebook Messenger and WhatsApp in Q2 2026.',
  },
  {
    id: 'conflicts',
    question: 'How does the AI handle booking conflicts?',
    answer:
      'Our AI agent automatically detects scheduling conflicts, suggests alternative time slots, and can re-optimize the entire day\'s schedule in real-time.',
  },
  {
    id: 'security',
    question: 'Is my customer data safe?',
    answer:
      'Absolutely. All data is encrypted end-to-end with AES-256. We\'re SOC 2 Type II compliant and all data stays within Vietnamese data centers.',
  },
  {
    id: 'setup',
    question: 'How long does setup take?',
    answer:
      'Most businesses are up and running within 24 hours. Our onboarding team handles the integration with your existing systems.',
  },
  {
    id: 'free',
    question: 'Can I try MobiClear for free?',
    answer:
      'Yes! Our Starter plan is completely free for up to 100 bookings per month. No credit card required.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className="bg-surface py-24 md:py-32 px-6 md:px-8 overflow-hidden"
      id="faq"
    >
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-on-surface-variant">
            Everything you need to know about MobiClear
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Question - Always Visible */}
              <button
                onClick={() => toggleOpen(faq.id)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between hover:bg-surface-container-low transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded={openId === faq.id}
              >
                <h3 className="text-left font-bold text-base md:text-lg text-on-surface">
                  {faq.question}
                </h3>
                <div className="ml-4 flex-shrink-0">
                  <MaterialIcon
                    name={openId === faq.id ? 'expand_less' : 'expand_more'}
                    size="lg"
                    className="text-on-surface-variant transition-transform duration-300"
                  />
                </div>
              </button>

              {/* Answer - Collapsible */}
              {openId === faq.id && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 border-t border-surface-container animate-in fade-in duration-200">
                  <p className="text-base text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <p className="text-on-surface-variant text-base">
            Still have questions?{' '}
            <a
              href="mailto:support@mobiclear.com"
              className="font-bold text-primary hover:underline transition-colors"
            >
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
