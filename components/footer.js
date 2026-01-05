import Link from 'next/link';
import { FaInstagram, FaSpotify, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-lg font-semibold tracking-[0.3em] text-slate-900">ROTSHIDZWA</p>
            <p className="mt-4 text-sm text-slate-600">
              Boutique creative studio delivering premium music, merchandise, and storytelling experiences.
            </p>
            <div className="mt-6 flex items-center gap-4 text-slate-500">
              <a aria-label="Spotify" className="transition hover:text-slate-900" href="#">
                <FaSpotify />
              </a>
              <a aria-label="YouTube" className="transition hover:text-slate-900" href="#">
                <FaYoutube />
              </a>
              <a aria-label="Instagram" className="transition hover:text-slate-900" href="#">
                <FaInstagram />
              </a>
              <a aria-label="TikTok" className="transition hover:text-slate-900" href="#">
                <FaTiktok />
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a href="#about" className="transition hover:text-slate-900">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-slate-900">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-slate-900">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Support</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/Faq" className="transition hover:text-slate-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/Terms" className="transition hover:text-slate-900">
                  Terms &amp; Privacy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="transition hover:text-slate-900">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Rotshidzwa. All rights reserved.</span>
          <span>Built for modern fans. Ready for scale.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
