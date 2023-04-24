import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faTidal, faSoundcloud, faBandcamp, faDeezer, faApple } from "@fortawesome/free-brands-svg-icons";

const Section = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black bg-gradient-to-b md:from-black md:to-white text-white">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-5xl font-bold mb-4 md:text-8xl text-white">Music</h1>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/YKaiXY7zHxk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center">
        <p className="text-center text-lg mb-8 shrink ml-8">
          Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </p>
        <h1 className="text-5xl font-bold mb-4 md:text-8xl ">GET IT NOW</h1>
        <div className="flex justify-center space-x-8">
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faSpotify} size="3x" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faTidal} size="3x" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faSoundcloud} size="3x" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faBandcamp} size="3x" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faDeezer} size="3x" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faApple} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section;
