import React from "react";

const Button = ({ name, submit, clickHandler, extraStyles }) => {
  // Component CSS-styles
  const styles = `justify-self-end text-sm mt-3 py-2 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none ${extraStyles}`;

  return (
    <button
      type={submit ? "submit" : "button"}
      className={styles}
      onClick={clickHandler}
    >
      {name}
    </button>
  );
};

export default Button;
