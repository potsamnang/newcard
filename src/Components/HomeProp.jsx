import React from "react";
import { Link } from "react-router-dom";
import "./prop.css";

const HomeProp = ({ img, name, detail, children }) => {
  return (
    <div className="card">
      <img src={img} alt="pic" />
      <div className="detail">
        {children}
        <p>{detail}</p>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default HomeProp;
