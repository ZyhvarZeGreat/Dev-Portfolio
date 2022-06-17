import React from 'react'

const Cards = (props) => {
  return (
    <div className='urcrypto_get_started_cards_container'>
<img src={`../Images/${props.image}.png`} alt="get started img" />
<h2> {props.heading} </h2>
<p> {props.content} </p>

    </div>
  )
}

export default Cards