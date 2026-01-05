import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const Admin = () => {
  const router = useRouter();
  const token = useMemo(() => router.query.token, [router.query.token]);
  const accessToken = process.env.NEXT_PUBLIC_ADMIN_ACCESS_TOKEN;
  const isAuthorized = accessToken && token === accessToken;

  return (
    <>
      <Navbar cartItems={[]} isCartOpen={false} setIsCartOpen={() => {}} />
      <main className="bg-white">
        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">Admin</p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">Operations dashboard</h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Secure space for lead review, order tracking, and campaign analytics.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            {!isAuthorized ? (
              <div className="rounded-3xl border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900">Access required</h2>
                <p className="mt-3 text-sm text-slate-600">
                  Add <code className="rounded bg-slate-100 px-2 py-1">NEXT_PUBLIC_ADMIN_ACCESS_TOKEN</code> to
                  your environment and visit <code className="rounded bg-slate-100 px-2 py-1">/admin?token=</code>
                  with the same value.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200 p-6">
                  <h2 className="text-lg font-semibold text-slate-900">Lead overview</h2>
                  <p className="mt-3 text-sm text-slate-600">
                    Connect your CRM or database to display booking and mailing list submissions here.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6">
                  <h2 className="text-lg font-semibold text-slate-900">Order pipeline</h2>
                  <p className="mt-3 text-sm text-slate-600">
                    Integrate Stripe, Paystack, or Shopify to track order status and fulfillment.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Admin;
