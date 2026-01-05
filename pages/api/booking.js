import { getSqlClient } from '../../lib/neon';

const rateLimitMap = new Map();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);

const hitRateLimit = (identifier) => {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier) || { count: 0, start: now };

  if (now - entry.start > WINDOW_MS) {
    rateLimitMap.set(identifier, { count: 1, start: now });
    return false;
  }

  entry.count += 1;
  rateLimitMap.set(identifier, entry);
  return entry.count > MAX_REQUESTS;
};

const ensureBookingTable = async (sql) => {
  await sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      service TEXT,
      budget TEXT,
      preferred_date TEXT,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const identifier = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  if (hitRateLimit(identifier)) {
    return res.status(429).json({ message: 'Too many requests. Try again soon.' });
  }

  const { name, email, service, budget, preferredDate, message } = req.body || {};

  if (!name || !email || !message || !isValidEmail(email)) {
    return res.status(400).json({ message: 'Please provide a valid name, email, and message.' });
  }

  const payload = {
    name,
    email,
    service,
    budget,
    preferredDate,
    message,
    receivedAt: new Date().toISOString(),
  };

  console.info('Booking request received', payload);

  const sql = getSqlClient();
  if (sql) {
    try {
      await ensureBookingTable(sql);
      await sql`
        INSERT INTO bookings (name, email, service, budget, preferred_date, message)
        VALUES (${name}, ${email}, ${service}, ${budget}, ${preferredDate}, ${message})
      `;
    } catch (error) {
      console.error('Booking insert failed', error);
    }
  }

  const hasEmailProvider = Boolean(process.env.RESEND_API_KEY || process.env.SMTP_HOST);

  return res.status(200).json({
    status: 'ok',
    providerConfigured: hasEmailProvider,
    databaseConnected: Boolean(sql),
  });
}
