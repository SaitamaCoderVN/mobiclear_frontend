'use client';

export default function PricingCTASection() {
  return (
    <section
      className="bg-gradient-to-b from-surface-container-low to-surface py-24 md:py-32 px-6 md:px-8 overflow-hidden"
      id="contact"
    >
      <div className="max-w-3xl mx-auto text-center space-y-10">
        {/* Heading */}
        <div className="space-y-5">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline text-on-surface tracking-tight">
            Try Your AI Manager — Free
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Chat with our AI bot right now. See how it handles bookings in under 10 seconds. No signup, no forms—just message us.
          </p>
        </div>

        {/* Telegram & Zalo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          {/* Telegram */}
          <a
            href="https://t.me/mobiclear_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl p-8 md:p-10 flex flex-col items-center gap-5 bg-surface-container-lowest ambient-shadow transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
          >
            {/* Telegram Icon */}
            <div className="w-20 h-20 rounded-full signature-gradient flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-on-surface font-headline">Telegram</h3>
              <p className="text-sm text-on-surface-variant">@mobiclear_bot</p>
            </div>
            <div className="signature-gradient text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300">
              Chat Now
            </div>
          </a>

          {/* Zalo */}
          <a
            href="#"
            className="group relative rounded-3xl p-8 md:p-10 flex flex-col items-center gap-5 bg-surface-container-lowest ambient-shadow transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
          >
            {/* Zalo Icon */}
            <div className="w-20 h-20 rounded-full bg-[#0068FF] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 48 48" fill="white" className="w-10 h-10">
                <path d="M12.5 6C8.91 6 6 8.91 6 12.5v23C6 39.09 8.91 42 12.5 42h23c3.59 0 6.5-2.91 6.5-6.5v-23C42 8.91 39.09 6 35.5 6h-23zm2.14 9h18.72c.87 0 1.57.56 1.57 1.25 0 .42-.24.81-.64 1.06L25 23.62v.01l-2.93 1.74c-.18.1-.17.38.02.46l9.18 3.4c.75.28 1.2.97 1.2 1.72 0 1.02-.87 1.85-1.94 1.85-.21 0-.43-.03-.64-.1l-12.41-4.6a3.3 3.3 0 0 1-2.2-3.07c0-1.12.58-2.17 1.55-2.78L23.4 18H14.64c-.87 0-1.57-.56-1.57-1.25V16.5c0-.69.7-1.5 1.57-1.5z"/>
              </svg>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-on-surface font-headline">Zalo</h3>
              <p className="text-sm text-on-surface-variant">MobiClear Official</p>
            </div>
            <div className="bg-[#0068FF] text-white px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300">
              Chat Now
            </div>
          </a>
        </div>

        {/* Supporting Text */}
        <p className="text-sm text-on-surface-variant">
          No account needed. Just send a message and our AI responds in under 2 seconds.
        </p>
      </div>
    </section>
  );
}
