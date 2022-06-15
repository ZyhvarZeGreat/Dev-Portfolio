import React from 'react'

const Benefits_description = (props) => {
  return (
    <div className='urcrypto_benefits_description_container'>
     <div className='urcrypto_benefits_description_header'>
     <h4> {props.number} </h4>
     <h1> {props.heading} </h1>
     </div>
     <p> {props.desc} </p>
    </div>
  )
}

export default Benefits_description