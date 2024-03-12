import React, { Children } from "react";
import HomeProp from "./HomeProp";
import p1 from "../assets/html.png";
import p2 from "../assets/css.png";
import p3 from "../assets/react.png";
import p4 from "../assets/ahfrog.png";
import p5 from "../assets/ahtheary.png";
import p6 from "../assets/ahmao.png";
import "./pagehome.css";
import { Link } from "react-router-dom";

const PageHome = () => {
  return (
    <div className="wrapper">
      <HomeProp
        img={p1}
        name="For Free!"
        detail="HTML is the standard markup language for creating Web pages."
      >
        <Link to="html">HTML</Link>
      </HomeProp>
      <HomeProp
        img={p2}
        name="For Free!"
        detail="CSS is the language we use to style a Web page."
      >
        <Link to="css">CSS</Link>
      </HomeProp>
      <HomeProp
        img={p3}
        name="For Free!"
        detail="React is a tool for building UI components."
      >
        <Link to="react">ReactJS</Link>
      </HomeProp>
    </div>
  );
};

export default PageHome;
