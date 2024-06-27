import React from "react";

const sizeClasses = {
  small: "py-1 px-4 text-sm",
  medium: "py-2 px-2 sm:px-6 text-xs sm:text-base",
  large: "py-3 px-8 text-lg",
};

const Button = ({
  icon: Icon,
  text,
  size = "medium",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  onClick,
}) => {
  return (
    <div className="p-1 hover:bg-[#e1dcef] rounded-xl">
      <button
        onClick={onClick}
        className={`${sizeClasses[size]} ${bgColor} ${textColor} hover:bg-purple-900 hover:text-white font-medium  rounded-xl border-2 border-gray-400 flex gap-1 sm:gap-2 items-center duration-300`}
      >
        {Icon && <Icon className="text-xs sm:text-xl " />}
        {text}
      </button>
    </div>
  );
};

export default Button;
