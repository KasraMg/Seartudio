import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import './SignUp.css'
import provinces from '../Studios/data';
import Header from '../../components/Header/Header'
import {AiOutlineInfoCircle} from 'react-icons/ai'
export default function SignUp() {
  const [Allprovinces, setAllProvinces] = useState(provinces)
  return (
    <div className='SignUp'>
      <Header />

      <section className='SignUp-section'>
        <div>
          <p>در معرض دید باش</p>
          <p>خودتو رو به صدها ارتیست نشون بده درامدتو افزایش بده!</p>
          <span>!توضیحات کامل ثبت استودیو رو از <a href="">اینجا</a> ببین</span>
        </div>

        <img src="../../public/images/signup/Group 29.png" alt="" />
      </section>

      <div className='create-studio'>
        <p className='create-studio-title'>ثبت استودیو</p>

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
          </div>
          
          <div className='file-input-parent'>
            <input type="file" dir='ltr' className='picture-input'  placeholder='تصویر استودیو'/>
            <p className='sign-up-studio-span'>تصویر استودیو</p>
          </div>
         
          <input type="text" placeholder='رمز عبور' />
          <input disabled="disabled" className='rules-input' type="text" placeholder='شرایط و قوانین سرتودیو را میپذیرم' />

       
          
         
        </main>

        <button className='create-studio-btn mt-4'>ثبت</button>
      </div>
      
    </div>
  )
}
