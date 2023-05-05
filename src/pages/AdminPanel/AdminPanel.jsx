import React,{useState,useEffect} from 'react'
import './AdminPanel.css'
import EmailLoading from '../../components/EmailLoading/EmailLoading'
import StudioPanelHeader from '../../components/StudioPanelHeader/StudioPanelHeader'
import AdminPanelStudioSection from '../../components/AdminPanelStudioSection/AdminPanelStudioSection'
export default function AdminPanel() {
  const [radioStatus,setRadioStaus]=useState('همه')
  const [studios,setStudios]=useState(null)
  const [loader,setloader]=useState(false)
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (radioStatus=='همه') {
  
    fetch('https://api.seartudio.com/admin/getAllStudios',{
      headers:{
        authorization : `${localStorageData.token}`
      }
    })
    .then(res =>res.json())
    .then(data=>{
     setStudios(data.data);
     console.log(data);
     

    })
  }else if(radioStatus=='غیرفعال'){

    fetch('https://api.seartudio.com/admin/getDeactiveStudios',{
      headers:{
        authorization : `${localStorageData.token}`
      }
    })
    .then(res =>res.json())
    .then(data=>{
     setStudios(data.data);
     
    })
  }else{

    fetch('https://api.seartudio.com/admin/getActiveStudios',{
      headers:{
        authorization : `${localStorageData.token}`
      }
    })
    .then(res =>res.json())
    .then(data=>{
     setStudios(data.data);
     
    })
  }
  }, [studios])
  
  return (
    <div className='AdminPanel'>
        <StudioPanelHeader title='مدیریت'/>
        <div className="AdminPanel-studios">
            <p  className="AdminPanel-studios-title">استودیو های:</p>

            <main>
            <div class="form-check form-check-inline AdminPanel-formCheck" style={{background:'#6AB857 ', marginRight:' 0rem !important'}}>
  <input class="form-check-input" onChange={()=>setRadioStaus('فعال')}  checked={radioStatus == 'فعال' && true} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">فعال</label>
</div>
<div class="form-check form-check-inline AdminPanel-formCheck" style={{background:'#b857579e '}}>
  <input class="form-check-input" onChange={()=>setRadioStaus('غیرفعال')}  checked={radioStatus == 'غیرفعال' && true} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">غیر فعال</label>
</div>
<div class="form-check form-check-inline AdminPanel-formCheck" style={{background:'#B9B9B9 '}}>
  <input class="form-check-input" onChange={()=>setRadioStaus('همه')}  checked={radioStatus == 'همه' && true} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3"> همه</label>
</div>
            </main>
            
        </div>
    {studios && studios.map(data=>(
       <AdminPanelStudioSection {...data}/>
    ))}
       
       {loader &&(
        <EmailLoading/>
       )}
    </div>
  )
}
