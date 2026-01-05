import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import CartDropdown from '../components/CartDropdown';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  const handleRemoveFromCart = (item) => {
    let updatedCartItems = [];
    if (item.quantity === 1) {
      updatedCartItems = cartItems.filter((i) => i.id !== item.id);
    } else {
      updatedCartItems = cartItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
      );
    }
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
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
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">Checkout</p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">Complete your order</h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Secure checkout for official Crystal Project releases and limited merch drops.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-8">
                <div className="rounded-3xl border border-slate-200 p-6">
                  <h2 className="text-lg font-semibold text-slate-900">Sign in or continue as guest</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Save your details for faster checkout next time, or continue as a guest.
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white">
                      Sign in
                    </button>
                    <button className="rounded-full border border-slate-900 px-6 py-2 text-sm font-semibold text-slate-900">
                      Continue as guest
                    </button>
                  </div>
                </div>

                <form className="space-y-6 rounded-3xl border border-slate-200 p-6">
                  <h2 className="text-lg font-semibold text-slate-900">Delivery details</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm">
                      <span className="mb-2 block text-slate-600">First name</span>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                        placeholder="Alex"
                      />
                    </label>
                    <label className="block text-sm">
                      <span className="mb-2 block text-slate-600">Last name</span>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                        placeholder="Kidd"
                      />
                    </label>
                    <label className="block text-sm sm:col-span-2">
                      <span className="mb-2 block text-slate-600">Email</span>
                      <input
                        type="email"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                        placeholder="you@email.com"
                      />
                    </label>
                    <label className="block text-sm sm:col-span-2">
                      <span className="mb-2 block text-slate-600">Address</span>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                        placeholder="123 Crystal Ave"
                      />
                    </label>
                    <label className="block text-sm">
                      <span className="mb-2 block text-slate-600">City</span>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                        placeholder="Johannesburg"
                      />
                    </label>
                    <label className="block text-sm">
                      <span className="mb-2 block text-slate-600">Postal code</span>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                        placeholder="2001"
                      />
                    </label>
                  </div>
                </form>

                <form className="space-y-6 rounded-3xl border border-slate-200 p-6">
                  <h2 className="text-lg font-semibold text-slate-900">Payment method</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm sm:col-span-2">
                      <span className="mb-2 block text-slate-600">Card number</span>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                        placeholder="1234 5678 9012 3456"
                      />
                    </label>
                    <label className="block text-sm">
                      <span className="mb-2 block text-slate-600">Expiry</span>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                        placeholder="MM/YY"
                      />
                    </label>
                    <label className="block text-sm">
                      <span className="mb-2 block text-slate-600">CVC</span>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                        placeholder="123"
                      />
                    </label>
                  </div>
                  <button className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
                    Place order
                  </button>
                  <p className="text-xs text-slate-500">
                    Demo checkout — connect Stripe, Paystack, or your payment provider to process payments.
                  </p>
                </form>
              </div>

              <aside className="space-y-6">
                <div className="rounded-3xl border border-slate-200 p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-900">Order summary</h2>
                    <Link href="/shopping" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
                      Continue shopping
                    </Link>
                  </div>
                  {cartItems.length === 0 ? (
                    <p className="mt-4 text-sm text-slate-600">Your cart is empty.</p>
                  ) : (
                    <div className="mt-4 space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                          <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                            <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                            <p className="text-xs text-slate-500">Qty {item.quantity}</p>
                          </div>
                          <p className="text-sm font-semibold text-slate-900">${item.price}.00</p>
                        </div>
                      ))}
                      <div className="border-t border-slate-200 pt-4 text-sm">
                        <div className="flex justify-between text-slate-600">
                          <span>Shipping</span>
                          <span>Free</span>
                        </div>
                        <div className="mt-2 flex justify-between text-base font-semibold text-slate-900">
                          <span>Total</span>
                          <span>${calculateTotal()}.00</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
                  Purchases include instant digital download access and premium support.
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
