import React from 'react'
import './Hero.css'
import Hero_stats from './Hero_stats'
import stats_data from './stats_data'
const Hero = () => {


  const stats = stats_data.map(({id,number,text}) => {
    return (
      <Hero_stats key={id} number={number} text={text} />
    )
  })
  return (
    <div className="urcrypto_hero">
<div className='urcrypto_hero_container'>
  <div className='urcrypto_hero_header'>
    <h1> <span> One Platform</span> <br/> all things Crypto </h1>
    <p> Open a free account in minutes right from your phone and make <br/> your money go further</p>
    <div className='urcrypto_hero_input'>
      <input type="email" className="urcrypto_hero_input_placeholder" placeholder="Email Address...." />
      <input type="submit" className="urcrypto_hero_input_submit" placeholder="Get Started" />
    </div>
  </div>
  <div className='urcrypto_hero_image'>
      <div className='urcrypto_hero_image_container'>
        <img src="" alt='hero img'/>
      </div>
    </div>
    <div className='urcrypto_hero_logo_cloud'>
        <div className='urcrypto_hero_logo_cloud_container'>
          <img src="" alt="logo cloud"/>
          <img src="" alt="logo cloud"/>
          <img src="" alt="logo cloud"/>
          <img src="" alt="logo cloud"/>
          <img src="" alt="logo cloud"/>
        </div>
      </div>
      
      <div className='urcrypto_hero_stats'>
          {stats}
        </div>
</div>

    </div>
  )
}

export default Hero