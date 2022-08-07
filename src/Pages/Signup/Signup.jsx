import React from 'react'
import './Sign_up.css'
import {motion} from 'framer-motion'
import Hero  from '../../assets/sign up hero.png'
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
      <motion.img initial={{ y:50}} whileInView={{ y:0,}} transition={{duration:2,type:'tween', repeat:Infinity ,repeatType:'reverse' }}  src={Hero} alt="sign in hero"/>

      </div>
      </div>
    </div>
    </div>
  )
}

export default Sign_up