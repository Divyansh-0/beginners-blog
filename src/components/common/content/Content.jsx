import React from "react";
import "./content.css";

const Content = ({ label }) => {
  return (
    <div className="content">
      <h2> {label.headings}</h2>
      <p>{label.text}</p>
    </div>
  );
};

export default Content;
