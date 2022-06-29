import React from 'react'
import './Sign_in.css'
import Hero  from '../../assets/sign in hero.png'
import {motion} from 'framer-motion'
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
      <motion.img initial={{ y:50}} whileInView={{ y:0,}} transition={{duration:2,type:'tween', repeat:Infinity ,repeatType:'reverse' }}  src={Hero} alt="sign in hero"/>
      </div>
      </div>
    </div>
    </div>
  )
}
export default Sign_In