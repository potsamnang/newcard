import React from "react";
import code1 from "../Pic/code1.png";
import "../List/list.css";
const ReactOne = () => {
  return (
    <div>
      <div className="lists">
        <h1>What is React?</h1>
        <h3>
          React, sometimes referred to as a frontend JavaScript framework, is a
          JavaScript library created by Facebook. React is a tool for building
          UI components.
        </h3>

        <span>
          <img src={code1} alt="code" />
        </span>
      </div>
    </div>
  );
};

export default ReactOne;
