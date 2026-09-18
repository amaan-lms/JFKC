import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const generalLinks = [
  { label: 'Career', href: '#career' },
  { label: 'Collaboration', href: '#collaboration' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms & Conditions', href: '#terms' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: '#facebook',
    path: 'M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z',
  },
  {
    label: 'Twitter',
    href: '#twitter',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'Instagram',
    href: '#instagram',
    path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5m0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5M17.5 6.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z',
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a12] font-[family-name:var(--font-display)] text-white">
      {/* Diagonal texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(135deg, transparent 40%, rgba(249,115,22,0.08) 40%, rgba(249,115,22,0.08) 60%, transparent 60%)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-20 top-0 h-full w-1/2 bg-gradient-to-l from-orange-500/10 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Brand + CTA */}
          <div className="space-y-5">
            <div className="inline-flex items-center rounded-md bg-white px-3 py-2.5 shadow-sm">
              <img src={logo} alt="JF Knowledge Centre" className="h-10 w-auto max-h-12 object-contain" />
            </div>

            <p className="text-base text-white/90">Your Reliable Knowledge Partner</p>

            <a
              href="#who-we-are"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              About us
            </a>
          </div>

          {/* Official Info */}
          <div>
            <h4 className="text-lg font-bold text-white">Official Info:</h4>
            <div className="mt-2 mb-5 h-0.5 w-14 bg-orange-500" />

            <ul className="space-y-4 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                <span>GF-41, Omaxe Square, Jasola District Centre, New Delhi-25</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-orange-500" />
                <a href="tel:+919818238969" className="transition-colors hover:text-orange-400">
                  +91 9818238969
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-orange-500" />
                <a href="mailto:info@jfknowledge.com" className="transition-colors hover:text-orange-400">
                  info@jfknowledge.com
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/80 transition-colors hover:text-orange-400"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* General links */}
          <div>
            <h4 className="text-lg font-bold text-white">General :</h4>
            <div className="mt-2 mb-5 h-0.5 w-14 bg-orange-500" />

            <ul className="space-y-3 text-sm text-white/85">
              {generalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-orange-400"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 bg-white" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/80">
          <p>2026 © All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
