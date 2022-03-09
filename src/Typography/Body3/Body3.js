import React from "react";
import "./Body3.css";

const Body3 = ({ className, children }) => {
  return <p className={`body3 ${className ? className : ""}`}>{children}</p>;
};

export default Body3;
