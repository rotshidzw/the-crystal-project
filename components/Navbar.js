import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-gray-200 bg-gray-50 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">ROTSHI</span>
        </a>
        <div className="flex xl:ml-[900px] text-right">
        <div className="mr-4">
            <FontAwesomeIcon icon={faUser} className="text-gray-500 text-lg cursor-pointer hover:text-gray-900" />
        </div>
        <div>
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-500 text-lg cursor-pointer hover:text-gray-900" />
        </div>
        </div>


        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 ml-2 text-2xl text-black rounded-lg  "
          aria-controls="navbar-hamburger"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M14.293 5.293a1 1 0 00-1.414-1.414l-8 8a1 1 0 000 1.414l8 8a1 1 0 101.414-1.414L6.414 12l7.879-7.879a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
         </svg>
          </button>
          <div className={`${isOpen ? 'block fixed inset-0 z-50 bg-white dark:bg-black' : 'hidden'} w-full`} id="navbar-hamburger">
            <div className="flex items-center justify-center h-full">
              <ul className="flex flex-col font-medium rounded-lg bg-gray-50 dark:bg-black dark:border-gray-700">
                <li>
                  <Link  legacyBehavior href="/">
                    <a
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                      Home
                      </a>
                      </Link>
                      </li>
                      <li>
                      <Link  legacyBehavior href="/about">
                      <a
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                      About
                      </a>
                      </Link>
                      </li>
                      <li>
                      <Link  legacyBehavior href="/contact">
                      <a
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                      Contact
                      </a>
                      </Link>
                    </li>
                 </ul>
               </div>
            </div>
        </div>
</nav>
);
}
                      
                      
                      
                      
                      
                      
                      
