import Image from 'next/image';
import { useState } from 'react';

const Follow = () => {
  const [showDemoText, setShowDemoText] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowDemoText(true);
  };

  return (
    <section className="bg-slate-950 py-16 text-white" id="contact">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800">
            <Image
              src="https://static.wixstatic.com/media/503ea4_ed9a38760ae04aab86b47e82525fdcac~mv2.jpg/v1/fill/w_645,h_561,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/503ea4_ed9a38760ae04aab86b47e82525fdcac~mv2.jpg"
              alt="Artist portrait"
              width={645}
              height={561}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">Stay connected</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Join the mailing list for first access.</h2>
          <p className="mt-4 text-base text-slate-300">
            Receive early ticket drops, exclusive merch access, and behind-the-scenes stories from the Crystal
            Project team.
          </p>
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Email address</span>
              <input
                type="email"
                required
                className="w-full rounded-full border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
                placeholder="you@example.com"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Join the list
            </button>
          </form>
          {showDemoText && (
            <p className="mt-4 text-sm text-amber-300">
              Demo only: connect this form to your email provider to capture subscribers.
            </p>
          )}
          <div className="mt-8 grid gap-4 text-sm text-slate-400 sm:grid-cols-2">
            <p>Newsletter cadence: twice per month.</p>
            <p>Zero spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
