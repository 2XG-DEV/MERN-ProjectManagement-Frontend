import React from "react";
import "./Heading1.css";

const Heading1 = ({ className, children }) => {
  return (
    <h1 className={`heading1 ${className ? className : ""}`}>{children}</h1>
  );
};

export default Heading1;
