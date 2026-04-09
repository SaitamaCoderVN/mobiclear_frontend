'use client';

import { useState } from 'react';

const layers = [
  {
    id: 'interface',
    label: 'Messaging',
    icon: 'forum',
    color: 'bg-primary',
    textColor: 'text-on-primary',
    accentColor: '#0051c9',
    title: 'Multi-Channel Interface Layer',
    description:
      'Deep integration with Zalo, Telegram, and popular messaging platforms in Vietnam. Understands natural Vietnamese context — including slang, abbreviations, and regional dialects.',
    features: ['Zalo OA & Telegram Bot', 'Vietnamese NLP Processing', 'Simultaneous Multi-Channel'],
  },
  {
    id: 'brain',
    label: 'Processing',
    icon: 'psychology',
    color: 'bg-tertiary-container',
    textColor: 'text-on-tertiary-container',
    accentColor: '#008075',
    title: 'AI Processing Layer',
    description:
      'The central brain of the system — automatically analyzes requests, optimizes scheduling, detects conflicts, and recommends the best solutions. The more it\'s used, the smarter it gets.',
    features: ['Real-time Schedule Optimization', 'Self-Learning from Operations', 'Conflict Detection & Resolution'],
  },
  {
    id: 'customize',
    label: 'Customization',
    icon: 'tune',
    color: 'bg-[#7c4dff]',
    textColor: 'text-white',
    accentColor: '#7c4dff',
    title: 'Business Customization Layer',
    description:
      'Every car wash has its own workflow. Tasco allows flexible configuration — from operating hours, service types, pricing, to VIP priority rules — all without writing a single line of code.',
    features: ['No-Code Configuration', 'Custom Business Rules', 'Multi-Location Management'],
  },
  {
    id: 'data',
    label: 'Data',
    icon: 'database',
    color: 'bg-inverse-surface',
    textColor: 'text-inverse-on-surface',
    accentColor: '#2d3133',
    title: 'Data & Security Layer',
    description:
      'Customer data stored in Vietnam, end-to-end encrypted, fully compliant with local data privacy regulations. Real-time analytics dashboard helps owners make faster decisions.',
    features: ['Vietnam Data Residency', 'AES-256 Encryption', 'Real-time Analytics Dashboard'],
  },
];

export default function TascoLayerSection() {
  const [activeLayer, setActiveLayer] = useState('interface');
  const active = layers.find((l) => l.id === activeLayer) ?? layers[0];

  return (
    <section className="bg-surface-container-low py-24 md:py-32 px-6 md:px-8" id="tasco">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">
            <span className="material-symbols-outlined mr-2 text-base">layers</span>
            Tasco Architecture
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline">
            AI Agent Layer Architecture
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            Tasco is the middleware layer built by MobiClear — making the AI Agent easily customizable, smarter over time, and optimized for the Vietnamese market.
          </p>
        </div>

        {/* Architecture Visualization */}
        <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
          {/* Left: Layer Stack Navigation */}
          <div className="flex md:flex-col gap-3">
            {layers.map((layer, idx) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-left transition-all duration-300 w-full ${
                  activeLayer === layer.id
                    ? `${layer.color} ${layer.textColor} ambient-shadow scale-[1.02]`
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-2xl flex-shrink-0">{layer.icon}</span>
                <div className="hidden md:block">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-70">
                    Layer {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="font-bold text-sm">{layer.label}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Layer Detail */}
          <div className="bg-surface-container-lowest rounded-3xl ambient-shadow p-8 md:p-12 space-y-8">
            {/* Layer Title */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl ${active.color} ${active.textColor} flex items-center justify-center flex-shrink-0`}>
                  <span className="material-symbols-outlined text-2xl">{active.icon}</span>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                    {active.label}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-on-surface font-headline">
                    {active.title}
                  </h3>
                </div>
              </div>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                {active.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              {active.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 bg-surface-container-low rounded-xl px-4 py-3"
                >
                  <span
                    className="material-symbols-outlined text-tertiary text-lg flex-shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-sm font-medium text-on-surface">{feature}</span>
                </div>
              ))}
            </div>

            {/* Architecture Diagram */}
            <div className="rounded-2xl bg-surface-container-low p-6 md:p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-6 text-center">
                Tasco Architecture Stack
              </div>

              <div className="relative max-w-lg mx-auto">
                {layers.map((layer, idx) => {
                  const isActive = activeLayer === layer.id;
                  const widthPercent = 100 - idx * 5;

                  return (
                    <div key={layer.id} className="flex flex-col items-center">
                      <button
                        onClick={() => setActiveLayer(layer.id)}
                        className="w-full transition-all duration-300"
                        style={{ maxWidth: `${widthPercent}%` }}
                      >
                        <div
                          className={`relative flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 cursor-pointer ${
                            isActive
                              ? `${layer.color} ${layer.textColor} ambient-shadow scale-[1.04]`
                              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 ${
                              isActive ? 'bg-white/20' : 'bg-surface-container-lowest'
                            }`}
                          >
                            {String(idx + 1).padStart(2, '0')}
                          </div>

                          <span className="material-symbols-outlined text-xl flex-shrink-0">
                            {layer.icon}
                          </span>

                          <div className="flex-1 text-left">
                            <div className="text-sm font-bold">{layer.title}</div>
                          </div>

                          {isActive && (
                            <div className="w-2.5 h-2.5 rounded-full bg-white/60 flex-shrink-0 animate-pulse" />
                          )}
                        </div>
                      </button>

                      {idx < layers.length - 1 && (
                        <div className="flex flex-col items-center py-1.5">
                          <div
                            className="w-px h-3 transition-colors duration-300"
                            style={{ backgroundColor: isActive ? active.accentColor : 'rgba(0,81,201,0.2)' }}
                          />
                          <svg width="12" height="8" viewBox="0 0 12 8" className="transition-colors duration-300">
                            <path
                              d="M6 8L0 0h12z"
                              fill={isActive ? active.accentColor : 'rgba(0,81,201,0.2)'}
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-2 mt-6 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">swap_vert</span>
                Bi-directional data flow between layers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
