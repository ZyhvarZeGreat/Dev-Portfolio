import React from 'react'
import './Get_started.css'
import Cards from './Cards' 
import get_started_card_data from './gets_started_card_data' 
 const Get_started = () => {
  const cards = get_started_card_data.map(({index,heading,content,image})=>{
    return (
<Cards index={index} heading={heading} content={content} image={image} />
    )

  })
  return (
    <div className='urcrypto_get_started'>
    <div className='urcrypto_get_started_container'>
      <div className='urcrypto_get_started_header'>
        <h1> get started in just a few minutes</h1>
        <p>  sign up and start trading, it's pretty simple</p>
      </div>
     <div className='urcrypto_get_started_cards'>
     <div className='urcrypto_get_started_cards_wrapper'>
     {cards}
     </div>

     </div>
   
  

    </div>    
    </div>
  )
}
export default Get_started