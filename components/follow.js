import Image from 'next/image';
import { useState } from "react";
const IntroSection = () => {
  const [showDemoText, setShowDemoText] = useState(false);

  function handleClick() {
    setShowDemoText(!showDemoText);
  }
  return (
    <section className="intro-section py-10 bg-black" id="contact">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <img
            src="https://static.wixstatic.com/media/503ea4_ed9a38760ae04aab86b47e82525fdcac~mv2.jpg/v1/fill/w_645,h_561,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/503ea4_ed9a38760ae04aab86b47e82525fdcac~mv2.jpg"
            alt="Small artist face image"
            
          />
        </div>
        <div className="md:w-1/2  md:px-20">
          <p className="text-lg mb-6 text-white">FOLLOW TALI$A KIDD ON FACEBOOK, TWITTER, INSTAGRAM, TIKTOK AND YOUTUBE</p>
          <div className="social-links mb-6">
            <a href="https://www.facebook.com/talisakidd" className="mr-2 text-white"><i className="bi bi-facebook"> FACEBOOK</i></a>
            <a href="https://twitter.com/talisakidd" className="mr-2 text-white"><i className="bi bi-twitter">TWITTER</i></a>
            <a href="https://www.instagram.com/talisakidd/" className="mr-2 text-white"><i className="bi bi-instagram"></i></a>
            <a href="https://www.tiktok.com/@talisakidd" className="mr-2 text-white"><i className="bi bi-tiktok">INSTAGRAM</i></a>
            <a href="https://www.youtube.com/channel/UCfNFVlJlhH6j2y6ifJHe6EA" className="mr-2 text-white"><i className="bi bi-youtube">TIKTOK AND YOUTUBE</i></a>
          </div>
          <form>
            <div className="flex flex-col md:flex-row items-center mb-6">
              <input type="email" className="border-2 border-gray-300 rounded-md py-2 px-3 w-full md:w-3/4 mr-0 md:mr-4 mb-4 md:mb-0" placeholder="Your email" />
              <button  onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">JOIN THE TALI$A KIDD MAILING LIST</button>
              
            </div>
            {showDemoText && (
        <p className="text-red-500 mt-2">
          This is just a demo. Click the button again to hide this text.
        </p>
      )}
            <hr className="border-gray-300" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
