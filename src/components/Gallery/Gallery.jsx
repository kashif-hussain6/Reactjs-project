import { useState } from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
export default function Gallery({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousState = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextState = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden relative ">
      <div className="font-normal">
        <h1 className="mr-80  text-[24px] font-bold ">Gallery</h1>
      </div>
      <div className="w-full flex justify-center mt-5">
        <hr className="border-gray-400 w-[570px]" />
      </div>
      <div
        className={`flex transition ease-out duration-1000 translate-x-[-${
          current * 100
        }%]`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((item, index) => {
          return (
            <img
              className="rounded-2xl mt-7 "
              key={index}
              src={item}
              alt="loading...."
            />
          );
        })}
      </div>
      <div className="absolute top-20  h-full w-full flex justify-between items-center text-slate-500 rounded-full">
        <button
          onClick={previousState}
          className="transform transition duration-300 ease-in-out"
        >
          <IoArrowBackSharp className="w-8 h-8 p-2  bg-gradient-to-r from-gray-700 to-white hover:bg-blue-900 hover:text-white rounded-full" />
        </button>
        <button
          onClick={nextState}
          className="transform  transition duration-300 ease-in-out    "
        >
          <IoArrowForwardSharp className="w-8 h-8 p-2 ml-6 bg-gradient-to-r from-gray-700 to-white ho hover:text-white rounded-full " />
        </button>
      </div>

      <div className="absolute bottom-0  w-full cursor-pointer flex justify-center pb-4">
        <div className="bg-[#3b323a] rounded-2xl flex justify-center gap-2 p-2 w-1/5">
          {slides.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`rounded-full w-2 h-2 ${
                  index === current ? "bg-white" : "bg-[#796260]"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
