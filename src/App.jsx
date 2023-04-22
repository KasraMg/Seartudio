import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import './App.css'
import ScrollToUp from './ScrollToUp';
export default function App() {
  const router = useRoutes(routes);

  return (
    <>
   <ScrollToUp/>
      {router}
    </>
  );
}
