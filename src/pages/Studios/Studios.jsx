import React,{useState} from 'react'
import './Studios.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import IntroStudioSection from '../../components/IntroStudioSection/IntroStudioSection'
import  provinces  from './data';
export default function Studios() {
    const [Allprovinces,setAllProvinces]=useState(provinces)
    return (
        <div className='Studios'>
            <Header />

            <div className='how-find-studio'>
                <p className='how-find-studio-title'>مخصوص خودت استدیو پیدا کن  (؛</p>

                <div className='how-find-studio-details'>
                    <p> سه مرحله ساده:</p>
                    <p>۱.استدیو هارو مخصوص خودت فیلتر کن؛</p>
                    <p>۲.توضیحاتشو بخون؛</p>
                    <p>۳.تماس بگیر و برو برای ضبط...</p>
                </div>

                <section>
                    <div className='studios-cyties'>
                        <img src="../../public/images/studios/Group 28.png" alt="" />
                        <Dropdown className='cyties-dropDown'>
                            <Dropdown.Toggle id="dropdown-basic">
                                استان
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {Allprovinces.map(data=>(
                                     <Dropdown.Item href="#/action-1">{data}</Dropdown.Item>  
                                ))}
                             
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='studios-type'>
                        <img src="../../public/images/studios/Vector.png" alt="" />
                        <Dropdown>
                            <Dropdown.Toggle  id="dropdown-basic">
                                نوع استودیو
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">حرفه ای </Dropdown.Item>
                                <Dropdown.Item href="#/action-2"> خانگی</Dropdown.Item>
                       
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </section>
                <div className="studios-licens">
                    <img src="../../public/images/studios/Group 29.png" alt="" />
                    <Dropdown>
                            <Dropdown.Toggle  id="dropdown-basic">
                                وضعیت مجوز
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">دارد</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">ندارد </Dropdown.Item>
                               
                            </Dropdown.Menu>
                        </Dropdown>
                </div>
            </div>

            <main>
                <IntroStudioSection />
                <IntroStudioSection />
                <IntroStudioSection />
                <IntroStudioSection />
                <IntroStudioSection />
            </main>

            <Footer />
        </div>
    )
}
