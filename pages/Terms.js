import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import CartDropdown from '../components/CartDropdown';

const Terms = () => {
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
          checkoutHref="/checkout"
        />
      )}
      <main className="bg-white">
        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">Policies</p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">Terms &amp; Privacy</h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Transparent policies that keep every experience professional and secure.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 rounded-3xl border border-slate-200 p-8">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Orders &amp; fulfillment</h2>
                <p className="mt-3 text-sm text-slate-600">
                  All orders are confirmed within 24 hours. Limited drops are produced in small batches, so delivery
                  windows are provided at checkout.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Privacy</h2>
                <p className="mt-3 text-sm text-slate-600">
                  We only collect the information needed to fulfill your order. Data is never sold and is stored using
                  secure, industry-standard practices.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Refunds</h2>
                <p className="mt-3 text-sm text-slate-600">
                  Refunds are processed within 5-7 business days after an item is received and inspected.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
