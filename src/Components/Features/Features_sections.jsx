import React from 'react'
const Features_sections = (props) => {
  return (
    <div className='urcrypto_features_section'>
<div className='urcrypto_features_section_container'>
    <div className='urcrypto_features_section_image_area'>
        <div className='urcrypto_features_phone'>
        <img  src={`../Images/${props.image}`}/>
        </div>
        <div className='urcrypto_features_section_image_area_info'>
            <img className='urcrypto_features_info' src={`../Images/${props.section_image}`}/>
        </div>
    </div>
    <div className='urcrypto_features_section_text_area'>
        <h1> {props.heading} </h1>
        <p> {props.content} </p>
    </div>
</div>
    </div>
  )
}

export default Features_sections