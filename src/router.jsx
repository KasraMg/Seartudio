import React from "react";
import Index from "./pages/Index/Index";
import Rules from "./pages/Rules/Rules";
import AboutUs from "./pages/AboutUs/AboutUs";
import NotFound from "./pages/404/404";
import Login from "./pages/Login/Login";
import Studios from "./pages/Studios/Studios";
import SignUp from "./pages/SignUp/SignUp";
const routes = [
  { path: "/", element: <Index /> },
  { path: "/Rules", element: <Rules /> },
  { path: "/AboutUs", element: <AboutUs /> },
  { path: "/*", element: <NotFound /> },
  { path: "/Login", element: <Login /> },
  { path: "/Studios", element: <Studios /> },
  { path: "/SignUp", element: <SignUp /> },
  
];

export default routes;