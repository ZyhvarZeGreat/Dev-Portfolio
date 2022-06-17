import React from 'react'
const Features_sections = (props) => {
  return (
    <div className={`${props.className}`} >
    <div className='urcrypto_features_section_image_area'>
        <div className='urcrypto_features_phone'>
            <img  src={`../Images/${props.image}`}/> 
        </div>  
            <img className='urcrypto_features_info' src={`../Images/${props.section_image}`}/>
    </div>
    <div className='urcrypto_features_section_text_area'>
        <h1> {props.heading} </h1>
        <p> {props.content} </p>
    </div>
    </div>
  )
}

export default Features_sections