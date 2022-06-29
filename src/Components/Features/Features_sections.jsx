import React from 'react'
import { motion } from 'framer-motion'
const Features_sections = (props) => {
  return (
    <div className={`${props.className}`} >
    <motion.div  initial={{opacity: 0,x:-80}}  viewport={{once:true,amount:'some'}} whileInView={{opacity:1, x:0,  }} transition={{duration:2,type:'spring',bounce:.5,}} className='urcrypto_features_section_image_area'>
        <div className='urcrypto_features_phone'>
            <img  src={`../Images/${props.image}`} alt='iphone'/> 
        </div>  
            <img  className='urcrypto_features_info' src={`../Images/${props.section_image}` } alt='info'/>
    </motion.div>
    <motion.div initial={{opacity: 0,x:80}}  viewport={{once:true,amount:'some'}} whileInView={{opacity:1, x:0,  }} transition={{duration:2,type:'spring',bounce:.5,}} className='urcrypto_features_section_text_area'>
        <h1> {props.heading} </h1>
        <p> {props.content} </p>
    </motion.div>
    </div>
  )
}

export default Features_sections;