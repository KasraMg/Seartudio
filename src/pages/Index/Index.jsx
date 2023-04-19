import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import IndexStudioSection from '../../components/IndexStudioSection/IndexStudioSection'
import './Index.css'
export default function Index() {
    return (
        <div className='index_page'>
            <Header />

            <section className='index-intro'>

                <div>
                    <p>استودیوت رو ثبت کن!</p>
                    <span>با ثبت استودیو خودت توی <strong> سرتودیو </strong>
                        خودت به آرتیست ها معرفی کن </span>
                    <button>بزن بریم</button>
                </div>

                <img src="../../public/images/index/rafiki.png" alt="" />
            </section>

            <section className='index-find-studio'>
            <div>
                    <p>استودیوت رو پیدا کن!</p>
                    <span>استدیو مناسب خودت رو با فیلتر های <strong> سرتودیو </strong>
پیدا کن و باهاشون همکاری کن</span>
                    <button>بزن بریم</button>
                </div>

                <img src="../../public/images/index/bro.png" alt="" />
            </section>

            <div className="index-studios">
                <p className="index-studios-title">استودیو ها</p>

                <main>
                
               <IndexStudioSection/>
               <IndexStudioSection/>

               <IndexStudioSection/>
               <IndexStudioSection/>
               <IndexStudioSection/>

                    <button>بیشتر</button>
                </main>
            </div>

            <section className='index-instagram'>
        <img src="../../public/images/index/bro2.png" alt="" />
        <div>
            <img src="../../public/images/index/New Project (99) 2.png" alt="" />
            <p className='index-instagram-title'>مسیر بیزنس پلتفرم پخش بین المللی</p>
            <div>
            <img src="../../public/images/index/🦆 icon _rounded instagram_.png" alt="" />  
                <p>masir_business</p>
          
            </div>
            
        </div>
            </section>

            <Footer/>
        </div>
    )
}
