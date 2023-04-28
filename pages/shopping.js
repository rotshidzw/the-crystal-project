import React from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
const items = [
  {  id:1,
    name: "SWEATSHIRT",
    price: 85.00,
    imageUrl: "https://static.wixstatic.com/media/84770f_c50fc42bd36b484e8aa0c8143dce4eee~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_c50fc42bd36b484e8aa0c8143dce4eee~mv2.jpg",
     color: "Dark Purple",
     size: "XL",
    quantity: 2, 
  },
  { id:2,
    name: "POSTER",
    price: 85.00,
    imageUrl: "https://static.wixstatic.com/media/84770f_c8fbb3ec00f74e1499730ea069fc8a57~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_c8fbb3ec00f74e1499730ea069fc8a57~mv2.jpg",
     color: "Dark Purple",
     size: "XL",
    quantity: 2, 
  },
  { id:3,
    name: "THE CRYSTAL PROJECT VINYL",
    price: 85.00,
    imageUrl: "https://static.wixstatic.com/media/c22c23_e4d2c14db3ad468e9df16fa90e610b34~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_e4d2c14db3ad468e9df16fa90e610b34~mv2.jpg",
     color: "Dark Purple",
     size: "XL",
    quantity: 2, 
  },
  { id:4,
    name: "CAP HAT",
    price: 85.00,
    imageUrl: "https://static.wixstatic.com/media/c22c23_0dbf9c73942946e0ade8d00c6a1ab483~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_0dbf9c73942946e0ade8d00c6a1ab483~mv2.jpg",
     color: "Dark Purple",
     size: "XL",
    quantity: 2, 
  },
  { id:5,
    name: "PINK SWEATSHIRT",
    price: 85.00,
    imageUrl: "https://static.wixstatic.com/media/84770f_c50fc42bd36b484e8aa0c8143dce4eee~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_c50fc42bd36b484e8aa0c8143dce4eee~mv2.jpg",
     color: "Dark Purple",
     size: "XL",
    quantity: 2, 
  },
  { id:6,
    name: "PHONE CASE",
    price: 85.00,
    imageUrl: "https://static.wixstatic.com/media/c22c23_ed52ee9d67c04816ba572fb4f904bedd~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_ed52ee9d67c04816ba572fb4f904bedd~mv2.jpg",
     color: "Dark Purple",
     size: "XL",
    quantity: 2, 
  },
  { id:7,
    name: "BEANIE",
    price: 85.00,
    imageUrl: "https://static.wixstatic.com/media/c22c23_1d91580fe04a47c08a933f5c394e64e9~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_1d91580fe04a47c08a933f5c394e64e9~mv2.jpg",
     color: "Dark Purple",
     size: "XL",
    quantity: 2, 
  },
  { id:8,
    name: "THE CRYSTAL PROJECT CD EDITION",
    price: 85.00,
    imageUrl: "https://static.wixstatic.com/media/c22c23_1d9da3cbf6be467ca2e5bd25b7ad2961~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_1d9da3cbf6be467ca2e5bd25b7ad2961~mv2.jpg",
     color: "Dark Purple",
     size: "XL",
    quantity: 2, 
  },
  { id:9,
    name: "PANNY PACK",
    price: 85.00,
    imageUrl: "https://static.wixstatic.com/media/c22c23_ef44449a6e6946c9baf0782b22fa0822~mv2.jpg/v1/fill/w_376,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_ef44449a6e6946c9baf0782b22fa0822~mv2.jpg",
     color: "Dark Purple",
     size: "XL",
    quantity: 2, 
  },
];

export default function Home({}) {
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
   <> <Navbar
    cartItems={cartItems}
    isCartOpen={isCartOpen}
    setIsCartOpen={setIsCartOpen}
  />
   
    <div className="flex flex-col justify-center items-center  bg-black">
  <h1 className="text-4xl  md:text-6xl   font-bold text-white py-16 mb-8">MERCH</h1>
  <p className="text-white text-center text-2xl  md:py-16 md:px-20">
    I&apos;m a paragraph. Click here to add your own text and edit me.<br /> I’m a great
    place for you to tell a story and let your users know a little more about
    you.
  </p>

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
      </div>
      
      <div className="flex flex-wrap justify-center h-s">  
        {items.map((item) => (
          <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 p-4 md:p-2 lg:p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="px-4 py-2">
              <img src={item.imageUrl} alt={item.name} />
             <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-500">${item.price}.00</p>
            <p className="text-sm text-gray-500">
                      Color: {item.color} | Size: {item.size}
                    </p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
              onClick={() => handleAddToCart(item)}
              >
              Add to Cart
              </button>
              </div>
              </div>
              </div>
              ))}
              </div> 
              <div className="flex flex-col justify-center items-center py-10  bg-black">
              <p className="text-white text-center text-2xl md:px-20 px-6">
                        FOR BOOKING REQUIREMENTS<br />
                        INFO@MYSITE.COM   |   PHONE: 123-456-7890
              </p>
            </div>
               <Footer>
                </Footer> 
               
        </>     

           
              );
              }
