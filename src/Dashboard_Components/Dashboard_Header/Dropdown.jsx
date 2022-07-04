import React from 'react'

const Dropdown = (props) => {
  return (
    <div className="urcrypto_dashboard_header_dropdown_items">
    <p> {props.itemName} </p>
    <button>{props.icon}</button>
  </div>
  )
}

export default Dropdown