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
    question: 'What if my customers only use Zalo? Will MobiClear work?',
    answer:
      'Absolutely. MobiClear works with any messaging platform your customers already use—Zalo, Telegram, Viber, or all three at once. No app downloads, no new accounts. One car wash partner in District 7 saw 40% more bookings just by enabling Zalo integration. We\'re adding WhatsApp and Facebook Messenger in Q2 2026.',
  },
  {
    id: 'conflicts',
    question: 'How does the AI handle double-bookings and scheduling conflicts?',
    answer:
      'The AI detects conflicts in real-time before they happen. When two customers request the same slot, the AI instantly offers the second customer the next available time—no waiting, no back-and-forth. One partner told us: "We used to lose 5-10 bookings a week to conflicts. Now it\'s zero." The AI can also re-optimize an entire day\'s schedule if a cancellation opens up a better arrangement.',
  },
  {
    id: 'security',
    question: 'Is my customer data safe?',
    answer:
      'Every piece of data is encrypted end-to-end with AES-256—the same standard banks use. We\'re SOC 2 Type II certified (independently audited), and all data stays in Vietnamese data centers. We never sell or share customer data. Your customers\' phone numbers, booking history, and personal info are locked down tight.',
  },
  {
    id: 'setup',
    question: 'How long does setup actually take?',
    answer:
      'Most car washes are live within 24 hours. Here\'s the typical timeline: Day 1 morning—we connect your booking system (takes about 2 hours with our team). Day 1 afternoon—your first customers start booking through chat. That\'s it. Our fastest setup was 4 hours from demo call to handling live bookings. No custom code, no months of waiting.',
  },
  {
    id: 'free',
    question: 'Can I try MobiClear before committing?',
    answer:
      'Yes—our Starter plan is completely free for up to 100 bookings per month, forever. No credit card required, no time limit. Most partners start free, see results within the first week, and upgrade to Pro when they hit the booking limit. There\'s zero risk to trying it.',
  },
  {
    id: 'multi-location',
    question: 'Can I manage multiple car wash locations from one account?',
    answer:
      'Yes, on our Pro and Enterprise plans. Each location gets its own AI agent and booking calendar, but you see everything in one centralized dashboard. Real-time analytics across all locations, unified customer database, and the AI learns patterns across your entire network to optimize scheduling.',
  },
  {
    id: 'worth-it',
    question: 'Is MobiClear worth it for a small car wash?',
    answer:
      'The Starter plan is free forever—up to 100 bookings/month with no strings attached. Most small operators recover the Pro plan cost ($99/month) within 2-3 weeks through fewer missed bookings and higher slot utilization. One District 2 partner told us they added 35 extra bookings in the first month just from AI-filled cancellation gaps. Zero risk to try.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section
      className="bg-surface py-24 md:py-32 px-6 md:px-8 overflow-hidden"
      id="faq"
    >
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface tracking-tight">
            Questions From Our Community
          </h2>
          <p className="text-lg text-on-surface-variant">
            Real questions from car wash operators like you
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {visibleFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-300"
            >
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

              {openId === faq.id && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                  <p className="text-base text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show More */}
        {!showAll && faqs.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline transition-colors"
            >
              <span className="material-symbols-outlined text-base">expand_more</span>
              Show {faqs.length - 3} more questions
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center pt-4">
          <p className="text-on-surface-variant text-base mb-3">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-bold text-primary hover:underline transition-colors"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            Chat with our team
          </a>
        </div>
      </div>
    </section>
  );
}
