import React from 'react'
import './AboutUs.css'
import CustomHeader from '../../components/CustomHeader/CustomHeader'
export default function AboutUs() {
  return (
    <div className='AboutUs'>
        <CustomHeader/>

        <main>
                <p className='AboutUs-title'>  درباره ما:</p>
                <div className='AboutUs-text'>
                    <p>سرتودیو یک سرویس جهت معرفی استودیو ها و حل مشکل پیدا کردن استودیو برای ارتیست هاست</p>
                    <p>ما استودیو ها را در دسته بندی های مختلف و با توضیحات
کامل معرفی میکنیم, و شما میتوانید به راحتی از این سرویس 
جهت پیدا کردن استودیو مناسب خود اقدام کنید.</p>


                <p> لازم به ذکر است که تمامی استودیو های سرتودیو اعتبار سنجی شده
معتبر و دارای استاندارد های اولیه سرتودیو هستند.</p>


                <p>با این وجود شما می توانید هرگونه مشکلی را به <a href='https://t.me/seartudio_support'>پشتیبانی سرتودیو</a> گزارش کنید.</p>
               
                </div>
                <div className='AboutUs-text-mobile'>
                    <p>
                    سرتودیو یک سرویس جهت معرفی استودیو ها
و حل مشکل پیدا کردن استودیو برای ارتیست هاست

ما استودیو ها را در دسته بندی های مختلف و با توضیحات
کامل معرفی میکنیم, و شما میتوانید به راحتی از این سرویس 
جهت پیدا کردن استودیو مناسب خود اقدام کنید.

لازم به ذکر است که تمامی استودیو های سرتودیو اعتبار سنجی شده
معتبر و دارای استاندارد های اولیه سرتودیو هستند.

با این وجود شما می توانید هرگونه مشکلی را به <a href="https://t.me/seartudio_support">پشتیبانی سرتودیو</a> گزارش کنید.
                </p>
                </div>
                <p className='AboutUs-title-2'>درباره ما:</p>
        <img className='AboutUs-main-img' src="../images/similar/Character.png" alt="" />

            </main>
    </div>
  )
}
