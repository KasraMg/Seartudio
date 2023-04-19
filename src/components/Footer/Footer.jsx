import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <footer className='main_footer'>
            <img src="../../public/images/similar/New Project (1) 2.svg" alt="Logo" />
            <main>
                     <div>
                <ul>
                    <li>تلگرام  </li>
                    <li>اینستاگرام</li>
                    <li>مسیر بیزنس</li>

                    <li>قوانین و مقررا ت </li>
                    <li>درباره ما</li>
                    <li>پشتیبانی</li>

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
