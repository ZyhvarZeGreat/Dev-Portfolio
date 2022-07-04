import React, { useState } from 'react'
import {motion } from 'framer-motion'
const Home_statistics_cards = (props) => {
 const [isActive,setisActive] = useState()
 const activeVariants = {
active:{
  backgroundColor:"#2725e7",
  border:"none",
  transition:{
duration:1,
ease:"easeIn",
  }
},
inactive:{
  backgroundColor:"inherit",
  border:"1px solid #e5e5e5"

}
}
const amountVariants = {
  active:{
    color:"#fff"
  },
  inactive:{
    color:"inherit"
  }
}
  function setactive() {
   console.log('setisActive')
  }
  return (
    <motion.div variants={activeVariants} onClick={()=>setisActive(!isActive)} initial={"inactive"} animate={isActive ? "active" : "inactive"} className='urcrypto_dashboard_home_statistics_cards_container'>
<div className='urcrypto_dashboard_home_statistics_cards_description'>
<div className='urcrypto_dashboard_home_statistics_cards_description_text'>
<div>{props.icon}</div>
  <motion.p variants={amountVariants} initial={"inactive"} animate={isActive ? "active":"inactive"}>{props.description}</motion.p>
</div>
<div>chart</div>
</div>
<div className='urcrypto_dashboard_home_statistics_cards_amount'>
<motion.p variants={amountVariants} initial={"inactive"} animate={isActive ? "active":"inactive"}> {props.amount} </motion.p>
</div>
      

<div className='urcrypto_dashboard_home_cards_chart'>
 {props.bottom_icon}
 <p> {props.percentage}  </p>
</div>
    </motion.div>
  )
}

export default Home_statistics_cards