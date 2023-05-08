import React, { useState, useEffect, useContext } from 'react'
import swal from 'sweetalert'
import MyVerticallyCenteredModal from '../../components/Modal/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import provinces from '../../pages/Studios/data';
import EmailLoading from '../EmailLoading/EmailLoading';
import AuthContext from '../../Context/authContext';

export default function MainStudioPanel({ userInfo }) {
    const authContext =useContext(AuthContext)
    const [TelgramModalShow, setTelgramModalShow] = useState(false);
    const [Allprovinces, setAllProvinces] = useState(provinces)
    const [StudioModalShow, setStudioModalShow] = useState(false);
    const [name, setName] = useState(userInfo.name)
    const [address, setAddressValue] = useState(userInfo.address)
    const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber)
    const [price, setPrice] = useState(userInfo.pricePerHour)
    const [email, setEmail] = useState(userInfo.email)
    const [telId, setTelId] = useState(userInfo.telegramId)
    const [logo, setLogo] = useState()
    const [image, setImage] = useState()
    const [city, setCity] = useState(userInfo.province)
    const [license, setLicense] = useState(userInfo.license)
    const [type, setType] = useState(userInfo.type)
    const [description, setDescription] = useState(userInfo.description)
    const [InputCheck, setInputCheck] = useState(false)

    const [Error, setErrors] = useState('')
    const [loader, setLoader] = useState(false)


    const TelegramonHide = () => {
        setTelgramModalShow(false)
    }
    const StudioonHide = () => {
        setStudioModalShow(false)
    }

    const updateStudio = () => {
        setLoader(true)
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        if (InputCheck) {
            let formData = new FormData();
            formData.append("name", name);
            formData.append("address", address);
            formData.append("phoneNumber", phoneNumber);
            formData.append("pricePerHour", price);
            formData.append("email", email);
            formData.append("telegramId", telId);
            formData.append("province", city.trim());
            formData.append("license", license);
            formData.append("type", type);
            formData.append("description", description);


            fetch('https://api.seartudio.com/studio/update', {
                method: 'POST',
                headers: {
                    authorization: localStorageData.token
                },
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                

                    if (data.statusCode == 201) {
                        setErrors(null)
                        setLoader(false)
                        swal({
                            title: 'تغییرات با موفقیت ثبت شد.',
                            icon: 'success',
                            buttons: 'ok'
                        }).then(()=>
                            authContext.setUserInfos(data)
                        )
                    }



                    if (data && data.errors) {
                        setErrors(data.errors);
                        setLoader(false)
                    }
                })
        }

        if (image) {
            let formData = new FormData();
             formData.append("image", image);
            fetch('https://api.seartudio.com/studio/updateImage', {
                method: 'PATCH',
                headers: {
                    authorization: localStorageData.token
                },
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                
console.log(data);
                    if (data.statusCode == 201) {
                        setErrors(null)
                        setLoader(false)
                        swal({
                            title: 'تغییرات با موفقیت ثبت شد.',
                            icon: 'success',
                            buttons: 'ok'
                        }).then(()=>
                            authContext.setUserInfos(data)
                        )
                    }



                    if (data && data.errors) {
                        setErrors(data.errors);
                        setLoader(false)
                    }
                })
        } 
        const kir={
            logo:logo
         }
        if (logo) {
        
            let formData = new FormData();
            formData.append("logo", logo);
            fetch('https://api.seartudio.com/studio/updateLogo', {
                method: 'POST',
                headers: {
                    authorization : localStorageData.token
                },
                body: JSON.stringify(kir)
            })
                .then(res =>{
                    res.json()
                     console.log(res)})
                // .then(data => {
                 }

                //     if (data.statusCode == 201) {
                //         setErrors(null)
                //         setLoader(false)
                //         swal({
                //             title: 'تغییرات با موفقیت ثبت شد.',
                //             icon: 'success',
                //             buttons: 'ok'
                //         }).then(()=>
                //             authContext.setUserInfos(data)
                //         )
                //     }



                //     if (data && data.errors) {
                //         setErrors(data.errors);
                //         setLoader(false)
                //     }
                // })
        // }

    }
    return (
        <div className="edit-studio-details create-studio">
            <p className='edit-studio-details-title'>ویرایش اطلاعات استودیو:</p>
            <div className='all-erorrs'>


                {
                    Error && Error.map(errorData => {
                        for (const property in errorData) {
                            return <div>
                                <p>{errorData[property]}</p>
                            </div>

                        }
                    })
                }
            </div>


            <main dir='rtl'>

                <input value={name} onChange={(e) => {
                    setInputCheck('normal')
                    setName(e.target.value)
                }}
                    type="text" placeholder='نام استودیو(فارسی)' />



                <input value={address} onChange={(e) => {
                    setInputCheck('normal')
                    setAddressValue(e.target.value)
                }}
                    type="text" placeholder='آدرس دقیق...' />

                <input value={phoneNumber} onChange={(e) => {
                    setInputCheck('normal')
                    setPhoneNumber(e.target.value)
                }
                } type="text" placeholder='شماره تماس (انگلیسی)' />

                <input value={email} onChange={(e) => {
                    setInputCheck('normal')
                    setEmail(e.target.value)
                }
                } type="email" placeholder='ایمیل شما (ترجیحا رسمی)' />

                <Dropdown className='cyties-dropDown '>
                    <Dropdown.Toggle id="dropdown-basic">
                        {city == 'همه' ? 'استان' : city}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {Allprovinces.map(data => (
                            <Dropdown.Item onClick={() => {
                                setInputCheck('normal')
                                setCity(data)
                            }
                            }>{data}</Dropdown.Item>
                        ))}



                    </Dropdown.Menu>
                </Dropdown>

                <input value={price} onChange={(e) => {
                    setInputCheck('normal')
                    setPrice(e.target.value)
                }
                } type="text" placeholder='قیمت (بر اساس ساعت و انگلیسی)' />


                <Dropdown className='licens-dropDown'>
                    <Dropdown.Toggle id="dropdown-basic">
                        {license == 'همه' ? 'وضعیت مجوز' : license}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {
                            setInputCheck('normal')
                            setLicense('دارد')
                        }
                        }>دارد</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setInputCheck('normal')
                            setLicense('ندارد')
                        }
                        }>ندارد </Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>


                <div className='telegram-input '>
                    <input value={telId} onChange={(e) => {
                        setInputCheck('normal')
                        setTelId(e.target.value)
                    }
                    } type="text" placeholder='شناسه تلگرامی' />
                    <img onClick={() => setTelgramModalShow(true)} src="../../public/images/signup/Group 326.png" alt="" />
                </div>

                <Dropdown className='studio-type-dropDown'>
                    <Dropdown.Toggle id="dropdown-basic">
                        {type == 'همه' ? 'نوع استودیو' : type}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {
                            setInputCheck('normal')
                            setType('حرفه ای')
                        }
                        }>حرفه ای </Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setInputCheck('normal')
                            setType('خانگی')
                        }
                        }> خانگی</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

                <div className='file-input-parent'>
                    <input onChange={(e) => {
                       e.preventDefault()
                       

                    }} type="file" className={!logo ? ' input-c-transparent logo-input' : 'logo-input input-c-white'} dir='ltr' placeholder='تصویر لوگو' />
                    {!logo && (
                        <p className='sign-up-logo-span'>به زودی ...</p>
                    )}

                    <img onClick={() => setStudioModalShow(true)} src="../../public/images/signup/Group 326.png" alt="" />
                </div>


                <div className='file-input-parent'>
                    <input onChange={(e) => {    e.preventDefault()  }  } type="file" dir='ltr'  className={!image ? ' input-c-transparent picture-input' : 'picture-input input-c-white'} placeholder='تصویر استودیو' />
                    
                    {!image && (
                        <p className='sign-up-studio-span'>به زودی ...</p>
                    )}
                    <img onClick={() => setStudioModalShow(true)} src="../../public/images/signup/Group 326.png" alt="" />
                </div>

                <textarea value={description} onChange={(e) => {
                    setInputCheck('normal')
                    setDescription(e.target.value)
                }
                } placeholder='توضیحات...' rows="1"></textarea>

                <MyVerticallyCenteredModal
                    show={TelgramModalShow}
                    onHide={TelegramonHide}
                    info={true}>
                    <p>
                        شناسه تلگرامی خود را از ربات:
                        <br />
                        <a href="https://t.me/seartudio_support">@seartudio_bot</a>
                        <br />
                        دریافت کنید و در این قسمت وارد کنید
                    </p>
                </MyVerticallyCenteredModal>


                <MyVerticallyCenteredModal
                    show={StudioModalShow}
                    info={true}
                    onHide={StudioonHide}>
                    <p>
                        عکس لوگو و تصویر استودیو
                        باید حتما رسمی و واقعی باشد
                        از استفاده از تصاویر فیک خودداری کنید
                        (تصویر لوگو اجباری نمی باشد!)
                    </p>
                </MyVerticallyCenteredModal>

            </main>

            <button onClick={updateStudio} disabled={InputCheck || logo || image ? '' : 'disabled'} className={InputCheck || logo || image ? 'edit-btn' : 'edit-btn edit-btn-disabled'}>ویرایش</button>
                
                {loader &&(
                    <EmailLoading/>
                )}
     
        </div>
    )
}
