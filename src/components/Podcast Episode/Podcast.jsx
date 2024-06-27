import React from 'react'
import { BsSpotify } from "react-icons/bs";

function Podcast() {
  return (

    <section className="bg-[#f5f3ff] flex flex-col px-4">
    <div className="font-normal px-2">
      <h1 className=" text-[24px] font-bold">
        New Podcast Episode
      </h1>
      <p className=" text-gray-500">Check out more on Spotify</p>
    </div>
    <div className="w-full flex justify-center">
      <hr className="border-gray-400 w-[570px]" />
    </div>

    <div className="bg-black p-12 text-white text-center mt-7 rounded-2xl relative">
      <BsSpotify className="absolute top-0 right-0 text-green-500 mt-4 mr-4 h-6 w-6" />

      <h1 className="font-serif text-[18px] font-bold">
        Sorry, that’s not currently available in your region.
      </h1>
      <p className="text-gray-400 ">Luckily, lots of other stuff is.</p>
    </div>
  </section>
    
  )
}

export default Podcast
