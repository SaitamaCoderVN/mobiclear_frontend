'use client';

import { useState } from 'react';

const useCases = [
  {
    id: 1,
    tag: 'Proactive Booking',
    icon: 'location_on',
    title: 'Smart Booking from VETC Data',
    steps: [
      'Car passes a VETC toll near a wash station',
      'AI processes context: weather, last wash date, frequency patterns',
      'Zalo message: "Your car is 1.2km away. Slot open at 3:30 PM. Book now?"',
      'User confirms with a single tap — done',
    ],
    result: 'Fully automated booking. No app needed, no phone calls.',
  },
  {
    id: 2,
    tag: 'Ops Copilot',
    icon: 'analytics',
    title: 'AI Copilot for Franchise Owners',
    steps: [
      'AI aggregates real-time data across all locations',
      'Detects anomaly: fill rate 40%, 25% below average',
      'Alerts owner via Zalo: "Push promotion to VETC users within 5km"',
      'Owner approves with one tap — promotion auto-deployed',
    ],
    result: 'Fill rate increases 15–20% within 2 hours.',
  },
  {
    id: 3,
    tag: 'Service AI',
    icon: 'support_agent',
    title: 'Automated Customer Support',
    steps: [
      'Customer asks: "How much for an SUV wash?"',
      'AI analyzes intent, pulls data from Tasco via API',
      'Accurate response in under 2 seconds — pricing, history, complaints',
      'Handles 60–70% of support workload, 24/7',
    ],
    result: 'Happier customers. Lower operating costs.',
  },
  {
    id: 4,
    tag: 'Upsell',
    icon: 'loyalty',
    title: 'Personalized Service Recommendations',
    steps: [
      'VETC data: travel frequency, vehicle type, daily mileage',
      'AI segments users and identifies washing & maintenance needs',
      'Zalo: "8-wash monthly plan — save 40%. Subscribe?"',
      'User subscribes — AI auto-schedules based on habits',
    ],
    result: '3x customer lifetime value. 85%+ retention rate.',
  },
  {
    id: 5,
    tag: 'Insurance',
    icon: 'verified_user',
    title: 'Incident Support & Insurance Claims',
    steps: [
      'Owner or renter photographs incident via MobiClear bot',
      'AI analyzes images, verifies vehicle info, maps damage zones',
      'Auto-generates insurance report with verified data',
      'Ensures accuracy and transparency for all parties',
    ],
    result: '80% faster incident processing. Full transparency.',
  },
];

const CARD_HEIGHT = 540;
const TOP_OFFSET = 45;
const LEFT_OFFSET = 45;

export default function HowItWorksSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeIndex = hoveredIndex ?? 0;
  const N = useCases.length;

  return (
    <section className="bg-surface-container-low py-24 md:py-32 px-6 md:px-8 relative z-0" id="demo">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline">
            How It Works
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto">
            Real use cases our AI Agent handles every day. Hover over a card to explore.
          </p>
        </div>

        {/*
          Stacked Cards — peek from LEFT, card 1 on top.

          Default layout (no hover):
            Card 5 (back):  left=0
            Card 4:         left=LEFT_OFFSET
            Card 3:         left=2*LEFT_OFFSET
            Card 2:         left=3*LEFT_OFFSET
            Card 1 (front): left=4*LEFT_OFFSET  ← rightmost, on top

          Each card's top-left number badge peeks from the left.
          All cards share the same right edge.

          Hover card 2 → card 1 slides RIGHT off-screen.
        */}
        <div
          className="relative overflow-hidden"
          style={{
            height: CARD_HEIGHT + (N - 1) * TOP_OFFSET,
          }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {useCases.map((uc, idx) => {
            const isActive = idx === activeIndex;
            const isSlid = idx < activeIndex;

            /* Card 1 (idx=0) at bottom-right (on top), card 5 (idx=4) at top-left (back) */
            /* Cards 2-5 peek to the LEFT and UP behind card 1 */
            const baseLeft = (N - 1 - idx) * LEFT_OFFSET;
            const baseTop = (N - 1 - idx) * TOP_OFFSET;

            /* When hovering card N, cards before it (idx < N) slide RIGHT off-screen */
            const left = isSlid ? baseLeft + 700 : baseLeft;
            const top = isSlid ? baseTop + 20 : baseTop;

            /* Card 1 on top (highest z), card 5 at back */
            let zIndex = (N - idx) * 10;
            if (isActive) zIndex = 100;
            if (isSlid) zIndex = 1;

            return (
              <div
                key={uc.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                className="absolute"
                style={{
                  top,
                  left,
                  width: `calc(100% - ${(N - 1) * LEFT_OFFSET}px)`,
                  height: CARD_HEIGHT,
                  zIndex,
                  transition: 'left 0.45s cubic-bezier(0.4, 0, 0.2, 1), top 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: isActive ? 'default' : 'pointer',
                }}
              >
                <div
                  className="h-full rounded-3xl overflow-hidden flex flex-col relative"
                  style={{
                    backgroundColor: isActive ? '#ffffff' : idx % 2 === 0 ? '#f7f9fb' : '#f2f4f6',
                    boxShadow: isActive
                      ? '0 16px 48px rgba(0, 0, 0, 0.1)'
                      : '0 4px 16px rgba(0, 0, 0, 0.06)',
                    transition: 'box-shadow 0.3s ease',
                  }}
                >
                  {/* Number badge + tag — top-left corner, always visible */}
                  <div className="absolute top-4 left-4 flex items-center gap-3 z-10">
                    <div className="w-9 h-9 rounded-lg bg-on-surface text-surface flex items-center justify-center text-sm font-black flex-shrink-0">
                      {uc.id}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant whitespace-nowrap">
                      {uc.tag}
                    </span>
                  </div>

                  {/* Content — only when active */}
                  {isActive ? (
                    <>
                      <div className="px-10 md:px-14 pt-14 md:pt-16 pb-5">
                        <h3 className="text-3xl md:text-4xl font-bold text-on-surface font-headline leading-tight">
                          {uc.title}
                        </h3>
                      </div>

                      <div className="mx-10 md:mx-14 h-px bg-on-surface/10" />

                      <div className="px-10 md:px-14 py-6 space-y-4 flex-1">
                        {uc.steps.map((step, sIdx) => (
                          <div key={sIdx} className="flex gap-4 items-start">
                            <div className="w-7 h-7 rounded-full bg-on-surface text-surface flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {sIdx + 1}
                            </div>
                            <p className="text-lg md:text-xl text-on-surface/80 leading-relaxed">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mx-10 md:mx-14 h-px bg-on-surface/10" />

                      <div className="px-10 md:px-14 py-5 flex gap-4 items-start">
                        <span
                          className="material-symbols-outlined text-on-surface text-2xl mt-0.5 flex-shrink-0"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          arrow_forward
                        </span>
                        <p className="text-lg md:text-xl font-semibold text-on-surface">
                          {uc.result}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Micro-CTA */}
        <div className="text-center pt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 signature-gradient text-on-primary px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <span className="material-symbols-outlined text-base">send</span>
            Try It Now on Telegram or Zalo
          </a>
        </div>
      </div>
    </section>
  );
}
