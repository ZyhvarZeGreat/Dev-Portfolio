import React from 'react'
import './Sign_up.css'
import Hero  from '../../assets/sign up hero.png'
import aave from '../../assets/aave.png'
import avalanche from '../../assets/avalanche.png'
import tron from '../../assets/tron.png'
import polygon from '../../assets/polygon.png'
import swipe from '../../assets/swipe.png'
import { Sign_up_content, Sign_up_header } from '../../Components/Sign up Component'
const Sign_up = () => {
  return (
    <div className='urcrypto_signup_page'>
    <div className='urcrypto_signup_container'>
      <div className='urcrypto_signup_text_area'>
      <Sign_up_header/>
      <Sign_up_content/>
      </div>
      <div className='urcrypto_signup_image_area'>
      <div className='urcrypto_signup_image_area_container'>
      <img src={Hero} alt="sign in hero"/>
      <img src={tron} alt="aave"/>
      <img src={aave} alt="aave"/>
      <img src={avalanche} alt="aave"/>
      <img src={polygon} alt="aave"/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Sign_up