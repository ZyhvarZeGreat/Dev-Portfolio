import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className="urcrypto_hero">
<div className='urcrypto_hero_container'>
  <div className='urcrypto_hero_header'>
    <h1> <span> One Platform</span> <br/> all things Crypto </h1>
    <p> Opena free account in minutes right from your phone and make <br/> your money go further</p>
    <div className='urcrypto_hero_input'>
      <input type="email" className="urcrypto_hero_input_placeholder" placeholder="Email Address...." />
      <input type="submit" className="urcrypto_hero_input_submit" placeholder="Get Started" />
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero