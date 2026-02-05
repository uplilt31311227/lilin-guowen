'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: '首頁' },
  { href: '/methodology', label: '閱破實驗室' },
  { href: '/exam-strategy', label: '考試策略' },
  { href: '/testimonials', label: '學員見證' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--navy)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2">
            <Image
              src="/lilin-guowen/images/立霖國文書法字 去背.png"
              alt="立霖國文"
              width={160}
              height={44}
              className="h-10 sm:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--navy)] hover:text-[var(--gold)] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/diagnosis"
              className="btn-primary"
            >
              免費診斷
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[var(--navy)]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--navy)]/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--navy)] hover:text-[var(--gold)] transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/diagnosis"
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                免費診斷
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
