import React,{useEffect, useState} from 'react'
import './Studios.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import IntroStudioSection from '../../components/IntroStudioSection/IntroStudioSection'
import  provinces  from './data';
import InfiniteScroll from 'react-infinite-scroll-component'
export default function Studios() {
    const [Allprovinces,setAllProvinces]=useState(provinces)
    const [allData,setAllData]=useState('')
    const [city,setCity]=useState('همه')
    const [license,setLicense]=useState('همه')
    const [type,setType]=useState('همه')
    const [skip,setSkip]=useState(0)
   
    useEffect(() => {
        fetch(`https://api.seartudio.com/studio?type=${type}&license=${license}&province=${city}&skip=${skip}`)
        .then(res=>res.json())
        .then(data=>{
           console.log(data.data);
           setAllData((prev=>prev, data.data));
   
        })
       }, [city,type,license,skip])
       const addSkip=()=>{
        setSkip(prev=>prev + 1)
        console.log(skip);
       }
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
                                {city == 'همه' ? 'استان' : city}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {Allprovinces.map(data=>(
                                     <Dropdown.Item onClick={()=>setCity(data)}>{data}</Dropdown.Item>  
                                ))}
                             
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='studios-type'>
                        <img src="../../public/images/studios/Vector.png" alt="" />
                        <Dropdown>
                            <Dropdown.Toggle  id="dropdown-basic">
                               {type == 'همه' ? 'نوع استودیو' : type}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>setType('حرفه ای')} >حرفه ای </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setType('خانگی')}> خانگی</Dropdown.Item>
                       
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </section>
                <div className="studios-licens">
                    <img src="../../public/images/studios/Group 29.png" alt="" />
                    <Dropdown>
                            <Dropdown.Toggle  id="dropdown-basic">
                            {license == 'همه' ? 'وضعیت مجوز' : license}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>setLicense('دارد')}>دارد</Dropdown.Item>
                                <Dropdown.Item onClick={()=>setLicense('ندارد')}>ندارد </Dropdown.Item>
                               
                            </Dropdown.Menu>
                        </Dropdown>
                </div>
            </div>

            <main>
                {allData && allData.length  &&(
                      <InfiniteScroll
             dataLength={50}

             next={addSkip}
           
             loader={<h4>Loading...</h4>}
             endMessage={
                    <p style={{ textAlign: 'center' }}>
                     <b>Yay! You have seen it all</b>
                    </p>
               }
           >
                {allData.map(data=>(
                    <IntroStudioSection {...data} />
                ))}
           </InfiniteScroll>
                )}
              
             
                    {/* {allData && allData.map(data=>(
                    <IntroStudioSection {...data} />
                ))} */}
        
            </main>

            <Footer />
        </div>
    )
}
