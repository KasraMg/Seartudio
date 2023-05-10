import React, { useEffect, useState } from 'react'
import './Studios.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import IntroStudioSection from '../../components/IntroStudioSection/IntroStudioSection'
import provinces from './data';
import InfiniteScroll from 'react-infinite-scroll-component'
import EmailLoading from '../../components/EmailLoading/EmailLoading';
export default function Studios() {
    const [Allprovinces, setAllProvinces] = useState(provinces)
    const [allData, setAllData] = useState('')
    const [city, setCity] = useState('همه')
    const [license, setLicense] = useState('همه')
    const [type, setType] = useState('همه')
    const [skip, setSkip] = useState(0)
    const [notFound, setNotFounde] = useState(false)
    const [loader, setLoader] = useState(true)
    const [more,setmore]=useState(true)
    const [fetchAgain,setFetchAgain]=useState(false)
    const [changeStatus,setchangeStatus]=useState(false)
  

    useEffect(() => {
        fetch(`https://api.seartudio.com/studio?type=${type}&license=${license}&province=${city}&skip=${skip}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data);
                if (data.statusCode ==404) {
                    if (changeStatus) {
                        setAllData('');
                        setmore(false)
                        setchangeStatus(false)
                    }
                  
                    setmore(false)
                  
                }else{
                    if (fetchAgain) {
                        setAllData(data.data);
                        setFetchAgain(false)
                    } else {
                        setAllData(prev =>[ ...prev,...data.data]);
                    }
                    
                 
                }
                
                
                if (data.statusCode === 200) {
                    setNotFounde(false)
                } else {
                    setNotFounde(true)
                }
                setLoader(false)
            })
    }, [city, type, license, skip])
    const addSkip = () => {
        setSkip(prev => prev + 10)
        
        console.log(allData);
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
                                {Allprovinces.map(data => (
                                    <Dropdown.Item  onClick={() =>{
     
                                        setchangeStatus(true)
                                        setSkip(0)
                                        setCity(data)}}>{data}</Dropdown.Item>
                                ))}

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='studios-type'>
                        <img src="../../public/images/studios/Vector.png" alt="" />
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                {type == 'همه' ? 'نوع استودیو' : type}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() =>{
                                     setchangeStatus(true)
                                     setSkip(0)
                                    setFetchAgain(true)
                                    setType('حرفه ای')}
                                    } >حرفه ای </Dropdown.Item>
                                <Dropdown.Item onClick={() =>{
                                     setchangeStatus(true)
                                     setSkip(0)
                                      setFetchAgain(true)
                                    setType('خانگی')}
                                    }> خانگی</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </section>
                <div className="studios-licens">
                    <img src="../../public/images/studios/Group 29.png" alt="" />
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            {license == 'همه' ? 'وضعیت مجوز' : license}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => {
                                setchangeStatus(true)
                                setSkip(0)
                                setLicense('دارد')}
                                }>دارد</Dropdown.Item>
                            <Dropdown.Item onClick={() => {
                                 setchangeStatus(true)
                                 setSkip(0)
                                setLicense('ندارد')
                                }}>ندارد </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            {notFound && !allData &&(
              
                <section className='air-section'>
                <p>استودیویی با این مشخصات یافت نشد :))</p>
                <div class='air air1'></div>
                <div class='air air2'></div>
                <div class='air air3'></div>
                <div class='air air4'></div>
              </section>
            )}
            <main>
                {allData && allData && allData.length && (
                    <InfiniteScroll
                        dataLength={allData.length}
                        hasMore={more}
                        next={addSkip}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        {allData.map(data => (
                            <IntroStudioSection {...data} />
                        ))}
                    </InfiniteScroll>
                )}


           

            </main>

            <Footer />

            {loader && (
                <EmailLoading />
            )}
        </div>
    )
}
