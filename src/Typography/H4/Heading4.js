import React from "react";
import "./Heading4.css";

const Heading4 = ({ className, children }) => {
  return (
    <h4 className={`heading4 ${className ? className : ""}`}>{children}</h4>
  );
};

export default Heading4;
