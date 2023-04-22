import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <footer className='main_footer'>
           <Link to='/'> <img src="../../public/images/similar/New Project (1) 2.svg" alt="Logo" /></Link>
            <main>
                     <div>
                <ul>
                    <li><a href="https://t.me/seartudio"> تلگرام </a>  </li>
                    <li><a href="https://instagram.com/seartudio/">اینستاگرام</a>  </li>
                    <li><a href="https://instagram.com/masir_business/">مسیر بیزنس</a> </li>

                    <li><Link to='/rules'> قوانین و مقررا ت </Link></li>
                    <li><Link to='/AboutUs'>درباره ما</Link> </li>
                    <li> <a href="https://t.me/seartudio_support">پشتیبانی</a></li>

                </ul>
            </div>
            <section>
                <p className='mt-3'>عضویت در خبرنامه</p>
                <div>
                    <input type="text" dir='ltr' placeholder='Your Email'/>
                    <span><img src="../../public/images/index/Clip path group.png" alt="" /></span>
                </div>
            </section>
            </main>
       
        </footer>
    )
}