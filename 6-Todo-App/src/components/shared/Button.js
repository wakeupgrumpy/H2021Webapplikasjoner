import React from "react";

const Button = ({ name, type = "button", clickHandler, styles }) => (
  <button
    type={type}
    className={`justify-self-end text-sm mt-3 py-2 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none ${styles}`}
    onClick={clickHandler}
  >
    {name}
  </button>
);

export default Button;
