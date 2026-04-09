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

export default function HowItWorksSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const activeIndex = hoveredIndex ?? activeCardIndex;
  const N = useCases.length;

  /* Responsive values — desktop uses stacked cards, mobile uses vertical scroll */
  const CARD_HEIGHT_DESKTOP = 540;
  const TOP_OFFSET_DESKTOP = 45;
  const LEFT_OFFSET_DESKTOP = 45;

  return (
    <section className="bg-surface-container-low py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 relative z-0" id="demo">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 md:space-y-4 mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline">
            How It Works
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Real use cases our AI Agent handles every day.
            <span className="hidden md:inline"> Hover over a card to explore.</span>
            <span className="md:hidden"> Tap a card to explore.</span>
          </p>
        </div>

        {/* ==================== MOBILE / TABLET: Vertical cards ==================== */}
        <div className="md:hidden space-y-4">
          {useCases.map((uc, idx) => {
            const isOpen = activeCardIndex === idx;
            return (
              <button
                key={uc.id}
                onClick={() => setActiveCardIndex(isOpen ? -1 : idx)}
                className="w-full text-left"
              >
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: isOpen ? '#ffffff' : idx % 2 === 0 ? '#f7f9fb' : '#f2f4f6',
                    boxShadow: isOpen
                      ? '0 8px 32px rgba(0, 0, 0, 0.1)'
                      : '0 2px 8px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  {/* Header row — always visible */}
                  <div className="flex items-center gap-3 px-5 py-4">
                    <div className="w-8 h-8 rounded-lg bg-on-surface text-surface flex items-center justify-center text-xs font-black flex-shrink-0">
                      {uc.id}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      {uc.tag}
                    </span>
                    <span
                      className="material-symbols-outlined text-on-surface-variant text-xl ml-auto transition-transform duration-300"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      expand_more
                    </span>
                  </div>

                  {/* Expandable content */}
                  {isOpen && (
                    <div className="px-5 pb-5 space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-on-surface font-headline leading-tight">
                        {uc.title}
                      </h3>
                      <div className="h-px bg-on-surface/10" />
                      <div className="space-y-3">
                        {uc.steps.map((step, sIdx) => (
                          <div key={sIdx} className="flex gap-3 items-start">
                            <div className="w-6 h-6 rounded-full bg-on-surface text-surface flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {sIdx + 1}
                            </div>
                            <p className="text-sm sm:text-base text-on-surface/80 leading-relaxed">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="h-px bg-on-surface/10" />
                      <div className="flex gap-3 items-start">
                        <span
                          className="material-symbols-outlined text-on-surface text-xl mt-0.5 flex-shrink-0"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          arrow_forward
                        </span>
                        <p className="text-sm sm:text-base font-semibold text-on-surface">
                          {uc.result}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* ==================== DESKTOP: Stacked cards with hover ==================== */}
        <div
          className="relative overflow-hidden hidden md:block"
          style={{
            height: CARD_HEIGHT_DESKTOP + (N - 1) * TOP_OFFSET_DESKTOP,
          }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {useCases.map((uc, idx) => {
            const isActive = idx === activeIndex;
            const isSlid = idx < activeIndex;

            const baseLeft = (N - 1 - idx) * LEFT_OFFSET_DESKTOP;
            const baseTop = (N - 1 - idx) * TOP_OFFSET_DESKTOP;

            const left = isSlid ? baseLeft + 700 : baseLeft;
            const top = isSlid ? baseTop + 20 : baseTop;

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
                  width: `calc(100% - ${(N - 1) * LEFT_OFFSET_DESKTOP}px)`,
                  height: CARD_HEIGHT_DESKTOP,
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
                  {/* Number badge + tag */}
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
                      <div className="px-10 lg:px-14 pt-14 lg:pt-16 pb-5">
                        <h3 className="text-3xl lg:text-4xl font-bold text-on-surface font-headline leading-tight">
                          {uc.title}
                        </h3>
                      </div>

                      <div className="mx-10 lg:mx-14 h-px bg-on-surface/10" />

                      <div className="px-10 lg:px-14 py-6 space-y-4 flex-1">
                        {uc.steps.map((step, sIdx) => (
                          <div key={sIdx} className="flex gap-4 items-start">
                            <div className="w-7 h-7 rounded-full bg-on-surface text-surface flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {sIdx + 1}
                            </div>
                            <p className="text-lg lg:text-xl text-on-surface/80 leading-relaxed">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mx-10 lg:mx-14 h-px bg-on-surface/10" />

                      <div className="px-10 lg:px-14 py-5 flex gap-4 items-start">
                        <span
                          className="material-symbols-outlined text-on-surface text-2xl mt-0.5 flex-shrink-0"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          arrow_forward
                        </span>
                        <p className="text-lg lg:text-xl font-semibold text-on-surface">
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
        <div className="text-center pt-10 md:pt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 signature-gradient text-on-primary px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <span className="material-symbols-outlined text-base">send</span>
            Try It Now on Telegram or Zalo
          </a>
        </div>
      </div>
    </section>
  );
}
