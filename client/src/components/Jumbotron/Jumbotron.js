import React from "react";
import "./jumbotron.css";

const Jumbotron = ({ children }) => (
  <div className="jumbotron mt-2">
    {children}
  </div>
);

export default Jumbotron;
