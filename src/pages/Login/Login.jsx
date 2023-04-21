import React from 'react'
import './Login.css'
import CustomHeader from '../../components/CustomHeader/CustomHeader'
export default function Login() {
    return (
        <div className='Login'>
            <CustomHeader />

            <main>
                <section>
                    <div>
                        <input type="email" placeholder='ایمیل...' />
                        <input className='mt-4' type="text" placeholder='رمز عبور...' />
                        <button className='mt-5'>ورود</button>
                    </div>
                    <img src="../../public/images/similar/Group 22.png" alt="" />
                </section>
                <div className='login-footer'>
                    
                    <p>قدرت گرفته از</p>
                    <img src="../../public/images/similar/New Project (99) 3.png" alt="" />
                </div>
            </main>
        </div>
    )
}
