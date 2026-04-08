'use client';

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 w-full z-50 ambient-shadow"
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-black text-on-surface font-headline tracking-tight">
          MobiClear
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block signature-gradient text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg active:scale-95">
          Contact Us
        </button>

        {/* Mobile CTA */}
        <button className="md:hidden signature-gradient text-on-primary px-4 py-2 rounded-lg font-bold text-xs tracking-wide uppercase transition-all duration-300 hover:shadow-lg active:scale-95">
          Contact
        </button>
      </div>
    </nav>
  );
}
