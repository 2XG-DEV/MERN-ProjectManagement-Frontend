import React from "react";
import "./Body1.css";

const Body1 = ({ className, children }) => {
  return <p className={`body1 ${className ? className : ""}`}>{children}</p>;
};

export default Body1;
