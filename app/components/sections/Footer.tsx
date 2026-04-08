'use client';

export default function Footer() {
  const navLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low w-full py-12 px-6 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6 md:gap-4">
        {/* Logo */}
        <div className="text-lg font-bold text-on-surface font-headline">MobiClear</div>

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
    </footer>
  );
}
