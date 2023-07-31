import React from "react";

const Button = ({ type, text, className, click }) => {
  return (
    <div>
      <button
        type={type}
        className={`${className} bg-primary text-white font-semibold  rounded-md hover:opacity-80 duration-300 active:translate-y-px`}
        onClick={click}
      >
        {text}
      </button>
    </div>
  );
};

export const ButtonSecond = ({ textMainBtnS }) => {
  return (
    <div className="lg:mx-40 relative">
      <div className="w-[327px] h-[71px] bg-[#232323] mx-auto flex justify-between items-center px-6 hover:bg-[#464545] lg:w-full lg:h-[84px] ">
        {/* <p className="text-white text-lg lg:text-xl">{textMainBtnS}</p>
        <p className="text-white text-2xl lg:text-4xl">+</p> */}
        <button
          type="submit"
          className="text-white text-lg lg:text-xl hover:bg-[#464545] after:content-['+'] after:absolute after:right-6 "
        >
          {textMainBtnS}
        </button>
      </div>
    </div>
  );
};
export default Button;
