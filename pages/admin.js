import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const Admin = () => {
  const router = useRouter();
  const token = useMemo(() => router.query.token, [router.query.token]);
  const accessToken = process.env.NEXT_PUBLIC_ADMIN_ACCESS_TOKEN;
  const isAuthorized = accessToken && token === accessToken;
  const [overview, setOverview] = useState({ bookings: [], leads: [], orders: [] });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!isAuthorized) {
      return;
    }

    const fetchOverview = async () => {
      setStatus('loading');
      try {
        const response = await fetch('/api/admin/overview', {
          headers: { 'x-admin-token': accessToken },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data?.message || 'Failed to load admin data.');
        }
        setOverview(data);
        setStatus('success');
      } catch (error) {
        setStatus('error');
      }
    };

    fetchOverview();
  }, [accessToken, isAuthorized]);

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
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
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
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-900">Lead overview</h2>
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Latest 5</span>
                  </div>
                  {status === 'loading' && <p className="mt-4 text-sm text-slate-500">Loading leads...</p>}
                  {status === 'error' && (
                    <p className="mt-4 text-sm text-rose-600">Unable to load admin data.</p>
                  )}
                  {status === 'success' && overview.leads.length === 0 && (
                    <p className="mt-4 text-sm text-slate-500">No leads yet.</p>
                  )}
                  {overview.leads.length > 0 && (
                    <div className="mt-4 overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="text-xs uppercase text-slate-400">
                          <tr>
                            <th className="pb-2">Email</th>
                            <th className="pb-2">Source</th>
                            <th className="pb-2">Created</th>
                          </tr>
                        </thead>
                        <tbody>
                          {overview.leads.map((lead) => (
                            <tr key={lead.id} className="border-t border-slate-100">
                              <td className="py-2 text-slate-700">{lead.email}</td>
                              <td className="py-2 text-slate-500">{lead.source}</td>
                              <td className="py-2 text-slate-500">
                                {new Date(lead.created_at).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 p-6">
                    <h2 className="text-lg font-semibold text-slate-900">Latest bookings</h2>
                    {overview.bookings.length === 0 ? (
                      <p className="mt-4 text-sm text-slate-500">No booking requests yet.</p>
                    ) : (
                      <ul className="mt-4 space-y-3 text-sm text-slate-600">
                        {overview.bookings.map((booking) => (
                          <li key={booking.id} className="rounded-2xl bg-slate-50 p-3">
                            <p className="font-semibold text-slate-800">{booking.name}</p>
                            <p>{booking.email}</p>
                            <p className="text-xs text-slate-400">
                              {booking.service} · {booking.budget}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="rounded-3xl border border-slate-200 p-6">
                    <h2 className="text-lg font-semibold text-slate-900">Recent orders</h2>
                    {overview.orders.length === 0 ? (
                      <p className="mt-4 text-sm text-slate-500">No orders yet.</p>
                    ) : (
                      <ul className="mt-4 space-y-3 text-sm text-slate-600">
                        {overview.orders.map((order) => (
                          <li key={order.id} className="rounded-2xl bg-slate-50 p-3">
                            <p className="font-semibold text-slate-800">Order #{order.id}</p>
                            <p className="text-xs text-slate-400">
                              {new Date(order.created_at).toLocaleDateString()}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
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
