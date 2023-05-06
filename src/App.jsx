import React,{useState,useEffect} from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import './App.css'
import ScrollToUp from './ScrollToUp';
import AuthContext from "./Context/authContext";
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});
  const [userRole, setuserRole] = useState(null);
  const router = useRoutes(routes);


  const login = (userInfos, token) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  };

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch(`https://api.seartudio.com/studio/getMe`, {
        headers: {
          authorization: localStorageData.token,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfos(userData.data);
          setuserRole(userData.data.admin.role)
        });
    } else {
      setIsLoggedIn(false)
    }
  }, []);


  return (
    <>
   <ScrollToUp/>
   <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        userRole
      }}
    >
      {router}
    </AuthContext.Provider>
    </>
  );
}
