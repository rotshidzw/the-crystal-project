import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const Login = () => {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus({
      state: 'success',
      message: 'Demo login only. Connect NextAuth or Clerk for real authentication.',
    });
  };

  return (
    <>
      <Navbar cartItems={[]} isCartOpen={false} setIsCartOpen={() => {}} />
      <main className="bg-white">
        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">Account</p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">Sign in to your account</h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Access saved orders, shipping details, and exclusive drops.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-xl px-4 sm:px-6 lg:px-8">
            <form className="space-y-6 rounded-3xl border border-slate-200 p-8" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                  Remember me
                </label>
                <Link href="#" className="text-slate-600 hover:text-slate-900">
                  Forgot password?
                </Link>
              </div>
              <button className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
                Sign in
              </button>
              {status.message && (
                <p className="text-sm text-emerald-600" role="status">
                  {status.message}
                </p>
              )}
              <p className="text-center text-sm text-slate-500">
                Don&apos;t have an account? <span className="font-semibold">Create one in the next phase.</span>
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
