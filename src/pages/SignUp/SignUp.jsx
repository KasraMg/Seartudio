import React, { useState } from 'react'

import Footer from '../../components/Footer/Footer';
import './SignUp.css'
import Header from '../../components/Header/Header'
import MainSignUp from '../../components/MainSignUp/MainSignUp';
import swal from "sweetalert";

import MyVerticallyCenteredModal from '../../components/Modal/Modal';
export default function SignUp() {

  const [TelgramModalShow, setTelgramModalShow] = React.useState(false);
  const [StudioModalShow, setStudioModalShow] = React.useState(false);
  const TelegramonHide=()=>{
    setTelgramModalShow(false)
  }
  const StudioonHide=()=>{
    setStudioModalShow(false)
  }
  return (
    <div className='SignUp'>
      <Header />

      <section className='SignUp-section'>
        <div>
          <p>در معرض دید باش</p>
          <p>خودتو رو به صدها ارتیست نشون بده درامدتو افزایش بده!</p>
          <span>!توضیحات کامل ثبت استودیو رو از <a href='https://t.me/seartudio_support'>اینجا</a> ببین</span>
        </div>

        <img src="../../public/images/signup/Group 29.png" alt="" />
      </section>

     
   <MainSignUp  setTelgramModalShow={setTelgramModalShow} setStudioModalShow={setStudioModalShow}/>


    <MyVerticallyCenteredModal 
       show={TelgramModalShow}
       onHide={TelegramonHide}>
      <p>
      شناسه تلگرامی خود را از ربات:
      <br />
<a href="https://t.me/seartudio_support">@seartudio_bot</a>
<br />
دریافت کنید و در این قسمت وارد کنید
      </p>
      </MyVerticallyCenteredModal>
          
      <MyVerticallyCenteredModal 
       show={StudioModalShow}
       onHide={StudioonHide}>
      <p>
      عکس لوگو و تصویر استودیو
باید حتما رسمی و واقعی باشد
از استفاده از تصاویر فیک خودداری کنید
(تصویر لوگو اجباری نمی باشد!)
      </p>
      </MyVerticallyCenteredModal>
          
   
      <Footer/>
    </div>
  )
}
