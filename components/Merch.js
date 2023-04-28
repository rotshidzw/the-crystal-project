import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const Merch = () => {
  return (
  
    <div className="flex flex-col md:flex-row items-center justify-center py-8 px-4 md:px-24 lg:px-48 bg-white">
    <div className="md:w-1/2 flex items-center justify-center md:justify-end mb-6 md:mb-0">
      <div className="max-w-xl">
       <h1 className="text-6xl md:text-8xl font-bold text-black mb-16">Merch</h1>
      <p className="text-lg md:text-2xl text-black mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tincidunt nulla, sit amet faucibus justo. Donec facilisis nisl vel felis tristique sodales. Sed consequat tellus vel tellus dictum lacinia. Praesent nec neque vel ipsum tincidunt tristique ut at velit.</p>
      <button className="bg-purple-800 hover:bg-black text-white font-bold py-3 px-12 mb-8  rounded-xl" >
        <Link href="/contact">Get Merch</Link>
      </button>
     {/* eslint-disable no-alert */}
      <img src="https://static.wixstatic.com/media/503ea4_f5fbccc0050d42869bc3fa2bfb9e21c8~mv2.jpg/v1/fill/w_587,h_574,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/503ea4_f5fbccc0050d42869bc3fa2bfb9e21c8~mv2.jpg" className="" alt="Random image" />
      <h2 className="text-3xl text-center font-bold ">CAP HATS</h2>  
      </div>
    </div>
    <div className="md:w-1/2 md:pl-10 text-center md:text-left">
      {/* eslint-disable no-alert */}
       <img src="https://static.wixstatic.com/media/503ea4_06d97d0018414cb3ba4bd75f79401b94~mv2.jpg/v1/fill/w_587,h_574,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/503ea4_06d97d0018414cb3ba4bd75f79401b94~mv2.jpg" className="mt-4" alt="Random image" />
        <h2 className="text-3xl text-center font-bold ">SWEATSHIRTS</h2>
       {/* eslint-disable no-alert */}
        <img src="https://static.wixstatic.com/media/503ea4_c3162699fdc54aaeaaa35ec02a9882ce~mv2.jpg/v1/fill/w_587,h_574,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/503ea4_c3162699fdc54aaeaaa35ec02a9882ce~mv2.jpg" className="mt-12" alt="Random image" />
        <h2 className="text-3xl text-center font-bold ">CD&apos;S & VINYLS</h2>
    </div>
  </div>

  )
}

export default Merch