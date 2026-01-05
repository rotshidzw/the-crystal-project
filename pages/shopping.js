import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import CartDropdown from '../components/CartDropdown';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    id: 1,
    name: 'Sweatshirt',
    price: 85.0,
    imageUrl:
      'https://static.wixstatic.com/media/84770f_c50fc42bd36b484e8aa0c8143dce4eee~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_c50fc42bd36b484e8aa0c8143dce4eee~mv2.jpg',
    color: 'Dark Purple',
    size: 'XL',
    quantity: 2,
  },
  {
    id: 2,
    name: 'Poster',
    price: 85.0,
    imageUrl:
      'https://static.wixstatic.com/media/84770f_c8fbb3ec00f74e1499730ea069fc8a57~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_c8fbb3ec00f74e1499730ea069fc8a57~mv2.jpg',
    color: 'Dark Purple',
    size: 'XL',
    quantity: 2,
  },
  {
    id: 3,
    name: 'The Crystal Project Vinyl',
    price: 85.0,
    imageUrl:
      'https://static.wixstatic.com/media/c22c23_e4d2c14db3ad468e9df16fa90e610b34~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_e4d2c14db3ad468e9df16fa90e610b34~mv2.jpg',
    color: 'Dark Purple',
    size: 'XL',
    quantity: 2,
  },
  {
    id: 4,
    name: 'Cap Hat',
    price: 85.0,
    imageUrl:
      'https://static.wixstatic.com/media/c22c23_0dbf9c73942946e0ade8d00c6a1ab483~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_0dbf9c73942946e0ade8d00c6a1ab483~mv2.jpg',
    color: 'Dark Purple',
    size: 'XL',
    quantity: 2,
  },
  {
    id: 5,
    name: 'Pink Sweatshirt',
    price: 85.0,
    imageUrl:
      'https://static.wixstatic.com/media/84770f_c50fc42bd36b484e8aa0c8143dce4eee~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_c50fc42bd36b484e8aa0c8143dce4eee~mv2.jpg',
    color: 'Dark Purple',
    size: 'XL',
    quantity: 2,
  },
  {
    id: 6,
    name: 'Phone Case',
    price: 85.0,
    imageUrl:
      'https://static.wixstatic.com/media/c22c23_ed52ee9d67c04816ba572fb4f904bedd~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_ed52ee9d67c04816ba572fb4f904bedd~mv2.jpg',
    color: 'Dark Purple',
    size: 'XL',
    quantity: 2,
  },
  {
    id: 7,
    name: 'Beanie',
    price: 85.0,
    imageUrl:
      'https://static.wixstatic.com/media/c22c23_1d91580fe04a47c08a933f5c394e64e9~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_1d91580fe04a47c08a933f5c394e64e9~mv2.jpg',
    color: 'Dark Purple',
    size: 'XL',
    quantity: 2,
  },
  {
    id: 8,
    name: 'CD Edition',
    price: 85.0,
    imageUrl:
      'https://static.wixstatic.com/media/c22c23_1d9da3cbf6be467ca2e5bd25b7ad2961~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_1d9da3cbf6be467ca2e5bd25b7ad2961~mv2.jpg',
    color: 'Dark Purple',
    size: 'XL',
    quantity: 2,
  },
  {
    id: 9,
    name: 'Pouch Pack',
    price: 85.0,
    imageUrl:
      'https://static.wixstatic.com/media/c22c23_ef44449a6e6946c9baf0782b22fa0822~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_ef44449a6e6946c9baf0782b22fa0822~mv2.jpg',
    color: 'Dark Purple',
    size: 'XL',
    quantity: 2,
  },
];

export default function Shopping() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemId, setCartItemId] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

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
    setCartItemId(item.id);
    setTimeout(() => {
      setCartItemId(null);
    }, 2000);
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

  const handleCheckoutClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
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
          onCheckout={handleCheckoutClick}
          checkoutHref="/checkout"
          note={
            <AnimatePresence>
              {showMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="rounded-xl bg-amber-100 px-3 py-2 text-center text-xs font-semibold text-amber-700"
                >
                  Demo only — connect checkout to your payment provider.
                </motion.div>
              )}
            </AnimatePresence>
          }
        />
      )}
      <main className="bg-white">
        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">Merch</p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">Crystal Collection</h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Premium apparel and collector drops designed in limited runs. Each piece ships with premium
              packaging and limited-edition inserts.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <article key={item.id} className="flex h-full flex-col rounded-3xl border border-slate-200 p-4">
                  <div className="relative h-60 overflow-hidden rounded-2xl">
                    <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="mt-4 flex flex-1 flex-col">
                    <h2 className="text-lg font-semibold text-slate-900">{item.name}</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      {item.color} · {item.size}
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-900">${item.price}.00</p>
                    <button
                      className="mt-4 w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to cart
                    </button>
                    <AnimatePresence>
                      {cartItemId === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          className="mt-3 rounded-xl bg-slate-100 px-3 py-2 text-center text-xs font-semibold text-slate-600"
                        >
                          Added to cart
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-12 text-white">
          <div className="mx-auto w-full max-w-6xl px-4 text-center text-sm sm:px-6 lg:px-8">
            For booking requirements — info@mysite.com | Phone: 123-456-7890
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
