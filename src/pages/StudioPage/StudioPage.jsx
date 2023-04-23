import React from 'react'
import './StudioPage.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
export default function StudioPage() {
  return (
    <div className='StudioPage'>
        <Header/>
        <section className='StudioPage-top-section'>
            <div>
    <div>
        
        <p> استودیو مزدک</p>
        <img src="../../public/images/studiopage/Group 37.png" alt="" />
    </div>
    <p>توضیحات:</p>
    <p>این یک متن توضیح کامل و عالی
برای استودیو مورد نظر می باشد.</p>
            </div>
         
           
        <img src="../../public/images/studiopage/def-logo 2.png" alt="" />
        </section>

        <div className="studio-details">
            <p className='studio-details-title'>مشخصات:</p>
            <main>
                <div>
                    <p>شیراز</p>
                    <img src="../../public/images/studiopage/Group 325.png" alt="" />
                </div>
                <div>
                    <p>۰۱۲۳۴۵۶۷۸</p>
                    <img src="../../public/images/studiopage/phone.png" alt="" />
                </div>

                <div>
                    <p>مجوز ندارد</p>
                    <img src="../../public/images/studiopage/Group 322.png" alt="" />
                </div>
                <div>
                    <p>email@example.com</p>
                    <img src="../../public/images/studiopage/Group 31.png" alt="" />
                </div>
                <div>
                    <p>حرفه ای</p>
                    <img src="../../public/images/studiopage/Vector5.png" alt="" />
                </div>
                <div>
                    <p>100,000ت</p>
                    <img src="../../public/images/studiopage/Group 32.png" alt="" />
                </div>
                <div>
                    <p>فلان شهر بهمان استان و این حرفا.</p>
                    <img src="../../public/images/studiopage/Vector.png" alt="" />
                </div>
            </main>
        </div>

        <div className="studio-image" dir='rtl'>
            <p className="studio-image-title">تصویر:</p>
            <img src="../../public/images/studiopage/Rectangle 18.png" alt="" />
        </div>
        <Footer/>
    </div>
  )
}
