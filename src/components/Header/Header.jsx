import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
        <header className='main_header'>
            <Link to="/"><img src="../../public/images/similar/New Project (1) 2.svg" alt="Logo" /></Link>
            <section>
                <button className='create-studio-btn'>ثبت استدویو</button>
               <Link className='login-btn' to='/Login'> <button>ورود</button></Link>
            </section>
        </header>
    )
}
