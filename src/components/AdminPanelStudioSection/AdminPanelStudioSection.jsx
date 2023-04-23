import React from 'react'
import './AdminPanelStudioSection.css'
export default function AdminPanelStudioSection() {
  return (
    <section className='Intro-Studio-Section AdminPanelStudioSection'>
    <img src="../../public/images/index/Mask group.png" className='Intro-Studio-Section-absolute-img' alt="" />
    <div className='Intro-Studio-Section-title'>
      <div>
         <p className='AdminPanelStudioSection-title' >استودیو مسیر</p> 
         <button>مشاهده</button>
      </div>
      
       
       <div className='Intro-Studio-Section-form-check'>
       <div class="form-check ">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">وریفای</label>
  <img src="../../public/images/adminpanel/Group 38.png" alt="" />
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3"> پروموت</label>
  <img src="../../public/images/adminpanel/🦆 icon _voice ok_.png" alt="" />
</div>
       </div>

      
    </div>

    <div className='AdminPanelStudioSection-details'>
        <div className='AdminPanelStudioSection-description'>
            <input type="text"  />
            <img src="../../public/images/adminpanel/Group 37.png" alt="" />
            <p>ماه</p>
        </div>
        <div className='AdminPanelStudioSection-details-button'>
         <button>ثبت</button>
        </div>
    </div>
</section>
  )
}
