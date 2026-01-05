import Image from 'next/image';
import { FaInstagram, FaSpotify, FaYoutube, FaTiktok } from 'react-icons/fa';

const metrics = [
  { value: '12M+', label: 'Streams across platforms' },
  { value: '40+', label: 'Brand collaborations' },
  { value: '8', label: 'International features' },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50" id="about">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex-1">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-slate-500">
            The Crystal Project
          </p>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
            A premium music experience crafted for modern audiences.
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            We build immersive releases, boutique merch drops, and fan-first experiences that scale from
            intimate showcases to global campaigns.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Book a call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
            >
              Explore services
            </a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-2xl font-semibold text-slate-900">{metric.value}</p>
                <p className="text-sm text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4 text-slate-500">
            <span className="text-xs uppercase tracking-[0.4em]">Follow</span>
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
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <Image
              src="https://static.wixstatic.com/media/503ea4_ed9a38760ae04aab86b47e82525fdcac~mv2.jpg/v1/fill/w_645,h_561,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/503ea4_ed9a38760ae04aab86b47e82525fdcac~mv2.jpg"
              alt="The Crystal Project cover art"
              width={645}
              height={561}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 backdrop-blur">
              New release
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
