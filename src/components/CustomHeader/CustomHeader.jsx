import React from 'react'
import './CustomHeader.css'
import { Link } from 'react-router-dom'
export default function CustomHeader() {
  return (
    <header className='CustomHeader'>
       <Link to='/'><img  className='main-custom-header-img' src="../../public/images/similar/New Project (1) 2.svg" alt="Logo" /></Link> 
        <Link className='CustomHeader-link' to='/'>
            <span><img src="./../public/images/similar/Vector.png" alt="" /></span>
            <p>بازگشت</p>
        </Link>
    </header>
  )
}
