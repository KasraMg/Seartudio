import React from "react";
import Index from "./pages/Index/Index";
import Rules from "./pages/Index/Rules/Rules";
const routes = [
  { path: "/", element: <Index /> },
  { path: "/Rules", element: <Rules /> },
];

export default routes;
