import React from "react";
import { Link } from "react-router-dom";
const HtmlBody = () => {
  return (
    <div>
      <div className="grid-one">
        <li>
          <Link to="react-one">Lesson 1</Link>
        </li>

        <li>
          <Link to="react-two">Lesson 2</Link>
        </li>

        <li>
          <Link to="react-three">Lesson 3</Link>
        </li>

        <li>
          <Link to="react-four">Lesson 4</Link>
        </li>

        <li>
          <Link to="react-five">Lesson 5</Link>
        </li>

        <li>
          <Link to="react-six">Lesson 6</Link>
        </li>
      </div>
    </div>
  );
};

export default HtmlBody;
