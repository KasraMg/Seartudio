import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import provinces from '../../pages/Studios/data'
import { Link } from 'react-router-dom';
import './MainSignUp.css'
import MyVerticallyCenteredModal from '../Modal/Modal';
import EmailLoading from '../EmailLoading/EmailLoading';
import { useNavigate } from 'react-router-dom';
export default function MainSignUp({ setStudioModalShow, setTelgramModalShow }) {
    const [Allprovinces, setAllProvinces] = useState(provinces)
    const [name, setName] = useState('')
    const [studioId, setStudioId] = useState('')
    const [address, setAddressValue] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [price, setPrice] = useState('')
    const [email, setEmail] = useState('')
    const [telId, setTelId] = useState('')
    const [logo, setLogo] = useState('')
    const [image, setImage] = useState('')
    const [pssword, setPssword] = useState('')
    const [city, setCity] = useState('همه')
    const [license, setLicense] = useState('همه')
    const [type, setType] = useState('همه')
    const [rules, setRules] = useState(false)
    const [description, setDescription] = useState('')
    const [RulesModal, setRulesModal] = useState(false);
    const [Error, setErrors] = useState('')
    const [Status201,setStatus201]=useState()
    const [Status409,setStatus409]=useState()
    const [Status400,setStatus400]=useState()
    const [loader,setLoader]=useState(false)



    const navigate = useNavigate();
    const RulesModalHide = () => {
        setRulesModal(false)
    }

    const status201Hide=()=>{
        setStatus201(false)
    }
    const status400Hide=()=>{
        setStatus400(false)
    }
    const status409Hide=()=>{
        setStatus409(false)
    }
    const createStudioHandler = () => {

        if (!rules) {
            setRulesModal(true)
        } else {
            let formData = new FormData();
            formData.append("name", name);
            formData.append("studioId", studioId);
            formData.append("address", address);
            formData.append("phoneNumber", phoneNumber);
            formData.append("pricePerHour", price);
            formData.append("email", email);
            formData.append("telegramId", telId);
            formData.append("logo", logo);
            formData.append("image", image);
            formData.append("passWord", pssword);
            formData.append("province", city);
            formData.append("license", license);
            formData.append("type", type);
            formData.append("description", description);

            setLoader(true)
            fetch('https://api.seartudio.com/studio/add', {
                method: 'POST',
                body: formData,
            })
                .then(res =>
                    res.json()
                    
                )
                .then(data => {
                  
                    setLoader(false)


                    console.log(data);

                   
                   
                    
                    if (data.statusCode && data.statusCode==201) {
                        setStatus201(true)
                        setInterval(() => {
                          navigate('/login')  
                        }, 3000);
                        
                    }else if(data.statusCode && data.statusCode==409){
                        setStatus409(true)
                    }
                    else if(data.statusCode && data.statusCode==400){
                        setStatus400(true)
                    }
                    if (data && data.errors) {
                     setErrors(data.errors);
                       
                    }
                })
        }


    }


    return (

        <div className='create-studio'>
            <p className='create-studio-title'>ثبت استودیو</p>
             
<div className='all-erorrs'>


    {
      Error &&  Error.map(errorData => {
                            for (const property in errorData) {  
                              return <div>
                                <p>{errorData[property]}</p>
                                </div>
                              
                            }
                        })
    }
       </div>    


       
               
                
                     
              
                    
                 
                    
            

            <main dir='rtl'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='نام استودیو(فارسی)' />

                <input type="text" value={studioId} onChange={(e) => setStudioId(e.target.value)} placeholder='شناسه استودیو(انگلیسی و کوتاه)' />

                <input type="text" value={address} onChange={(e) => setAddressValue(e.target.value)} placeholder='آدرس دقیق...' />

                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='شماره تماس (انگلیسی)' />

                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='ایمیل شما (ترجیحا رسمی)' />

                <Dropdown className='cyties-dropDown '>
                    <Dropdown.Toggle id="dropdown-basic">
                        {city == 'همه' ? 'استان' : city}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {Allprovinces.map(data => (
                            <Dropdown.Item onClick={() => setCity(data)}>{data}</Dropdown.Item>
                        ))}



                    </Dropdown.Menu>
                </Dropdown>

                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='قیمت (بر اساس ساعت و انگلیسی)' />


                <Dropdown className='licens-dropDown'>
                    <Dropdown.Toggle id="dropdown-basic">

                        {license == 'همه' ? 'وضعیت مجوز' : license}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setLicense('دارد')}>دارد</Dropdown.Item>
                        <Dropdown.Item onClick={() => setLicense('ندارد')}>ندارد </Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

                <div className='telegram-input'>
                    <input value={telId} onChange={(e) => setTelId(e.target.value)} type="text" placeholder='شناسه تلگرامی' />
                    <img onClick={() => setTelgramModalShow(true)} src="../../public/images/signup/Group 326.png" alt="" />
                </div>

                <Dropdown className='studio-type-dropDown'>
                    <Dropdown.Toggle id="dropdown-basic">
                        {type == 'همه' ? 'نوع استودیو' : type}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setType('حرفه ای')} >حرفه ای </Dropdown.Item>
                        <Dropdown.Item onClick={() => setType('خانگی')}> خانگی</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

                <div className='file-input-parent'>
                    <input   onChange={(e) => {
                        setLogo(e.target.files[0])
                        
                    }} type="file" className={!logo ? ' input-c-transparent logo-input' : 'logo-input input-c-white'}  dir='ltr' placeholder='تصویر لوگو' />
                    {!logo &&(
                        <p className='sign-up-logo-span'>تصویر لوگو</p>
                    )}
                    
                    <img onClick={() => setStudioModalShow(true)} src="../../public/images/signup/Group 326.png" alt="" />
                </div>

                <div className='file-input-parent'>
                    <input  onChange={(e) => setImage(e.target.files[0])} type="file" dir='ltr'  className={!image ? ' input-c-transparent picture-input' : 'picture-input input-c-white'} placeholder='تصویر استودیو' />
                   
                    {!image &&(
                       <p className='sign-up-studio-span'>تصویر استودیو</p>
                    )}
                    <img onClick={() => setStudioModalShow(true)} src="../../public/images/signup/Group 326.png" alt="" />
                </div>

                <input value={pssword} onChange={(e) => setPssword(e.target.value)} type="password" placeholder='رمز عبور' />

                <div className='rules-div'>
                    <p><Link to='/rules'>شرایط و قوانین</Link> سرتودیو را میپذیرم </p>
                    {rules ? (
                        <img onClick={() => setRules(false)} src="../../public/images/signup/photo_5949261142641720371_m.jpg" alt="Logo" />
                    ) : (
                        <img onClick={() => setRules(true)} src="../../public/images/signup/Rectangle 39.png" alt="Logo" />
                    )}

                </div>

                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='توضیحات...' rows="1"></textarea>

            </main>

            <button onClick={createStudioHandler} className='create-studio-btn mt-4'>ثبت</button>

            <MyVerticallyCenteredModal
                show={RulesModal}
                onHide={RulesModalHide}>
                <p className='mt-3'>
                    لطفا قبل از ثبت استودیو قوانین و تایید کنید.
                </p>
            </MyVerticallyCenteredModal>

            <MyVerticallyCenteredModal
                show={Status201}
                onHide={status201Hide}>
                <p className='mt-3'>
                استودیوی شما با موفقیت ثبت شد.
                </p>
            </MyVerticallyCenteredModal>
            <MyVerticallyCenteredModal
                show={Status409}
                onHide={status409Hide}>
                <p className='mt-3'>
             این استودیو قبلا ثبت شده است.
                </p>
            </MyVerticallyCenteredModal>
            <MyVerticallyCenteredModal
                show={Status201}
                onHide={status201Hide}>
                <p className='mt-3'>
                استودیوی شما با موفقیت ثبت شد.
                </p>
            </MyVerticallyCenteredModal>
            <MyVerticallyCenteredModal
                show={Status400}
                onHide={status400Hide}>
                <p className='mt-3'>
             برای این استودیو لوگو یا عکس انتخاب کنید.
                </p>
            </MyVerticallyCenteredModal>

            {loader &&(
                <EmailLoading/>
            )}
        </div>



    )
}
