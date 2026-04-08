'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Hero', href: '#hero' },
    { label: 'Demo', href: '#demo' },
    { label: 'AI Agent', href: '#ai-agent' },
    { label: 'Security', href: '#security' },
    { label: 'Compliance', href: '#compliance' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass ambient-shadow">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-black text-on-surface font-headline tracking-tight">
          MobiClear
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant font-medium text-sm hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block signature-gradient text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg active:scale-95">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 items-center justify-center"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-low p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-on-surface-variant font-medium text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="signature-gradient text-on-primary w-full px-6 py-3 rounded-xl font-bold text-sm tracking-wide uppercase transition-all hover:shadow-lg mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
