'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const navLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset form
    setEmail('');
  };

  return (
    <footer className="bg-surface-container-low w-full py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Email Signup Section */}
        <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Text */}
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-on-surface font-headline">
                Get Smarter About Bookings
              </h3>
              <p className="text-on-surface-variant text-base">
                Weekly tips, AI updates, and insights from Vietnam&apos;s top car wash operators.
              </p>
            </div>

            {/* Right - Form */}
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-surface-container-high text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="signature-gradient text-on-primary px-6 py-3 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg active:scale-95 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 pt-8">
          <div className="flex items-center gap-6">
            {/* Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo_mobiclear.jpg" alt="MobiClear" className="h-8 w-auto" />

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-base">mail</span>
              </a>
              <a
                href="#"
                className="text-on-surface-variant hover:text-primary transition-colors"
                aria-label="Website"
              >
                <span className="material-symbols-outlined text-base">language</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-on-surface-variant hover:text-on-surface transition-colors text-sm md:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-on-surface-variant text-sm md:text-base">
            © {currentYear} MobiClear AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
