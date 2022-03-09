import React from "react";
import "./Button.css";

const Button = ({ className, children, toRun }) => {
  return (
    <button
      className={`myButton ${className ? className : ""}`}
      onClick={toRun}
    >
      {children}
    </button>
  );
};

export default Button;
