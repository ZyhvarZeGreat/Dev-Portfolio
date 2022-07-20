import React from 'react'

const Fiat_desc = (props) => {
  return (
    <div className='urcrypto_wallet_list_description' style={{display:"flex",height:"3rem", width :"100%", flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
        <p> {props.icon} </p>
        <p> {props.fiatCurrencySymbol} </p>
        <p> {props.fiatCurrency} </p>
    </div>
  )
}

export default Fiat_desc