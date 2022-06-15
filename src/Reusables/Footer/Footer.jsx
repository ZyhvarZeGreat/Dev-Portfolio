import React from 'react'
import './Footer.css'
import {UilFacebook,UilTwitterAlt,UilYoutube,UilInstagram,UilLinkedin} from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className='urcrypto_footer'>
    
<div className='urcrypto_footer_container'>
<div className='urcrypto_footer_top'>
<div className='urcrypto_footer_logo'>
    <img src={require("../../assets/Logo.png")}/>

    <div className='urcrypto_footer_logo_social_links'>
    <UilFacebook/>
    <UilTwitterAlt/>
    <UilInstagram/>
    <UilLinkedin/>
    <UilYoutube/>

    </div>
  </div>
</div>
<div className='urcrypto_footer_bottom'>
<p>&copy; Devloped  by Bolude Daniel, All Rights Reserved</p>
</div>
  
</div>    
    </div>
  )
}

export default Footer