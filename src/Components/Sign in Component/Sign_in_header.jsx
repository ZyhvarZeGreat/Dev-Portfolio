import React from 'react'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
const Sign_in_header = () => {
  return (
<div className='urcrypto_signin_header'>
  <img src={Logo} alt='header logo' />
  <p>Don't have an account? <Link to="/Signup"> Sign Up!</Link> </p>
  
</div>
  )
}

export default Sign_in_header