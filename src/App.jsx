import React,{useState} from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import './App.css'
import ScrollToUp from './ScrollToUp';
import AuthContext from "./Context/authContext";
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});
  const router = useRoutes(routes);


  const login = (userInfos, token) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  };


  return (
    <>
   <ScrollToUp/>
   <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login
      }}
    >
      {router}
    </AuthContext.Provider>
    </>
  );
}
