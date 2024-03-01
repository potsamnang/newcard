import React from "react";
import Nav from "../Components/Nav";
import { Outlet } from "react-router-dom";
import RootFooter from "./RootFooter";

const RootLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <RootFooter />
    </div>
  );
};

export default RootLayout;
