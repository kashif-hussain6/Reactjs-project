import React from "react";

const SupportMe = ({ link, logo="" }) => {
  return (
    <div className="flex   ">
      <a
        href={link}
        className="p-2 mt-7 rounded-2xl border border-gray-300 hover:border-black transition-all duration-300 group"
      >
        <div className="">
          <img className="rounded-md" width={200} height={200}  src={logo} alt="loading..." />
        </div>
        <div className="flex justify-center p-4"></div>
      </a>
    </div>
  );
};

export default SupportMe;
