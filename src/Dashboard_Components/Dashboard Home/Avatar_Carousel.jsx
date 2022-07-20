import React from 'react'
const Avatar_Carousel = (props) => {
  return (
    <div className='urcrypto_dashboard_home_transactions_transfer_card_avatar_carousel'>
<img style = {{height: '2.5rem', width: '2.5rem' ,borderRadius:'50%'}} className='urcrypto_dashboard_home_transactions_transfer_card_avatar_carousel_items' src = {`../Images/${props.img}`} alt={props.alt} />
    </div>
  )
}

export default Avatar_Carousel