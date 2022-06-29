import React from 'react'
import './Hero.css'
import Hero_logo from '../../assets/Hero.png'
import coinbase from '../../assets/coinbase.png'
import bitcoin from '../../assets/bitcoin hero.png'
import tether from '../../assets/tether.png'
import binance from '../../assets/binance logo.png'
import bitmex from '../../assets/bitmex logo.png'
import Hero_stats from './Hero_stats'
import stats_data from './stats_data'
import {motion} from  'framer-motion'
import { type } from '@testing-library/user-event/dist/type'
const Hero = () => {


  const stats = stats_data.map(({id,number,text}) => {
    return (
      <Hero_stats key={id} number={number} text={text} />
    )
  })
  return (
    <div className="urcrypto_hero">
<div className='urcrypto_hero_container'>
  <motion.div initial={{opacity:0, x:-120}} viewport={{once:true}} whileInView={{opacity:1, x:0,  }} transition={{duration:2,type:'spring',bounce:.4}}   className='urcrypto_hero_header'>
  <div className='urcrypto_hero_header_container'>

    <h1> <span> One Platform</span> <br/> all things Crypto </h1>
    <p> Open a free account in minutes right from your phone and make <br/> your money go further</p>
    <div className='urcrypto_hero_input'>
      <input type="email" className="urcrypto_hero_input_placeholder" placeholder="Email Address...." />
      <input type="submit" className="urcrypto_hero_input_submit" value="Get Started" />
  </div>
    </div>
  </motion.div>
  <div className='urcrypto_hero_image'>
      <div className='urcrypto_hero_image_container'>
        <motion.img initial={{opacity: 0,x:-120}}  viewport={{once:true,amount:'some'}} whileInView={{opacity:1, x:0,  }} transition={{duration:2,type:'spring',bounce:.5,}} src={Hero_logo} alt='hero img'/>
      </div>
    </div>
    <div className='urcrypto_hero_logo_cloud'>
        <div className='urcrypto_hero_logo_cloud_container'>
          <img src={binance} alt="logo cloud"/>
          <img src={coinbase} alt="logo cloud"/>
          <img src={bitcoin} alt="logo cloud"/>
          <img src={tether} alt="logo cloud"/>
          <img src={bitmex} alt="logo cloud"/>
        </div>
      </div>
      
      <div initial={{opacity:0, x:-120}} whileInView={{opacity:1, x:0,  }} className='urcrypto_hero_stats'>
          {stats}
        </div>
</div>

    </div>
  )
}

export default Hero