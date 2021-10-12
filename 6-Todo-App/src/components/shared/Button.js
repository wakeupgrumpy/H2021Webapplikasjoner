import React from "react";

const Button = ({ name, submit, clickHandler, extraStyles }) => (
  <button
    type={submit ? "submit" : "button"}
    className={`button ${extraStyles}`}
    onClick={clickHandler}
  >
    {name}
  </button>
);

export default Button;
