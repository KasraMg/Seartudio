import React, { useEffect, useState } from 'react'
import './StudioPage.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
export default function StudioPage() {
    const [studioData, setStudioData] = useState()
    const studioId = useParams()
    useEffect(() => {
        fetch(`https://api.seartudio.com/studio/id/${studioId.id}`)
            .then(res => res.json())
            .then(data =>{
            setStudioData(data.data)
            console.log(data.data);
            } )
      
    }, [])

    return (
        <div className='StudioPage'>
            <Header />

            {studioData ? (
                <>
                    <section className='StudioPage-top-section'>
                        <div>
                            <div>

                                <p className='studio-page-title'> {studioData.name}</p>
                                <img src='./../public/images/index/🦆 icon _voice ok_.png' crossOrigin='anonymous' alt="" />
                            </div>
                            <p>توضیحات:</p>
                            <p>{studioData.description}</p>
                        </div>


                        <img src={studioData.logo} className='studio-page-logo' crossOrigin='anonymous' style={{borderRadius:'30px'}} alt="" />
                    </section>

                    <div className="studio-details">
                        <p className='studio-details-title'>مشخصات:</p>
                        <main>
                            <div>
                                <p>{studioData.province}</p>
                                <img src="../../public/images/studiopage/Group 325.png" alt="" />
                            </div>
                            <div>
                                <p>{studioData.phoneNumber}</p>
                                <img src="../../public/images/studiopage/phone.png" alt="" />
                            </div>

                            <div>
                                <p> مجوز {studioData.license} </p>
                                <img src="../../public/images/studiopage/Group 322.png" alt="" />
                            </div>
                            <div>
                                <p>{studioData.email}</p>
                                <img src="../../public/images/studiopage/Group 31.png" alt="" />
                            </div>
                            <div>
                                <p> {studioData.type}</p>
                                <img src="../../public/images/studiopage/Vector5.png" alt="" />
                            </div>
                            <div>
                                <p>{studioData.pricePerHour}</p>
                                <img src="../../public/images/studiopage/Group 32.png" alt="" />
                            </div>
                            <div>
                                <p>{studioData.address}</p>
                                <img src="../../public/images/studiopage/Vector.png" alt="" />
                            </div>
                        </main>
                    </div>

                    <div className="studio-image" dir='rtl'>
                        <p className="studio-image-title">تصویر:</p>
                        <img src={studioData.image} crossOrigin='anonymous'  alt="" />
                    </div>
                </>
              
            ):(
                <Loader/>
            )}

            <Footer />
        </div>
    )
}
