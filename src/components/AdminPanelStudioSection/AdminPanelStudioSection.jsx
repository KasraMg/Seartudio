import React,{useState} from 'react'
import './AdminPanelStudioSection.css'
export default function AdminPanelStudioSection(props) {
  const [verify,setVerify]=useState(props.isVeryfied)
  const [isPromoted,setisPromoted]=useState(props.isPromoted)
  
  console.log(props);
  return (
    <section className='Intro-Studio-Section AdminPanelStudioSection'>
    <img crossOrigin='anonymous' src={props.image}className='Intro-Studio-Section-absolute-img' alt="" />
    <div className='Intro-Studio-Section-title'>
      <div>
         <p className='AdminPanelStudioSection-title' > {props.name}</p> 
         <button><a style={{color:'black'}} target='_blank' href={`/StudioPage/${props.studioId}`}>مشاهده</a></button>
      </div>
      
       
       <div className='Intro-Studio-Section-form-check'>
       <div class="form-check verify-form">
       { verify? (
                        <img className='image-check' onClick={() => setVerify(false)} src="../../public/images/signup/photo_5949261142641720371_m.jpg" alt="Logo" />
                    ) : (
                        <img className='image-check' onClick={() => setVerify(true)} src="../../public/images/signup/Rectangle 39.png" alt="Logo" />
                    )}
 
  <label class="form-check-label" for="inlineRadio1">وریفای</label>
  <img src="../../public/images/adminpanel/Group 38.png" alt="" />
</div>

<div class="form-check form-check-inline prom-form-check">
  <div className='prom-input-div'>
    <input dir='rtl' type="text"  className='Promoted-input'/>
<p>ماه</p>
  </div>

  <label class="form-check-label" for="inlineRadio3"> پروموت</label>
  <img src="../../public/images/adminpanel/🦆 icon _voice ok_.png" alt="" />
</div>
       </div>

      
    </div>

    <div className='AdminPanelStudioSection-details'>
        <div className='AdminPanelStudioSection-description'>
          <div className='active-input-div'> 
               <input dir='rtl' type="text"  />
            
            <p>ماه</p>
          </div>
         
            <img src="../../public/images/adminpanel/Group 37.png" alt="" />
        </div>
        <div className='AdminPanelStudioSection-details-button'>
         <button>ثبت</button>
        </div>
    </div>
</section>
  )
}
