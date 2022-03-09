import React from "react";
import "./Body2.css";

const Body2 = ({ className, children }) => {
  return <p className={`body2 ${className ? className : ""}`}>{children}</p>;
};

export default Body2;
