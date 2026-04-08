'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'How It Works', href: '#demo' },
    { label: 'Features', href: '#ai-agent' },
    { label: 'Pricing', href: '#pricing-cta' },
    { label: 'FAQ', href: '#faq' },
  ];

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
        <a href="#hero" className="text-2xl font-black text-on-surface font-headline tracking-tight">
          MobiClear
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#pricing-cta"
            className="signature-gradient text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            Start Free
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-on-surface"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#pricing-cta"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center signature-gradient text-on-primary px-6 py-3 rounded-xl font-bold text-sm tracking-wide uppercase mt-2"
          >
            Start Free
          </a>
        </div>
      )}
    </nav>
  );
}
