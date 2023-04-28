import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart,faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaSpotify, FaApple } from 'react-icons/fa';
import { motion } from "framer-motion";




export default function Navbar({ children, title = 'Next.js App', cartItems, isCartOpen, setIsCartOpen  }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showCart, toggleCart] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
    };
    const [showPopup, setShowPopup] = useState(false);
    const shakeAnimation = {
      x: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
      transition: { duration: 0.5 },
    };
    
    useEffect(() => {
      if (isModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [isModalOpen]);
  
    const handleCartClick = () => {
      toggleCart(!showCart);
    }

    const handleCloseClick = () => {
        toggleCart(false);
      }
    
    return ( <nav className = "border-gray-200 bg-gray-50 " >
        <div className = "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" >
        <a href = "#"
        className = "flex items-center" >
        <span className = "self-center text-2xl font-semibold whitespace-nowrap dark:text-black italic" > ROTSHI </span> </
        a>
        <div className = "flex items-end flex-shrink-0 text-white  sm:ml-[400px] md:ml-[600px} ml-6 lg:ml-[700px]" >
        </div>
         <div className = "flex items-center" >
         <div className="flex items-center mr-4">
      <FontAwesomeIcon
        icon={faUser}
        className="text-black text-2xl mr-2"
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-black p-6 px-8 text-lg font-bold rounded-md z-20">
          <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit} >
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm px-4 font-medium text-gray-200 hover:underline dark:text-gray-500">Forgot password?</a>
                  </div>
                  <motion.button
        type="submit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variants={shakeAnimation}
        animate={isSubmitting ? "submitting" : "rest"}
        onAnimationComplete={() => setIsSubmitting(false)} onClick={() => setIsModalOpen(false)} class="w-full text-white bg-primary-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-black dark:focus:ring-primary-800">Sign in</motion.button>
                  <p className="text-red-500 text-sm mt-2">This is just a demo   press sign in  to exit</p>
                  <p class="text-sm font-light text-gray-200 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:text-white dark:text-primary-500">Sign up</a>
                  </p>
              </form>
            
          </div>
        </div>
      )}
    </div>
        <div className="flex items-center">
              
              <button
                className="text-gray-800 hover:text-gray-600 focus:outline-none relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
              {cartItems && cartItems.length > 0 && (
                <div className="absolute top-0 right-0 p-1 bg-red-500 rounded-full text-xs text-white">
                  {cartItems.length}
                </div>
                )}
              </button>

        <
        span className = "text-black" >  
        </span>
         </div>
          </div> 
        <button className = "inline-flex flex-col items-end  justify-end md:items-center md:justify-center p-3 rounded-md text-white hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
        onClick = {
            () => setIsOpen(!isOpen)
        } >
        <span className = "sr-only" > Open main menu </span> <
        div className = "md:w-16 w-6 md:h-3 h-1 bg-black rounded-full" > </div> <
        div className = "md:w-16  w-6 md:h-3  h-1 mt-1 bg-black rounded-full" > 
        </div> 
        </button>

        <div className = { `${isOpen ? 'block fixed inset-0 z-50 bg-white dark:bg-black' : 'hidden'} w-full` }
        id = "navbar-hamburger" >
        <button className = "absolute top-2 right-2 p-2 rounded-full text-purple-400 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        onClick = {
            () => setIsOpen(false)
        } >

        <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
         </button>
         <div className = "flex items-center justify-center h-full" >

        <ul className = "flex flex-col text-center font-medium rounded-lg bg-gray-50 dark:bg-black dark:border-gray-700" >
        {/* eslint-disable no-alert */}
        <img src = "https://static.wixstatic.com/media/503ea4_c3162699fdc54aaeaaa35ec02a9882ce~mv2.jpg/v1/fill/w_587,h_574,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/503ea4_c3162699fdc54aaeaaa35ec02a9882ce~mv2.jpg"
        className = "h-36 w-36 "
        alt = "Random image"/ >

        <h1 className = "text-white text-center pt-28 pb-20 bg-black text-4xl  md:text-7xl font-bold mb-8" >
        TALI$A KIDD </h1>

        <li >

        <Link legacyBehavior href = "/" >
        <a onClick = {
            () => setIsOpen(false)
        }
        className = "block py-2 px-4 text-xl text-white font-normal  " >
        Home 
        </a> 
   </Link> 
        </li>
         <li>
        <Link legacyBehavior href="/shopping" >
        <a onClick = {
            () => setIsOpen(false)
        }
        className = "block py-2 px-4 text-xl text-white font-normal  "

        >
      Merch </a>
         </Link > 
         </li> <ul className = "flex text-center space-x-4 " >
        
        <a href = "#"
        className = "text-gray-900 md:ml-20 dark:text-white hover:text-gray-400" > < FaFacebook className = "w-6 h-6"/> </a> 
        <a href = "#"
        className = "text-gray-900 md:ml-20 dark:text-white hover:text-gray-400" > < FaInstagram className = "w-6 h-6"/> </a> 
        <a href = "#"
        className = "text-gray-900 md:ml-20 dark:text-white hover:text-gray-400" > < FaTwitter className = "w-6 h-6"/> </a> 
        <a href = "#"
        className = "text-gray-900 md:ml-20 dark:text-white hover:text-gray-400" > < FaYoutube className = "w-6 h-6"/> </a> 
        <a href = "#"
        className = "text-gray-900 md:ml-20 dark:text-white hover:text-gray-400" > < FaTiktok className = "w-6 h-6"/> </a> 
        <a href = "#"
        className = "text-gray-900 md:ml-20 dark:text-white hover:text-gray-400" > < FaSpotify className = "w-6 h-6"/> </a> 
        <a href = "#"
        className = "text-gray-900 md:ml-20 dark:text-white hover:text-gray-400" > < FaApple className = "w-6 h-6"/> </a> </ul>

        <li >
        <Link legacyBehavior href = "/Terms" >
        <a onClick = {
            () => setIsOpen(false)
        }
        className = "block py-2 px-4 text-xl text-white font-normal  "

        >

        TERMS & CONDITIONS
       </a>
        </Link >
         </li> 
        <li >
        <Link legacyBehavior href = "/shipping" >
        <a onClick = {
            () => setIsOpen(false)
        }
        className = "block py-2 px-4 text-xl text-white font-normal  "

        >
        Shipping
       </a>
        
        </Link > 
        </li>

        <li >
        <Link legacyBehavior href = "/Faq" >
        <a onClick = {
            () => setIsOpen(false)
        }
        className = "block py-2 px-4 text-xl text-white font-normal  ">
        FAQ &apos; s 
       </a>
         </Link>
         </li>
          </ul> 
          </div>

        </div> 
        </div> 
        <main> 
        { children } 
        </main> 
        </nav>
    );
}