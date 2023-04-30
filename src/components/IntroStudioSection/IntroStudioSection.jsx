import React from 'react'
import './IntroStudioSection.css'
export default function IntroStudioSection(props) {
  return (
    <section className='Intro-Studio-Section'>
      <img src={props.logo} className='Intro-Studio-Section-absolute-img' alt="" />
      <div className='Intro-Studio-Section-title'>
        <p >{props.name}</p>
        {props.isPromoted && (  

          <img className='Intro-Studio-section-title-img-1' src="../../public/images/index/🦆 icon _voice ok_.png" alt="" />
       )}

        {props.isVeryfied && (
          <div style={{ position: 'relative', left: '15px' }}>

            <img className='pb-2 verify-icon-1' src="../../public/images/index/Vector.png" alt="" />


            <img className='pb-2 verify-icon-2' src="../../public/images/index/Vector1.png" alt="" />

          </div>
        )}
      </div>

      <div className='Intro-Studio-Section-details'>
        <div className='Intro-Studio-Section-description'>
          <p className='mb-1'>توضیحات:</p>
          <p>{props.description}</p>
        </div>
        <div className='Intro-Studio-Section-details-section-2'>
          <div className='Intro-Studio-Section-price'>
            <img src="../../public/images/index/🦆 icon _money square_.png" alt="" />
            <p> {Intl.NumberFormat().format(props.pricePerHour)}  ت</p>
          </div>
          <div className='Intro-Studio-Section-city'>
            <img src="../../public/images/index/🦆 icon _globe_.png" alt="" />
            <p> {props.province}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
