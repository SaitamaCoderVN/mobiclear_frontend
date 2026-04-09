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
            <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Telegram_logo.svg" alt="Telegram" className="w-20 h-20" />
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
            href="https://zalo.me/1902829874729738998"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl p-8 md:p-10 flex flex-col items-center gap-5 bg-surface-container-lowest ambient-shadow transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
          >
            {/* Zalo Icon */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Icon_of_Zalo.svg" alt="Zalo" className="w-20 h-20" />
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
