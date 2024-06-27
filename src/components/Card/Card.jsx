import React from 'react';
import { FaLink } from "react-icons/fa";

const Card = ({ link, logo, heading, text }) => {
  return (
    <a href={link} className="relative block bg-white rounded-lg border border-gray-400 hover:border-black shadow-md transition-all duration-300 group">
      <div className="flex items-center p-4">
        <img className="w-12 h-12 rounded-md" src={logo} alt="Logo" />
        <div className="ml-3 flex-1 min-w-0">
          <h5 className="text-lg font-semibold text-gray-900">{heading}</h5>
        
          <p className="text-gray-600 truncate sm:text-base md:w-80 lg:w-96 xl:text-lg">{text}</p>
        </div>
        <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaLink />
        </div>
      </div>
    </a>
  );
};

export default Card;
