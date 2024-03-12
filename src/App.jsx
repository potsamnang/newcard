import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Html from "./Components/PageHtml/Html";
import Css from "./Components/PageCss/Css";
import ReactJs from "./Components/PageReact/ReactJs";
import ListOne from "./Components/PageHtml/PageList/ListOne";
import ListTwo from "./Components/PageHtml/PageList/ListTwo";
import ListThree from "./Components/PageHtml/PageList/ListThree";
import ListFour from "./Components/PageHtml/PageList/ListFour";
import ListFive from "./Components/PageHtml/PageList/ListFive";
import ListSix from "./Components/PageHtml/PageList/ListSix";
import ReactOne from "./Components/PageReact/List/ReactOne";
import ReactTwo from "./Components/PageReact/List/ReactTwo";
import ReactThree from "./Components/PageReact/List/ReactThree";
import ReactFour from "./Components/PageReact/List/ReactFour";
import ReactFive from "./Components/PageReact/List/ReactFive";
import ReactSix from "./Components/PageReact/List/ReactSix";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "html",
        element: <Html />,
        children: [
          {
            path: "one",
            element: <ListOne />,
          },
          {
            path: "two",
            element: <ListTwo />,
          },
          {
            path: "three",
            element: <ListThree />,
          },
          {
            path: "four",
            element: <ListFour />,
          },
          {
            path: "five",
            element: <ListFive />,
          },
          {
            path: "six",
            element: <ListSix />,
          },
        ],
      },
      {
        path: "css",
        element: <Css />,
      },
      {
        path: "react",
        element: <ReactJs />,
        children: [
          {
            path: "react-one",
            element: <ReactOne />,
          },
          {
            path: "react-two",
            element: <ReactTwo />,
          },
          {
            path: "react-three",
            element: <ReactThree />,
          },
          {
            path: "react-four",
            element: <ReactFour />,
          },
          {
            path: "react-five",
            element: <ReactFive />,
          },
          {
            path: "react-six",
            element: <ReactSix />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
