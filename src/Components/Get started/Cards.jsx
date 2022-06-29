import React from 'react'
import {motion} from 'framer-motion'
const Cards = (props) => {
  return (
    <motion.div initial={{opacity:0,y:-50,scale:0}} viewport={{once:true,amount:'all'}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:.9,type:'spring',bounce:.5}} className='urcrypto_get_started_cards_container'>
    
<img src={`../Images/${props.image}.png`} alt="get started img" />
<h2> {props.heading} </h2>
<p> {props.content} </p>

    </motion.div>
  )
}

export default Cards