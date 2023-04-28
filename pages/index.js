import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import Hero from '../components/herosection'
import Sales from '../components/Sales'
import Merch from '../components/Merch'
import Follow from '../components/follow'
import Footer from '../components/footer'
import Gullary from '../components/gullary'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // When the component loads, check for cart items in local storage
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
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  return (
    <>
    <Navbar
    cartItems={cartItems}
    isCartOpen={isCartOpen}
    setIsCartOpen={setIsCartOpen}
  />
   <div className="  py-4 px-4 rounded-lg">
         
         {isCartOpen && (
             <div className="absolute top-20 right-0 w-64 sm:w-80 md:w-96 lg:w-128 bg-white shadow-lg rounded-lg">
             {cartItems.length > 0 ? (
               <div className="flex flex-col p-4">
                 {cartItems.map((item) => (
                   <div
                     key={item.id}
                     className="flex items-center justify-between mb-4"
                   >
                    <div>
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 mr-4" />
                       <p className="font-semibold">{item.name}</p>
                       <p className="text-gray-500">${item.price}.00 x {item.quantity}</p>
                     </div>
                     <div className="flex items-center border rounded py-2 px-1">
                       <button
                         className="text-black hover:text-gray-700"
                         onClick={() => handleRemoveFromCart(item)}
                         >
                         <FontAwesomeIcon icon={faMinus} />
                         </button>
                         <p className="mx-2">{item.quantity}</p>
                         <button
                         className="text-black hover:text-gray-700"
                         onClick={() => handleAddToCart(item)}
                         >
                         <FontAwesomeIcon icon={faPlus} />
                         </button>
                         </div>
                         
                     <button
                       className="text-red-500 ml-2 hover:text-red-700"
                       onClick={() => handleRemoveFromCart(item)}
                     >
                       X
                     </button>

                   </div>
                 ))}
               
   <div className="flex flex-col mt-8">
     <h2 className="text-lg font-medium">Order summary</h2>
     <div className="flex justify-between mt-4">
     </div>
     <div className="flex justify-between mt-4">
       <span>Estimate Shipping</span>
       <span>FREE</span>
     </div>
     <div className="flex justify-between mt-4">
     <p className="text-lg font-semibold">Total: ${calculateTotal()}.00</p>
     </div>
     <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-8">Checkout</button>
   </div>
                 
               </div>
             ) : (
               <p className="p-4">Your cart is empty.</p>
             )}
           </div>
         )}
       </div>
    <Hero />
    <Sales />
    <Gullary />
    <br />
    <Merch />
    
    <Follow />
    
    <Footer />
    </>
  )
}
