import React, { useContext,useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/authContext'

export default function StudioPrivate({ children }) {
   const [privateLoader,setPrivateLoader]=useState(true)
    const authContext = useContext(AuthContext)
    const navigate = useNavigate()

  useEffect(() => {
    if ( authContext.userRole  && authContext.userRole === 'studio' ) {
      setPrivateLoader(false)
    }
    
  }, [ authContext.userRole ])
  
    
  return (
    <>
{privateLoader &&(
   <div class="private-loader"> 
   <div class="preloader">
    <div class="preloader__ring">
        <div class="preloader__sector"> </div>
      <div class="preloader__sector cpurple">S</div>
      <div class="preloader__sector cpurple">e</div>
      <div class="preloader__sector cpurple">a</div>
      <div class="preloader__sector cpurple" >r</div>
      <div class="preloader__sector cpurple">t</div>
      <div class="preloader__sector cpurple">u</div>
      <div class="preloader__sector cpurple">d</div>
      <div class="preloader__sector cpurple">i</div>
      <div class="preloader__sector cpurple">o</div>
 
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
    </div>
    <div class="preloader__ring">
      <div class="preloader__sector">L</div>
      <div class="preloader__sector">o</div>
      <div class="preloader__sector">a</div>
      <div class="preloader__sector">d</div>
      <div class="preloader__sector">i</div>
      <div class="preloader__sector">n</div>
      <div class="preloader__sector">g</div>
      <div class="preloader__sector">.</div>
      <div class="preloader__sector">.</div>
      <div class="preloader__sector">.</div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
      <div class="preloader__sector"></div>
    </div>
  </div>     
    </div>
)}
    
    {
       authContext.userRole  && authContext.userRole === 'studio' ?
        <>
       
        {
        children
        }
        </> 
        : navigate('/login')
        
      
  
    }
   
  </>
  )
}
