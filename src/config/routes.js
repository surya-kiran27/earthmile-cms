import React from "react";
import Login from "../components/Login";
import Home from "../components/Home";
const routes = [
  {
    path: "/login",
    component: Login,
    isPrivate: false,
  },
  {
    path: "/",
    component: Home,
    isPrivate: true,
  },
  //   {
  //     path: "/*",
  //     component: NotFound,
  //     isPrivate: true,
  //   },
];

export default routes;
