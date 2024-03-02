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
      <HomeProp img={p4} name="40$" detail="Samnag is a good boy">
        <Link to="html">HTML</Link>
      </HomeProp>
      <HomeProp img={p5} name="40$" detail="Samnag is a good boy">
        <Link to="css">CSS</Link>
      </HomeProp>
      <HomeProp img={p6} name="80$" detail="Samnag is a good boy">
        <Link to="react">ReactJS</Link>
      </HomeProp>
    </div>
  );
};

export default PageHome;
