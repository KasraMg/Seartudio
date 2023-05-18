import React, { useState, useContext, useEffect } from 'react'
import './StudioPanel.css'
import StudioPanelHeader from '../../components/StudioPanelHeader/StudioPanelHeader'
import IntroStudioSection from '../../components/IntroStudioSection/IntroStudioSection'
import MainStudioPanel from '../../components/MainStudioPanel/MainStudioPanel'
import swal from 'sweetalert'
import AuthContext from '../../Context/authContext';
import EmailLoading from '../../components/EmailLoading/EmailLoading'
  
import { useNavigate } from 'react-router-dom';
export default function StudioPanel() {
  const authContext = useContext(AuthContext)
  const Navigate = useNavigate()
  const [loader,setLoader]=useState()
  const [allData, setAllData] = useState([])



  useEffect(() => {
    if (authContext.userInfos.name) {
      setAllData([authContext.userInfos])
    }


  }, [authContext.userInfos])

  const deleteStudio = () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: 'آیا از حذف این استودیو مطمئن هستید؟',
      icon: 'warning',
      buttons: ['نه', 'آره']
    }).then(res => {
      if (res) {
        swal({
          title: 'رمز عبور خود را وارد کنید',
          content: "input",
          buttons: 'تایید'
        }).then(data => {
          if (data) {
            setLoader(true)
            let row = JSON.stringify({
              "passWord": data.trim()
            })

            fetch('https://api.seartudio.com/studio/delete', {
              method: 'DELETE',

              headers: {
                authorization: localStorageData.token,
                "Content-Type": "application/json"
              },

              body: row
            }).then(res => {
              console.log(res);
              setLoader(false)
              if (res.status == 400) {
                swal({
                  title: 'رمز عبور وارد شده صحیح نیست',
                  icon: 'error',
                  buttons: 'تایید'
                })
              } else if (res.status == 404) {
                swal({
                  title: 'اکانت شما با موفقیت حذف شد',
                  icon: 'success',
                  buttons: 'تایید'
                }).then(res => {
                  authContext.logout()
                  Navigate('/')
                })
              }
            })
          }
        })
      }
    })
  }

  return (

    <div className='StudioPanel '>
      <StudioPanelHeader title='مدیریت استودیو' />
      {authContext.userInfos && (
        <>
          <div className='StudioPanel-status' dir='rtl'>
            <p>وضعیت استودیو شما:</p>
            {authContext.userInfos.isActive ? (
              <img src="./images/studiopanel/Group 34.png" alt="" />
            ) : (
              <img src="./images/studiopanel/Group 32.png" alt="" />
            )}

            <p className='mt-4'> درباره پشتیبانی</p>

            <a href="https://t.me/seartudio_support"><img src="./images/studiopanel/Group 33.png" alt="" /></a>
          </div>

          <div className="your-studio">
            <p className="your-studio-title">پیش نمایش استودیو شما:</p>
            {allData && authContext.userInfos && allData.map(data => (
              <IntroStudioSection {...data} />
            ))}

          </div>

          <MainStudioPanel userInfo={authContext.userInfos && authContext.userInfos} />

        </>
      )}


      <button onClick={deleteStudio} className='delete-btn'>حذف استودیو</button>

      {loader &&(
        <EmailLoading/>
      )}
    </div>
  )
}
