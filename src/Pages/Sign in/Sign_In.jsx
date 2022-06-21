import React from 'react'
import './Sign_in.css'
import Hero  from '../../assets/sign in hero.png'
import aave from '../../assets/aave.png'
import avalanche from '../../assets/avalanche.png'
import tron from '../../assets/tron.png'
import polygon from '../../assets/polygon.png'
import {motion} from 'framer-motion'
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
      <motion.img initial={{ y:50}} whileInView={{ y:0,}} transition={{duration:2,type:'tween', repeat:Infinity ,repeatType:'reverse' }}  src={Hero} alt="sign in hero"/>
      <motion.img initial={{ y:50}} whileInView={{ y:0,}} transition={{duration:2,type:'tween', delay:.3, repeat:Infinity ,repeatType:'reverse' }}  src={tron} alt="aave"/>
      <motion.img initial={{ y:50}} whileInView={{ y:0,}} transition={{duration:2,type:'tween', delay:.5, repeat:Infinity ,repeatType:'reverse' }}  src={aave} alt="aave"/>
      <motion.img initial={{ y:50}} whileInView={{ y:0,}} transition={{duration:2,type:'tween', delay:.7, repeat:Infinity ,repeatType:'reverse' }}  src={avalanche} alt="aave"/>
      <motion.img initial={{ y:50}} whileInView={{ y:0,}} transition={{duration:2,type:'tween', delay:.9, repeat:Infinity ,repeatType:'reverse' }}  src={polygon} alt="aave"/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Sign_In