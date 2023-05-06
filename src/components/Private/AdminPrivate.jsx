import React, { useContext,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/authContext'
export default function AdminPrivate({ children }) {

    const authContext = useContext(AuthContext)
    const navigate = useNavigate()

  
    
  return (
    <>
    {
       
       authContext.userRole  && authContext.userRole === 'admin' ? <>{children}</> : navigate('/login')
        
      
  
    }
  </>
  )
}
