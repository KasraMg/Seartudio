import React from "react";
import Index from "./pages/Index/Index";
import Rules from "./pages/Rules/Rules";
import AboutUs from "./pages/AboutUs/AboutUs";
const routes = [
  { path: "/", element: <Index /> },
  { path: "/Rules", element: <Rules /> },
  { path: "/AboutUs", element: <AboutUs /> },
  
];

export default routes;
