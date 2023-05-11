import React, { useState } from 'react'
import { useEffect } from 'react'
import swal from 'sweetalert'
import EmailLoading from '../EmailLoading/EmailLoading'
import './AdminPanelStudioSection.css'
export default function AdminPanelStudioSection(props) {
  const [verify, setVerify] = useState(props.isVeryfied)
  const [PromotedInput,setPromotedInput]=useState(null)
  const [ActiveInput,setActiveInput]=useState(null)
  const [verifycheck,setverifycheck]=useState(false)
  const [loading,setLoading]=useState(false)
  console.log(props);
  
  const regEx=RegExp(
    /\d/
   )  


  const updateStudio=()=>{
    
    setLoading(true)
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    console.log('hi');
 
 
    if (verifycheck) {
      let formData = new FormData();
      formData.append("studioId", props.studioId);
      formData.append("status",verify);
      fetch('https://api.seartudio.com/admin/studioVerification',{
        method:'POST',
        headers:{
          authorization : localStorageData.token
        },
        body:formData,
      }).then(res=>res.json())
      .then(data=>{
        console.log(data)
        if (data.statusCode==201) {
          swal({
          title:'  تغییرات با موفقیت انجام شد',
          icon:'success',
          buttons:'ok'
        }).then(res=>    location.reload())
     
        }
        
        })
   
    }
 if (PromotedInput !== null && PromotedInput.length) {
      const regex=  regEx.test(PromotedInput)
      if (regex) {
     let formData = new FormData();
      formData.append("studioId", props.studioId);
      formData.append("promotMonths",PromotedInput);
      fetch('https://api.seartudio.com/admin/promoteStudio',{
        method:'POST',
        headers:{
          authorization : localStorageData.token
        },
        body:formData,
      }).then(res=>res.json()
      .then(data=>{
        console.log(data)
     if (data.statusCode==201) {
      swal({
        title:'  تغییرات با موفقیت انجام شد',
        icon:'success',
        buttons:'ok'
      }).then(res=>  location.reload())
     
     }
     } ))
   
    }else{
      swal({
        title:'تنها ورودی عدد برای پروموت مجاز است',
        icon:'error',
        buttons:'ok'
      })
 
    }

      }


    if (ActiveInput !== null && ActiveInput.length ) {
      
      const regex=  regEx.test(ActiveInput)
      if (regex) {
          let formData = new FormData();
      formData.append("studioId", props.studioId);
      formData.append("subscriptionMonths",ActiveInput);
      fetch('https://api.seartudio.com/admin/activateStudio',{
        method:'POST',
        headers:{
          authorization : localStorageData.token
        },
        body:formData,
      }).then(res=>res.json()
      .then(data=>{
        console.log(data)
        if (data.statusCode==201) {
          swal({
            title:'  تغییرات با موفقیت انجام شد',
            icon:'success',
            buttons:'ok'
          }).then(res=>  location.reload())
        
         }
        }
    )
      
      )
    }else{
      
      swal({
        title:'تنها ورودی عدد برای اکتیو مجاز است',
        icon:'error',
        buttons:'ok'
      })
    }
      }
    
      

      setLoading(false)
  }
  return (
    <section className='Intro-Studio-Section AdminPanelStudioSection'>
      <img crossOrigin='anonymous' src={props.image} className='Intro-Studio-Section-absolute-img' alt="" />
      <div className='Intro-Studio-Section-title'>
        <div>
          <p className='AdminPanelStudioSection-title' > {props.name}</p>
          <button><a style={{ color: 'black' }}  href={`/StudioPage/${props.studioId}`}>مشاهده</a></button>
        </div>


        <div className='Intro-Studio-Section-form-check'>
          <div class="form-check verify-form">
            {verify? (
              <img className='image-check' onClick={() => {
                setVerify(false)
                setverifycheck(true)}}
                 src="../images/signup/photo_5949261142641720371_m.jpg" alt="Logo" />
            ) : (
              <img className='image-check' onClick={() => {
                setVerify(true)
                setverifycheck(true)}}
                 src="../images/signup/Rectangle 39.png" alt="Logo" />
            )}

            <label class="form-check-label" for="inlineRadio1">وریفای</label>
            <img src="../images/adminpanel/Group 38.png" alt="" />
          </div>
              
          <div class="form-check form-check-inline prom-form-check">
            <div className='prom-input-div'>
              {props.isPromoted ? (
                  <input value={PromotedInput} onChange={e=>setPromotedInput('')} dir='rtl' type="text" className='Promoted-input' />
              ):(
                  <input value={PromotedInput} onChange={(e)=>setPromotedInput(e.target.value)} dir='rtl' type="text" className='Promoted-input' />
              )}
            
              <p>ماه</p>
            </div>

            <label class="form-check-label" for="inlineRadio3"> پروموت</label>

            {props.isPromoted ?(
              <img src="../images/studiopanel/🦆 icon _voice ok_.png" alt="" />
            ):(
              <img src="../images/adminpanel/🦆 icon _voice ok_.png" alt="" />
            )}
           
          </div>
        </div>


      </div>

      <div className='AdminPanelStudioSection-details'>
        <div className='AdminPanelStudioSection-description'>
          <div className='active-input-div'>
          {props.isActive ? (
                  <input value={ActiveInput} onChange={e=>setActiveInput('')} dir='rtl' type="text"  />
              ):(
                  <input value={ActiveInput} onChange={(e)=>setActiveInput(e.target.value)} dir='rtl' type="text"  />
              )}
          

            <p>ماه</p>
          </div>
              {props.isActive ?(
                <img src="../images/adminpanel/Group 37.png" alt="" />
              ):(
                <img src="../images/adminpanel/Group 37.png" alt="" />
              )}
          
        </div>
        <div className='AdminPanelStudioSection-details-button'>
          <button onClick={updateStudio} disabled={PromotedInput || ActiveInput || verifycheck ? '' : 'disabled'}>ثبت</button>
        </div>
      </div>
      {loading &&(
        <EmailLoading/>
      )}
    </section>
  )
}
