import React,{useState,useEffect,useCallback} from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import './App.css'
import ScrollToUp from './ScrollToUp';
import AuthContext from "./Context/authContext";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);
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
    setIsLoggedIn(false)
    setuserRole(null)
    localStorage.removeItem("user");
    setUserInfos({});
  });

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
          if (userData.data.admin) {
               setuserRole(userData.data.admin.role)
          }else{
             setuserRole(userData.data.role)
          }
       
         
        });
    } else {
      setIsLoggedIn(false)
    }
  }, [updateUser])
  

  useEffect(() => {
    console.log('hi');
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

          if (userData.data && userData.data.admin) {
               setuserRole(userData.data.admin.role)
          }else{
             setuserRole(userData.data.role)
          }
       
         
        });
    } else {
      setIsLoggedIn(false)
    }
  },[]);

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
        logout,
        setUpdateUser
      }}
    >
      {router}
    </AuthContext.Provider>
    </>
  );
}
