import React from 'react'
import {UilFacebook,UilGoogle} from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'
const Sign_in_content = () => {
  return (
    <div className='urcrypto_sign_in_content'>
    <div className='urcrypto_sign_in_content_header' >
    <h1> Welcome Back</h1>
    <p>Login to your account</p>
    </div>
 <div className='urcrypto_social_sign_in'>
 <div className='urcrypto_social_sign_in_icons'>  
 <UilGoogle fontSize = '2rem'/> 
 <p>Google</p>
 </div>
<div className='urcrypto_social_sign_in_icons'> 
<UilFacebook fontSize = '2rem'/>
<p>Facebook</p>
 </div>
 </div>
 <div className='urcrypto_email_sign_in'>
  <p className='urcrypto_email_sign_in_heading'>or continue with</p>

  <input type='email' name='email' placeholder='Email'/>
  <input type='text' name='password' placeholder='Password'/>
  <div className='urcrypto_email_sign_in_features'>
    <p>toggle</p>  
 <Link to='/'>
  Recover Password
 </Link>
  </div>
  
 <button type='submit' name='login' className='urcrypto_email_sign_in_btn'>Login</button>
 </div>
    </div>
  )
}

export default Sign_in_content