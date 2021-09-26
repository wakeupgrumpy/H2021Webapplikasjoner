import React from "react";

const Button = ({ name, submit, clickHandler, styles }) => (
  <button
    type={submit ? "submit" : "button"}
    className={`justify-self-end text-sm mt-3 py-2 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none ${styles}`}
    onClick={clickHandler}
  >
    {name}
  </button>
);

export default Button;
