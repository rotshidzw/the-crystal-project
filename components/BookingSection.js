const BookingSection = () => {
  return (
    <section className="bg-slate-900 py-16 text-white" id="booking">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">Booking</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Let’s build your next release together.</h2>
            <p className="mt-4 text-base text-slate-300">
              Share your goals and we’ll map the launch plan, recommended budget, and timeline within 48 hours.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 p-4">
                <p className="font-semibold text-white">Response time</p>
                <p className="mt-1">Within 2 business days.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 p-4">
                <p className="font-semibold text-white">Preferred projects</p>
                <p className="mt-1">Album campaigns, merch drops, live activations.</p>
              </div>
            </div>
          </div>
          <form className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950 p-6">
            <label className="block text-sm">
              <span className="mb-2 block text-slate-300">Name</span>
              <input
                required
                type="text"
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-slate-300">Email</span>
              <input
                required
                type="email"
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="you@example.com"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-slate-300">Project focus</span>
              <select className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20">
                <option>Release strategy</option>
                <option>Merch capsule</option>
                <option>Live activation</option>
                <option>Brand partnership</option>
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-slate-300">Message</span>
              <textarea
                required
                rows={4}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Tell us about your upcoming release."
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Request a proposal
            </button>
            <p className="text-xs text-slate-500">This is a demo form. Connect your email provider to go live.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
