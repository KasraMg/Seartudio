import React from "react";
import Index from "./pages/Index/Index";
import Rules from "./pages/Rules/Rules";
import AboutUs from "./pages/AboutUs/AboutUs";
import NotFound from "./pages/404/404";
import Login from "./pages/Login/Login";
import Studios from "./pages/Studios/Studios";
import SignUp from "./pages/SignUp/SignUp";
import StudioPanel from "./pages/StudioPanel/StudioPanel";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import StudioPage from "./pages/StudioPage/StudioPage";
import StudioPrivate from "./components/Private/StudioPrivate";
import AdminPrivate from "./components/Private/AdminPrivate";
const routes = [
  { path: "/", element: <Index /> },
  { path: "/Rules", element: <Rules /> },
  { path: "/AboutUs", element: <AboutUs /> },
  { path: "/notfound", element: <NotFound /> },
  { path: "/Login", element: <Login /> },
  { path: "/Studios", element: <Studios /> },
  { path: "/SignUp", element: <SignUp /> },
  { path: "/StudioPanel", element:(
    <StudioPrivate>
      <StudioPanel /> 
    </StudioPrivate>) },
  {
    path: "/AdminPanel", element: (
      <AdminPrivate>
        <AdminPanel />
      </AdminPrivate>)
  },
  { path: "/StudioPage/:id", element: <StudioPage /> },
  { path: "/:id", element: <StudioPage /> },

];

export default routes;
