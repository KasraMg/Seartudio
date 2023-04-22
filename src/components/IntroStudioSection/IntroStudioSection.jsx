import React from 'react'
import './IntroStudioSection.css'
export default function IntroStudioSection() {
  return (
    <section className='Intro-Studio-Section'>
    <img src="../../public/images/index/Mask group.png" className='Intro-Studio-Section-absolute-img' alt="" />
    <div className='Intro-Studio-Section-title'>
        <p >استودیو مزدک</p>
        <img className='Intro-Studio-section-title-img-1' src="../../public/images/index/🦆 icon _voice ok_.png" alt="" />
        <div style={{position:'relative',left:'15px'}}>
              <img className='pb-2 verify-icon-1' src="../../public/images/index/Vector.png" alt="" />
              <img className='pb-2 verify-icon-2' src="../../public/images/index/Vector1.png" alt="" />
        </div>
      
    </div>

    <div className='Intro-Studio-Section-details'>
        <div className='Intro-Studio-Section-description'>
            <p className='mb-1'>توضیحات:</p>
            <p>یک متن توضیح برای استودیو  بالا این متن الکیه بخدا</p>
        </div>
        <div className='Intro-Studio-Section-details-section-2'>
           <div className='Intro-Studio-Section-price'>
            <img src="../../public/images/index/🦆 icon _money square_.png" alt="" />
            <p>  ۱۰۰،۰۰۰ ت</p>
           </div>
           <div className='Intro-Studio-Section-city'>
           <img src="../../public/images/index/🦆 icon _globe_.png" alt="" />
            <p> قزوین</p>
           </div>
        </div>
    </div>
</section>
  )
}
