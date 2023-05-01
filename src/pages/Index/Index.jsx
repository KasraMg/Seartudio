import React,{useEffect,useState} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import IntroStudioSection from '../../components/IntroStudioSection/IntroStudioSection'
import { Link } from 'react-router-dom'
import './Index.css'
import Loader from '../../components/Loader/Loader'
export default function Index() {
const [studio,setStudio]=useState()


    useEffect(() => {

     fetch('https://api.seartudio.com/')
     .then(res=>res.json())
     .then(data=>setStudio(data.data))
        console.log(studio);
    }, [])
  
    return (
        <div className='index_page'>
            <Header />

            <section className='index-intro'>

                <div>
                    <p>استودیوت رو ثبت کن!</p>
                    <span>با ثبت استودیو خودت توی <strong> سرتودیو </strong>
                        خودت به آرتیست ها معرفی کن </span>
                    <Link to='/SignUp'><button>بزن بریم</button></Link>
                </div>

                <img src="../../public/images/index/rafiki.png" alt="" />
            </section>

            <section className='index-find-studio'>
                <div>
                    <p>استودیوت رو پیدا کن!</p>
                    <span>استدیو مناسب خودت رو با فیلتر های <strong> سرتودیو </strong>
                        پیدا کن و باهاشون همکاری کن</span>
                    <Link to='/Studios'><button>بزن بریم</button></Link>
                </div>

                <img src="../../public/images/index/bro.png" alt="" />
            </section>

            <div className="index-studios">
                <p className="index-studios-title">استودیو ها</p>

                <main>
            {studio ? (
                studio.map(data=>(
                         <IntroStudioSection {...data} />
                   ))  
            ):(
               <Loader/>
            )}
                  

                    <Link style={{textDecoration:'none'}} to='/Studios'><button>بیشتر</button></Link>
                </main>
            </div>

            <section className='index-instagram'>
                <img className='main-index-instagram-img' src="../../public/images/index/bro2.png" alt="" />
                <div>
                    <img src="../../public/images/index/New Project (99) 2.png" alt="" />
                    <p className='index-instagram-title'>مسیر بیزنس پلتفرم پخش بین المللی</p>
                    <a href="https://instagram.com/masir_business/" style={{ color: 'black', textDecoration: 'none' }}>
                        <div>
                            <img className='index-instagram-icon' src="../../public/images/index/🦆 icon _rounded instagram_.png" alt="" />
                            <p>masir_business</p>

                        </div>
                    </a>


                </div>
            </section>

     <Footer />
        </div>
    )
}
