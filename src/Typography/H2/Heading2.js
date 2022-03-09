import React from "react";
import "./Heading2.css";

const Heading2 = ({ className, children }) => {
  return (
    <h2 className={`heading2 ${className ? className : ""}`}>{children}</h2>
  );
};

export default Heading2;
