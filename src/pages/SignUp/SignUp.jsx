import React, { useEffect, useState } from 'react'

import Footer from '../../components/Footer/Footer';
import './SignUp.css'
import Header from '../../components/Header/Header'
import MainSignUp from '../../components/MainSignUp/MainSignUp';


import MyVerticallyCenteredModal from '../../components/Modal/Modal';
export default function SignUp() {
  const [dataLink,setDataLink]=useState(null)
  const [TelgramModalShow, setTelgramModalShow] = useState(false);
  const [LogoModalShow, setLogoModalShow] = useState(false);
    const [ImageModalShow, setImageModalShow] = useState(false);
  const TelegramonHide=()=>{
    setTelgramModalShow(false)
  }
  const LogoModalHide = () => {
    setLogoModalShow(false)
}
const ImageModalHide = () => {
    setImageModalShow(false)
}
useEffect(() => {
  fetch('https://api.seartudio.com/studio/getLink')
  .then(res=>res.json())
  .then(data=>setDataLink(data.data))


}, [])

  return (
    <div className='SignUp'>
      <Header />

      <section className='SignUp-section'>
        <div>
          <p>در معرض دید باش</p>
          <p>خودتو رو به صدها ارتیست نشون بده درامدتو افزایش بده!</p>
          <span>!توضیحات کامل ثبت استودیو رو از <a href={dataLink && dataLink}>اینجا</a> ببین</span>
        </div>

        <img src="../images/signup/Group 29.png" alt="" />
      </section>

     
   <MainSignUp  setLogoModalShow={setLogoModalShow} setTelgramModalShow={setTelgramModalShow} setImageModalShow={setImageModalShow}/>


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
                    show={LogoModalShow}
                    info={true}
                    onHide={LogoModalHide}>
                    <p>
                    آپلود تصویر لوگو اختیاری است اما در صورت استفاده ( از لوگو رسمی و واقعی استفاده کنید)
                    </p>
                </MyVerticallyCenteredModal>


                <MyVerticallyCenteredModal
                    show={ImageModalShow}
                    info={true}
                    onHide={ImageModalHide}>
                    <p>
                     آپلود تصویر استودیو اجباری است (لطفا از تصویر رسمی و واقعی استفاده کنید)
                    </p>
                </MyVerticallyCenteredModal>
   
      <Footer/>
    </div>
  )
}
