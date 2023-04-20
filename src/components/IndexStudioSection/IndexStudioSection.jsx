import React from 'react'
import './IndexStudioSection.css'
export default function IndexStudioSection() {
  return (
    <section className='index-studio'>
    <img src="../../public/images/index/Mask group.png" className='index-studio-absolute-img' alt="" />
    <div className='index-studio-title'>
        <p >استودیو مزدک</p>
        <img className='index-studios-section-title-img-1' src="../../public/images/index/🦆 icon _voice ok_.png" alt="" />
        <div style={{position:'relative',left:'15px'}}>
              <img className='pb-2 verify-icon-1' src="../../public/images/index/Vector.png" alt="" />
              <img className='pb-2 verify-icon-2' src="../../public/images/index/Vector1.png" alt="" />
        </div>
      
    </div>

    <div className='index-studio-details'>
        <div className='index-studio-description'>
            <p className='mb-1'>توضیحات:</p>
            <p>یک متن توضیح برای استودیو  بالا این متن الکیه بخدا</p>
        </div>
        <div className='index-studio-details-section-2'>
           <div className='index-studio-price'>
            <img src="../../public/images/index/🦆 icon _money square_.png" alt="" />
            <p>  ۱۰۰،۰۰۰ ت</p>
           </div>
           <div className='index-studio-city'>
           <img src="../../public/images/index/🦆 icon _globe_.png" alt="" />
            <p> قزوین</p>
           </div>
        </div>
    </div>
</section>
  )
}
