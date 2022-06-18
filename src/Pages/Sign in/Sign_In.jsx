import React from 'react'
import './Sign_in.css'
import Hero  from '../../assets/sign in hero.png'
import aave from '../../assets/aave.png'
import avalanche from '../../assets/avalanche.png'
import tron from '../../assets/tron.png'
import polygon from '../../assets/polygon.png'
import swipe from '../../assets/swipe.png'
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

export default Sign_In