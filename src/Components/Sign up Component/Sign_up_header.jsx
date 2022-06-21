import React from 'react'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
const Sign_up_header = () => {
  return (
<div className='urcrypto_signin_header'>
<Link id ="home" to='/'>
<img src={Logo} alt='header logo' />
</Link>
  
  <p>Already registered ? <Link to="/Signin"> Sign in</Link> </p>
  
</div>
  )
}

export default Sign_up_header