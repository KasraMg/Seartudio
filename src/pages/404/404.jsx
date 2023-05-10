import React from 'react'
import './404.css'
import CustomHeader from '../../components/CustomHeader/CustomHeader'
export default function NotFound() {
  return (
    <div className='Not-Found'>
        <CustomHeader/>
        <main>
            <img src="./images/similar/Group 24.png" alt="404" />
            <p className='mt-4'>گشتم <span>نبود</span>!</p>
            <p><span>نگرد</span> که نیست ):</p>
        </main>
    </div>
  )
}
