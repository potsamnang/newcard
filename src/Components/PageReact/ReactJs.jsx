import React from "react";
import ReactJsBody from "./ReactJsBody";
import "../htmlbody.css";
import "../htmlheader.css";
import { Outlet } from "react-router-dom";
import ReactJsHeader from "./ReactJsHeader";
const ReactJs = () => {
  return (
    <div>
      <ReactJsHeader />
      <div className="pagehtml">
        <div className="body">
          <ReactJsBody />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ReactJs;
