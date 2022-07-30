
import React ,{useRef,useState} from 'react'
import {UilFacebook,UilGoogle} from '@iconscout/react-unicons'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../../Services/contexts/AuthContext'
import { Alert } from 'bootstrap'
import {motion} from 'framer-motion'
const Sign_in_content = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {signin} = useAuth()

const [error, setError] = useState('')
const [Loading, setLoading] = useState(false)
const navigate = useNavigate()
 async function handleSubmit(e) {
    e.preventDefault()
  
    try {
      setError('') 
      setLoading(true)
      await  signin(emailRef.current.value,passwordRef.current.value)
      navigate.push('/Dashboard/Home')
       } 
      catch{
    setError('Failed to sign in')
      }
      setLoading(false)
  }
  const alertStyle = {
    backgroundColor: "#2725e7",
              width: "15rem",
              height: "3rem",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "Inter",
              fontWeight: "500",
              borderRadius: ".3rem",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  }

  return (
    <div className='urcrypto_sign_in_content'>
    <div className='urcrypto_sign_in_content_header' >
    <h1> Welcome Back</h1>
    {error && <motion.Alert whileInView={{opacity:1,x:0}} initial = {{opacity:0,x:-80}} variant =  "danger" style = {alertStyle}> {error} </motion.Alert> }
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
 <form onSubmit={handleSubmit} className='urcrypto_email_sign_in'>
  <p className='urcrypto_email_sign_in_heading'>or continue with</p>

<div>
<input type='email' name='email' placeholder='Email'/>
</div>

<div>
<input type='text' name='password' placeholder='Password'/>
</div>

  <div className='urcrypto_email_sign_in_features'>
    <p>toggle</p>  
 <Link to='/'>
  Recover Password
 </Link>
  </div>
  
 <button disabled = {Loading} type='submit' name='login' className='urcrypto_email_sign_in_btn'>Login</button>
 </form>
    </div>
  )
}

export default Sign_in_content