import React from "react";
import Button from "./components/Button/Button";
import { IoPlanetOutline, IoBookOutline } from "react-icons/io5";
import Profile from "./components/Profile/profile";
import SocialMediaIcon from "./components/Social-Icon/Social";

export default function App() {
  return (
    <section className="flex flex-col  bg-[#f5f3ff] h-screen">
      <div>
        <Profile />
      </div>
      <div className="flex gap-3 justify-center items-center mt-4 w-full">
        <Button
          icon={IoPlanetOutline}
          text="Website"
          size="medium"
          bgColor="bg-gray-100"
          textColor="text-black"
        />
        <Button
          icon={IoBookOutline}
          text="Newsletter"
          size="medium"
          bgColor="bg-gray-100"
          textColor="text-black"
        />
      </div>

      <SocialMediaIcon />

      <section></section>
      <div className="flex items-center justify-evenly">
        <h1>Released projects</h1>
        
      </div>
      <div>
      <hr className="border-black  border-1 w-96" />
      </div>
    </section>
  );
}
