import React from 'react'
import './AdminPanel.css'
import StudioPanelHeader from '../../components/StudioPanelHeader/StudioPanelHeader'
import AdminPanelStudioSection from '../../components/AdminPanelStudioSection/AdminPanelStudioSection'
export default function AdminPanel() {
  return (
    <div className='AdminPanel'>
        <StudioPanelHeader title='مدیریت'/>
        <div className="AdminPanel-studios">
            <p  className="AdminPanel-studios-title">استودیو های:</p>

            <main>
            <div class="form-check form-check-inline AdminPanel-formCheck" style={{background:'#6AB857 ', marginRight:' 0rem !important'}}>
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">فعال</label>
</div>
<div class="form-check form-check-inline AdminPanel-formCheck" style={{background:'#b857579e '}}>
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">غیر فعال</label>
</div>
<div class="form-check form-check-inline AdminPanel-formCheck" style={{background:'#B9B9B9 '}}>
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label class="form-check-label" for="inlineRadio3"> همه</label>
</div>
            </main>
            
        </div>

        <AdminPanelStudioSection/>
        <AdminPanelStudioSection/>

        <AdminPanelStudioSection/>
        <AdminPanelStudioSection/>
        <AdminPanelStudioSection/>
    </div>
  )
}
