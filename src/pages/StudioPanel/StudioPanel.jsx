import React,{useState} from 'react'
import './StudioPanel.css'
import StudioPanelHeader from '../../components/StudioPanelHeader/StudioPanelHeader'
import IntroStudioSection from '../../components/IntroStudioSection/IntroStudioSection'
import Dropdown from 'react-bootstrap/Dropdown';
import provinces from '../Studios/data';
import { Link } from 'react-router-dom';
import MyVerticallyCenteredModal from '../../components/Modal/Modal';
export default function StudioPanel() {
  const [Allprovinces, setAllProvinces] = useState(provinces)
  
  const [TelgramModalShow, setTelgramModalShow] = React.useState(false);
  const [StudioModalShow, setStudioModalShow] = React.useState(false);
  const TelegramonHide=()=>{
    setTelgramModalShow(false)
  }
  const StudioonHide=()=>{
    setStudioModalShow(false)
  }
  return (
    <div className='StudioPanel '>
        <StudioPanelHeader title='مدیریت استودیو'/>

    <div className='StudioPanel-status' dir='rtl'>
    <p>وضعیت استودیو شما:</p>

    <img src="../../public/images/studiopanel/Group 32.png" alt="" />
    <p className='mt-4'> درباره پشتیبانی</p>

    <a href="https://t.me/seartudio_support"><img src="../../public/images/studiopanel/Group 33.png" alt="" /></a>
    </div>

    <div className="your-studio">
        <p className="your-studio-title">پیش نمایش استودیو شما:</p>
    <IntroStudioSection/>
    </div>

    <div className="edit-studio-details create-studio">
      <p className='edit-studio-details-title'>ویرایش اطلاعات استودیو:</p>


      <main dir='rtl'>
          <input type="email" placeholder='نام استودیو(فارسی)' />
          <input type="text" placeholder='شناسه استودیو(انگلیسی و کوتاه)' />
          <input type="email" placeholder='آدرس دقیق...' />
          <input type="text" placeholder='شماره تماس (انگلیسی)' />
          <input type="text" placeholder='ایمیل شما (ترجیحا رسمی)' />
          <Dropdown className='cyties-dropDown '>
            <Dropdown.Toggle id="dropdown-basic">
              استان
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {Allprovinces.map(data => (
                <Dropdown.Item href="#/action-1">{data}</Dropdown.Item>
              ))}



            </Dropdown.Menu>
          </Dropdown>
          
            <input type="text" placeholder='قیمت (بر اساس ساعت و انگلیسی)' />
          
          
          <Dropdown className='licens-dropDown'>
            <Dropdown.Toggle id="dropdown-basic">
              وضعیت مجوز
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">دارد</Dropdown.Item>
              <Dropdown.Item href="#/action-2">ندارد </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

  
          <div  className='telegram-input'>
          <input type="text" placeholder='شناسه تلگرامی' />
          <img   onClick={() => setTelgramModalShow(true)} src="../../public/images/signup/Group 326.png" alt="" />
          </div>

          <Dropdown className='studio-type-dropDown'>
            <Dropdown.Toggle id="dropdown-basic">
              نوع استودیو
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">حرفه ای </Dropdown.Item>
              <Dropdown.Item href="#/action-2"> خانگی</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
              <div className='file-input-parent'>
          <input type="file" className='logo-input' dir='ltr' placeholder='تصویر لوگو' />
               <p className='sign-up-logo-span'>تصویر لوگو</p>
                <img onClick={() => setStudioModalShow(true)} src="../../public/images/signup/Group 326.png" alt="" />
          </div>
          
          
          <div className='file-input-parent'>
            <input type="file" dir='ltr' className='picture-input'  placeholder='تصویر استودیو'/>
            <p className='sign-up-studio-span'>تصویر استودیو</p>
             <img  onClick={() => setStudioModalShow(true)} src="../../public/images/signup/Group 326.png" alt="" />
          </div>
         
      
      
        
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
          
        </main>

        <button className='edit-btn'>ویرایش</button>
    </div>

  
    </div>
  )
}
