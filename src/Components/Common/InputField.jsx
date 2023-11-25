import React from "react";

const InputField = ({ type, name, id, placeholder, handleChangeInput }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
      placeholder={placeholder}
      onChange={(e) => handleChangeInput(e)}
    />
  );
};

export default InputField;
