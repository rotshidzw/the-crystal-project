import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#booking', label: 'Booking' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ cartItems = [], isCartOpen, setIsCartOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold tracking-[0.2em] text-slate-900">
            ROTSHI
          </Link>
          <span className="hidden text-xs uppercase tracking-[0.4em] text-slate-400 sm:inline">
            Creative Studio
          </span>
        </div>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="rounded-full border border-slate-900 px-4 py-2 text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            Book a Call
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="relative rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            onClick={() => setIsCartOpen(!isCartOpen)}
            aria-label="Open cart"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartItems.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                {cartItems.length}
              </span>
            )}
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-900 md:hidden"
            onClick={handleToggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate-700 transition hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
