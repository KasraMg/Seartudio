import React,{useState} from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import EmailLoading from '../EmailLoading/EmailLoading'
import MyVerticallyCenteredModal from '../Modal/Modal'
export default function Footer() {
    const [emailValue,setEmailValue]=useState()
    const [showLoader,setShowLoader]=useState(false)
    const [status201, setStatus201] = useState(false);
    const [status422, setStatus422] = useState(false);
    const [status400, setStatus400] = useState(false);
    const status201Hide=()=>{
        setStatus201(false)
    }
    const status422Hide=()=>{
        setStatus422(false)
    }
    const status400Hide=()=>{
        setStatus400(false)
    }


    const emailRigester=()=>{

    
        setShowLoader(true)
      
    let formData = new FormData();
    formData.append("email", emailValue);
    fetch('https://api.seartudio.com/newsLetter',{
        method: "POST",
        body:formData,
      
      })
        .then( res=> {
            setShowLoader(false)
            res.json()
        console.log(res)
        if (res.status==201) {
            setStatus201(true)
           }
           else if (res.status===422) {
            setStatus422(true)
           }
           else if (res.status===400) {
            setStatus400(true)
           }
    }
        
        )
    
        
    }
    return (
        <footer className='main_footer'>
           <Link to='/'> <img src="./images/similar/New Project (1) 2.svg" alt="Logo" /></Link>
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
                    <input value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} type="text" dir='ltr' placeholder='Your Email'/>
                    <span style={{cursor:'pointer'}} onClick={emailRigester}><img src="./images/index/Clip path group.png" alt="" /></span>
                </div>
            </section>
            </main>
       

            <MyVerticallyCenteredModal 
       show={status201}
       onHide={status201Hide}
       info={false}>
      
      <img height={100} width={100} style={{margin:'0 auto .8rem auto',display:'block'}}  src="./images/similar/Group 39.png" alt="" />
      <br />
<p>ایمیل شما با موفقیت ثبت شد.</p>


     
      </MyVerticallyCenteredModal>
      <MyVerticallyCenteredModal 
       show={status422}
       onHide={status422Hide}
       info={false}>
      
      <img height={100} width={100} style={{margin:'0 auto .8rem auto',display:'block'}}  src="./images/similar/Group 40.png" alt="" />
      <br />
<p>لطفا ایمیل معتبر وارد کنید.</p>


     
      </MyVerticallyCenteredModal>
      <MyVerticallyCenteredModal 
       show={status400}
       onHide={status400Hide}
       info={false}>
      
      <img height={100} width={100} style={{margin:'0 auto .8rem auto',display:'block'}}  src="./images/similar/Group 40.png" alt="" />
      <br />
<p>شما در خبرنامه ثبت نام کرده اید.</p>


     
      </MyVerticallyCenteredModal>

{showLoader && (
    <EmailLoading/>
)}
        </footer>
    )
}
