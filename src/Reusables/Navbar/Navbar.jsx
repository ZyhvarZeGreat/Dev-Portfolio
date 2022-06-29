import React from "react";
import "./Navbar.css";
import {UilBars} from '@iconscout/react-unicons'
import { Link } from "react-router-dom";
import { useState } from "react";
import {motion,AnimatePresence} from 'framer-motion'
const Navbar = () => {
 function logger (){
  console.log ('button clicked')
 }

  const [open,setOpened] = useState(false)
  const mobile_navbar_skew_variants = {
    slidein: {
      translateX:-50,
      opacity:0,
    },
    slideout:{
      translateX:0,
      opacity:1
  
    }
  }
  const mobile_navbar_variants = {
    slidein:{
  x:-50,
  opacity:0.00001,
  transition:{
    duration: 1,
    ease:'easeIn',
    type:'spring',
    bounce:'.4'
  }
    },
    slideout:{
      x:0,
      opacity:1,
      transition:{
        duration: 1,
        ease:'easeOut',
        type:'tween'
      }
    }
    
  }
  return (
    <div className="urcrypto_navbar">
    <div className="urcrypto_navbar_container">
      
    <div className="urcrypto_navbar_logo">
        <img src={require("../../assets/Logo.png")} alt="Navbar Logo" />
      </div>

      <div className="urcrypto_navbar_links">
        <Link to="/">Home</Link>
        <Link to="/">Learn</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Support</Link>
      </div>

      <div className="urcrypto_navbar_cta">
        <Link className="urcrypto_navbar_cta_signin" to ="Signin">Sign in</Link>
        <Link className="urcrypto_navbar_cta_signup" to ="Signup">Get Started</Link>
      </div>
      <button onClick={()=> setOpened(!open)} className="urcrypto_mobile_navbar_btn">
      <UilBars/>
      </button>

      <AnimatePresence exitBeforeEnter>
      <motion.div variants = {mobile_navbar_variants} initial = {"slidein"} animate = { open ? "slideout":"slidein"} className="urcrypto_mobile_navbar">

<div className="urcrypto_mobile_navbar_container">
<div className="urcrypto_mobile_navbar_logo">
  <img src={require("../../assets/Logo.png")} alt="Navbar Logo" />
</div>

<motion.div  className="urcrypto_mobile_navbar_links">
  <Link to="/">Home</Link>
  <Link to="/">Learn</Link>
  <Link to="/">Pricing</Link>
  <Link to="/">Support</Link>
</motion.div>

<motion.div  className="urcrypto_mobile_navbar_cta">
  <Link className="urcrypto_mobile_navbar_cta_signin" to ="Signin">Sign in</Link>
  <Link className="urcrypto_mobile_navbar_cta_signup" to ="Signup">Get Started</Link>
</motion.div>
</div>

</motion.div>
      </AnimatePresence>
   
    </div>
    </div>
  );
};

export default Navbar;
