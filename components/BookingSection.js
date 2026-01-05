import { useState } from 'react';

const initialFormState = {
  name: '',
  email: '',
  service: 'Release strategy',
  budget: 'Under $5k',
  preferredDate: '',
  message: '',
};

const BookingSection = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const nextErrors = {};
    if (!formState.name.trim()) {
      nextErrors.name = 'Please add your name.';
    }
    if (!formState.email.trim()) {
      nextErrors.email = 'Please add a valid email.';
    }
    if (!formState.message.trim()) {
      nextErrors.message = 'Tell us about the project.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    setStatus({ state: 'loading', message: '' });
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.message || 'Something went wrong.');
      }

      setStatus({ state: 'success', message: 'Thanks! We will reply within 48 hours.' });
      setFormState(initialFormState);
      setErrors({});
    } catch (error) {
      setStatus({ state: 'error', message: error.message || 'Unable to send request.' });
    }
  };

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
          <form className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950 p-6" onSubmit={handleSubmit}>
            <label className="block text-sm">
              <span className="mb-2 block text-slate-300">Name</span>
              <input
                required
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Your name"
              />
              {errors.name && <p className="mt-2 text-xs text-rose-300">{errors.name}</p>}
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-slate-300">Email</span>
              <input
                required
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-2 text-xs text-rose-300">{errors.email}</p>}
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-slate-300">Project focus</span>
              <select
                name="service"
                value={formState.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <option>Release strategy</option>
                <option>Merch capsule</option>
                <option>Live activation</option>
                <option>Brand partnership</option>
              </select>
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-2 block text-slate-300">Budget range</span>
                <select
                  name="budget"
                  value={formState.budget}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  <option>Under $5k</option>
                  <option>$5k - $15k</option>
                  <option>$15k - $30k</option>
                  <option>$30k+</option>
                </select>
              </label>
              <label className="block text-sm">
                <span className="mb-2 block text-slate-300">Preferred date</span>
                <input
                  name="preferredDate"
                  type="date"
                  value={formState.preferredDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="mb-2 block text-slate-300">Message</span>
              <textarea
                required
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Tell us about your upcoming release."
              />
              {errors.message && <p className="mt-2 text-xs text-rose-300">{errors.message}</p>}
            </label>
            <button
              type="submit"
              disabled={status.state === 'loading'}
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.state === 'loading' ? 'Submitting...' : 'Request a proposal'}
            </button>
            {status.message && (
              <p
                className={`text-xs ${
                  status.state === 'success' ? 'text-emerald-300' : 'text-rose-300'
                }`}
              >
                {status.message}
              </p>
            )}
            <p className="text-xs text-slate-500">
              Demo flow — connect your email service or CRM in <code>/pages/api/booking.js</code>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
