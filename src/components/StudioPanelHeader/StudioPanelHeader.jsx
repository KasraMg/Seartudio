import React from 'react'
import './StudioPanelHeader.css'
import { Link } from 'react-router-dom'
export default function StudioPanelHeader({title}) {
  return (
    <header className='StudioPanelHeader'>
    <Link to="/"><img src="./images/similar/New Project (1) 2.svg" alt="Logo" /></Link>
    <section>
     <button className='create-studio-btn'>پنل {title}</button>
    </section>
</header>
  )
}
