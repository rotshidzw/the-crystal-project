import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaSpotify, FaApple } from 'react-icons/fa';
const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between  text-black lg:px-16 py-20">
      <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
        <h1 className="text-4xl lg:text-8xl font-bold uppercase mb-8 text-gray-900 dark:text-black">
          THE CRYSTAL PROJECT
        </h1>
        <h2 className="text-2xl lg:text-4xl  uppercase mb-10 text-gray-900 dark:text-black">
          A NEW ALBUM BY TALI$A KIDD
        </h2>
        <ul className="flex space-x-4">
        <a href="#" className="text-gray-900 dark:text-black hover:text-gray-400"><FaFacebook className="w-6 h-6" /></a>
          <a href="#" className="text-gray-900 dark:text-black hover:text-gray-400"><FaInstagram className="w-6 h-6" /></a>
          <a href="#" className="text-gray-900 dark:text-black hover:text-gray-400"><FaTwitter className="w-6 h-6" /></a>
          <a href="#" className="text-gray-900 dark:text-black hover:text-gray-400"><FaYoutube className="w-6 h-6" /></a>
          <a href="#" className="text-gray-900 dark:text-black hover:text-gray-400"><FaTiktok className="w-6 h-6" /></a>
          <a href="#" className="text-gray-900 dark:text-black hover:text-gray-400"><FaSpotify className="w-6 h-6" /></a>
          <a href="#" className="text-gray-900 dark:text-black hover:text-gray-400"><FaApple className="w-6 h-6" /></a>
        </ul>

      </div>
      <div className="lg:w-1/2">
        <img src="https://static.wixstatic.com/media/503ea4_ed9a38760ae04aab86b47e82525fdcac~mv2.jpg/v1/fill/w_645,h_561,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/503ea4_ed9a38760ae04aab86b47e82525fdcac~mv2.jpg" alt="Album cover" className="w-full h-auto" />
      </div>
    </div>
  )
}

export default Hero
