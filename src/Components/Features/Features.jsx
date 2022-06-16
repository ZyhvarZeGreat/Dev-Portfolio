import React from 'react'
import './Features.css'
import features_data from './features_data'
import Features_sections from './Features_sections.jsx'
const Features = () => {
const features_section = features_data.map(({index,heading,content,image,section_image}) =>{
  return(
    <Features_sections key={index} heading={heading} content={content} image={image} section_image={section_image} />
  )

})
  return (
    <div className='urcrypto_features'> 
    <div className='urcrypto_features_container'>
    {features_section}
    </div>
   
    </div>
  )
}

export default Features