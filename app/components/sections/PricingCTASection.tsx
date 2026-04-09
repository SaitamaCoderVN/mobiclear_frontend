'use client';

import { useState } from 'react';

const COMMANDS = {
  vi: 'đăng ký VETC-20240029',
  en: 'register VETC-20240029',
};

export default function PricingCTASection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (key: 'vi' | 'en') => {
    const text = COMMANDS[key];
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const steps = [
    {
      step: '01',
      icon: 'chat',
      title: 'Open the Bot',
      description: 'Open Zalo or Telegram and search for MobiClear bot.',
    },
    {
      step: '02',
      icon: 'app_registration',
      title: 'Register Your VETC',
      description: 'Send the registration command below to activate the bot. The bot only responds in Vietnamese.',
    },
    {
      step: '03',
      icon: 'check_circle',
      title: 'You\'re All Set',
      description: 'Once registered, type "help" to see all available commands — book a wash, check prices, find nearby stations, and more.',
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-surface-container-low to-surface py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
      id="contact"
    >
      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        {/* Heading */}
        <div className="text-center space-y-4 sm:space-y-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline text-on-surface tracking-tight">
            Try Your AI Manager — Free
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Chat with our AI bot right now. Just register your VETC code and start booking in seconds.
          </p>
        </div>

        {/* Main content: Setup Guide + Bot Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Left: Step-by-step Setup Guide */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-on-surface font-headline">
              Quick Setup Guide
            </h3>

            <div className="space-y-4">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="flex gap-4 items-start bg-surface-container-lowest rounded-2xl p-4 sm:p-5 ambient-shadow"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-on-surface text-surface flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-lg sm:text-xl">{s.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        Step {s.step}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-on-surface mb-1">
                      {s.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Command boxes with copy buttons */}
            <div className="space-y-3">
              {/* Vietnamese command */}
              <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-4 sm:p-5 space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-inverse-on-surface/60">
                    Vietnamese
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/30 text-primary font-bold uppercase">Recommended</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <code className="flex-1 font-mono text-sm sm:text-base bg-white/10 rounded-lg px-3 sm:px-4 py-2.5 select-all">
                    {COMMANDS.vi}
                  </code>
                  <button
                    onClick={() => handleCopy('vi')}
                    className={`flex items-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 flex-shrink-0 ${
                      copiedKey === 'vi'
                        ? 'bg-tertiary text-on-tertiary'
                        : 'bg-primary text-on-primary hover:shadow-lg active:scale-95'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {copiedKey === 'vi' ? 'check' : 'content_copy'}
                    </span>
                    {copiedKey === 'vi' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* English command */}
              <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-4 sm:p-5 space-y-2.5">
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-inverse-on-surface/60">
                  English
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <code className="flex-1 font-mono text-sm sm:text-base bg-white/10 rounded-lg px-3 sm:px-4 py-2.5 select-all">
                    {COMMANDS.en}
                  </code>
                  <button
                    onClick={() => handleCopy('en')}
                    className={`flex items-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 flex-shrink-0 ${
                      copiedKey === 'en'
                        ? 'bg-tertiary text-on-tertiary'
                        : 'bg-primary text-on-primary hover:shadow-lg active:scale-95'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {copiedKey === 'en' ? 'check' : 'content_copy'}
                    </span>
                    {copiedKey === 'en' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="text-[10px] sm:text-xs text-on-surface-variant text-center">
                Currently the system only accepts VETC-20240029 for demo purposes
              </div>
            </div>
          </div>

          {/* Right: Screenshot + Bot Links */}
          <div className="space-y-6">
            {/* Screenshot */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden ambient-shadow bg-surface-container-lowest">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/guide_setup.jpg"
                alt="Bot setup guide showing VETC registration and available commands"
                className="w-full h-auto"
              />
            </div>

            {/* Bot Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Telegram */}
              <a
                href="https://t.me/mobiclear_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-3 bg-surface-container-lowest ambient-shadow transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Telegram_logo.svg" alt="Telegram" className="w-14 h-14 sm:w-16 sm:h-16" />
                </div>
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-bold text-on-surface font-headline">Telegram</h3>
                  <p className="text-xs text-on-surface-variant">@mobiclear_bot</p>
                </div>
                <div className="signature-gradient text-on-primary px-4 sm:px-6 py-2 rounded-xl font-bold text-xs sm:text-sm tracking-wide uppercase">
                  Chat Now
                </div>
              </a>

              {/* Zalo */}
              <a
                href="https://zalo.me/1902829874729738998"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-3 bg-surface-container-lowest ambient-shadow transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Icon_of_Zalo.svg" alt="Zalo" className="w-14 h-14 sm:w-16 sm:h-16" />
                </div>
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-bold text-on-surface font-headline">Zalo</h3>
                  <p className="text-xs text-on-surface-variant">MobiClear Official</p>
                </div>
                <div className="bg-[#0068FF] text-white px-4 sm:px-6 py-2 rounded-xl font-bold text-xs sm:text-sm tracking-wide uppercase">
                  Chat Now
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Supporting Text */}
        <p className="text-center text-sm text-on-surface-variant">
          No account needed. Register your VETC code and our AI responds in under 2 seconds.
        </p>
      </div>
    </section>
  );
}
