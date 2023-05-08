import React, { useEffect, useState } from 'react'
import './StudioPage.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import { Image, Shimmer } from 'react-shimmer'
import swal from 'sweetalert'
export default function StudioPage() {
    const [studioData, setStudioData] = useState()
    const studioId = useParams()
    const [isLoading, setIsLoading] = useState();
    const navigate=useNavigate()
    const getData = () => {
        setIsLoading(true)
        fetch(`https://api.seartudio.com/studio/id/${studioId.id}`)
            .then(res => res.json())
            .then(data => {
                setStudioData(data.data)
                console.log(data.data);
             console.log(data);
                    setIsLoading(false)

                    if (data.statusCode == 404) {
                        // swal({
                        //     title:'استدیویی با این نام پیدا نشد.',
                        //     icon:'error',
                        //     buttons:'ok'
                        // })
                        navigate('/')
                    }
              
            })
    }
    useEffect(() => {
        setIsLoading(true);
        getData();
    }, []);

   
    return (
        <div className='StudioPage'>
            <Header />

            {studioData ? (
                <>
                    <section className='StudioPage-top-section'>
                        <div>
                            <div>

                                <p className='studio-page-title'> {studioData.name}</p>

                                {studioData.isPromoted && (
                                    <img src='./../public/images/index/🦆 icon _voice ok_.png' crossOrigin='anonymous' alt="" />
                                )}
                                {studioData.isVeryfied && (

                                    <img className='mx-2' src="../../public/images/similar/Group 38.png" alt="" />


                                )}



                            </div>
                            <p>توضیحات:</p>
                            <p>{studioData.description}</p>
                        </div>

                        {isLoading ? (
                            <Image
                           
                                src='https://source.unsplash.com/random/800x600'
                                fallback={<Shimmer className='StudioPage-top-section-shimmer' width={385} height={300} />}
                            />
                        ) : (
                            <img src={studioData.logo}  className='studio-page-logo' crossOrigin='anonymous' style={{ borderRadius: '30px' }} alt="" />
                        )}

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
                                <p>{Intl.NumberFormat().format(studioData.pricePerHour)}</p>
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

                        {isLoading ? (
                            <Image
                          
                                src='https://source.unsplash.com/random/800x600'
                                fallback={<Shimmer  className='studio-image-shimmer' width='100%' height={500} />}
                            />
                        ) : (
                            <img src={studioData.image} crossOrigin='anonymous' alt="" />
                        )}
                  
                    </div>
                </>

            ) : (
                <Loader />
            )}

            <Footer />
        </div>
    )
}
