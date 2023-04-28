import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
const Faq = () => {
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
    <h1 className="text-white text-center pt-28 pb-20 bg-black text-4xl  md:text-7xl font-bold mb-8">
            FAQ&apos;S
        </h1>
    <div className="flex flex-col items-center justify-center mt-8  bg-white">
     
      
     <h2 className="text-4xl font-bold mb-8 mt-8">
        DO YOU PROVIDE INTERNATIONAL DELIVERY?
     </h2>
     <p className="text-black  text-xl text-center max-w-2xl">
     I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p> 

    <h2 className="text-4xl font-bold mb-8 mt-8">
            HOW DO I TRACK MY ORDER?
        </h2>
        <p className="text-black mt-8  text-xl text-center max-w-2xl">
        I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
        </p>

        <h2 className="text-4xl font-bold mb-8 mt-8">
            HOW DO I RETURN AN ITEM?
            </h2>
            <p className="text-black mt-8  text-xl text-center max-w-2xl">
            I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
             </p>
        
      
        <h2 className="text-4xl font-bold mb-8 mt-8">
            HOW CAN I CONTACT YOUR COURIERS?
            </h2>
        <p className="text-black mt-8  text-xl text-center max-w-2xl">
        I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </p>
        
        <h2 className="text-4xl font-bold mb-8 mt-8">
                WHAT IS YOUR RETURNS POLICY?
            </h2>
        <p className="text-black mt-8  text-xl text-center max-w-2xl">
        I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
        </p>

        <h2 className="text-4xl font-bold mb-8 mt-8">
                WHAT ARE YOUR DELIVERY OPTIONS?
            </h2>
        <p className="text-black mt-8  text-xl text-center max-w-2xl">
        I&apos;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </p>
    </div>
    <div className="flex flex-col justify-center items-center py-10  bg-black">
    <p className="text-white text-center text-2xl md:px-20 px-6">
                FOR BOOKING REQUIREMENTS
                <br />
                INFO@MYSITE.COM   |   PHONE: 123-456-7890
    </p>
  </div>
  <Footer>
  </Footer>

    </>
  )
}

export default Faq