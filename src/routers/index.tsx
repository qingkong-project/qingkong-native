import React from 'react'
import Welcome from '../pages/Welcome'
import MainBox from "../components/MainBox";
import Home from "../pages/Home";

export default [
  {
    path: "/",
    element: <MainBox />,
    children: [
      { path: "/welcome", element: <Welcome /> },
      { path: "/home", element: <Home /> },
    ],
  },
]
