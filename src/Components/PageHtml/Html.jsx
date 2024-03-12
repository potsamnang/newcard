import HtmlBody from "./HtmlBody";
import HtmlHeader from "./HtmlHeader";
import "../htmlbody.css";
import "../htmlheader.css";
import { Outlet } from "react-router-dom";

const Html = () => {
  return (
    <div>
      <HtmlHeader />
      <div className="pagehtml">
        <div className="body">
          <HtmlBody />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Html;
