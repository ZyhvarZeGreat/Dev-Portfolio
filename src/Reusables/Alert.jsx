import React from 'react'

const Alert = (props) => {
  return (
    <div className='urcrypto_alert' style={{width: '7rem',height: '3rem',backgroundColor:'#2725e7',}}>
    <p style={{color: 'white', fontSize: '10px',fontFamily:'Inter',}}> {props.error} </p>
    </div>
  )
}

export default Alert