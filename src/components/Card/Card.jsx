import React from 'react';
import { FaLink } from "react-icons/fa";

const Card = ({ link, logo, heading, text }) => {
  return (
    <a href={link} className="relative block  bg-white rounded-lg border-2 border-gray-400 hover:border-black shadow-md transition-all duration-300 group">
      <div className="flex items-center p-4">
        <img className="w-12 h-12 rounded-md" src={logo} alt="Logo" />
        <div className="ml-3 flex-1">
          <h5 className="text-lg font-semibold text-gray-900">{heading}</h5>
          <p className="text-gray-600  w-96 truncate">{text}</p>
        </div>
        <div className="absolute right-5  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaLink />
        </div>
      </div>
    </a>
  );
};

export default Card;
