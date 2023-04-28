import React from 'react'
import Link from 'next/link';

const footer = ({ children, title = 'Next.js App' }) => {
    const scrollToSubscribe = () => {
        const subscribeSection = document.querySelector('#contact');
        subscribeSection.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    
<footer className="bg-white rounded-lg shadow text-black m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between text-center">
             <Link legacyBehavior href="#" >
            <a  className="flex items-center mb-4 sm:mb-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">ROTSHIDZWA</span>
            </a></Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0">
                <li>
                     <Link legacyBehavior href="/shopping" >
                    <a  className="mr-4 text-xl hover:underline md:mr-6  lowercase">SHIPPING & RETURNS</a></Link>
                </li>
                <li>
                     <Link legacyBehavior href="/Terms">
                    <a className="mr-4 text-xl hover:underline md:mr-6">Privacy Policy</a></Link>
                </li>
                <li>
                     <Link legacyBehavior href="/Faq" >
                    <a  className="mr-4 text-xl hover:underline md:mr-6 ">Licensing</a></Link>
                </li>
                
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-black sm:text-center">© 2023
         <Link legacyBehavior href="#" ><a  className="hover:underline px-4">rotshidzwa™</a></Link>. All Rights Reserved.</span>
    </div>
    <main>
        {children}
      </main>
</footer>


  )
}

export default footer