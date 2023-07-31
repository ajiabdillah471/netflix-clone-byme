import React from "react";

const Input = ({ typ, val, nam, classname, place }) => {
  return (
    <input
      type={typ}
      name={nam}
      value={val}
      placeholder={place}
      className={`${classname} text-white py-2 px-4 bg-[rgba(0,0,0,0.5)] outline outline-1 outline-white rounded-md  `}
    />
  );
};

export default Input;
