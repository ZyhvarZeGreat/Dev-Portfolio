import React from 'react'
import './Footer.css'
import {UilFacebook,UilTwitterAlt,UilYoutube,UilInstagram,UilLinkedin} from '@iconscout/react-unicons'
import footer_data from '../../Data/footer_data'
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
  <div className='urcrypto_footer_top_text'>
  <div className='urcrypto_footer_text'>
    <h3>Company</h3>
    <p>About Us</p>
    <p>Blog</p>
    <p>Careers</p>
    <p>Student</p>
    <p>Security</p>
    <p>Trust and Safety</p>
    <p>Newsroom</p>
    <p>Videos</p>
  </div>
  <div className='urcrypto_footer_text'>
    <h3>Learn</h3>
    <p> What's Trending</p>
    <p>Product News</p>
    <p>Events</p>
    <p>Student</p>
    <p>University</p>
    <p>Market Updates</p>
  </div>
  <div className='urcrypto_footer_text'>
    <h3>Products</h3>
    <p>Stock & Fund</p>
    <p>Cash Card</p>
    <p>Crypto</p>
    <p>Options</p>
    <p>Gold</p>
    <p>Learn Snacks</p>
  </div>
  <div className='urcrypto_footer_text'>
    <h3>Support</h3>
    <p>Support Center</p>
    <p>Contact Us</p>
    <p>System Status</p>
    <p>Areas of Availability</p>
  </div>
  <div className='urcrypto_footer_text'>
    <h3>Resources</h3>
    <p>Prices</p>
    <p>Site</p>
    <p>Tax</p>
    <p>Support</p>
  </div>
  </div>
  
</div>
<div className='urcrypto_footer_bottom'>
<p>&copy; Developed  by Bolude Daniel, All Rights Reserved</p>
</div>
  
</div>    
    </div>
  )
}

export default Footer