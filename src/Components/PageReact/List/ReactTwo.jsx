import React from "react";
import "../List/list.css";
import code2 from "../Pic/code2.png";
const ReactTwo = () => {
  return (
    <div>
      <div className="lists">
        <h1>React Getting Started</h1>
        <h3>
          To use React in production, you need npm which is included with
          Node.js.
        </h3>
        <h3>
          To get an overview of what React is, you can write React code directly
          in HTML.
        </h3>
        <h3>
          But in order to use React in production, you need npm and Node.js
          installed.
        </h3>
        <h1>React Directly in HTML</h1>
        <h3>
          The quickest way start learning React is to write React directly in
          your HTML files.
        </h3>
        <span>
          <img src={code2} alt="code" />
        </span>
      </div>
    </div>
  );
};

export default ReactTwo;
