import React from 'react'
import './Benefits.css'
import { motion } from 'framer-motion'
import Bottom_Left from '../../assets/Bottom left.png'
import Bottom_Right from '../../assets/Bottom right.png'
import Top_Left from '../../assets/Top left.png'
import Top_Right from '../../assets/Top right.png'
import Middle_Right from '../../assets/middle right.png'
import benefits_data from './benefits_data'
import Benefits_description from './Benefits_description'
const Benefits = () => {
  const benefits = benefits_data.map(({id,number,heading,desc})=>{
    return(
<Benefits_description key={id} number={number} heading={heading} desc={desc}/>
    )
   })
  return (
  
    <div className='urcrypto_benefits'>
    
  <div className='urcrypto_benefits_container'>
    <div className='urcrypto_benefits_text_area'>
    <h1> the most trusted <br/> cryptocurrency platform</h1>
    <div className='urcrypto_benefits_description'>
    {benefits}
    </div>
    </div> 

    <div className='urcrypto_benefits_image_area'>
      <div className='urcrypto_benefits_image_area_container'>
      <div className='urcrypto_benefits_image_left'>
      <motion.img initial={{x:-50 ,opacity:0}} viewport={{once:true, amount:'some'}} whileInView ={{ x:0, opacity:1}} transition={{duration:.9, type:'spring'}} src={Top_Left} alt=""/>
      <motion.img initial={{x:-50 ,opacity:0}} viewport={{once:true, amount:'some'}} whileInView ={{ x:0, opacity:1}} transition={{duration:1.6, type:'spring'}} src={Bottom_Left} alt=""/>
      </div>
      <div className='urcrypto_benefits_image_right'>
      <motion.img initial={{y:-50 ,opacity:0}} viewport={{once:true, amount:'all'}} whileInView ={{y:0, opacity:1}} transition={{duration:.9, type:'spring'}} src={Top_Right} alt=""/>
<motion.img initial={{x:-50 ,opacity:0}} viewport={{once:true, amount:'some'}} whileInView ={{ x:0, opacity:1}} transition={{duration:.9, type:'spring'}} src={Middle_Right} alt=""/>
      <motion.img initial={{y:-50 ,opacity:0}} viewport={{once:true, amount:'all'}} whileInView ={{y:0,opacity:1}} transition={{duration:.9, type:'spring'}} src={Bottom_Right} alt=""/>
      </div>
        
       
      </div>
    </div> 
    </div>
    
    </div>
  )
}

export default Benefits