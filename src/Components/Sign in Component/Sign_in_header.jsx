import React from 'react'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
const Sign_in_header = () => {
  return (
<div className='urcrypto_signin_header'>
<Link id = "home" to='/'>
<img src={Logo} alt='header logo' />
</Link>
  
  <div className = 'urcrypto_signin_header_link'>
  <p>Don't have an account?</p>
  <Link to="/Signup"> Sign Up!</Link> 
  </div>

  
</div>
  )
}

export default Sign_in_header