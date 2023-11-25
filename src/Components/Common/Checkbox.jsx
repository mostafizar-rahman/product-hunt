import React from "react";

const Checkbox = ({name, handleChange }) => {
  return (
    <>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={() => handleChange(name)}
        className="w-4 h-4"
      />
      <label htmlhtmlFor={name} className="capitalize">
        {name}
      </label>
    </>
  );
};

export default Checkbox;
