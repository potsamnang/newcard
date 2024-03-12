import React from "react";
import "../List/list.css";
import code3 from "../Pic/code3.png";

const ReactThree = () => {
  return (
    <div className="lists">
      <h1>Upgrade to React 18</h1>
      <h3>
        Upgrading an existing React application to version 18 only requires two
        steps.
      </h3>
      <h3>
        If you are already using the latest version of create-react-app which
        uses React version 18 you can skip this section.
      </h3>
      <span>
        <img src={code3} alt="code" />
      </span>
    </div>
  );
};

export default ReactThree;
