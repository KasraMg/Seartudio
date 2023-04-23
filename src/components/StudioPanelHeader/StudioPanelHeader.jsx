import React from 'react'
import './StudioPanelHeader.css'
import { Link } from 'react-router-dom'
export default function StudioPanelHeader() {
  return (
    <header className='StudioPanelHeader'>
    <Link to="/"><img src="../../public/images/similar/New Project (1) 2.svg" alt="Logo" /></Link>
    <section>
    <Link style={{textDecoration:'none'}} to='/signup'><button className='create-studio-btn'>پنل مدیریت استودیو</button></Link>    
    </section>
</header>
  )
}
