import React from 'react'
import './Features.css'
import features_data from './features_data'
import Features_sections from './Features_sections.jsx'
const Features = () => {
const features_section = features_data.map(({id, className, index,heading,content,image,section_image}) =>{
  return(
    <Features_sections id={id} key={index} className={className} heading={heading} content={content} image={image} section_image={section_image} />
  )

})
  return (
    <div className='urcrypto_features'> 
    {features_section}
    </div>
  )
}

export default Features