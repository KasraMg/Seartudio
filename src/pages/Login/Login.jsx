import React, { useState, useContext } from 'react'
import AuthContext from '../../Context/authContext'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert";
import EmailLoading from '../../components/EmailLoading/EmailLoading';
import CustomHeader from '../../components/CustomHeader/CustomHeader'
export default function Login() {
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [error401, setError401] = useState()
    const authContext = useContext(AuthContext);

    const loginHandler = () => {
        let formData = new FormData();
        formData.append("email", email);
        formData.append("passWord", password);
        setLoader(true)
        fetch('https://api.seartudio.com/studio/signup', {
            method: 'POST',
            body: formData,
        })
            .then(data => data.json())
            .then(res => {
                setLoader(false)
                if (res.statusCode == 200) {
                    setError401(false)
                    if (res.data.admin) {
                        authContext.login([res.data.admin], res.data.jwt);

                        navigate("/adminPanel");


                    } else {
                        authContext.login([res.data.studioData], res.data.jwt);

                        navigate("/studioPanel");

                    }

                }
                else if (res.statusCode == 401) {
                    setError401(true)
                }

            })

    }

    const forgotPassword = () => {
        const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]{5,5}(?:\.[a-zA-Z0-9-]{2,3})*$/
        swal({
            title: 'ایمیل خود را وارد کنید',
            content: "input",
            buttons: 'تایید'
        }).then(res => {
            let regexStatus = regex.test(res.trim())
            if (regexStatus) {
                setLoader(true)
                let row = JSON.stringify({
                    "email": res
                })
                fetch('https://api.seartudio.com/studio/passWordForgot', {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: 'POST',
                    body: row
                }).then(res => {
                    res.json()
                    setLoader(false)
                    console.log(res);
                    if (res.status == 200) {
                        swal({
                            title: 'صندوق ایمیل خود را بررسی کنید',
                            icon: 'success',
                            buttons: 'تایید'
                        })
                    } else if (res.status == 404) {
                        swal({
                            title: 'صندوق ایمیل خود را بررسی کنید',
                            icon: 'success',
                            buttons: 'تایید'
                        })
                    }
                })

            } else {
                swal({
                    title: 'ایمیل وارد شده صحیح نیست',
                    icon: 'error',
                    buttons: 'تایید'
                })
            }
        })
    }
    return (
        <div className='Login'>
            <CustomHeader />

            <main>
                {error401 && (
                    <div className='login-401'>
                        <p>ایمیل یا رمز اشتباه است.</p>
                    </div>
                )}
                <section>

                    <div>
                        <input autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='ایمیل...' />
                        <input autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} className='mt-4' type="password" placeholder='رمز عبور...' />
                        <button onClick={loginHandler} className='mt-5'>ورود</button>
                        <p onClick={forgotPassword} className='forgot-password'>بازیابی رمز عبور</p>
                    </div>
                    <img src="../images/similar/Group 22.png" alt="" />
                </section>
                <div className='login-footer'>

                    <p>قدرت گرفته از</p>
                    <a href="https://instagram.com/masir_business/"><img src="../images/similar/New Project (99) 3.png" alt="" /></a>
                </div>

            </main>

            {loader && (
                <EmailLoading />
            )}
        </div>

    )
}
