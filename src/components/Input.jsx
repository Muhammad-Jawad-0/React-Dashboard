import React from "react";

const Input = ({ placeholder = "SMIT", name, onChange, value }) => {
  return (
    <div>
      <input
        type="text"
        name={name} // Each input has a unique name
        placeholder={placeholder}
        value={value} // Controlled input value
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
