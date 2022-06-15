import React from 'react'

const Hero_stats = (props) => {
  return (
    <div className="urcrypto_hero_stats_container">
    <div className="urcrypto_hero_stats_container_content">
    <h1> {props.number} </h1>
    <p> {props.text} </p>
    </div>
        
    </div>
  )
}

export default Hero_stats