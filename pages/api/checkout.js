const rateLimitMap = new Map();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const identifier = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  if (hitRateLimit(identifier)) {
    return res.status(429).json({ message: 'Too many requests. Try again soon.' });
  }

  const { cartItems = [], customer } = req.body || {};

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return res.status(400).json({ message: 'Cart is empty.' });
  }

  console.info('Checkout initiated', {
    cartCount: cartItems.length,
    customer,
    receivedAt: new Date().toISOString(),
  });

  return res.status(200).json({
    status: 'ok',
    nextStep: 'Connect a payment provider (Stripe/Paystack) to create a checkout session.',
  });
}
