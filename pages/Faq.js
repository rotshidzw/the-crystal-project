import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import CartDropdown from '../components/CartDropdown';

const faqs = [
  {
    question: 'Do you provide international delivery?',
    answer:
      'Yes. We partner with premium logistics providers to ship globally with tracking and insured delivery options.',
  },
  {
    question: 'How do I track my order?',
    answer:
      'You will receive an order confirmation email with tracking details within 24 hours of dispatch.',
  },
  {
    question: 'How do I return an item?',
    answer:
      'Returns are accepted within 14 days of delivery. Contact our team to receive a prepaid return label.',
  },
  {
    question: 'How can I contact your couriers?',
    answer:
      'We manage courier communications on your behalf. Email support and we will provide real-time updates.',
  },
  {
    question: 'What is your returns policy?',
    answer:
      'Items must be unworn and in original packaging. Limited drops are final sale unless damaged on arrival.',
  },
  {
    question: 'What are your delivery options?',
    answer:
      'Standard, express, and VIP timed delivery are available in select regions based on availability.',
  },
];

const Faq = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (item) => {
    if (item.quantity === 1) {
      const updatedCartItems = cartItems.filter((i) => i.id !== item.id);
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
      );
      setCartItems(updatedCartItems);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Navbar cartItems={cartItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      {isCartOpen && (
        <CartDropdown
          cartItems={cartItems}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
          total={calculateTotal()}
        />
      )}
      <main className="bg-white">
        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">Support</p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Everything you need to know about orders, shipping, and support.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl border border-slate-200 p-6">
                  <h2 className="text-lg font-semibold text-slate-900">{faq.question}</h2>
                  <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Faq;
