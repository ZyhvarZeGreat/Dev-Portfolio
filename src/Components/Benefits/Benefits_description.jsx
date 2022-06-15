import React from 'react'

const Benefits_description = (props) => {
  return (
    <div className='urcrypto_benefits_description_container'>
    <div className='urcrypto_benefits_description_bullet'>
    <h4> {props.number} </h4>
    </div>
   
     <div className='urcrypto_benefits_description_text'>
     <h2 className='urcrypto_benefits_description_heading'> {props.heading} </h2>
     <p> {props.desc} </p>
     </div>
    
    </div>
  )
}
export default Benefits_description