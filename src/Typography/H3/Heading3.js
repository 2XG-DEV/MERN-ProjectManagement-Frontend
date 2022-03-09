import React from "react";
import "./Heading3.css";

const Heading3 = ({ className, children }) => {
  return (
    <h3 className={`heading3 ${className ? className : ""}`}>{children}</h3>
  );
};

export default Heading3;
