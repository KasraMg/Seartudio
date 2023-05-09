import React,{useState,useEffect,useCallback} from "react";
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

   const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    setIsLoggedIn(false)
    setuserRole(null)
    localStorage.removeItem("user");
  });

  useEffect(() => {

    const localStorageData = JSON.parse(localStorage.getItem("user"));
    console.log(localStorageData);
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
          if (userData.data.admin) {
               setuserRole(userData.data.admin.role)
          }else{
             setuserRole(userData.data.role)
          }
       
         
        });
    } else {
      setIsLoggedIn(false)
    }
  }, [userInfos])
  
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    console.log(localStorageData);
    if (localStorageData) {
      fetch(`https://api.seartudio.com/studio/getMe`, {
        headers: {
          authorization: localStorageData.token,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          console.log(userData);
          setIsLoggedIn(true);
          setUserInfos(userData.data);
          if (userData.data.admin) {
               setuserRole(userData.data.admin.role)
          }else{
             setuserRole(userData.data.role)
          }
       
         
        });
    } else {
      setIsLoggedIn(false)
    }
  });


  return (
    <>
   <ScrollToUp/>
   <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        setUserInfos,
        login,
        userRole,
        logout
      }}
    >
      {router}
    </AuthContext.Provider>
    </>
  );
}
