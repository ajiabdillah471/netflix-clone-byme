import React from "react";

const Features = ({ textMain, textSecond, addClassName }) => {
  const myImg = "./television.png";
  return (
    <div className="bg-black border-b-8 border-[#232323] pb-32 lg:flex lg:items-center lg:justify-center lg:pb-32 lg:pt-32">
      <div className="lg:flex lg:items-center flex justify-center flex-col items-center lg:flex-row ">
        <div
          className={`text-white text-center mx-auto px-4 lg:w-1/2 ${addClassName}`}
        >
          <h1 className="font-bold text-4xl pt-20 lg:pt-0 lg:text-5xl">
            {textMain}
          </h1>
          <p className="mt-6 text-lg lg:text-xl">{textSecond}</p>
        </div>
        <div className="lg:w-1/2 h-full ">
          <div className="w-[325px] h-[245px] bg-primary mx-auto mt-6 lg:mt-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
