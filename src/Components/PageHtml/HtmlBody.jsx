import React from "react";
import { Link } from "react-router-dom";
import "./htmlbody.css";

const HtmlBody = () => {
  return (
    <div>
      <div className="grid-one">
        <li>
          <Link to="one">Lesson 1</Link>
        </li>

        <li>
          <Link to="two">Lesson 2</Link>
        </li>

        <li>
          <Link to="three">Lesson 3</Link>
        </li>

        <li>
          <Link to="four">Lesson 4</Link>
        </li>

        <li>
          <Link to="five">Lesson 5</Link>
        </li>

        <li>
          <Link to="six">Lesson 6</Link>
        </li>
      </div>
    </div>
  );
};

export default HtmlBody;
