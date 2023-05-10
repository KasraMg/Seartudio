import React, { useEffect, useState, useContext } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import './Header.css'
import AuthContext from '../../Context/authContext'
import swal from 'sweetalert'
export default function Header() {
    const authContext = useContext(AuthContext)

    const navigate= useNavigate()
  

    const userLogOut = () => {
        swal({
            title: 'ایا از خروج اطمینان دارید؟',
            icon: 'warning',
            buttons: ['خیر', 'بله']
        }).then(res => {
            if (res) {
                authContext.logout()
                authContext.setUserInfos({})
                location.reload()
            }
        }
        )
    }
    return (
        <header className='main_header'>
            <Link to="/"><img src="../images/similar/New Project (1) 2.svg" alt="Logo" /></Link>
            <section>
                {authContext.userInfos.name ? (
                    <div onClick={userLogOut}><button className='create-studio-btn'>خروج از اکانت</button></div>
                ) : (
                    <Link style={{ textDecoration: 'none' }} to='/signup'><button className='create-studio-btn'>ثبت استدویو</button></Link>
                )}



                <Link className='login-btn' to='/Login'> <button>{authContext.userInfos.name ? authContext.userInfos.name : 'ورود'}</button></Link>
            </section>
        </header>
    )
}
