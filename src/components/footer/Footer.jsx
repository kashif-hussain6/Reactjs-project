import React from 'react';
import Button from '../Button/Button';
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiLogoPinterest } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-[#2e1065] text-white py-6 md:py-8 lg:py-10 rounded-2xl">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center space-y-6 lg:space-y-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6">
          <input
            type="text"
            placeholder="Subscribe to the newsletter"
            className="w-full md:w-3/4 lg:w-96 px-4 py-2 rounded-2xl bg-transparent border border-gray-400 text-gray-400 placeholder-gray-400 focus:outline-none"
          />
          <div className="w-full md:w-auto">
            <Button
              text="Sign Up"
              icon={IoIosArrowRoundForward}
              size="medium"
              bgColor="bg-[#3b146b]"
              textColor="text-white"
              className="w-full md:w-auto px-4 py-2 rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end mt-auto space-y-4 md:space-y-0 px-4 md:px-8">
          <div className="text-left text-gray-400">
            <p>© 2024 All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <FaXTwitter className="text-gray-400 hover:text-white cursor-pointer" size={21} />
            <BiLogoPinterest className="hover:text-white text-gray-400 cursor-pointer" size={22} />
          </div>
        </div>
      </div>
    </footer>
  );
}
