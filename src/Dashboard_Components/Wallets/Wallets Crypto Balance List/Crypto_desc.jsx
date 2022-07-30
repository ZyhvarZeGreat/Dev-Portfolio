import React from 'react'

const Crypto_desc = (props) => {
  return (
    <div className='urcrypto_wallet_list_description' style={{display:"flex",height:"3rem", width :"100%", flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
        <img style={{height:"3rem", width:"auto",padding:"none"}}  src = { `../Images/${props.icon}.png`  }/>  
        <p style={{fontWeight:"500", marginLeft:"1rem"}} > {props.cryptoCurrency} </p>
        <p style={{fontWeight:"500", color:"#e5e5e5"}}> {props.cryptoCurrencySymbol} </p>
    </div>
  )
}

export default Crypto_desc