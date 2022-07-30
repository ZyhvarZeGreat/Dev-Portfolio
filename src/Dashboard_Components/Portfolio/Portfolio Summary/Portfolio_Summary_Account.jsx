import React from 'react'
import { Bitcoin } from '../imageIndex'
import {UilCircle} from '@iconscout/react-unicons'
const Portfolio_Summary_Account = (props) => {
  return (
    <div>
      {props.svg}
<img src = {`../Images/${props.image}`} alt= "crypto"/>
<p> {props.crypto_desc} </p>
<p> {props.crypto_amount} </p>
    </div>
  )
}

export default Portfolio_Summary_Account
