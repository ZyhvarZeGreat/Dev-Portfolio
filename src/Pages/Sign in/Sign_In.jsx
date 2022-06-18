import React from 'react'
import './Sign_in.css'
import Hero  from '../../assets/sign up hero.png'
import { Sign_in_content, Sign_in_header } from '../../Components/Sign in Component'
const Sign_In = () => {
  return (
    <div className='urcrypto_signin_page'>
    <div className='urcrypto_signin_container'>
      <div className='urcrypto_signin_text_area'>
      <Sign_in_header/>
      <Sign_in_content/>
      </div>
      <div className='urcrypto_signin_image_area'>
      <div className='urcrypto_signin_image_area_container'>
      <img src={Hero} alt="sign in hero"/>
      </div>

      </div>
    </div>
    </div>
  )
}

export default Sign_In