import { getSqlClient } from '../../../lib/neon';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const adminToken = req.headers['x-admin-token'];
  const expectedToken = process.env.NEXT_PUBLIC_ADMIN_ACCESS_TOKEN;

  if (!expectedToken || adminToken !== expectedToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const sql = getSqlClient();
  if (!sql) {
    return res.status(200).json({ bookings: [], leads: [], orders: [] });
  }

  try {
    const bookings = await sql`SELECT id, name, email, service, budget, preferred_date, created_at FROM bookings ORDER BY created_at DESC LIMIT 5`;
    const leads = await sql`SELECT id, email, source, created_at FROM leads ORDER BY created_at DESC LIMIT 5`;
    const orders = await sql`SELECT id, cart, created_at FROM orders ORDER BY created_at DESC LIMIT 5`;

    return res.status(200).json({ bookings, leads, orders });
  } catch (error) {
    console.error('Admin overview fetch failed', error);
    return res.status(500).json({ message: 'Failed to load admin data.' });
  }
}
