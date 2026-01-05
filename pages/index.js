import Navbar from '../components/Navbar';
import Hero from '../components/herosection';
import Sales from '../components/Sales';
import Merch from '../components/Merch';
import Follow from '../components/follow';
import Footer from '../components/footer';
import Gallery from '../components/gullary';
import ServicesSection from '../components/ServicesSection';
import PricingSection from '../components/PricingSection';
import BookingSection from '../components/BookingSection';
import CartDropdown from '../components/CartDropdown';
import { useState, useEffect } from 'react';

export default function Home() {
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
        <Hero />
        <ServicesSection />
        <Sales />
        <Gallery />
        <Merch />
        <PricingSection />
        <BookingSection />
        <Follow />
      </main>
      <Footer />
    </>
  );
}
