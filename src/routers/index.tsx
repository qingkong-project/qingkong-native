import React from "react";
import Welcome from "../pages/Welcome";
import MainBox from "../components/MainBox";
import Home from "../pages/Home";
import Publish from "../pages/Publish";
import Me from "../pages/Me";

export default [
  {
    path: "/",
    element: <MainBox />,
    children: [
      { path: "/welcome", element: <Welcome /> },
      { path: "/home", element: <Home /> },
      { path: "/publish", element: <Publish /> },
      { path: "/me", element: <Me /> },
    ],
  },
];
